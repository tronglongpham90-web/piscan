#!/usr/bin/env python3
"""
创建 PiExplorer Logo
紫色背景 + 白色圆圈 + 紫色 π 符号
"""

from PIL import Image, ImageDraw, ImageFont
import os

def create_piexplorer_logo(size, filename):
    """
    创建 PiExplorer logo

    Args:
        size: 图片尺寸 (正方形)
        filename: 输出文件名
    """
    # 创建图片 - 紫色背景
    img = Image.new('RGB', (size, size), color='#8B5CF6')  # 紫色背景
    draw = ImageDraw.Draw(img)

    # 绘制白色圆形
    circle_margin = size // 4  # 圆形边距
    circle_bbox = [circle_margin, circle_margin, size - circle_margin, size - circle_margin]
    draw.ellipse(circle_bbox, fill='white', outline='white', width=2)

    # 绘制 π 符号
    try:
        # 尝试使用系统字体
        font_size = int(size * 0.35)  # π 符号大小
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", font_size)
    except:
        try:
            # 尝试其他常见字体路径
            font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", int(size * 0.35))
        except:
            # 使用默认字体
            font = ImageFont.load_default()

    # π 符号
    text = "π"

    # 获取文本尺寸
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]

    # 居中位置
    x = (size - text_width) // 2
    y = (size - text_height) // 2 - bbox[1]

    # 绘制紫色 π 符号
    draw.text((x, y), text, fill='#8B5CF6', font=font)

    # 保存图片
    img.save(filename)
    print(f"✅ 创建 {filename} ({size}x{size})")

def main():
    """主函数"""
    print("🎨 开始创建 PiExplorer Logo...")
    print()
    
    # 创建不同尺寸的 logo
    logos = [
        (64, 'favicon.png'),
        (192, 'logo192_1.png'),
        (512, 'logo512_1.png'),
    ]
    
    for size, filename in logos:
        create_piexplorer_logo(size, filename)
    
    # 同时在 assets 目录创建
    os.makedirs('assets', exist_ok=True)
    for size, filename in logos:
        create_piexplorer_logo(size, f'assets/{filename}')
    
    print()
    print("🎉 所有 Logo 创建完成！")
    print()
    print("📁 创建的文件:")
    print("   - favicon.png (64x64)")
    print("   - logo192_1.png (192x192)")
    print("   - logo512_1.png (512x512)")
    print("   - assets/favicon.png (64x64)")
    print("   - assets/logo192_1.png (192x192)")
    print("   - assets/logo512_1.png (512x512)")

if __name__ == '__main__':
    main()

