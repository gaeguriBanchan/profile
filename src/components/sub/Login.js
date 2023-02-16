import React from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  // 카카오 로그인 기능
  // 등록된 앱의 JavaScript key
  const jsKey = process.env.REACT_APP_KAKAO;

  // SDK는 한 번만 초기화해야 한다.
  // 중복되는 초기화를 막기 위해 isInitialized()로 SDK 초기화 여부를 판단한다.
  if (!window.Kakao.isInitialized()) {
    // JavaScript key를 인자로 주고 SDK 초기화
    window.Kakao.init(jsKey);
    // SDK 초기화 여부를 확인하자.
    console.log(window.Kakao.isInitialized());
  }
  // 화면이동
  const history = useHistory();
  const kakaoLogin = () => {
    window.Kakao.Auth.login({
      scope: "profile_nickname, profile_image, account_email", //동의항목 페이지에 있는 개인정보 보호 테이블의 활성화된 ID값을 넣습니다.
      success: function (response) {
        console.log(response); // 로그인 성공하면 받아오는 데이터
        window.Kakao.API.request({
          // 사용자 정보 가져오기
          url: "/v2/user/me",
          success: (res) => {
            const kakao_account = res.kakao_account;
            console.log("사용자 정보", kakao_account);
            // 사용자 정보를 받은 경우 localStorage 저장 또는 redux 저장
            history.push("/logout");
          },
        });
      },
      fail: function (error) {
        console.log(error);
      },
    });
  };
  return (
    <div>
      {/* 카카오 로그인 */}
      <button onClick={kakaoLogin}>카카오 로그인</button>
    </div>
  );
};

export default Login;
