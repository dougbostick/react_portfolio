import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const About = () => {
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          I am a software engineer searching for a company where I can apply my
          skills to developing solutions with the latest technologies. I am a
          software engineer who has always been a critical thinker and enjoys
          solving problems. I have a strong background in full-stack development
          and am passionate about building exceptional interfaces that make for
          a seamless user experience.
        </p>
        <p>
          I am well versed in various coding languages such as Javascript,
          Python, HTML, and CSS and Object Oriented Programming concepts through
          Java. I am also experienced with back-end concepts such as REST APIs,
          HTTP protocol, and relational databases using SQL and front-end
          concepts such as REACT frameworks and redux. Outside of development I
          also study data structure and algorithms to expand my problem-solving
          mindset.
        </p>
        <p>
          I am a hard worker, an excellent communicator, and a great problem
          solver. I am confident I could make a positive impact as a Torch team
          member and would love to discuss the role and what I can offer in more
          depth.
        </p>
      </div>
    </div>
  )
}

export default About
