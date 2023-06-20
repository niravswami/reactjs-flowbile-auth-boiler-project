import { Button, Card } from "flowbite-react";
import React from "react";
import { useDateFromTodayContext } from "../context/DateFromTodayProvider";
import PageTitle from "../components/PageTitle";

export default function DateFromToday() {
	const { step, setStep, count, setCount, date } = useDateFromTodayContext();

	return (
		<div className="h-full">
			<PageTitle>Date from today</PageTitle>

			<div className="w-full flex justify-center">
				<Card className="max-w-sm">
					<div className="flex gap-4 items-center  justify-center">
						<Button onClick={() => setStep((prev) => prev - 1)}>-</Button>
						<p>Setp: {step}</p>
						<Button onClick={() => setStep((prev) => prev + 1)}>+</Button>
					</div>
					<div className="flex gap-4 items-center justify-center">
						<Button onClick={() => setCount((prev) => prev - step)}>-</Button>
						<p>Count: {count}</p>
						<Button onClick={() => setCount((prev) => prev + step)}>+</Button>
					</div>
					<div>
						<p>{`${
							count === 0
								? "today is"
								: count > 0
								? `${count} day from today is `
								: count < 0
								? `${count} days ago was `
								: ""
						} ${date.toDateString()}`}</p>
					</div>
				</Card>
			</div>
		</div>
	);
}
