import './home.css'
import image from '../../Image/Profile.png'
const Home = () => {
  return (
    <div className='home-container section'>
      <div className='my-image'>
        <img src={image} alt="" />
      </div>
      <div className='information'>
        <h4>Hello, I'm</h4>
        <h1 className='fullname'>Shivam Prakash</h1>
        <h2 className='role'>Frontend Developer</h2>
        <div className="buttons">
            <div className='btn'>Download CV</div>
            <div className='btn bg-black'><a href="#contact">Contact Info</a></div>
        </div>
        <div className="social-media-platforms">
          <a href="https://www.linkedin.com/in/shivam-prakash-a7603834a/"><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://github.com/Shivam-pro"><i className="fa-brands fa-github"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Home
