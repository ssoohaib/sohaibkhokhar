import React,{useEffect} from 'react'
import './css/MainIntro.css'

function MainIntro() {

  useEffect(()=>{
    const h1=document.getElementsByTagName('h1');
    h1[0].addEventListener('mouseover',()=>{
      h1[0].classList.add('hollow-h');
      h1[1].classList.remove('hollow-h');
    })

    h1[1].addEventListener('mouseover',()=>{
      h1[0].classList.remove('hollow-h');
      h1[1].classList.add('hollow-h');
    })

    h1[0].addEventListener('mouseout',()=>{
      h1[0].classList.remove('hollow-h');
      h1[1].classList.add('hollow-h');
    })
    
  },[])


  return (
    <div className="intro">
        <div className="intro-container">
            <p><span>👋</span>, my name is Sohaib and I am a freelance</p>
            <h1>Webdeveloper</h1>
            <h1 className='hollow-h'>& an Admirer</h1>
            <div className="below-p">
                <p className='lol'>based in Pakistan</p>
                <p className='lol'>junior at <span><a href="">NUCES</a></span>.</p>
            </div>

            <div className="btn-container">
                <a href="https://www.linkedin.com/in/sohaibkhokhar/" target="_blank">LinkedIn&nbsp;&nbsp;<i class="fa-brands fa-linkedin"></i></a>
                <a href="mailto:work.sohaibkhokhar@gmail.com">Hire me&nbsp;&nbsp;<i class="fa-regular fa-paper-plane"></i></a>
            </div>
        </div>
    </div>
  )
}

export default MainIntro