function Contact() {
    return (
    <>

        <section className="bg-light p-5">
            <div className="container mt-5 m mb-5" id="contact">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="font-weight-bold text-center text-uppercase display-4 text-primary">CONTACT US</h1>
                    </div>
                    <div className="col-md-6 p-0">
                        <img
                            src="https://5.imimg.com/data5/SELLER/Default/2021/1/NJ/GN/AS/75393646/3d-waterfall-nature-wallpaper-500x500.jpg"
                            className="w-100" />
                    </div>
                    <div className="col-md-6 p-0 bg-primary">
                        <div className="row p-4">
                            <div className="col-12">
                                <h1 className="font-weight-bold text-center text-white text-uppercase mt-2 mb-2">Enquiry Now</h1>
                            </div>
                            <div className=" mt-4 col-6">
                                <input type="text" name="" className="form-control" placeholder="FIRST NAME" />
                            </div>
                            <div className=" mt-4 col-6">
                                <input type="text" name="" className="form-control" placeholder="LAST NAME" />
                            </div>
                            <div className=" mt-4 col-12">
                                <input type="email" name="" className="form-control" placeholder="Email" />
                            </div>
                            <div className=" mt-4 col-12">
                                <input type="number" name="" className="form-control" placeholder="Mobile" />
                            </div>
                            <div className=" mt-4 col-12">
                                <textarea className="form-control" placeholder="Message" rows="5"></textarea>
                            </div>
                            <div className=" mt-4 col-12 text-center">
                                <button className="btn btn-outline-warning">Contact US</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}


export default Contact;