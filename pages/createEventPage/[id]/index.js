import styled from "styled-components";
import { StyledWrapper } from "../../../components/styles/Wrapper";
import { useRouter } from "next/router";
import { StyledBackLink } from "@/components/styles/BackLink";

function CreateEventForm({ onHandleEntryData }) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onHandleEntryData(data);
    router.push("/edit/index/");
  }
  return (
    <>
      <StyledWrapper>
        <header>
          <h1>New Event</h1>
        </header>
        <main>
          <FormContainer
            aria-labelledby="createEventForm"
            onSubmit={handleSubmit}
          >
            <fieldset>
              <legend>Create a new Event 👇</legend>
              <FormItems>
                <label htmlFor="title">Title:</label>
                <input id="title" name="title" type="text" />
                <label htmlFor="start-time">Start Time:</label>
                <input id="start-time" name="startTime" type="datetime-local" />
                <label htmlFor="end-time">End Time:</label>
                <input id="end-time" name="endTime" type="datetime-local" />
                <label htmlFor="location">Location:</label>
                <input id="location" name="location" type="text" />
                <label htmlFor="map-url">Map URL:</label>

                <input id="map-url" name="mapURL" type="text" />

                <label htmlFor="description">Let a Comment:</label>
                <textarea
                  cols="30"
                  id="description"
                  name="description"
                  type="text"
                />
                <label htmlFor="title">Creator:</label>
                <input id="creator" name="creator" type="text" />
                <button type="submit">Preview</button>
              </FormItems>
            </fieldset>
          </FormContainer>
          <StyledBackLink href="/">↩︎</StyledBackLink>
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

export default CreateEventForm;
