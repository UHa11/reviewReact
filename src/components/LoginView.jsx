import React from 'react'

const LoginView = () => {
  return (
    <form>
        <ul>
            <h2>로그인</h2>
            <li>아이디</li>
            <li><input type="text" /></li>
            <li>비밀번호</li>
            <li><input type="text" /></li>
        </ul>
    </form>
  )
}

export default LoginView