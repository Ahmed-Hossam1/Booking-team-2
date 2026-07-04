import { Calendar, MapPin } from "lucide-react";
import type { Appointment } from "../types";
import { Button } from "@/components/ui/button";

interface AppointmentCardProps {
  appointment: Appointment;
}

const statusConfig = {
  upcoming: {
    status: "Upcoming",
    statusColor: "#2563EB",

  },
  completed: {
    status: "Completed",
    statusColor: "#16A34A",

  },
  cancelled: {
    status: "Cancelled",
    statusColor: "#EF4444",

  },
};




export default function AppointmentCard({ appointment }: AppointmentCardProps) {
  const config = statusConfig[appointment.status];

  return (
    <div className="rounded-xl border border-border-secondary bg-card p-4 flex flex-col gap-3">
      {/* Header: date + status */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-booking-text-secondary text-sm">
          <Calendar className="size-4" />
          <span>
            {appointment.date} - {appointment.time}
          </span>
        </div>
        <span className="text-sm font-medium" style={{ color: config.statusColor }}>
          {config.status}
        </span>
      </div>

      {/* Doctor info */}
      <div className="flex items-center gap-3">
        <img
          src={appointment.avatarUrl}
          alt={appointment.doctorName}
          className="size-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-booking-text-primary">
            {appointment.doctorName}
          </span>
          <span className="text-xs text-booking-text-secondary">
            {appointment.specialty}
          </span>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-center gap-1.5 text-booking-text-secondary text-sm">
        <MapPin className="size-4 text-booking-location-icon" />
        <span>{appointment.address}</span>
      </div>

      {/* Action buttons */}
      <div className="flex items-center justify-between  gap-3 mt-1">
        <Button variant="outline" size="lg" className="flex-1">view details</Button>
        <Button variant="brand" size="lg" className="flex-1" > feedback</Button>
      </div>
    </div>
  );
}
