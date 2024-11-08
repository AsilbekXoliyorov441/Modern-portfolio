"use client"
import {projects} from "@/data";
import {PinContainer} from "@/components/ui/3d-pin";
import {FaLocationArrow} from "react-icons/fa";
import MagicButton from "./MagicButton";
import { useState } from "react";

const RecentProjects = () => {
    const [projectData , setProjectData] = useState(projects.slice(0,4));
    const [back , setBack] = useState(false);

    const addProjects = () => {
        if(back === false){
            setProjectData(projects);
        }else(
            setProjectData(projectData.slice(0,4))
        )
        setBack(!back);
    }
    
    return(
        <div className={"py-20"} id={"projects"}>
            <h1 className={"heading"}>
                A small selection of {' '}
                <span className={"text-purple"}>recent projects</span>
            </h1>
            <div className={"flex flex-wrap items-center justify-center p-4 gap-x-24 "}>
                {projectData?.map(({id , title , des , img , iconLists , link}) => (
                    <div key={id} className={" sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem]  flex items-center justify-center sm:w-[570px] w-[80vw]"}>
                        <PinContainer title={link} href={link}>
                           <div className={"relative flex items-center justify-center sm:w-[570px] sm:h-[40vh] w-[80vw] overflow-hidden h-[30vh] "}>
                               <div style={{objectFit:"contain"}} className={"relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]"}>
                                   <img style={{objectFit:"contain"}} src="/bg.png" alt="bg-img"/>
                               </div>
                               <img src={img} alt={title} className="z-10 absolute bottom-0"/>
                           </div>
                            <h1 className={"font-bold lg:text-2xl md:text-xl text-base line-clamp-1"}>{title}</h1>
                            <p className={"lg:text-xl lg:font-normal font-light text-sm line-clamp-2"}>{des}</p>
                            <div className={"flex items-center justify-between mt-7 mb-3"}>
                                <div className={"flex items-center"}>
                                    {iconLists.map((icon , index) => (
                                        <div key={icon} className={"border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"}
                                        style={{
                                            transform:`translateX(-${5 * index * 2}px)`
                                        }}
                                        >
                                            <img src={icon} alt={icon} className={"p-2"} />
                                        </div>
                                    ))}
                                </div>
                                <div className={"flex justify-center items-center"}>
                                    <p className={"flex lg:text-xl md:text-xs text-sm text-purple"}>Check Live Site</p>
                                    <FaLocationArrow className={"ms-3"} color={"#cbacf9"} />
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
            <div style={{display:"flex" ,justifyContent:"center" }}>
                    <MagicButton
                    handleClick={addProjects}
                    icon={<FaLocationArrow/>}
                    position='center'
                    title={back ? "Show less projects"  :"Show more projects"}/>
            </div>
        </div>
    )
}

export default RecentProjects;