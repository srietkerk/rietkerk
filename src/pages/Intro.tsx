import profilePic from '../assets/sarah-rietkerk.jpg'
import '../styles/Intro.css'

//alt text if possible: 
// Caucasian female, with short brown hair stands laughing in a flower garden wearing a white dress and green graduation sash."

export default function Intro() {
  return (
    <div className='intro'>
      <div className='intro-content'>
        <svg xmlns="http://www.w3.org/2000/svg" id="b" width="700" height="300" viewBox="0 0 490.8502 160.7098">
          <path id="curve" fill="transparent" d="m.5,223.5C.5,100.3405,100.3405.5,223.5.5s223,99.8405,223,223"/>
          <text width="475" x="65">
            <textPath xlinkHref='#curve'>
              Hi, I'm Sarah, and I'm excited that you're here! Drag to start your adventure!
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  )
}
