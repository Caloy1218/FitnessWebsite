// src/components/About.js
import { Link } from 'react-router-dom';
import './About.css';
const About = () => {
  return (
    <div className='about-container'>
      <div className="about-me">
        <h1>Meet Caloy</h1>
        <p>Information Technology Bachelor, <br/> <span> Certified Instructor/Online Trainer</span>.</p>
      </div>
      <div className="mission">
        <h2>My Mission</h2>
        <p>
          <br/> 
          I am John Carlo Saquing, also known as "Coach-Caloy". I believe everyone has the potential to achieve their desired physique, and I'm here to help you reach your fitness and health goals.
          <br/> 
          <br/> 
          My fitness journey began in 2017. Initially, I spent three months in the gym without seeing significant results. During a vacation, I realized that I might have been doing something wrong. With the rise of the internet, I utilized it to identify and correct my mistakes.
          <br/> <br/> 
          I believe my mission in life is to help people become their best selves, whether that means losing weight, gaining muscle, or improving overall fitness. As a personal trainer, I have successfully guided many clients to reach their fitness goals. I have developed a unique method that ensures you progress from A to B effectively.
          <br/> <br/> 
          Fitness shouldn't be complicated. With so many different approaches to losing weight and gaining muscle, it can be overwhelming to know where to start. My coaching simplifies everything, making it easy to follow.
          <br/> 
          To learn more about my offerings, check out my <Link to="/online-coaching"><span>online coaching</span></Link>.
          </p>
          <br/> 
          <h3>"Fitness is not about being better than someone else. <br/><span>It’s about being better than you used to be.</span> "</h3>
      </div>
    </div>
  );
};

export default About;
