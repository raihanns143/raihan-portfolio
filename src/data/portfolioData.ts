export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  allTechnologies: string[];
  githubUrl: string;
  liveUrl?: string;
  details: {
    overview: string;
    problem: string;
    solution: string;
    features: string[];
    role: string;
    challenges: string;
    results: string;
  };
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Abu Raihan',
    fullName: 'Abu Raihan',
    title: 'Diploma Engineer & Tech Developer',
    headline: "Hi, I'm Abu Raihan.",
    subheadline: 'Diploma Engineer & Tech Developer.',
    shortDescription: 'I build practical web applications, digital products, and IoT systems.',
    location: 'Bangladesh',
    institution: 'Bangladesh Polytechnic Institute, Rajshahi',
    degree: 'Diploma in Computer Science & Technology',
    focus: 'Web Development · Networking · IoT',
    phone: '01619887937',
    
    // Verified user links
    social: {
      github: 'https://github.com/raihanns143',
      linkedin: 'https://www.linkedin.com/in/iamraihanns/',
      facebook: 'https://www.facebook.com/iamraihanns',
      email: 'raihanns143@gmail.com',
      portfolioUrl: 'https://iamraihan.xo.je',
      cvDownloadUrl: '/MD_Abu_Raihan_CV.pdf',
    },
    cvUrl: '/MD_Abu_Raihan_CV.pdf',
  },

  about: {
    paragraphs: [
      'I have a strong foundation in Computer Science & Technology from Bangladesh Polytechnic Institute, Rajshahi, with a genuine interest in building practical software that solves real-world problems.',
      'My interests span full-stack web development, network monitoring, and IoT systems. I enjoy understanding how systems work end-to-end—from front-end interfaces and backend APIs to local network packets and microcontroller hardware.',
      'I learn primarily by building real projects. Rather than focusing only on theory, I spend my time coding, testing, debugging, and continuously improving functional applications.',
    ],
    infoRow: {
      education: 'Diploma in Computer Science & Technology',
      institution: 'Bangladesh Polytechnic Institute, Rajshahi',
      location: 'Bangladesh',
      focus: 'Web Development · Networking · IoT',
    },
  },

  projects: [
    {
      id: 'bloodon',
      slug: 'bloodon',
      title: 'BloodOn',
      category: 'Full-Stack Web Application',
      description:
        'A modern blood donation platform designed to connect people who need blood with potential donors.',
      technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'Auth.js'],
      allTechnologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Auth.js', 'Tailwind CSS'],
      githubUrl: 'https://github.com/raihanns143/bloodon',
      liveUrl: 'https://bloodon.vercel.app/',
      details: {
        overview:
          'BloodOn is a full-stack platform designed to help patients quickly connect with verified, eligible blood donors in emergency situations.',
        problem:
          'During medical emergencies, families frequently struggle to find compatible blood donors in time, relying on unstructured social media posts with unverified contact information.',
        solution:
          'A centralized web application with a verified donor directory, location and blood-group filtering, emergency request dispatches, and donor availability management.',
        features: [
          'Emergency blood request dispatch with hospital location and urgency tags',
          'Searchable donor directory filtered by blood group and geographic district',
          'Donor eligibility tracking (safeguards post-donation recovery intervals)',
          'Secure authentication and donor privacy controls',
          'Responsive, high-contrast interface designed for quick access on mobile devices',
        ],
        role: 'Full-Stack Developer (Engineered application architecture, Next.js App Router, Prisma ORM schema, and UI components)',
        challenges:
          'Designing an efficient relational schema for fast donor matching queries while ensuring sensitive donor contact information remains private.',
        results:
          'A functional, production-ready web application providing a streamlined channel for community blood donation.',
      },
    },
    {
      id: 'network-monitor',
      slug: 'network-monitor',
      title: 'Smart Network Monitoring & Device Tracker',
      category: 'Network Monitoring / Web Application',
      description:
        'A network monitoring and device tracking system for discovering devices and auditing local network activity.',
      technologies: ['Python', 'Flask', 'MySQL', 'Scapy'],
      allTechnologies: ['Python', 'Flask', 'MySQL', 'Scapy', 'Psutil', 'SQLAlchemy', 'Bootstrap', 'Chart.js'],
      githubUrl: 'https://github.com/raihanns143/Smart-network-monitor',
      details: {
        overview:
          'A network diagnostic and device tracking system that audits local subnet activity, discovers connected devices via ARP probing, and presents traffic data through a web interface.',
        problem:
          'Local area networks frequently lack lightweight, accessible tools to detect unrecognized devices and monitor bandwidth bottlenecks without expensive enterprise software.',
        solution:
          'A Python-based utility that leverages Scapy for packet inspection and ARP scanning, storing device connection logs in MySQL and visualizing metrics in a clean browser dashboard.',
        features: [
          'Subnet-wide ARP scanning to catalog active IP, MAC addresses, and hardware vendors',
          'Real-time network interface bandwidth metrics captured using Psutil',
          'Persistent historical logging of device connection timestamps in MySQL',
          'Clean dashboard displaying active devices and network activity trends',
          'Alert indicators for unrecognized device connections on the local subnet',
        ],
        role: 'Systems & Backend Developer (Wrote packet scanning scripts with Scapy, built Flask REST endpoints, and created database schema)',
        challenges:
          'Running continuous packet capture and subnet discovery without blocking server response threads or straining CPU resources.',
        results:
          'A practical, self-hosted network monitoring solution providing transparent visibility across local subnet devices.',
      },
    },
    {
      id: 'waterq',
      slug: 'waterq',
      title: 'WaterQ',
      category: 'IoT / Embedded Systems',
      description:
        'An IoT-based water quality monitoring system built with ESP32 and environmental sensors.',
      technologies: ['ESP32', 'IoT', 'Blynk', 'Embedded C/C++'],
      allTechnologies: ['ESP32', 'IoT', 'Sensors', 'Blynk', 'Embedded C/C++'],
      githubUrl: 'https://github.com/raihanns143/WaterQ-IoT',
      details: {
        overview:
          'WaterQ is an embedded hardware and cloud IoT solution built around the ESP32 microcontroller, monitoring key environmental water parameters continuously.',
        problem:
          'Manual chemical testing of water supplies or aquaculture ponds is infrequent and labor-intensive, often discovering contamination only after damage has occurred.',
        solution:
          'A standalone sensor node utilizing an ESP32 connected to turbidity, pH, and temperature probes that streams periodic telemetry over Wi-Fi to a cloud dashboard.',
        features: [
          'Continuous sampling for water temperature, pH acidity/alkalinity, and turbidity',
          'On-chip analog calibration algorithms implemented in embedded C/C++',
          'Wireless telemetry transmission to the Blynk IoT platform',
          'Automated threshold alerts when water parameters deviate from safe ranges',
          'Interval-based sampling routine optimized for energy efficiency',
        ],
        role: 'Embedded Hardware & IoT Developer (Circuit layout, sensor calibration algorithms, firmware programming in C/C++, and Blynk integration)',
        challenges:
          'Filtering electrical noise and calibrating analog voltage readings across multiple submersible probes concurrently.',
        results:
          'A working physical IoT prototype providing 24/7 continuous water condition monitoring with cloud alert capabilities.',
      },
    },
    {
      id: 'news-today',
      slug: 'news-today',
      title: 'News Today',
      category: 'Web Application',
      description:
        'A modern news portal for publishing and managing news content through a web-based platform.',
      technologies: ['React', 'PHP', 'MySQL'],
      allTechnologies: ['React', 'PHP', 'MySQL', 'JavaScript'],
      githubUrl: 'https://github.com/raihanns143/Dailynews',
      liveUrl: 'https://dailynews-bpi.vercel.app/',
      details: {
        overview:
          'News Today is a dynamic web publishing portal providing editors with a content management workflow and readers with a fast, categorized news reading interface.',
        problem:
          'Many publishing platforms are overly complex and bloated, causing slow load times for readers on mobile networks.',
        solution:
          'A decoupled architecture featuring a React reader frontend paired with a lightweight PHP/MySQL backend for swift article delivery and category navigation.',
        features: [
          'Editorial CMS interface for creating, editing, and publishing news articles',
          'Categorized sections (Technology, National, Features, Editorial)',
          'Responsive reader interface with clean typography and fast load times',
          'Relational MySQL schema structured with indexing for quick title lookups',
        ],
        role: 'Full-Stack Developer (Built React client application, designed MySQL schema, and implemented PHP endpoints)',
        challenges:
          'Managing responsive typography across different screen sizes while keeping REST endpoint queries fast and secure.',
        results:
          'A responsive, lightweight news platform with separated frontend and backend concerns.',
      },
    },
  ] as Project[],

  skills: {
    frontend: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
    backend: ['Python', 'Flask', 'PHP', 'Node.js', 'REST APIs'],
    database: ['MySQL', 'PostgreSQL', 'Prisma'],
    networking: ['TCP/IP', 'IPv4', 'IPv6', 'NAT/PAT', 'Scapy'],
    iot: ['ESP32', 'Sensors', 'Blynk', 'Embedded C/C++'],
    tools: ['Git', 'GitHub', 'Linux', 'VS Code'],
  },

  education: {
    degree: 'Diploma in Computer Science & Technology',
    institution: 'Bangladesh Polytechnic Institute, Rajshahi',
    location: 'Rajshahi, Bangladesh',
  },
};
