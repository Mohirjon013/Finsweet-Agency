import { createContext, useState } from "react";
import team1 from '../assets/images/team1.png'
import team2 from '../assets/images/team2.png'
import team3 from '../assets/images/team3.png'
import team4 from '../assets/images/team4.png'
import team5 from '../assets/images/team5.png'
import team6 from '../assets/images/team6.png'
import team7 from '../assets/images/team7.png'
import team8 from '../assets/images/team8.png'

export const Context = createContext(null)

export const UserContext = ({children}) => {
    // const  [careerJob, setCareerJob] = useState(null)
    const offerList = [
        { id: 1, title: "Full Stack Developer", location: "Bengaluru", salary: "$10K - $18K", equity: "No equity" },
        { id: 2, title: "Testing Engineer", location: "Remote", salary: "$08K - $10K", equity: "No equity" },
        { id: 3, title: "Hr Manager", location: "Mumbai", salary: "$08K - $10K", equity: "4 to 5 Yrs Exp" },
        { id: 4, title: "Product Designer", location: "Mumbai", salary: "$08K - $10K", equity: "4 to 5 Yrs Exp" },
        { id: 5, title: "Wordpress Developer", location: "Mumbai", salary: "$08K - $10K", equity: "4 to 5 Yrs Exp" },
        { id: 6, title: "Jr. QA Tester", location: "California, USA", salary: "$14K - $23K", equity: "No equity" },
        { id: 7, title: "Sr. UX Designer", location: "California, USA", salary: "$14K - $23K", equity: "No equity" },
        { id: 8, title: "Social Media Manager", location: "Kolkata, India", type: "Fulltime", salary: "$5K - $6K", equity: "Fresher" },
        { id: 9, title: "Golang Developer", location: "Mumbai", salary: "$08K - $10K", equity: "4 to 5 Yrs Exp" },
    ]


    const teamImgList = [
        { id: 1, img: team1, name: "James Carter", job: "Support Assistant" },
        { id: 2, img: team2, name: "Sarah Mitchell", job: "Product Manager" },
        { id: 3, img: team3, name: "David Nguyen", job: "Frontend Developer" },
        { id: 4, img: team4, name: "Emily Turner", job: "UI/UX Designer" },
        { id: 5, img: team5, name: "Michael Brooks", job: "Backend Developer" },
        { id: 6, img: team6, name: "Olivia Harris", job: "Marketing Specialist" },
        { id: 7, img: team7, name: "Daniel Kim", job: "DevOps Engineer" },
        { id: 8, img: team8, name: "Sophia Johnson", job: "QA Engineer" },
    ]
    return (
        <Context.Provider value={{offerList, teamImgList}}>
            {children}
        </Context.Provider>
    )
}