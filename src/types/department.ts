
export interface Department {
  id: string;
  name: string;
  code: string;
  description?: string;
  headOfDepartment?: string;
  email?: string;
  phone?: string;
  location?: string;
  createdAt: number;
  active: boolean;
}

export interface DepartmentFormData {
  name: string;
  code: string;
  description?: string;
  headOfDepartment?: string;
  email?: string;
  phone?: string;
  location?: string;
  active: boolean;
}
