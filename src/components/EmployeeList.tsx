import React, { FC } from "react";

interface EmployeeListProps {
	employees: Employee[];
	departmentsById: DepartmentsByID;
	onRowClick: (id: number) => void;
}

const EmployeeList: FC<EmployeeListProps> = ({ employees, departmentsById, onRowClick }) => {
	return (
		<div className="Employee-List">
			<table>
				<thead>
					<tr>
						<th>Employee ID</th>
						<th>Name</th>
						<th>Department</th>
					</tr>
				</thead>
				<tbody>
					{employees.map(({ id, name, departmentId }) => {
						return (
							<tr key={id} onClick={onRowClick.bind(null, id)}>
								<td>{id}</td>
								<td>{name}</td>
								<td>{departmentsById[departmentId].departmentName}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default EmployeeList;
