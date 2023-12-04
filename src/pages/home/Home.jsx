import "./Home.scss";
import landing_img from "../../assets/images/PCCG-Cyber-4090-Gaming-PC.png";

const Home = () => {
  return (
    <div className="landing-container">
      <div className="landing-l">
        <h1>Лучшее время для апгрейда</h1>
        <p>видеокарты RTX 40-й серии</p>
        <a href="#" id="landing-btn">
          Подробнее
        </a>
      </div>
      <div className="landing-r">
        <img src={landing_img} alt="landing-pc" />
      </div>
    </div>
  );
};

export default Home;
