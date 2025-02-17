/**
 * Resume/CV template created with Bootstrap 5 by @vmoratog and @jdnichollsc
 */

/* Thinking of adding freelance developper in my resume */
const resume = {
    firstName: 'Raphaël',
    lastName: 'Mos',
    jobTitle: "Licence's degree graduate looking for work-study, fixed-term contract or permanent contract",
    city: 'Paris',
    country: 'France',
    phone: '+33652972252',
    email: 'raphael.softdevelop@gmail.com',
    education: [
      {
        school: 'Paris 8 Université',
        degree: 'Degree',
        graduationDate: '2024',
        description: 'Licence in Computer Science - Honorable Mention'
      },
       {
        school: 'Lycee Adolphe Chérioux France',
        degree: 'Lycee / High School Diploma',
        graduationDate: '2021',
        description: "Baccalaureate in Digital Specialties and Computer Science and Mathematics"
      }
    ],
    links: [
        {
        label: 'GitHub',
        link: 'https://github.com/raphaelmos'
      },
      {
        label : 'Linkedin',
        link : 'https://www.linkedin.com/in/rapha%C3%ABl-moscatelli-12407b243/'
      }
      // {
      //   label : 'Portafolio',
      //   link : ''
      // }
    ],
    skills: [   
        "C / C++",
        "Python",
        "OpenGL / GL4D",
        "PHP",
        "JavaScript",
        "SQL",
        "GIT",
        "Godot / GDScript / VisualScripting",
        "Prolog",
        "OCAML",
        "Assembler",
        "AI Modeling"
    ],
    languages: ['Francais: Native','English: C1'],
    professionalSummary: `Young professional eager to acquire new skills and grow professionally within your team. My previous experiences have allowed me to refine my communication and idea expression. Proactive, a good communicator, and demonstrating teamwork spirit, I strive to achieve my goals.`,
    employmentHistory: [
      {
        jobTitle: 'Versatile Employee',
        startDate: 'July 2023',
        endDate: 'August 2023',
        employer: 'BERDUGO-METOUDI',
        city: 'Paris',
        achievements: [
            "Used Excel for sorting and organizing accounting documents",
        "Managed handling and loading of trucks for document transport",
        "Assisted in preparing client files and archiving documents",
        "Tracked deadlines and followed up with clients for missing documents",
        "Assisted the accounting team with data entry",
        "Organized operations for various files",
        "Participated in establishing document management procedures",
        "Collaborated with different departments to ensure smooth information flow",
  
        ]
      },
      {
        jobTitle: 'Aide chargé assistance',
        endDate: 'May - June 2023',
        employer: 'Europ Assistance',
        city: 'Île De France',
        achievements: [
            "Managed incoming calls and processed assistance requests",
            "Assessed client needs and proposed suitable solutions",
            "Coordinated interventions with service providers",
            "Monitored assistance cases and updated information",
            "Drafted intervention reports and documented cases",
            "Assisted with billing and managed reimbursements",
            "Handled emergency situations and made quick decisions",
            "Communicated with clients to ensure their satisfaction",
            "Analyzed client feedback to improve offered services",
        ]
      },
    ],
    certificatesHistory: [
      {
        jobTitle: 'Licence in Computer Science - Honorable Mention',
        startDate: '2021',
        endDate: '2024',
        employer: '',
        achievements: [
          'Paris 8 Université ',
        ]
      },
  
     
      {
        jobTitle: "Scientific Baccalaureate | Digital and Mathematics",
        startDate: '2021',
        endDate: '',
        employer: '',
        achievements: [ 
          'Lycée Adolphe Chérioux France | VITRY-SUR-SEINE ',
        ]
      }
    ],
    passions: [
      {
        name: "Cybersécurité",
        content: "Introduction to Cybersecurity by Cisco Networking Academy",
      },
      {
        name: "Cybersécurité",
        content: "Cybersecurity Fundamentals (IBM)",
      },
      {
        name: "Intelligence Artificielle",
        content: "Introduction to Artificial Intelligence (edX)",
      },
      {
        name: "Intelligence Artificielle",
        content: "Artificial Intelligence: Principles and Techniques (Coursera)"
      }
      
    ],
    photo: '',
  }
  
  const formatResume = (r) => ({
    ...r,
    address: [
      r.country,
      r.city,
      r.postalCode
    ].filter(Boolean).join(', ')
  })
  
  new Vue({
    el: "#app",
    data: formatResume(resume)
  });
  
  /**
   * Wait for animatable-component to be loaded (Only for VanillaJS)
   **/
  function animatableLoaded() {
    document.querySelector('body').classList.remove('d-none');
  }
  if (customElements) {
    customElements.whenDefined('animatable-component').then(animatableLoaded);
  } else animatableLoaded()
