import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../Context/UserContext';
import { Footer, Header, TeamBlog, TeamInfo, TopOfFooter } from '../components';

function CompanyTeam() {
    const {teamImgList} = useContext(Context)
    const {id} = useParams()
    const findedTeam = teamImgList.find(item => item.id === +id)
    console.log(findedTeam);
    
    return (
        <>
            <Header/>
            <main>
                <TeamInfo item={findedTeam}/>
                <TeamBlog/>
                <TopOfFooter/>
            </main>
            <Footer/>
        </>
    )
}

export default CompanyTeam
