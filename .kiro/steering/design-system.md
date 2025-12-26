---
inclusion: always
---
<!------------------------------------------------------------------------------------
   Add rules to this file or a short description and have Kiro refine them for you.
   
   Learn about inclusion modes: https://kiro.dev/docs/steering/#inclusion-modes
-------------------------------------------------------------------------------------> 

# 디자인 시스템 가이드

이 문서는 모든 웹 프로젝트에서 일관된 UI/UX 품질을 유지하기 위한 공통 디자인 시스템입니다.
Kiro 프로젝트에서 Antigravity 수준의 퀄리티를 구현하기 위해 사용합니다.

---

## 1. 색상 시스템

### 1.1 기본 색상 팔레트

```css
:root {
  /* 배경색 */
  --color-bg: #0a0a0f;              /* 메인 배경 */
  --color-bg-secondary: #12121a;    /* 보조 배경 */
  --color-bg-tertiary: #1a1a26;     /* 3차 배경 */
  
  /* 텍스트색 */
  --color-text: #e8e8f0;            /* 주요 텍스트 */
  --color-text-secondary: #a0a0b8;  /* 보조 텍스트 */
  --color-text-muted: #6b6b85;      /* 약화된 텍스트 */
  
  /* 브랜드 컬러 */
  --color-primary: #7c3aed;         /* 주요 브랜드 (보라색) */
  --color-primary-light: #a78bfa;   /* 밝은 보라색 */
  --color-secondary: #3b82f6;       /* 보조 브랜드 (파란색) */
  --color-accent: #ec4899;          /* 악센트 (핑크) */
  --color-success: #10b981;         /* 성공 상태 (초록색) */
  
  /* 그라데이션 */
  --gradient-primary: linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%);
  --gradient-secondary: linear-gradient(135deg, #ec4899 0%, #f97316 100%);
  --gradient-glow: radial-gradient(circle at center, rgba(124, 58, 237, 0.3) 0%, transparent 70%);
}
```

### 1.2 색상 사용 규칙

| 요소 | 색상 | 용도 |
|------|------|------|
| 배경 | `--color-bg` | 페이지 메인 배경 |
| 카드/섹션 | `--color-bg-secondary` | 컨테이너 배경 |
| 강조 영역 | `--color-bg-tertiary` | 강조된 섹션 배경 |
| 주요 텍스트 | `--color-text` | 제목, 본문 |
| 보조 텍스트 | `--color-text-secondary` | 설명, 부제목 |
| 약화 텍스트 | `--color-text-muted` | 메타 정보, 비활성 |
| 버튼/링크 | `--color-primary` | CTA, 주요 인터랙션 |
| 호버 상태 | `--color-primary-light` | 호버 피드백 |
| 강조 요소 | `--color-accent` | 특별한 강조 |

---

## 2. 타이포그래피

### 2.1 폰트 설정

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Noto+Sans+KR:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

```css
body {
  font-family: 'Inter', 'Noto Sans KR', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

### 2.2 타이포그래피 스케일

| 용도 | 크기 | 가중치 | 줄높이 | 사용처 |
|------|------|--------|--------|--------|
| 메인 제목 | 64px | 800 | 1.1 | 히어로 섹션 |
| 섹션 제목 | 48px | 800 | 1.2 | 섹션 헤더 |
| 카드 제목 | 24px | 700 | 1.3 | 카드, 서브섹션 |
| 본문 | 18px | 400-500 | 1.6 | 설명 텍스트 |
| 기본 텍스트 | 16px | 400 | 1.6 | 일반 텍스트 |
| 작은 텍스트 | 14px | 500 | 1.5 | 라벨, 태그 |
| 매우 작은 텍스트 | 12px | 600 | 1.4 | 메타 정보 |

### 2.3 타이포그래피 CSS 클래스

```css
/* 제목 */
.heading-lg {
  font-size: 64px;
  font-weight: 800;
  line-height: 1.1;
}

.heading-md {
  font-size: 48px;
  font-weight: 800;
  line-height: 1.2;
}

.heading-sm {
  font-size: 24px;
  font-weight: 700;
  line-height: 1.3;
}

/* 본문 */
.body-lg {
  font-size: 18px;
  font-weight: 400;
  line-height: 1.6;
}

.body-md {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
}

.body-sm {
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
}

/* 라벨 */
.label {
  font-size: 12px;
  font-weight: 600;
  line-height: 1.4;
  text-transform: uppercase;
  letter-spacing: 1.5px;
}
```

---

## 3. 간격 시스템 (Spacing)

### 3.1 간격 스케일

```css
:root {
  /* 기본 간격 단위 (8px 기반) */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 80px;
  --space-5xl: 120px;
}
```

### 3.2 간격 사용 규칙

| 간격 | 크기 | 용도 |
|------|------|------|
| xs | 4px | 아이콘 간격, 매우 작은 요소 |
| sm | 8px | 버튼 내부 패딩, 작은 간격 |
| md | 16px | 기본 패딩, 요소 간 간격 |
| lg | 24px | 섹션 내부 패딩 |
| xl | 32px | 큰 요소 간 간격 |
| 2xl | 48px | 섹션 간 간격 |
| 3xl | 64px | 주요 섹션 간 간격 |
| 4xl | 80px | 큰 섹션 간 간격 |
| 5xl | 120px | 섹션 패딩 (위/아래) |

### 3.3 일반적인 패딩/마진 패턴

```css
/* 섹션 */
.section {
  padding: 120px 0;  /* 위/아래: 5xl, 좌/우: 0 */
}

/* 컨테이너 */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;  /* 좌/우: lg */
}

/* 카드 */
.card {
  padding: 40px;  /* 약 2.5xl */
}

/* 버튼 */
.btn {
  padding: 14px 28px;  /* 위/아래: md, 좌/우: xl */
}
```

---

## 4. 그림자 및 깊이 (Shadows)

### 4.1 그림자 정의

```css
:root {
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.4);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.5);
  --shadow-glow: 0 0 40px rgba(124, 58, 237, 0.4);
}
```

### 4.2 그림자 사용 규칙

| 그림자 | 용도 |
|--------|------|
| `--shadow-sm` | 작은 요소 (버튼, 배지) |
| `--shadow-md` | 중간 요소 (카드, 드롭다운) |
| `--shadow-lg` | 큰 요소 (모달, 팝오버) |
| `--shadow-glow` | 강조 요소 (CTA 버튼, 특별 요소) |

---

## 5. 테두리 반경 (Border Radius)

### 5.1 반경 스케일

```css
:root {
  --radius-sm: 6px;      /* 작은 요소 */
  --radius-md: 12px;     /* 기본 (카드, 버튼) */
  --radius-lg: 24px;     /* 큰 요소 */
  --radius-full: 9999px; /* 완전 원형 */
}
```

### 5.2 사용 규칙

| 반경 | 용도 |
|------|------|
| 6px | 작은 배지, 아이콘 배경 |
| 12px | 카드, 버튼, 입력 필드 |
| 24px | 큰 카드, 모달 |
| 9999px | 완전 원형 (아바타, 배지) |

---

## 6. 애니메이션 및 트랜지션

### 6.1 타이밍 함수

```css
:root {
  /* 기본 타이밍 함수 */
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  
  /* 트랜지션 */
  --transition: all 0.3s var(--ease-default);
  --transition-fast: all 0.15s var(--ease-default);
  --transition-slow: all 0.6s var(--ease-default);
}
```

### 6.2 애니메이션 지속 시간

| 지속 시간 | 용도 |
|----------|------|
| 0.15s | 빠른 피드백 (호버, 포커스) |
| 0.3s | 기본 트랜지션 |
| 0.6s | 섹션 진입 애니메이션 |
| 3s | 루프 애니메이션 (펄스, 플로팅) |
| 6s+ | 배경 애니메이션 |

### 6.3 일반적인 애니메이션 패턴

```css
/* 페이드 인 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* 위에서 아래로 페이드 인 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 펄스 */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.2);
  }
}

/* 플로팅 */
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* 호버 상태 */
.interactive-element {
  transition: var(--transition);
}

.interactive-element:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-glow);
}
```

---

## 7. 반응형 디자인

### 7.1 브레이크포인트

```css
:root {
  /* 모바일 우선 접근 */
  --breakpoint-sm: 640px;   /* 모바일 */
  --breakpoint-md: 768px;   /* 태블릿 */
  --breakpoint-lg: 968px;   /* 데스크톱 */
  --breakpoint-xl: 1200px;  /* 큰 데스크톱 */
}
```

### 7.2 미디어 쿼리 패턴

```css
/* 모바일 (기본) */
.element {
  font-size: 16px;
  padding: 16px;
}

/* 태블릿 이상 */
@media (min-width: 768px) {
  .element {
    font-size: 18px;
    padding: 24px;
  }
}

/* 데스크톱 이상 */
@media (min-width: 968px) {
  .element {
    font-size: 20px;
    padding: 32px;
  }
}

/* 큰 데스크톱 이상 */
@media (min-width: 1200px) {
  .element {
    font-size: 24px;
    padding: 40px;
  }
}
```

### 7.3 반응형 레이아웃 패턴

```css
/* 그리드 레이아웃 */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

@media (min-width: 968px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
}

/* Flexbox 레이아웃 */
.flex-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

@media (min-width: 968px) {
  .flex-container {
    flex-direction: row;
    gap: 32px;
  }
}
```

---

## 8. 컴포넌트 패턴

### 8.1 버튼

```css
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  transition: var(--transition);
  cursor: pointer;
  border: none;
  font-size: 16px;
}

/* Primary 버튼 */
.btn-primary {
  background: var(--gradient-primary);
  color: white;
  box-shadow: var(--shadow-glow);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 50px rgba(124, 58, 237, 0.6);
}

/* Secondary 버튼 */
.btn-secondary {
  background: rgba(255, 255, 255, 0.05);
  color: var(--color-text);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
}
```

### 8.2 카드

```css
.card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 40px;
  transition: var(--transition);
  backdrop-filter: blur(10px);
}

.card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(124, 58, 237, 0.3);
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}
```

### 8.3 배지

```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(124, 58, 237, 0.1);
  border: 1px solid rgba(124, 58, 237, 0.3);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  color: var(--color-primary-light);
}
```

---

## 9. 접근성 (Accessibility)

### 9.1 색상 대비

- 텍스트와 배경의 명도 대비: 최소 4.5:1 (WCAG AA)
- 큰 텍스트: 최소 3:1 대비

### 9.2 포커스 상태

```css
/* 모든 인터랙티브 요소에 포커스 상태 제공 */
button:focus,
a:focus,
input:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

### 9.3 모션 감소

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 10. 성능 최적화

### 10.1 CSS 애니메이션 최적화

```css
/* GPU 가속 활성화 */
.animated-element {
  will-change: transform;
  transform: translateZ(0);
}

/* 애니메이션 완료 후 제거 */
.animated-element {
  animation: fadeIn 0.6s ease-out forwards;
}
```

### 10.2 이미지 최적화

- 웹 포맷 사용 (WebP, AVIF)
- 반응형 이미지 (`srcset` 사용)
- 지연 로딩 (`loading="lazy"`)

### 10.3 폰트 최적화

```css
/* 폰트 로딩 최적화 */
@font-face {
  font-family: 'Inter';
  font-display: swap;
  /* ... */
}
```

---

## 11. 사용 예시

### 11.1 기본 페이지 구조

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Noto+Sans+KR:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="design-system.css">
</head>
<body>
  <section class="section">
    <div class="container">
      <h1 class="heading-md">제목</h1>
      <p class="body-lg">본문 텍스트</p>
      <button class="btn btn-primary">버튼</button>
    </div>
  </section>
</body>
</html>
```

### 11.2 CSS 초기화 파일

```css
/* design-system.css */

:root {
  /* 색상 */
  --color-bg: #0a0a0f;
  --color-text: #e8e8f0;
  --color-primary: #7c3aed;
  
  /* 간격 */
  --space-md: 16px;
  --space-lg: 24px;
  
  /* 애니메이션 */
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', 'Noto Sans KR', -apple-system, BlinkMacSystemFont, sans-serif;
  background: var(--color-bg);
  color: var(--color-text);
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-lg);
}

.section {
  padding: 120px 0;
}
```

---

## 12. 체크리스트

새로운 프로젝트를 시작할 때 확인사항:

- [ ] 색상 시스템 CSS 변수 정의
- [ ] 타이포그래피 폰트 로드
- [ ] 간격 시스템 CSS 변수 정의
- [ ] 기본 리셋 CSS 작성
- [ ] 반응형 브레이크포인트 설정
- [ ] 애니메이션 타이밍 함수 정의
- [ ] 접근성 요구사항 확인
- [ ] 성능 최적화 설정
- [ ] 브라우저 호환성 테스트

---

## 13. 참고 자료

- [WCAG 2.1 접근성 가이드](https://www.w3.org/WAI/WCAG21/quickref/)
- [CSS 변수 (Custom Properties)](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [CSS Grid 레이아웃](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [Web Performance](https://web.dev/performance/)

---

**마지막 업데이트**: 2024년 12월
**버전**: 1.0