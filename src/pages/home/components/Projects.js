import Carousel from "../../../components/Carousel"
import { projects } from "../../../components/Projects"

export default function Projects({handleOpenModal}){
    return(
        <section>
            <div className="container">
                <h2>Projects</h2>
                <div className="full center-content">
                    <div className="card">
                        <Carousel
                            list={projects}
                            dispTitle={true}
                            dispButton={true}
                            handleOpenModal={handleOpenModal}
                        ></Carousel>
                    </div>
                </div>
            </div>
        </section>
    )
}