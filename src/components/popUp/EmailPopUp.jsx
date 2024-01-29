import { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";

const EmailPopUp = ({ img, alt, className }) => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [toast, setToast] = useState({ message: "", type: "" });

  const handleOpen = () => setOpen(!open);

  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast({ message: "", type: "" }), 3000);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhone = (phone) => {
    const phoneRegex = /^[0-9]{10,}$/; // Adjust regex based on your phone number format requirements
    return phoneRegex.test(phone);
  };

  const handleSendEmail = async () => {
    if (!email || !message || !phone) {
      showToast("Por favor, complete todos los campos requeridos.", "error");
      return;
    }

    if (!isValidEmail(email)) {
      showToast("Por favor, ingrese un correo electrónico válido.", "error");
      return;
    }

    if (!isValidPhone(phone)) {
      showToast("Por favor, ingrese un número de teléfono válido.", "error");
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, phone, message }),
      });

      if (response.ok) {
        showToast("El mensaje fue enviado con éxito", "success");
      } else {
        showToast(
          "Error al enviar el mensaje. Por favor, inténtelo de nuevo.",
          "error"
        );
      }
    } catch (error) {
      showToast(`Error al enviar el mensaje: ${error.message}`, "error");
    }
    handleOpen();
  };

  return (
    <>
      {toast.message && <Toast message={toast.message} type={toast.type} />}
      <img src={img} alt={alt} className={className} onClick={handleOpen} />
      <Dialog
        className="font-[Raleway]"
        open={open}
        size="xs"
        handler={handleOpen}
      >
        <div className="flex items-center justify-between pt-[0.8em]">
          <DialogHeader className="flex flex-col items-start popUp">
            <Typography variant="h4" className="mb-3 font-[Convergence]">
              Dejanos tu mensaje
            </Typography>
            <Typography variant="h6" className="font-[Raleway] font-normal">
              Nos contactaremos en breve con soluciones
            </Typography>
          </DialogHeader>
          {/* Close Button */}
        </div>
        <DialogBody className="font-[Raleway]">
          <div className="grid gap-3">
            {/* ... Other Inputs ... */}
            <Input
              className="font-[Raleway]"
              label="Nombre"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              className="font-[Raleway]"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
            />
            <Input
              className="font-[Raleway]"
              label="Teléfono"
              onChange={(e) => setPhone(e.target.value)}
              type="phone"
              required
            />
            <Textarea
              className="font-[Raleway]"
              label="Mensaje"
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button
            className="font-[Raleway]"
            variant="text"
            onClick={handleOpen}
          >
            Cancelar
          </Button>
          <Button
            className="font-[Raleway]"
            variant="gradient"
            color="gray"
            onClick={handleSendEmail}
          >
            Enviar
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

const Toast = ({ message, type }) => {
  return (
    <div
      className={`fixed bottom-5 right-5 md:right-10 p-4 border ${
        type === "error"
          ? "bg-red-100 border-red-400 text-red-700"
          : "bg-green-100 border-green-400 text-green-700"
      } rounded shadow-lg`}
      style={{ filter: "none" }}
    >
      {message}
    </div>
  );
};

export default EmailPopUp;
