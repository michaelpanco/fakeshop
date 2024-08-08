"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import {
  filterProducts,
  filterProductsPricing,
} from "@/state/product/productSlice";
import { useAppDispatch } from "@/lib/hooks";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export default function ShopFilter({ className }) {
  const dispatch = useAppDispatch();

  const [enabledCategories, setEnabledCategories] = useState([]);
  const [minPrice, setMinPrice] = useState("0");
  const [maxPrice, setMaxPrice] = useState("999");

  const checkHandler = (event) => {
    if (!enabledCategories.includes(event.target.value)) {
      setEnabledCategories((categories) => [...categories, event.target.value]);
    } else {
      setEnabledCategories((oldValues) => {
        return oldValues.filter((category) => category !== event.target.value);
      });
    }
  };

  useEffect(() => {
    dispatch(filterProducts({ categories: enabledCategories }));
  }, [enabledCategories]);

  const marks = {
    1: "$1",
    1000: "$1000",
  };

  const changePricingFilter = (pricing) => {
    const [minPrice, maxPrice] = pricing;
    setMinPrice(minPrice);
    setMaxPrice(maxPrice);

    dispatch(filterProductsPricing({ minPrice: minPrice, maxPrice: maxPrice }));
  };

  return (
    <div className={cn("w-full lg:pr-5", className)}>
      <div className="mb-2 font-medium">Filter by categories</div>
      <div className="text-gray-500 mb-5">
        <input
          type="checkbox"
          id="electronics"
          name="electronics"
          value="electronics"
          checked={enabledCategories.includes("electronics")}
          onChange={checkHandler}
        />
        <label htmlFor="electronics"> Electronics</label>
        <br />
        <input
          type="checkbox"
          id="jewelry"
          name="jewelry"
          value="jewelry"
          checked={enabledCategories.includes("jewelry")}
          onChange={checkHandler}
        />
        <label htmlFor="jewelry"> Jewelry</label>
        <br />
        <input
          type="checkbox"
          id="mens-clothing"
          name="mens-clothing"
          value="mens-clothing"
          checked={enabledCategories.includes("mens-clothing")}
          onChange={checkHandler}
        />
        <label htmlFor="mens-clothing"> Men's Clothing</label>
        <br />
        <input
          id="womens-clothing"
          type="checkbox"
          name="womens-clothing"
          value="womens-clothing"
          checked={enabledCategories.includes("womens-clothing")}
          onChange={checkHandler}
        />
        <label htmlFor="womens-clothing"> Women's Clothing</label>
        <br />
      </div>
      <hr />
      <div className="relative pr-5 mt-5 h-[80px] lg:h-auto">
        <div className="flex justify-between">
          <div className="mb-2 font-medium">Price range filter:</div>
          <div className="font-bold">
            ${minPrice} - ${maxPrice}
          </div>
        </div>

        <Slider
          min={1}
          max={999}
          marks={marks}
          defaultValue={[1, 999]}
          range
          allowCross={false}
          onChangeComplete={changePricingFilter}
        />
      </div>
    </div>
  );
}
