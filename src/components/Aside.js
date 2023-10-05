import { Sidebar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { PROTECTED_PATH } from "../routes/protectedRouter";
import { AUTH_PATH } from "../routes/authRoutes";

export default function Aside() {
	const asideitems = [
		{
			href: "/dashboard",
			text: "Dashboard",
		},
		{
			href: PROTECTED_PATH.CONTACT_US,
			text: "Contact us",
		},
		{
			href: PROTECTED_PATH.ABOUT,
			text: "About",
		},
	];
	return (
		<>
			<aside
				className="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
				aria-label="Sidenav"
				id="drawer-navigation"
			>
				<Sidebar
					aria-label="Default sidebar example"
					className="border-r bg-white  border-gray-200  dark:bg-gray-800 dark:border-gray-700"
				>
					<Sidebar.Items>
						<form action="#" method="GET" className=" mb-2">
							<label htmlFor="sidebar-search" className="sr-only">
								Search
							</label>
							<div className="relative">
								<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
									<svg
										className="w-5 h-5 text-gray-500 dark:text-gray-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
										></path>
									</svg>
								</div>
								<input
									type="text"
									name="search"
									id="sidebar-search"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
									placeholder="Search"
								/>
							</div>
						</form>
					</Sidebar.Items>
					<Sidebar.Items>
						<Sidebar.ItemGroup>
							{asideitems.map((item) => (
								<Link to={item.href} key={item.href}>
									<Sidebar.Item as="div">
										<p>{item.text}</p>
									</Sidebar.Item>
								</Link>
							))}
						</Sidebar.ItemGroup>
						<Sidebar.ItemGroup>
							<Link to={AUTH_PATH.LOGIN}>
								<Sidebar.Item as="div">
									<p>Login</p>
								</Sidebar.Item>
							</Link>
							<Link to={AUTH_PATH.REGISTER}>
								<Sidebar.Item as="div">
									<p>Sign up</p>
								</Sidebar.Item>
							</Link>
						</Sidebar.ItemGroup>
					</Sidebar.Items>
				</Sidebar>
			</aside>
		</>
	);
}
