import React from 'react'
// import Navbar from '../Navbar/Navbar';
import { useParams } from 'react-router-dom';
import data from '../../data/data/data';
import Quiz from './Quiz/Quiz';

const CouresDetails = () => {
    // const [filteredData, setFilteredData] = useState([]);
    const { id } = useParams();


    const filteredSirat = data.filter(item => item.id == id);
    // setFilteredData(filteredSirat);
    console.log(filteredSirat)
    return (
        <div>
        <div>
            {/* <Navbar /> */}
            <br />
            <hr />
            {
                filteredSirat.map(sirat => (
                    <p>{sirat.details} </p>
                ))
            }
            <p class="lead" ></p>
            



        </div>
        <Quiz></Quiz>
        </div>
    )
}

export default CouresDetails