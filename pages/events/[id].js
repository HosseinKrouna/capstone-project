import { useRouter } from "next/router";
import events from "@/db.json";
import Link from "next/link";

function EventDetail() {
  const router = useRouter();
  const { id } = router.query;
  const eventIndex = events.findIndex((event) => event.id === id);
  const event = events[eventIndex];

  if (!event) return null;

  const { title, startTime, endTime, location, creator, isParticipate } = event;

  return (
    <>
      <h2>{title}</h2>
      <span>{startTime}</span>
      <span>{endTime}</span>
      <p>Location: {location}</p>
      <p>Creator: {creator}</p>
      <p>Are you there? {isParticipate ? "Yes" : "No"}</p>
      <Link href="/events">Go Back</Link>
    </>
  );
}

export default EventDetail;
