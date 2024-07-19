/*const AppointmentInfo = ({ appoinment, onDelete }) => {
  return (
    <li className="user-data">
      <button
        onClick={() => {
          onDelete(appoinment.id);
        }}
        type="button"
      >
        Delete{" "}
      </button>
      <div className="flex-grow">
        <div className="flex items-center">
          <span className="flex-none font-medium text-2xl text-blue-500">
            {appoinment.petName}
          </span>
          <span className="flex-grow text-right">{appoinment.aptDate}</span>
        </div>
        <div>
          <b className="font-bold text-blue-500">
            Owner:{appoinment.ownerName}
          </b>
        </div>
        <div className="leading-tight">{appoinment.aptNotes}</div>
      </div>
    </li>
  );
};

export default AppointmentInfo; */
import React from "react";
import { MdDelete } from "react-icons/md";
const AppointmentInfo = ({ appointment, onDelete }) => {
  return (
    <li className="user-data">
      <div className="info-one">
        <div className="info-two">
          <span className="flex-none font-medium text-2xl text-blue-500">
            {appointment.petName}
          </span>
          <span className="flex-grow text-right">{appointment.aptDate}</span>
        </div>
        <div className="info-three">
          <b className="font-bold text-blue-500">
            Owner: {appointment.ownerName}
          </b>
        </div>
        <div className="leading-tight">{appointment.aptNotes}</div>
      </div>
      <button
        onClick={() => {
          onDelete(appointment.id);
        }}
        type="button"
        className="delete-info"
      >
        <MdDelete />
        &nbsp;Delete
      </button>
    </li>
  );
};

export default AppointmentInfo;
