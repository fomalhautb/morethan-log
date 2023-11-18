import { AppPropsWithLayout } from "../types"
import { Hydrate, QueryClientProvider } from "@tanstack/react-query"
import { RootLayout } from "src/layouts"
import { queryClient } from "src/libs/react-query"
import { Analytics } from "@vercel/analytics/react"

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <RootLayout>{getLayout(<Component {...pageProps} />)}</RootLayout>
        </Hydrate>
      </QueryClientProvider>
      <Analytics />
    </>
  )
}

export default App
