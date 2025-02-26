import refer from '../assests/image.png';
import Form from './Form.js';
import { useState } from 'react';


export default function Hero() {
    const [showModel, setShowModel]=useState(false);
  return (
    <>
    {showModel && <Form onClose={()=>setShowModel(false)} /> }
    <div class="container my-5">
    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 class="display-4 fw-bold lh-1 text-body-emphasis">Connect , Learn , Earn</h1>
        <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div class="d-grid d-md-flex justify-content-md-start mb-4 mb-lg-3">
        <button type="button" onClick={()=> setShowModel(true)} class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Refer & Earn</button>

        </div>
      </div>
      <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img class="rounded-lg-3 cover-full " src={refer} alt="" width="720"/>
      </div>
    </div>
  </div>
  </>
)
}
