import React from "react";

export default function PageTitle({ children }) {
	return (
		<>
			<h5 className="text-xl font-medium text-gray-500 dark:text-gray-400 capitalize">
				{children}
			</h5>
			<hr className="h-px mt-4 mb-6 bg-gray-200 border-0 dark:bg-gray-700" />
		</>
	);
}
