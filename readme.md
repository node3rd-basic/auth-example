# 브랜치 순서
## 0. feature/session-auth
세션을 통한 인증 구현
## 1. feature/cookie-auth
쿠키를 통한 인증 구현
## 2. feature/nocookie-auth
백엔드에서 쿠키를 전달, 사용하지 않는 인증 구현 
## 3. feature/encrypt-token 
암호화된 토큰을 사용
## 4. feature/encrypt-token-with-object
암호화된 토큰에 사용자의 몇몇 정보를 담기
## 5. feature/jwt-token
JWT 를 이용한 인증

# 인증의 절차에서 필요한 절차
- 검증된 사용자에게 키 제공
- 키 저장
- 키를 통해 유효한 사용자인지 검증
- 키를 통해 사용자 정보 조회