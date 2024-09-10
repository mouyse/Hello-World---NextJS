"use client";
import {useState} from "react";

export default function Register(){

    const [name, setName] = useState("");
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            setLoading(true);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    return (
        <main>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center vh-100">
                    <div className="col-lg-5 shadow bg-light p-5">
                        <h2 className="mb-4 text-center">Register</h2>
                    </div>
                </div>
            </div>
        </main>
    );

};