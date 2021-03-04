import React, { ChangeEvent, FC } from "react";

interface DepartmentFilterProps {
	departments: Department[];
	onChange: (departmentId: number) => void;
}

const DepartmentFilter: FC<DepartmentFilterProps> = ({ departments, onChange }) => {
	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		onChange(parseInt(e.target.value));
	};

	return (
		<div className="Department-Filter">
			<select onChange={handleChange}>
				<option value={0}>All departments</option>
				{departments.map(({ id, departmentName }) => {
					return (
						<option key={id} value={id}>
							{departmentName}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default DepartmentFilter;
