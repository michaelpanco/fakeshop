"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import store from "store2";

export default function ShopComments({ className, shopid }) {
  const reviews = store.get(shopid);
  const [reviewer, setReviewer] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [reviewsArr, setReviewsArr] = useState([]);

  const [errors, setErrors] = useState([]);

  console.log(reviewsArr, "reviewsArr");
  const reviewOnChange = (event) => {
    setReviewText(event.target.value);
  };

  const reviewerOnChange = (event) => {
    setReviewer(event.target.value);
  };

  const submitReviewHandler = (event) => {
    event.preventDefault();
    setErrors([]);
    if (reviewer !== "" && reviewText !== "") {
      const newValue = {
        name: reviewer,
        content: reviewText,
      };
      if (reviews?.length > 0) {
        const currentReviews = reviews;

        currentReviews.push(newValue);
        store.set(shopid, currentReviews);
        setReviewsArr((currentReviews) => [...currentReviews, newValue]);
      } else {
        const newReview = [newValue];
        store.set(shopid, newReview);
        setReviewsArr(newReview);
      }
      setReviewer("");
      setReviewText("");
    } else {
      const err = [];
      if (reviewer === "") {
        err.push("reviewer");
      }
      if (reviewText === "") {
        err.push("reviewText");
      }
      setErrors(err);
    }
  };

  useEffect(() => {
    setReviewsArr(reviews);
  }, []);

  return (
    <div className={cn("pb-5", className)}>
      <hr className="mb-5" />
      {reviewsArr?.length > 0 ? (
        <div className="mb-3">What people say about this product</div>
      ) : (
        <div className="text-center">
          Be the first one to review this product!
        </div>
      )}
      {reviewsArr?.map((review, index) => {
        return (
          <div key={index} className="border p-3 rounded-xl mb-3">
            <div className="font-bold">{review.name}</div>
            <div>{review.content}</div>
          </div>
        );
      })}

      <div className="mt-5 font-medium">
        Fill out the below form to submit your review
      </div>
      <div className="text-right mt-3">
        <form onSubmit={submitReviewHandler}>
          <div className="mb-2">
            <input
              type="text"
              value={reviewer}
              placeholder="Your name"
              className="border rounded-xl px-5 py-3 mb-1 w-full"
              onChange={reviewerOnChange}
            />
            {errors.includes("reviewer") && (
              <div className="text-left text-red-500">Enter your name</div>
            )}
          </div>

          <div className="mb-2">
            <textarea
              className="w-full border rounded-xl mb-1 p-5"
              value={reviewText}
              onChange={reviewOnChange}
              rows={4}
              placeholder="Write your review"
            />
            {errors.includes("reviewText") && (
              <div className="text-left text-red-500">
                Please give us your feedback
              </div>
            )}
          </div>

          <button className="bg-[#eaeaea] hover:bg-black hover:text-white px-3 py-3 rounded-xl min-w-[200px]">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
