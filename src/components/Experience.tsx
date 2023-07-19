import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { styles } from "../Styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../HOC";
import { textVariant } from "../utils/motion";

interface ExperienceCardProps {
  experience: {
    title: string;
    company_name: string;
    icon: string;
    iconBg: string;
    date: string;
    points: string[];
  };
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="w-full h-full flex justify-center items-center">
          <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{margin:0 }}>{experience.company_name}</p>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, index) => (
            <motion.li
              variants={textVariant(0.5)}
              key={`experience-points-${index}`}
              className={`text-white-100 text-[14px] pl-1 tracking-wider`}
            >
              {point}
            </motion.li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant(1)}>
        <p className={styles.sectionSubText}>What have I done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
      <div className="empty-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
