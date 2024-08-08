"use client";

import { cn } from "@/lib/utils";
import { useState, useCallback } from "react";
import debounce from "debounce";
import Link from "next/link";
import CircularLoader from "@/components/Common/Loader/Circular";
import { searchProducts } from "@/state/product/productSlice";
import { useAppDispatch } from "@/lib/hooks";
import { slugify } from "@/lib/utils";
export default function SearchBar({ className }) {
  const dispatch = useAppDispatch();
  const [searchingSuggestion, setSearchingSuggestion] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [itemSuggestions, setItemSuggestions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  async function fetchData(searchTerm) {
    if (searchTerm?.length > 2) {
      try {
        setSearchingSuggestion(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/suggest?q=${searchTerm}`
        );
        const data = await response.json();
        const suggestions = data?.details;

        setItemSuggestions(suggestions);
      } catch (error) {
      } finally {
        setSearchingSuggestion(false);
      }
    }
  }

  const handleOnFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    // add timeout to prevent from closing the suggestion div
    setTimeout(() => {
      setIsFocused(false);
    }, 100);
  };

  const submitSearchHandler = (event) => {
    event.preventDefault();
    dispatch(searchProducts(inputValue));
  };

  const debounced = useCallback(debounce(fetchData, 500), []);

  return (
    <div className={cn("w-full h-[150px] lg:h-auto", className)}>
      <form onSubmit={submitSearchHandler}>
        <div className="flex flex-col lg:flex-row h-[50px] mb-5 gap-y-2 gap-x-5">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search in Fakestore"
              className="border rounded-xl w-full py-3 h-full px-5 bg-white "
              onChange={(e) => {
                setInputValue(e.target.value);
                debounced(e.target.value, 500);
              }}
              onFocus={handleOnFocus}
              onBlur={handleBlur}
            />

            {isFocused && inputValue.length > 2 && inputValue !== "" && (
              <div className="absolute bg-white w-full border px-5 py-3 z-10">
                {searchingSuggestion ? (
                  <div className="flex justify-center py-1">
                    <CircularLoader />
                  </div>
                ) : (
                  <>
                    {itemSuggestions.length > 0 ? (
                      itemSuggestions?.map((suggestion, index) => {
                        return (
                          <div key={index} className="mb-2">
                            <Link href={`${slugify(suggestion)}`}>
                              {suggestion}
                            </Link>
                          </div>
                        );
                      })
                    ) : (
                      <div>No search suggestion</div>
                    )}
                  </>
                )}
              </div>
            )}
          </div>

          <button className="bg-black text-white rounded-xl text-center py-3 min-w-[200px]">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
