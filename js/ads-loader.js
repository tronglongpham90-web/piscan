/**
 * 广告加载器
 * 用于在页面中动态加载广告
 */

class AdsLoader {
    constructor(apiBaseUrl) {
        this.apiBaseUrl = apiBaseUrl;
        this.token = localStorage.getItem('token');
        this.membershipType = 'free';
        this.loadedAds = new Map();
    }

    /**
     * 加载指定页面的所有广告
     * @param {string} page - 页面名称 (dashboard, detail, notifications等)
     */
    async loadPageAds(page) {
        try {
            const response = await fetch(
                `${this.apiBaseUrl}/api/ads?action=get&page=${page}`,
                {
                    headers: {
                        'Authorization': `Bearer ${this.token || ''}`
                    }
                }
            );

            const data = await response.json();

            if (data.success) {
                this.membershipType = data.membership_type || 'free';

                if (data.ads && data.ads.length > 0) {
                    // 加载多个广告位
                    for (const ad of data.ads) {
                        this.renderAd(ad);
                    }
                    return data.ads.length;
                } else if (data.ad) {
                    // 加载单个广告位
                    this.renderAd(data.ad);
                    return 1;
                } else {
                    console.log('No ads to display for current membership level');
                    return 0;
                }
            }

            return 0;
        } catch (error) {
            console.error('Failed to load ads:', error);
            return 0;
        }
    }

    /**
     * 加载指定位置的广告
     * @param {string} page - 页面名称
     * @param {string} position - 位置 (top, sidebar, bottom等)
     */
    async loadAdByPosition(page, position) {
        try {
            const response = await fetch(
                `${this.apiBaseUrl}/api/ads?action=get&page=${page}&position=${position}`,
                {
                    headers: {
                        'Authorization': `Bearer ${this.token || ''}`
                    }
                }
            );

            const data = await response.json();

            if (data.success && data.ads && data.ads.length > 0) {
                this.renderAd(data.ads[0]);
                return true;
            }

            return false;
        } catch (error) {
            console.error('Failed to load ad:', error);
            return false;
        }
    }

    /**
     * 加载指定ID的广告
     * @param {string} placementId - 广告位ID
     */
    async loadAdById(placementId) {
        try {
            const response = await fetch(
                `${this.apiBaseUrl}/api/ads?action=get&placement_id=${placementId}`,
                {
                    headers: {
                        'Authorization': `Bearer ${this.token || ''}`
                    }
                }
            );

            const data = await response.json();

            if (data.success && data.ad) {
                this.renderAd(data.ad);
                return true;
            }

            return false;
        } catch (error) {
            console.error('Failed to load ad:', error);
            return false;
        }
    }

    /**
     * 渲染广告到页面
     * @param {object} ad - 广告对象
     */
    renderAd(ad) {
        // 查找广告容器
        const container = document.getElementById(`ad-${ad.position}`) || 
                         document.querySelector(`[data-ad-position="${ad.position}"]`) ||
                         document.querySelector(`[data-ad-id="${ad.placement_id}"]`);

        if (!container) {
            console.warn(`Ad container not found for position: ${ad.position}`);
            return;
        }

        // 插入广告代码
        container.innerHTML = ad.ad_code;
        container.style.display = 'block';

        // 记录已加载的广告
        this.loadedAds.set(ad.placement_id, ad);

        console.log(`Ad loaded: ${ad.name} (${ad.placement_id})`);
    }

    /**
     * 隐藏所有广告（用于付费用户）
     */
    hideAllAds() {
        const adContainers = document.querySelectorAll('[id^="ad-"], [data-ad-position], [data-ad-id]');
        adContainers.forEach(container => {
            container.style.display = 'none';
        });
    }

    /**
     * 显示会员升级提示（替代广告）
     */
    showUpgradePrompt(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = `
            <div style="
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 20px;
                border-radius: 10px;
                text-align: center;
                margin: 20px 0;
            ">
                <h3 style="margin: 0 0 10px 0;">🎉 升级会员，享受无广告体验</h3>
                <p style="margin: 0 0 15px 0;">专业版会员无广告，更多功能等你体验</p>
                <a href="/monitor/upgrade.html" style="
                    display: inline-block;
                    background: white;
                    color: #667eea;
                    padding: 10px 30px;
                    border-radius: 5px;
                    text-decoration: none;
                    font-weight: bold;
                ">立即升级</a>
            </div>
        `;
    }

    /**
     * 获取当前会员等级
     */
    getMembershipType() {
        return this.membershipType;
    }

    /**
     * 检查是否应该显示广告
     */
    shouldShowAds() {
        return this.membershipType === 'free';
    }
}

// 全局实例
let adsLoader = null;

/**
 * 初始化广告加载器
 * @param {string} apiBaseUrl - API基础URL
 */
function initAdsLoader(apiBaseUrl) {
    adsLoader = new AdsLoader(apiBaseUrl);
    return adsLoader;
}

/**
 * 自动加载当前页面的广告
 * @param {string} apiBaseUrl - API基础URL
 * @param {string} pageName - 页面名称
 */
async function autoLoadAds(apiBaseUrl, pageName) {
    if (!adsLoader) {
        adsLoader = initAdsLoader(apiBaseUrl);
    }

    // 加载页面广告
    const adsCount = await adsLoader.loadPageAds(pageName);

    // 如果是付费用户，显示升级提示
    if (!adsLoader.shouldShowAds()) {
        console.log('User is premium member, no ads displayed');
    } else {
        console.log(`Loaded ${adsCount} ads for page: ${pageName}`);
    }

    return adsCount;
}

// 导出到全局
if (typeof window !== 'undefined') {
    window.AdsLoader = AdsLoader;
    window.initAdsLoader = initAdsLoader;
    window.autoLoadAds = autoLoadAds;
}

