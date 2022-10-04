import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Formal from "../../assets/images/Formal.png"
import ProjectModal from "../../components/ProjectModal";
import { useState } from "react";


export default function Home(){

    const [openModal, setOpenModal] = useState(false);
    const [modalDetails, setModalDetails] = useState({})

    function handleOpenModal(open, details){
        if(open == null) return;

        details ? setModalDetails(details) : setModalDetails({});
        setOpenModal(open);
    }

    function handleCloseModal(){
        setOpenModal(false);
    }

    return(
        <div className="home main-container">
            <div className="top">
                <div className="full">
                    <h1>Juan Miguel Dela Cruz</h1>
                    <p>An Aspiring Web & Game Developer</p>
                </div>
                <img src={Formal} alt=""/>
            </div>
            <div className="body">
                <AboutMe></AboutMe>
                <hr/>
                <Projects
                    handleOpenModal={handleOpenModal}
                ></Projects>
                <hr/>
                <ContactMe></ContactMe>
            </div>
            {openModal ?
                <ProjectModal
                    modalDetails={modalDetails}
                    handleClose={handleCloseModal}
                />
            : null}
        </div>
    );
}