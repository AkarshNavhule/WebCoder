import React from 'react'
import vg from '../Assets/2.webp'
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"
const Home = () => {
  return (
    <>
      <div className='home' id='home'>
      <main>
        <h1>TechSavvy</h1>
        <p>Empowering Solutions for All..</p>
      </main>
    </div>

    <div className="home2">
    <img src={vg} alt="Graphics" />
      <div>
       <p>
       We empower young minds with innovative tech solutions, fostering problem-solving abilities. Join our journey of exploration and learning, where curiosity thrives.
        Together, we shape a brighter future through creativity and technology.
       </p>
      </div>
    </div>
    <div className="home3" id='about'>
      <div>
      <h1>Who we are ?</h1>
      <p> 
      TechSavvy is a forward-thinking and innovative tech company dedicated to providing cutting-edge solutions
       to tackle the challenges of the digital era. With a passion for technology and a drive for excellence, 
       we pride ourselves on being problem solvers, constantly pushing boundaries to find creative and efficient
        solutions for our clients.

Our team of tech experts is driven by a shared vision:
 to empower businesses and individuals with the tools and knowledge needed to thrive in an ever-evolving tech
  landscape. From developing state-of-the-art software applications to designing user-friendly interfaces,
   we leverage the latest advancements in technology to deliver exceptional results.
      </p>
  
      </div>
    </div>

    <div className="home4" id='brands'>
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{
            animationDelay : "0.3s",
          }}>
            <AiFillGoogleCircle/>
            <p>Google</p>
          </div>
          <div style={{
            animationDelay : "0.5s",
          }}>
            <AiFillAmazonCircle/>
            <p>Amazon</p>
          </div>
          <div style={{
            animationDelay : "0.7s",
          }}>
            <AiFillYoutube/>
            <p>Youtube</p>
          </div>
          <div style={{
            animationDelay : "1s",
          }}>
            <AiFillInstagram/>
            <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>
    </>
  
  )
}

export default Home