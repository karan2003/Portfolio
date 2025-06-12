import { TypeAnimation } from 'react-type-animation'
import { motion } from "motion/react"

const Speech = () => {
  return (
    <motion.div className='bubbleContainer'
    animate={{ opacity: [0,1]}}
    transition={{ duration:1}}
    >
        <div className="bubble">
        <TypeAnimation
        sequence={[
        1000,
        "Welcome to  Karan's Portfolio Website",
        1000, // wait 
        "🚀 Tech enthusiast turning data into decisions and ideas into impact.",
        1000, // wait 
        "🧠 Python ninja , full-stack developer, and AI explorer with real-world project firepower.",
        1000, // wait 
        "🎯 From building dashboards to winning hackathons — I code with purpose and passion.",
        1000,
      ]}
      wrapper="span"
      speed={45}
      deletionSpeed={80}
      repeat={Infinity}
    />
        </div>
        <img src="/man.png" alt=""></img>
        </motion.div>

  )
}

export default Speech