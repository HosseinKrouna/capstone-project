import styled from "styled-components";
import { StyledWrapper } from "../components/styles/Wrapper";
import { StyledBackLink } from "@/components/styles/BackLink";
import { useRouter } from "next/router";

function CreateEventForm({ onHandleEntryData }) {
  const router = useRouter();
  // const { id } = router.query;

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onHandleEntryData(data);
    router.push(`/`);
  }
  return (
    <>
      <header>
        <h1 aria-labelledby="createEventForm">New Event</h1>
      </header>
      <main>
        <StyledWrapper>
          <FormContainer id="createEventForm" onSubmit={handleSubmit}>
            <fieldset>
              <legend>Create a new Event 👇</legend>
              <FormItems>
                <label htmlFor="title">Title:</label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  maxLength="10"
                  required
                />
                <label htmlFor="start-time">Start Time:</label>
                <input id="start-time" name="startTime" type="datetime-local" />
                <label htmlFor="end-time">End Time:</label>
                <input id="end-time" name="endTime" type="datetime-local" />
                <label htmlFor="location">Location:</label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  maxLength="10"
                  required
                />

                <label htmlFor="description">Let a Comment:</label>
                <textarea
                  cols="30"
                  id="description"
                  name="description"
                  type="text"
                  maxLength="10"
                />
                <label htmlFor="title">Creator:</label>
                <input
                  id="creator"
                  name="creator"
                  type="text"
                  maxLength="10"
                  required
                />
                <button type="submit">Submit</button>
              </FormItems>
            </fieldset>
          </FormContainer>
          <StyledBackLink href="/">Back↩︎</StyledBackLink>
        </StyledWrapper>
      </main>
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
  padding: 0;
`;

export default CreateEventForm;