import React, { createContext, useContext, useState } from "react";

export const DateFromTodayContext = createContext();

export const DateFromTodayProvider = ({ children }) => {
	const [step, setStep] = useState(0);
	const [count, setCount] = useState(1);
	const date = new Date();
	date.setDate(date.getDate() + count + step);
	return (
		<DateFromTodayContext.Provider
			value={{ step, setStep, count, setCount, date }}
		>
			{children}
		</DateFromTodayContext.Provider>
	);
};

export const useDateFromTodayContext = () => {
	const context = useContext(DateFromTodayContext);
	if (context === "undefined")
		throw new Error(
			"useDateFromTodayContext is used outside the DateFromTodayProvider"
		);
	return context;
};
