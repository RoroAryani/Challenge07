import React from "react";

function Header(){
    return (
        <div>
        <nav className="container-fluid navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#F1F3FF'}}>
        <div className="container px-2 px-sm-1">
            <a className="navbar-brand text-darkblue05 fw-bolder fs-2" href="#">BCR</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header d-flex d-lg-none">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">BCR</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item me-3 px-1">
                        <a className="nav-link active" aria-current="page" href="#OurService">Our Service</a>
                    </li>
                    <li className="nav-item me-3 px-1">
                        <a className="nav-link active" aria-current="page" href="#WhyUs">Why Us</a>
                    </li>
                    <li className="nav-item me-3 px-1">
                        <a className="nav-link active" aria-current="page"  href="#Testimonial">Testimonial</a>
                    </li>
                    <li className="nav-item me-3 px-1">
                        <a className="nav-link active" aria-current="page" href="#FAQ">FAQ</a>
                    </li>
                    <li className="nav-item me-3 px-1">
                        <a className="nav-link btn btn-success text-light" href="/Login" style={{backgroundColor: '#5CB85F'}} >Logout</a>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    </nav>
    <section className="container-fluid" style={{backgroundColor:'#F1F3FF'}}>
        <header className="row justify-content-center justify-content-xl-end">
            <div className="col-sm-9 col-md-11 col-lg-6 col-xl-5 px-2 px-lg-3 px-xl-0 my-auto">
                <h1 className="fw-bolder">Sewa & Rental Mobil Terbaik di kawasan (Jogja)</h1>
                <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 px-0 my-auto">
                <img src="asset/assets-header.png" alt="Assets Banner" className="img-fluid"/>
            </div>
        </header>
    </section>
        </div>
    );
}
export default Header;