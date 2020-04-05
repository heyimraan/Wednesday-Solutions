import React, { Component } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import axios from 'axios';



class App extends Component {

  // constructor(props){
  //   super(props);
  //   this.state={
  //     repos:null
  //   }
  // }
  state = {
    reposname: null,
    reposId: null,
    reposcountry: null,
    reposreleasedate: null,
    repostrackName : null
  }


  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    // console.log(user);
    if (user){
      const url = `https://itunes.apple.com/search?term=${user}`;
      axios.get(url).then((res) => {
        console.log(res);
      // const repos = res;
        const reposname = res.data.results[0].artistName;
        console.log(reposname);
        const reposId = res.data.results[0].artistId;
        console.log(reposId);
        const reposcountry = res.data.results[0].country;
        console.log(reposcountry);
        const reposreleasedate = res.data.results[0].releaseDate;
        console.log(reposreleasedate);
        const repostrackName = res.data.results[0].trackName;
        console.log(repostrackName);
      // const repos2 = res;
         //console.log(repos);
        this.setState({ reposname,reposId,reposcountry,reposreleasedate,repostrackName }); 
      })
    } else return{};  
  }

  render() {
    return (

      <div className="App" id="background">
        <header className="App-header">
          <h1>HTTP CALLS IN REACT JS WITH AXIOS</h1>
        </header>
        <UserForm getUser={this.getUser} ></UserForm>
        {this.state.reposname ? <p style={{fontSize:"40px",fontWeight:"bold"}}>Name of Artist Searched:{this.state.reposname}</p> : <p style={{fontSize:"40px",fontWeight:"bold"}}>Artist is not there.</p>}

        <div>
                <table  className="table table-striped " id="myTable" border="5px" className="container" style={{border:"4px solid black"}}>
                <thead className="thead-dark">
                <tr style={{fontWeight:"bold",fontSize:"20px",color:"white"}}>
                <td>ARTIST-ID</td>
                <td>ARTIST-NAME</td>
                <td>COUNTRY</td>
                <td>RELEASE-DATE</td>
                <td>TRACK-NAME</td>
                </tr>
                </thead>
                <tbody>
                <tr style={{color:"white",fontWeight:"bold"}}>
                <td>{this.state.reposId}</td>
                <td>{this.state.reposname}</td>
                <td>{this.state.reposcountry}</td>
                <td>{this.state.reposreleasedate}</td>
                <td>{this.state.repostrackName}</td>
                </tr>
                </tbody>
                </table>
        </div>
      </div> 
    );

  }

}



export default App;
