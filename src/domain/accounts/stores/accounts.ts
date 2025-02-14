import type { Account } from "@/types";

export function useAccounts() {
  let accounts: Account[];
  accounts = [
    {
      id: "d70f633c-3d01-11ee-be56-0242ac120002",
      firstName: "Isaac",
      lastName: "Abok",
      middleName: "Odongo",
      idType: "NATIONAL_ID",
      idNumber: "CM90011001DVJE",
      departmentId: "d70f633c-3d01-11ee-be56-6742ac120002",
      email: "jondoe@mailinator.com",
      phone: "0772100090",
      status: "active",
      createdAt: "10-10-2022",
    },
    {
      id: "d70f633c-3d01-11ee-be56-0242ac120002",
      firstName: "Julius",
      lastName: "Pilus",
      middleName: "Madieci",
      idType: "NATIONAL_ID",
      idNumber: "CM90011001DVJE",
      departmentId: "d70f633c-3d01-11ee-be56-6742ac120002",
      email: "jondoe@mailinator.com",
      phone: "0772100090",
      status: "active",
      createdAt: "10-10-2022",
    },
    {
      id: "d70f633c-3d01-11ee-be56-0242ac120002",
      firstName: "Jackson",
      lastName: "Rubinganaho",
      middleName: "",
      idType: "NATIONAL_ID",
      idNumber: "CM90011001DVJE",
      departmentId: "d70f633c-3d01-11ee-be56-6742ac120002",
      email: "jondoe@mailinator.com",
      phone: "0772100090",
      status: "active",
      createdAt: "10-10-2022",
    },
    {
      id: "d70f633c-3d01-11ee-be56-0242ac120002",
      firstName: "Stephen",
      lastName: "Barungi",
      middleName: "",
      idType: "NATIONAL_ID",
      idNumber: "CM90011001DVJE",
      departmentId: "d70f633c-3d01-11ee-be56-6742ac120002",
      email: "jondoe@mailinator.com",
      phone: "0772100090",
      status: "active",
      createdAt: "10-10-2022",
    },
    {
      id: "d70f633c-3d01-11ee-be56-0242ac120002",
      firstName: "Johnson",
      lastName: "Bizimana",
      middleName: "",
      idType: "NATIONAL_ID",
      idNumber: "CM90011001DVJE",
      departmentId: "d70f633c-3d01-11ee-be56-6742ac120002",
      email: "jondoe@mailinator.com",
      phone: "0772100090",
      status: "pending",
      createdAt: "10-10-2022",
    },
    {
      id: "d70f633c-3d01-11ee-be56-0242ac120002",
      firstName: "Donald",
      lastName: "Robinson",
      middleName: "Jack",
      idType: "NATIONAL_ID",
      idNumber: "CM90011001DVJE",
      departmentId: "d70f633c-3d01-11ee-be56-6742ac120002",
      email: "jondoe@mailinator.com",
      phone: "0772100090",
      status: "active",
      createdAt: "10-10-2022",
    },
    {
      id: "d70f633c-3d01-11ee-be56-0242ac120002",
      firstName: "Andrew",
      lastName: "Muyingo",
      middleName: "Steven",
      idType: "NATIONAL_ID",
      idNumber: "CM90011001DVJE",
      departmentId: "d70f633c-3d01-11ee-be56-6742ac120002",
      email: "jondoe@mailinator.com",
      phone: "0772100090",
      status: "active",
      createdAt: "10-10-2022",
    },
    {
      id: "d70f633c-3d01-11ee-be56-0242ac120002",
      firstName: "Morientes",
      lastName: "Calabasis",
      middleName: "Rujo",
      idType: "NATIONAL_ID",
      idNumber: "CM90011001DVJE",
      departmentId: "d70f633c-3d01-11ee-be56-6742ac120002",
      email: "jondoe@mailinator.com",
      phone: "0772100090",
      status: "pending",
      createdAt: "10-10-2022",
    },
    {
      id: "d70f633c-3d01-11ee-be56-0242ac120002",
      firstName: "June",
      lastName: "Alabaster",
      middleName: "",
      idType: "NATIONAL_ID",
      idNumber: "CM90011001DVJE",
      departmentId: "d70f633c-3d01-11ee-be56-6742ac120002",
      email: "jondoe@mailinator.com",
      phone: "0772100090",
      status: "pending",
      createdAt: "10-10-2022",
    },
    {
      id: "d70f633c-3d01-11ee-be56-0242ac120002",
      firstName: "Halima",
      lastName: "Nanteza",
      middleName: "",
      idType: "NATIONAL_ID",
      idNumber: "CM90011001DVJE",
      departmentId: "d70f633c-3d01-11ee-be56-6742ac120002",
      email: "jondoe@mailinator.com",
      phone: "0772100090",
      status: "blocked",
      createdAt: "10-10-2022",
    },
  ];

  return {
    accounts,
  };
}
