import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CoinPage from "./pages/CoinPage";
import Favourites from "./pages/Favourites";
import Main from "./pages/Main";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="page">
        <Header />
        <main className="page__content">
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/fav" element={<Favourites />}></Route>
            <Route path="/coins/:id" element={<CoinPage />}></Route>
            {/* <Route path="*">
              <PageNotFound />
            </Route> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
