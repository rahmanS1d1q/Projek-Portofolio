import React from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import {
  FaRobot,
  FaBrain,
  FaChartLine,
  FaDatabase,
  FaShieldAlt,
} from "react-icons/fa";
import { MdOutlineModelTraining } from "react-icons/md";

const Resume = () => {
  // Software Skill (mengacu ke CV: Python, Jupyter Notebook, N8N, TensorFlow)
  const softwareSkills = [
    { name: "Python", level: 80 },
    { name: "Jupyter Notebook", level: 75 },
    { name: "TensorFlow", level: 70 },
    { name: "N8N", level: 65 },
  ];

  // Bahasa (mengacu ke CV)
  const languages = [
    { name: "Indonesia", level: 95 },
    { name: "English", level: 70 }, // intermediate
  ];

  // Soft skill (mengacu ke CV)
  const softSkills = "Kepemimpinan - Kerja Tim - Komunikasi - Public Speaking";

  // Hard Skill (mengacu ke CV)
  const hardSkills = [
    "Machine Learning",
    "Data Analysis & Data Science",
    "Back-End Web Development",
    "Project Management",
  ];

  // Pengalaman (fokus hanya magang / program dicoding)
  const experiences = [
    {
      company: "Asah led by Dicoding (WFH)",
      position: "Project Manager, Pegawai Magang (Machine Learning Cohort)",
      duration: "Studi Independen",
      logo: <FaBriefcase />,
      bullets: [
        "Menjadi project manager di Capstone Project Machine Learning.",
        "Menyelesaikan capstone: sistem pendukung keputusan berbasis AI untuk sektor pertambangan (Adaptive Mining Operations Platform).",
        "Menyelesaikan kelas Belajar Fundamental Deep Learning (analisis sentimen teks & klasifikasi gambar).",
        "Menyelesaikan kelas Belajar Machine Learning untuk Pemula (clustering & klasifikasi).",
        "Menyelesaikan kelas Membangun Sistem Machine Learning (end-to-end hingga integrasi & deployment).",
      ],
    },
  ];

  // Pendidikan (mengacu ke CV)
  const education = [
    {
      school: "Universitas Negeri Surabaya — Surabaya",
      major: "S1 Sistem Informasi | Penjurusan: Knowledge Data Discovery (KDD)",
      detail: "IPK: 3.75 / 4.00",
      duration: "Agustus 2023 - Sekarang",
    },
    {
      school: "SMA Negeri 1 Krembung — Sidoarjo",
      major: "SMA, IPA",
      detail: "Aktif organisasi sekolah bidang keagamaan (SKI)",
      duration: "Maret 2020 - Agustus 2023",
    },
  ];

  // Apa yang bisa saya lakukan (lebih hard-skill oriented)
  const services = [
    "Data Cleaning, EDA, dan Visualisasi",
    "Text Mining & Klasifikasi (contoh: lowongan kerja)",
    "Machine Learning: Clustering dan Klasifikasi",
    "Deep Learning: Klasifikasi Gambar",
    "NLP: Analisis Sentimen Berbasis Teks",
    "Membangun Pipeline ML end-to-end hingga Deployment (dasar)",
    "Project Management: koordinasi tim dan timeline",
  ];

  // Fokus keahlian (opsional, tetap rapi untuk recruiter)
  const focusSkills = [
    "Feature Engineering - Evaluasi Model - Improvement",
    "Notebook Workflow - Dokumentasi & Reporting",
    "Integrasi Model ke Sistem (dasar)",
    "AI Terapan (minat) - RAG (minat)",
  ];

  // Minat (boleh tetap icon, atau ganti teks)
  const interests = [
    { icon: <FaRobot />, label: "Artificial Intelligence" },
    { icon: <FaBrain />, label: "Machine Learning" },
    { icon: <MdOutlineModelTraining />, label: "Deep Learning" },
    { icon: <FaChartLine />, label: "Data Science & Analytics" },
    { icon: <FaDatabase />, label: "RAG & AI Terapan" },
    { icon: <FaShieldAlt />, label: "Cyber Security (Basic)" },
  ];

  return (
    <div className="resume-container" id="resume">
      <div className="resume-content">
        {/* Left Column */}
        <div className="resume-section">
          <h3>SOFTWARE SKILLS</h3>
          {softwareSkills.map((skill, index) => (
            <div key={index} className="skill-item">
              <span>{skill.name}</span>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}

          <h3 style={{ marginTop: "40px" }}>BAHASA</h3>
          {languages.map((lang, index) => (
            <div key={index} className="skill-item">
              <span>{lang.name}</span>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: `${lang.level}%` }}
                />
              </div>
            </div>
          ))}

          <h3 style={{ marginTop: "40px" }}>SOFT SKILL</h3>
          <p style={{ color: "#ccc", lineHeight: "1.6" }}>{softSkills}</p>

          <h3 style={{ marginTop: "40px" }}>HARD SKILL</h3>
          <div className="hard-skill-list">
            {hardSkills.map((s, i) => (
              <p key={i} style={{ color: "#ccc", marginBottom: "10px" }}>
                {s}
              </p>
            ))}
          </div>
        </div>

        {/* Middle Column */}
        <div className="resume-section">
          <h3>PENGALAMAN</h3>
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="company-logo company-logo--icon">{exp.logo}</div>
              <div className="company-name">{exp.company}</div>
              <div className="position">{exp.position}</div>
              <div className="duration">{exp.duration}</div>

              {exp.bullets?.length ? (
                <ul className="exp-bullets">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}

          <h3 style={{ marginTop: "40px" }}>PENDIDIKAN</h3>
          {education.map((ed, index) => (
            <div key={index} className="experience-item">
              <div className="company-logo company-logo--icon">
                <FaGraduationCap />
              </div>
              <div className="company-name">{ed.school}</div>
              <div className="position">{ed.major}</div>
              <div className="duration">
                {ed.detail} | {ed.duration}
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="resume-section">
          <h3>APA YANG BISA SAYA LAKUKAN?</h3>
          <div style={{ marginBottom: "30px" }}>
            {services.map((service, index) => (
              <p key={index} style={{ color: "#ccc", marginBottom: "10px" }}>
                {service}
              </p>
            ))}
          </div>

          <h3>FOKUS KEAHLIAN</h3>
          <div style={{ marginBottom: "30px" }}>
            {focusSkills.map((skill, index) => (
              <p key={index} style={{ color: "#ccc", marginBottom: "10px" }}>
                {skill}
              </p>
            ))}
          </div>

          <h3>MINAT</h3>
          <div className="interest-grid">
            {interests.map((item, index) => (
              <div key={index} className="interest-item">
                <span className="interest-icon">{item.icon}</span>
                <span className="interest-text">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
