import React from "react";
import './Consult.css';
import doctorImage1 from '../assets/users/doct-1.png';
import doctorImage2 from '../assets/users/doct-2.png';
import doctorImage3 from '../assets/users/doct-3.png';
import doctorImage4 from '../assets/users/doct-4.png';
import doctorImage5 from '../assets/users/doct-5.png';
import doctorImage6 from '../assets/users/doct-6.png';
import doctorImage7 from '../assets/users/doct-7.png';
import doctorImage8 from '../assets/users/doct-8.png';
import doctorImage9 from '../assets/users/doct-9.png';
import doctorImage10 from '../assets/users/doct-10.png';
import doctorImage11 from '../assets/users/doct-11.png';
import dummyimage from '../assets/users/dummy-doct.png';

function Consult(){
    const doctors = [
        {
            name: "Dr. Anandi Lal",
            title: "Director & Head of the Department",
            specialty: "Mental Health and Behavioral Sciences, Clinical Psychology",
            experience: "46+ Years",
            gender: "Male",
            profileLink: "#",
            imageUrl: doctorImage1
        },
        {
            name: "Dr. Amitabh Saha",
            title: "Senior Consultant",
            specialty: "Mental Health And Behavioural Sciences, Psychiatry",
            experience: "11+ Years",
            gender: "Male",
            profileLink: "#",
            imageUrl: doctorImage2
        },
        {
            name: "Dr. Danish Ahmed",
            title: "Associate Director & Clinical Administrator",
            specialty: "Mental Health And Behavioural Sciences, Psychiatry",
            experience: "25+ Years",
            gender: "Male",
            profileLink: "#",
            imageUrl: doctorImage3
        },
        {
            name: "Dr. Nisha Khanna",
            title: "Senior Consultant - Counseling Psychologist",
            specialty: "Clinical Psychology",
            experience: "22+ Years",
            gender: "Female",
            profileLink: "#",
            imageUrl: doctorImage4
        },
        {
            name: "Dr. Ashwani Kumar",
            title: "Principal Consultant - Psychiatry",
            specialty: "Psychiatry",
            experience: "38+ Years",
            gender: "Male",
            profileLink: "#",
            imageUrl: doctorImage5
        },
        {
            name: "Dr. Prerna Khanna",
            title: "Senior Consultant - Clinical Psychology",
            specialty: "Clinical Psychology, Mental Health And Behavioural Sciences",
            experience: "15+ Years",
            gender: "Female",
            profileLink: "#",
            imageUrl: doctorImage6
        },
        {
            name: "Dr. Puneet Mathur",
            title: "Senior Consultant",
            specialty: "Psychiatry",
            experience: "13+ Years",
            gender: "Male",
            profileLink: "#",
            imageUrl: doctorImage7
        },
        {
            name: "Dr. Sandeep Govil",
            title: "Senior Consultant - Psychiatry",
            specialty: "Psychiatry, Mental Health And Behavioural Sciences",
            experience: "24+ Years",
            gender: "Male",
            profileLink: "#",
            imageUrl: dummyimage
        },
        {
            name: "Dr. Soumiya Mudgal",
            title: "Senior Consultant",
            specialty: "Mental Health And Behavioural Sciences, Psychiatry",
            experience: "13+ Years",
            gender: "Female",
            profileLink: "#",
            imageUrl: doctorImage8
        }
        // Add more doctor objects here
    ];
    const doctors1=[
        {
            name: "Dr. Shashi Bhushan Kumar",
            title: "Senior Consultant - Psychiatrist",
            specialty: "Mental Health And Behavioural Sciences, Psychiatry",
            experience: "21+ Years",
            gender: "Male",
            profileLink: "#",
            imageUrl: dummyimage
        },
        {
            name: "Dr. Shailaja Pokhriyal",
            title: "Senior Consultant",
            specialty: "Clinical Psychology, Mental Health And Behavioural Sciences",
            experience: "18+ Years",
            gender: "Female",
            profileLink: "#",
            imageUrl: doctorImage9
        },
        {
            name: "Dr. Ashutosh Tripathi",
            title: "Senior Consultant - Psychiatry",
            specialty: "Mental Health And Behavioural Sciences, Psychiatry",
            experience: "28+ Years",
            gender: "Male",
            profileLink: "#",
            imageUrl: doctorImage10
        },
        {
            name: "Ms. Sanjeeta Kundu",
            title: "Senior Clinical Psychologist",
            specialty: "Mental Health And Behavioural Sciences, Clinical Psychology",
            experience: "27+ Years",
            gender: "Female",
            profileLink: "#",
            imageUrl: doctorImage11
        }
    ];
    return(
        <div className="consult-page">
            <div className="consult-head">Top Post traumatic stress disorder ptsd Doctors in India</div>
            <div className="container">
                <div className="phone-no">To book an appointment, call us: +91 0000000000</div>
                <p className="doct-head">Doctors Available</p>
                <div class="card-container">
                {doctors.map((doctor, index) => (
                    <div className="card" key={index}>
                        <div className="info-doct">
                        <img src={doctor.imageUrl} alt={`${doctor.name}`} className="doctor-image" />
                        <div className="doctor-info">
                            <h3 className="doctor-name">{doctor.name}</h3>
                            <p className="doctor-title">{doctor.title}</p><hr></hr>
                            <p className="doctor-specialty">{doctor.specialty}</p>
                            <p><strong>Experience:</strong> {doctor.experience}</p>
                            <p><strong>Gender:</strong> {doctor.gender}</p>
                            <a href={doctor.profileLink} className="view-profile">View Profile</a>
                        </div>
                        </div>
                        <button className="appointment-button">Book an Appointment</button>
                    </div>
                ))}
                </div>
                <div className="request-callback">
                    <div className="question-cant-find">Can't find what you are looking for?</div>
                    <div className="callback-info">
                        <div className="request-name"><input type="text" placeholder="Enter full name"></input></div>
                        <div className="request-no"><input type="number" placeholder="Enter mobile number"></input></div>
                        <div className="request-btn"><button>Request Callback</button></div>
                    </div>
                </div>
                <div class="card-container">
                {doctors1.map((doctor, index) => (
                    <div className="card" key={index}>
                        <div className="info-doct">
                        <img src={doctor.imageUrl} alt={`${doctor.name}`} className="doctor-image" />
                        <div className="doctor-info">
                            <h3 className="doctor-name">{doctor.name}</h3>
                            <p className="doctor-title">{doctor.title}</p><hr></hr>
                            <p className="doctor-specialty">{doctor.specialty}</p>
                            <p><strong>Experience:</strong> {doctor.experience}</p>
                            <p><strong>Gender:</strong> {doctor.gender}</p>
                            <a href={doctor.profileLink} className="view-profile">View Profile</a>
                        </div>
                        </div>
                        <button className="appointment-button">Book an Appointment</button>
                    </div>
                ))}
                </div>
                <div className="request-callback">
                    <div className="question-cant-find">Can't find what you are looking for?</div>
                    <div className="callback-info">
                        <div className="request-name"><input type="text" placeholder="Enter full name"></input></div>
                        <div className="request-no"><input type="number" placeholder="Enter mobile number"></input></div>
                        <div className="request-btn"><button>Request Callback</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Consult;