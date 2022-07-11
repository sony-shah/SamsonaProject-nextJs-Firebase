import React, { useEffect, useState } from 'react';
import { collection, addDoc, setDoc, doc, docs, getDocs, getDoc } from "firebase/firestore";
import firebaseApp from '../firebaseConfig';
import { getFirestore, onSnapshot } from "firebase/firestore";

const db = getFirestore();

function Enquiryform() {
    const usersCollectionref = collection(db, "samsonaFormDetails");
    const [username, setUsername] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [email, setEmail] = useState('');
    const [eventType, setEventType] = useState('false');
    const [FormSubmit, setFormSubmit] = useState(true);

    const fixedText = "I am fixed :)";
    const whenNotFixed = "I am not a fixed header :(";
    const [headerText, setHeaderText] = useState(whenNotFixed);
    const [openbox, setopenbox] = useState(false)


    const handleSubmit = async (event) => {
        event.preventDefault();
        let data = {
            username: username,
            phoneNumber: phoneNum,
            email: email,
            eventType: eventType
        }
        console.log(data);
        await addDoc(usersCollectionref, data);
        //setUsername("");
        setPhoneNum("");
        setEmail("");
        setEventType("");
        setFormSubmit(false);
        setTimeout(() => {
            console.log('Hello, World!');
            setFormSubmit(true);
            setUsername("")
        }, 3000);

    }

    //eventType function    
    const radioEvent = (e) => {
        const target = e.target;
        if (target.checked) {
            setEventType(target.value);
        }
    }



    useEffect(() => {
        const enquirybtn = document.getElementById("enquirybtn");
        const stats = document.getElementById("stats");
        const sticky = stats.offsetTop;
        const scrollCallBack = window.addEventListener("scroll", () => {
            if (window.pageYOffset > sticky) {
                enquirybtn.classList.add("onSticky");
                if (headerText !== fixedText) {
                    setHeaderText(fixedText);
                }
            } else {
                enquirybtn.classList.remove("onSticky");
                if (headerText !== whenNotFixed) {
                    setHeaderText(whenNotFixed);
                }
            }
        });
        return () => {
            window.removeEventListener("scroll", scrollCallBack);
        };
    }, []);

    const openform = () => {
        setopenbox(true)
    };
    const closeform = () => {
        setopenbox(false);
        setFormSubmit(true);
    };


    return (
        <>
            <div className= {openbox?"formWrapper open":"formWrapper"}>
                <div className="formBg" onClick={closeform}></div>
                {FormSubmit ? <ul>
                    <li>
                        <input type="text"
                            placeholder="Your Name"
                            value={username}
                            onChange={({ target }) => setUsername(target.value)}
                        />
                    </li>
                    <li>
                        <input
                            type="text"
                            placeholder="Phone Number"
                            value={phoneNum}
                            onChange={({ target }) => setPhoneNum(target.value)}
                        />
                    </li>
                    <li>
                        <input
                            type="text"
                            placeholder="Email ID"
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                        />
                    </li>
                    <li>
                        <h4>Want to attend launch event?</h4>
                        <ul>
                            <li>
                                <input
                                    type="radio"
                                    name="radioEvent"
                                    id="yes"
                                    value="yes"
                                    checked={eventType == "yes"}
                                    onChange={radioEvent} />

                                <label htmlFor="yes">Yes</label>
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    name="radioEvent"
                                    value="no"
                                    id="no"
                                    checked={eventType == "no"}
                                    onChange={radioEvent}
                                />

                                <label htmlFor="no">No</label>
                            </li>
                        </ul>
                    </li>
                    <li><button type="submit"
                        onClick={handleSubmit} >Submit</button></li>
                </ul> : <h3>Thank You for submit {username}</h3>}

            </div>
            <div className={openbox?"enquiry-btn-mob openbox":"enquiry-btn-mob"} onClick={openform}>
                Enquiry
            </div>
        </>
    )
}

export default Enquiryform
