export type AppointmentStatus = "all" | "upcoming" | "completed" | "cancelled";

export interface Appointment {
  id: string;
  date: string;
  time: string;
  status: AppointmentStatus;
  doctorName: string;
  specialty: string;
  address: string;
  avatarUrl: string;
}
