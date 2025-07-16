# ScanFeast

A modern, QR-powered restaurant menu app built with Next.js, React, and Tailwind CSS.

## Features
- Digital menu with categories and food items
- QR code generation for easy menu access
- User reviews and ratings
- Mobile-friendly responsive design
- Built with Next.js App Router, pnpm, and TypeScript

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [pnpm](https://pnpm.io/) (recommended) or npm/yarn

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/scanfeast.git
   cd scanfeast
   ```
2. Install dependencies:
   ```sh
   pnpm install
   # or
   npm install
   ```

### Development
Start the development server:
```sh
pnpm dev
# or
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production
```sh
pnpm build
# or
npm run build
```

### Running in Production
```sh
pnpm start
# or
npm start
```

## Deployment

### Deploying to Vercel (Recommended)
1. Push your code to GitHub, GitLab, or Bitbucket.
2. Go to [vercel.com](https://vercel.com), sign up/log in, and import your repository.
3. Vercel will auto-detect Next.js and deploy your app.
4. Set environment variables in the Vercel dashboard if needed.

### Other Hosting
You can also deploy to Netlify, your own server, or any platform that supports Node.js and Next.js.

## Project Structure
- `app/` - Next.js app directory (pages, layouts, routes)
- `components/` - Reusable React components
- `lib/` - Data and utility functions
- `public/` - Static assets (images, favicon, etc.)
- `styles/` - Global styles (Tailwind CSS)

## Customization
- Update menu data in `lib/menu-data.ts` and `lib/food-data.ts`
- Replace placeholder images in `public/`
- Customize styles in `styles/globals.css` and `tailwind.config.ts`

## License
MIT 