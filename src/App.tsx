import "./App.css";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./services/apollo";
import Header from "./components/header";
import List from "./components/list";

function App() {
    return (
        <ApolloProvider client={apolloClient}>
            <div className="!flex !flex-col">
                <Header />
                <List />
            </div>
        </ApolloProvider>
    );
}

export default App;
