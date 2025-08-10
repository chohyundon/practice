"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { inputItem } from "../consts/inputItem";
import { validation } from "../validation/validation";
import { RenderCounter } from "../RenderCounter/RenderCounter";

export const Input = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Record<string, string>>();

  const onSubmit = (data: Record<string, string>) => {
    console.log("제출된 데이터 (React Hook Form):", data);
    validation(data);
    reset();
  };

  return (
    <div>
      <RenderCounter title="React Hook Form" color="#28a745" />
      <form onSubmit={handleSubmit(onSubmit)}>
        {inputItem.map((item) => (
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
              type={item.type}
              {...register(item.id, { required: "필수 입력 항목입니다" })}
              style={{
                width: "100%",
                padding: "8px 12px",
                border: "1px solid #d1d5db",
                borderRadius: "4px",
                fontSize: "14px",
                transition: "border-color 0.2s",
                outline: "none",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#28a745")}
              onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
            />
            {errors[item.id] && (
              <span
                style={{
                  color: "#dc3545",
                  fontSize: "12px",
                  display: "block",
                  marginTop: "4px",
                }}
              >
                {errors[item.id]?.message}
              </span>
            )}
          </div>
        ))}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#28a745",
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
            (e.currentTarget.style.backgroundColor = "#218838")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#28a745")
          }
        >
          인풋 제출
        </button>
      </form>
    </div>
  );
};
