import { HttpClient } from "@bazo/fetch-client";
import { render } from "@testing-library/react";
import App from "app/App";
import { act } from "react-dom/test-utils";

import { departments, employees } from "../../../db.json";

test("renders Employee list text", async () => {
	const fakeHttp = {
		get: jest.fn().mockImplementation((endpoint: "/departments" | "/employees") => {
			if (endpoint === "/departments") {
				return departments;
			}

			if (endpoint === "/employees") {
				return employees;
			}
		}),
	};
	await act(async () => {
		const { getByText } = await render(<App http={(fakeHttp as unknown) as HttpClient} />);
		const linkElement = getByText(/Employee list/i);
		expect(linkElement).toBeInTheDocument();
	});
});
