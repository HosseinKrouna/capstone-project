import styled from "styled-components";

function CreateEventForm({ formName, defaultData }) {
  function handleSubmit() {}

  return (
    <>
      <StyledWrapper>
        <header>
          <h1>New Event</h1>
        </header>
        <main>
          <FormContainer aria-labelledby={formName} onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input
              id="title"
              name="title"
              type="text"
              defaultValue={defaultData?.title}
            />
            <label htmlFor="title">Start Time:</label>
            <input
              id="start-time"
              name="Start-time"
              type="date"
              defaultValue={defaultData?.startTime}
            />
            <label htmlFor="title">End Time:</label>
            <input
              id="end-time"
              name="end-time"
              type="date"
              defaultValue={defaultData?.endTime}
            />
            <label htmlFor="title">Location:</label>
            <input
              id="location"
              name="location"
              type="text"
              defaultValue={defaultData?.location}
            />
            <label htmlFor="title">Map URL:</label>

            <input
              id="map-url"
              name="mapURL"
              type="text"
              defaultValue={defaultData?.mapURL}
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
            <button type="submit">
              {defaultData ? "Update Event" : "Add Event"}
            </button>
          </FormContainer>
        </main>
      </StyledWrapper>
    </>
  );
}
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 12px auto;
`;

export default CreateEventForm;
