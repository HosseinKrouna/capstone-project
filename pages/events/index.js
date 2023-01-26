import Link from "next/link";
import events from "@/db.json";

function EventsPage() {
  return (
    <>
      <h2>Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <Link href={`/events/${event.id}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EventsPage;
