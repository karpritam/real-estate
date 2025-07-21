import React, { useEffect, useState } from "react";
import assets from "../assets/logo.svg";
import menu_icon from "../assets/menu_icon.svg";
import cross_icon from "../assets/cross_icon.svg";

const Navbar = () => {
	const [showMobileMenu, setshowMobileMenu] = useState(false);
	const [isRotate, setIsRotate] = useState(false);
	// this will prevent the webpage from scrolling
	useEffect(() => {
		//prevent scrolling for mobile screen
		if (showMobileMenu) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
		//prevent scrolling for desktop screen
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [showMobileMenu]);
	// Open menu with rotation first, then show menu after delay
	const handleMenuOpen = () => {
		setIsRotate(true);
		setTimeout(() => {
			setshowMobileMenu(true);
		}, 250); // Delay matches rotation animation duration
	};

	// Close menu and rotate icon back
	const handleMenuClose = () => {
		setIsRotate(false);
		setTimeout(() => {
			setshowMobileMenu(false);
		}, 300);
	};
	return (
		<div className="absolute top-0 left-0 w-full z-10">
			<div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
				<a href="#Header">
					<img className="cursor-pointer" src={assets} alt="icon" />
				</a>
				<ul className="hidden md:flex gap-7 text-white">
					<a href="#Header" className="cursor-pointer hover:text-gray-400">
						Home
					</a>
					<a href="#About" className="cursor-pointer hover:text-gray-400">
						About
					</a>
					<a href="#Projects" className="cursor-pointer hover:text-gray-400">
						Projects
					</a>
					<a
						href="#Testimonials"
						className="cursor-pointer hover:text-gray-400">
						Testimonials
					</a>
				</ul>
				<button className="hidden md:block bg-white px-8 py-2 rounded-full">
					Sign Up/Login
				</button>
				<img
					onClick={handleMenuOpen}
					src={menu_icon}
					className={`md:hidden  w-7 cursor-pointer transition-transform duration-300 ${
						isRotate ? "rotate-180" : ""
					}`}
				/>
			</div>
			{/* ---------------mobile menu-------------------- */}
			<div
				className={`md:hidden ${
					showMobileMenu ? "fixed w-[30%]" : "h-0 w-0"
				}  right-0 top-0 bottom-0 rounded-l overflow-hidden bg-white transition-all ation-500 ease-in-out`}>
				<div className="flex justify-end p-6 cursor-pointer">
					<img
						onClick={handleMenuClose}
						src={cross_icon}
						className={`p-2 w-10 hover:bg-blue-500 rounded transition-transform duration-300 ${
							isRotate ? "rotate-180" : ""
						}`}
					/>
				</div>
				<ul className=" flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
					<a
						onClick={() => setshowMobileMenu(false)}
						href="#Header"
						className="px-4 py-2 rounded-full inline-block">
						Home
					</a>
					<a
						onClick={() => setshowMobileMenu(false)}
						href="#About"
						className="px-4 py-2 rounded-full inline-block">
						About
					</a>
					<a
						onClick={() => setshowMobileMenu(false)}
						href="#Projects"
						className="px-4 py-2 rounded-full inline-block">
						Projects
					</a>
					<a
						onClick={() => setshowMobileMenu(false)}
						href="#Testimonials"
						className="px-4 py-2 rounded-full inline-block">
						Testimonials
					</a>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
