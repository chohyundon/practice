"use client";

import React, { useState } from "react";
import { inputItem } from "../consts/inputItem";
import { validation } from "../validation/validation";
import { RenderCounter } from "../RenderCounter/RenderCounter";

export const Input = () => {
  const [inputValue, setInputValue] = useState<Record<string, string>>({});

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("제출된 데이터:", inputValue);
    validation(inputValue);
    setInputValue({});
  };

  return (
    <div>
      <RenderCounter title="기본 useState 폼" color="#dc3545" />
      <form onSubmit={onSubmit}>
        {inputItem &&
          inputItem.map((item) => (
            <div key={item.id} style={{ marginBottom: "16px" }}>
              <label
                htmlFor={item.id}
                style={{
                  display: "block",
                  marginBottom: "6px",
                  fontWeight: "500",
                  color: "#374151",
                }}
              >
                {item.label}
              </label>
              <input
                id={item.id}
                placeholder={item.placeholder}
                name={item.id}
                type={item.type}
                onChange={onChangeInput}
                value={inputValue[item.id] || ""}
                style={{
                  width: "100%",
                  padding: "8px 12px",
                  border: "1px solid #d1d5db",
                  borderRadius: "4px",
                  fontSize: "14px",
                  transition: "border-color 0.2s",
                  outline: "none",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#dc3545")}
                onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
              />
            </div>
          ))}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "4px",
            fontSize: "16px",
            fontWeight: "500",
            cursor: "pointer",
            transition: "background-color 0.2s",
            marginTop: "8px",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#c82333")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#dc3545")
          }
        >
          인풋 제출
        </button>
      </form>
    </div>
  );
};
