import  React from "react";

function Testimoni(){
    return(
        <div>
        <section id="testimoni" className="py-5">
          <div className="container pt-5">
              <h2 className="h2 text-center">Testimonial</h2>
              <p className="text-center py-3">Berbagai review positif dari para pelanggan kami</p>
              <div id="carouselExampleControls" className="carousel slide mx-auto" style= {{maxwidth: '60%'}} data-bs-ride="carousel">
                  <div className="carousel-inner">
                      <div className="carousel-item active bg-aliceblue">
                          <div className="row mx-4 my-5">
                              <div className="col-xl-2 m-auto">
                              <img src="asset/photo2-testimoni.png" className="d-block testimonial-img m-auto" alt="Person"/>
                              </div>
                              <div className="col-xl-10">
                              <img src="asset/Rate.png" className="testimonial-rating bintang" alt="Rating"/>
                                  <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                  <p className="testimonial-name">John Dee 32, Bromo</p>
                              </div>
                          </div>
                      </div>
                      <div className="carousel-item bg-aliceblue">
                          <div className="row mx-4 my-5">
                              <div className="col-xl-2 m-auto">
                              <img src="asset/photo2-testimoni.png" className="d-block testimonial-img m-auto" alt="Person"/>
                              </div>
                              <div className="col-xl-10">
                              <img src="asset/Rate.png" className="testimonial-rating" alt="Rating"/>
                                  <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod””</p>
                                  <p className="testimonial-name">John Dee 32, Bromo</p>
                              </div>
                          </div>
                      </div>
                      <div className="carousel-item bg-aliceblue">
                          <div className="row mx-4 my-5">
                              <div className="col-xl-2 m-auto">
                              <img src="asset/photo1-testimoni.png" className="d-block testimonial-img m-auto" alt="Person"/>
                              </div>
                              <div className="col-xl-10">
                              <img src="asset/Rate.png" className="testimonial-rating" alt="Rating"/>
                                  <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod””</p>
                                  <p className="testimonial-name">John Dee 32, Bromo</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  </button>
                  <div className="text-center">
                      <a type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" className="testimonial-media">&#8249;</a>
                      <a type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" className="testimonial-media">&#8250;</a>
                  </div>
              </div>
          </div>
      </section>
      <br/>

      <section className="container-fluid px-0 py-5">
        <div className="container">
            <div className="card bg-darkblue04 py-5">
                <div className="card-body text-center text-light">
                    <h1 className="fw-bolder">Sewa Mobil di Jogja Sekarang</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Duis vel maximus purus, a placerat mi. Vivamus vitae sapien sit amet lacus pretium laoreet eu eget ligula.</p>
                    <a href="#" title="Mulai Sewa Mobil" className="btn btn-success mt-4">Mulai Sewa Mobil</a>
                </div>
            </div>
        </div>
    </section>
    </div>
    );
};
export default Testimoni;