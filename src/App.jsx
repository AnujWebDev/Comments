import './App.css'
import Post1 from './Components/Post1'
import Post2 from './Components/Post2'
import Post3 from './Components/Post3'
import Post4 from './Components/Post4'
import Post5 from './Components/Post5'


function App() {

  return (
    <div className='bg-black'>
      <div data-aos="fade-up" data-aos-duration="1000" className="container" id="cont">
          <div className="box">
                <div style={{ fontFamily: "'DM Serif Display', serif",fontSize:'30px',textDecoration:'underline' }} className="side front">AulaCube</div>
                <div style={{ fontFamily: "'DM Serif Display', serif",fontSize:'30px',textDecoration:'underline' }} className="side back">AulaCube</div>
                <div style={{ fontFamily: "'DM Serif Display', serif",fontSize:'30px',textDecoration:'underline' }} className="side left">AulaCube</div>
                <div style={{ fontFamily: "'DM Serif Display', serif",fontSize:'30px',textDecoration:'underline' }} className="side right">AulaCube</div>
                <div style={{ fontFamily: "'DM Serif Display', serif",fontSize:'30px',textDecoration:'underline' }} className="side top">AulaCube</div>
                <div style={{ fontFamily: "'DM Serif Display', serif",fontSize:'30px',textDecoration:'underline' }} className="side bottom">AulaCube</div>
            </div>
        </div>
      <div data-aos="flip-up" data-aos-duration="1000">
        <Post1/>
       </div>
       <div data-aos="flip-up" data-aos-duration="1000">
        <Post2/>
       </div>
       <div data-aos="flip-up" data-aos-duration="1000">
        <Post3/>
       </div>
       <div data-aos="flip-up" data-aos-duration="1000">
        <Post4/>
       </div>
       <div data-aos="flip-up" data-aos-duration="1000">
        <Post5/>
       </div>
    </div>
  )
}

export default App
