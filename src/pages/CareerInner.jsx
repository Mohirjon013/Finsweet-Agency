import React, { useContext } from 'react'
import { Context } from '../Context/UserContext';
import { useParams } from 'react-router-dom';
import { CareeerInnerApply, CareerInnerDescription, CarrerInnerDetail, Footer, Header, NewsLetter, TopOfFooter } from '../components';

function CareerInner() {
    const {offerList} = useContext(Context)
    
    const {id} = useParams() 
    const findedJob = offerList.find(item => item.id === +id)
    
    return (
        <>
            <Header />
            <main>
                <CareerInnerDescription item={findedJob}/>
                <CarrerInnerDetail id={findedJob.id}/>
                <CareeerInnerApply/>
                <NewsLetter/>
                <TopOfFooter/> 
            </main>
            <Footer/>
        </>
    )
}

export default CareerInner
