import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Formal from "../../assets/images/Formal.png"


export default function Home(){
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
                <Projects></Projects>
                <hr/>
                <ContactMe></ContactMe>
            </div>
        </div>
    );
}