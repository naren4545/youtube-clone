import AppContex from "./contex/contexApi";



import Header from './components/Header'
import Feed from './components/Feed'
import SearchResult from './components/SearchResult'
import VideoDetail from './components/VideoDetail'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <AppContex>
    <BrowserRouter>

    <div className="flex flex-col h-full">
<Header/>
<Routes>

  <Route path="/" exact element={<Feed/>}/>
  <Route path="/searchResult/:searchQery" element={<SearchResult/>}/>
  <Route path="/video/:id" element={<VideoDetail/>}/>
</Routes>

    </div>
    </BrowserRouter>
    </AppContex>
  );
}

export default App;
