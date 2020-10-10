import React from 'react';
import {Link} from "react-router-dom"

export default function Home() {
    return (
        <div>
         
<div class="card card-image" style={{backgroundImage:'url(https://images.unsplash.com/photo-1601758003122-53c40e686a19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)',backgroundSize:'cover',backgroundPosition:"center"}}>
  <div class="text-white text-center rgba-stylish-strong py-5 px-4">
    <div class="py-5">

     
      <h5 class="h5 orange-text"><i class="fas fa-camera-retro"></i> Local For Vocal</h5>
      <h2 class="card-title h2 my-4 py-2">Small business for U R u Excited</h2>
      <p class="mb-4 pb-2 px-md-5 mx-md-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur obcaecati vero aliquid libero doloribus ad, unde tempora maiores, ullam, modi qui quidem minima debitis perferendis vitae cumque et quo impedit.</p>
      <Link to="/register" class="btn peach-gradient"><i class="fas fa-clone left"></i> <u>Register</u> </Link>

    </div>
  </div>
</div>

        </div>
    )
}
