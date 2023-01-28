import React,{useState,useEffect} from 'react'
import './css/Work.css'
import WorkCard from './WorkCard'

export default function Work() {

  const [work,setWork]= useState([]);

    useEffect(() => {
      const span=document.getElementsByTagName('span');
      for(let i=0;i<span.length;i++){
        span[i].addEventListener('mouseover',()=>{
          span[i].classList.add('hollow-span')
        })

        span[i].addEventListener('mouseout',()=>{
          span[i].classList.remove('hollow-span')
        })
      }

        
        async function getRecords() {
          const response = await fetch(`http://localhost:5000/work`);
        
          if (!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            window.alert(message);
            return;
          }
        
          const recordss =await  response.json();
          setWork(recordss);
        }
        getRecords();

        return;
    },[]); 

  return (
    <div className="work">
      <div className="work-container">
        <div className="work-heading">
          <h1><span>W</span><span>o</span><span>r</span><span>k</span></h1>
          <p> - A mixture of the things I've done so far - A mixture of the things I've done so far - </p>
          <i class="fa-solid fa-chevron-down"></i>
          <i class="fa-solid fa-chevron-down"></i>
        </div>

        <div className="work-bottom">
          {
            work.map((x,count)=>
            <WorkCard
              key={x._id} 
              category={x.category}
              title={x.title}
              appType={x.appType}
              img={x.img}
              p1={x.p1}
              p2={x.p2}
              technologies={x.technologies}
              github={x.github}
              site={x.site}
              next={(work.length-1)==count}
            />          
            )
          }
        </div>
      </div>
    </div>
  )
}
