# ✨ Glow Dots v1

An interactive canvas of glowing dots that respond to your mouse movement. Watch as your cursor lights up a dynamic grid of points with customizable colors and effects.

## 🎨 Features

- **Interactive Dot Grid**: A responsive grid of dots that glow when you hover over them
- **Customizable Glow Colors**: Choose from 4 beautiful glow schemes:
  - Cyan (default)
  - Purple
  - Amber
  - Emerald
- **Customizable Base Colors**: Personalize the dot appearance before hover:
  - White (default)
  - Gray
  - Dark
  - Blue
- **Collapsible Info Panel**: Hide or show the control panel with a smooth quarter-circle toggle button
- **Persistent Preferences**: Your color choices are saved to local storage and restored on reload
- **Reset to Defaults**: One-click button to return to the original cyan glow + white dots combination
- **Smooth Animations**: Fluid transitions and responsive interactions throughout
- **Accessible Design**: Keyboard-friendly controls with focus states

## 🚀 Getting Started

### View Online
Simply open `index.html` in your web browser to start exploring the interactive canvas.

### Local Development
```bash
# Clone the repository
git clone https://github.com/almeidayoel/glow_dots_v1.git
cd glow_dots_v1

# Open in your browser (no build required!)
open index.html
```

## 🎮 How to Use

1. **Move Your Mouse**: Hover over the dot grid to see dots light up
2. **Change Glow Color**: Click any color dot in the "Glow color" section to change the hover effect
3. **Change Base Color**: Click any color in the "Base dot color" section to change how dots appear before hover
4. **Collapse Panel**: Click the minus button (−) in the top-left to minimize the control panel
5. **Expand Panel**: Click the plus button (+) to show the panel again
6. **Reset Colors**: Click "Reset to defaults" to return to cyan glow + white dots

## 🏗️ Project Structure

```
glow_dots_v1/
├── index.html        # Main HTML structure
├── styles.css        # Styling and animations
├── script.js         # Interactive functionality and color management
└── README.md         # This file
```

## 💻 Technical Details

- **Pure HTML/CSS/JavaScript** - No dependencies required
- **CSS Variables** - Dynamic color switching via CSS custom properties
- **Local Storage** - Persistent user preferences
- **Responsive Grid** - Automatically adapts to window size
- **Smooth Animations** - 180ms transitions throughout
- **Accessibility** - ARIA labels and keyboard support

## 🎨 Color Schemes

### Glow Colors
- **Cyan**: Cool, crisp `#67e8f9`
- **Purple**: Soft, elegant `#d8b4fe`
- **Amber**: Warm, golden `#fcd34d`
- **Emerald**: Fresh, vibrant `#6ee7b7`

### Base Dot Colors
- **White**: Classic `rgba(255, 255, 255, 0.74)`
- **Gray**: Subtle `rgba(148, 163, 184, 0.64)`
- **Dark**: Minimal `rgba(51, 65, 85, 0.82)`
- **Blue**: Tinted `rgba(148, 197, 230, 0.68)`

## ✨ Crafted by GitHub Copilot

This interactive experience was created with GitHub Copilot to showcase smooth hover effects, dynamic color management, and an intuitive user interface.

## 📄 License

Feel free to use, modify, and share this project. No license restrictions applied.

---

Enjoy exploring the glowing canvas! 🌟
