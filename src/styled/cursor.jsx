import { useEffect } from "react";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  /*  애니메이션의 시작 지점 (0%)
      scale(1) → 원래 크기 (100%)
      opacity: 1 → 완전히 보임 
  */
  50% {
    transform: scale(1.3);
    opacity: 0.5;
  }
  /*  중간 지점 (50%)
      scale(1.3) → 크기를 130%로 확장
      opacity: 0.5 → 반투명하게 
  */
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;
//pulse는 애니메이션 이름

const CustomCursor = styled.div`
    position: fixed;
    width: 20px;
    height: 20px;
    border: 2px solid hotpink;
    border-radius: 50%;
    pointer-events: none; /* 클릭 막지 않기 */
    z-index: 9999;
    /*  다른 요소 위에 항상 떠 있게 함
        너무 낮으면 버튼, 이미지 등 UI 요소 아래에 가려질 수 있음
    */
    transition: transform 0.1s ease; /* 부드럽게 따라다니기 */
    /* transition: [속성] [지속 시간] [속도 곡선]; */
    animation: ${pulse} 1s infinite; /* 커서 자체 애니메이션 */
`

const Cursor = () => {
    useEffect(() => {
      const cursor = document.querySelector('.cursor');
      const move = (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      };
      document.addEventListener('mousemove', move);
      return () => document.removeEventListener('mousemove', move);
    }, []);
  
    return <CustomCursor className="cursor" />;
  };
  
  export default Cursor;
