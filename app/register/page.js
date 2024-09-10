"use client";
import {useState} from "react";

export default function Register(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            console.log(name, email, password);
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

                        <form onSubmit={handleSubmit}>
                            <input 
                                type="text" 
                                name="" 
                                id="" 
                                value={name} 
                                onChange={e => setName(e.target.value)} 
                                className="form-control mb-4"
                                placeholder="Enter your name"
                            />
                            <input 
                                type="email" 
                                name="" 
                                id="" 
                                value={email} 
                                onChange={e => setEmail(e.target.value)} 
                                className="form-control mb-4"
                                placeholder="Enter your email"
                            />
                            <input 
                                type="password" 
                                name="" 
                                id="" 
                                value={password} 
                                onChange={e => setPassword(e.target.value)} 
                                className="form-control mb-4"
                                placeholder="Enter your password"
                            />
                             <button 
                                type="submit" 
                                className="btn btn-primary btn-raised"
                                disabled={loading || !name || !email || !password}>
                                {loading ? 'Please wait..' : 'Submit'}
                             </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );

};