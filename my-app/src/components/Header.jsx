import "./App.css";

function Header() {
  return (
    <>
      <section className="" id="top">
      <div className="container-fluid Nav">
        <div className="row ">
          <div className="col-12 p-0">
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
              <a className="navbar-brand" href="#">Navbar</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a href="#home" className="nav-item nav-link text-white">Home</a>
                  </li>
                  <li className="nav-item">
                    <a href="#home" className="nav-item nav-link text-white">sliders</a>
                  </li>
                  <li className="nav-item">
                    <a href="#about" className="nav-item nav-link text-white">About</a>
                  </li>
                  <li className="nav-item">
                    <a href="#gallary" className="nav-item nav-link text-white">Gallery</a>
                  </li>
                  <li className="nav-item">
                    <a href="#news" className="nav-item nav-link text-white">News</a>
                  </li>
                  <li className="nav-item">
                    <a href="#contact" className="nav-item nav-link text-white">Contact</a>
                  </li>
                  <li className="nav-item">
                    <li className="nav-item">
                      <a href="#footer" className="nav-item nav-link text-white">Footer</a>
                    </li>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}

export default Header;
