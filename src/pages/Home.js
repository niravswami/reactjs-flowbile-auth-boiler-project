import React from "react";
import { Link } from "react-router-dom";
import { AUTH_PATH } from "../routes/authRoutes";
import { Card } from "flowbite-react";
import { PROTECTED_PATH } from "../routes/protectedRouter";

export default function Home() {
	return (
		<>
			<div>
				<section className="bg-white dark:bg-gray-900">
					<div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
						<h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
							React js Auth boilerplate
						</h2>
						<div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-2 lg:grid-cols-2 dark:text-gray-400 ">
							<Link to={AUTH_PATH.LOGIN}>
								<Card className="flex justify-center items-center h-full">
									<h3 className="mb-2 text-xl font-bold dark:text-white">
										Login
									</h3>
								</Card>
							</Link>
							<Link to={PROTECTED_PATH.DASHBOARD}>
								<Card className="flex justify-center items-center h-full">
									<h3 className="mb-2 text-xl font-bold dark:text-white">
										Dashboard
									</h3>
									<p className="text-sm font-normal text-gray-500 dark:text-gray-400">
										will be redirect to login page if not authenticaed
									</p>
								</Card>
							</Link>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
