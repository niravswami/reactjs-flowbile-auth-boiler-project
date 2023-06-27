import React, { useState } from "react";
import useAuth from "../../apiHooks/useAuth.js";
import { Button, Label, TextInput } from "flowbite-react";
import { Link, useParams } from "react-router-dom";
import { AUTH_PATH } from "../../routes/authRoutes.js";

export default function ResetPassword() {
	const { resetPassword } = useAuth();
	const params = useParams();
	const [formValues, setFormValues] = useState({
		password: "",
		password_confirm: "",
	});
	const [errors, setErrors] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [status, setStatus] = useState(null);
	const onChange = (e) => {
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
		setErrors(null);
		setStatus(null);
		setIsLoading(true);
		resetPassword({
			formValues,
			setErrors,
			setIsLoading,
			setStatus,
			resetToken: params?.resetToken,
		});
	};
	return (
		<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
			<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
				Password reset
			</h1>
			<form className="space-y-2 md:space-y-4" onSubmit={onSubmit}>
				{status?.success && (
					<div className="mb-4 font-medium text-sm text-green-500">
						{status?.success}
					</div>
				)}
				{status?.fail && (
					<div className="mb-4 font-medium text-sm text-red-600">
						{status?.fail}
					</div>
				)}

				<div>
					<div className="mb-2 block">
						<Label htmlFor="password" value="New password" />
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
				<Button
					type="submit"
					className="w-full"
					isProcessing={isLoading}
					disabled={isLoading}
				>
					Reset password
				</Button>
				<p className="text-sm font-light text-gray-500 dark:text-gray-400">
					<Link
						className="font-medium text-primary-600 hover:underline dark:text-primary-500"
						to={AUTH_PATH.LOGIN}
						replace={true}
					>
						Login
					</Link>
				</p>
			</form>
		</div>
	);
}
