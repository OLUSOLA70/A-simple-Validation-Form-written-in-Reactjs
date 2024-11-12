
import React, { useState } from 'react';
import './App.css';

function App() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("male");
    const [subjects, setSubjects] = useState({
        english: true,
        maths: false,
        physics: false,
    });
    const [resume, setResume] = useState("");
    const [url, setUrl] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [about, setAbout] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true); 
        console.log(
            firstName,
            lastName,
            email,
            contact,
            gender,
            selectedOption,
            subjects,
            resume,
            url,
            about
        );
    };

    const handleSubjectChange = (sub) => {
        setSubjects((prev) => ({
            ...prev,
            [sub]: !prev[sub],
        }));
    };

    const handleReset = () => {
        
        setFirstName("");
        setLastName("");
        setEmail("");
        setContact("");
        setGender("male");
        setSubjects({
            english: true,
            maths: false,
            physics: false,
        });
        setResume("");
        setUrl("");
        setSelectedOption("");
        setAbout("");
        setIsSubmitted(false); 
    };

    return (
        <div className="App">
            <h1>Form in React</h1>
            {isSubmitted ? (
                <div className="thank-you-message">
                    Thank you! You have successfully submitted the form.
                </div>
            ) : (
                <fieldset>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="firstname">First Name*</label>
                        <input
                            type="text"
                            name="firstname"
                            id="firstname"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="Enter First Name"
                            required
                        />
                        <label htmlFor="lastname">Last Name*</label>
                        <input
                            type="text"
                            name="lastname"
                            id="lastname"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Enter Last Name"
                            required
                        />
                        <label htmlFor="email">Enter Email*</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email"
                            required
                        />
                        <label htmlFor="tel">Contact*</label>
                        <input
                            type="tel"
                            name="contact"
                            id="contact"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            placeholder="Enter Mobile number"
                            required
                        />
                        <label htmlFor="gender">Gender*</label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            id="male"
                            checked={gender === "male"}
                            onChange={(e) => setGender(e.target.value)}
                        />
                        Male
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            id="female"
                            checked={gender === "female"}
                            onChange={(e) => setGender(e.target.value)}
                        />
                        Female
                        <input
                            type="radio"
                            name="gender"
                            value="other"
                            id="other"
                            checked={gender === "other"}
                            onChange={(e) => setGender(e.target.value)}
                        />
                        Other
                        <label htmlFor="lang">Your best Subject</label>
                        <input
                            type="checkbox"
                            name="lang"
                            id="english"
                            checked={subjects.english === true}
                            onChange={() => handleSubjectChange("english")}
                        />
                        English
                        <input
                            type="checkbox"
                            name="lang"
                            id="maths"
                            checked={subjects.maths === true}
                            onChange={() => handleSubjectChange("maths")}
                        />
                        Maths
                        <input
                            type="checkbox"
                            name="lang"
                            id="physics"
                            checked={subjects.physics === true}
                            onChange={() => handleSubjectChange("physics")}
                        />
                        Physics
                        <label htmlFor="file">Upload Resume*</label>
                        <input
                            type="file"
                            name="file"
                            id="file"
                            onChange={(e) => setResume(e.target.files[0])}
                            placeholder="Enter Upload File"
                            required
                        />
                        <label htmlFor="url">Portfolio URL*</label>
                        <input
                            type="url"
                            name="url"
                            id="url"
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="https://example.com"
                            required
                        />
                        <label>Select your skill level</label>
                        <select
                            name="select"
                            id="select"
                            value={selectedOption}
                            onChange={(e) => setSelectedOption(e.target.value)}
                        >
                            <option value="" disabled>
                                Select your skill level
                            </option>
                            <optgroup label="Beginers">
                                <option value="1">HTML</option>
                                <option value="2">CSS</option>
                                <option value="3">JavaScript</option>
                            </optgroup>
                            <optgroup label="Advance">
                                <option value="4">React</option>
                                <option value="5">Node</option>
                                <option value="6">Express</option>
                                <option value="7">MongoDB</option>
                            </optgroup>
                        </select>
                        <label htmlFor="about">About</label>
                        <textarea
                            name="about"
                            id="about"
                            cols="30"
                            rows="10"
                            onChange={(e) => setAbout(e.target.value)}
                            placeholder="Tell us about yourself"
                            required
                        ></textarea>
                        <button type="reset" onClick={handleReset}>
                            Reset
                        </button>
                        <button type="submit">
                            Submit
                        </button>
                    </form>
                </fieldset>
            )}
        </div>
    );
}

export default App;
