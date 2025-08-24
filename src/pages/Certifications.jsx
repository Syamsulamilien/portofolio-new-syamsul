import { useState } from 'react';

const Certifications = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedCertification, setSelectedCertification] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  
  const certifications = [
    {
      id: 1,
      title: 'ANC Google Sheets and ANC Mobile System Optimization',
      issuer: 'Ministry of Law and Human Rights of the Republic of Indonesia',
      category: 'copyright',
      year: '2025',
      date: 'August 1, 2025',
      image: '/assets/images/sertifikat-anc.png',
      description: 'Copyright Certificate for ANC system optimization poster developed with the Universitas Aisyiyah Yogyakarta team to improve maternal and child health services.',
      certificateNumber: '000944103',
      type: 'Poster',
      applicationNumber: 'EC002025103842',
      featured: true,
      collaborators: [
        'Dr. Sulistyaningsih, S.KM., MH.Kes.',
        'Arizona Firdonsyah, S.Kom., M.Kom.',
        'Zahra Arwananingtyas, S.Kom., M.C.s',
        'Tulus Agreena',
        'Nurajizah Kalla',
        'Asinin Ahmad',
        'Yunan Singgih Mukti Hidayat',
        'Muh.Hidayat',
        'Muhammad Salman AL. Farisi',
        'Syamsul Amilien'
      ],
      holder: 'UNIVERSITAS AISYIYAH YOGYAKARTA',
      protectionPeriod: '50 years from first publication',
      firstAnnouncement: 'July 1, 2025, in Yogyakarta City',
      fullDescription: 'This Copyright Certificate is official recognition from the Ministry of Law and Human Rights of the Republic of Indonesia for an innovative work in the form of an ANC (Antenatal Care) system optimization poster that integrates Google Sheets and mobile systems. This work was developed as a digital solution to improve the efficiency of maternal and child health services in Indonesia.',
      impact: 'This system will help over 100 healthcare workers manage ANC data more efficiently, improving the quality of maternal and child health services in various community health centers.',
      technologies: ['Google Sheets API', 'Mobile Development', 'Healthcare System', 'Data Management'],
      achievements: [
        'Received official copyright recognition from Ministry of Law and Human Rights RI',
        'Implementation in several pilot project health centers',
        'Increased ANC recording efficiency by up to 60%',
        'Multi-disciplinary collaboration with 10 experts'
      ]
    },
    {
      id: 2,
      title: 'Antivirus Adventure',
      issuer: 'Ministry of Law and Human Rights of the Republic of Indonesia',
      category: 'copyright',
      year: '2024',
      date: 'August 31, 2024',
      image: '/assets/images/antivirus-game.png',
      description: 'Copyright Certificate for an educational video game about cybersecurity developed to increase cybersecurity awareness through gamification.',
      certificateNumber: '000672063',
      type: 'Video Game',
      applicationNumber: 'EC00202496843',
      featured: true,
      collaborators: [
        'Hilman Satia Pebrina',
        'Syamsul Amilien',
        'Muhammad Burhan Isamil',
        'Alexander Ade Putra',
        'Annisa Ashadia N.S',
        'Asinin Ahmad',
        'Dewi Nur Aisa',
        'Sadr Lufti Mufreni'
      ],
      holder: 'UNIVERSITAS AISYIYAH YOGYAKARTA',
      protectionPeriod: '50 years from first publication',
      firstAnnouncement: 'May 28, 2024, in Yogyakarta',
      fullDescription: 'Antivirus Adventure is an educational game with an exciting adventure concept packaged interactively, making the learning process feel more enjoyable and easy to understand.',
      impact: 'This game is used as a learning tool to increase student interest in learning through an interactive approach.',
      technologies: ['Java', 'Greenfoot', 'Game Development', 'Educational Technology'],
      achievements: [
        'Official copyright for educational video game',
        'Used in 15+ educational institutions',
        'Improved student cybersecurity understanding',
        'Collaboration of 8 developers and educators'
      ]
    },
    {
      id: 3,
      title: 'Short Movie NASOKA',
      issuer: 'Film Production Team',
      category: 'award',
      year: '2024',
      date: '2024',
      image: '/assets/images/nasoka-movie.png',
      description: 'Award as an actor in the short movie "NASOKA" which presents an inspirational story about struggle and dedication in the world of technology.',
      role: 'Lead Actor',
      producer: 'Hari Akbar Sugianto, M.A',
      director: 'Wibisana Nur Wahid',
      achievement: 'Outstanding contribution as lead actor',
      featured: false,
      fullDescription: 'Short movie "NASOKA" is a cinematographic work that depicts the journey of a technology student in facing various academic and personal challenges. The film raises themes about persistence, collaboration, and innovation in the world of information technology.',
      impact: 'This film has been screened on various platforms and received positive appreciation from the academic community and creative industry, inspiring many students to continue struggling in the field of technology.',
      technologies: ['Film Production', 'Storytelling', 'Creative Arts', 'Digital Media'],
      achievements: [
        'Lead role in short film production',
        'Collaboration with experienced producer and director',
        'Inspired technology student community',
        'Received appreciation from creative industry'
      ]
    },
    {
      id: 4,
      title: 'Information Technology Study Program Orientation',
      issuer: 'Universitas Aisyiyah Yogyakarta',
      category: 'committee',
      year: '2024',
      date: 'September 19, 2024',
      image: '/assets/images/mataf-ti.png',
      description: 'Certificate of appreciation as committee member in the Orientation program with the theme "Encryption Adventure: Saving Data from Cyber Attacks".',
      certificateNumber: '57/FST-UNISA/Ak/IX/2024',
      role: 'Event Committee',
      theme: 'Encryption Adventure: Saving Data from Cyber Attacks',
      faculty: 'Faculty of Science and Technology',
      dean: 'Tika Ainunnisa Fitria, S.T, M.T., Ph.D.',
      headOfStudyProgram: 'Tikaridha Hardiani, S.Kom., M.Eng.',
      featured: false,
      fullDescription: 'The Orientation program is a campus life introduction program for new students of the Information Technology Study Program. With the theme "Encryption Adventure", this activity is designed to provide basic understanding of data security and encryption to new students through an interactive and enjoyable approach.',
      impact: 'This activity successfully introduced 50+ new students to cybersecurity concepts and built a strong foundation for further information technology learning.',
      technologies: ['Event Management', 'Cybersecurity Education', 'Academic Leadership', 'Student Development'],
      achievements: [
        'Successfully organized orientation for 50+ students',
        'Implementation of innovative cybersecurity theme',
        'Collaboration with faculty and study program',
        'Built solid student network'
      ]
    },
    {
      id: 5,
      title: 'ITECH & HIMANIKA Comparative Study',
      issuer: 'ITECH & HIMANIKA FT UNY',
      category: 'committee',
      year: '2024',
      date: 'May 26, 2024',
      image: '/assets/images/stuban-itech-1.png',
      description: 'Committee certificate in Comparative Study activity with the theme "Beyond Bits and Bytes: Uniting Creativity in IT Student Programs".',
      certificateNumber: '13.002/BPH-ITECH/V/2024',
      role: 'Event Committee',
      theme: 'Beyond Bits and Bytes: Uniting Creativity in IT Student Programs',
      organizer: 'ITECH and HIMANIKA FT UNY',
      chairman: 'Dimas Riski Setyaji',
      advisor: 'Arizona Firdonsyah, S.Kom., M. Kom.',
      featured: false,
      fullDescription: 'Comparative Study is a collaborative activity between ITECH (Information Technology Community) and HIMANIKA FT UNY aimed at facilitating knowledge and experience exchange among information technology students from various universities. This activity carries the theme of creativity in developing technology programs and applications.',
      impact: 'This activity facilitated networking among 200+ students and generated several sustainable collaborative technology project ideas.',
      technologies: ['Inter-University Collaboration', 'Knowledge Sharing', 'Creative Technology', 'Academic Partnership'],
      achievements: [
        'Successfully facilitated collaboration of 200+ students',
        'Built bridge between technology universities',
        'Generated innovative project ideas',
        'Strengthened regional IT student ecosystem'
      ]
    },
    {
      id: 6,
      title: 'Information Technology Fellowship Night',
      issuer: 'Information Technology Study Program UNISA',
      category: 'committee',
      year: '2024',
      date: 'December 20-21, 2024',
      image: '/assets/images/makrab.jpg',
      description: 'Certificate of appreciation as committee member in Fellowship Night activity for Academic Year 2024/2025 with the theme "Grow Together, Be Better After".',
      certificateNumber: '40/FST-Ti/XII/2024',
      role: 'Event Committee',
      theme: 'Grow Together, Be Better After',
      period: '18-19 Jumadil Akhir 1446 H/ December 20-21, 2024 M',
      headOfStudyProgram: 'Tikaridha Hardiani S.Kom., M.Eng.',
      eventCoordinator: 'Yuli Antika Sari',
      featured: false,
      fullDescription: 'Fellowship Night is an annual activity of the Information Technology Study Program aimed at strengthening relationships between students, lecturers, and alumni. With the theme "Grow Together, Be Better After", this activity emphasizes the importance of collaboration and self-development together in the information technology community.',
      impact: 'This activity successfully strengthened relationships among 50+ members of the IT UNISA community and generated commitments for better study program development in the future.',
      technologies: ['Community Building', 'Academic Networking', 'Event Organization', 'Student Engagement'],
      achievements: [
        'Successfully organized fellowship night for 50+ participants',
        'Built solidarity in UNISA IT community',
        'Generated study program development roadmap',
        'Created momentum for long-term collaboration'
      ]
    },
        {
      id: 7,
      title: 'Technofest Arena 2024',
      issuer: 'Information Technology Study Program Universitas Aisyiyah Yogyakarta',
      category: 'committee',
      year: '2024',
      date: 'December 7-8, 2024',
      image: '/assets/images/technofest.jpg',
      description: 'Certificate of appreciation as committee member (Panitia) in Technofest Arena 2024, a tournament competition event for high school students (SMA/SMK) with the theme "Dominate The Colosseum".',
      certificateNumber: '92/FST-UNISA/Ak/XII/2024',
      role: 'Event Committee (Panitia)',
      theme: 'Dominate The Colosseum',
      period: 'December 7-8, 2024',
      dean: 'Tika Ainunnisa Fitria, S.T, M.T., Ph.D.',
      headOfStudyProgram: 'Tikaridha Hardiani, S.Kom., M.Eng.',
      faculty: 'Faculty of Science and Technology',
      featured: false,
      fullDescription: 'Technofest Arena 2024 is a tournament competition event specifically designed for high school students (SMA/SMK) organized by the Information Technology Study Program of Universitas Aisyiyah Yogyakarta. With the theme "Dominate The Colosseum", this event serves as a competitive platform for high school students through various tournament competitions and challenges, providing them with valuable experience in competitive environments.',
      impact: 'This event successfully engaged 150+ high school students from various SMA/SMK institutions across Yogyakarta and surrounding areas, providing them with competitive tournament experience and building their teamwork and strategic thinking skills.',
      technologies: ['Event Management', 'Tournament Organization', 'Student Engagement', 'Competition Management'],
      achievements: [
        'Successfully organized tournament competition for high school students',
        'Engaged 150+ SMA/SMK students from Yogyakarta region',
        'Created competitive platform for student skill development',
        'Built teamwork and strategic thinking skills among participants',
        'Provided valuable tournament experience for young competitors'
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Certifications', count: certifications.length },
    { id: 'copyright', name: 'Copyright', count: certifications.filter(c => c.category === 'copyright').length },
    { id: 'award', name: 'Awards', count: certifications.filter(c => c.category === 'award').length },
    { id: 'committee', name: 'Committee', count: certifications.filter(c => c.category === 'committee').length }
  ];

  const filteredCertifications = activeFilter === 'all' 
    ? certifications 
    : certifications.filter(cert => cert.category === activeFilter);

  const openCertificationDetail = (cert) => {
    setSelectedCertification(cert);
    setShowDetailModal(true);
  };

  const closeCertificationDetail = () => {
    setShowDetailModal(false);
    setSelectedCertification(null);
  };

  // Certification Detail Modal Component
  const CertificationDetailModal = ({ certification, isOpen, onClose }) => {
    if (!isOpen || !certification) return null;

    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />
        
        {/* Modal Content */}
        <div className="relative min-h-screen flex items-center justify-center p-4">
          <div className="relative bg-slate-900 border-2 border-slate-700 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-slate-800/80 backdrop-blur-sm border border-slate-600 text-slate-400 hover:text-white hover:bg-slate-700/80 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header Section */}
            <div className="relative overflow-hidden rounded-t-3xl">
              <div className="h-80 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-teal-600/20 flex items-center justify-center">
                <img 
                  src={certification.image} 
                  alt={certification.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-teal-600/20 items-center justify-center hidden">
                  <div className="text-8xl opacity-30">
                    {certification.category === 'copyright' ? '📜' : 
                     certification.category === 'award' ? '🏆' : 
                     certification.category === 'committee' ? '🎯' : '📋'}
                  </div>
                </div>
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
              
              {/* Title and Category */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                    certification.category === 'copyright' ? 'bg-blue-600/90 text-white' :
                    certification.category === 'award' ? 'bg-purple-600/90 text-white' :
                    certification.category === 'committee' ? 'bg-green-600/90 text-white' :
                    'bg-orange-600/90 text-white'
                  }`}>
                    {certification.category.toUpperCase()}
                  </span>
                  {certification.featured && (
                    <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-yellow-500 text-black text-sm font-bold rounded-full">
                      ⭐ FEATURED
                    </span>
                  )}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {certification.title}
                </h1>
                <p className="text-slate-300 text-lg md:text-xl max-w-3xl">
                  {certification.description}
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 md:p-12">
              {/* Certification Details Grid */}
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Left Column */}
                <div className="space-y-8">
                  {/* Overview */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      Overview
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {certification.fullDescription}
                    </p>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      Key Achievements
                    </h3>
                    <div className="grid gap-3">
                      {certification.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
                          <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-slate-300">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      Impact & Outcome
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {certification.impact}
                    </p>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                  {/* Certificate Information */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      Certificate Details
                    </h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-slate-800/50 rounded-lg">
                        <span className="text-slate-400 text-sm block">Issuer</span>
                        <span className="text-slate-200 font-medium">{certification.issuer}</span>
                      </div>
                      <div className="p-3 bg-slate-800/50 rounded-lg">
                        <span className="text-slate-400 text-sm block">Date</span>
                        <span className="text-slate-200 font-medium">{certification.date}</span>
                      </div>
                      {certification.certificateNumber && (
                        <div className="p-3 bg-slate-800/50 rounded-lg">
                          <span className="text-slate-400 text-sm block">Certificate Number</span>
                          <span className="text-slate-200 font-medium">{certification.certificateNumber}</span>
                        </div>
                      )}
                      {certification.applicationNumber && (
                        <div className="p-3 bg-slate-800/50 rounded-lg">
                          <span className="text-slate-400 text-sm block">Application Number</span>
                          <span className="text-slate-200 font-medium">{certification.applicationNumber}</span>
                        </div>
                      )}
                      {certification.type && (
                        <div className="p-3 bg-slate-800/50 rounded-lg">
                          <span className="text-slate-400 text-sm block">Type</span>
                          <span className="text-slate-200 font-medium">{certification.type}</span>
                        </div>
                      )}
                      {certification.role && (
                        <div className="p-3 bg-slate-800/50 rounded-lg">
                          <span className="text-slate-400 text-sm block">Role</span>
                          <span className="text-slate-200 font-medium">{certification.role}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      Related Technologies
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {certification.technologies.map((tech, index) => (
                        <span key={index} className="px-4 py-2 bg-gradient-to-r from-slate-700 to-slate-600 text-slate-200 rounded-full text-sm font-medium border border-slate-600 hover:from-slate-600 hover:to-slate-500 transition-all duration-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Collaborators */}
                  {certification.collaborators && (
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-teal-500 to-cyan-600 rounded flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        Collaborators ({certification.collaborators.length})
                      </h3>
                      <div className="space-y-2 max-h-48 overflow-y-auto">
                        {certification.collaborators.map((collab, index) => (
                          <div key={index} className="flex items-center gap-3 p-2 bg-slate-800/30 rounded-lg">
                            <div className="w-2 h-2 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full flex-shrink-0" />
                            <span className="text-slate-300 text-sm">{collab}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Additional Information */}
                  {(certification.holder || certification.protectionPeriod || certification.firstAnnouncement || 
                    certification.theme || certification.producer || certification.director || 
                    certification.organizer || certification.chairman || certification.advisor || 
                    certification.dean || certification.headOfStudyProgram || certification.eventCoordinator) && (
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-rose-600 rounded flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        Additional Information
                      </h3>
                      <div className="space-y-3">
                        {certification.holder && (
                          <div className="p-3 bg-slate-800/50 rounded-lg">
                            <span className="text-slate-400 text-sm block">Copyright Holder</span>
                            <span className="text-slate-200 font-medium">{certification.holder}</span>
                          </div>
                        )}
                        {certification.protectionPeriod && (
                          <div className="p-3 bg-slate-800/50 rounded-lg">
                            <span className="text-slate-400 text-sm block">Protection Period</span>
                            <span className="text-slate-200 font-medium">{certification.protectionPeriod}</span>
                          </div>
                        )}
                        {certification.firstAnnouncement && (
                          <div className="p-3 bg-slate-800/50 rounded-lg">
                            <span className="text-slate-400 text-sm block">First Publication</span>
                            <span className="text-slate-200 font-medium">{certification.firstAnnouncement}</span>
                          </div>
                        )}
                        {certification.theme && (
                          <div className="p-3 bg-slate-800/50 rounded-lg">
                            <span className="text-slate-400 text-sm block">Theme</span>
                            <span className="text-slate-200 font-medium">{certification.theme}</span>
                          </div>
                        )}
                        {certification.producer && (
                          <div className="p-3 bg-slate-800/50 rounded-lg">
                            <span className="text-slate-400 text-sm block">Producer</span>
                            <span className="text-slate-200 font-medium">{certification.producer}</span>
                          </div>
                        )}
                        {certification.director && (
                          <div className="p-3 bg-slate-800/50 rounded-lg">
                            <span className="text-slate-400 text-sm block">Director</span>
                            <span className="text-slate-200 font-medium">{certification.director}</span>
                          </div>
                        )}
                        {certification.organizer && (
                          <div className="p-3 bg-slate-800/50 rounded-lg">
                            <span className="text-slate-400 text-sm block">Organizer</span>
                            <span className="text-slate-200 font-medium">{certification.organizer}</span>
                          </div>
                        )}
                        {certification.chairman && (
                          <div className="p-3 bg-slate-800/50 rounded-lg">
                            <span className="text-slate-400 text-sm block">Chairman</span>
                            <span className="text-slate-200 font-medium">{certification.chairman}</span>
                          </div>
                        )}
                        {certification.advisor && (
                          <div className="p-3 bg-slate-800/50 rounded-lg">
                            <span className="text-slate-400 text-sm block">Advisor</span>
                            <span className="text-slate-200 font-medium">{certification.advisor}</span>
                          </div>
                        )}
                        {certification.dean && (
                          <div className="p-3 bg-slate-800/50 rounded-lg">
                            <span className="text-slate-400 text-sm block">Dean</span>
                            <span className="text-slate-200 font-medium">{certification.dean}</span>
                          </div>
                        )}
                        {certification.headOfStudyProgram && (
                          <div className="p-3 bg-slate-800/50 rounded-lg">
                            <span className="text-slate-400 text-sm block">Head of Study Program</span>
                            <span className="text-slate-200 font-medium">{certification.headOfStudyProgram}</span>
                          </div>
                        )}
                        {certification.eventCoordinator && (
                          <div className="p-3 bg-slate-800/50 rounded-lg">
                            <span className="text-slate-400 text-sm block">Event Coordinator</span>
                            <span className="text-slate-200 font-medium">{certification.eventCoordinator}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes borderRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(16, 185, 129, 0.3), 
                        0 0 40px rgba(16, 185, 129, 0.1),
                        inset 0 0 20px rgba(16, 185, 129, 0.1); 
          }
          50% { 
            box-shadow: 0 0 30px rgba(16, 185, 129, 0.5), 
                        0 0 60px rgba(16, 185, 129, 0.2),
                        inset 0 0 30px rgba(16, 185, 129, 0.2); 
          }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .border-animate::before {
          content: '';
          position: absolute;
          inset: -2px;
          padding: 2px;
          background: conic-gradient(from 0deg, transparent, rgba(16, 185, 129, 0.8), transparent, rgba(6, 182, 212, 0.8), transparent);
          border-radius: inherit;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: xor;
          animation: borderRotate 3s linear infinite;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .border-animate:hover::before {
          opacity: 1;
        }
        
        .shimmer-effect {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.1) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        
        .glow-border {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        
        .certification-card {
          background: 
            radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
            linear-gradient(135deg, rgba(51, 65, 85, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%);
        }
      `}</style>

      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Certifications & Awards
            </h2>
            <p className="text-slate-400 text-lg sm:text-xl max-w-3xl mx-auto mb-8">
              A collection of professional certifications, awards, and recognitions that showcase my achievements and contributions in technology, education, and creative industries.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-600'
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-75">({category.count})</span>
              </button>
            ))}
          </div>

          {/* Featured Certifications */}
          {activeFilter === 'all' && (
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Featured Certifications</h3>
              <div className="grid lg:grid-cols-2 gap-8">
                {certifications.filter(c => c.featured).map((cert, index) => (
                  <div 
                    key={cert.id} 
                    className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden hover:bg-slate-800/70 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl float-animation cursor-pointer"
                    style={{ animationDelay: `${index * 0.5}s` }}
                    onClick={() => openCertificationDetail(cert)}
                  >
                    <div className="relative overflow-hidden">
                      <div className="h-64 bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                        <img 
                          src={cert.image} 
                          alt={cert.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextElementSibling.style.display = 'flex';
                          }}
                        />
                        {/* Fallback content */}
                        <div className="w-full h-64 bg-gradient-to-br from-blue-500/20 to-purple-600/20 items-center justify-center hidden">
                          <div className="text-6xl opacity-20">
                            {cert.category === 'copyright' ? '📜' : 
                             cert.category === 'award' ? '🏆' : 
                             cert.category === 'committee' ? '🎯' : '📋'}
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold rounded-full">
                          FEATURED
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                          {cert.title}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium flex-shrink-0 ml-2 ${
                          cert.category === 'copyright' ? 'bg-blue-500/20 text-blue-300' :
                          cert.category === 'award' ? 'bg-purple-500/20 text-purple-300' :
                          cert.category === 'committee' ? 'bg-green-500/20 text-green-300' :
                          'bg-orange-500/20 text-orange-300'
                        }`}>
                          {cert.category.toUpperCase()}
                        </span>
                      </div>
                      
                      <p className="text-slate-300 mb-4 leading-relaxed text-sm">
                        {cert.description.length > 120 ? `${cert.description.substring(0, 120)}...` : cert.description}
                      </p>
                      
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-slate-400 text-sm">{cert.issuer}</span>
                        <span className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs font-medium">
                          {cert.year}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {cert.technologies?.slice(0, 3).map((tech, index) => (
                          <span key={index} className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm hover:bg-slate-600/50 transition-colors duration-300">
                            {tech}
                          </span>
                        ))}
                        {cert.technologies?.length > 3 && (
                          <span className="px-3 py-1 bg-emerald-600/20 text-emerald-300 rounded-full text-sm">
                            +{cert.technologies.length - 3}
                          </span>
                        )}
                      </div>
                      
                      <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* All Certifications Grid - Updated to match Projects component sizing */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              {activeFilter === 'all' ? 'All Certifications' : `${categories.find(cat => cat.id === activeFilter)?.name} Certifications`}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {filteredCertifications.filter(c => activeFilter === 'all' ? !c.featured : true).map((cert, index) => (
                <div 
                  key={cert.id} 
                  className="group relative certification-card backdrop-blur-lg border-2 border-animate rounded-3xl overflow-hidden hover:border-emerald-400/60 transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl hover:shadow-emerald-500/20 cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => openCertificationDetail(cert)}
                >
                  {/* Animated Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 glow-border"></div>
                  
                  {/* Decorative corner accent with pulse */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-emerald-400/30 to-transparent rounded-br-3xl group-hover:from-emerald-400/50 transition-all duration-300"></div>
                  
                  {/* Shimmer effect overlay */}
                  <div className="absolute inset-0 shimmer-effect rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>
                  
                  <div className="relative overflow-hidden rounded-t-3xl">
                    <div className="h-40 bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-blue-500/20 flex items-center justify-center">
                      <img 
                        src={cert.image} 
                        alt={cert.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-110"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextElementSibling.style.display = 'flex';
                        }}
                      />
                      {/* Enhanced Fallback with Animation */}
                      <div className="w-full h-40 bg-gradient-to-br from-emerald-500/20 via-teal-500/20 to-blue-500/20 items-center justify-center hidden">
                        <div className="text-4xl opacity-30 animate-bounce">
                          {cert.category === 'copyright' ? '📜' : 
                           cert.category === 'award' ? '🏆' : 
                           cert.category === 'committee' ? '🎯' : '📋'}
                        </div>
                      </div>
                    </div>
                    
                    {/* Animated Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-lg border backdrop-blur-sm transition-all duration-300 group-hover:scale-110 ${
                        cert.category === 'copyright' ? 'bg-blue-600/90 text-white border-blue-400/50 group-hover:bg-blue-500' :
                        cert.category === 'award' ? 'bg-purple-600/90 text-white border-purple-400/50 group-hover:bg-purple-500' :
                        cert.category === 'committee' ? 'bg-green-600/90 text-white border-green-400/50 group-hover:bg-green-500' :
                        'bg-orange-600/90 text-white border-orange-400/50 group-hover:bg-orange-500'
                      }`}>
                        {cert.category.toUpperCase()}
                      </span>
                    </div>
                    
                    {/* Year Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 bg-slate-900/80 text-slate-200 rounded-full text-xs font-medium border border-slate-600 backdrop-blur-sm group-hover:bg-emerald-600/20 group-hover:text-emerald-300 group-hover:border-emerald-500/30 transition-all duration-300">
                        {cert.year}
                      </span>
                    </div>
                    
                    {/* Enhanced overlay with staggered button animations */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center">
                      <div className="flex gap-3 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                        <button className="w-12 h-12 bg-gradient-to-br from-indigo-500/90 to-purple-500/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:from-indigo-400 hover:to-purple-400 transition-all duration-300 hover:scale-125 hover:rotate-12 shadow-lg hover:shadow-indigo-500/40">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative p-5 z-10">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-all duration-500 line-clamp-1">
                      {cert.title}
                    </h3>
                    
                    <p className="text-slate-300 text-xs mb-4 leading-relaxed line-clamp-2 group-hover:text-slate-200 transition-colors duration-300">
                      {cert.description.length > 80 ? `${cert.description.substring(0, 80)}...` : cert.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-slate-400 text-xs line-clamp-1">{cert.issuer}</span>
                      <span className="text-slate-400 text-xs flex-shrink-0 ml-2">{cert.year}</span>
                    </div>
                    
                    {/* Certificate Number */}
                    {cert.certificateNumber && (
                      <div className="text-xs text-slate-400 mb-4 line-clamp-1">
                        Certificate: {cert.certificateNumber}
                      </div>
                    )}
                    
                    {/* Enhanced technology tags with stagger animation */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {cert.technologies?.slice(0, 2).map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded-md text-xs font-medium border border-slate-600/50 hover:border-emerald-400/50 hover:bg-slate-600/50 hover:text-white transition-all duration-300 hover:scale-110"
                          style={{ transitionDelay: `${techIndex * 0.1}s` }}
                        >
                          {tech}
                        </span>
                      ))}
                      {cert.technologies && cert.technologies.length > 2 && (
                        <span className="px-2 py-1 bg-emerald-600/20 text-emerald-300 rounded-md text-xs font-medium border border-emerald-500/30 hover:bg-emerald-600/30 transition-all duration-300 hover:scale-110">
                          +{cert.technologies.length - 2}
                        </span>
                      )}
                    </div>
                    
                    {/* Enhanced action button with gradient animations */}
                    <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-3 rounded-lg text-xs font-semibold text-center hover:from-indigo-500 hover:to-purple-500 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25 relative overflow-hidden group-hover:animate-pulse">
                      Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 max-w-2xl mx-auto hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Collaborate?</h3>
              <p className="text-slate-400 mb-6">
                With a proven track record of achievements in technology, education, and creative projects, I'm always ready to take on new challenges and create innovative solutions.
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        {/* Certification Detail Modal */}
        <CertificationDetailModal 
          certification={selectedCertification} 
          isOpen={showDetailModal} 
          onClose={closeCertificationDetail} 
        />
      </section>
    </>
  );
};

export default Certifications;