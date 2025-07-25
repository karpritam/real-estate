import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
	return (
		<div
			className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden"
			id="Footer">
			<div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
				<div className="w-full md:w-1/3  mb-8 md:mb-0 text-gray-400">
					<img className="text-gray-400 mt-4" src={assets.logo_dark} alt="" />
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
						dolores ex voluptates aut voluptas! Similique dolore assumenda, sit
						molestiae dolor amet asperiores minima magni, quos nobis vel nisi
						earum doloremque.
					</p>
				</div>
				<div className="w-full md:w-1/5 mb-8 md:mb-0">
					<h3 className="text-white text-lg font-bold mb-4">Company</h3>
					<ul className="flex flex-col gap-2 text-gray-400">
						<a href="#Header" className="hover:text-white">
							Home
						</a>
						<a href="#About" className="hover:text-white">
							About Us
						</a>
						<a href="#Contact" className="hover:text-white">
							Contact Us
						</a>
						<a href="#" className="hover:text-white">
							Privacy Policy
						</a>
					</ul>
				</div>
				<div className="w-full md:w-1/3">
					<h3 className="text-white text-lg font-bold mb-4">
						Please Login Our Estate site
					</h3>
					<p className="text-gray-400 mb-4 max-w-80">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Voluptatem.
					</p>
					<div className="flex gap-2">
						<input
							className="p-2 rounded bg-gray-800 text-gray-500 border border-gray-700 focus:outline-none w-full md:w-auto"
							type="email"
							placeholder="Enter your email"
						/>
						<button className="py-2 px-4 rounded bg-blue-500 text-white">
							Register
						</button>
					</div>
				</div>
			</div>
			<div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
				Conditions of Use & Sale Privacy Notice Interest-Based Ads <br/>
                CopyRight © 1996-2025, Inc. or its affiliates.
			</div>
		</div>
	);
};

export default Footer;
