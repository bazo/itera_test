import "./App.css";

import { HttpClient } from "@bazo/fetch-client";
import DepartmentFilter from "components/DepartmentFilter";
import EmployeeList from "components/EmployeeList";
import EmployeeModal from "components/EmployeeModal";
import Loader from "components/Loader";
import { filterEmployees, indexDepartmentsById } from "libs/utils";
import React, { FC, useEffect, useState } from "react";

interface AppProps {
	http: HttpClient;
}

const App: FC<AppProps> = ({ http }) => {
	const [departments, setDepartments] = useState<Department[]>([]);
	const [departmentsById, setDepartmentsById] = useState<DepartmentsByID>([]);

	const [employees, setEmployees] = useState<Employee[]>([]);

	const [selectedDepartment, selectDepartment] = useState(0);
	const [isLoading, setIsLoading] = useState(true);

	const [selectedEmployeeId, setSelectedEmployeeId] = useState<number>();
	const [selectedEmployee, setSelectedEmployee] = useState<Employee>();

	const loadData = async (): Promise<void> => {
		const [departments, employees] = await Promise.all([http.get<Department[]>("/departments"), http.get<Employee[]>("/employees")]);
		setDepartments(departments);
		setDepartmentsById(indexDepartmentsById(departments));
		setEmployees(employees);
		setIsLoading(false);
	};

	const loadEmployee = async (id: number): Promise<void> => {
		const employee = await http.get<Employee>(`/employees/${id}`);
		setSelectedEmployee(employee);
	};

	useEffect(() => {
		loadData();
	}, []);

	useEffect(() => {
		if (selectedEmployeeId) {
			loadEmployee(selectedEmployeeId);
		}
	}, [selectedEmployeeId]);

	const onDepartmentChange = (departmentId: number): void => {
		selectDepartment(departmentId);
	};

	const onModalClose = (): void => {
		setSelectedEmployee(undefined);
		setSelectedEmployeeId(undefined);
	};

	return (
		<div className="App">
			<header className="App-header">
				<h1>Employee list</h1>
			</header>
			<div className="Content">
				{isLoading ? (
					<Loader />
				) : (
					<>
						<DepartmentFilter departments={departments} onChange={onDepartmentChange} />
						<EmployeeList
							employees={filterEmployees(employees, selectedDepartment)}
							departmentsById={departmentsById}
							onRowClick={setSelectedEmployeeId}
						/>
						{selectedEmployee && (
							<EmployeeModal
								employee={selectedEmployee}
								department={departmentsById[selectedEmployee.departmentId]}
								onClose={onModalClose}
							/>
						)}
					</>
				)}
			</div>
		</div>
	);
};

export default App;
