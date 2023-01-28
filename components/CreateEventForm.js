import { useState } from "react";

function CreateEventForm() {
  const [title, setTitle] = useState("");
  const [startTime, setStartTime] = useState("");
  const [EndTime, setEndTime] = useState("");
  const [location, setLocation] = useState("");
  const [information, setInformation] = useState("");
  const [creator, setCreator] = useState("");

  return (
    <>
      <header>
        <h1>New Event</h1>
      </header>
      <main>
        <form action=""></form>
      </main>
    </>
  );
}

export default CreateEventForm;
