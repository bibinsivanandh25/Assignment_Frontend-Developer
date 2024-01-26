import Header from '../../ui/Header';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <section className="about-container">
      <Header />
      <h2>About Provision Store</h2>
      <p>
        Provision Store is an E-shop website that serves as a virtual provision
        marketplace. Users can buy various types of provision products from the
        comfort of their homes.
      </p>
      <p>
        Our project follows a well-organized folder structure to maintain code
        readability and scalability:
      </p>
      <ul>
        <li className="about-list">
          src/
          <ul className="about-list">
            <li>features/</li>
            <li>pages/</li>
            <li>services/</li>
            <li>images/</li>
            <li>utils/</li>
            <li>ui</li>
          </ul>
        </li>
        <li className="about-list">public/</li>
        <li className="about-list">package.json</li>
      </ul>
      <p>
        Throughout the development process, we encountered challenges such as
        integrating complex APIs and ensuring cross-browser compatibility.
        However, we overcame these challenges through collaborative
        problem-solving and rigorous testing.
      </p>
      <p>
        To start the project:
        <ol>
          <li>Clone the repository from GitHub.</li>
          <li>
            Run <code>npm install</code> to install dependencies.
          </li>
          <li>
            Start the development server with <code>npm start</code>.
          </li>
          <li>
            Access the application in your browser at
            <code>http://localhost:3000</code>.
          </li>
        </ol>
      </p>
    </section>
  );
};

export default AboutPage;
