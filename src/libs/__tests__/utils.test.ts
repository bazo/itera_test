import { filterEmployees, indexDepartmentsById } from "libs/utils";

import { departments, employees } from "../../../db.json";

describe("utils", () => {
	test("filterEmployees all", () => {
		expect(filterEmployees(employees, 0)).toStrictEqual(employees);
	});

	test("filterEmployees in HR", () => {
		const employeesInHR = [
			{
				id: 5,
				name: "Kierran Hayden",
				age: 28,
				departmentId: 3,
				startDate: "2020-06-01",
				endDate: null,
			},
		];

		expect(filterEmployees(employees, 3)).toStrictEqual(employeesInHR);
	});

	test("indexDepartmentsById", () => {
		const departmentsById = {
			"1": { id: 1, departmentName: "Technology consulting" },
			"2": { id: 2, departmentName: "Managed services" },
			"3": { id: 3, departmentName: "Human resources" },
			"4": { id: 4, departmentName: "Quality assurance" },
			"5": { id: 5, departmentName: "Management" },
		};

		expect(indexDepartmentsById(departments)).toStrictEqual(departmentsById);
	});
});
