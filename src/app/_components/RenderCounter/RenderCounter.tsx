"use client";

import React, { useRef, useState, useEffect } from "react";

interface RenderCounterProps {
  title: string;
  color?: string;
}

export const RenderCounter: React.FC<RenderCounterProps> = ({
  title,
  color = "#007bff",
}) => {
  const renderCount = useRef(0);
  const [isClient, setIsClient] = useState(false);

  // 클라이언트에서만 카운터 증가
  if (isClient) {
    renderCount.current += 1;
  }

  useEffect(() => {
    setIsClient(true);
    renderCount.current = 1; // 첫 클라이언트 렌더링 시 1로 설정
  }, []);

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        backgroundColor: color,
        color: "white",
        padding: "8px 16px",
        borderRadius: "4px",
        marginBottom: "16px",
        fontSize: "14px",
        fontWeight: "bold",
        textAlign: "center",
        zIndex: 1000,
      }}
    >
      {title} - 렌더링 횟수: {isClient ? renderCount.current : 0}
    </div>
  );
};
