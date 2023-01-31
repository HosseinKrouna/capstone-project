import GlobalStyle from "@/styles";
import Head from "next/head";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [entryData, setEntryData] = useLocalStorageState("entryData", {
    defaultValue: [
      {
        title: "",
        startTime: "",
        endTime: "",
        location: "",
        mapURL: "",
        description: "",
        creator: "",
      },
    ],
  });

  function handleEntryData(data) {
    return setEntryData(data);
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
