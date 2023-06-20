import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GUEST_ROUTES } from "../../routes/guestRoutes";
import useAuth from "../../apiHooks/useAuth";

export default function Register() {
	const { signup } = useAuth();
	const [formValues, setFormValues] = useState({
		name: "",
		email: "",
		password: "",
		password_confirm: "",
	});
	const [errors, setErrors] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const onChange = (e) => {
		if (errors && errors[e.target.name])
			setErrors((prev) => {
				let newError = { ...prev };
				delete newError[e.target.name];
				return newError;
			});

		setFormValues((prev) => {
			return { ...prev, [e.target.name]: e.target.value };
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);
		signup({ formValues, setErrors, setIsLoading });
	};

	return (
		<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
			<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
				Create and account
			</h1>
			<form onSubmit={onSubmit} className="space-y-4 md:space-y-6">
				<div>
					<div className="mb-2 block">
						<Label htmlFor="name" value="Full name" />
					</div>
					<TextInput
						id="name"
						name="name"
						type="text"
						placeholder="Bonnie Green"
						required
						value={formValues.name}
						onChange={onChange}
						helperText={
							errors?.name ? (
								<>
									<span className="font-medium">{errors?.name}</span>
								</>
							) : null
						}
						color={errors?.name ? "failure" : ""}
					/>
				</div>
				<div>
					<div className="mb-2 block">
						<Label htmlFor="email" value="Your email" />
					</div>
					<TextInput
						id="email"
						name="email"
						placeholder="name@flowbite.com"
						required
						type="email"
						value={formValues.email}
						onChange={onChange}
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
						<Label htmlFor="password" value="Your password" />
					</div>
					<TextInput
						type="password"
						name="password"
						id="password"
						placeholder="••••••••"
						required
						value={formValues.password}
						onChange={onChange}
						helperText={
							errors?.password ? (
								<>
									<span className="font-medium">{errors?.password}</span>
								</>
							) : null
						}
						color={errors?.password ? "failure" : ""}
					/>
				</div>
				<div>
					<div className="mb-2 block">
						<Label htmlFor="confirm-password" value="Confirm password" />
					</div>
					<TextInput
						type="password"
						name="password_confirm"
						id="confirm-password"
						placeholder="••••••••"
						required
						value={formValues.password_confirm}
						onChange={onChange}
						helperText={
							errors?.password_confirm ? (
								<>
									<span className="font-medium">
										{errors?.password_confirm}
									</span>
								</>
							) : null
						}
						color={errors?.password_confirm ? "failure" : ""}
					/>
				</div>

				<div className="flex items-center gap-2">
					<Checkbox defaultChecked id="accept" />
					<Label className="flex" htmlFor="agree">
						<p>I agree with the </p>
						<a
							className="text-cyan-600 hover:underline dark:text-cyan-500"
							href="/forms"
						>
							<p>terms and conditions</p>
						</a>
					</Label>
				</div>

				<Button
					type="submit"
					className="w-full"
					isProcessing={isLoading}
					disabled={isLoading}
				>
					Sign up
				</Button>
				<p className="text-sm font-light text-gray-500 dark:text-gray-400">
					Already have an account?{" "}
					<Link
						className="font-medium text-primary-600 hover:underline dark:text-primary-500"
						to={GUEST_ROUTES.LOGIN}
					>
						Login here
					</Link>
				</p>
			</form>
		</div>
	);
}
