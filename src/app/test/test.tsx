"use client";

import React from "react";
import { Input as BasicInput } from "../_components/Input/Input";
import { Input as RHFInput } from "../_components/reacthookform/Input";

export const TestPage = () => {
  return (
    <main style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h2
        style={{ textAlign: "center", marginBottom: "40px", fontSize: "24px" }}
      >
        🚀 React 폼 성능 비교 테스트
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            border: "2px solid #dc3545",
            borderRadius: "8px",
            padding: "20px",
            backgroundColor: "#fff5f5",
          }}
        >
          <h3
            style={{
              color: "#dc3545",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            기본 useState 폼
          </h3>
          <BasicInput />
        </div>

        <div
          style={{
            border: "2px solid #28a745",
            borderRadius: "8px",
            padding: "20px",
            backgroundColor: "#f8fff9",
          }}
        >
          <h3
            style={{
              color: "#28a745",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            React Hook Form
          </h3>
          <RHFInput />
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#f8f9fa",
          border: "1px solid #dee2e6",
          borderRadius: "8px",
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <h3 style={{ color: "#495057", marginBottom: "15px" }}>
          📊 성능 비교 가이드
        </h3>
        <ul style={{ lineHeight: "1.6", color: "#6c757d" }}>
          <li>
            <strong>렌더링 횟수:</strong> 각 입력 시 컴포넌트가 다시 렌더링되는
            횟수를 확인하세요
          </li>
          <li>
            <strong>기본 useState:</strong> 매 글자 입력마다 전체 컴포넌트가
            리렌더링됩니다
          </li>
          <li>
            <strong>React Hook Form:</strong> 입력 중에는 렌더링이 거의 발생하지
            않고, 제출 시에만 렌더링됩니다
          </li>
          <li>
            <strong>테스트 방법:</strong> 각 폼에 텍스트를 입력해보고 상단의
            렌더링 카운터를 비교해보세요
          </li>
        </ul>
      </div>
    </main>
  );
};
