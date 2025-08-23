# Karan's Portfolio Project - README

## Project Overview

This project is a visually rich, animated portfolio website built to showcase various projects with smooth, performance-friendly animations. It features horizontal scroll-based navigation on larger screens and adapts to a vertical scroll layout on mobile devices. The portfolio leverages React, Motion for animation, and modern CSS techniques to deliver a polished and accessible user experience.

***
Live Link:https://karanrjoshiportfolio.netlify.app/

***

## Features

- **Horizontal Scroll Portfolio**: Scroll-driven horizontal transitions with large viewport portfolio items.
- **Responsive Design**: Adapts layout to vertical scroll and stacked content for smaller screen devices.
- **Smooth Animations**: Entrance animations for images and text using Motion React hooks.
- **Scroll Progress Indicator**: Circular progress bar representing scroll progress.
- **Adaptive Performance**: Disables horizontal scroll animations on mobile for natural vertical scrolling.
- **Accessible**: Supports prefers-reduced-motion and uses semantic HTML and aria attributes.
- **Reusable Components**: Modular React components built for flexibility and maintainability.
- **Themed Gradient Backgrounds**: Attractive gradient backgrounds for portfolio items.
- **Mobile Friendly**: Touch-friendly interactions and optimized layout for small screens.

***

## Tech Stack

- **React** - Frontend UI library.
- **Motion (motion/react)** - Animation library for React.
- **CSS3** - Responsive styling and layout.
- **JavaScript (ES6+)** - Coding logic.
- **React Hooks** - State and lifecycle within functional components.

***

## Installation and Setup

1. Clone this repository:

```bash
git clone https://github.com/karan2003/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to:

```
http://localhost:3000
# or the URL your dev server specifies
```

***

## Usage

- Browse horizontally on desktop; scroll down vertically on mobile.
- Click project buttons to view details or visit project URLs.
- Observe smooth fade-in and slide animations as content scrolls into view.
- Watch the scroll progress indicator update dynamically.
- Resize the browser to see responsive behavior and adaptive scroll control.

***

## Customization

- Add new portfolio items by editing the `items` array in `Portfolio.jsx`.
- Update animations by adjusting `imgVariants`, `textVariants` or scroll behavior in `Portfolio.jsx`.
- Modify backgrounds by adding/removing or customizing `.pItem:nth-child()` CSS gradient rules.
- Tweak responsiveness through media queries in `portfolio.css`.
- Replace the progress indicator SVG with custom designs if needed.

***

## Accessibility

- Uses semantic HTML and ARIA where applicable.
- Supports prefers-reduced-motion media feature for users sensitive to animations.
- Buttons and links are keyboard-navigable.
- Responsive font sizes and button sizes for easy interaction on all devices.

***

## Troubleshooting

- If animations aren’t smooth, verify browser GPU acceleration and reduce animation complexity.
- On mobile, if horizontal scroll interferes with usability, the project disables auto horizontal scroll on screen widths below 1024px.
- Ensure all dependency versions (React, Motion) are compatible.
- Check console for any rendering or logic errors.

***

## Contributing

Contributions are welcome! Please open issues or pull requests for improvements or bug fixes.

***

## License

None

***

## Contact

For questions or help, reach out at your-karan.rjoshi13@gmail.com or open an issue on GitHub.

***

This portfolio project delivers a modern and delightful browsing experience, balancing rich animations and mobile usability for an outstanding showcase of your work.
