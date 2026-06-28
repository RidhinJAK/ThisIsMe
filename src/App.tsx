import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useMemo, useState } from "react";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Skills", path: "/skills" },
  { label: "Contact", path: "/contact" },
  { label: "Chatbot", path: "/chatbot" },
];

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

const staggerChildren = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const itemFadeIn = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

function PageShell({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-4"
      >
        <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl">{title}</h1>
        {subtitle && <p className="max-w-2xl text-lg text-zinc-400">{subtitle}</p>}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className="mt-12"
      >
        {children}
      </motion.div>
    </section>
  );
}

function HomePage() {
  const profileImage = `${import.meta.env.BASE_URL}profile.jpg`;
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(220,38,38,0.15),transparent_40%),radial-gradient(circle_at_85%_75%,rgba(220,38,38,0.08),transparent_40%)]" />
      
      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-2 md:px-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col justify-center space-y-8"
        >
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-sm font-medium uppercase tracking-[0.4em] text-red-500"
            >
              Software Engineer & AI Enthusiast
            </motion.p>
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
              Ridhin<br />
              <span className="text-red-500">Jasti</span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-zinc-300">
              Passionate student, developer, and technology enthusiast with a strong interest in artificial intelligence, software engineering, biotechnology, biomechanics, and computer science.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <NavLink
              to="/projects"
              className="bg-red-600 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-red-500 hover:shadow-lg hover:shadow-red-600/25"
            >
              View Projects
            </NavLink>
            <NavLink
              to="/contact"
              className="border-2 border-zinc-600 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-zinc-300 transition-all duration-300 hover:border-red-500 hover:text-white"
            >
              Get in Touch
            </NavLink>
          </div>

          <div className="flex items-center gap-8 pt-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-white">5+</p>
              <p className="text-xs uppercase tracking-wider text-zinc-500">Languages</p>
            </div>
            <div className="h-12 w-px bg-zinc-800" />
            <div className="text-center">
              <p className="text-3xl font-bold text-white">10+</p>
              <p className="text-xs uppercase tracking-wider text-zinc-500">Projects</p>
            </div>
            <div className="h-12 w-px bg-zinc-800" />
            <div className="text-center">
              <p className="text-3xl font-bold text-white">AI</p>
              <p className="text-xs uppercase tracking-wider text-zinc-500">Focus</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="flex items-center justify-center"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-red-800 opacity-20 blur-2xl" />
            <div className="relative h-[350px] w-[350px] overflow-hidden border-2 border-red-500/50 md:h-[420px] md:w-[420px]">
              {!imageError ? (
                <img
                  src={profileImage}
                  alt="Ridhin Jasti"
                  className="h-full w-full object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="grid h-full w-full place-items-center bg-zinc-900">
                  <span className="text-7xl font-bold text-red-500">RJ</span>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <PageShell title="About Me" subtitle="Get to know who I am, what I've learned, and where I come from.">
      <div className="space-y-16">
        {/* Bio Section */}
        <motion.div {...pageTransition} className="space-y-6">
          <div className="border-l-4 border-red-500 pl-6">
            <h2 className="mb-4 text-2xl font-bold text-white">Who I Am</h2>
            <p className="text-lg leading-relaxed text-zinc-300">
              Hello! My name is <span className="font-semibold text-white">Ridhin Jasti</span>, and I am a passionate student, developer, and technology enthusiast with a strong interest in artificial intelligence, software engineering, biotechnology, biomechanics, and computer science. I was born on <span className="text-red-400">July 9, 2009</span>, in <span className="text-white">Georgia, United States</span>, and I spent part of my childhood living in <span className="text-white">Suwanee, Georgia</span>. I currently live in <span className="text-white">Hyderabad, India</span>, where I am studying in <span className="text-white">Grade 11</span> at <span className="font-semibold text-white">Indus International School Hyderabad</span>.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-zinc-300">
              From a young age, I have always enjoyed understanding how technology works and creating projects that solve real-world problems. Whether I am programming AI systems, experimenting with new software, learning about biomechanics, or exploring biotechnology, I enjoy challenging myself by learning new concepts and applying them through hands-on projects.
            </p>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div {...pageTransition} className="space-y-6">
          <div className="border-l-4 border-red-500 pl-6">
            <h2 className="mb-4 text-2xl font-bold text-white">Education</h2>
            <p className="text-lg leading-relaxed text-zinc-300">
              I am currently a Grade 11 student at <span className="font-semibold text-white">Indus International School Hyderabad</span>, where I continue to build my academic foundation while pursuing my interests in technology, artificial intelligence, engineering, and scientific research. Alongside my school education, I dedicate a significant amount of my free time to self-learning through online courses, documentation, research papers, and practical programming projects.
            </p>
          </div>
        </motion.div>

        {/* Personal Philosophy */}
        <motion.div {...pageTransition} className="space-y-6">
          <div className="border-l-4 border-red-500 pl-6">
            <h2 className="mb-4 text-2xl font-bold text-white">Personal Philosophy</h2>
            <p className="text-lg leading-relaxed text-zinc-300">
              I believe that learning never truly ends. Every project is an opportunity to improve, every mistake is a lesson, and every challenge is a chance to grow. I enjoy exploring new technologies, pushing the limits of what I know, and sharing my work with the open-source community. Through curiosity, discipline, and continuous learning, I strive to become a better engineer, developer, and problem solver every day.
            </p>
          </div>
        </motion.div>

        {/* Goals Section */}
        <motion.div {...pageTransition} className="space-y-6">
          <div className="border-l-4 border-red-500 pl-6">
            <h2 className="mb-4 text-2xl font-bold text-white">Goals</h2>
            <p className="text-lg leading-relaxed text-zinc-300 mb-4">
              My long-term goal is to become a software engineer and AI engineer who develops innovative technologies capable of solving meaningful real-world problems.
            </p>
            <p className="text-lg text-zinc-400 mb-3">I hope to contribute to advancements in:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {["Artificial Intelligence", "Robotics", "Biotechnology", "Biomedical Engineering", "Human-Computer Interaction", "Automation", "Computer Vision"].map((goal, index) => (
                <motion.div
                  key={goal}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-center text-sm text-zinc-300 transition-colors hover:border-red-500 hover:text-white"
                >
                  {goal}
                </motion.div>
              ))}
            </div>
            <p className="mt-4 text-lg leading-relaxed text-zinc-300">
              I also aspire to build impactful open-source software that enables others to learn, collaborate, and innovate.
            </p>
          </div>
        </motion.div>
      </div>
    </PageShell>
  );
}

function HobbiesPage() {
  const hobbies = [
    { name: "Boxing", icon: "🥊" },
    { name: "Mixed Martial Arts (MMA)", icon: "🥋" },
    { name: "Weight Training", icon: "🏋️" },
    { name: "Coding", icon: "💻" },
    { name: "Video Games", icon: "🎮" },
    { name: "Learning AI", icon: "🤖" },
    { name: "Biomechanics", icon: "🦾" },
    { name: "Biotechnology", icon: "🧬" },
    { name: "Baking", icon: "🍰" },
    { name: "Cooking", icon: "👨‍🍳" },
    { name: "Cricket", icon: "🏏" },
  ];

  return (
    <PageShell title="Hobbies" subtitle="Things I enjoy that keep me mentally and physically active.">
      <motion.div
        variants={staggerChildren}
        initial="initial"
        animate="animate"
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {hobbies.map((hobby) => (
          <motion.div
            key={hobby.name}
            variants={itemFadeIn}
            whileHover={{ scale: 1.02, borderColor: "rgb(239 68 68)" }}
            className="border border-zinc-800 bg-zinc-900/30 p-6 text-center transition-all"
          >
            <span className="text-4xl mb-3 block">{hobby.icon}</span>
            <p className="text-white font-medium">{hobby.name}</p>
          </motion.div>
        ))}
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-zinc-400 text-center"
      >
        I also enjoy constantly experimenting with new technologies and building software that automates tasks or demonstrates interesting concepts.
      </motion.p>
    </PageShell>
  );
}

function SportsPage() {
  const sports = [
    "Basketball", "Soccer (Football)", "Cricket", "Tennis", 
    "Table Tennis", "Pickleball", "Volleyball", "Badminton", 
    "Billiards", "Swimming"
  ];

  return (
    <PageShell title="Sports" subtitle="Participating in sports has taught me teamwork, discipline, consistency, and problem-solving under pressure.">
      <motion.div
        variants={staggerChildren}
        initial="initial"
        animate="animate"
        className="flex flex-wrap gap-4"
      >
        {sports.map((sport) => (
          <motion.div
            key={sport}
            variants={itemFadeIn}
            whileHover={{ scale: 1.05 }}
            className="border-2 border-zinc-800 bg-zinc-900/50 px-6 py-4 text-white font-medium transition-all hover:border-red-500 hover:bg-red-600/10"
          >
            {sport}
          </motion.div>
        ))}
      </motion.div>
    </PageShell>
  );
}

function InterestsPage() {
  const interests = [
    "Artificial Intelligence", "AI Engineering", "Prompt Engineering", "Software Development",
    "Machine Learning", "Robotics", "Biomechanics", "Biotechnology",
    "Cybersecurity", "Computer Vision", "Human Movement Analysis", "Open Source Development",
    "Fitness Science", "Strength Training", "Cooking", "Baking"
  ];

  return (
    <PageShell title="Interests" subtitle="Fields that excite me and areas I'm actively exploring.">
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {interests.map((interest, index) => (
            <motion.div
              key={interest}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
              className="group relative overflow-hidden border border-zinc-800 bg-zinc-900/30 p-4 text-center transition-all hover:border-red-500"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <p className="relative text-sm text-zinc-300 group-hover:text-white transition-colors">{interest}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="border-l-4 border-red-500 pl-6 py-4"
        >
          <p className="text-zinc-300 italic">
            "I particularly enjoy combining multiple disciplines together—for example, applying AI techniques to biomechanics or developing intelligent software systems."
          </p>
        </motion.div>
      </div>
    </PageShell>
  );
}

function ProgrammingPage() {
  const languages = ["Python", "AI/ML", "Web Dev", "APIs", "Automation"];
  const areas = [
    "Artificial Intelligence", "Automation", "APIs", "Desktop Applications",
    "Web Development", "Machine Learning", "Open Source Software", "Networking", "Data Processing"
  ];

  return (
    <PageShell title="Programming" subtitle="Programming has become one of my biggest passions. I currently program in multiple languages and continuously learn new technologies.">
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <h3 className="text-xl font-semibold text-white">Languages & Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {languages.map((lang, index) => (
              <motion.span
                key={lang}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-red-600 px-5 py-2 text-sm font-semibold text-white"
              >
                {lang}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <h3 className="text-xl font-semibold text-white">Areas of Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {areas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className="flex items-center gap-3 border border-zinc-800 bg-zinc-900/30 p-4"
              >
                <div className="h-2 w-2 bg-red-500" />
                <span className="text-zinc-300">{area}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageShell>
  );
}

function AIPage() {
  const aiTopics = [
    "Large Language Models", "AI Agents", "Prompt Engineering", "Automation",
    "Retrieval-Augmented Generation (RAG)", "AI Workflows", "AI Integrations", "API Development"
  ];

  return (
    <PageShell title="Artificial Intelligence" subtitle="The field that excites me the most. I spend significant time experimenting with different AI models.">
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {aiTopics.map((topic, index) => (
            <motion.div
              key={topic}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 }}
              className="flex items-start gap-4 border border-zinc-800 bg-zinc-900/30 p-5 transition-all hover:border-red-500"
            >
              <div className="mt-1 flex h-8 w-8 items-center justify-center bg-red-600 text-sm font-bold text-white">
                {index + 1}
              </div>
              <div>
                <p className="text-white font-medium">{topic}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-zinc-400 italic border-l-4 border-red-500 pl-6"
        >
          I spend a significant amount of time experimenting with different AI models and discovering ways to improve efficiency through automation.
        </motion.p>
      </div>
    </PageShell>
  );
}

function ProjectsPage() {
  const projects = [
    {
      name: "Jarvis AI",
      description: "An open-source AI assistant inspired by Jarvis. Uses Google's Gemini API with an automatic rotating API key system that switches between multiple keys whenever one reaches its usage limit, allowing continuous operation without interruptions.",
      tags: ["AI", "Automation", "API Integration", "Open Source"],
      highlights: ["Gemini API", "Auto Key Rotation", "Token Management"]
    },
    {
      name: "Wi-Fi Human Mapping Project",
      description: "A proof-of-concept that explores the use of Wi-Fi signals for environmental sensing. Using a WSP44 Wi-Fi scanner, this project utilizes Wi-Fi signal information to estimate movement within a building and help generate a basic map of indoor spaces.",
      tags: ["Signal Processing", "Networking", "Data Analysis"],
      highlights: ["Movement Detection", "Indoor Mapping", "Wireless Sensing"]
    }
  ];

  return (
    <PageShell title="Projects" subtitle="Featured work that demonstrates my skills and interests.">
      <div className="space-y-8">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="border border-zinc-800 bg-zinc-900/30 p-8 transition-all hover:border-red-500/50"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center bg-red-600 text-xl font-bold text-white">
                  {project.name.charAt(0)}
                </div>
                <h2 className="text-2xl font-bold text-white">{project.name}</h2>
              </div>
              
              <p className="text-zinc-300 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="border border-zinc-700 px-3 py-1 text-xs text-zinc-400 uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-3 pt-2">
                {project.highlights.map((highlight) => (
                  <span key={highlight} className="bg-red-600/20 text-red-400 px-3 py-1 text-sm">
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </PageShell>
  );
}

function SkillsPage() {
  const skills = [
    "AI Prompt Engineering", "AI Engineering", "Software Development", "Python Programming",
    "API Integration", "Automation", "Machine Learning Fundamentals", "Problem Solving",
    "Open Source Development", "Git & GitHub", "Debugging", "Research",
    "Logical Thinking", "Project Development"
  ];

  const certifications = [
    { name: "Codingal Programming Courses", issuer: "Codingal (codingal.com)", type: "Free Programming" }
  ];

  return (
    <PageShell title="Skills & Certifications" subtitle="Technical abilities and completed certifications.">
      <div className="space-y-12">
        {/* Skills */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
          <motion.div
            variants={staggerChildren}
            initial="initial"
            animate="animate"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill}
                variants={itemFadeIn}
                whileHover={{ scale: 1.03 }}
                className="border border-zinc-800 bg-zinc-900/30 p-4 text-center transition-all hover:border-red-500 hover:bg-red-600/10"
              >
                <p className="text-sm text-zinc-300 group-hover:text-white">{skill}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Certifications */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white">Certifications</h3>
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="border-l-4 border-red-500 bg-zinc-900/30 p-6"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-white">{cert.name}</h4>
                  <p className="text-zinc-400">{cert.issuer}</p>
                </div>
                <span className="border border-red-500 px-3 py-1 text-xs text-red-400 uppercase">
                  {cert.type}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

function ContactPage() {
  return (
    <PageShell title="Contact" subtitle="Let's connect and build something amazing together.">
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid gap-6 md:grid-cols-2"
        >
          <div className="border border-zinc-800 bg-zinc-900/30 p-8 transition-all hover:border-red-500">
            <div className="mb-4 flex h-14 w-14 items-center justify-center bg-red-600 text-2xl">
              <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">Email</h3>
            <a href="mailto:ridhin.jasti@gmail.com" className="text-zinc-400 transition-colors hover:text-red-400">
              ridhin.jasti@gmail.com
            </a>
          </div>

          <div className="border border-zinc-800 bg-zinc-900/30 p-8 transition-all hover:border-red-500">
            <div className="mb-4 flex h-14 w-14 items-center justify-center bg-zinc-800 text-2xl">
              <svg className="h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">GitHub</h3>
            <a href="https://github.com/RidhinJAK" target="_blank" rel="noopener noreferrer" className="text-zinc-400 transition-colors hover:text-red-400">
              github.com/RidhinJAK
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="border border-zinc-800 bg-zinc-900/30 p-8"
        >
          <h3 className="mb-4 text-xl font-bold text-white">Quick Info</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-center gap-3">
              <span className="text-red-500">→</span>
              <span className="text-zinc-300"><strong className="text-white">Name:</strong> Ridhin Jasti</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-red-500">→</span>
              <span className="text-zinc-300"><strong className="text-white">Location:</strong> Hyderabad, India</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-red-500">→</span>
              <span className="text-zinc-300"><strong className="text-white">School:</strong> Indus International School Hyderabad</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-red-500">→</span>
              <span className="text-zinc-300"><strong className="text-white">Grade:</strong> 11</span>
            </div>
          </div>
        </motion.div>
      </div>
    </PageShell>
  );
}

function ChatbotPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", content: "Hello! I'm Ridhin's AI assistant. Ask me anything about Ridhin's background, skills, projects, or interests!" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const backendUrl = useMemo(
    () => import.meta.env.VITE_CHATBOT_API_URL || "https://your-render-backend.onrender.com/api/chat",
    []
  );

  const sendMessage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const nextMessages = [...messages, { role: "user" as const, content: trimmed }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(backendUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const data = await response.json();
      const reply = data.reply || data.response || data.message || "Thanks for your message!";
      setMessages((current) => [...current, { role: "assistant", content: reply }]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: "I couldn't reach the backend. Please configure your Render API URL in VITE_CHATBOT_API_URL and ensure CORS is enabled.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageShell title="Chat with AI" subtitle="Ask me anything about Ridhin Jasti's background, projects, or interests.">
      <div className="border border-zinc-800 bg-zinc-950/80">
        <div className="h-[32rem] space-y-4 overflow-y-auto p-6">
          {messages.map((message, index) => (
            <motion.div
              key={`${message.role}-${index}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`max-w-[80%] ${message.role === "user" ? "ml-auto" : ""}`}
            >
              <div className={`p-4 ${message.role === "user" 
                ? "bg-red-600 text-white ml-auto" 
                : "bg-zinc-800 text-zinc-100 border border-zinc-700"}`}
              >
                {message.content}
              </div>
            </motion.div>
          ))}
          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex gap-1"
            >
              <div className="h-2 w-2 bg-red-500 animate-bounce" style={{ animationDelay: "0ms" }} />
              <div className="h-2 w-2 bg-red-500 animate-bounce" style={{ animationDelay: "150ms" }} />
              <div className="h-2 w-2 bg-red-500 animate-bounce" style={{ animationDelay: "300ms" }} />
            </motion.div>
          )}
        </div>

        <form onSubmit={sendMessage} className="flex gap-3 border-t border-zinc-800 p-4">
          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Type your message..."
            className="flex-1 border border-zinc-700 bg-zinc-900 px-5 py-3 text-zinc-100 outline-none placeholder:text-zinc-500 focus:border-red-500 transition-colors"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="min-w-[120px] bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </PageShell>
  );
}

function NotFoundPage() {
  return (
    <PageShell title="404" subtitle="Page not found. Let's get you back on track.">
      <NavLink
        to="/"
        className="inline-block bg-red-600 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-red-500"
      >
        Return Home
      </NavLink>
    </PageShell>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-black text-zinc-100">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-zinc-900 bg-black/95 backdrop-blur-md">
        <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 md:px-10">
          <NavLink to="/" className="group flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center bg-red-600 text-lg font-bold text-white transition-transform group-hover:scale-105">
              RJ
            </div>
            <span className="hidden text-sm font-bold tracking-[0.2em] text-white md:block">RIDHIN</span>
          </NavLink>
          
          <ul className="flex items-center gap-2 md:gap-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `relative px-3 py-2 text-sm font-medium tracking-wide transition-all duration-200 ${
                      isActive
                        ? "text-white"
                        : "text-zinc-500 hover:text-zinc-200"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute inset-x-0 -bottom-[1px] h-0.5 bg-red-500"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Main Content with Animations */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/hobbies" element={<HobbiesPage />} />
            <Route path="/sports" element={<SportsPage />} />
            <Route path="/interests" element={<InterestsPage />} />
            <Route path="/programming" element={<ProgrammingPage />} />
            <Route path="/ai" element={<AIPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/chatbot" element={<ChatbotPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </motion.main>
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-black py-12">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center bg-red-600 text-sm font-bold text-white">
                RJ
              </div>
              <span className="text-sm text-zinc-500">© 2024 Ridhin Jasti. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-6">
              <NavLink to="/about" className="text-sm text-zinc-500 transition-colors hover:text-white">About</NavLink>
              <NavLink to="/projects" className="text-sm text-zinc-500 transition-colors hover:text-white">Projects</NavLink>
              <NavLink to="/contact" className="text-sm text-zinc-500 transition-colors hover:text-white">Contact</NavLink>
              <a href="https://github.com/RidhinJAK" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-500 transition-colors hover:text-white">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
