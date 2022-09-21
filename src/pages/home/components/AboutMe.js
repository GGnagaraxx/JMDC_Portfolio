import { Link } from "react-router-dom"

export default function AboutMe(){
    return(
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
                    <Link to="/about-me">
                        <button>More About Me</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}