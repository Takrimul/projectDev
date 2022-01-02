import React from 'react'
import {  useNavigate} from 'react-router-dom';
import photoprophet from '../../data/images/prophet-muhammad.jpg'
import PhotoUmar from '../../data/images/umar.jpg'
import photoBakar from '../../data/images/abu_bakar.jpg'
import photoUthman from '../../data/images/uthman.png'
const Course = () => {
    const navigate = useNavigate();
    const courses = [
        {
            title: 'Muhammad ﷺ',
            author: 'Wahidul Hady',
            img: photoprophet,
            id: 1
        },
        {
            title: 'Abu Bakar As Siddik',
            author: 'sirat academy',
            img: photoBakar,
            id: 2
        },
        {
            title: 'Umar Ibnul Khattab',
            author: 'sirat academy',
            img: PhotoUmar,
            id: 3
        },
        {
            title: 'Uthman Ibne Affan',
            author: 'Wahidul Hady',
            img: photoUthman,
            id: 4
        },
    ]
    const handleStart = (id) => {
        navigate(`/course-details/${id}`);
    }
    return (
        <div class=" d-flex justify-content-evenly">
            {
                courses.map(course => (
                    <div class="card" style={{ width: "18rem;" }}>
                        <img src={course.img} class="card-img-top" alt="As siddik" height="300" width="300" />
                        <div class="card-body">
                            <h5 class="card-title">{course.title}</h5>
                            <p class="card-text">by {course.author}</p>
                            <button onClick={() => handleStart(course.id)} class="btn btn-primary">Start Course</button>
                        </div>
                    </div>
                ))
            }
            {/* <div class="card" style={{width: "18rem;"}}>
                <img src={photoprophet} class="card-img-top" alt="Umar Ibnul Khattab" height="300" width="300"/>
                <div class ="card-body">
                <h5 class ="card-title">Muhammad <b>ﷺ</b></h5>
                <p class ="card-text">by Wahidul Hady</p>
                <Link to="/course-details" class ="btn btn-primary">Start Course</Link>
                </div>
            </div>
            <div class="card" style={{width: "18rem;"}}>
                <img src={photoBakar} class="card-img-top" alt="As siddik" height="300" width="300"/>
                <div class ="card-body">
                <h5 class ="card-title">Abu Bakar As Siddik</h5>
                <p class ="card-text">by sirat academy</p>
                <Link to="/course-details" class ="btn btn-primary">Start Course</Link>
                </div>
            </div>
            <div class="card" style={{width: "18rem;"}}>
                <img src={PhotoUmar} class="card-img-top" alt="Umar Ibnul Khattab" height="300" width="300"/>
                <div class ="card-body">
                <h5 class ="card-title">Umar Ibnul Khattab</h5>
                <p class ="card-text">by sirat academy</p>
                <Link to="/course-details" class ="btn btn-primary">Start Course</Link>
                </div>
            </div>
            <div class="card" style={{width: "18rem;"}}>
            <img src={photoUthman} class="card-img-top" alt="Uthman" height="300" width="300"/>
                <div class ="card-body">
                <h5 class ="card-title">Uthman Ibn Affan</h5>
                <p class ="card-text">by sirat academy</p>
                <a href="#" class ="btn btn-primary">Start Course</a>
                </div>
            </div> */}
        </div>
    )
}

export default Course