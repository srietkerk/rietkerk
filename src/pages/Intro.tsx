import profilePic from '../assets/sarah-rietkerk.jpg'
import '../styles/Intro.css'

export default function Intro() {
  return (
    <div className='intro'>
      <div className='background'/>
      <div className='intro-content'>
          <p>Hi, I'm Sarah, and I'm excited that you're here! Drag to start your adventure!</p>
          <img src={profilePic} className='profile-pic' alt="Caucasian female, with short brown hair stands laughing in a flower garden wearing a white dress and green graduation sash." />
        </div>
    </div>
  )
}
