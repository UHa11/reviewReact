import { useEffect, useRef } from "react";
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
    transform: translate(-50%, -50%);
    /* 마우스 위치 기준으로 커서가 "가운데" 오게 조정 */
    /* transition: transform 1s linear ; */
    /* transition: [속성] [지속 시간] [속도 곡선]; */
    animation: ${pulse} 1s infinite; /* 커서 자체 애니메이션 */
`

const Cursor = () => {
  const cursor = useRef(null);   
    // 🔹 DOM을 직접 접근하지 않고 ref로 잡음
    // const cursor = document.querySelector('.cursor');
  useEffect(() => {
      const move = (e) => {
        if(cursor.current){
          cursor.current.style.left = `${e.clientX}px`;
          cursor.current.style.top = `${e.clientY}px`;
        }
      };
      // e.clientX, e.clientY로 마우스 위치 알 수 있음
      document.addEventListener('mousemove', move);
      //컴포넌트가 처음 마운트될 때 이벤트 연결
      return () => document.removeEventListener('mousemove', move);
      // 마우스 움직임을 감지해서 위치 갱신
      //mousemove는 이벤트 타입 -> mousemove"라는 이름으로 리스너(함수)를 호출
      //컴포넌트가 언마운트될 때 이벤트 제거 (정리/청소)
    }, []);
  
    return <CustomCursor ref={cursor}/>;
  };
  
  export default Cursor;
