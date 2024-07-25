import { education, experience, research } from "@/types/main";
import { useState } from "react";
import { ViewAll } from "../certifications/Certifications";
import SectionWrapper from "../SectionWrapper";
import ExperienceCard from "./ExperienceCard";

interface Props {
  experienceData: experience[];
  educationData: education[];
  researchData: research[];
}

const Experiences = ({ experienceData, educationData, researchData }: Props) => {
  const [show, setShow] = useState("Relevant Work");
  const [viewAll, setViewAll] = useState(false);

  const [experiences, setExperiences] = useState([...experienceData].reverse() as experience[]);
  const [educations, setEducations] = useState([...educationData].reverse() as education[]);
  const [researches, setResearches] = useState([...researchData].reverse() as research[]);

  return (
    <SectionWrapper id="experience" className="min-h-screen">
      <h2 className="text-4xl text-center">Experience</h2>

      <div className="w-fit mx-auto mt-6 p-2 bg-white dark:bg-grey-800 rounded-md flex gap-2 items-center">
        {['Relevant Work', 'Education', 'Research & Projects'].map((e, i) => (
          <button
            key={i}
            onClick={() => setShow(e)}
            className={`py-2 px-4 rounded-md transition-colors ${show === e ? 'bg-violet-600 text-white' : 'hover:bg-gray-100 hover:dark:bg-grey-900 text-black dark:text-white'}`}
          >
            {e}
          </button>
        ))}
      </div>

      <div className="lg:container sm:mx-4 lg:mx-auto lg:w-5/6 2xl:w-3/4">
        <div className="relative wrap overflow-hidden p-4 md:py-10 md:px-0">
          <div className="left-6 md:left-1/2 absolute border-opacity-20 border-gray-400 dark:border-grey-800 h-full border"></div>

          {viewAll
            ? (show === "Relevant Work" ? experiences : show === "Education" ? educations : researches).map((e, i) => (
              // @ts-ignore
              <ExperienceCard key={i} {...e} index={i} />
            ))
            : (show === "Relevant Work" ? experiences : show === "Education" ? educations : researches).slice(0, 2).map((e, i) => (
              // @ts-ignore
              <ExperienceCard key={i} {...e} index={i} />
            ))
          }
        </div>
      </div>

      {(show === "Relevant Work" ? experiences : show === "Education" ? educations : researches).length > 2 &&
        <ViewAll scrollTo='experience' title={viewAll ? 'Okay, I got it' : 'View All'} handleClick={() => setViewAll(!viewAll)} />
      }
    </SectionWrapper>
  );
}

export default Experiences;
