import React from "react";
import assets from "../assets/logo.svg";

const Navbar = () => {
	return (
		<div className="absolute top-0 left-0 w-full z-10">
			<div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
				<img className="cursor-pointer" src={assets} alt="icon"  />
				<ul className="hidden md:flex gap-7 text-white">
					<a href="#header" className="cursor-pointer hover:text-gray-400">
						Home
					</a>
					<a href="#" className="cursor-pointer hover:text-gray-400">
						About
					</a>
					<a href="#" className="cursor-pointer hover:text-gray-400">
						Projects
					</a>
					<a href="#" className="cursor-pointer hover:text-gray-400">
						Testimonials
					</a>
				</ul>
				<button className="hidden md:block bg-white px-8 py-2 rounded-full">
					Sign Up
				</button>
			</div>
		</div>
	);
};

export default Navbar;
