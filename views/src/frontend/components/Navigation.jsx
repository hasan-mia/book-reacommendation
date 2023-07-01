import { Button, Collapse, IconButton, Navbar, Typography } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { HiBars3 } from 'react-icons/hi2';
import { MdClose } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logOut } from '../../store/slice/AuthSlice';

function Navigation() {
    const dispatch = useDispatch();
    const [openNav, setOpenNav] = useState(false);
    const navigate = useNavigate();
    const { userInfo } = useSelector((state) => state.auth);
    const handleRoute = (link) => {
        navigate(link, { replace: true });
    };
    // handle logut
    const handleLogut = () => {
        dispatch(logOut());
    };

    useEffect(() => {
        window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false));
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <Link
                    to="/"
                    className="uppercase items-center hover:no-underline border-b-2 border-b-transparent hover:border-b-red-500 pb-1 hover:text-green-700"
                >
                    Home
                </Link>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <Link
                    to="/review"
                    className="uppercase items-center hover:no-underline border-b-2 border-b-transparent hover:border-b-red-500 pb-1 hover:text-green-700"
                >
                    Reviews
                </Link>
            </Typography>
        </ul>
    );

    return (
        <Navbar
            className="mx-auto max-w-full hover:no-underline py-2 lg:py-4 px-0 rounded-none shadow-none border-b-2 border-b-blue-gray-50 fixed top-0 w-full bg-white z-50"
            color="white"
            brand="My App"
        >
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Link
                    to="/"
                    className="bg-transparent border p-2 border-r-2 border-l-2 border-dashed border-green-700 text-xl uppercase font-bold rounded-none text-red-400 hover:no-underline no-underline"
                >
                    <img src="/icon.png" className="w-48" alt="logo" />
                </Link>
                <div className="hidden lg:block">{navList}</div>
                <div className="hidden lg:inline-block">
                    <div className="flex flex-row gap-2 items-center">
                        {userInfo ? (
                            <Button color="red" onClick={handleLogut}>
                                Signout
                            </Button>
                        ) : (
                            <>
                                <Button color="green" onClick={() => handleRoute('/signin')}>
                                    Signin
                                </Button>
                                <Button color="red" onClick={() => handleRoute('/signup')}>
                                    Signup
                                </Button>
                            </>
                        )}
                    </div>
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? <MdClose className="text-2xl" /> : <HiBars3 className="text-2xl" />}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <div className="container mx-auto">
                    {navList}
                    <div className="flex flex-row gap-2 items-center">
                        {userInfo ? (
                            <Button color="red" onClick={handleLogut}>
                                Signout
                            </Button>
                        ) : (
                            <>
                                <Button color="green" onClick={() => handleRoute('/signin')}>
                                    Signin
                                </Button>
                                <Button color="red" onClick={() => handleRoute('/signup')}>
                                    Signup
                                </Button>
                            </>
                        )}
                    </div>
                </div>
            </Collapse>
        </Navbar>
    );
}

export default Navigation;
