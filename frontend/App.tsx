import router from 'Frontend/routes.js';
import { RouterProvider } from 'react-router-dom';
import {PersonContext} from "Frontend/PersonContext";

export default function App() {
  return <PersonContext><RouterProvider router={router} /></PersonContext>;
}
