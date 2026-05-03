export const personalInfo = {
  name: 'Rania Chokri',
  title: 'Ingénieure en Génie Logiciel',
  email: 'chokrirania5544@gmail.com',
  phone: '+216 24 952 041',
  linkedin: 'www.linkedin.com/in/rania-chokri-877597399',
  location: 'Tunisie',
  summary: `Ingénieure en Génie Logiciel passionnée par le développement d'applications web modernes et l'intégration de solutions d'intelligence artificielle. Spécialisée en architecture .NET, Angular et React, avec une solide expérience en bases de données SQL/NoSQL et en déploiement Docker. À la recherche de nouveaux défis techniques pour concevoir des solutions innovantes et performantes.`
}

export const publications = [
  {
    id: 1,
    title: 'Secure IoT Assistant-Based System for Alzheimer\'s Disease',
    journal: 'IEEE Access',
    conference: 'IEEE Access Journal',
    year: '2022',
    doi: '10.1109/ACCESS.2022.3168311',
    url: 'https://ieeexplore.ieee.org/document/9741322',
    abstract: `This paper presents a secure IoT assistant-based system designed to assist patients with Alzheimer's disease. The proposed system integrates IoT devices with an intelligent assistant to monitor patient activities, ensure their safety, and provide real-time assistance. The architecture emphasizes security protocols to protect sensitive medical data while enabling seamless communication between caregivers, patients, and the IoT infrastructure. The system leverages machine learning techniques for behavior analysis and anomaly detection, contributing to improved quality of life for Alzheimer's patients and their families.`,
    keywords: ['IoT', 'Alzheimer\'s Disease', 'Security', 'Assistant System', 'Healthcare', 'Machine Learning'],
    citations: 15,
    authors: 'R. Chokri, W. Hanini, W.B. Daoud, S.A. Chelloug, A.M. Makhlouf',
    volume: '10',
    pages: '44305-44314'
  }
]

export const experiences = [
  {
    id: 1,
    role: 'Stage Ingénieur',
    company: 'Créative Plateforme',
    location: 'Ariana, Tunisie',
    period: 'Juin 2025 – Octobre 2025',
    description: `Développement d'une plateforme web sécurisée de gestion des patients et des médecins, intégrant un module d'intelligence artificielle (NLP) pour l'analyse et l'assistance intelligente des données médicales.`,
    technologies: ['Angular', '.NET', 'PostgreSQL', 'NLP', 'REST API'],
    type: 'stage'
  },
  {
    id: 2,
    role: 'Stage d\'Initiation',
    company: 'TUNISIE TÉLÉCOM',
    location: 'Tunisie',
    period: 'Août 2017 – Septembre 2017',
    description: `Participation à la planification et à l'exécution d'événements corporatifs. Installation, configuration et maintenance de routeurs réseau.`,
    technologies: ['TCP/IP', 'DHCP', 'DNS', 'Réseaux'],
    type: 'stage'
  },
  {
    id: 3,
    role: 'Stage d\'Initiation',
    company: 'TUNISIE TÉLÉCOM',
    location: 'Tunisie',
    period: 'Août 2016 – Septembre 2017',
    description: `Gestion de l'inscription des participants, coordination des fournisseurs et résolution de problèmes en temps réel lors d'événements techniques.`,
    technologies: ['TCP/IP', 'DHCP', 'Excel', 'Gestion d\'événements'],
    type: 'stage'
  }
]

export const projects = [
  {
    id: 1,
    title: 'MedHealth',
    category: 'Santé / IA',
    description: `Plateforme web de suivi médical avec architecture moderne permettant la gestion sécurisée des dossiers médicaux, des patients et des médecins. Intègre un chatbot intelligent basé sur du NLP pour analyser les symptômes et assister dans la détection de l'état de santé.`,
    technologies: ['.NET', 'REST API', 'Python', 'PostgreSQL', 'Docker', 'Git', 'NLP'],
    highlights: ['Chatbot IA', 'Sécurité HIPAA', 'Architecture microservices'],
    github: '#',
    demo: '#'
  },
  {
    id: 2,
    title: 'Hotel Booking System',
    category: 'E-commerce',
    description: `Application web de réservation d'hôtels permettant aux utilisateurs de rechercher des chambres, effectuer des réservations en ligne et gérer leurs réservations. Espace administrateur pour la gestion des hôtels et des disponibilités.`,
    technologies: ['Django', 'Django REST Framework', 'SQLite', 'MySQL', 'Bootstrap', 'Git'],
    highlights: ['Paiement en ligne', 'Gestion des disponibilités', 'Panel admin'],
    github: '#',
    demo: '#'
  },
  {
    id: 3,
    title: 'Système Para-tournesol Intelligent IoT',
    category: 'IoT / Embarqué',
    description: `Conception d'un dispositif connecté IoT permettant l'assistance à distance et la collecte de données en temps réel avec une communication sécurisée entre les capteurs et la plateforme de contrôle.`,
    technologies: ['IoT', 'Raspberry Pi', 'MQTT', 'Capteurs', 'Python'],
    highlights: ['Temps réel', 'Communication sécurisée', 'Énergie solaire'],
    github: '#',
    demo: '#'
  }
]

export const skills = {
  languages: [
    { name: 'Python', level: 85 },
    { name: 'JavaScript', level: 90 },
    { name: 'C# / .NET', level: 88 },
    { name: 'PHP', level: 70 },
    { name: 'SQL', level: 85 }
  ],
  frontend: [
    { name: 'React', level: 90 },
    { name: 'Angular', level: 85 },
    { name: 'Bootstrap', level: 80 },
    { name: 'Tailwind CSS', level: 88 },
    { name: 'HTML/CSS', level: 92 }
  ],
  backend: [
    { name: '.NET Core', level: 88 },
    { name: 'Node.js', level: 82 },
    { name: 'Django', level: 75 },
    { name: 'Spring Boot', level: 70 },
    { name: 'REST API', level: 90 }
  ],
  databases: [
    { name: 'MySQL', level: 88 },
    { name: 'PostgreSQL', level: 85 },
    { name: 'SQL Server', level: 80 },
    { name: 'MongoDB', level: 75 }
  ],
  tools: [
    { name: 'Docker', level: 82 },
    { name: 'Git / GitHub', level: 90 },
    { name: 'Swagger', level: 80 },
    { name: 'NLP / IA', level: 78 },
    { name: 'FlutterFlow', level: 70 }
  ]
}

export const education = [
  {
    id: 1,
    degree: 'Cycle Ingénieur en Informatique',
    specialization: 'Génie Logiciel et Systèmes d\'Information',
    school: 'Tek-Up University',
    location: 'Tunis',
    period: '2023 – 2025',
    status: 'Terminé'
  },
  {
    id: 2,
    degree: 'Master de Recherche',
    specialization: 'Télécommunications et Systèmes de Réseaux',
    school: 'ENET\'COM',
    location: 'Sfax',
    period: '2019 – 2021',
    status: 'Terminé'
  },
  {
    id: 3,
    degree: 'Licence Fondamentale',
    specialization: 'Sciences et Technologies de l\'Information et de la Communication',
    school: 'ISSAT Gafsa',
    location: 'Gafsa',
    period: '2016 – 2019',
    status: 'Terminé'
  }
]

export const qualities = [
  'Esprit d\'analyse',
  'Adaptabilité',
  'Autonomie',
  'Résolution de problèmes',
  'Travail en équipe',
  'Communication'
]
