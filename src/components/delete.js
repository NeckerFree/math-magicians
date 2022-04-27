import React, { Component } from 'react';

class Listing extends Component { 
     render() {    
         const {      
             listing: {        title,        type,       
                       location: {          city,          state,          country        }     
                     }  
          } =                 this.props;

                  return (      <div>        <p>Title: {title}</p>        <p>Type: {type}</p>        <p>          Location: {city}, {state}, {country}        </p>      </div>    )  }}