"use client";

import { Box, TextField } from "@mui/material";
import { useRef, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [date, setDate] = useState<Dayjs | null>(dayjs());
  const [time, setTime] = useState<Dayjs | null>(null);

  const handleDateChange = (newValue: Dayjs | null) => {
    setDate(newValue);
  };

  const handleTimeChange = (newValue: Dayjs | null) => {
    setTime(newValue);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setLoading(true);
    const body = {
      name: data.get("name"),
      email: data.get("email"),
      phone: data.get("phone"),
      date: date?.format("DD/MM/YYYY"),
      time: time?.format("HH:mm"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      setSuccess(true);
      setDate(null);
      setTime(null);
      formRef.current?.reset();
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center text-center px-6 py-24 bg-gray-50"
    >
      <Box
        ref={formRef}
        component="form"
        onSubmit={handleSubmit}
        className="text-white font-bold"
      >
        <div>
          <h1 className="text-4xl text-gold font-extrabold mb-2">
            Formular de rezervare
          </h1>
          <p className="text-xl text-primary font-bold mb-8">
            Completează pentru a-ți rezerva sesiunea gratuită de coaching
          </p>
        </div>
        <div className="bg-gradient-to-r from-[var(--color-primary)] to-[#946c1c] shadow-xl px-12 py-8 rounded-xl bg-green border-2 border-[#fff8ec]">
          <div>
            <div className="flex sm:flex-row flex-col sm:gap-0 gap-8 justify-between mb-8 text-left">
              <div className="flex flex-col ">
                <p className="mb-2 text-gold">Nume complet</p>
                <TextField
                  sx={{ backgroundColor: "#fff", borderRadius: "6px" }}
                  fullWidth
                  name="name"
                  placeholder="Nume"
                  required
                />
              </div>
              <div className="flex flex-col">
                <p className="mb-2 text-gold">Telefon</p>
                <TextField
                  sx={{ backgroundColor: "#fff", borderRadius: "6px" }}
                  fullWidth
                  name="phone"
                  placeholder="Telefon"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start mb-8">
              <p className="mb-2 text-gold">Email</p>
              <TextField
                sx={{ backgroundColor: "#fff", borderRadius: "6px" }}
                fullWidth
                name="email"
                placeholder="Email"
                required
              />
            </div>

            <div className="w-full flex flex-col gap-2 mb-8 text-left">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <p className="text-gold">Data</p>
                <DatePicker
                  value={date}
                  onChange={handleDateChange}
                  format="DD/MM/YYYY"
                  minDate={dayjs()}
                  slotProps={{
                    textField: {
                      required: true,
                      fullWidth: true,
                      sx: {
                        backgroundColor: "#fff",
                        borderRadius: "8px",
                      },
                    },
                  }}
                />
              </LocalizationProvider>
            </div>
            <div className="w-full flex flex-col gap-2 mb-8 text-left">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <p className="text-gold">Ora </p>
                <TimePicker
                  value={time}
                  onChange={handleTimeChange}
                  format="HH:mm"
                  ampm={false}
                  slotProps={{
                    textField: {
                      required: true,
                      fullWidth: true,
                      sx: {
                        backgroundColor: "#fff",
                        borderRadius: "8px",
                      },
                    },
                  }}
                />
              </LocalizationProvider>
            </div>
            {!success && (
              <button
                type="submit"
                disabled={loading}
                className="rounded-full bg-[#0e564e] sm:py-6 sm:px-8 py-3 px-6 text-md font-bold text-white hover:bg-[#b89b63] cursor-pointer"
              >
                {loading ? "Se trimite" : "Trimite cererea de programare!"}
              </button>
            )}
            {success && (
              <p color="text-primary mt-10">Email trimis cu succes !</p>
            )}
            <p className="mt-8 mb-8 text-gold font-bold text-md">
              Confirmarea vine în maximum 24h.
            </p>
          </div>
        </div>
      </Box>
    </section>
  );
};

export default Contact;
