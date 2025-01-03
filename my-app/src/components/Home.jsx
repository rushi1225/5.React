function Home() {
    return (
        <>
            {/* <h1>Hiii</h1> */}

            <div className="container-fluid" id="home">
                <div className="row">
                    <div className="col-12 p-0">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://wowslider.com/sliders/demo-10/data/images/autumn_leaves.jpg" className="d-block w-100"
                                        alt="..." />
                                    <div className="carousel-caption d-none d-md-block text-dark">
                                        <h1>Welcome This Theme</h1>
                                        <p>Lorem ipsum dolorteh sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <button className="btn btn-warning">View</button>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://wowslider.com/sliders/demo-10/data/images/autumn_leaves.jpg" className="d-block w-100"
                                        alt="..." />
                                    <div className="carousel-caption d-none d-md-block text-dark">
                                        <h1>Welcome This Theme</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <button className="btn btn-warning">View</button>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://wowslider.com/sliders/demo-10/data/images/autumn_leaves.jpg" className="d-block w-100"
                                        alt="..." />
                                    <div className="carousel-caption d-none d-md-block text-dark">

                                        <h1>Welcome This Theme</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <button className="btn btn-warning">View</button>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators"
                                data-slide="prev">
                                <span>Back</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators"
                                data-slide="next">
                                <span>Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>







        </>
    )
}

export default Home;