import "./App.css";
import Layout from "./components/Layout";
import Destination from "./components/Destination";
import { useState, useEffect } from "react";
import Success from "./components/Success";

function App() {
  const [destination, setDestination] = useState();
  const [selectedDestination, setSelectedDestination] = useState([]);
  const [searchResults, setSearchResults] = useState();
  const [showSubmit, setShowSubmit] = useState(false);
  const [search, setSearch] = useState();

  useEffect(() => {
    fetch("/destination.json")
      .then((res) => res.json())
      .then((result) => {
        setDestination(result.items);
      })
      .catch(console.log);
  }, []);

  // search filter function
  useEffect(() => {
    console.log(search);
    if (search) {
      setSearchResults(filterSearch(destination, search));
      console.log(filterSearch(destination, search));
    } else {
      setSearchResults(null);
    }
  }, [search, destination, selectedDestination]);

  function filterSearch(destination, search) {
    if (search !== "") {
      var data = destination.filter(function (item) {
        return (
          item["country"].toLowerCase().indexOf(search.toLowerCase()) != -1
        );
      });
    }
    return data;
  }

  return (
    <div className="App" id="root">
      <Layout>
        {showSubmit ? (
          <Success
            showSubmit={showSubmit}
            setShowSubmit={setShowSubmit}
            destination={destination}
            setDestination={setDestination}
            selectedDestination={selectedDestination}
            setSelectedDestination={setSelectedDestination}
          />
        ) : (
          <Destination
            searchResults={searchResults}
            destination={destination}
            setDestination={setDestination}
            setSearch={setSearch}
            selectedDestination={selectedDestination}
            setSelectedDestination={setSelectedDestination}
            setShowSubmit={setShowSubmit}
          />
        )}
      </Layout>
    </div>
  );
}

export default App;
