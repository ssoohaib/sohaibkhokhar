import React from 'react'
import { useEffect,useState } from 'react'
import './css/About.css'

export default function About() {

  const [maxWidth,setWidthCheck]=useState(768.99);


  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {

      const span=document.getElementsByTagName('span');
      for(let i=0;i<7;i++){
        span[i].addEventListener('mouseover',()=>{
          span[i].classList.add('hollow-span')
        })

        span[i].addEventListener('mouseout',()=>{
          span[i].classList.remove('hollow-span')
        })
      }

      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  }

  const { height, width } = useWindowDimensions();


  return (
    <div className='about'>
       <div className="about-container">
          <div className="about-heading">
            <h1><span>A</span><span>b</span><span>o</span><span>u</span><span>t</span>&nbsp;<span>M</span><span>e</span></h1>
          </div>
          <div className="about-bottom">
            <div className="about-r1">
              <div className="about-r1-left">
                <img src={require('./Images/me/me-horizontal.png')} alt="" />
              </div>
              <div className="about-r1-right">
                <div className="about-r1-info">
                  <h1>Hey, I'm <br /> Sohaib Khokhar 👋</h1>
                  <p>Web Developer</p>
                </div>
              </div>
            </div>
            <div className="about-r2">
                <h1>About me</h1>
                <p>
                Persevering developer bringing more than <span>three years</span> of expertise showing professional, <span>detail-oriented</span>, and organized entitlement. <span>Solution-focused</span> Intern with experience in MERN development, enhancing designs, gathering client-based requirements, along with cloning <span>REACT</span> projects for personal enhancement. Mentored university's struggling juniors from basic logic building to GIT/GITHUB. Recognized as <span>dependable</span> and <span>socially-approachable</span> team-worker while developing projects.
                </p>

                <h1>Technologies I work with</h1>

                <table>
                  <tr>
                    <td><i class="fa-brands fa-react"></i>REACT.js</td>
                    <td><i class="fa-brands fa-node-js"></i>Node.js</td>
                    {!(width<maxWidth)&&
                      <td><i class="fa-brands fa-square-js"></i>Express</td>
                    }
                    {!(width<maxWidth)&&
                      <td><i class="fa-solid fa-database"></i>MongoDB</td>
                    }
                  </tr>
                  {(width<maxWidth)&&
                    <tr>
                      <td><i class="fa-brands fa-square-js"></i>Express</td>
                      <td><i class="fa-solid fa-database"></i>MongoDB</td>
                    </tr>
                  }

                  <tr>
                    <td><i class="fa-solid fa-database"></i>PLSQL/MySQL</td>
                    <td><i class="fa-solid fa-database"></i>Mongoose</td>
                    {!(width<maxWidth)&&
                      <td><i class="fa-solid fa-play"></i>Socket.io</td>
                    }
                    {!(width<maxWidth)&&
                      <td><i class="fa-solid fa-play"></i>EJS</td>
                    }
                  </tr>
                    {(width<maxWidth)&&
                      <tr>
                        <td><i class="fa-brands fa-react"></i>react.js</td>
                        <td><i class="fa-brands fa-react"></i>EJS</td>
                      </tr>
                    }

                  <tr>
                    <td><i class="fa-brands fa-git-alt"></i>Version Control</td>
                    <td><i class="fa-brands fa-github"></i>GitHub</td>
                    {!(width<maxWidth)&&
                      <td><i class="fa-solid fa-terminal"></i>BASH</td>
                    }
                    {!(width<maxWidth)&&
                      <td><i class="fa-solid fa-play"></i>C++/OOP</td>
                    }
                  </tr>
                  {(width<maxWidth)&&
                    <tr>
                      <td><i class="fa-solid fa-terminal"></i>BASH</td>
                      <td><i class="fa-brands fa-react"></i>react.js</td>
                    </tr>
                  }
                  
                </table>
            </div>
          </div>

          <div className="footer">
            <div className="footer-container">
                <a href="https://www.linkedin.com/in/sohaibkhokhar/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
                <a href="mailto:work.sohaibkhokhar@gmail.com"><i class="fa-regular fa-envelope"></i></a>
            </div>
          </div>  
       </div>
    </div>
  )
}
