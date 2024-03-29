import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import {auth} from "../../api/Api";
import styles from "./style.module.css";
import React from "react";
import PropTypes from 'prop-types';

const Login = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const navigate = useNavigate();

    const authenticate = localStorage.getItem("auth");

    useEffect(() => {
        if (authenticate) {
            authenticate.roles === "user" ?
                navigate("/")
                :
                navigate("/admin")
        }
    })

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        if (username === "admin@bukaajadulu.com" && password === "admin123") {
            const auth = {
                token: "tokenadmin",
                roles: "admin",
                username : username,
                password : password
            }
            localStorage.setItem("authAdmin", JSON.stringify(auth));
            navigate("/admin");
            Swal.fire({
                title: "Login Success",
                icon: "success"
            })
        } else {
            auth({ username, password })
                .then(res => {
                    const auth = {
                        token: res.data.token,
                        roles: "user",
                        usernameUser : username,
                        passwordUser : password,
                    }
                    localStorage.setItem("auth", JSON.stringify(auth));
                    navigate("/");
                    Swal.fire({
                        title: "Login Success",
                        icon: "success"
                    })
                })
                .catch(err => {
                    Swal.fire({
                        title: err+" Because Wrong Input",
                        text: "Username/Password wrong or something wrong",
                        icon: "error",
                    })
                })
        }
        setUsername("");
        setPassword("");
    }
    return (
        <Container fluid className="login-page">
        <Row>
        <Col className="flex cart-center justify-center">
        <Form style={{ width: "80%", margin: "2.5rem auto" }} onSubmit={handleLogin}>
        <div className="text-5xl mb-5 text-center text-green-600 font-bold">Start Now</div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Type your username..."
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Type your password..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </Form.Group>
            <div className="text-right">
            <Button variant="outline-primary" className="mx-2" onClick={() => setModalShow(true)}>
                Help
            </Button>
            <Button variant="outline-success" type="submit">
                Login
            </Button>
            </div>
            <Modals
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Form>
        </Col>
        <Col className={styles.loginPage}/>
        </Row>
        </Container>
    );
};
function Modals(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Information Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className={styles.default}>
            <div>
                <span>Default User:</span>
                <span>username = donero</span>
                <span>password = ewedon</span>
            </div>
            <div>
                <span>Default Admin:</span>
                <span>username = admin@bukaajadulu.com</span>
                <span>password = admin123</span>
            </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  Modals.propTypes = {
    onHide: PropTypes.func.isRequired
  };

export default Login;