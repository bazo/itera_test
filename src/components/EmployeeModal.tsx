import "./modal.css";

import { format } from "date-fns";
import React, { FC } from "react";

interface EmployeeModalProps {
	employee: Employee;
	department: Department;
	onClose: () => void;
}

const EmployeeModal: FC<EmployeeModalProps> = ({ employee, department, onClose }) => {
	return (
		<div className="modal-backdrop" onClick={onClose}>
			<div className="modal">
				<h1>{employee.name}</h1>

				<table>
					<tbody>
						<tr>
							<th>ID</th>
							<td>{employee.id}</td>
						</tr>
						<tr>
							<th>Age</th>
							<td>{employee.age}</td>
						</tr>
						<tr>
							<th>Department</th>
							<td>{department.departmentName}</td>
						</tr>
						<tr>
							<th>Start date</th>
							<td>{employee.startDate ? format(new Date(employee.startDate), "dd.MM.yyyy") : ""}</td>
						</tr>
						<tr>
							<th>End date</th>
							<td>{employee.endDate ? format(new Date(employee.endDate), "dd.MM.yyyy") : ""}</td>
						</tr>
					</tbody>
				</table>

				<button type="button" onClick={onClose}>
					Close
				</button>
			</div>
		</div>
	);
};

export default EmployeeModal;
