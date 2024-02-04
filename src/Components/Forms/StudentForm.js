import React, { useState } from "react";
import '../Pages_CSS/Student.css';


export default function StudentForm() {

    const [companyname, setcompanyname] = useState("");
    const [jobtile, setjobtile] = useState("");
    const [email, setemail] = useState("");
    const [salary, setsalary] = useState("");

    const collectData = async (e) => {
        e.preventDefault();

        let result = await fetch("http://localhost:9000/addUsers", {
            method: "post",
            body: JSON.stringify({ companyname, jobtile, email, salary }),
            headers: {
                'Content-Type': "application/json",
            },
        }).then(() => {
            alert("Added Employee");
        });

    };

    return (
        <div className="DataDiv">
            <form onSubmit={collectData} className="Form">
                <h1 className="text-center pt-3 head" style={{margin:'auto',width:'fit-content',margin:'auto'}}>Employee Form</h1>
                
                <div className="NeWdiv">
                <div className="mb-3">
                    <label className="form-label">Comapany Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={companyname}
                        onChange={(e) => setcompanyname(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Job Title</label>
                    <input
                        type="text"
                        className="form-control"
                        value={jobtile}
                        onChange={(e) => setjobtile(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Salary</label>
                    <input
                        type="text"
                        className="form-control"
                        value={salary}
                        onChange={(e) => setsalary(e.target.value)}
                    />
                </div>
                </div>
               
                <button type="submit" className="btnsubmit">
                    Submit
                </button>
            </form>
        </div>
    );
}