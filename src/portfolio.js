const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'CM.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Colin Meinecke',
  role: 'Full Stack Software Engineer',
  description:
    "I'm currently seeking to join and learn from a team that shares my values. As an experienced performing musician and music educator, I am used to frequent collaboration with colleagues, guiding and contributing to teams of all sizes, and working within tightly scheduled timelines while maintaining meticulous attention to detail and having fun. I hope to find those qualities in a position in my new career. Let's chat!",
  resume:
    'https://drive.google.com/file/d/1lJvUmlJ-r96SmPtPSJtamZbYNKDqvjlG/view?usp=sharing',
  social: {
    linkedin: 'https://linkedin.com/in/colin-meinecke',
    github: 'https://github.com/cmeinecke',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Exercise Tracker',
    description: 'A simple full stack application. Authentication coming soon!',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose ODM'],
    sourceCode: 'https://github.com/cmeinecke/MERN-exercise-tracker',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Campsite Review API',
    description: 'Back end application with authentication.',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose ODM'],
    sourceCode: 'https://github.com/cmeinecke/express-generator',
    // livePreview: 'https://github.com',
  },
  {
    name: 'React Native To-Do',
    description: 'Classic to-do app built for iOS and Android.',
    stack: ['React Native', 'Expo', 'Android Studio', 'Xcode'],
    sourceCode: 'https://github.com/cmeinecke/react-native-todo',
    // livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'Python',
  'React',
  'Redux',
  'React Native',
  'Express.js',
  'Node.js',
  'MongoDB',
  'PostgreSQL',
  'Git',
  'CI/CD',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'cmeinecke.com',
}

export { header, about, projects, skills, contact }
