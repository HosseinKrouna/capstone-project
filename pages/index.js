import EventsList from "./eventsList/eventsList";
export default function HomePage({ entryData }) {
  return (
    <>
      <header>
        <h1>Friends Wall</h1>
      </header>
      <main>
        <EventsList entryData={entryData} />
      </main>
    </>
  );
}
