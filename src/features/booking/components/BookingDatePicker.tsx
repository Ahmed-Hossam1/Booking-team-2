import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Calendar as CalendarIcon, ChevronDown } from "lucide-react"

const DAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"]

export default function BookingDatePicker() {
  const [date, setDate] = useState<Date | undefined>(new Date(2025, 6, 21))
  const [open, setOpen] = useState(false)

  const label = date ? `${DAYS[date.getDay()]}, ${MONTHS[date.getMonth()]} ${date.getDate()}` : "Select date"

  return (
    <div className="relative">
      <Button variant="outline" onClick={() => setOpen(!open)} className="h-11 px-4 rounded-xl gap-2.5 min-w-[220px] justify-between">
        <CalendarIcon className="size-4" />
        <span>{label}</span>
        <ChevronDown className={`size-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </Button>

      {open && (
        <div className="absolute right-0 top-full mt-2 z-50 rounded-2xl border border-border-secondary bg-card shadow-lg">
          <Calendar
            mode="single"
            defaultMonth={date}
            selected={date}
            onSelect={(d) => { setDate(d); if (d) setOpen(false) }}
          />
        </div>
      )}
    </div>
  )
}
