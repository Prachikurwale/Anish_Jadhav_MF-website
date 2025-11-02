# 🌟 Anish Jadhav Memorial Foundation (AJMF) Website Frontend 🌟
## Project Overview

This is the official frontend repository for the **Anish Jadhav Memorial Foundation (AJMF) Skilling Institute** website.

The website's primary goal is to showcase the foundation's mission—empowering underprivileged youth through skills training—and to highlight the facilities, residential programs (in collaboration with NavGurukul), and opportunities for partnership and donation.

The design emphasizes a clean, modern, and trustworthy aesthetic, featuring key sections like an interactive campus tour, a "Day in the Life" routine, and transparent details on infrastructure and sustainability.

## 🚀 Key Features

* **Responsive Design:** Built using React and Tailwind CSS for optimal viewing on all devices.
* **Visual Campus Tour:** An attractive, interactive photo gallery with hover effects to showcase the campus.
* **Holistic Experience:** Detailed sections covering the daily residential life, including academics, meals, and cultural activities.
* **Modern UI:** Utilizes a professional color palette (Saffron, White, Dark Gray) and dynamic components (3D hover cards, sticky capacity bar).
* **Technology Stack:** Developed using modern JavaScript/React and bundled with Vite.

## 🛠 Tech Stack

* **Framework:** [React](https://react.dev/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Language:** JavaScript (JSX)

## 💻 Getting Started (Local Setup)

Follow these steps to get the project up and running on your local machine.

### Prerequisites

You must have [Node.js](https://nodejs.org/en) (which includes npm) installed.

### 1. Clone the repository

```bash
git clone <YOUR_REPOSITORY_URL>
cd AJMF_WEBSITE_FRONTEND
2. Install Dependencies
Install all necessary packages using npm:

Bash

npm install
# or if you prefer yarn
# yarn install
3. Run the Development Server
Start the local development server:

Bash

npm run dev
# or yarn dev
The site will typically open at http://localhost:5173/ (or another port specified by Vite).

📂 Project Structure
The project follows a standard modern React structure:

AJMF_WEBSITE_FRONTEND/
├── public/
│   ├── images/         # All static assets (AJMF.jpeg, classroom.jpeg, etc.)
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── layout/     # Header, Footer
│   │   ├── reusable/   # SectionHeader, FeatureCard, RoutineStep
│   │   └── specific/   # Components unique to one page (e.g., Hero.jsx)
│   ├── pages/          # Main route components (Campus.jsx, Home.jsx, About.jsx)
│   ├── App.css         # Global styles (including Tailwind imports and custom classes)
│   └── App.jsx         # Main application file
└── ...
🎨 Design and Customization
The core UI styling is controlled in src/App.css. If you wish to customize the color scheme or hover effects:

Colors: Look for custom CSS variables or classes like .text-ajmf-primary, .bg-ajmf-secondary, etc., in your global stylesheet.

Images: To change the gallery images, update the background-image: url(...) paths within the .image-placeholder-* classes in src/App.css. Ensure new images are placed in the /public/images folder.

3D Hover: The 3D effect on the Feature Cards is managed by the FeatureCard component in conjunction with the custom [perspective:1000px] and group-hover:rotate-x-3 classes in src/App.css.

🤝 Contribution
We welcome contributions to help improve the AJMF website!

Fork the repository.

Create a new feature branch (git checkout -b feature/AmazingFeature).

Commit your changes (git commit -m 'Add some AmazingFeature').

Push to the branch (git push origin feature/AmazingFeature).

Open a Pull Request.
