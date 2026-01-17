# Recovery 360 - Complete Recovery Ecosystem

A comprehensive web application designed to support individuals in their substance use recovery journey through assessment, support networks, resources, goal tracking, and crisis support.

![Recovery 360 Dashboard](https://github.com/user-attachments/assets/fc05b157-36db-4d44-94e4-1029251a755d)

## Features

### 📊 Dashboard
- Track days in recovery
- Monitor support session attendance
- View goal achievement progress
- See recent milestones and accomplishments

### 📋 Assessment
- Interactive recovery assessment with progress tracking
- Personalized recommendations based on responses
- Track progress through evidence-based evaluation questions
- Identify strengths and areas for growth

![Recovery 360 Assessment](https://github.com/user-attachments/assets/e46101ba-05ce-44e4-bcc7-6f1637e1f0e1)

### 🤝 Support Network
- Manage support contacts (sponsors, therapists, groups, family)
- Quick access to support resources
- Add and organize support contacts by type
- View availability and contact information

### 📚 Resources
- Educational materials (articles, videos, PDFs, audio)
- Links to support organizations (SAMHSA, AA, NA, SMART Recovery)
- Recovery tools and apps
- Recommended reading list

### 🎯 Goals & Milestones
- Set and track recovery goals
- Monitor progress with visual indicators
- Celebrate completed achievements
- Track recovery milestones (1 day, 7 days, 30 days, 90 days, etc.)

### 🚨 Crisis Support
- 24/7 crisis hotline numbers
- Emergency coping strategies
- Grounding techniques and immediate interventions
- Warning signs to watch for

## Technology Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: CSS3 with responsive design
- **Icons**: Emoji-based for universal accessibility

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Akgosil3/PreRecoveryPath.git
cd PreRecoveryPath
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
PreRecoveryPath/
├── src/
│   ├── components/
│   │   ├── Dashboard.tsx       # Main dashboard with metrics
│   │   ├── Assessment.tsx      # Interactive assessment module
│   │   ├── SupportNetwork.tsx  # Support contacts management
│   │   ├── Resources.tsx       # Educational resources
│   │   ├── Goals.tsx          # Goal and milestone tracking
│   │   └── CrisisSupport.tsx  # Crisis intervention resources
│   ├── App.tsx                # Main application component
│   ├── App.css                # Application styles
│   └── main.tsx               # Application entry point
├── index.html                 # HTML template
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite configuration
└── README.md                 # This file
```

## Key Features in Detail

### Responsive Design
The application is fully responsive and works seamlessly on desktop, tablet, and mobile devices.

### Privacy Focused
All data is stored locally in the user's browser. No personal information is transmitted to external servers.

### Accessible
- High contrast color scheme for readability
- Clear navigation with visual indicators
- Emoji-based icons for universal understanding
- Screen reader friendly structure

### Evidence-Based
- Incorporates proven recovery assessment methods
- Includes recognized crisis hotlines and resources
- Features evidence-based coping strategies
- Aligns with substance use disorder treatment best practices

## Important Resources

### Crisis Hotlines
- **SAMHSA National Helpline**: 1-800-662-4357 (24/7)
- **National Suicide Prevention Lifeline**: 988 (24/7)
- **Crisis Text Line**: Text HOME to 741741 (24/7)

### Support Organizations
- Substance Abuse and Mental Health Services Administration (SAMHSA)
- Alcoholics Anonymous (AA)
- Narcotics Anonymous (NA)
- SMART Recovery

## Contributing

This is an educational curriculum project focused on substance use assessment and prevention. Contributions that enhance the recovery support features are welcome.

## License

ISC

## Acknowledgments

Built to support individuals on their recovery journey with compassionate, evidence-based resources and tools.

---

**Note**: This application is designed as a supportive tool and is not a replacement for professional medical advice, diagnosis, or treatment. If you or someone you know is struggling with substance use, please seek help from qualified healthcare professionals. 
