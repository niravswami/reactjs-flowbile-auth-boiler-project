import React from "react";
import Aside from "../Aside";
import NavbarComp from "../NavbarComp";
import { Outlet } from "react-router-dom";

export default function Layout({ children }) {
	return (
		<div className="antialiased bg-white-50 dark:bg-gray-900 h-screen">
			<NavbarComp />
			<Aside />
			<main className="p-4 md:ml-64 h-auto pt-20 mt-12 md:mt-0">
				<Outlet />
			</main>
		</div>
	);
}
