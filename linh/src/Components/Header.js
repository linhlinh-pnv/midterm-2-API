import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div id="header">
        <div className="header-top">
          {/* <div class="container">
                <div class="pull-left auto-width-left">
                    <ul class="top-menu menu-beta l-inline">
                        <li><a href=""><i class="fa fa-home"></i> 90-92 Lê Thị Riêng, Bến Thành, Quận 1</a></li>
                        <li><a href=""><i class="fa fa-phone"></i> 0163 296 7751</a></li>
                    </ul>
                </div>
                <div class="pull-right auto-width-right">
                    <ul class="top-details menu-beta l-inline">
                        <li><a href="#"><i class="fa fa-user"></i>Tài khoản</a></li>
                        <li><a href="#">Đăng kí</a></li>
                        <li><a href="#">Đăng nhập</a></li>
                    </ul>
                </div>
                <div class="clearfix"></div>
            </div> .container */}
        </div>{" "}
        {/* .header-top */}
        <div className="header-body">
          <div className="container beta-relative">
            <div className="pull-left">
              <a href="index.html" id="logo">
                <img
                  src="sources/assets/dest/images/logo-cake.jpg"
                  width="100px"
                  alt=""
                />
              </a>
            </div>
            <div className="pull-right beta-components space-left ov">
              <div className="space10">&nbsp;</div>
              <div className="beta-comp">
                <form role="search" method="get" id="searchform" action="/">
                  <input
                    type="text"
                    defaultValue
                    name="s"
                    id="s"
                    placeholder="Nhập từ khóa..."
                  />
                  <button
                    className="fa fa-search"
                    type="submit"
                    id="searchsubmit"
                  />
                </form>
              </div>
              <div className="beta-comp">
                <div className="cart">
                  <div className="beta-select">
                    <i className="fa fa-shopping-cart" /> Giỏ hàng (Trống){" "}
                    <i className="fa fa-chevron-down" />
                  </div>
                  <div className="beta-dropdown cart-body">
                    <div className="cart-item">
                      <div className="media">
                        <a className="pull-left" href="#">
                          <img
                            src="sources/assets/dest/images/products/cart/1.png"
                            alt=""
                          />
                        </a>
                        <div className="media-body">
                          <span className="cart-item-title">
                            Sample Woman Top
                          </span>
                          <span className="cart-item-options">
                            Size: XS; Colar: Navy
                          </span>
                          <span className="cart-item-amount">
                            1*<span>$49.50</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="cart-item">
                      <div className="media">
                        <a className="pull-left" href="#">
                          <img
                            src="sources/assets/dest/images/products/cart/2.png"
                            alt=""
                          />
                        </a>
                        <div className="media-body">
                          <span className="cart-item-title">
                            Sample Woman Top
                          </span>
                          <span className="cart-item-options">
                            Size: XS; Colar: Navy
                          </span>
                          <span className="cart-item-amount">
                            1*<span>$49.50</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="cart-item">
                      <div className="media">
                        <a className="pull-left" href="#">
                          <img
                            src="sources/assets/dest/images/products/cart/3.png"
                            alt=""
                          />
                        </a>
                        <div className="media-body">
                          <span className="cart-item-title">
                            Sample Woman Top
                          </span>
                          <span className="cart-item-options">
                            Size: XS; Colar: Navy
                          </span>
                          <span className="cart-item-amount">
                            1*<span>$49.50</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="cart-caption">
                      <div className="cart-total text-right">
                        Tổng tiền:{" "}
                        <span className="cart-total-value">$34.55</span>
                      </div>
                      <div className="clearfix" />
                      <div className="center">
                        <div className="space10">&nbsp;</div>
                        <a
                          href="checkout.html"
                          className="beta-btn primary text-center"
                        >
                          Đặt hàng <i className="fa fa-chevron-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* .cart */}
              </div>
            </div>
            <div className="clearfix" />
          </div>{" "}
          {/* .container */}
        </div>{" "}
        {/* .header-body */}
        <div className="header-bottom" style={{ backgroundColor: "pink" }}>
          <div className="container">
            <a className="visible-xs beta-menu-toggle pull-right" href="#">
              <span className="beta-menu-toggle-text">Menu</span>{" "}
              <i className="fa fa-bars" />
            </a>
            <div className="visible-xs clearfix" />
            <nav className="main-menu">
              <ul className="l-inline ov">
                <li>
                  <a href="/trangchu">Trang chủ</a>
                </li>
                <li>
                  <a href="showadmin">Admin</a>
                </li>
                <li>
                  <a href="#">Sản phẩm</a>
                  <ul className="sub-menu"></ul>
                </li>
                <li>
                  <a href="about.html">Giới thiệu</a>
                </li>
                <li>
                  <a href="contacts.html">Liên hệ</a>
                </li>
              </ul>
              <div className="clearfix" />
            </nav>
          </div>{" "}
          {/* .container */}
        </div>{" "}
        {/* .header-bottom */}
      </div>
    );
        }}