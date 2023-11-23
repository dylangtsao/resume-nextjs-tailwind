import Image from 'next/image'
import styles from './page.module.css'

// This is my resume made with tailwindcss and next.js
export default function Home() {
  return (
    <main className="bg-slate-50 font-serif text-black">
      {/* Nav Bar */}
      <section>
        <nav className="flex flex-col pt-10 py-8 mx-5 pb- align-middle items-center">
          <h1 className="text-5xl pb-1">Dylan Tsao</h1>
          <div className="flex flex-col md:flex-row">
            <h2 className="flex items-center justify-center text-center text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-lg">
              <h1 className="block md:hidden pr-1">|</h1>
              <h1 className="pr-1"> (925) 699-3939 |</h1>  
              <a href="mailto: dylangt2@illinois.edu" className="hover:underline">dylangt2@illinois.edu </a>
              <h1 className="block md:hidden pl-1">|</h1>
            </h2>
            <ul className="flex items-center text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-lg justify-center">
              <h1 className="block px-1">|</h1>
              <a href="https://www.linkedin.com/in/dylan-tsao/" className="cursor-pointer hover:underline">LinkedIn</a>
              <h1 className="block px-1">|</h1>
              <a href="https://github.com/dylangtsao" className="cursor-pointer hover:underline">Github</a>
              <h1 className="block px-1">|</h1>
              <a href="https://dylangtsao.github.io/" className="cursor-pointer hover:underline">Website</a>  
              <h1 className="block px-1 md:hidden">|</h1>
            </ul>
          </div>
          
        </nav>
      </section>
      {/* Basic Info */}

      {/* <section className="mx-5 pb-4 md:flex md:justify-between lg:flex lg:justify-between xl:flex xl:justify-between 2xl:flex 2xl:justify-between">
        <h2 className="text-center text-sm md:text-lg lg:text-lg xl:text-lg 2xl:text-lg">
          <a href="mailto: dylangt2@illinois.edu" className="hover:underline">dylangt2@illinois.edu</a> * (925) 699-3939
        </h2>
        <h2 className="pb-3 md:pb-6 lg:pb-6 xl:pb-6 2xl:pb-6 text-center text-sm md:text-lg lg:text-lg xl:text-lg 2xl:text-lg">708 S 6th Street,
        Champaign, IL 61820
        </h2>
      </section> */}

      {/* Education */}
      <section className="text-center mx-4 md:px-10 md:text-start xl:px-20">
        <h1 className="text-xl pt-5">EDUCATION</h1>
        <hr className=" border-black pb-1"/>
        <div className="pl-4 pt-1 md:flex md:justify-between lg:flex lg:justify-between xl:flex xl:justify-between 2xl:flex 2xl:justify-between">
          <h2 className="font-semibold">University of Illinois at Urbana-Champaign</h2>
          <h2 className="pr-3 hidden lg:block md:block xl:block 2xl:block">Urbana, IL</h2>
        </div>
        <div className="pl-4 md:flex md:justify-between lg:flex lg:justify-between xl:flex xl:justify-between 2xl:flex 2xl:justify-between">
          <h2 className="italic">Bachelor of Science in Mathematics & Computer Science</h2>
          <h2 className="pr-3 hidden lg:block md:block xl:block 2xl:block">May 2025</h2>
        </div>
        <h2 className="pl-4">Coursework: System Programming, Computer Architecture, Graph Theory, Data Structures</h2>
        <h2 className="pl-4">GPA: 3.80</h2>

        {/* <div className="md:flex md:justify-between lg:flex lg:justify-between xl:flex xl:justify-between 2xl:flex 2xl:justify-between">
          <h2 className="font-bold pt-3">TAIPEI AMERICAN SCHOOL (HS)</h2>
          <h2 className="pr-3 hidden lg:block md:block xl:block 2xl:block">Taipei, Taiwan</h2>
        </div>
        <div className="md:flex md:justify-between lg:flex lg:justify-between xl:flex xl:justify-between 2xl:flex 2xl:justify-between">
          <h2>AP Scholar with Distinction</h2>
          <h2 className="pr-3 hidden lg:block md:block xl:block 2xl:block">Aug 2018 - May 2021</h2>
        </div>
        <h2>GPA: 4.17</h2> */}
      </section>

      {/* Educational Development */}
      {/* <section className="mx-4 text-center lg:pl-5 lg:text-start md:pl-5 md:text-start xl:pl-5 xl:text-start 2xl:pl-5 2xl:text-start">
        <h1 className="text-lg pt-5 font-extrabold underline pb-1">EDUCATIONAL DEVELOPMENT</h1>
        <div className="md:flex md:justify-between lg:flex lg:justify-between xl:flex xl:justify-between 2xl:flex 2xl:justify-between">
          <h2 className="font-bold">GOOGLE DATA ANALYTICS</h2>
          <h2>May 2021 - July 2021</h2>
        </div>
        <div className="px-3">
          <li>
              Successfully completed a comprehensive training program on Google Data Analytics, focused on honing skills in
              gathering, cleaning, processing, and analyzing data.
          </li>
          <li>
              Gained hands-on experience in SQL for data extraction and manipulation, contributing to enhanced proficiency in
              collecting, formatting, and manipulating large datasets for analytical applications.
          </li>
          <li>
              Developed solid understanding of statistical techniques and their application in data analytics to guide data-driven
              decisions.
          </li>
        </div>
        
      </section> */}

      {/* Experience */}
      <section className=" mx-4 text-center md:px-10 md:text-start xl:px-20">
        <h1 className="text-xl pt-5 pl-0">EXPERIENCE</h1>
        <hr className=" border-black pb-1"/>
        <div className="pt-1 md:flex md:justify-between lg:flex lg:justify-between xl:flex xl:justify-between 2xl:flex 2xl:justify-between">
          <h2 className="pl-4 font-bold">CS124 Course Assistant</h2>
          <h2>Aug 2022 - Dec 2022</h2>
        </div>
        <div className="pt-1 block md:flex justify-between italic pl-4">
          <h2>University of Illinois at Urbana-Champaign</h2>
          <h2>Champaign, IL</h2>
        </div>
        
        <div className="px-3 pl-10">
          <li>
          Coordinated weekly office hours, effectively clarifying course concepts for 30+ students per week, 
          answering questions on quizzes, and guiding machine projects, resulting in an increased understanding of course material
          </li>
          <li>
          Demonstrated exceptional time management by dedicating 10 hours weekly, 
          enhancing the quality of student support services, as evidenced by an increase in student satisfaction ratings
          </li>
          <li>
          Accomplished strong communication skills by making complex computer science principles accessible,
           as noticeable by an increase in student comprehensive rates based on pre- and post-lecture surveys
          </li>
        </div>
        <div className="pt-3 md:flex md:justify-between lg:flex lg:justify-between xl:flex xl:justify-between 2xl:flex 2xl:justify-between">
          <h2 className="font-bold pl-4">Summer of Side Projects 2022</h2>
          <h2>June 2022 - July 2022</h2>
        </div>
        <div className="block md:flex justify-between pl-4">
          <h2 className="italic">University of Illinois at Urbana-Champaign</h2>
          <h2 className="italic">Remote</h2>
        </div>
        
        <div className="px-3 pl-10">
          <li>
            Actively engaged in a comprehensive, month-long program designed to enhance technical skill sets and inspire
            innovative thinking through hands-on project experiences.
          </li>
          <li>
            Participated in immersive tutorials and workshops on Chatbots, Flask, Command Line Programs, and Game
            Development, effectively incorporating these skills into various projects.
          </li>
          <li>
            Utilized in-depth understanding of command-line interfaces to create efficient, user-friendly command-line
            programs.
          </li>
          <li>
            Collaborated within a community of like-minded individuals, refining teamwork and communication skills, while
            also working independently to create unique software solutions.
          </li>
        </div>
        
      </section>
      {/* Projects */}
      <section className=" mx-2 text-center align-center flex flex-col justify-center md:mx-4 md:px-10 md:text-start xl:px-20">
        <h1 className="text-xl pt-5 pl-0">PROJECTS</h1>
        <hr className=" border-black pb-1"/>
        <div className="pt-1 md:flex md:justify-between lg:flex lg:justify-between xl:flex xl:justify-between 2xl:flex 2xl:justify-between">
          <div className="flex">
            <h2 className="pl-4 font-bold">Grape Card</h2>
            <h2 className="pl-1 italic">| Next.js, Typescript, CSS, Git</h2>
          </div>
          <h2>Aug 2023 - Present</h2>
        </div>
        <div className="px-3 pl-10">
          <li>
          Developing a credit card website by accurately mimicking the design and functionality of the Apple Card to
          showcase and enhance front-end development skills
          </li>
          <li>
          Utilizing a combination of Next.js and Typescript to create a responsive and interactive user interface, ensuring
          seamless user experience that closely aligns with the industry’s renowned design standards
          </li>
        </div>
        <div className="pt-1 md:flex md:justify-between lg:flex lg:justify-between xl:flex xl:justify-between 2xl:flex 2xl:justify-between">
          <div className="flex">
            <h2 className="pl-4 font-bold">Portfolio Website</h2>
            <h2 className="pl-1 italic">| JavaScript, Vanta.js, CSS/SCSS, HTML, Git</h2>
          </div>
          <h2>May 2023 - Present</h2>
        </div>
        <div className="px-3 pl-10">
          <li>
            Developed a portfolio website as my inaugural front-end project to showcase professional skills and projects
          </li>
          <li>
            Implemented responsive design techniques ensuring the website offers an optimal viewing experience across various
            devices and screen sizes to enhance user accessibility and engagement
          </li>
        </div>
        <div className="pt-1 md:flex md:justify-between lg:flex lg:justify-between xl:flex xl:justify-between 2xl:flex 2xl:justify-between">
          <div className="flex">
            <h2 className="pl-4 font-bold">NextGen Resume</h2>
            <h2 className="pl-1 italic">| Next.js, Tailwind CSS, Git</h2>
          </div>
          <h2>Aug 2023 - Sep 2023</h2>
        </div>
        <div className="px-3 pl-10">
          <li>
            Developed a responsive resume by focusing on creating a visually appealing and adaptable layout across various
            devices to showcase personal qualifications and experiences
          </li>
          <li>
            Experimented with Tailwind CSS in the project, enhancing CSS skills and understanding of utility-first frameworks,
            thereby improving the efficiency and maintainability of the website’s styling
          </li>
        </div>
        <div className="pt-1 md:flex md:justify-between lg:flex lg:justify-between xl:flex xl:justify-between 2xl:flex 2xl:justify-between">
          <div className="flex">
            <h2 className="pl-4 font-bold">Alter-Flash</h2>
            <h2 className="pl-1 italic">| C++, Javascript, NPM, Git, Docker</h2>
          </div>
          <h2>Feb 2023 - May 2023</h2>
        </div>
        <div className="px-3 pl-10">
          <li>
            Co-developed a unique flash-card program by enabling students to switch between various subject topics, thereby
            enhancing memorization to maximize prolonged studying
          </li>
          <li>
            Ensured code quality and testing efficiency using Catch2 library for C++ and Mocha for JavaScript, adhering to
            camelCase style guidelines and utilizing Clang-Tidy for code style checks and coverage computation
          </li>
          <li>
            Adopted a planning strategy for incremental development by weekly rotation between front-end and back-end
            groups to ensure balanced exposure and skill development across the project
          </li>
        </div>
      </section>
      {/* Skills */}
      <section className=" mx-4 text-center pb-20 md:px-10 md:text-start xl:px-20">
        <h1 className="text-xl pt-5 pl-0">SKILLS</h1>
        <hr className=" border-black pb-1"/>
        <div className="flex flex-col md:flex-row">
          <h1 className="font-semibold pl-4 pr-1">Languages:</h1>
          <h1>C/C++, Python, HTML/CSS, JavaScript, Typescript, Java, Tailwindcss, SQL</h1>
        </div>
       <div className="flex flex-col md:flex-row">
          <h1 className="font-semibold pl-4 pr-1">Frameworks/Developer Tools</h1>
          <h1>React, Node.js, Next.js, Git, Docker, Cursor, VS Code</h1>
       </div>
        
      </section>
    </main>
  )
}
