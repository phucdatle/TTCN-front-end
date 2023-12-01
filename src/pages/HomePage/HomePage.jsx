/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import TypeProduct from "../../components/TypeProducts/TypeProduct";
import { HiImg, HiImg2, WrapperButtonMore, WrapperProduct, WrapperTypeProduct } from "./style";
import SliderComponents from "../../components/SliderComponents/SliderComponents";
import slider1 from "../../assets/img/slide1.png";
import slider2 from "../../assets/img/slide2.jpg";
import slider3 from "../../assets/img/slider3.jpg";
import slider4 from "../../assets/img/slide4.jpg";
import anh1 from "../../assets/toji/anh1.webp";
import anh2 from "../../assets/toji/anh2.webp";
import anh3 from "../../assets/toji/anh3.webp";
import duoi1 from "../../assets/toji/duoi1.webp";
import duoi2 from "../../assets/toji/duoi2.webp";
import duoi3 from "../../assets/toji/duoi3.webp";
import duoi4 from "../../assets/toji/duoi 4.webp";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Button, Col, Image } from "antd";

import * as ProductSevice from "../../service/ProductSevice";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import Loading from "../../components/LoadingComponent/Loading";
import { useDebounce } from "../../hooks/useDebounce";
// import NavbarComponents from '../../components/NavbarComponents/NavbarComponents'

const HomePage = () => {
  const searchProduct = useSelector((state) => state?.product?.search);
  const searchDebounce = useDebounce(searchProduct, 500);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(6);
  const [typeProducts, setTypeProducts] = useState([]);

  const fetchProductAll = async (context) => {
    const limit = context?.queryKey && context?.queryKey[1];
    const search = context?.queryKey && context?.queryKey[2];
    const res = await ProductSevice.getAllProduct(search, limit);

    return res;
  };

  const fetchAllTypeProduct = async () => {
    const res = await ProductSevice.getAllTypeProduct();
    if (res?.status === "OK") {
      setTypeProducts(res?.data);
    }
  };

  const {
    isLoading,
    data: products,
    isPreviousData,
  } = useQuery(["products", limit, searchDebounce], fetchProductAll, {
    retry: 3,
    retryDelay: 1000,
    keepPreviousData: true,
  });

  useEffect(() => {
    fetchAllTypeProduct();
  }, []);

  return (
    <Loading isLoading={isLoading || loading}>
      <div style={{ width: "100%", background:'#e5e5e5' }}>
        <WrapperTypeProduct>
          {typeProducts.map((item) => {
            return <TypeProduct name={item} key={item} />;
          })}
        </WrapperTypeProduct>
      </div>
      <div
        style={{
          width: "1270px",
          margin: "0 auto",
          backgroundColor: "#F2F3F5",
          display: "flex",
          marginTop: "5px"
        }}  
      >
      {/* vế trên */}
        <div style={{ width: "950px" }}>
          <SliderComponents
            style={{ marginTop: "20px", height: "500px" }}
            arrImages={[slider1, slider2, slider3, slider4]}
          />
        </div>
        <div style={{ marginLeft: "15px" }}>
          <HiImg
            src={anh1}
            style={{ height: "140px"}}
            preview={false}
          />
            <HiImg
            src={anh2}
            style={{  height: "140px" ,marginTop: "10px"}}
            preview={false}
          />
            <HiImg
            src={anh3}
            style={{ height: "140px" , marginTop: "10px"}}
            preview={false}
          />
        </div>
        
      </div>
      {/* vế dưới */}
      <div
        style={{
          width: "1270px",
          margin: "0 auto",
          backgroundColor: "#F2F3F5",
          display: "flex",
          marginTop: "10px",
          
        }}
      >
        <div style={{  }}>
          <HiImg2
            src={duoi1}
            style={{ width: "307px", height: "129px", borderRadius:'7px' }}
            preview={false}
          />
        </div>
        <div style={{ marginLeft: "13px" }}>
          <HiImg2
            src={duoi2}
            style={{ width: "307px", height: "129px" , borderRadius:'7px'}}
            preview={false}
          />
        </div>
        <div style={{ marginLeft: "13px" }}>
          <HiImg2
            src={duoi3}
            style={{ width: "307px", height: "129px", borderRadius:'7px' }}
            preview={false}
          />
        </div>
        <div style={{ marginLeft: "14px" }}>
          <HiImg2
            src={duoi4}
            style={{ width: "308px", height: "129px" , borderRadius:'7px'}}
            preview={false}
          />
        </div>
      </div>
      <div
        id="container"
        style={{
          backgroundColor: "#fff",
          padding: "0 120px",
          height: "1500px",
          borderTop:'1px solid #efefef'
        }}
      >
      <h1>Top sản phẩm bán chạy</h1>
        <WrapperProduct>
          {products?.data?.map((product) => {
            return (
              <CardComponent
                key={product._id}
                countInStock={product.countInStock}
                description={product.description}
                image={product.image}
                name={product.name}
                price={product.price}
                rating={product.rating}
                type={product.type}
                discount={product.discount}
                selled={product.selled}
                id={product._id}
              />
            );
          })}
        </WrapperProduct>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <WrapperButtonMore
            textbutton={isPreviousData ? "Load more" : "See More"}
            type="outline"
            styleButton={{
              border: `1px solid ${
                products?.total === products?.data?.length
                  ? "#f5f5f5"
                  : "#9255FD"
              }`,
              color: `${
                products?.total === products?.data?.length
                  ? "#f5f5f5"
                  : "#9255FD"
              }`,
              width: "240px",
              height: "38px",
              borderRadius: "4px",
            }}
            disabled={
              products?.total === products?.data?.length ||
              products?.totalPage === 1
            }
            styleTextButton={{
              fontWeight: 500,
              color: products?.total === products?.data?.length && "#fff",
            }}
            onClick={() => setLimit((prev) => prev + 6)}
          />
        </div>
      </div>
    </Loading>
  );
};

export default HomePage;
