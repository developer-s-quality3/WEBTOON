# 개발자의 품격3기 1팀 WEBTOON
<img src="https://user-images.githubusercontent.com/26618280/139163653-be1ea7b5-3091-498e-95f7-1991f1d8711e.png" width="30%" height="30%">
(현준용,유형진,유희정,김동완)

## 개발구현 11.11

### 지난주 이슈
* 전체적인 구현일정이 늦어지고 있음

### 구현 사항
* 페이지 마다 링크 설정
* 작가 및 기업 신청 회원정보 변경 로그인 DB연결
* 웹툰 및 에피소드 등록 DB연결
* 전체적인 스타일링 및 style규격 설정
* 리팩토링(?)

### Issue
* DB에 연동이 아직 덜되서 모든 링크를 정리했지만 사용자마다 접속하는 링크가 다름
* DB설계와 실제 피그마에 와이어프레임과 다른 부분이 있어 일부 페이지 수정

### 개발 일정
* 11.12~12.01 - 스타일 수정,기능 구현 및 백엔드와 연동(api 요청)

## 백엔드 개발 내용

<details>
<summary>11월 3일~ 오늘</summary>

### Implements

- 회원가입 accessToken, refreshToken
- 사용자 로그인
- 회원 정보 수정
- 관리자 로그인
- 각 요청 route마다 권한 설정
- 관리자 api (작가/기업 신청, 승인 및 반려)
- aws s3 bucket에 이미지 업로드
- 작가 작품 등록
- 작가 작품 읽기
- 



### Language
 * front-end : vue, vuetify, vuex
 * back-end : node.js, express, mysql
