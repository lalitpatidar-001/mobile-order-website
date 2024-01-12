import React, { useContext, useState } from 'react'
import { Button, Container, Heading, Input, Form, Feedback } from '../../styles/styles';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../../context/userContext';
import ServerError from './ServerError'
import FeedBack from './FeedBack';
function Login() {
    const {isLoggedIn, setIsLoggedIn} = useContext(userContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errorMessages, setErrorMessages] = useState([]);
    const [feedback , setFeedback] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        // console.log(formData)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessages([]);
        setFeedback("") // Clear previous error messages
        try {
            const response = await axios.post("http://localhost:5000/api/auth/login",formData);
            const data = response.data;
            const {_id , email} = data;

            if(response.status === 200 && data.msg === "authentic user"){
                localStorage.setItem("local-user" , JSON.stringify({_id,email}))
                setIsLoggedIn({_id,email});
                navigate("/")
            }
        
        } catch (error) {
            const status = error.response.status;
            const response = error.response;
            const msg =  response.data.msg

            if(status === 404 && msg === "wrong email"){
                setFeedback(msg)
            }
            else if(status === 401 && msg === "wrong credentials"){
                setFeedback(msg)
            }else{
                setFeedback("something went wrong")
            }
            // server error
            if(response.data.errors?.length >0  && status === 400 ){
             setErrorMessages(error.response.data.errors.map((error) => error.msg));
            }
        }
    };


  return (
    <Container>
        <Form onSubmit={handleSubmit}>
            <Heading> Please Login here</Heading>
            <ServerError errors={errorMessages}/>
            <FeedBack feedback={feedback} />
            <Input type='email' placeholder='enter your email' onChange={handleChange}
            name='email'
            required
            value={formData.email}/>

            <Input type='password' placeholder='enter password' onChange={handleChange}
            value={formData.password}
            name='password'
                required
            />

            <Button type='submit'>Sign In</Button>
            <span>New user? <Link to="/register">Register here</Link></span>
        </Form>
    </Container>
    
  )
}

export default Login