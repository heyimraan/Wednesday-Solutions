import React from 'react';


    const UserForm = (props) =>{
        return(
            <form onSubmit={props.getUser}>
                <input style={{margin:"20px auto",display:"block",textAlign:"center"}} className="form-control form-control-lg container" type="text" name="username" placeholder="Artist" autoFocus></input>
                <button style={{fontWeight:"bold",color:"white"}} className="btn  btn-lg btn-outline-primary ">Search</button>    <button style={{fontWeight:"bold",color:"white"}} className="btn  btn-lg btn-outline-danger" type="reset">Reset</button>
            </form> 

        )
    }

     



export default UserForm;