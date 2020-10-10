import React from 'react';
import {Link} from "react-router-dom"

export default function header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <Link to='/' style={{color:"white"}} class="navbar-brand" href="#">Local4Vocal</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link style={{color:"white"}} class="nav-link" to='/'>Home<span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link style={{color:"white"}} class="nav-link" to='/register'>Register new Business</Link>
      </li>
      <li class="nav-item">
      <Link style={{color:"white"}} class="nav-link" to='/registeredbusiness'>Registered Business</Link>
      </li>
     
    </ul>
  </div>
</nav>
  )
}
