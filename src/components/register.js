import React, { useState } from 'react';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default function Register() {
    const [allValues, setAllValues] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
    });
    const handleChange = e => {
        e.preventDefault();
        setAllValues({ ...allValues, [e.target.name]: e.target.value })
    }
    const handleSubmit = ()=>{
        axios.post('http://localhost:8000/users', {
            name: allValues.name,
            email: allValues.email,
            phone:allValues.phone,
            password:allValues.password
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <>
            <div className='navbar'>

                <nav>
                    <a href="/#">ADMIN</a>
                </nav>
            </div>
            <div className="registerForm">
                <h2>create new profile</h2>
                <Form onSubmit={handleSubmit}>
                    <FloatingLabel
                        label="full name"
                        className="mb-3"
                    >
                        <Form.Control
                            placeholder="enter fullname"
                            autoFocus
                            name="name"
                            type="name"
                            value={allValues.name}
                            onChange={handleChange} />
                    </FloatingLabel>
                    <FloatingLabel className="mb-3" label="phone number">
                        <Form.Control
                            placeholder="enter phone no."
                            name="phone"
                            type="tel"
                            value={allValues.phone}
                            onChange={handleChange} />
                    </FloatingLabel>
                    <FloatingLabel className="mb-3" label="E-mail">
                        <Form.Control
                            placeholder="enter email id"
                            name="email"
                            type="email"
                            value={allValues.email}
                            onChange={handleChange} />
                    </FloatingLabel>
                    <FloatingLabel className="mb-3" label="password">
                        <Form.Control
                            placeholder="enter password"
                            name="password"
                            type="password"
                            value={allValues.password}
                            onChange={handleChange} />
                    </FloatingLabel>
                    <Button type="submit">submit</Button>
                    <Link to='/'>Login</Link>
                </Form>
            </div>
        </>
    )
}
