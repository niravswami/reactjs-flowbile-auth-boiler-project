"use client";

import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export default function DefaultNavbar() {
	const NavbarLinkList = [
		{
			href: "/",
			label: "Home",
		},
		{
			href: "/profile",
			label: "Profile",
		},
		{
			href: "/about",
			label: "About",
		},
		{
			href: "/contact",
			label: "Contact",
		},
	];

	return (
		<Navbar fluid rounded>
			<Navbar.Brand href="/">
				<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
					Flowbite React
				</span>
			</Navbar.Brand>
			<Navbar.Toggle />
			<Navbar.Collapse>
				{NavbarLinkList.map((item) => (
					<Link key={item.href} to={item.href}>
						<Navbar.Link as={"div"}>{item.label}</Navbar.Link>
					</Link>
				))}
				{/* <Navbar.Link active href="#">
					<p>Home</p>
				</Navbar.Link>
				<Navbar.Link href="#">
					<p>About</p>
				</Navbar.Link>
				<Navbar.Link href="#">Services</Navbar.Link>
				<Navbar.Link href="#">Pricing</Navbar.Link>
				<Navbar.Link href="#">Contact</Navbar.Link>
				<Link to={"/"}>
					<Navbar.Link as={"div"}>Home</Navbar.Link>
				</Link>
				<Link to={"/about"}>
					<Navbar.Link as={"div"}>About</Navbar.Link>
				</Link>
				<Link to={"/users"}>
					<Navbar.Link as={"div"}>Users</Navbar.Link>
				</Link> */}
			</Navbar.Collapse>
		</Navbar>
	);
}
