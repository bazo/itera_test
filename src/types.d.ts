declare interface Department {
	id: number;
	departmentName: string;
}

declare interface Employee {
	id: number;
	name: string;
	age: number;
	departmentId: number;
	startDate: string;
	endDate: string | null;
}

declare interface DepartmentsByID {
	[id: number]: Department;
}
