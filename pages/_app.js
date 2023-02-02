import GlobalStyle from "@/styles";
import Head from "next/head";
import useLocalStorageState from "use-local-storage-state";
import { v4 } from "uuid";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const [entryData, setEntryData] = useLocalStorageState("entryData", {
    defaultValue: [],
  });
  const [voteResultData, setVoteResultData] = useLocalStorageState(
    "voteResultData",
    {
      defaultValue: [],
    }
  );
  // const [voteResultData, setVoteResultData] = useLocalStorageState(
  //   "voteResultData",
  //   {
  //     defaultValue: [],
  //   }
  // );

  function handleEntryData(data) {
    const newData = { ...data, id: v4() };
    setEntryData([newData, ...entryData]);
    return router.push(`/preview/${newData.id}/preview`);
  }

  // function handleVoteCheckmark(emojiCheckmark) {
  //   console.log("ERGEBNIS aus votepage:" + emojiCheckmark);
  //   //   const voteResult = {
  //   //     ...emojiCheckmark,
  //   //     voteEmojiCheckmark: emojiCheckmark,
  //   //   };
  //   //   setVoteResultData([voteResult, ...voteResultData]);
  //   //   return router.push(`/eventsList/${voteResult.id}eventsList`);
  // }

  function handleVoteResult(voteResult, currentEvent) {
    const resultVoteEvent = { ...currentEvent, voteResult };
    setVoteResultData([resultVoteEvent, ...voteResultData]);
    console.log("APP handelVoteResult");
    console.log(resultVoteEvent);
    // onHandleEventList(resultVoteEvent);
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
        onHandleVoteResult={handleVoteResult}
        // onHandleEventList={onHandleEventList}
        voteResultData={voteResultData}
      />
    </>
  );
}
