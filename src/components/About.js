import React from "react";

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-content">
        <div className="about-text">
          <h2>ABOUT ME</h2>
          <p className="email">rahmanshiddiq09@gmail.com</p>

          <p>
            Mahasiswa Universitas Negeri Surabaya Program Studi Sistem Informasi
            dengan penjurusan Knowledge Data Discovery (KDD). Memiliki minat di
            bidang data, analisis sistem, serta pengembangan solusi berbasis
            teknologi dan AI. Aktif dalam Unit Kegiatan Mahasiswa, yang membantu
            mengasah kemampuan kerja tim, komunikasi, dan kedisiplinan. Memiliki
            pemahaman dasar hingga menengah dalam data analysis, machine
            learning, serta pengelolaan proyek, dan terbiasa menggunakan tools
            pendukung pengolahan data dan AI.
          </p>
        </div>

        <div className="about-image">
          <img
            src="https://696f68b976634d918b86dea6.imgix.net/ChatGPT%20Image%20Jan%2020,%202026,%2006_45_47%20PM.png"
            alt="Muhammad Rahman Shiddiq"
            className="profile-image"
          />
          <div className="location">
            <p>Sidoarjo, Krembung</p>
            <p>61275</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
