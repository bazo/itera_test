import { indexBy, prop } from "ramda";

export const filterEmployees = (employees: Employee[], departmentId: number): Employee[] => {
	return employees.filter((employee) => employee.departmentId === departmentId);
};

export const indexDepartmentsById = (departments: Department[]): DepartmentsByID => {
	return indexBy(prop("id"), departments);
};
