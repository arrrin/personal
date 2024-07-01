// components/ArinSalapsi.js
import React from 'react';

const Details = () => {
  return (
    <div className="font-sans m-5">
      <h1 className="text-3xl font-bold mb-4">Arin Salapsi</h1>
      <h2 className="text-2xl mb-4">Currently Software Developer at Knoware Learning</h2>

      <section>
        <h3 className="text-xl font-semibold mb-2">📘 Quick Overview</h3>
        <h4 className="text-lg font-medium mb-2">Current Learning Objectives 📚</h4>
        <ul className="list-disc list-inside mb-4">
          <li><strong>In-depth Docker Training</strong></li>
          <li><strong>Typescript Proficiency</strong></li>
          <li><strong>Advanced Angular Techniques</strong></li>
        </ul>
      </section>

      <section>
        <h4 className="text-lg font-medium mb-2">Professional Skills</h4>
        <ul className="list-disc list-inside mb-4">
          <li>Fundamental Software Development</li>
          <li>System Design Expertise</li>
          <li>Web Development Mastery</li>
          <li>Backend Development Proficiency</li>
          <li>CI/CD Pipeline Development</li>
          <li>Server Maintenance and Management</li>
          <li>Proficient in English (TOEIC Score: 920)</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Experience</h3>
        <h4 className="text-lg font-medium mb-1">Software Developer at Knoware Learning</h4>
        <p className="italic mb-2">Since May 2024</p>
        <p className="mb-2">Develop Back office system and centralize company data for scaling</p>
        <ul className="list-disc list-inside mb-4">
          <li>Design and develop Frontend, Backend and Database.</li>
          <li>Centralizing all company data to system.</li>
          <li>Developing on CQRS pattern in project.</li>
          <li>Developing by using Functional programming in project.</li>
          <li>Agile</li>
        </ul>
        <p className="font-semibold">Technologies</p>
        <ul className="list-disc list-inside mb-4">
          <li>Mainly Typescript</li>
          <li>Angular</li>
          <li>Tailwind</li>
          <li>Express</li>
          <li>Monorepo</li>
          <li>Postgresql</li>
          <li>Docker</li>
          <li>Linux</li>
        </ul>

        <h4 className="text-lg font-medium mb-1">Part-time Software Developer at Knoware Learning</h4>
        <p className="italic mb-2">August 2023 - May 2024</p>
        <p className="mb-2">Develop Back office system.</p>
        <ul className="list-disc list-inside mb-4">
          <li>Develop Frontend and Backend.</li>
        </ul>
        <p className="font-semibold">Technologies</p>
        <ul className="list-disc list-inside mb-4">
          <li>Javascript</li>
          <li>AngularJS</li>
          <li>Springboot</li>
          <li>Bootstrap</li>
          <li>MySql</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Education</h3>
        <p className="font-semibold">Bachelor of Computer Engineering, King Mongkut's Institute of Technology Ladkrabang</p>
        <p className="italic mb-2">April 2024 - Second-class honor</p>
        <p className="font-semibold">Relevant Skills and Knowledge</p>
        <ul className="list-disc list-inside">
          <li>Hardware & Embedded Systems Design</li>
          <li>ReactJS</li>
          <li>C++</li>
          <li>Springboot</li>
          <li>Bootstrap</li>
          <li>HTML, CSS, and JavaScript</li>
          <li>System Architecture Design</li>
        </ul>
      </section>
    </div>
  );
};

export default Details;