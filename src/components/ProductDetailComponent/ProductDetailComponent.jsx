import React, { useState } from "react";
import { Button, Col, Image, Input, Rate, Row } from "antd";
import imageProductSmall from "../../assets/img/121.jpg";
import {
  WrapperAddressProduct,
  WrapperImgCol,
  WrapperImgSmall,
  WrapperInputNumber,
  WrapperPriceProduct,
  WrapperPriceTextProduct,
  WrapperQualityProduct,
  WrapperStyleNameProduct,
  WrapperStyleTextSell,
} from "./style";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import * as ProductService from "../../service/ProductSevice";
import { useQuery } from "@tanstack/react-query";
import Loading from "../LoadingComponent/Loading";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addOrderProduct } from "../../redux/slides/orderSlide";
import ButtonComponent from "../ButtonComponents/ButtonConponents";

const ProductDetailComponent = ({ idProduct }) => {
  const [numProduct, setNumProduct] = useState(1);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch()
  const onChange = (value) => {
    setNumProduct(Number(value));
  };
  const fetchGetDetailsProduct = async (context) => {
    const id = context?.queryKey && context?.queryKey[1];
    console.log("idddd", id);
    if (id) {
      const res = await ProductService.getDetailsProduct(id);
      return res.data;
    }
  };

  const handleChangeCount = (type, limited) => {
    if (type === "increase") {
      if (!limited) {
        setNumProduct(numProduct + 1);
      }
    } else {
      if (!limited) {
        setNumProduct(numProduct - 1);
      }
    }
  };
  const { isLoading, data: productDetails } = useQuery(
    ["product-details", idProduct],
    fetchGetDetailsProduct,
    { enabled: !!idProduct }
  );

  const handleAddOrderProduct = () => {
    if (!user?.id) {
      navigate("/sign-in", { state: location?.pathname });
      }else {
              dispatch(addOrderProduct({
                  orderItem: {
                      name: productDetails?.name,
                      amount: numProduct,
                      image: productDetails?.image,
                      price: productDetails?.price,
                      product: productDetails?._id,
                      discount: productDetails?.discount,
                      countInstock: productDetails?.countInStock,
                      introduce: productDetails?.introduce
                  },
                  userId: user?.id
              }))
    }
  };

  return (
    <Loading isLoading={isLoading}>
      <Row style={{ padding: "16px", background: "#efefef", borderRadius: "4px" }}>
        <Col
          span={10}
          style={{ borderRight: "1px solid #e5e5e5", paddingRight: "8px" }}
        >
          <Image
            src={productDetails?.image}
            alt="image product"
            preview={false}
          />
          
        </Col>
        <Col span={14}>
          <div style={{ marginLeft: "15px" }}>
            <WrapperStyleNameProduct>
              {productDetails?.name}
            </WrapperStyleNameProduct>
            <div>
              <Rate
                allowHalf
                defaultValue={productDetails?.rating}
                value={productDetails?.rating}
              />
              <WrapperStyleTextSell> | Sold +1000</WrapperStyleTextSell>
            </div>
            <WrapperPriceProduct>
              <WrapperPriceTextProduct>
                {productDetails?.price.toLocaleString()} ₫
              </WrapperPriceTextProduct>
            </WrapperPriceProduct>
            <WrapperAddressProduct>
              <span>Address </span>
              <span className="address">{user?.address}</span> -
              <span className="change-address">doi dia chi</span>
            </WrapperAddressProduct>
            <div
              style={{
                margin: "10px 0 20px",
                padding: "10px 0",
                borderTop: "1px solid #e5e5e5",
                borderBottom: "1px solid #e5e5e5",
              }}
            >
              <div style={{ marginBottom: "10px", fontSize: "18px" }}>
                Quantity
              </div>
              <WrapperQualityProduct>
                {/* button them giam san pham */}
                <button
                  style={{ border: "none", background: "transparent" }}
                  onClick={() =>
                    handleChangeCount("decrease", numProduct === 1)
                  }
                >
                  <MinusOutlined style={{ color: "#000", fontSize: "15px" }} />
                </button>
                <WrapperInputNumber
                  onChange={onChange}
                  defaultValue={1}
                  max={productDetails?.countInStock}
                  min={1}
                  value={numProduct}
                  size="small"
                />
                <button
                  style={{ border: "none", background: "transparent" }}
                  onClick={() =>
                    handleChangeCount(
                      "increase",
                      numProduct === productDetails?.countInStock
                    )
                  }
                >
                  <PlusOutlined style={{ color: "#000", fontSize: "15px" }} />
                </button>
              </WrapperQualityProduct>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <Button
                type="primary"
                style={{
                  backgroundColor: "rgb(255, 57, 69)",
                  height: "48px",
                  width: "220px",
                  fontSize: "20px",
                  fontWeight: "500",
                }}
                onClick={handleAddOrderProduct}
              >
                Buy
              </Button>
              <Button
                type="primary"
                style={{
                  backgroundColor: "#fff",
                  height: "48px",
                  width: "220px",
                  fontSize: "20px",
                  color: "rgb(13, 92, 182)",
                  border: "1px solid rgb(13, 92,182)",
                }}
              >
                Buy and pay later
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <div>
        <h3>Giới thiệu sản phẩm </h3>
        <h4 style={{borderBottom:'1px solid #efefef', marginBottom:'30px'}}>
        {productDetails?.introduce}
        </h4>
      </div>
      <Input style={{ width:'600px', height:' 100px', border:'1px solid black', marginBottom:'10px'}} rows={20}/>
      <div>
      <Button style={{marginBottom:'30px'}} type="primary">Bình luận</Button>
      </div>
    </Loading>
  );
};

export default ProductDetailComponent;
