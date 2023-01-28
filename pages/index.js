import CreateEventForm from "@/components/CreateEventForm";
import EventsPage from "./events";
export default function HomePage() {
  return (
    <>
      <header>
        <h1>Friends Wall</h1>
      </header>
      <main>
        <EventsPage />
      </main>
    </>
  );
}
