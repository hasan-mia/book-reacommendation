import { Button, IconButton, MobileNav, Navbar, Typography } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { HiBars3 } from 'react-icons/hi2';
import { MdClose } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

function Navigation() {
    const [openNav, setOpenNav] = useState(false);
    const navigate = useNavigate();
    const handleRoute = (link) => {
        navigate(link, { replace: true });
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
                    to="/"
                    className="uppercase items-center hover:no-underline border-b-2 border-b-transparent hover:border-b-red-500 pb-1 hover:text-green-700"
                >
                    Books
                </Link>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <Link
                    to="/"
                    className="uppercase items-center hover:no-underline border-b-2 border-b-transparent hover:border-b-red-500 pb-1 hover:text-green-700"
                >
                    Users
                </Link>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <Link
                    to="/"
                    className="uppercase items-center hover:no-underline border-b-2 border-b-transparent hover:border-b-red-500 pb-1 hover:text-green-700"
                >
                    Reviews
                </Link>
            </Typography>
        </ul>
    );

    return (
        <Navbar className="mx-auto max-w-full hover:no-underline py-2 lg:py-4 px-0 rounded-none shadow-none border-b-2 border-b-blue-gray-50">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Link
                    to="/"
                    className="bg-transparent border p-2 border-r-4 border-l-4 border-dashed border-green-700 text-xl uppercase font-bold rounded-none text-red-400 hover:no-underline no-underline"
                >
                    Recommend Book
                </Link>
                <div className="hidden lg:block">{navList}</div>
                <div className="hidden lg:inline-block">
                    <div className="flex flex-row gap-2 items-center">
                        <Button color="green" onClick={() => handleRoute('/signin')}>
                            Signin
                        </Button>
                        <Button color="red" onClick={() => handleRoute('/signup')}>
                            Signup
                        </Button>
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
            <MobileNav open={openNav}>
                <div className="container mx-auto">
                    {navList}
                    <div className="flex flex-row gap-2 items-center">
                        <Button color="green" onClick={() => handleRoute('/signin')}>
                            Signin
                        </Button>
                        <Button color="red" onClick={() => handleRoute('/signup')}>
                            Signup
                        </Button>
                    </div>
                </div>
            </MobileNav>
        </Navbar>
    );
}

export default Navigation;
