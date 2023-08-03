import Image from 'next/image'
import styles from './page.module.css'

// This is my resume made with tailwindcss and next.js
export default function Home() {
  return (
    <main className="font-serif bg-gradient-to-b from-gray-100 to-blue-200">
      {/* Nav Bar */}
      <section>
        <nav className="flex justify-between py-8 mx-5 pb-4 align-middle">
          <h1 className="text-2xl">DYLAN TSAO</h1>
          <ul className="flex justify-evenly items-center text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-lg">
          <a href="https://dylangtsao.github.io/" className="cursor-pointer px-1 hover:underline">WEBSITE</a>
          <a href="https://github.com/dylangtsao" className="cursor-pointer px-1 hover:underline">GITHUB</a>
          <a href="https://www.linkedin.com/in/dylan-tsao/" className="cursor-pointer px-1 hover:underline">LINKEDIN</a>
          </ul>
        </nav>
      </section>
      {/* Basic Info */}

      <section className="mx-5 pb-4 md:flex md:justify-between lg:flex lg:justify-between xl:flex xl:justify-between 2xl:flex 2xl:justify-between">
        <h2 className="text-center text-sm md:text-lg lg:text-lg xl:text-lg 2xl:text-lg">
          <a href="mailto: dylangt2@illinois.edu" className="hover:underline">dylangt2@illinois.edu</a> * (925) 699-3939
        </h2>
        <h2 className="pb-3 md:pb-6 lg:pb-6 xl:pb-6 2xl:pb-6 text-center text-sm md:text-lg lg:text-lg xl:text-lg 2xl:text-lg">708 S 6th Street,
        Champaign, IL 61820
        </h2>
      </section>

      {/* Education */}
      <section className="text-center mx-4 lg:pl-5 lg:text-start md:pl-5 md:text-start xl:pl-5 xl:text-start 2xl:pl-5 2xl:text-start">
        <h1 className="text-lg pt-5 font-extrabold underline pb-1">EDUCATION</h1>
        <div className="md:flex md:justify-between lg:flex lg:justify-between xl:flex xl:justify-between 2xl:flex 2xl:justify-between">
          <h2 className="font-bold">UNIVERSITY OF ILLINOIS AT URBANA-CHAMPAIGN</h2>
          <h2 className="pr-3 hidden lg:block md:block xl:block 2xl:block">Urbana, IL</h2>
        </div>
        <div className="md:flex md:justify-between lg:flex lg:justify-between xl:flex xl:justify-between 2xl:flex 2xl:justify-between">
          <h2 className="italic">Bachelor of Science in Liberal Arts and Sciences in Mathematics & Computer Science</h2>
          <h2 className="pr-3 hidden lg:block md:block xl:block 2xl:block">May 2025</h2>
        </div>
        
        <h2>GPA: 3.80</h2>

        <div className="md:flex md:justify-between lg:flex lg:justify-between xl:flex xl:justify-between 2xl:flex 2xl:justify-between">
          <h2 className="font-bold pt-3">TAIPEI AMERICAN SCHOOL (HS)</h2>
          <h2 className="pr-3 hidden lg:block md:block xl:block 2xl:block">Taipei, Taiwan</h2>
        </div>
        <div className="md:flex md:justify-between lg:flex lg:justify-between xl:flex xl:justify-between 2xl:flex 2xl:justify-between">
          <h2>AP Scholar with Distinction</h2>
          <h2 className="pr-3 hidden lg:block md:block xl:block 2xl:block">Aug 2018 - May 2021</h2>
        </div>
        <h2>GPA: 4.17</h2>
      </section>

      {/* Educational Development */}
      <section className="mx-4 text-center lg:pl-5 lg:text-start md:pl-5 md:text-start xl:pl-5 xl:text-start 2xl:pl-5 2xl:text-start">
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
        
      </section>

      {/* Leadership and Activities */}
      <section className="mx-4 text-center lg:pl-5 lg:text-start md:pl-5 md:text-start xl:pl-5 xl:text-start 2xl:pl-5 2xl:text-start">
        <h1 className="text-lg pt-5 font-extrabold underline pb-1">LEADERSHIPS & ACTIVITIES</h1>
        <div className="md:flex md:justify-between lg:flex lg:justify-between xl:flex xl:justify-between 2xl:flex 2xl:justify-between">
          <h2 className="font-bold">CS124 COURSE ASSISTANT</h2>
          <h2>Aug 2021 - Dec 2021</h2>
        </div>
        <h2 className="italic">Assistant</h2>
        <div className="px-3">
          <li>
            Coordinated and led weekly office hours effectively clarifying course concepts, 
            answering questions regarding quizzes, and providing guidance on machine projects.
          </li>
          <li>
            Demonstrated ability to effectively manage time and commitments, regularly dedicating 
            an average of 10 hours weekly to ensure the high quality of student support services.
          </li>
          <li>
            Established strong communication and interpersonal skills by explaining complex 
            computer science principles in an accessible manner.
          </li>
        </div>
        <div className="pt-3 md:flex md:justify-between lg:flex lg:justify-between xl:flex xl:justify-between 2xl:flex 2xl:justify-between">
          <h2 className="font-bold">SUMMER OF SIDE PROJECTS</h2>
          <h2>June 2022 - July 2022</h2>
        </div>
        <h2 className="italic">Participant</h2>
        <div className="px-3">
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

      {/* Skills */}
      <section className="mx-4 text-center lg:pl-5 lg:text-start md:pl-5 md:text-start xl:pl-5 xl:text-start 2xl:pl-5 2xl:text-start">
        <h1 className="pt-5 font-extrabold underline pb-1 text-lg">SKILLS</h1>
        <h1 className="font-bold">TECHNICAL</h1>
        <div className="px-3">
          <li>Java, C++, Python, Docker (Advanced) </li>
          <li>Kotin, CSS, HTML, JS (Int)</li>
        </div>
        <h1 className="font-bold pt-1">LANGUAGE</h1>
        <li className="px-3">Fluent in English and Chinese</li>
        <h1 className="font-bold pt-1">INTERESTS</h1>
        <li className="px-3 pb-14">
          Continous learning, Fitness, Health, Music
        </li>
        
      </section>
    </main>
  )
}
