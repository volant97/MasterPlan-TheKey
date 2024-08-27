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

#### 0.1.3

- Header
  - 로고 클릭 시 메인페이지로 이동

### 2024.08.25

#### 0.1.4

- Main Page
  - 챕터 버튼
    - hover scale 설정

#### 0.2.1

- Chapter Page
  - test ver page 동기화
  - params 활용할 수 있도록 동적으로 변환
- Layout
  - p값 조정

#### 0.2.2

- Chapter Page
  - CheakBoard 컴포넌트화
  - 사건 파트 제작
  - 용의자 파트 제작
    - 레이아웃 디자인

#### 0.2.3

- Chapter Page
  - 장소 파트 제작
  - 무기 파트 제작
  - 단서 파트 제작
  - 진술 파트 제작
  - 정답 파트 제작
    - 정답 입력 input
    - 정답 제출 버튼

### 2024.08.26

#### 0.2.4

- Main Page
  - grid 정렬
- Chapter Page
  - gap 정렬
  - 정답 feedback 정렬
- CheckBoard
  - w값 %에서 tailwind 권장 값으로 변경
- CheckBtn
  - w,h 최소값 다시 부여

#### 0.3.1

- Chapter Page
  - 텍스트 데이터화하여 json 파일에 저장
  - import test
    - params로 id값 부여
    - type 설정

#### 0.3.2

- Chapter Page
  - 오타 수정
  - Tailwind w값 우선순위 설정
  - chapterJsonData에 checkboardAnswers 추가

#### 0.3.3

- ChapterJsonData
  - 데이터 최적화 및 type 재설정

#### 0.3.4

- Chapter Page
  - 사건 파트 컴포넌트화

#### 0.3.5

- Chapter Page
  - 용의자 파트 컴포넌트화

#### 0.3.6

- Chapter Page
  - 장소 파트 컴포넌트화

#### 0.3.7

- Chapter Page

  - 무기 파트 컴포넌트화
  - map 함수 return 문구 제거하고 간소화

#### 0.3.8

- Chapter Page
  - 단서 파트 컴포넌트화

#### 0.3.9

- Chapter Page
  - 진술 파트 컴포넌트화

#### 0.3.10

- Chapter Page
  - 정답 파트 컴포넌트화

### 2024.08.27

#### 0.3.11

- Chapter Page
  - 체크보드 파트 컴포넌트화
    - -채우기 버튼 제작
    - 모두 지우기 버튼 제작

#### 0.3.12

- Chapter Page
  - 난이도 표시
