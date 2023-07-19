import { SectionWrapper } from '../HOC'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { fadeIn,textVariant } from '../utils/motion'
import { styles } from '../Styles'
import { code, github } from '../assets'
import { projects } from '../constants'

interface ProjectCardProps {
  name: string
  description: string
  tags: {
    name: string,
    color: string
  }[],
  image: string
  source_code_link: string
  index: number
}

const ProjectCard = ({ index, name, description, tags, image, source_code_link }: ProjectCardProps) => {
return (
  <motion.div
    variants={fadeIn("up","spring",index*0.5,0.75)}
  ><Tilt
    options={{
      max: 45,
      scale:1,
      speed: 450,
    }}
    className="bg-tertiary rounded-2xl p-5 sm:w-[360px] w-full"
  >
    <div className="relative w-full h-[230px]">
      <img src={image} alt={name} className='w-full h-full object-cover rounded-xl'/>
      <div className="absolute inset-0 flex justify-end m-3 card_img-hover">
        <div
          onClick={()=>{
            window.open(source_code_link, "_blank")
          }}
          className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
        >
          <img src={github} alt="github" className='w-1/2 h-1/2 object-contain'/>
        </div>
        <div
          onClick={()=>{
            window.open(source_code_link, "_blank")
          }}
          className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mx-1'
        >
          <img src={code} alt="Live websiite" className='w-1/2 h-1/2 object-contain'/>
        </div>
      </div>
    </div>

    <div className="mt-5">
      <h3 className='text-white font-bold text-[24px]'>{name}</h3>
      <p className='mt-2 text-secondary text-[14px]'>{description}</p>
    </div>
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <p key={tag.name} className={`${tag.color} text-[14px]`}>{tag.name}</p>
      ))}
    </div>
    </Tilt></motion.div>
)
}

const Works = () => {
  return (
    <>
    <motion.div variants={textVariant(1)}>
        <p className={styles.sectionSubText}>My Works</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("","",0.1,1)}
          className='mt-3 text-secondary text-[17px] leading-[30px] max-w-3xl'
        >
          I have worked on many projects. Some of them are listed below.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard {...project}  index={index} key={`project-${index}`} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "work")