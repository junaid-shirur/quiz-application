
import React, { useState } from 'react'
import { Form, Row, Col, Button, InputGroup } from 'react-bootstrap';
import './style.scss'
import { Link } from 'react-router-dom';
import axios from 'axios';
export default function AddQuestion() {
    const [question, setquestion] = useState({
        question: "",
        options :[{a:'', b:'', c:'', d:''}],
        correctOPtion:"b"
    })

    console.log(question.options);
    const handleChange = e => {
        e.preventDefault();
        var options = { ...question.options, [e.target.name]: e.target.value }
        setquestion({ ...question, options:options})
    }
    const handleSubmit = (e) => {
        // e.preventDefault()
        // axios.post('http://localhost:8000/data', question)
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
  
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
                                    value={question.options.a}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="option-1" />
                                <InputGroup.Radio
                                    onClick={() => {
                                        setquestion({ ...question, correctOPtion: "a" })
                                    }}
                                    value={question.options.a}
                                    name="correctAns"

                                />
                            </InputGroup>
                        </Col>
                        <Col>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    name="b"
                                    value={question.options.b}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="option-2" />
                                <InputGroup.Radio
                                    onClick={() => {
                                        setquestion({ ...question, correctOPtion: "b" })
                                    }}
                                    value={question.options.b}
                                    name="correctAns"

                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    name="c"
                                    value={question.options.c}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="option-3" />
                                <InputGroup.Radio
                                    onClick={() => {
                                        setquestion({ ...question, correctOPtion: "c" })
                                    }}
                                    value={question.options.c}
                                    name="correctAns"

                                />
                            </InputGroup>
                        </Col>
                        <Col>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    name="d"
                                    value={question.options.d}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="option-4" />
                                <InputGroup.Radio
                                    onClick={() => {
                                        setquestion({ ...question, correctOPtion: "d" })
                                    }}
                                    value={question.options.d}
                                    name="correctAns"

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
