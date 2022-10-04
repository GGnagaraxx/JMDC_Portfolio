import { useEffect, useState } from "react";
import Carousel from "../../components/Carousel";
import ProjectModal from "../../components/ProjectModal";
import { projects } from "../../components/Projects";

export default function Projects(){

    const [projectsList, setProjectsList] = useState(projects);
    const [openProjDetails, setOpenProjDetails] = useState(-1);

    function handleOpenDetails(e){
        if(!(e && e.currentTarget)) return;

        setOpenProjDetails(e.currentTarget.id);
    }

    function handleCloseModal(){
        setOpenProjDetails(-1);
    }

    return(
        <div className="projects main-container">
            <div className="top">
                <h1>PROJECTS</h1>
            </div>
            <div className="body">
                <section className="container">
                        {
                            projectsList.map((project, i)=>{
                                return(
                                    <div id={i} key={i} className="card project" onClick={handleOpenDetails}>
                                        <img src={project.imgs[0]} alt=""/>
                                        <h2>{project.title}</h2>
                                    </div>
                                )
                            })
                        }
                </section>
            </div>

            {openProjDetails != -1 ? 
                <ProjectModal
                    modalDetails={projectsList[openProjDetails]}
                    handleClose={handleCloseModal}
                />
            : null}
        </div>
    )
}