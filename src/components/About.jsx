import React from "react";
import brand_img from "../assets/brand_img.png";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const About = () => {
	return (
		<motion.div
			initial={{ opacity: 0, x: 200 }}
			transition={{ duration: 1 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true }}
			className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
			id="About">
			<h1 className="text-2xl sm:text-4xl font-bold mb-2">
				About{" "}
				<span className="underline underline-offset-4 decoration-1 under font-light">
					Our Brand
				</span>
			</h1>
			<p className="text-gray-500 max-w-80 text-center mb-8">
				Passionate About Properties, Dedicated to your Vision
			</p>
			<div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
				<img src={brand_img} className="w-full sm:w-1/2 max-w-lg" />
				<div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
					<div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
						<div>
							{/* <p className="text-4xl font-bold text-gray-800" >10+</p> */}
							<h2 className="text-4xl font-bold text-gray-800">
								<CountUp
									end={10}
									duration={4}
									separator=","
									enableScrollSpy
									scrollSpyOnce
								/>+
							</h2>
							<p>Years of Excellence</p>
						</div>
						<div>
							{/* <p className="text-4xl font-bold text-gray-800">12+</p> */}
							<h2 className="text-4xl font-bold text-gray-800">
								<CountUp
									end={12}
									duration={4}
									separator=","
									enableScrollSpy
									scrollSpyOnce
								/>+
							</h2>
							<p>Projects Completed</p>
						</div>
						<div>
							{/* <p className="text-4xl font-bold text-gray-800">20+</p> */}
							<h2 className="text-4xl font-bold text-gray-800">
								<CountUp
									end={20}
									duration={4}
									separator=","
									enableScrollSpy
									scrollSpyOnce
								/>+
							</h2>
							<p>Mn. Sq. Ft. Delivered</p>
						</div>
						<div>
							{/* <p className="text-4xl font-bold text-gray-800">25+</p> */}
							<h2 className="text-4xl font-bold text-gray-800">
								<CountUp
									end={25}
									duration={5}
									separator=","
									enableScrollSpy
									scrollSpyOnce
								/>+
							</h2>
							<p>Ongoing Projects</p>
						</div>
					</div>
					<p className="my-10 max-w-lg">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
						voluptatum eos est labore nobis! Incidunt eaque repudiandae nulla
						harum totam quidem, quis, repellendus asperiores neque perferendis,
						aliquam minus dolores velit.
					</p>
					<button className="bg-blue-600 text-white px-8 py-2 rounded">
						Learn More
					</button>
				</div>
			</div>
		</motion.div>
	);
};

export default About;
