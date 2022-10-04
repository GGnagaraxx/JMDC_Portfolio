import { useEffect, useState } from "react";
import Carousel from "./Carousel";


export default function ProjectModal({modalDetails, handleClose}){

    console.log("rendered", modalDetails)
    const [imgList, setImgList] = useState(getList())

    function getList(){
        console.log("modalDetails: ", modalDetails)

        let newList = []
        modalDetails.imgs.forEach(img => {
            newList.push({
                imgs:[img]
            })
        });

        return(newList);
    }

    useEffect(() => {
        console.log("modalDetails: ", modalDetails)
        setImgList(getList());
    }, [modalDetails])
    
    function handleOuterClicked(e){
        if(e.target.className == "outer-modal"){
            handleClose();
        }
    }

    return(
        <div className="outer-modal" onClick={handleOuterClicked}>
            <div className="modal">
                <div className="modal-header">
                    <button className="modal-close" onClick={handleClose}>X</button>
                </div>
                <div className="modal-body">
                    <h1 className="modal-title">{modalDetails.title}</h1>
                    <Carousel
                        list={imgList}
                        dispTitle={false}
                        dispButton={false}
                    ></Carousel>
                    <div className="modal-content">
                        {modalDetails.details.map((detail, i) => {
                            return <p key={i}>{detail}</p>
                        })}
                    </div>
                </div>
                <div className="modal-footer">

                </div>
            </div>
        </div>
    )
}