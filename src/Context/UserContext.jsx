import { createContext, useState } from "react";

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
    return (
        <Context.Provider value={{offerList}}>
            {children}
        </Context.Provider>
    )
}