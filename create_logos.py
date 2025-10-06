#!/usr/bin/env python3
from PIL import Image, ImageDraw, ImageFont
import os

# Logo configurations
logos = {
    'okx.png': {'text': 'OKX', 'bg': '#000000', 'fg': '#FFFFFF'},
    'bitget.png': {'text': 'Bitget', 'bg': '#00D4FF', 'fg': '#FFFFFF'},
    'mexc.png': {'text': 'MEXC', 'bg': '#00B897', 'fg': '#FFFFFF'},
    'twitterx.png': {'text': 'X', 'bg': '#000000', 'fg': '#FFFFFF'},
    'ck.png': {'text': 'CK', 'bg': '#1E3A8A', 'fg': '#FFFFFF'},
    'gate.png': {'text': 'Gate.io', 'bg': '#2354E6', 'fg': '#FFFFFF'},
    'pionex.png': {'text': 'Pionex', 'bg': '#FF6B00', 'fg': '#FFFFFF'},
}

# Create logos
for filename, config in logos.items():
    # Create image
    img = Image.new('RGB', (200, 200), color=config['bg'])
    draw = ImageDraw.Draw(img)
    
    # Try to use a font, fallback to default if not available
    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 60)
    except:
        font = ImageFont.load_default()
    
    # Get text size and position
    text = config['text']
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    position = ((200 - text_width) // 2, (200 - text_height) // 2)
    
    # Draw text
    draw.text(position, text, fill=config['fg'], font=font)
    
    # Save image
    img.save(filename)
    print(f"Created {filename}")

print("All logos created successfully!")

