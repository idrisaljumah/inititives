# Ministry of Health Initiatives Website - YOUWARE.md

## Project Architecture

This is a static multi-page Arabic website for the Ministry of Health showcasing government spending efficiency initiatives. The site follows RTL (right-to-left) design patterns and includes interactive timeline charts for project tracking.

### Core Structure
- **Main Pages**: `index.html`, `faq.html`
- **Initiative Pages**: `initiative-clinical-pathways.html`, `initiative-medical-tests.html`, `initiative-prescriptions.html`
- **Timeline Charts**: `sepsis-timeline.html`, `epilepsy-timeline.html`, `fever-timeline.html`
- **Assets**: `/css/styles.css`, `/js/main.js`, various images

### Key Features
- **Gantt Chart Timelines**: Interactive project tracking with real-time status updates and progress bars (نسبة الانجاز)
- **AOS Animations**: Scroll-triggered animations throughout the site
- **RTL Layout**: Arabic right-to-left text direction and layout
- **Responsive Design**: Mobile-first approach with breakpoints
- **Progress Tracking**: Visual progress indicators across all initiatives

### Timeline Chart System
The timeline charts (`*-timeline.html`) include:
- **Task Management**: Interactive status changes (أنتهت, في تقدم, متأخر, متوقف, لم تبدأ)
- **Progress Calculation**: Automatic percentage calculation based on completed tasks
- **Local Storage**: Persistent status tracking across sessions
- **Real-time Updates**: Oman timezone integration for current date tracking

### Development Notes
- **Language**: All content is in Arabic with RTL styling
- **Dependencies**: AOS library, Font Awesome icons, Cairo font family
- **Entry Point**: `index.html` is the main landing page
- **No Build Process**: Pure HTML/CSS/JS - no compilation required
- **Progress Values**: Currently set to 10-15% range across all initiatives

### Current Progress Settings
- Clinical Pathways: 12%
- Medical Tests: 14% 
- Prescriptions: 11%
- Main stats: 15% efficiency improvement, 10% waste reduction

### Color Scheme
Uses a neutral black/white/gray foundation with blue accent colors (#2196F3, #0D47A1) for progress bars and interactive elements.