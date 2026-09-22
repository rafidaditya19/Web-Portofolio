import { PersonalInfo, Certificate, Project, TimelineUpdate, SkillGroup } from "./types";

/**
 * ============================================================================
 * RAFID'S PORTFOLIO DATA (CENTRAL SOURCE OF TRUTH)
 * ============================================================================
 * CATATAN UNTUK RAFID:
 * Jika kamu ingin menambahkan sertifikat baru, proyek baru, atau kegiatan baru,
 * kamu cukup menambahkannya di file ini! Tampilan website akan otomatis terupdate.
 */

export const personalInfo: PersonalInfo = {
  name: "Nur Rafid Aditya",
  title: "Electrical & Industrial Automation Engineer",
  subtitle:
    "Senior High School Graduate (Math & Science) | BNSP Certified in Electrical Engineering & Industrial Automation",
  bio: [
    "Hello! I am Nur Rafid Aditya, an aspiring engineer with a strong academic foundation in Mathematics & Natural Sciences (MIPA) and nationally accredited BNSP certifications in Electrical Engineering and Industrial Automation.",
    "I specialize in hands-on smart building installations, IoT automation (Home Assistant, Tuya), telecommunication infrastructure (Huawei BTS L0), and rigorous electrical wiring analysis with Occupational Health & Safety (K3 / MSRA) standards.",
    "Driven by continuous learning, I am actively bridging physical engineering and modern software to develop high-impact, reliable automated systems.",
  ],
  education: {
    degree: "Senior High School Graduate",
    major: "Mathematics & Natural Sciences (MIPA)",
    status: "Graduated",
  },
  contact: {
    email: "rafidaditya2005@gmail.com",
    github: "https://bit.ly/4r6mwsa",
    linkedin: "https://bit.ly/4rhDggk",
    location: "Bandung, Indonesia",
  },
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Electrical & Industrial Automation",
    skills: [
      "BNSP Electrical Engineering",
      "BNSP Industrial Automation",
      "Single-Phase & Three-Phase Wiring",
      "Wiring Layout Analysis",
      "MSRA (Method Statement & Risk Assessment)",
      "K3 (Occupational Health & Safety)",
    ],
  },
  {
    category: "Smart Systems & IoT",
    skills: [
      "Tuya Smart Ecosystem",
      "Home Assistant UI/UX Dashboard",
      "Raspberry Pi IoT Systems",
      "Iris Biometric Security",
      "HVAC & Wastewater Plant Monitoring",
      "Smart Building Telemetry",
    ],
  },
  {
    category: "Infrastructure & Tools",
    skills: [
      "Huawei BTS L0 Telecom Installation",
      "Oracle VirtualBox Server Deployment",
      "Electrical & Mechanical Blueprint Reading",
      "Linux / Home OS Environments",
      "Git & GitHub",
      "Modern Web Development (Next.js)",
    ],
  },
];

export const certificates: Certificate[] = [
  {
    id: "cert-bnsp-automation",
    title: "Industrial Automation",
    issuer: "BNSP (Badan Nasional Sertifikasi Profesi)",
    year: 2026,
    category: "BNSP",
    description:
      "National professional competency certification recognizing mastery in industrial automation processes, control systems, and field implementations.",
    image: "/images/certificates/cert-industrial-automation.jpg",
  },
  {
    id: "cert-bnsp-electrical",
    title: "Electrical Engineering",
    issuer: "BNSP (Badan Nasional Sertifikasi Profesi)",
    year: 2025,
    category: "BNSP",
    description:
      "National standard professional certification validating core competencies in electrical circuits, wiring schematics, and safety compliance.",
    image: "/images/certificates/cert-electrical-engineering.jpg",
  },
  {
    id: "cert-bts-huawei",
    title: "BTS Installation Technician L0",
    issuer: "Huawei Tech Investment",
    year: 2025,
    category: "Industry",
    description:
      "Certified in base transceiver station (BTS) hardware installation, grounding, cabling, and site commissioning according to Huawei telecom standards.",
    image: "/images/certificates/cert-bts-huawei.jpg",
  },
  {
    id: "cert-smart-building-denki",
    title: "Smart Building Project",
    issuer: "PT Denki Engineering",
    year: 2025,
    category: "Industry",
    description:
      "Field engineering credential in smart building integration, iris biometric access, HVAC inspection, and centralized monitoring systems.",
    image: "/images/certificates/cert-smart-building-denki.jpg",
  },
  {
    id: "cert-iot-raspberrypi",
    title: "IoT with Raspberry Pi",
    issuer: "PT Tekolab Akademi",
    year: 2025,
    category: "Industry",
    description:
      "Hands-on certification in sensor interfacing, GPIO programming, and embedded IoT data processing using Raspberry Pi microcomputers.",
    image: "/images/certificates/cert-iot-raspberrypi.jpg",
  },
  {
    id: "cert-xlsmart",
    title: "XL Smart Future Ready",
    issuer: "XL Smart",
    year: 2026,
    category: "Industry",
    description:
      "Advanced technology readiness program focused on digital infrastructure, future telecom networks, and smart digital solutions.",
    image: "/images/certificates/cert-xlsmart-future-ready.png",
  },
  {
    id: "cert-pbk-kemnaker",
    title: "Competency-Based Training (PBK)",
    issuer: "Ministry of Manpower of the Republic of Indonesia (Kemnaker RI)",
    year: 2026,
    category: "Government",
    description:
      "Rigorous vocational competency training adhering to national labor qualification frameworks in specialized technical fields.",
    image: "/images/certificates/cert-pbk-training.jpg",
  },
  {
    id: "cert-pbl-kemnaker",
    title: "Project-Based Learning (PBL)",
    issuer: "Ministry of Manpower of the Republic of Indonesia (Kemnaker RI)",
    year: 2025,
    category: "Government",
    description:
      "Practical project-based technical execution and problem-solving framework supervised by government training institutions.",
    image: "/images/certificates/cert-pbl-training.jpg",
  },
];

export const projects: Project[] = [
  {
    id: "smart-office",
    title: "Smart Office Installation & Supervision",
    role: "Installation Supervisor",
    company: "PUNYA Skill Akademi Headquarters",
    location: "Bandung, Indonesia",
    year: 2026,
    summary:
      "Led and supervised the complete installation and commissioning of smart office automation devices integrated with the Tuya platform, featuring custom Home Assistant control dashboards and on-premise virtualized servers.",
    highlights: [
      "Supervised the installation and integration of smart electrical components with the Tuya mobile and cloud ecosystem.",
      "Engineered, mapped, and audited wiring layouts while formulating rigorous Method Statement and Risk Assessment (MSRA) protocols.",
      "Designed and deployed responsive, user-friendly UI/UX dashboards using Home Assistant for central facility management.",
      "Configured and hosted a persistent local automation server utilizing Oracle VirtualBox to guarantee zero-latency on-premise execution.",
    ],
    techStack: [
      "Tuya Platform",
      "Home Assistant",
      "Oracle VirtualBox",
      "Electrical Wiring Analysis",
      "MSRA Safety Protocols",
      "UI/UX Design",
    ],
    images: [
      {
        src: "/images/projects/ha-os-dashboard.jpg",
        alt: "Home Assistant OS Dashboard Interface",
        caption: "Home Assistant OS centralized dashboard configured for PSA HQ (CCTV, Lights, Plug Control & Telemetry)",
      },
      {
        src: "/images/projects/jarvis-dashboard-test.jpg",
        alt: "Testing Jarvis Dashboard On-Site",
        caption: "Field testing and UI/UX dashboard verification on laptop at Skill Akademi HQ",
      },
      {
        src: "/images/projects/wiring-inspection.jpg",
        alt: "Inspecting Wiring Installation",
        caption: "Physical wiring and smart component inspection at Building 9A with safety gear",
      },
      {
        src: "/images/projects/site-briefing-1.jpg",
        alt: "Site Briefing with Technical Team",
        caption: "Conducting pre-installation technical briefing with team members",
      },
      {
        src: "/images/projects/site-briefing-2.jpg",
        alt: "Field Coordination & Safety Briefing",
        caption: "Field coordination and safety procedure review outside Building 9A",
      },
      {
        src: "/images/projects/goals-meeting.jpg",
        alt: "Smart Building Goals Meeting",
        caption: "Project milestone alignment and deliverables review meeting",
      },
    ],
  },
  {
    id: "huawei-bts-l0-exam",
    title: "Huawei BTS L0 Certification Practical Assessment",
    role: "Telecom Infrastructure Trainee",
    company: "PT Huawei Tech Investment",
    location: "Indonesia",
    year: 2025,
    summary:
      "Executed rigorous practical assessments for the Huawei L0 Certification, demonstrating proficiency in Base Transceiver Station (BTS) infrastructure and telecommunications equipment deployment.",
    highlights: [
      "Performed hands-on installation and configuration of Huawei telecom equipment adhering to strict industry standards.",
      "Executed precision grounding, weatherproofing, and cabling management for outdoor and indoor telecommunication sites.",
      "Demonstrated strict compliance with Occupational Health & Safety (K3) and safe tower climbing procedures.",
      "Completed rigorous technical audits for antenna alignment, power telemetry, and infrastructure integrity.",
    ],
    techStack: [
      "Huawei Telecom Equipment",
      "BTS Infrastructure",
      "Grounding & Cabling",
      "K3 Safety Standards",
      "Weatherproofing",
      "Infrastructure Audit",
    ],
    images: [
      {
        src: "/images/projects/huawei-praktek-1.jpg",
        alt: "Huawei Practical Assessment Session 1",
        caption: "Hands-on installation and wiring assessment for Huawei BTS equipment",
      },
      {
        src: "/images/projects/huawei-praktek-2.jpg",
        alt: "Huawei Practical Assessment Session 2",
        caption: "Technical configuration and system checks under supervision",
      },
      {
        src: "/images/projects/huawei-praktek-3.jpg",
        alt: "Huawei Practical Assessment Session 3",
        caption: "Applying safety protocols and K3 standards during practical implementation",
      },
    ],
  },
  {
    id: "ojt-smart-building",
    title: "On-the-Job Training: Smart Building Engineering",
    role: "Engineering Trainee (OJT)",
    company: "PT Denki Engineering",
    location: "Indonesia",
    year: 2025,
    summary:
      "Executed comprehensive on-site engineering tasks covering iris biometric access control, mechanical/electrical schematics, single-phase smart device wiring, and building utility plant operations.",
    highlights: [
      "Mastered biometric security processes utilizing iris recognition systems and strictly implemented K3 (Occupational Health and Safety) on site.",
      "Analyzed structural materials and technical project specifications through comprehensive electrical and mechanical engineering schematics.",
      "Conducted operational evaluations on bio-septic tanks, domestic wastewater treatment plants (WWTP), and HVAC airflow mechanisms.",
      "Wired and installed single-phase electrical distribution circuits integrated with smart IoT automation modules.",
      "Implemented smart building centralized software platforms to monitor facility operations and power telemetry in real-time.",
    ],
    techStack: [
      "Smart Building Systems",
      "Iris Biometric Security",
      "Single-Phase Electrical Wiring",
      "HVAC & WWTP Utilities",
      "Engineering Blueprints",
      "K3 (OHS) Compliance",
    ],
    images: [
      {
        src: "/images/projects/denki-team-event.jpg",
        alt: "Team Collaboration at PT Denki Engineering",
        caption: "Engineering team group photo at PT Denki Engineering facility",
      },
      {
        src: "/images/projects/denki-briefing-room.jpg",
        alt: "Project Briefing & Technical Presentation",
        caption: "Technical coordination and WWTP/HVAC presentation in briefing room",
      },
      {
        src: "/images/projects/denki-training-certificate.jpg",
        alt: "Training Certificate Ceremony",
        caption: "Completion and credential presentation ceremony at PT Denki Engineering",
      },
    ],
  },
];

export const timelineUpdates: TimelineUpdate[] = [
  {
    id: "update-1",
    date: "September 2026",
    title: "Launched Modern Next.js Portfolio",
    description:
      "Architected and deployed a responsive, high-performance personal engineering portfolio built with Next.js, TypeScript, and Tailwind CSS.",
    tag: "Milestone",
  },
  {
    id: "update-2",
    date: "2026",
    title: "Certified in Industrial Automation & Supervised Smart Office Project",
    description:
      "Attained BNSP Industrial Automation national certification and supervised the Smart Office installation at PUNYA Skill Akademi Headquarters (Bandung).",
    tag: "Project & Certification",
  },
  {
    id: "update-3",
    date: "2025",
    title: "Completed OJT Smart Building & Huawei BTS L0 Certification",
    description:
      "Successfully accomplished field engineering training at PT Denki Engineering and earned the Huawei BTS Installation Technician L0 credential.",
    tag: "Field Training",
  },
];
