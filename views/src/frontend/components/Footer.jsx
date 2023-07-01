import { Typography } from '@material-tailwind/react';

export default function Example() {
    return (
        <footer className="w-full bg-gray-50 p-8">
            <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
                <div className="flex items-center gap-2 font-semibold uppercase">
                    <img
                        src="/logo.png"
                        alt="logo-ct"
                        className="w-16 rounded-full border border-dashed border-red-500 p-2"
                    />
                    <p>Recommend Book</p>
                </div>

                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-red-500 focus:text-red-500"
                        >
                            Aout Us
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-red-500 focus:text-red-500"
                        >
                            License
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-red-500 focus:text-red-500"
                        >
                            Contribute
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-red-500 focus:text-red-500"
                        >
                            Contact Us
                        </Typography>
                    </li>
                </ul>
            </div>
            <hr className="my-8 border-blue-gray-50" />
            <Typography color="blue-gray" className="text-center font-normal">
                &copy; 2023 Recommend Book
            </Typography>
        </footer>
    );
}
