import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type EmployeeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerEmployee = {
  readonly id: string;
  readonly firstName: string;
  readonly middleName: string;
  readonly lastName: string;
  readonly position: string;
  readonly homeAddress: string;
  readonly birthDate: string;
  readonly startDate: string;
  readonly weight: string;
  readonly height: string;
  readonly hairColor: string;
  readonly eyeColor: string;
  readonly deputyOrCivilian: string;
  readonly profilePhoto?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEmployee = {
  readonly id: string;
  readonly firstName: string;
  readonly middleName: string;
  readonly lastName: string;
  readonly position: string;
  readonly homeAddress: string;
  readonly birthDate: string;
  readonly startDate: string;
  readonly weight: string;
  readonly height: string;
  readonly hairColor: string;
  readonly eyeColor: string;
  readonly deputyOrCivilian: string;
  readonly profilePhoto?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Employee = LazyLoading extends LazyLoadingDisabled ? EagerEmployee : LazyEmployee

export declare const Employee: (new (init: ModelInit<Employee, EmployeeMetaData>) => Employee) & {
  copyOf(source: Employee, mutator: (draft: MutableModel<Employee, EmployeeMetaData>) => MutableModel<Employee, EmployeeMetaData> | void): Employee;
}