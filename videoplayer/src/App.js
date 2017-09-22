import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import SearchBar from './Components/searchbar';
import YTSearch from 'youtube-api-search';
import VideoList from './Components/videolist';
import VideoDetail from './Components/videodetails';
import _ from 'lodash';
const API_KEY = 'AIzaSyDcb86as9zwWakKWI6W4BEvvF6nu_MiYdI';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            videos: [],
            selectedVideo: null
            
        };
        this.videoSearch('')  
    }
    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }
    render() {
      const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/> 
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos}/>   
            </div>
            ); 
    }
}


export default App;


// class App extends Component {
//   render() {
//     return (
//       <div className="App">

//       </div>
//     );
//   }
// }


