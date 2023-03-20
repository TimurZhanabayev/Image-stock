import Images from "./component/Images";
import Header from "./component/Header";
import SearchField from "./component/SearchField";
import useAxios from "./hooks/useAxios";
import { createContext, useState } from "react";

export const ImageContext = createContext();

function App() {
  const [searchImage, setSearchImage] = useState('');
  const {response, isLoading, error, fetchData} = useAxios(`search/photos?page=1&query=kazakhstan&client_id=${process.env.REACT_APP_ACCESS_KEY}`);

  const value = {
    response, 
    isLoading, 
    error, 
    fetchData,
    searchImage,
    setSearchImage
  }

  return (
    <ImageContext.Provider value={value}>
      <Header>
        <SearchField/>
      </Header>
      <Images/>
    </ImageContext.Provider>
  )
}

export default App;
