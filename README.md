# Nishidh Jasani - Personal Portfolio

A clean, professional portfolio website showcasing Nishidh Jasani's work and skills.

## Features

- 🌓 Dark/Light mode toggle with local storage persistence
- 📱 Fully responsive design for all screen sizes
- 🎨 Professional UI with smooth animations
- 📊 Animated skill bars and project cards
- 📝 Contact form with validation
- 🔗 Social media integration
- 🚀 Smooth scroll navigation

## Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles/
│   └── main.css       # Main stylesheet
├── js/
│   └── main.js        # JavaScript functionality
└── assets/            # Images and other assets
```

## Required Assets

Please add the following images to your `assets` folder:
- `nishidh-jasani.jpg`: Your profile picture (already provided)
- `project1.jpg`, `project2.jpg`, `project3.jpg`: Screenshots of your projects (recommended size: 800x500px)

## GitHub Projects Featured

1. **ClothLoop** - A sustainable fashion web application
   - GitHub: [https://github.com/NishidhJasani1605/ClothLoop](https://github.com/NishidhJasani1605/ClothLoop)

2. **HRIMWellness** - A wellness application
   - GitHub: [https://github.com/NishidhJasani1605/HRIMWellness](https://github.com/NishidhJasani1605/HRIMWellness)

3. **DataVizPro** - A powerful data visualization tool (Collaboration)
   - GitHub: [https://github.com/aaditya-desai1/DataVizPro](https://github.com/aaditya-desai1/DataVizPro)
   - Demo: [https://datavizpro-seven.vercel.app](https://datavizpro-seven.vercel.app)

## Customization Guide

### 1. Personal Information
Edit the following in `index.html`:
- Update your contact email and location
- Modify the About Me section content
- Add your social media links

### 2. Projects
If you have new projects to add, modify the projects array in `js/main.js`:
```javascript
const projects = [
    {
        title: 'Your Project Title',
        image: 'assets/project-image.jpg',
        description: 'Project description',
        tech: ['Technology1', 'Technology2'],
        demo: 'demo-link',
        github: 'github-link'
    },
    // Add more projects...
];
```

### 3. Skills
Update your skills in `js/main.js` if you gain new ones:
```javascript
const technicalSkills = [
    { name: 'Skill Name', level: 85 },
    // Add more skills...
];

const softSkills = [
    'Skill 1',
    'Skill 2',
    // Add more skills...
];
```

## Getting Started

1. Add your project screenshots to the `assets` folder
2. Update your personal information in the HTML and JavaScript files
3. Test the website locally by opening `index.html` in a browser
4. Deploy to your preferred hosting platform (GitHub Pages recommended)

## Color Scheme

The website uses a professional color palette:

### Light Mode
- Background: #F9FAFB (Off-White)
- Primary Text: #111827 (Very Dark Gray)
- Accent Color: #2563EB (Bright Blue)

### Dark Mode
- Background: #0F172A (Charcoal Navy)
- Primary Text: #F8FAFC (Almost White)
- Accent Color: #3B82F6 (Sky Blue)

You can customize this in the `:root` variables in `styles/main.css`.

## Browser Support

The website is compatible with all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Credits

- Font Awesome for icons
- Google Fonts (Inter) for typography
- Intersection Observer API for scroll animations 