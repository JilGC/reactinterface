import { BiCalendar } from "react-icons/bi";
import AddAppointment from "./components/AddAppointment";
import AppointmentInfo from "./components/AppointmentInfo";
import Search from "./components/Search";
import appointmentList from "./data.json";

function App() {
  return (
    <div className="App">
      <h1 className="text-5xl mb-3 m-3">
        <BiCalendar className="inline-flex text-red-400 align-top" />This is a reactApp</h1>

      <AddAppointment />

      <ul className="divide-y divide-gray-200">
        {appointmentList
          .map(appointment =>
          (
            <AppointmentInfo key={appointment.id}
              appointment={appointment}
            />
          ))
        }
      </ul>

      <Search />
    </div>
  );
}

export default App;
