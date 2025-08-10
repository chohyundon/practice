export const validation = (inputValue: Record<string, string>) => {
  const allValidation = Object.values(inputValue).every(
    (value) => value !== ""
  );
  console.log("검증 결과:", allValidation);
  console.log("입력된 데이터:", inputValue);

  if (!allValidation) {
    alert("모든 필드를 입력해주세요.");
    return false;
  } else {
    alert("✅ 폼이 성공적으로 제출되었습니다!");
    return true;
  }
};
