import Certifications from './components/Certifications';
import Education from './components/Education';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Skills from './components/Skills';
import classes from './styles.module.css';

export default function Cvpage() {

  return (
    <div style={{minHeight: "2000px"}}>
        <div>
            <Intro />
            <Skills />
        </div>
        <Projects />
        <div>
            <Certifications />
            <Education />
        </div>
    </div>
  );
}