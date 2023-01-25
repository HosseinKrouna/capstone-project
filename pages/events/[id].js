import { useRouter } from "next/router";
import events from "@/db.json";
import Link from "next/link";

function EventDetail() {
  const router = useRouter();
  const { id } = router.query;

  const currentEvent = events.find((event) => event.id === id);

  if (!currentEvent) {
    return <h1>hmm... no event yet 🤔?</h1>;
  }

  const { title, startTime, endTime, location, creator, isParticipant } =
    currentEvent;

  return (
    <>
      <h2>{title}</h2>
      <span>{startTime}</span>
      <span>{endTime}</span>
      <p>Location: {location}</p>
      <p>Creator: {creator}</p>
      <p>Are you there? {isParticipant ? "Yes" : "No"}</p>
      <Link href="/events">Go Back</Link>
    </>
  );
}

export default EventDetail;
