
# JobHunty - Job Listing Platform

A modern job listing platform built with React, TypeScript, and Tailwind CSS.

## Project Setup

### Prerequisites
- Node.js (v14 or newer)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/jobhunty.git
cd jobhunty
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## Project Structure

- `/src` - Main source code
  - `/components` - Reusable UI components
  - `/pages` - Page components
  - `/data` - Mock data files
  - `/lib` - Utility functions
  - `/hooks` - Custom React hooks

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Adding Images

When adding new company logos or images:

1. Place SVG/PNG logos in `/public/images/company-logos/`
2. Update references in `src/data/mockData.ts`
3. For hero images or mockups, place them in `/public/images/`

## Troubleshooting

If images aren't loading:
- Check that the path is correct in the code
- Ensure images exist in the correct directory
- Verify that the image format is supported (SVG, PNG, JPG)

## License

MIT
