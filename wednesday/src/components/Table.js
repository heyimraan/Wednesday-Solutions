import React from 'react';


const Table = ({repos})=>{
    return(
           
       <table>
       <thead>
       <tr>
       <th>Id</th>
       <th>Name</th>
       <th>Region</th>
       <th>Memory</th>
       <th>CPUs</th>
       </tr>
       </thead>
       <tbody>
       {  repos( (repos, index) => {
           return (
            <tr key={ index }>
              <td>{ repos.results[0].wrapperType }</td>
              <td>{ repos.artistId }</td>
              <td>{ repos.collectionId}</td>
              <td>{ repos.collectionId }</td>
              <td>{ repos.collectionId }</td>
              <td>{ repos.collectionId }</td>
            </tr>
          )
         })   }
       </tbody>
       </table>
   )
}






export default Table;