import React, { useState } from "react";
import { AUTH_PATH } from "../../routes/authRoutes";
import { Button, Label, TextInput } from "flowbite-react";
import useAuth from "../../apiHooks/useAuth";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
	const { forgotPassword } = useAuth();
	const [formValues, setFormValues] = useState({ email: "" });
	const [errors, setErrors] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [status, setStatus] = useState(null);
	const onChange = (e) => {
		if (status) setStatus(null);
		if (errors && errors[e.target.name]) {
			setErrors((prev) => {
				let newError = { ...prev };
				delete newError[e.target.name];
				return newError;
			});
		}
		setFormValues((prev) => {
			return { ...prev, [e.target.name]: e.target.value };
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);
		setStatus(null);
		setErrors(null);
		forgotPassword({ formValues, setErrors, setStatus, setIsLoading });
	};

	return (
		<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
			<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
				Forgot password
			</h1>
			<form className="space-y-2 md:space-y-4" onSubmit={onSubmit}>
				<div className=" text-sm text-gray-600">
					Forgot your password? No problem. Just let us know your email address
					and we will email you a password reset link that will allow you to
					choose a new one.
				</div>

				{status?.success && (
					<div className="font-medium text-sm text-green-500">
						{status?.success}
					</div>
				)}

				{status?.fail && (
					<div className="font-medium text-sm text-red-600">{status?.fail}</div>
				)}

				<div>
					<div className="mb-2 block">
						<Label htmlFor="email1" value="Your email" />
					</div>
					<TextInput
						id="email1"
						type="email"
						name="email"
						placeholder="name@flowbite.com"
						value={formValues?.email}
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
				<Button
					type="submit"
					className="w-full"
					isProcessing={isLoading}
					disabled={isLoading}
				>
					Email Password Reset Link
				</Button>
				<p className="text-sm font-light text-gray-500 dark:text-gray-400">
					<Link
						className="font-medium text-primary-600 hover:underline dark:text-primary-500"
						to={AUTH_PATH.LOGIN}
					>
						Login
					</Link>
				</p>
			</form>
		</div>
	);
}
