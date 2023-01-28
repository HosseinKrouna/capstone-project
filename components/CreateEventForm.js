function CreateEventForm({ formName, defaultData }) {
  function handleSubmit() {}

  return (
    <>
      <header>
        <h1>New Event</h1>
      </header>
      <main>
        <form aria-labelledby={formName} onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            name="title"
            type="text"
            defaultValue={defaultData?.title}
          />
          <label htmlFor="title">Start Time:</label>
          <input
            id="startTime"
            name="StartTime"
            type="text"
            defaultValue={defaultData?.startTime}
          />
          <label htmlFor="title">End Time:</label>
          <input
            id="endTime"
            name="endTime"
            type="text"
            defaultValue={defaultData?.endTime}
          />
          <label htmlFor="title">Location:</label>
          <input
            id="location"
            name="location"
            type="text"
            defaultValue={defaultData?.location}
          />
          <label htmlFor="title">Good To Know:</label>
          <input
            id="description"
            name="description"
            type="text"
            defaultValue={defaultData?.description}
          />
          <label htmlFor="title">Creator:</label>
          <input
            id="creator"
            name="creator"
            type="text"
            defaultValue={defaultData?.creator}
          />
          <button type="submit">Submit</button>
        </form>
      </main>
    </>
  );
}

export default CreateEventForm;
