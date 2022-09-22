import {useState, useEffect} from 'react';
import {projects} from './Projects';
import { Link } from 'react-router-dom';

export default function Carousel(){

    const items = [...projects]
    const [currentItem, setCurrentItem] = useState({
        ...items[0],
        index: 0
    })

    function handleControls(e){
        let newCurrentItem = {}
        const currIndex = currentItem.index
        const itemsLength = items.length
        if(e.target.name == "prev"){
            if(currIndex == 0){
                newCurrentItem = {
                    ...items[itemsLength-1],
                    index: itemsLength-1
                }
            } else {
                newCurrentItem = {
                    ...items[currIndex-1],
                    index: currIndex-1
                }
            }
        } else {
            if(currIndex == itemsLength-1){
                newCurrentItem = {
                    ...items[0],
                    index: 0
                }
            } else {
                newCurrentItem = {
                    ...items[currIndex+1],
                    index: currIndex+1
                }
            }
        }

        setCurrentItem(newCurrentItem);
    }

    return(
        <div className="carousel">
            <h2 className="carousel-title">{currentItem.title}</h2>
            <div className="carousel-main">
                <button 
                    className="btn-left" 
                    name="prev"
                    onClick={handleControls}> &#60; </button>
                <img src={currentItem.img} alt=""/>
                <button 
                    className="btn-right" 
                    name="next"
                    onClick={handleControls}> &#62; </button>
            </div>
            <div className="carousel-dots">
                {
                    items.map((item, i) => {
                        if(i == currentItem.index){
                            return (<h1 className="carousel-dot active" key={i}>&#9679;</h1>);
                        } else {
                            return (<h1 className="carousel-dot" key={i}>&#9679;</h1>)
                        }
                    })
                }
            </div>
            <div className="full">
                <Link to={"/projects/"+currentItem.id}>
                    <button>More Info</button>
                </Link>
            </div>
        </div>
    )
}