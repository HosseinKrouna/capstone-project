import Link from "next/link";
import { useRouter } from "next/router";
import events from "@/db.json";

function Detailspage() {
  const router = useRouter();
  return (
    <>
      <h1>Events</h1>
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

export default Detailspage;
