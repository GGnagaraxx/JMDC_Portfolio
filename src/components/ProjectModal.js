import { useEffect, useState } from "react";
import Carousel from "./Carousel";


export default function ProjectModal({modalDetails, handleClose}){

    const [imgList, setImgList] = useState(getList())

    function getList(){

        let newList = []
        modalDetails.imgs.forEach(img => {
            newList.push({
                imgs:[img]
            })
        });

        return(newList);
    }

    useEffect(() => {
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
                    <hr/>
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