import GlobalStyle from "@/styles";
import Head from "next/head";
import useLocalStorageState from "use-local-storage-state";
import { v4 } from "uuid";
import { useRouter } from "next/router";
import { useImmer } from "use-immer";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const [entryData, setEntryData] = useLocalStorageState("entryData", {
    defaultValue: [],
  });
  const [voteEvent, updateVoteEvent] = useImmer({});

  function handleEntryData(data) {
    const newData = { ...data, id: v4() };
    setEntryData([newData, ...entryData]);
    return router.push(`/preview/${newData.id}/preview`);
  }

  function handleUpdateVoteEvent(resultVoteEvent) {
    console.log("resultVoteEvent with handleUpdateVoteEvent:");
    //NOTE -  - here is my update event

    console.log(resultVoteEvent);
    updateVoteEvent();
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
