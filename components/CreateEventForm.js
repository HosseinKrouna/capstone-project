import styled from "styled-components";
import { StyledWrapper } from "./styles/Wrapper";
import { useRouter } from "next/router";
import useLocalStorageState from "use-local-storage-state";
import uuidv4 from "react-uuid";

function CreateEventForm() {
  const router = useRouter();
  const [form, setForm] = useLocalStorageState("event", {
    defaultValue: [
      {
        id: uuidv4(),
        title: "",
        startTime: "",
        endTime: "",
        location: "",
        mapURL: "",
        description: "",
        creator: "",
      },
    ],
  });

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    setForm(data);
    console.log(form);
    router.push("/previewPage/index");
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
                <input
                  id="title"
                  name="title"
                  type="text"

                  // defaultData={defaultData?.title}
                />
                <label htmlFor="start-time">Start Time:</label>
                <input
                  id="start-time"
                  name="startTime"
                  type="datetime-local"
                  // defaultData={defaultData?.startTime}
                />
                <label htmlFor="end-time">End Time:</label>
                <input
                  id="end-time"
                  name="endTime"
                  type="datetime-local"
                  // defaultData={defaultData?.endTime}
                />
                <label htmlFor="location">Location:</label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  // defaultData={defaultData?.location}
                />
                <label htmlFor="map-url">Map URL:</label>

                <input
                  id="map-url"
                  name="mapURL"
                  type="text"
                  // defaultData={defaultData?.mapURL}
                />

                <label htmlFor="description">Let a Comment:</label>
                <textarea
                  cols="30"
                  id="description"
                  name="description"
                  type="text"
                  // defaultData={defaultData?.description}
                />
                <label htmlFor="title">Creator:</label>
                <input
                  id="creator"
                  name="creator"
                  type="text"
                  // defaultData={defaultData?.creator}
                />
                <button type="submit">Add Event</button>
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

export default CreateEventForm;
