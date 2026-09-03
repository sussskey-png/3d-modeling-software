# 3D Modeling Software - Complete Setup Guide

## Quick Start

### Prerequisites
- Node.js v16 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/sussskey-png/3d-modeling-software.git
cd 3d-modeling-software

# Install backend dependencies
cd backend
npm install
cd ..

# Install frontend dependencies
cd frontend
npm install
cd ..
```

### Running the Application

#### Terminal 1 - Start Backend Server
```bash
cd backend
npm start
# Server will run on http://localhost:5000
```

#### Terminal 2 - Start Frontend Development Server
```bash
cd frontend
npm start
# App will open at http://localhost:3000
```

## Features

### 3D Modeling
- **Primitive Shapes**: Add cubes, spheres, cylinders, and cones
- **Transformation Tools**: Move, rotate, and scale objects
- **Scene Management**: Select, delete, and organize objects
- **Real-time Preview**: 3D viewport with lighting and shadows

### 3D Printing Optimization
- **Model Analysis**: Automatically check model quality and printability
- **Wall Thickness Checker**: Ensure walls are thick enough for printing
- **Support Generation**: Automatically generate support structures
- **Print Settings**: Configure layer height, infill density, temperatures
- **Material Calculator**: Estimate weight and material usage

### File Management
- **Import/Export**: Support for STL, OBJ, GLTF, and GLB formats
- **Project Management**: Save and load your projects
- **File Upload**: Upload existing 3D models to work with

## Project Structure

```
3d-modeling-software/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header/
│   │   │   ├── Sidebar/
│   │   │   ├── Viewport/
│   │   │   └── Layout/
│   │   ├── stores/
│   │   │   ├── slices/
│   │   │   └── store.js
│   │   └── App.js
│   └── package.json
├── backend/
│   ├── routes/
│   │   ├── fileRoutes.js
│   │   ├── analysisRoutes.js
│   │   └── projectRoutes.js
│   ├── server.js
│   └── package.json
└── README.md
```

## Technology Stack

### Frontend
- React 18
- Three.js (3D rendering)
- React Three Fiber
- Redux (state management)
- CSS3

### Backend
- Node.js/Express
- Multer (file uploads)
- CORS

## Key Features by Category

### Modeling
- Intuitive UI with sidebar toolbar
- Add and manipulate 3D primitives
- Real-time 3D preview
- Object hierarchy and management

### Printing Optimization
- Printability scoring
- Wall thickness analysis
- Automatic support generation
- Print time estimation
- Material weight calculator

### File Handling
- Upload models
- Download projects as files
- Project save/load
- Multiple format support

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Development

### Available Scripts

**Frontend:**
```bash
npm start      # Start dev server
npm build      # Build for production
npm test       # Run tests
```

**Backend:**
```bash
npm start      # Start server
npm run dev    # Start with auto-reload
npm test       # Run tests
```

## API Documentation

See `backend/README.md` for complete API endpoint documentation.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT License - see LICENSE file for details

## Support

For issues and questions:
- Open an issue on GitHub
- Check existing documentation
- Review the backend/README.md for API details

## Roadmap

- [ ] Advanced mesh editing tools
- [ ] STL/OBJ file import and export
- [ ] Undo/Redo system
- [ ] Keyboard shortcuts
- [ ] Material library
- [ ] Slice preview for 3D printers
- [ ] Cloud project storage
- [ ] Collaborative editing

## Authors

Created with ❤️ for 3D printing enthusiasts
