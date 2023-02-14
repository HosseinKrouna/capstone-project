export default function VoteDetails(currentEvent) {
  return (
    <ul>
      <li>Start: {currentEvent.startTime}</li>
      <li>End: {currentEvent.endTime}</li>
      <li>Location: {currentEvent.location}</li>
      <li>Let a Comment: {currentEvent.description}</li>
      <li>Creator: {currentEvent.creator}</li>
    </ul>
  );
}
