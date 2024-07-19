import { useState } from "react";

const AddAppointment = ({ onSend, lastid }) => {
  const clearData = {
    ownerName: "",
    petName: "",
    aptDate: "",
    aptTime: "",
    aptNotes: "",
  };

  const [toogle, setToggle] = useState(false);
  const [formdata, setFormdata] = useState(clearData);

  function formpublishData() {
    const appoinmentinfor = {
      id: lastid + 1,
      ownerName: formdata.ownerName,
      petName: formdata.petName,
      aptDate: formdata.aptDate + " " + formdata.aptTime,
      aptNotes: formdata.aptNotes,
    };
    onSend(appoinmentinfor);
    setFormdata(clearData);
    setToggle(!toogle);
  }

  return (
    <div className="Appoinment-user">
      <div className="add">
        <button
          onClick={() => {
            setToggle(!toogle);
          }}
          
        >
          {" "}
          + &nbsp;add appoinment
        </button>
      </div>
      {toogle && (
        <form>
          <div className="name">
            <label>Owner Name: </label>

            <input
              type="text"
              name="ownerName"
              id="ownerName"
              onChange={(event) => {
                setFormdata({ ...formdata, ownerName: event.target.value });
              }}
              value={formdata.ownerName}
            />
          </div>
          <div className="pet">
            <label>Pet Name: </label>
            <input
              type="text"
              name="petName"
              id="petName"
              onChange={(event) => {
                setFormdata({ ...formdata, petName: event.target.value });
              }}
              value={formdata.petName}
            />
          </div>
          <div className="Apt">
            <label>Apt Date: </label>
            <input
              type="date"
              name="aptDate"
              id="AptDate"
              onChange={(event) => {
                setFormdata({ ...formdata, aptDate: event.target.value });
              }}
              value={formdata.aptDate}
            />
          </div>
          <div className="AptTime">
            <label>Apt Time: </label>
            <input
              type="time"
              name="Apttime"
              id="Aptname"
              onChange={(event) => {
                setFormdata({ ...formdata, aptTime: event.target.value });
              }}
              value={formdata.aptTime}
            />
          </div>
          <div className="comments">
            <label>Appoinment Notes: </label>
            <textarea
              id="aptNotes"
              name="aptNotes"
              onChange={(event) => {
                setFormdata({ ...formdata, aptNotes: event.target.value });
              }}
              value={formdata.aptNotes}
            />
          </div>
          <div className="publish">
            <button type="submit" onClick={formpublishData}>
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddAppointment;
