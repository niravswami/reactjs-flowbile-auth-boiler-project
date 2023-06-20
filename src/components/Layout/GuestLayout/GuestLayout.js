import React from "react";
import { Outlet } from "react-router-dom";

export default function GuestLayout() {
	return (
		<section className="bg-gray-50 dark:bg-gray-900  h-screen ">
			<div className="pt-20">
				<div className="px-0 py-8 mx-auto flex flex-col items-center md:px-6">
					<a
						href="/"
						className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
					>
						<img
							className="w-8 h-8 mr-2"
							src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
							alt="logo"
						/>
						Flowbite
					</a>
					<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
						{<Outlet />}
					</div>
				</div>
			</div>
		</section>
	);
}
