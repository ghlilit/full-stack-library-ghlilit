import React from 'react';

class SearchButton extends React.Component {

    render() {

      return (
        <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
         </form>
      );
      
    }
  }
  
  export default SearchButton;