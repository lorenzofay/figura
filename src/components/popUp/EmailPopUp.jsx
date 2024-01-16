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
  const [message, setMessage] = useState("");

  const handleOpen = () => setOpen(!open);

  const handleSendEmail = async () => {
    // Send email using a server-side API
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });

      if (response.ok) {
        console.log("Email sent successfully!");
      } else {
        console.error("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }

    handleOpen();
  };

  return (
    <>
      <img src={img} alt={alt} className={className} onClick={handleOpen} />
      <Dialog
        className="font-[Raleway]"
        open={open}
        size="xs"
        handler={handleOpen}
      >
        <div className="flex items-center justify-between">
          <DialogHeader className="flex flex-col items-start popUp">
            {" "}
            <Typography variant="h4" className="mb-1 font-[Raleway]">
              Dejanos tu mensaje
            </Typography>
          </DialogHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5 cursor-pointer"
            onClick={handleOpen}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <DialogBody className="font-[Raleway]">
          <div className="grid gap-6">
            <Typography
              className="-mb-2 font-[Raleway]"
              color="blue-gray"
              variant="h6"
            >
              Tu email
            </Typography>
            <Input className="font-[Raleway]" label="Email" />
            <Typography
              className="-mb-2 font-[Raleway]"
              color="blue-gray"
              variant="h6"
            >
              Tu mensaje
            </Typography>
            <Textarea className="font-[Raleway]" label="Mensaje" />
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

export default EmailPopUp;
