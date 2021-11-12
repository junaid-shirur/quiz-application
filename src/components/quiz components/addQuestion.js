
import React, { useState } from 'react'
import { Form, Row, Col, Button, InputGroup } from 'react-bootstrap';
import './style.scss'
import { Link } from 'react-router-dom';
import axios from 'axios';
export default function AddQuestion() {
    const [question, setquestion] = useState({
        question: ""
    })
    const [correctAns, setcorrectAns] = useState({
        option1: false,
        option2: false,
        option3: false,
        option4: false,

    })
    const [options, setoptions] = useState([
        { a: "", ans1: "" },
        { b: "", ans2: "" },
        { c: "", ans3: "" },
        { d: "", ans4: "" }
    ])
    // console.log(correctAns);
    const handleChange = e => {
        e.preventDefault();
        setoptions({ ...options, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = [{
            question: question.question,
            options: [
                { a: options.a, ans: options.ans1 },
                { b: options.b, ans: options.ans2 },
                { c: options.c, ans: options.ans3 },
                { d: options.d, ans: options.ans4 }
            ]
        }]
        // console.log(data);
        axios.post('http://localhost:8000/data', data)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <>
            <nav>
                <Link to='/Admin_page'>ADMIN</Link>
            </nav>
            <div className="addQuestionForm">
                <h3>quizz</h3>
                <Form onSubmit={handleSubmit} >
                    <Form.Control
                        name="question"
                        value={question.question}
                        onChange={(e) => { setquestion({ ...question, question: e.target.value }) }}
                        type="text"
                        placeholder="enter question"
                    />
                    <Row>
                        <Col>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    name="a"
                                    value={options.a}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="option-1" />
                                <InputGroup.Radio
                                    onClick={() => {
                                        correctAns.option1 === false ? setoptions({ ...options, ans1: true }) : setoptions({ ...options, ans1: false })
                                    }}
                                    value={options.ans1}
                                />
                            </InputGroup>
                        </Col>
                        <Col>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    name="b"
                                    value={options.b}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="option-2" />
                                <InputGroup.Radio
                                    onClick={() => {
                                        correctAns.option2 === false ? setoptions({ ...options, ans2: true }) : setoptions({ ...options, ans2: false })
                                    }}
                                    value={options.ans2}
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    name="c"
                                    value={options.c}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="option-3" />
                                <InputGroup.Radio
                                    onClick={() => {
                                        correctAns.option3 === false ? setoptions({ ...options, ans3: true }) : setoptions({ ...options, ans3: false })
                                    }}
                                    value={options.ans3}
                                />
                            </InputGroup>
                        </Col>
                        <Col>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    name="d"
                                    value={options.d}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="option-4" />
                                <InputGroup.Radio
                                    onClick={() => {
                                        correctAns.option4 === false ? setoptions({ ...options, ans4: true }) : setoptions({ ...options, ans4: false })
                                    }}
                                    value={options.ans4}
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Button type="submit" >Add</Button>
                </Form>
            </div>
        </>
    )
}
