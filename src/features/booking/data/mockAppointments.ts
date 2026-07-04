import type { Appointment } from "../types";
import doctorAvatar from "@/assets/doctor-avatar.png";

export const mockAppointments: Appointment[] = [
  {
    id: "1",
    date: "Monday, July 21",
    time: "11:00 Am",
    status: "upcoming",
    doctorName: "Jennifer Miller",
    specialty: "Psychiatrist",
    address: "129,El-Nasr Street, Cairo, Egypt",
    avatarUrl: doctorAvatar,
  },
  {
    id: "2",
    date: "Monday, July 21",
    time: "11:00 Am",
    status: "completed",
    doctorName: "Jennifer Miller",
    specialty: "Psychiatrist",
    address: "129,El-Nasr Street, Cairo, Egypt",
    avatarUrl: doctorAvatar,
  },
  {
    id: "3",
    date: "Monday, July 21",
    time: "11:00 Am",
    status: "cancelled",
    doctorName: "Jennifer Miller",
    specialty: "Psychiatrist",
    address: "129,El-Nasr Street, Cairo, Egypt",
    avatarUrl: doctorAvatar,
  },
  {
    id: "4",
    date: "Monday, July 21",
    time: "11:00 Am",
    status: "completed",
    doctorName: "Jennifer Miller",
    specialty: "Psychiatrist",
    address: "129,El-Nasr Street, Cairo, Egypt",
    avatarUrl: doctorAvatar,
  },
];
