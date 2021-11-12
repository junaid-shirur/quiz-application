import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { Link,useNavigate } from 'react-router-dom';
import '../common/index.scss'
import axios from 'axios';
export default function Admin() {
    const [login, setlogin] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        e.preventDefault();
        setlogin({ ...login, [e.target.name]: e.target.value })
    }
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await axios.get('http://localhost:8000/admins')
            .catch((e) => {
                console.log(e);
            })
        response.data.map((e) => {
            if (e.email === login.email && e.password === login.password) {
                navigate('/add_question_page')
            }
            else {
                console.log('not succes');
            }
            return true
        })

    }
    return (
        <>
            <div className='navbar'>
                <nav>
                    <Link to='/Admin_Register_page' >Add new admin</Link>
                </nav>
            </div>
            <div>
                <div className="LoginForm">
                    <h3 >Quizz</h3>
                    <Form onSubmit={handleSubmit} >
                        <h2>Login</h2>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                name="email"
                                type="email"
                                placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                name="password"
                                type="password"
                                placeholder="Password" />
                        </Form.Group>
                        <Button type="submit">
                            submit
                        </Button>
                    </Form>
                </div>
            </div>
            
        </>
    )
}
