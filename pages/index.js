import EventsList from "./eventsList/eventsList";
export default function HomePage({ entryData, voteResultData }) {
  console.log(voteResultData);
  return (
    <>
      <header>
        <h1>Friends Wall</h1>
      </header>
      <main>
        <EventsList entryData={entryData} voteResultData={voteResultData} />
      </main>
    </>
  );
}
