import "./App.css";

import { Theater } from "./components/theater/Theater";
import { ThemeProvider } from "@material-tailwind/react";

export const App = () => {
  return (
    <ThemeProvider>
      <Theater />
    </ThemeProvider>
  );
};
