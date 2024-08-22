# Master Plan - The Key

## Project Version

### 2024.08.21

#### 0.0.1

- Next 설치 및 git 초기 세팅
  - npx create-next-app@latest

#### 0.0.2

- 파일 초기 세팅
  - env
  - gitignore에 env 추가
  - components 폴더 추가
  - lib 폴더 추가
  - page 정리
  - layout 정리
  - globals css 정리

#### 0.0.3

- globals.css 폰트 추가
  - 전역 폰트 설정
  - 테마에 폰트 추가

#### 0.0.4

- layout 크기 설정
  - 테일윈드 max-w와 max-w-screen 차이
    - max-w : 컨테이너의 최대 너비를 특정 값으로 설정
    - max-w-screen : 뷰포트(screen)의 너비에 따라 최대 너비를 설정
  - Tailwind CSS는 모바일 우선 디자인(Mobile-First Design)을 기본
    - 처음에 작은 화면(모바일) 크기에 맞춰 레이아웃을 개발한 후, 더 큰 화면(태블릿, 데스크톱 등)에 맞게 점진적으로 스타일을 추가하는 방식으로 작업
  - 브레이크 포인트
    - sm (small): min-width: 640px
    - md (medium): min-width: 768px
    - lg (large): min-width: 1024px
    - xl (extra-large): min-width: 1280px
    - 2xl (2x extra-large): min-width: 1536px

#### 0.0.5

- 스크롤바 숨기기 플러그인 설치 및 적용
  - npm i tailwind-scrollbar-hide 설치
  - plugins: [require("tailwind-scrollbar-hide")] 작성
  - scrollbar-hide 적용
    - 최외곽 layout - body
      - (max-w-md) h-[100dvh] overflow-y-hidden
    - 적용할 layout 또는 page - div
      - w-full h-[100dvh] overflow-y-auto overflow-x-hidden scrollbar-hide

### 2024.08.22

#### 0.0.6

- daisyui 설치
  - npm i -D daisyui@latest 설치
  - plugins: [require('daisyui')] 작성

#### 0.0.7

- layout 설정
  - header, main, footer 설정

#### 0.1.1

- Main Page
  - 챕터 버튼 컴포넌트 생성
- React 컴포넌트를 생성 코드 스니펫
  - rfc : 기본적인 함수형 컴포넌트 (이번 프로젝트 적용)
  - rafce : 화살표 함수형 컴포넌트 (요약된 표현, 최신 스타일)
  - import React from 'react'
    - React 17 이상부터는 해당 문구를 포함하고 있으므로 따로 작성할 필요 없음 = 생략 가능

#### 0.1.2

- Main Page
  - 챕터 버튼
    - redirect 함수는 Next.js의 클라이언트 사이드 라우팅에서 페이지를 이동할 때 사용하는 함수. 보통 서버 측에서 사용된다.
    - useRouter 훅을 클라이언트 측에서 사용하는 것이 일반적이다.
    - Link 태그로 제작 v
      - "use client" 생략 가능
  - 활성화, 비활성화에 따른 CSS 적동
