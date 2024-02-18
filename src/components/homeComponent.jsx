import React from 'react'

const Home = () => {
  return (
    <>
   
    {/* ***** Preloader Start ***** */}
    <div id="preloader">
      <div className="jumper">
        <div />
        <div />
        <div />
      </div>
    </div>
    {/* ***** Preloader End ***** */}
    {/* ***** Header Area Start ***** */}
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* ***** Logo Start ***** */}
              <a href="index.html" className="logo">
                <img src="assets/images/logo.png" />
              </a>
              {/* ***** Logo End ***** */}
              {/* ***** Menu Start ***** */}
              <ul className="nav">
                <li className="scroll-to-section">
                  <a href="#top" className="active">
                    Home
                  </a>
                </li>
                <li className="scroll-to-section">
                  <a href="#men">Men's</a>
                </li>
                <li className="scroll-to-section">
                  <a href="#women">Women's</a>
                </li>
                <li className="scroll-to-section">
                  <a href="#kids">Kid's</a>
                </li>
                <li className="submenu">
                  <a href="javascript:;">Pages</a>
                  <ul>
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li>
                      <a href="products.html">Products</a>
                    </li>
                    <li>
                      <a href="single-product.html">Single Product</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="javascript:;">Features</a>
                  <ul>
                    <li>
                      <a href="#">Features Page 1</a>
                    </li>
                    <li>
                      <a href="#">Features Page 2</a>
                    </li>
                    <li>
                      <a href="#">Features Page 3</a>
                    </li>
                    <li>
                      <a
                        rel="nofollow"
                        href="https://templatemo.com/page/4"
                        target="_blank"
                      >
                        Template Page 4
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="scroll-to-section">
                  <a href="#explore">Explore</a>
                </li>
              </ul>
              <a className="menu-trigger">
                <span>Menu</span>
              </a>
              {/* ***** Menu End ***** */}
            </nav>
          </div>
        </div>
      </div>
    </header>
    {/* ***** Header Area End ***** */}
    {/* ***** Main Banner Area Start ***** */}
    <div className="main-banner" id="top">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="left-content">
              <div className="thumb">
                <div className="inner-content">
                  <h4>We Are Hexashop</h4>
                  <span>Awesome, clean &amp; creative HTML5 Template</span>
                  <div className="main-border-button">
                    <a href="#">Purchase Now!</a>
                  </div>
                </div>
                <img src="https://res.cloudinary.com/iset-sfax/image/upload/v1658507588/samples/ecommerce/analog-classic.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="right-content">
              <div className="row">
                <div className="col-lg-6">
                  <div className="right-first-image">
                    <div className="thumb">
                      <div className="inner-content">
                        <h4>Women</h4>
                        <span>Best Clothes For Women</span>
                      </div>
                      <div className="hover-content">
                        <div className="inner">
                          <h4>Women</h4>
                          <p>
                            Lorem ipsum dolor sit amet, conservisii ctetur
                            adipiscing elit incid.
                          </p>
                          <div className="main-border-button">
                            <a href="#">Discover More</a>
                          </div>
                        </div>
                      </div>
                      <img src="https://res.cloudinary.com/iset-sfax/image/upload/v1702403203/images/victoria.jpg.jpg" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="right-first-image">
                    <div className="thumb">
                      <div className="inner-content">
                        <h4>Men</h4>
                        <span>Best Clothes For Men</span>
                      </div>
                      <div className="hover-content">
                        <div className="inner">
                          <h4>Men</h4>
                          <p>
                            Lorem ipsum dolor sit amet, conservisii ctetur
                            adipiscing elit incid.
                          </p>
                          <div className="main-border-button">
                            <a href="#">Discover More</a>
                          </div>
                        </div>
                      </div>
                      <img src="https://res.cloudinary.com/iset-sfax/image/upload/v1658507592/samples/people/smiling-man.jpg" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="right-first-image">
                    <div className="thumb">
                      <div className="inner-content">
                        <h4>Kids</h4>
                        <span>Best Clothes For Kids</span>
                      </div>
                      <div className="hover-content">
                        <div className="inner">
                          <h4>Kids</h4>
                          <p>
                            Lorem ipsum dolor sit amet, conservisii ctetur
                            adipiscing elit incid.
                          </p>
                          <div className="main-border-button">
                            <a href="#">Discover More</a>
                          </div>
                        </div>
                      </div>
                      <img src="https://res.cloudinary.com/iset-sfax/image/upload/v1658507594/samples/people/boy-snow-hoodie.jpg" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="right-first-image">
                    <div className="thumb">
                      <div className="inner-content">
                        <h4>Accessories</h4>
                        <span>Best Trend Accessories</span>
                      </div>
                      <div className="hover-content">
                        <div className="inner">
                          <h4>Accessories</h4>
                          <p>
                            Lorem ipsum dolor sit amet, conservisii ctetur
                            adipiscing elit incid.
                          </p>
                          <div className="main-border-button">
                            <a href="#">Discover More</a>
                          </div>
                        </div>
                      </div>
                      <img src="https://res.cloudinary.com/iset-sfax/image/upload/v1658507588/samples/ecommerce/analog-classic.jpg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* ***** Main Banner Area End ***** */}
    {/* ***** Men Area Starts ***** */}
    <section className="section" id="men">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              <h2>Men's Latest</h2>
              <span>
                Details to details is what makes Hexashop different from the other
                themes.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="men-item-carousel">
              <div className="owl-men-item owl-carousel">
                <div className="item">
                  <div className="thumb">
                    <div className="hover-content">
                      <ul>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-eye" />
                          </a>
                        </li>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-shopping-cart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <img src="assets/images/men-01.jpg" alt="" />
                  </div>
                  <div className="down-content">
                    <h4>Classic Spring</h4>
                    <span>$120.00</span>
                    <ul className="stars">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="item">
                  <div className="thumb">
                    <div className="hover-content">
                      <ul>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-eye" />
                          </a>
                        </li>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-shopping-cart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <img src="assets/images/men-02.jpg" alt="" />
                  </div>
                  <div className="down-content">
                    <h4>Air Force 1 X</h4>
                    <span>$90.00</span>
                    <ul className="stars">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="item">
                  <div className="thumb">
                    <div className="hover-content">
                      <ul>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-eye" />
                          </a>
                        </li>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-shopping-cart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <img src="assets/images/men-03.jpg" alt="" />
                  </div>
                  <div className="down-content">
                    <h4>Love Nana ‘20</h4>
                    <span>$150.00</span>
                    <ul className="stars">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="item">
                  <div className="thumb">
                    <div className="hover-content">
                      <ul>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-eye" />
                          </a>
                        </li>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-shopping-cart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <img src="assets/images/men-01.jpg" alt="" />
                  </div>
                  <div className="down-content">
                    <h4>Classic Spring</h4>
                    <span>$120.00</span>
                    <ul className="stars">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ***** Men Area Ends ***** */}
    {/* ***** Women Area Starts ***** */}
    <section className="section" id="women">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              <h2>Women's Latest</h2>
              <span>
                Details to details is what makes Hexashop different from the other
                themes.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="women-item-carousel">
              <div className="owl-women-item owl-carousel">
                <div className="item">
                  <div className="thumb">
                    <div className="hover-content">
                      <ul>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-eye" />
                          </a>
                        </li>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-shopping-cart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <img src="assets/images/women-01.jpg" alt="" />
                  </div>
                  <div className="down-content">
                    <h4>New Green Jacket</h4>
                    <span>$75.00</span>
                    <ul className="stars">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="item">
                  <div className="thumb">
                    <div className="hover-content">
                      <ul>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-eye" />
                          </a>
                        </li>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-shopping-cart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <img src="assets/images/women-02.jpg" alt="" />
                  </div>
                  <div className="down-content">
                    <h4>Classic Dress</h4>
                    <span>$45.00</span>
                    <ul className="stars">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="item">
                  <div className="thumb">
                    <div className="hover-content">
                      <ul>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-eye" />
                          </a>
                        </li>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-shopping-cart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <img src="assets/images/women-03.jpg" alt="" />
                  </div>
                  <div className="down-content">
                    <h4>Spring Collection</h4>
                    <span>$130.00</span>
                    <ul className="stars">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="item">
                  <div className="thumb">
                    <div className="hover-content">
                      <ul>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-eye" />
                          </a>
                        </li>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-shopping-cart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <img src="assets/images/women-01.jpg" alt="" />
                  </div>
                  <div className="down-content">
                    <h4>Classic Spring</h4>
                    <span>$120.00</span>
                    <ul className="stars">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ***** Women Area Ends ***** */}
    {/* ***** Kids Area Starts ***** */}
    <section className="section" id="kids">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              <h2>Kid's Latest</h2>
              <span>
                Details to details is what makes Hexashop different from the other
                themes.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="kid-item-carousel">
              <div className="owl-kid-item owl-carousel">
                <div className="item">
                  <div className="thumb">
                    <div className="hover-content">
                      <ul>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-eye" />
                          </a>
                        </li>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-shopping-cart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <img src="assets/images/kid-01.jpg" alt="" />
                  </div>
                  <div className="down-content">
                    <h4>School Collection</h4>
                    <span>$80.00</span>
                    <ul className="stars">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="item">
                  <div className="thumb">
                    <div className="hover-content">
                      <ul>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-eye" />
                          </a>
                        </li>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-shopping-cart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <img src="assets/images/kid-02.jpg" alt="" />
                  </div>
                  <div className="down-content">
                    <h4>Summer Cap</h4>
                    <span>$12.00</span>
                    <ul className="stars">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="item">
                  <div className="thumb">
                    <div className="hover-content">
                      <ul>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-eye" />
                          </a>
                        </li>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-shopping-cart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <img src="assets/images/kid-03.jpg" alt="" />
                  </div>
                  <div className="down-content">
                    <h4>Classic Kid</h4>
                    <span>$30.00</span>
                    <ul className="stars">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="item">
                  <div className="thumb">
                    <div className="hover-content">
                      <ul>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-eye" />
                          </a>
                        </li>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-shopping-cart" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <img src="assets/images/kid-01.jpg" alt="" />
                  </div>
                  <div className="down-content">
                    <h4>Classic Spring</h4>
                    <span>$120.00</span>
                    <ul className="stars">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ***** Kids Area Ends ***** */}
    {/* ***** Explore Area Starts ***** */}
    <section className="section" id="explore">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="left-content">
              <h2>Explore Our Products</h2>
              <span>
                You are allowed to use this HexaShop HTML CSS template. You can
                feel free to modify or edit this layout. You can convert this
                template as any kind of ecommerce CMS theme as you wish.
              </span>
              <div className="quote">
                <i className="fa fa-quote-left" />
                <p>
                  You are not allowed to redistribute this template ZIP file on
                  any other website.
                </p>
              </div>
              <p>
                There are 5 pages included in this HexaShop Template and we are
                providing it to you for absolutely free of charge at our
                TemplateMo website. There are web development costs for us.
              </p>
              <p>
                If this template is beneficial for your website or business,
                please kindly{" "}
                <a
                  rel="nofollow"
                  href="https://paypal.me/templatemo"
                  target="_blank"
                >
                  support us
                </a>{" "}
                a little via PayPal. Please also tell your friends about our great
                website. Thank you.
              </p>
              <div className="main-border-button">
                <a href="products.html">Discover More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="right-content">
              <div className="row">
                <div className="col-lg-6">
                  <div className="leather">
                    <h4>Leather Bags</h4>
                    <span>Latest Collection</span>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="first-image">
                    <img src="assets/images/explore-image-01.jpg" alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="second-image">
                    <img src="https://res.cloudinary.com/iset-sfax/image/upload/v1658507593/samples/bike.jpg" alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="types">
                    <h4>Different Types</h4>
                    <span>Over 304 Products</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ***** Explore Area Ends ***** */}
    {/* ***** Social Area Starts ***** */}
    <section className="section" id="social">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h2>Social Media</h2>
              <span>
                Details to details is what makes Hexashop different from the other
                themes.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row images">
          <div className="col-2">
            <div className="thumb">
              <div className="icon">
                <a href="http://instagram.com">
                  <h6>Fashion</h6>
                  <i className="fa fa-instagram" />
                </a>
              </div>
              <img src="assets/images/instagram-01.jpg" alt="" />
            </div>
          </div>
          <div className="col-2">
            <div className="thumb">
              <div className="icon">
                <a href="http://instagram.com">
                  <h6>New</h6>
                  <i className="fa fa-instagram" />
                </a>
              </div>
              <img src="https://res.cloudinary.com/iset-sfax/image/upload/v1702459563/images/OIP.jpg.jpg" alt="" />
            </div>
          </div>
          <div className="col-2">
            <div className="thumb">
              <div className="icon">
                <a href="http://instagram.com">
                  <h6>Brand</h6>
                  <i className="fa fa-instagram" />
                </a>
              </div>
              <img src="assets/images/instagram-03.jpg" alt="" />
            </div>
          </div>
          <div className="col-2">
            <div className="thumb">
              <div className="icon">
                <a href="http://instagram.com">
                  <h6>Makeup</h6>
                  <i className="fa fa-instagram" />
                </a>
              </div>
              <img src="https://res.cloudinary.com/iset-sfax/image/upload/v1702401401/images/parfum.jpg.jpg" alt="" />
            </div>
          </div>
          <div className="col-2">
            <div className="thumb">
              <div className="icon">
                <a href="http://instagram.com">
                  <h6>Leather</h6>
                  <i className="fa fa-instagram" />
                </a>
              </div>
              <img src="https://res.cloudinary.com/iset-sfax/image/upload/v1702459665/images/modern-engraved-mechanical-pocket-watch-silver.jpg.jpg" alt="" />
            </div>
          </div>
          <div className="col-2">
            <div className="thumb">
              <div className="icon">
                <a href="http://instagram.com">
                  <h6>Bag</h6>
                  <i className="fa fa-instagram" />
                </a>
              </div>
              <img src="assets/images/instagram-06.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ***** Social Area Ends ***** */}
    {/* ***** Subscribe Area Starts ***** */}
    <div className="subscribe">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="section-heading">
              <h2>By Subscribing To Our Newsletter You Can Get 30% Off</h2>
              <span>
                Details to details is what makes Hexashop different from the other
                themes.
              </span>
            </div>
            <form id="subscribe" action="" method="get">
              <div className="row">
                <div className="col-lg-5">
                  <fieldset>
                    <input
                      name="name"
                      type="text"
                      id="name"
                      placeholder="Your Name"
                      required=""
                    />
                  </fieldset>
                </div>
                <div className="col-lg-5">
                  <fieldset>
                    <input
                      name="email"
                      type="text"
                      id="email"
                      pattern="[^ @]*@[^ @]*"
                      placeholder="Your Email Address"
                      required=""
                    />
                  </fieldset>
                </div>
                <div className="col-lg-2">
                  <fieldset>
                    <button
                      type="submit"
                      id="form-submit"
                      className="main-dark-button"
                    >
                      <i className="fa fa-paper-plane" />
                    </button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-4">
            <div className="row">
              <div className="col-6">
                <ul>
                  <li>
                    Store Location:
                    <br />
                    <span>Sunny Isles Beach, FL 33160, United States</span>
                  </li>
                  <li>
                    Phone:
                    <br />
                    <span>010-020-0340</span>
                  </li>
                  <li>
                    Office Location:
                    <br />
                    <span>North Miami Beach</span>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <ul>
                  <li>
                    Work Hours:
                    <br />
                    <span>07:30 AM - 9:30 PM Daily</span>
                  </li>
                  <li>
                    Email:
                    <br />
                    <span>info@company.com</span>
                  </li>
                  <li>
                    Social Media:
                    <br />
                    <span>
                      <a href="#">Facebook</a>, <a href="#">Instagram</a>,{" "}
                      <a href="#">Behance</a>, <a href="#">Linkedin</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* ***** Subscribe Area Ends ***** */}
    {/* ***** Footer Start ***** */}
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="first-item">
              <div className="logo">
                <img
                  src="assets/images/white-logo.png"
                  alt="hexashop ecommerce templatemo"
                />
              </div>
              <ul>
                <li>
                  <a href="#">
                    16501 Collins Ave, Sunny Isles Beach, FL 33160, United States
                  </a>
                </li>
                <li>
                  <a href="#">hexashop@company.com</a>
                </li>
                <li>
                  <a href="#">010-020-0340</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <h4>Shopping &amp; Categories</h4>
            <ul>
              <li>
                <a href="#">Men’s Shopping</a>
              </li>
              <li>
                <a href="#">Women’s Shopping</a>
              </li>
              <li>
                <a href="#">Kid's Shopping</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <a href="#">Homepage</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h4>Help &amp; Information</h4>
            <ul>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">FAQ's</a>
              </li>
              <li>
                <a href="#">Shipping</a>
              </li>
              <li>
                <a href="#">Tracking ID</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-12">
            <div className="under-footer">
              <p>
                Copyright © 2022 HexaShop Co., Ltd. All Rights Reserved.
                <br />
                Design:{" "}
                <a
                  href="https://templatemo.com"
                  target="_parent"
                  title="free css templates"
                >
                  TemplateMo
                </a>
                <br />
                Distributed By:{" "}
                <a
                  href="https://themewagon.com"
                  target="_blank"
                  title="free & premium responsive templates"
                >
                  ThemeWagon
                </a>
              </p>
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-behance" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
 


  </>
  
  )
}

export default Home
