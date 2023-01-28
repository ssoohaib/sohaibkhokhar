import React,{useEffect} from 'react'
import './css/WorkCard.css'
// import Carousel from './Carousel'
import { Carousel } from 'react-responsive-carousel';
import './css/Carousel.css'

export default function Work(props) {
    
    useEffect(()=>{
        const carouselCounter=document.querySelectorAll('.carousel-status');
        const myCarouselCounter=document.querySelectorAll('.my-counter');

        const controlNext=document.querySelectorAll(".control-next");
        const controlPrev=document.querySelectorAll(".control-prev");
        
        for(let i=0;i<myCarouselCounter.length;i++)
            myCarouselCounter[i].innerText=carouselCounter[i].innerText;

        for(let j=0;j<controlNext.length;j++){
            controlNext[j].addEventListener("click",()=>{
                setTimeout(() => {
                    for(let i=0;i<myCarouselCounter.length;i++){
                        myCarouselCounter[i].innerText=carouselCounter[i].innerText;
                    }
                }, 1);
            })
        }

        for(let j=0;j<controlPrev.length;j++){
            controlPrev[j].addEventListener("click",()=>{
                setTimeout(() => {
                    for(let i=0;i<myCarouselCounter.length;i++){
                        myCarouselCounter[i].innerText=carouselCounter[i].innerText;
                    }
                }, 1);
            })
        }
    },[])


  return (
    
    <div className="work-bottom-container">

            <div className="work-row">
                <div className="work-left">
                    <div className="work-left-container">
                        <div className="work-left-top">
                            <p>{props.category}</p>
                            <h1>{props.title}</h1>
                            <p>{props.appType}</p>
                        </div>
                        <div className="work-left-bottom">
                            <div>
                                <p>Prototype</p>
                                <p className='my-counter'><i class="fa-solid fa-circle"></i>-<i class="fa-solid fa-circle"></i></p>
                            </div>
                            <div className="img-carousal">
                                <div className="img-container">
                                    <div className="img-slider">
                                    <Carousel>
                                        {
                                            props.img.map(x=>
                                                <div>
                                                    <img alt="" src={require("./Images/"+x)} />
                                                </div>
                                            )
                                        }
                                    </Carousel>
                                    </div>                        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="work-right">
                    <div className="right-top">
                        <div className="right-top-container">
                            <p>{props.p1}</p>
                            <p>{props.p2}</p>
                            <p>Developed Using:</p>
                            <table>
                                    <tr>
                                        {
                                            props.technologies.map((x,c)=>
                                                c<=3 &&
                                                <td><i className={x.i}></i>{x.tech}</td>
                                            )
                                        }
                                    </tr>
                                    <tr>
                                        {
                                            props.technologies.map((x,c)=>
                                                c>3 &&
                                                <td><i className={x.i}></i>{x.tech}</td>
                                            )
                                        }
                                    </tr>
                            </table>

                        </div>
                    </div>
                    <div className="right-bottom">
                        {
                            props.github.status ? 
                            <a href={props.github.url}><i class="fa-brands fa-github" ></i><p>Source Code&nbsp;&nbsp;<i class="fa-solid fa-arrow-up-right-from-square"></i></p></a>
                            :
                            <div className="a-wrapper" style={{cursor:'not-allowed'}}  title='Unavailable'>
                                <a href="#" className='btn-disable'><i class="fa-brands fa-github"></i><p>Source Code&nbsp;&nbsp;<i class="fa-solid fa-arrow-up-right-from-square"></i></p></a>
                            </div>
                        }
                        <p></p>
                        {
                            props.site.status ? 
                            <a href={props.site.url}><i class="fa-solid fa-globe"></i><p>Visit Site&nbsp;&nbsp;<i class="fa-solid fa-arrow-up-right-from-square"></i></p></a>
                            :
                            <div className="a-wrapper" style={{cursor:'not-allowed'}} title='Unavailable'>
                                <a href="#" className='btn-disable'><i class="fa-solid fa-globe"></i><p>Visit Site&nbsp;&nbsp;<i class="fa-solid fa-arrow-up-right-from-square"></i></p></a>
                            </div>
                        }
                    </div>
                </div>

            </div>
            {
                !props.next && 
                    <i class="fa-solid fa-chevron-down next-work-btn"></i>
            }
        </div>

  )
}
