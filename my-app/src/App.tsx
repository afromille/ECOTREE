import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container">
          <img src="logo.png" alt="Logo" className="logo" />
          <h1>ECOTREE</h1>
        </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#ranking">Ranking</a>
          <a href="#about">Sobre</a>
        </nav>
        <div className="auth-buttons">
          <button className="signup-button">Torne-se Eco</button>
          <button className="login-button">LoginEco</button>
        </div>
      </header>
      <main className="App-main">
        <div className="content">
          <img src="https://th.bing.com/th/id/OIP.JXuNDO7QtarHiQCWtCrbKQHaEg?w=280&h=180&c=7&r=0&o=5&pid=1.7" alt="Imagem 1" />
          <p>ECOTREE</p>
          <p>Transforme sua empresa em um ícone ecológico com nosso sistema inovador!</p>
        </div>
        <div className="img2">
          <img src="https://th.bing.com/th/id/OIP.HuAtBtJEIv-zHVXB-FfoKAHaHa?w=150&h=180&c=7&r=0&o=5&pid=1.7" alt="Imagem 2" />
          <p>No mundo de hoje, onde a natureza está gritando por socorro, surge a EcoTree! Um sistema inovador que certifica empresas que realmente se importam com o planeta. Se você acha que sua empresa é a próxima grande em sustentabilidade, é hora de brilhar! Nosso objetivo é simples: classificar as empresas com base em suas ações ecológicas.</p>
        </div>
        <div className="img3">
          <img src="https://th.bing.com/th/id/OIP.be5aDPIIMcp7dKHWdZwdcQHaHa?w=173&h=180&c=7&r=0&o=5&pid=1.7" alt="Imagem 3" />
          <p>Se você está fazendo a diferença, vamos te dar o reconhecimento que você merece! Junte-se a nós nessa jornada verde e descubra como sua empresa pode se destacar no ranking das mais ecológicas.</p>
        </div>
        <div className="img4">
          <img src="https://th.bing.com/th/id/OIP.4aDPIIMcp7dKHWdZwdcQHaHa?w=173&h=180&c=7&r=0&o=5&pid=1.7" alt="Imagem 4" />
          <p>Participe de nossos workshops e eventos para aprender mais sobre práticas sustentáveis e como implementá-las em sua empresa.</p>
        </div>
        <div className="img5">
          <img src="https://th.bing.com/th/id/OIP.5aDPIIMcp7dKHWdZwdcQHaHa?w=173&h=180&c=7&r=0&o=5&pid=1.7" alt="Imagem 5" />
          <p>Conecte-se com outras empresas ecológicas e compartilhe suas experiências e estratégias para um futuro mais verde.</p>
        </div>
        <div className="contact-form" style={{ width: '100vw', padding: '20px', boxSizing: 'border-box' }}>
          <form>
            <label>
              Empresa:
              <input type="text" name="empresa" />
            </label>
            <br />
            <label>
              Email:
              <input type="email" name="email" />
            </label>
            <br />
            <label>
              Enviar Mensagem:
              <textarea name="mensagem"></textarea>
            </label>
            <br />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </main>
      <footer className="App-footer">
        EcoTree
      </footer>
    </div>
  );
}

export default App;
