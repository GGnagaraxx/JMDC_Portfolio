import { useState, useEffect } from "react";
import Creative_Shot from '../../../assets/images/Creative_Shot.jpg'

export default function PersonalInfo(){
    
    const [currAge, setCurrAge] = useState(getCurrAge());

    useEffect(() => {
        setCurrAge(getCurrAge());
    }, [])

    function getCurrAge(){
        const currDate = new Date()
        let age = currDate.getFullYear() - 2000
        if(currDate.getMonth()+1 < 5){
            age--;
        } else if(currDate.getMonth()+1 == 5 && currDate.getDate() < 17){
            age--;
        }

        return age;
    }

    return(
        <section className="container personal-info">
            <div className="full">
                <div className="left">
                    <h2>Personal Info</h2>
                    <div className="card">
                        <p>I'm Juan Miguel L. Dela Cruz but people call me Gio</p>
                        <p>I'm currently {currAge} years old</p>
                        <p>I'm an IT graduate of TUP Manila with Latin Honors</p>
                        <p>I LOVE PROGRAMMING</p>
                    </div>
                </div>
                <div className="right">
                    <img src={Creative_Shot} alt=""/>
                </div>
            </div>
            <code>Fun Coding Fact: The age displayed in the card above automatically updates.</code>
    </section>
    );
}