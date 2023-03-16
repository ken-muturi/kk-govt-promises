import { QueryClient, QueryClientProvider } from "react-query";
import TodoApp from "./components/Todos";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App-container">
      <QueryClientProvider client={queryClient}>
        <TodoApp />
      </QueryClientProvider>
    </div>
  );
}

export default App;
