function About() {
    return (
        <>

            <section>
                <div className="container mt-5 m mb-5 " id="about">
                    <div className="row">
                        <div className="col-md-6">
                            <img
                                src="https://images.unsplash.com/photo-1610878180933-123728745d22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D"
                                className="w-100 border border-danger img-thumbnail shadow" />
                        </div>
                        <div className="col-md-6 text-center">
                            <h1 className="text-primary font-weight-bold display-2 text-center">About US</h1>
                            <p className="font-weight-bold text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <button className="btn btn-outline-primary">More....</button>
                        </div>
                    </div>
                </div>
            </section>





            <section className="bg-secondary">
                <div className="container-fluid mt-5 m mb-5">
                    <div className="row">
                        <div className="col-md-3 text-center bg-primary p-5">
                            <label className="font-weight-bold text-uppercase h2">Award</label>
                            <h2 className="font-weight-bold text-white display-4">100</h2>
                        </div>
                        <div className="col-md-3 text-center bg-info p-5">
                            <label className="font-weight-bold text-uppercase h2">Student</label>
                            <h2 className="font-weight-bold text-white display-4">1000</h2>
                        </div>
                        <div className="col-md-3 text-center bg-primary p-5">
                            <label className="font-weight-bold text-uppercase h2">Book</label>
                            <h2 className="font-weight-bold text-white display-4">20</h2>
                        </div>
                        <div className="col-md-3 text-center bg-info p-5">
                            <label className="font-weight-bold text-uppercase h2">Branch</label>
                            <h2 className="font-weight-bold text-white display-4">5</h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default About;
