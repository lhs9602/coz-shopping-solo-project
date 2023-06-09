import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header.js';
import { fetchData } from 'Api/callApi';
import Main from './Pages/main/Main.js';
import ProductPage from 'Pages/ProductPage/ProductPage.js';
import BookmarkPage from "Pages/BookmarkPage/BookmarkPage.js";
import Loading from './Components/Loading/Loading.js';
import ErrorPage from "Pages/ErrorPage/ErrorPage.js";


function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loading);
  const data = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header/>
      {isLoading ? (
        <Loading />
      ) : data.length > 0 ? (
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products/list" element={<ProductPage />} />
          <Route path="/bookmark" element={<BookmarkPage />} />
          <Route component={ErrorPage} />
        </Routes>
      ) : null}
    </BrowserRouter>
  );
}

export default App;
