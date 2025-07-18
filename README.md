# ScanFeast

A modern, QR-powered restaurant menu app built with Next.js, React, and Tailwind CSS.

## Features

- Digital menu with categories and food items
- Search and filter menu items
- QR code generation for easy menu access
- Food item detail pages with ratings and descriptions
- Mobile-friendly responsive design
- Built with Next.js App Router, pnpm, and TypeScript

## Project Structure

<code>
ScanFeast/
├── app/           # Next.js app directory (routes, pages, layouts)
├── components/    # Reusable React components (UI, menu, cards, et)
├── hooks/         # Custom React hooks
├── lib/           # Data and utility functions (menu, food data)
├── public/        # Static assets (images, icons, etc.)
├── styles/        # Global styles (Tailwind CSS)
</code>

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [pnpm](https://pnpm.io/) (recommended) or npm/yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yashumak/ScanFeast---Scan-to-see-menu.git
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

## Customization

- Update menu and food data in `lib/food-data.ts` and `lib/menu-data.ts`
- Replace or add images in the `public/` directory
- Customize styles in `styles/globals.css` and `tailwind.config.ts`

## Deployment

### Deploying to Vercel (Recommended)

1. Push your code to GitHub, GitLab, or Bitbucket.
2. Go to [vercel.com](https://scanfeast-scan-to-see-menu.vercel.app/), sign up/log in, and import your repository.
3. Vercel will auto-detect Next.js and deploy your app.

### Other Hosting

You can also deploy to Netlify, your own server, or any platform that supports Node.js and Next.js.

## License

MIT
