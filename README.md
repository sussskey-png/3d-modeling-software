# 3D Modeling Software

A user-friendly 3D modeling application designed specifically for 3D printing enthusiasts and professionals. Create, edit, and prepare 3D models for printing with an intuitive interface.

## Features

- **Intuitive 3D Editor**: Easy-to-use interface for creating and modifying 3D models
- **3D Printing Optimization**: Built-in tools for preparing models for 3D printing
  - Wall thickness checking
  - Support generation
  - Model analysis and repair
- **Model Library**: Pre-built shapes and components for quick model creation
- **File Format Support**: Import/export common 3D formats (STL, OBJ, GLTF)
- **Real-time Preview**: See your model as you build it
- **Print Settings**: Configure print parameters (layer height, infill, supports)
- **Model Analysis**: Check printability before sending to printer

## Tech Stack

- **Frontend**: React + Three.js (3D rendering)
- **Backend**: Node.js/Express
- **3D Engine**: Three.js
- **File Processing**: three-stl-loader, obj-loader
- **State Management**: Redux
- **Build Tool**: Webpack/Vite

## Project Structure

```
3d-modeling-software/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── stores/
│   │   └── utils/
│   └── package.json
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── package.json
├── docs/
└── README.md
```

## Installation

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/sussskey-png/3d-modeling-software.git
cd 3d-modeling-software

# Install dependencies
cd frontend && npm install
cd ../backend && npm install
cd ..

# Start development server
npm run dev
```

## Getting Started

1. Open the application in your browser
2. Create a new project or import an existing model
3. Use the toolbar to add shapes or import custom models
4. Configure print settings in the Print Settings panel
5. Export your model as STL/OBJ for your 3D printer

## Development

```bash
# Start frontend development server
cd frontend && npm start

# Start backend API server
cd backend && npm start

# Run tests
npm test

# Build for production
npm run build
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT

## Support

For issues, questions, or suggestions, please open an issue on GitHub.
