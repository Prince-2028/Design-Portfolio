import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
	{
		title: "Mobile App Design",
		desc: "Modern mobile application interface with clean design principles and intuitive user experience.",
		tags: ["UI/UX", "Mobile"],
		figmaLink: "#",
		icon: "📱",
		gradient: "from-blue-400 to-purple-500",
	},
	{
		title: "Web Dashboard",
		desc: "Comprehensive admin dashboard with data visualization and responsive layout design.",
		tags: ["Web", "Dashboard"],
		figmaLink: "#",
		icon: "🖥️",
		gradient: "from-green-400 to-blue-500",
	},
	{
		title: "E-commerce Platform",
		desc: "Complete e-commerce solution with product catalog, checkout flow, and user account management.",
		tags: ["E-commerce", "UI/UX"],
		figmaLink: "#",
		icon: "🛒",
		gradient: "from-orange-400 to-red-500",
	},
	{
		title: "Brand Identity",
		desc: "Complete brand identity system including logos, color palettes, and style guides.",
		tags: ["Branding", "Design System"],
		figmaLink: "#",
		icon: "🖌️",
		gradient: "from-pink-400 to-purple-500",
	},
	{
		title: "Social Media App",
		desc: "Social networking app with feed, messaging, and profile management features.",
		tags: ["Social", "Mobile"],
		figmaLink: "#",
		icon: "👥",
		gradient: "from-teal-400 to-blue-500",
	},
	{
		title: "Analytics Platform",
		desc: "Data analytics dashboard with interactive charts, reports, and real-time monitoring.",
		tags: ["Analytics", "Data Viz"],
		figmaLink: "#",
		icon: "📊",
		gradient: "from-yellow-400 to-orange-500",
	},
];

const cardVariants = {
	hidden: { opacity: 0, y: 40, scale: 0.95 },
	visible: (i) => ({
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			delay: i * 0.12,
			duration: 0.6,
			type: "spring",
			stiffness: 80,
		},
	}),
};

const Projects = () => {
	const [showMessage, setShowMessage] = useState(false);

	const handleLoadMore = () => {
		setShowMessage(true);
		setTimeout(() => setShowMessage(false), 3000); // Hide after 3 seconds
	};

	return (
		<section
			id="Projects"
			className="py-20 px-4 md:px-10 bg-white text-center"
		>
			<h2 className="text-3xl font-bold text-gray-900 mb-2">
				Featured Projects
			</h2>
			<p className="text-gray-600 mb-10 max-w-2xl mx-auto">
				A showcase of my latest Figma designs and prototypes across various
				industries and use cases.
			</p>

			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
				{projects.map((project, idx) => (
					<motion.div
						key={idx}
						className="bg-white rounded-xl shadow hover:shadow-md transition border"
						custom={idx}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: false, amount: 0.2 }}
						variants={cardVariants}
					>
						<div
							className={`h-28 flex items-center justify-center rounded-t-xl text-4xl text-white bg-gradient-to-r ${project.gradient}`}
						>
							{project.icon}
						</div>
						<div className="p-4 text-left">
							<h3 className="font-semibold text-lg text-gray-900">
								{project.title}
							</h3>
							<p className="text-sm text-gray-600 mt-1 mb-3">
								{project.desc}
							</p>
							<div className="flex flex-wrap gap-2 mb-4">
								{project.tags.map((tag, i) => (
									<span
										key={i}
										className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
									>
										{tag}
									</span>
								))}
							</div>
							<a
								href={project.figmaLink}
								target="_blank"
								rel="noopener noreferrer"
								className="text-sm text-blue-600 font-medium hover:underline"
							>
								View in Figma ↗
							</a>
						</div>
					</motion.div>
				))}
			</div>

			<div className="mt-10">
				<button
					onClick={handleLoadMore}
					className="px-6 py-2 bg-gray-100 rounded-md text-gray-700 hover:bg-gray-200 transition"
				>
					Load More Projects
				</button>

				{showMessage && (
					<div className="mt-4 text-red-500 text-sm animate-fade-in">
						No more projects found.
					</div>
				)}
			</div>
		</section>
	);
};

export default Projects;
