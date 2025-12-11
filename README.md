# Swasthya Sarathi

Your complete healthcare companion. Find doctors, hospitals, labs, medical stores, ambulance services, and blood banks — all in one place.

## Features

- **Find Hospitals** - Discover nearby hospitals with detailed info about departments and specializations
- **Doctor Search** - Find specialists with their schedules, availability, and consultation timings
- **Book Appointments** - Schedule appointments with your preferred doctors at convenient time slots
- **Lab Services** - Locate diagnostic labs, compare prices, and book tests with home collection
- **Medical Stores** - Find pharmacies near you with medicine availability and doorstep delivery
- **Emergency Services** - Quick access to ambulance services when every second counts
- **Blood Banks** - Search blood banks by blood group and connect instantly in emergencies
- **Video Consultation** - Connect with doctors virtually from the comfort of your home

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Package Manager**: pnpm
- **React**: v19

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/swasthya-sarathi.git

# Navigate to project directory
cd swasthya-sarathi

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |

## Project Structure

```
swasthya-sarathi/
├── app/
│   ├── globals.css    # Global styles with Tailwind and theme variables
│   ├── layout.tsx     # Root layout with font configuration
│   └── page.tsx       # Landing page
├── public/            # Static assets
└── package.json
```

## License

MIT
