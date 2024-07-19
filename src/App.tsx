import "./App.css";
import { useState, useCallback, useEffect } from "react";
import Search from "./Components/Search.tsx";
import AddAppointment from "./Components/addAppoinment.tsx";
import AppoinmentList from "../public/data.json"; // This line may need modification
import AppointmentInfo from "./Components/Appoinmentinfo.tsx";

function App() {
  // Initialize appoinmenUser with AppoinmentList
  const [appoinmenUser, setAppoinmentUser] = useState(AppoinmentList);
  const [query, setQuery] = useState("");
  const [sortby, setsortby] = useState("petName");
  const [orderby, setorderby] = useState("asc");

  // Corrected toLowerCase method name
  const filteredAppointments = appoinmenUser
    .filter((item) => {
      return (
        item.petName.toLowerCase().includes(query.toLowerCase()) ||
        item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
        item.aptNotes.toLowerCase().includes(query.toLowerCase())
      );
    })
    .sort((a, b) => {
      const order = orderby === "asc" ? 1 : -1;
      return a[sortby].toLowerCase() < b[sortby].toLowerCase()
        ? -1 * order
        : 1 * order;
    });

  const fetchData = useCallback(() => {
    // Assuming AppoinmentList is the data.json file
    // No need to fetch again, as it's already loaded in state
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <div className="container">
        <h1>Your Appointments</h1>
        <AddAppointment
          onSend={(mylist) => setAppoinmentUser([...appoinmenUser, mylist])}
          lastid={appoinmenUser.reduce(
            (max, item) => (Number(item.id) > max ? Number(item.id) : max),
            0,
          )}
        />
        <Search
          query={query}
          onChangequery={(myquery) => setQuery(myquery)}
          orderby={orderby}
          onChangeorder={(mysort) => setorderby(mysort)}
          sortby={sortby}
          onChangesort={(mysort) => setsortby(mysort)}
        />
        <ul>
          {filteredAppointments.map((appointment) => (
            <AppointmentInfo
              key={appointment.id}
              appointment={appointment}
              onDelete={(appointmentId) =>
                setAppoinmentUser(
                  appoinmenUser.filter(
                    (appointment) => appointment.id !== appointmentId,
                  ),
                )
              }
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
