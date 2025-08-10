import React from "react";
import { TestPage } from "./test/test";

const MainPage = () => {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
      <div
        style={{
          textAlign: "center",
          padding: "40px 20px 20px",
          backgroundColor: "white",
          borderBottom: "1px solid #dee2e6",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            color: "#212529",
            margin: "0 0 10px 0",
          }}
        >
          ⚡ React 폼 성능 비교
        </h1>
        <p
          style={{
            fontSize: "16px",
            color: "#6c757d",
            margin: "0",
          }}
        >
          useState vs React Hook Form 렌더링 성능 테스트
        </p>
      </div>
      <TestPage />
    </main>
  );
};

export default MainPage;
