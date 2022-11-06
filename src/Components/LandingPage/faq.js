import  React from "react";
function Faq(){
    return(
        <div>  
            <section id="FAQ" className="container-fluid px-0 py-5">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <h2 className="fw-bolder">Frequently Asked Question</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div className="col-md-7 text-dark">
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item bg-light rounded border mb-2">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Apa saja syarat yang dibutuhkan?
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel maximus purus, a placerat mi. Vivamus vitae sapien sit amet lacus pretium laoreet eu eget ligula. Nunc ut quam ac orci aliquet lacinia non ut sapien.</div>
                            </div>
                        </div>
                        <div className="accordion-item bg-light rounded border mb-2">
                            <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Berapa hari minimal sewa mobil lepas kunci?
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel maximus purus, a placerat mi. Vivamus vitae sapien sit amet lacus pretium laoreet eu eget ligula. Nunc ut quam ac orci aliquet lacinia non ut sapien.</div>
                            </div>
                        </div>
                        <div className="accordion-item bg-light rounded border mb-2">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Berapa hari sebelumnya sebaiknya booking sewa mobil?
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel maximus purus, a placerat mi. Vivamus vitae sapien sit amet lacus pretium laoreet eu eget ligula. Nunc ut quam ac orci aliquet lacinia non ut sapien. Vestibulum ligula dolor, dapibus vitae feugiat sodales, vehicula quis nibh. Duis viverra quis lacus quis convallis.</div>
                            </div>
                        </div>
                        <div className="accordion-item bg-light rounded border mb-2">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                    Apakah ada biaya jemput?
                                </button>
                            </h2>
                            <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel maximus purus, a placerat mi. Vivamus vitae sapien sit amet lacus pretium laoreet eu eget ligula. Nunc ut quam ac orci aliquet lacinia non ut sapien. Vestibulum ligula dolor, dapibus vitae feugiat sodales, vehicula quis nibh. Duis viverra quis lacus quis convallis.</div>
                            </div>
                        </div>
                        <div className="accordion-item bg-light rounded border mb-2">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                    Bagaimana jika terjadi kecelakaan?
                                </button>
                            </h2>
                            <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Donec pretium tincidunt sem eu fermentum. Mauris porttitor turpis vel convallis pellentesque. In volutpat tellus ac augue sollicitudin, et suscipit metus posuere. Sed congue cursus felis nec vulputate. Nunc ipsum massa, vulputate et luctus in, tempus vel tortor. Fusce sagittis accumsan nisi ut vehicula. Sed aliquet enim arcu, eget finibus massa rhoncus at. Nam dapibus enim in metus euismod semper. Proin semper, nunc eget vestibulum porta, risus ipsum mollis mi, sed lacinia risus tellus nec libero. Nunc blandit ipsum vitae metus pulvinar ultricies.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
 
        </div>
    )
}
export default Faq;