import { RouterProvider } from "react-router-dom"

import { router } from './router/router'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"

const queryClient = new QueryClient();

const App = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
       <RouterProvider router={router}/>
      </QueryClientProvider>
    </div>
  )
}

export default App;
