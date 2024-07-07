// src/components/Home.js
import './Home.css';
import meetCoach from'../Assets/meet-coach.jpeg';

const Home = () => {
  return (
    <div className='home-container'>
      <div className="title-container">
        <h1>John Carlo Saquing</h1>
        <h3>Fitness Coach/<span>Software Engineer</span></h3>
      </div>
      <div className="content-container">
        <h2>READY TO <span>TRANSFORM</span> YOUR LIFE <br/> AND BUILD <span>STRENGTH</span>?</h2>
        <p>The journey begins with you.
        Keep it simple.</p>
      </div>
      <div className="coach-content-container">
        <div className="meet-coach-container">
          <img src={meetCoach} alt="" />
          <div className="meet-coach">
            <h2>Meet Coach</h2>
            <p>My name is Carlo/Caloy, and I've been a dedicated personal trainer for over five years. I began my fitness journey at 18 and never looked back.
            <br/>
            My mission is to help individuals achieve their best selves, whether that means losing weight, building muscle, or improving overall fitness. To fully embrace life, we must change our mindset—positivity is essential.
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
