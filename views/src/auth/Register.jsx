/* eslint-disable no-unused-vars */
import { Button, Card, CardBody, CardHeader, Input, Typography } from '@material-tailwind/react';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../store/api/auth';
import { setAuth } from '../store/slice/AuthSlice';

function Register() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [active, setActive] = useState(false);
    const [type, setType] = useState('password');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [loading, setLoading] = useState(false);
    const credentialHandler = (name, data) => {
        if (name === 'email') {
            setEmail(data);
        } else if (name === 'userName') {
            setUserName(data);
        } else if (name === 'password') {
            setPass(data);
        }
    };
    // handle signup
    const handleSignUp = async (e) => {
        e.preventDefault();
        setLoading(true);
        const data = {
            name: userName,
            email,
            password: pass,
        };
        const res = await auth.signupUser(data);
        if (res.status === 201) {
            toast.success(`${res.data.message}`);
            localStorage.setItem('session', res.data.token);
            const [headerBase64, payloadBase64, signature] = res.data.token.split('.');
            const decodedPayload = atob(payloadBase64);
            dispatch(setAuth(JSON.parse(decodedPayload)));
            setLoading(false);
            navigate(-1, { replace: false });
        } else if (res.status === 406) {
            toast.error(`${res.data.error}`);
            setLoading(false);
        } else if (res.status === 409) {
            toast.error(`${res.data.error}`);
            setLoading(false);
        } else if (res.status === 422) {
            toast.error(`${email} allready registered`);
            setLoading(false);
        } else {
            toast.error('something went wrong');
            setLoading(false);
        }
    };
    const activeHandler = () => {
        if (active) {
            setType('text');
        } else {
            setType('password');
        }
        setActive(!active);
    };
    return (
        <div className="flex justify-center pt-10">
            <Card className="w-96">
                <CardHeader
                    variant="gradient"
                    color="red"
                    className="mb-4 grid h-28 place-items-center"
                >
                    <Typography variant="h3" color="white">
                        Sign Up
                    </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                    <form className="flex flex-col gap-5" onSubmit={handleSignUp}>
                        <Input
                            label="Name"
                            type="text"
                            value={userName}
                            name="userName"
                            size="lg"
                            onChange={(e) => credentialHandler(e.target.name, e.target.value)}
                        />
                        <Input
                            label="Email"
                            type="email"
                            value={email}
                            name="email"
                            size="lg"
                            onChange={(e) => credentialHandler(e.target.name, e.target.value)}
                        />
                        <Input
                            label="Password"
                            type={type}
                            icon={active ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                            value={pass}
                            name="password"
                            size="lg"
                            onChange={(e) => credentialHandler(e.target.name, e.target.value)}
                            onClick={activeHandler}
                        />
                        <Button color="red" type="submit">
                            Signup
                        </Button>
                    </form>
                    <div className="flex justify-center flex-row pt-4">
                        <p>Already have an account?</p> &nbsp;
                        <Link to="/signin">Signin</Link>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}

export default Register;
