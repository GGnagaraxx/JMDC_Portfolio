import sample_logo from '../assets/images/sample_logo.png'
import sample_1080_1920 from '../assets/images/sample_1080_1920.jpg'
import Prowchart_SS1 from '../assets/images/Prowchart_SS1.png'
import Prowchart_SS2 from '../assets/images/Prowchart_SS2.png'
import Prowchart_SS3 from '../assets/images/Prowchart_SS3.png'

export const projects = [
    {
        id: "prowchart",
        title: "Prowchart",
        imgs: [Prowchart_SS1, Prowchart_SS2, Prowchart_SS3],
        details: [`Prowchart was a web-based flowchart programming language and IDE. The project was created by me and my groupmates (a group of 4).
        My role was to create the logic of the whole system (backend developer). The project was made using HTML, CSS and vanilla JS.`,
        "Check it here: https://miguelito-13.github.io/prowchart/"]
    },
    {
        id: "jarvis",
        title: "JARVIS",
        imgs: ["https://scontent.fmnl25-3.fna.fbcdn.net/v/t1.15752-9/101708776_676061849893839_583505337918583542_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=7gjJi0X58OsAX8M6CtZ&_nc_oc=AQmZVWqsuj23RSeeyOKT3RmmhWVv2clOoAsnRNDPOsdID1dgt_Ac48mUIdW6jQaooqU&_nc_ht=scontent.fmnl25-3.fna&oh=03_AVIifschoBM7Q--FWZ4lesFopGAoB5SG9YRq8a_JHEpd8Q&oe=636090FA"],
        details: [`JARVIS is a Java based programming language. It was created by me and my groupmates on our second year of college 
        as a project for our subject "Programming Language". I made the backend logic of the system on my own by using the OOP principles
        that I know at the time.`]
    },
    {
        id: "sample_title_2",
        title: "Sample Title 2",
        imgs: ["https://picsum.photos/1920/1080"],
        details: ["2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eius repellendus accusamus et cupiditate. Fugit enim totam facere saepe et."]
    },
    {
        id: "sample_title_3",
        title: "Sample Title 3",
        imgs: [sample_1080_1920],
        details: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eius repellendus accusamus et cupiditate. Fugit enim totam facere saepe et."]
    },
]


export default {
    projects
}