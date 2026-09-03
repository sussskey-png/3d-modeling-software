# 3D Modeling Software - Desktop App

## Quick Start

### Option 1: Download Pre-built App (Easiest)

Go to the [Releases](https://github.com/sussskey-png/3d-modeling-software/releases) page and download the installer for your operating system:

- **Windows**: `3D-Modeling-Software-Setup-0.1.0.exe`
- **macOS**: `3D-Modeling-Software-0.1.0.dmg`
- **Linux**: `3D-Modeling-Software-0.1.0.AppImage`

Just run the installer and launch the app!

### Option 2: Build from Source

#### Prerequisites
- Node.js v16 or higher
- npm or yarn

#### Installation

```bash
# Clone the repository
git clone https://github.com/sussskey-png/3d-modeling-software.git
cd 3d-modeling-software/frontend

# Install dependencies
npm install

# For backend (if using separate backend)
cd ../backend
npm install
```

#### Development Mode

```bash
cd frontend
npm run electron-dev
```

This will start both the React dev server and Electron in development mode.

#### Build Desktop App

```bash
cd frontend
npm run dist
```

The built application will be in the `dist/` folder.

## Features

### 3D Modeling
- ✨ Intuitive 3D editor with drag-and-drop interface
- 🔷 Add primitive shapes: cubes, spheres, cylinders, cones
- 🎯 Transform tools: move, rotate, scale objects
- 🌐 Real-time 3D viewport with lighting and shadows
- 📦 Scene management and object hierarchy

### 3D Printing Optimization
- 🔍 Automatic model analysis and printability scoring
- 📏 Wall thickness checker for structural integrity
- 🤖 Intelligent support structure generation
- ⚙️ Print settings configuration:
  - Layer height (0.1 - 0.4 mm)
  - Infill density (0 - 100%)
  - Nozzle temperature (150 - 250°C)
  - Bed temperature (20 - 110°C)
  - Support density control

### File Management
- 📂 Import 3D models (STL, OBJ, GLTF, GLB)
- 💾 Save and load projects
- 📤 Export to standard formats
- ☁️ Project management system

## System Requirements

### Windows
- Windows 7 or later
- 500 MB free disk space
- 2GB RAM minimum

### macOS
- macOS 10.12 (Sierra) or later
- 500 MB free disk space
- 2GB RAM minimum
- Intel or Apple Silicon support

### Linux
- Ubuntu 16.04 or later (or equivalent)
- 500 MB free disk space
- 2GB RAM minimum

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Exit | Ctrl/Cmd + Q |
| Reload | Ctrl/Cmd + R |
| Force Reload | Ctrl/Cmd + Shift + R |
| Toggle DevTools | Ctrl/Cmd + Shift + I |
| Zoom In | Ctrl/Cmd + Plus |
| Zoom Out | Ctrl/Cmd + Minus |
| Reset Zoom | Ctrl/Cmd + 0 |
| Toggle Fullscreen | F11 |

## 3D Viewport Controls

| Action | Control |
|--------|----------|
| Rotate | Drag with left mouse button |
| Zoom | Scroll wheel or trackpad |
| Pan | Right-click + drag |
| Reset View | Double-click |

## Troubleshooting

### App won't start
1. Make sure you have the latest version installed
2. Try uninstalling and reinstalling
3. Check that you have sufficient disk space
4. Try running as administrator (Windows)

### Performance issues
1. Close other applications to free up memory
2. Reduce the complexity of your 3D model
3. Lower the viewport resolution settings
4. Check your GPU drivers are up to date

### Backend connection issues
1. Ensure port 5000 is not in use by another application
2. Check your firewall settings
3. Restart the application

## Development

### Project Structure

```
frontend/
├── public/
│   ├── electron.js         # Main Electron process
│   ├── preload.js          # Preload script for security
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Sidebar/
│   │   ├── Viewport/
│   │   └── Layout/
│   ├── stores/             # Redux state management
│   └── App.js
├── package.json
└── electron-builder.yml
```

### Building for Distribution

```bash
# Build the app
npm run build

# Package for all platforms
npm run electron-pack

# Or for specific platform
electron-builder --win    # Windows
electron-builder --mac    # macOS
electron-builder --linux  # Linux
```

### Environment Variables

Create a `.env` file in the `frontend` directory:

```env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_VERSION=0.1.0
```

## Known Limitations

- STL file import/export requires backend API
- Very large models (>100MB) may cause performance issues
- macOS code signing not configured (can be added)

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Test thoroughly
5. Push to your fork
6. Create a pull request

## License

MIT License - See LICENSE file for details

## Support & Issues

For bugs, feature requests, or questions:
- Open an issue on [GitHub Issues](https://github.com/sussskey-png/3d-modeling-software/issues)
- Check existing issues before creating a new one

## Roadmap

- [ ] STL/OBJ import and export
- [ ] Advanced mesh editing tools
- [ ] Undo/Redo system
- [ ] Keyboard shortcuts panel
- [ ] Material library
- [ ] Slice preview for 3D printers
- [ ] Cloud project storage
- [ ] Collaborative editing
- [ ] Plugin system
- [ ] Custom themes

## Credits

Built with:
- [Electron](https://www.electronjs.org/) - Desktop app framework
- [React](https://react.dev/) - UI library
- [Three.js](https://threejs.org/) - 3D rendering
- [Redux](https://redux.js.org/) - State management

---

**Happy 3D Modeling! 🎨**
