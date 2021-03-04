import "./App.css";

import DepartmentFilter from "components/DepartmentFilter";
import EmployeeList from "components/EmployeeList";
import { createHttp } from "libs/createHttp";
import { filterEmployees, indexDepartmentsById } from "libs/utils";
import React, { FC, useEffect, useState } from "react";

const http = createHttp("http://localhost:3001");

const App: FC = () => {
	const [departments, setDepartments] = useState<Department[]>([]);
	const [departmentsById, setDepartmentsById] = useState<DepartmentsByID>([]);

	const [allEmployees, setAllEmployees] = useState<Employee[]>([]);
	const [displayedEmployees, setDisplayedEmployees] = useState<Employee[]>([]);

	const [selectedDepartment, selectDepartment] = useState(0);

	useEffect(() => {
		http.get<Department[]>("/departments").then((departments) => {
			setDepartments(departments);
			setDepartmentsById(indexDepartmentsById(departments));
		});
		http.get<Employee[]>("/employees").then((employees) => {
			setAllEmployees(employees);
			setDisplayedEmployees(employees);
		});
	}, []);

	useEffect(() => {
		if (selectedDepartment === 0) {
			setDisplayedEmployees(allEmployees);
			return;
		}
		setDisplayedEmployees(filterEmployees(allEmployees, selectedDepartment));
	}, [selectedDepartment]);

	const onDepartmentChange = (departmentId: number): void => {
		selectDepartment(departmentId);
	};

	return (
		<div className="App">
			<header className="App-header">
				<h1>Employee list</h1>
			</header>
			<div className="Content">
				<DepartmentFilter departments={departments} onChange={onDepartmentChange} />
				<EmployeeList employees={displayedEmployees} departmentsById={departmentsById} />
			</div>
		</div>
	);
};

export default App;
