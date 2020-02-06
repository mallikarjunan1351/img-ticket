import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render (){
    return (<div className="App">
    <div className="container">
   <div className="row">
       <div className="col-md-6 col-lg-6 col-xl-6">
           <img src="./images/logo.png" className="img-fluid mx-auto d-block" alt="Responsive image" />
       </div>
       <div className="col-md-6 col-lg-6 col-xl-6">
           <img src="./images/barcode.PNG" className="img-fluid mx-auto d-block" alt="Responsive image" />
       </div>
       <div className="col-md-12 col-lg-12 col-xl-12">
           <img src="./images/ticket-image.png" className="img-fluid mx-auto d-block" alt="Responsive image" />
       </div>
       <div className="col-md-9 col-lg-9 col-xl-9 img-banner">
           <div className="banner-text">
               <h5>Guest Name</h5>
               <p>Thomas</p>
           </div>
           <div className="banner-text">
               <h5>Date</h5>
               <p>05-02-2020</p>
           </div>
           <div className="banner-text">
               <h5>Price</h5>
               <p>AED 440.00</p>
           </div >
           <div className="banner-text">
               <h5>Confirmation Number</h5>
               <p>584798588</p>
           </div>
           <div className="banner-text">
               <h5>Visual ID Number</h5>
               <p>Park Admission + Ultimate Fast</p>
           </div>
       </div>
       <div className="col-md-5 col-lg-5 col-xl-5 mt-5">
           <div className="row ml-4 pl-5">
               <div className="col-md-4 col-lg-4 col-xl-4">
                   <img src="./images/gmap.png" className="img-fluid mx-auto d-block" alt="..." />
               </div>
               <div className="col-md-8 col-lg-8 col-xl-8 pr-5">
                   <h5>HOW TO GET HERE:</h5>
                   <a href="#" className="text-warning stretched-link">https://g.page/imgworlds?share</a>
               </div>
           </div>
       </div>
       <div className="col-md-7 col-lg-7 col-xl-7 mt-5 pl-5 pr-5">
           <h5>E311 from Abu Dhabi</h5>
           <p className="text-justify pr-5 mr-5">Head along the E311 to past the Arabian Ranches D63 interchange, take 2nd off-ramp right for City of Arabia and follow the signs.</p>
           <br/>
           <h5>E311 from Sharjah</h5>
           <p className="text-justify pr-5 mr-5">Head along the E311 to past the Arabian Ranches off-ramp follow E311 Sharjah back on to the E311, take 2nd off-ramp right for City of Arabia and follow the signs.</p>
       </div>
       <div className="col-md-12 col-lg-12 col-xl-12 pl-5 pr-5">
           <h2 className="blue pl-5 ml-5">SCAN THIS TICKET IN THE ENTRANCE AND BEAT THE QUEUE!</h2>
           <ul className="ml-5 pl-5">
               <li className="blue ml-5">Bring a printed copy of ticket with you. </li>
               <li className="blue ml-5">At the entrance, scan the barcode at the top of this ticket and walk right in!</li>
           </ul>
           <p className="text-justify blue pl-5 ml-5 mr-5">For any assistance during your adventure with us, please visit the Guest Relations Center at the entrance to the park, or at the Lost Valley - Dinosaur Adventure Zone.</p>
       </div>
       <div className="col-md-5 col-lg-5 col-xl-5">
           
       </div>
       <div className="col-md-7 col-lg-7 col-xl-7 pr-5">
           <h5>Terms & Condiotions:</h5>
           <p className="text-justify blue mr-5">Use of this ticket for entry into IMG Worlds of Adventure constitutes acceptance of the terms and conditions of park entry. These are available to view at www.imgworlds.com and are displayed clearly at park entrance. A copy of the full terms and conditions is available upon request at Guest Relations.</p>
       </div>
       <br/>
       <div className="col-md-6 col-lg-6 col-xl-6">
           <img src="./images/bottom master card.PNG" className="img-fluid mx-auto d-block" alt="Responsive image" />
       </div>
       <div className="col-md-6 col-lg-6 col-xl-6">
           <img src="./images/bottom logo.PNG" className="img-fluid mx-auto d-block pr-5" alt="Responsive image" />
       </div>
   </div>
</div>
   </div>)
  }
}

export default App;
