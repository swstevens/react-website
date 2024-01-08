import React, { Component } from "react";
import { trefoil } from "ldrs";
import "../loader.css"

class Loader extends Component {
  render() {
    trefoil.register()

    return (
        <div class='loader'> 
          <l-trefoil
            size="40"
            stroke="4"
            stroke-length="0.15"
            bg-opacity="0.1"
            speed="1.4" 
            color="white" >
          </l-trefoil>
        </div>
    )
  }
}

export default Loader;
