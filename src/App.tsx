import "./App.css";

function App() {
  return (
    <div className="app">
      {/* ヘッダー */}
      <header className="header">
        <nav className="nav">
          <div className="nav-brand">
            <h2>Harry46497</h2>
          </div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Hello, I'm <span className="gradient-text">Harry</span>
            </h1>
            <p className="hero-description">
              愛知工業大学の3年生で、Webアプリケーションを作成しています。
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">
                プロジェクトを見る
              </a>
              <a href="#contact" className="btn-secondary">
                お問い合わせ
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-image">
              <div className="profile-placeholder">
                <i className="fas fa-user"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-grid">
              <div className="about-text">
                <p>
                  私は技術に情熱を注ぐソフトウェア開発者です。常に新しい技術を学び、
                  ユーザーにとって価値のあるソリューションを作成することを目指しています。
                </p>
                <p>
                  フロントエンドからバックエンドまで、幅広い技術スタックを扱い、
                  品質の高いコードと優れたユーザーエクスペリエンスの提供に取り組んでいます。
                </p>
              </div>
              <div className="about-details">
                <div className="detail-card">
                  <h3>
                    <i className="fas fa-university"></i> 教育
                  </h3>
                  <div className="detail-item">
                    <strong>大学:</strong> 愛知工業大学
                  </div>
                  <div className="detail-item">
                    <strong>学年:</strong> 3年生
                  </div>
                  <div className="detail-item">
                    <strong>学部:</strong> 情報科学部 コンピュータシステム学科
                  </div>
                  <div className="detail-item">
                    <strong>研究室:</strong> 徳久研究室 (自然言語処理)
                  </div>
                </div>

                <div className="detail-card">
                  <h3>
                    <i className="fas fa-certificate"></i> 資格・認定
                  </h3>
                  <div className="certifications">
                    <div className="cert-item">
                      <span className="cert-name">基本情報技術者試験</span>
                      <span className="cert-year">2025年</span>
                    </div>
                    <div className="cert-item">
                      <span className="cert-name">
                        普通自動車第一種運転免許
                      </span>
                      <span className="cert-year">2023年</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skill-items">
                <span className="skill-item">React</span>
                <span className="skill-item">TypeScript</span>
                <span className="skill-item">JavaScript</span>
                <span className="skill-item">HTML</span>
                <span className="skill-item">CSS</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skill-items">
                <span className="skill-item">Node.js</span>
                <span className="skill-item">Python</span>
                <span className="skill-item">Java</span>
                <span className="skill-item">Firebase</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools & Others</h3>
              <div className="skill-items">
                <span className="skill-item">Blender</span>
                <span className="skill-item">Unity</span>
                <span className="skill-item">Arduino</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Project</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-header">
                <h3>Buzz Talk</h3>
                <div className="project-links">
                  <a
                    href="https://github.com/mizunoryuki/syshack_2025spring"
                    aria-label="GitHub"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
              <p>観客の盛り上がりを可視化するWebアプリケーション</p>
              <div className="project-tech">
                <span>React</span>
                <span>CSS</span>
                <span>Firebase</span>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>隧道</h3>
                <div className="project-links"></div>
              </div>
              <p>HD2Dを用いたホラーゲーム</p>
              <div className="project-tech">
                <span>Unity</span>
                <span>Blender</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <div className="contact-content">
            <div className="contact-links">
              <a href="k23119kk@aitech.ac.jp" className="contact-link">
                <i className="fas fa-envelope"></i>
                Email
              </a>
              <a href="https://github.com/harry46497" className="contact-link">
                <i className="fab fa-github"></i>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
