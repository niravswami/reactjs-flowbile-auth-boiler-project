import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../apiHooks/useAuth";
import { AUTH_PATH } from "../../routes/authRoutes";

export default function Login() {
	const { login } = useAuth();
	const [credentials, setCredentials] = useState({ email: "", password: "" });
	const [errors, setErrors] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const onChange = (e) => {
		setCredentials((prev) => {
			return { ...prev, [e.target.name]: e.target.value };
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);
		login({ credentials, setErrors, setIsLoading });
	};
	return (
		<>
			<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
				<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
					Sign in to your account
				</h1>
				<form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
					<div>
						<div className="mb-2 block">
							<Label htmlFor="email1" value="Your email" />
						</div>
						<TextInput
							id="email1"
							type="email"
							name="email"
							placeholder="name@flowbite.com"
							value={credentials?.email}
							onChange={onChange}
							required
							helperText={
								errors?.email ? (
									<>
										<span className="font-medium">{errors?.email}</span>
									</>
								) : null
							}
							color={errors?.email ? "failure" : ""}
						/>
					</div>
					<div>
						<div className="mb-2 block">
							<Label htmlFor="password1" value="Your password" />
						</div>
						<TextInput
							id="password1"
							type="password"
							name="password"
							placeholder="••••••••"
							value={credentials?.password}
							onChange={onChange}
							required
						/>
					</div>
					<div className="flex items-center justify-between">
						<div className="flex items-start">
							<div className="flex items-center gap-2">
								<Checkbox id="remember" />
								<Label htmlFor="remember">Remember me</Label>
							</div>
						</div>

						<Label>
							<Link
								className="font-medium text-primary-600 hover:underline dark:text-primary-500"
								to={AUTH_PATH.FORGOT_PASSWORD}
							>
								Forgot password?
							</Link>
						</Label>
					</div>
					<Button
						type="submit"
						className="w-full"
						isProcessing={isLoading}
						disabled={isLoading}
					>
						Sign in
					</Button>
					<p className="text-sm font-light text-gray-500 dark:text-gray-400">
						Don’t have an account yet?{" "}
						<Link
							className="font-medium text-primary-600 hover:underline dark:text-primary-500"
							to={AUTH_PATH.REGISTER}
						>
							Sign up
						</Link>
					</p>
				</form>
			</div>
		</>
	);
}
