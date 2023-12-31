import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import NewsDetailContainer from "./components/NewsDetailContainer";
import NewsListContainer from "./components/NewsListContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <NewsListContainer />
            </>
          }
        />
        <Route
          path="/category/:id"
          element={
            <>
              <NavBar />
              <NewsListContainer />
            </>
          }
        />
        <Route
          path="/news/:id"
          element={
            <>
              <NavBar />
              <NewsDetailContainer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
  /* return (
    <>
      <NavBar />
      <NewsListContainer />
      <NewsDetailContainer newsId={37080634} />
    </>
  ); */
}

export default App;
