import { Button, Card, CardBody, CardHeader, Input, Typography } from '@material-tailwind/react';
import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Register() {
    const [active, setActive] = useState(false);
    const [type, setType] = useState('password');
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
                    <form className="flex flex-col gap-5">
                        <Input label="Email" />
                        <Input
                            label="Password"
                            type={type}
                            icon={active ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                            onClick={activeHandler}
                        />
                        <Button color="red">Signup</Button>
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
