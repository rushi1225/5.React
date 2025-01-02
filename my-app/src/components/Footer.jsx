import "./App.css";

function Footer() {
  return (
    <>
      <div className="container-fluid bg-primary text-white mt-5 py-1 px-sm-1 px-md-5" id="footer">
        <div className="container text-center py-5">
          <div className="d-flex justify-content-center mb-4">
            <a className="btn btn-light btn-social mr-2" href="#"><i className="fab fa-twitter"></i></a>
            <a className="btn btn-light btn-social mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
            <a className="btn btn-light btn-social mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
            <a className="btn btn-light btn-social" href="#"><i className="fab fa-instagram"></i></a>
          </div>
          <div className="d-flex justify-content-center mb-3">
            <a className="text-white" href="#">Privacy</a>
            <span className="px-3">|</span>
            <a className="text-white" href="#">Terms</a>
            <span className="px-3">|</span>
            <a className="text-white" href="#">FAQs</a>
            <span className="px-3">|</span>
            <a className="text-white" href="#">Help</a>
          </div>
          <p className="m-0">&copy; <a className="text-white font-weight-bold" href="#"></a> All Rights Reserved. Designed by <a
            className="text-white font-weight-bold" href="#">Rushikesh</a>
            <div className="text-center">
              <a href="#top" className="btn btn-outline-warning mt-4 px-5 back-to-top ml-3"><i
                className="fa fa-angle-double-up"></i></a>
            </div>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
