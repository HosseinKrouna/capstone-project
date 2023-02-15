import styled from "styled-components";
import { StyledBackLink } from "@/components/styles/BackLink";
import { useRouter } from "next/router";

function CreateEventForm({ onHandleEntryData }) {
  const router = useRouter();

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
        <FormContainer id="createEventForm" onSubmit={handleSubmit}>
          <StyledFieldSet>
            <legend>Create a new Event</legend>
            <FormItems>
              <label htmlFor="title">Title:</label>
              <StyledInput
                id="title"
                name="title"
                type="text"
                maxLength="10"
                required
              />
              <label htmlFor="start-time">Start Time:</label>
              <StyledInput
                id="start-time"
                name="startTime"
                type="datetime-local"
              />
              <label htmlFor="end-time">End Time:</label>
              <StyledInput id="end-time" name="endTime" type="datetime-local" />
              <label htmlFor="location">Location:</label>
              <StyledInput
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
              <StyledInput
                id="creator"
                name="creator"
                type="text"
                maxLength="10"
                required
              />
              <button type="submit">Submit</button>
            </FormItems>
          </StyledFieldSet>
        </FormContainer>
        <StyledBackLink href="/">Back↩︎</StyledBackLink>
      </main>
    </>
  );
}
const StyledInput = styled.input`
  &:focus ~ label,
  &:valid {
    transform: translateX(-13px) translateY(-35px);
    font-size: 1em;
  }
`;

const StyledFieldSet = styled.fieldset`
  border: none;
`;

const FormItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

const FormContainer = styled.form`
  height: 100vh;
`;
export default CreateEventForm;
