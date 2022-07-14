import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
    return (
      <div>

        <div className="inner-header">
          <div className="container">
            <div className="pull-left"></div>
            <div className="pull-right">
              <div className="beta-breadcrumb font-large">
                <a href="/trangchu">Home</a> / <span>Details</span>
              </div>
            </div>
            <div className="clearfix" />
          </div>
        </div>
        <div className="container">
          <div id="content">
            <div className="row">
              <div className="col-sm-9">
                <div className="row">
                  <div className="col-sm-7">
                    <img
                      src="/sources/image/product/{{$sanpham->image}}"
                      alt=""
                    />
                  </div>
                  <div className="col-sm-4">
                    <div className="single-item-body">
                      <p className="single-item-title"></p>
                      <h2>
                        {"{"}
                        {"{"}$sanpham-&gt;name{"}"}
                        {"}"}
                      </h2>
                      <p />
                      <p
                        className="single-item-price"
                        style={{ textAlign: "left", fontSize: "15px" }}
                      >
                        <span>
                          {" "}
                          @if($sanpham-&gt;promotion_price==0)
                          <span className="flash-sale">
                            {"{"}
                            {"{"}number_format($sanpham-&gt;unit_price){"}"}
                            {"}"} Đồng
                          </span>
                          @else
                          <span className="flash-del">
                            {"{"}
                            {"{"}number_format($sanpham-&gt;unit_price){"}"}
                            {"}"} Đồng{" "}
                          </span>
                          <span className="flash-sale">
                            {"{"}
                            {"{"}number_format($sanpham-&gt;promotion_price)
                            {"}"}
                            {"}"} Đồng
                          </span>
                          @endif
                        </span>
                      </p>
                    </div>
                    <div className="clearfix" />
                    <div className="space20">&nbsp;</div>
                    <div className="single-item-desc">
                      <p>
                        {"{"}
                        {"{"}$sanpham-&gt;description{"}"}
                        {"}"}
                      </p>
                    </div>
                    <div className="space20">&nbsp;</div>
                    <p>Số lượng:</p>
                    <div className="single-item-options">
                      <select className="wc-select" name="color">
                        <option>Số lượng</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                      </select>
                      <a className="add-to-cart" href="shopping_cart.html">
                        <i className="fa fa-shopping-cart" />
                      </a>
                      <div className="clearfix" />
                    </div>
                  </div>
                </div>
                <div className="space40">&nbsp;</div>
                <div className="woocommerce-tabs">
                  <ul className="tabs">
                    <li>
                      <a href="#tab-description">Description</a>
                    </li>
                  </ul>
                  <div className="panel" id="tab-description">
                    <p>
                      Hoa quả là những mặt hàng phổ biến và được quan tâm hiện
                      nay. Hãy đến với chúng tôi những sản phẩm đến từ thiên
                      nhiên và không có chất bảo quản. Được trồng từ những cánh
                      đồng xanh tươi và hệ thống trồng cây an toàn. Trong những
                      ngày hè khô khan thì hệ thống tưới tiêu vẫn luôn hoạt động
                      hết công suất để cho ra những trái cây thơm ngon.
                    </p>
                    <p>
                      Fruits are popular and interested items today. Come to us
                      products that come from nature and do not have
                      preservative. Grown from verdant fields and safe planting
                      system. In the dry summer days The irrigation system is
                      always working at full capacity to produce delicious
                      fruits.{" "}
                    </p>
                  </div>
                </div>
              </div>{" "}
              {/* .beta-products-list */}
            </div>
          </div>
        </div>
        {/* #content */}
        {/* .container */}
       
      </div>
      
    )
  }
}
