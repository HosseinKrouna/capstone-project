import styled from "styled-components";

function CreateEventForm({ onSubmit, formName, defaultData }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  }

  return (
    <>
      <StyledWrapper>
        <header>
          <h1>New Event</h1>
        </header>
        <main>
          <FormContainer aria-labelledby={formName} onSubmit={handleSubmit}>
            <fieldset>
              <FormItems>
                <legend>Create a new event 👇</legend>
                <label htmlFor="title">Title:</label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  defaultValue={defaultData?.title}
                />
                <label htmlFor="start-time">Start Time:</label>
                <input
                  id="start-time"
                  name="startTime"
                  type="datetime-local"
                  defaultValue={defaultData?.startTime}
                />
                <label htmlFor="end-time">End Time:</label>
                <input
                  id="end-time"
                  name="endTime"
                  type="datetime-local"
                  defaultValue={defaultData?.endTime}
                />
                <label htmlFor="location">Location:</label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  defaultValue={defaultData?.location}
                />
                <label htmlFor="map-url">Map URL:</label>

                <input
                  id="map-url"
                  name="mapURL"
                  type="text"
                  defaultValue={defaultData?.mapURL}
                />

                <label htmlFor="description">Good To Know:</label>
                <textarea
                  cols="30"
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
              </FormItems>
            </fieldset>
          </FormContainer>
        </main>
      </StyledWrapper>
    </>
  );
}
const FormItems = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: start;
  height: 100vh;
  font-family: cursive;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 12px auto;
`;

export default CreateEventForm;
