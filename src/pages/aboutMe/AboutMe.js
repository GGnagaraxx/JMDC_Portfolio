import Formal from '../../assets/images/Formal.png'
import IHate from './components/IHate';
import ILove from './components/ILove';
import PersonalInfo from "./components/PersonalInfo";
import StrengthWeak from './components/StrengthWeak';

export default function AboutMe(){

    return(
        <div className="about main-container">
            <div className="top">
                <div className="full">
                    <h1 className="page-title">ABOUT ME</h1>
                    <p className="quote">
                    "A jack of all trades is a master of none, 
                    but oftentimes better than a master of one."</p>
                </div>
                <img src={Formal} alt=""/>
            </div>
            <div className="body">
                <PersonalInfo/>
                <hr/>
                <ILove/>
                <hr/>
                <IHate/>
                <hr/>
                <StrengthWeak/>
            </div>
        </div>
    )
}