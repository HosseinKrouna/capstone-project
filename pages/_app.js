import GlobalStyle from "@/styles";
import Head from "next/head";
import useLocalStorageState from "use-local-storage-state";
import { v4 } from "uuid";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const [entryData, setEntryData] = useLocalStorageState("entryData", {
    defaultValue: [
      {
        id: "9b205e30-fc29-4f66-a18e-5081bf50e825",
        title: "Vattertag",
        startTime: "montag",
        endTime: "10:00",
        location: "Ffm",
        mapURL: "jhij",
        description: "tg",
        creator: "Ich",
      },
      {
        id: "06e892b0-0ba1-4999-9b77-b998e4a4812b",
        title: "Muttertag",
        startTime: "montag",
        endTime: "10:00",
        location: "Ffm",
        description: "tg",
        creator: "Ich",
      },
    ],
  });

  function handleEntryData(data) {
    const newData = { ...data, id: v4() };
    setEntryData([newData, ...entryData]);
    return;
    router.push(`/preview/${newData.id}/preview`);
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
      />
    </>
  );
}
