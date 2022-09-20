import Carousel from "../components/Carousel";
import ContactMe from "../components/ContactMe";
import { Link } from "react-router-dom"


export default function Home(){
    return(
        <div className="home main-container">
            <div className="top">
                <div className="full">
                    <h1>Juan Miguel Dela Cruz</h1>
                    <p>An Aspiring Web & Game Developer</p>
                </div>
                <img src="https://picsum.photos/200/300" alt=""/>
            </div>
            <div className="body">
                <section>
                    <div className="container about-me">
                        <h2>About Me</h2>
                        <div className="left">
                            <img src="https://picsum.photos/300/300" alt=""/>
                        </div>
                        <div className="right">
                            <div className="capsule-l">
                                <p>Hard Working</p>
                            </div>
                            <div className="capsule-r">
                                <p>Logical Thinker</p>
                            </div>
                            <div className="capsule-l">
                                <p>Fast Learner</p>
                            </div>
                            <div className="capsule-r">
                                <p>Analytical</p>
                            </div>
                        </div>
                        <div className="full">
                            <Link to="/about-me"><button>More About Me</button></Link>
                        </div>
                    </div>
                </section>
                <hr/>
                <section>
                    <div className="container">
                        <h2>Projects</h2>
                        <div className="full center-content">
                            <div className="card">
                                <Carousel></Carousel>
                            </div>
                        </div>
                    </div>
                </section>
                <hr/>
                <ContactMe></ContactMe>
            </div>
        </div>
    );
}