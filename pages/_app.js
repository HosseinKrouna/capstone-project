import GlobalStyle from "@/styles";
import Head from "next/head";
import { v4 } from "uuid";
import { useRouter } from "next/router";
import { useImmerLocalStorageState } from "@/lib/hooks";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const [entryData, setEntryData] = useImmerLocalStorageState("entryData", {
    defaultValue: [],
  });
  function handleEntryData(data) {
    const newData = { ...data, id: v4() };
    setEntryData([newData, ...entryData]);
    return router.push(`/preview/${newData.id}`);
  }

  function handleUpdateVoteEvent(voteResultData) {
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
