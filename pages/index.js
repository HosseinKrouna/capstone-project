import EventsList from "./eventsList/[id]";
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
