import GlobalStyle from "@/styles";
import Head from "next/head";
import useLocalStorageState from "use-local-storage-state";
import { v4 } from "uuid";
import { useRouter } from "next/router";
import { useImmer } from "use-immer";
import { useImmerLocalStorageState } from "@/lib/hooks";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const [entryData, setEntryData] = useImmerLocalStorageState("entryData", {
    defaultValue: [],
  });
  // const [voteEvent, updateVoteEvent] = useImmer({});
  function handleEntryData(data) {
    const newData = { ...data, id: v4() };
    setEntryData([newData, ...entryData]);
    console.log(entryData);
    return router.push(`/preview/${newData.id}`);
  }

  // function handleUpdateVoteEvent(index, resultVoteEvent) {
  //   console.log("resultVoteEvent with handleUpdateVoteEvent:");
  //   -  - here is my update event

  //   console.log(resultVoteEvent);
  //   // const newVote = {...resultVoteEvent, resultVoteEvent}
  //   updateVoteEvent((prevVoteEvent) => {
  //     if (prevVoteEvent[index])
  //       prevVoteEvent[index].voteResult = resultVoteEvent.voteResult;
  //   });
  //   console.log(voteEvent);
  //   console.log(entryData);
  //   // updateVoteEvent();
  // }

  function handleUpdateVoteEvent(voteResultData) {
    console.log(voteResultData);
    setEntryData((draft) => {
      const votedEvent = draft.find(
        (voteEvent) => voteEvent.id === voteResultData.id
      );
      votedEvent.voteResult = voteResultData.voteResult;
    });
  }

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component
        {...pageProps}
        entryData={entryData}
        onHandleEntryData={handleEntryData}
        onHandleUpdateVoteEvent={handleUpdateVoteEvent}
      />
    </>
  );
}
