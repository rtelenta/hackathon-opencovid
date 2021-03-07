import { useRef } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import ChakraUiProvider from "../state/chakra/ChakraUiProvider";
import "styles/fonts.css";

function App({ Component, pageProps }) {
  const queryClientRef = useRef(null);

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
    });
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <ChakraUiProvider>
        <Component {...pageProps} />
      </ChakraUiProvider>
    </QueryClientProvider>
  );
}

export default App;
