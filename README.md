# AIX102 X+AI 서비스 디자인 · 실전편

느좋카페(노트북 작업하기 좋은 카페를 지도에서 찾는 서비스)를 처음부터 배포까지
만들며 배우는 실전편 정적 사이트입니다. 원본 강의의 홈페이지 구조(상단 내비 ·
좌측 전체 목차 사이드바 · 본문 리딩 컬럼 · 이전/다음 내비)를 따르고,
`DESIGN.md`의 Supabase 스타일 디자인 시스템(에메랄드 + 화이트 캔버스, Inter 디스플레이,
모노 코드블록)을 적용했습니다.

## 커리큘럼 (10개 챕터)

| # | 챕터 | 레슨 |
|---|---|---|
| 01 | 인트로 | 실전편 개요 |
| 02 | **프로젝트 세팅하기** | 카카오맵 SDK 발급받기 · 실습 폴더 세팅하기 |
| 03 | 프로젝트 시작하기 | 데이터 읽기 · Scaffolding: 프로젝트 구조 잡기 · 지도가 그려지는 원리 · AI API 연결하기(OpenAI) |
| 04 | 코드 버전 관리하기 | Git · GitHub · 조금 더 공부하기 |
| 05 | 지도 데이터베이스 구축하기 | 스키마 · Supabase · 마이그레이션 |
| 06 | 느좋카페 가게 이미지 적용하기 | 파일 스토리지 |
| 07 | 사용자 기능 개발하기 | 인증·인가 · 카카오 로그인 · RLS · 북마크 |
| 08 | 배포하기 | 서버 배포 · Vercel · 커스텀 도메인 |
| 부록 A | 디자인 개선하기 | HTML/CSS · 바이브 디자인 · DESIGN.md |
| 부록 B | 에이전틱 워크플로우 | 계획·구현·검증·리팩터링·긴 작업·기록 |

> 02 프로젝트 세팅하기는 직접 추가한 Kakao SDK 발급/프로젝트 세팅 화면으로 새로 구성한 챕터입니다.
> 부록(디자인 개선하기·에이전틱 워크플로우)은 선택 과정으로, 홈·사이드바에서 접힌 상태로 표시됩니다.

## 구조

```
site/
├─ index.html              랜딩 (좌측 전체 목차 + 챕터 카드)
├─ VibeCafe.zip            실습 파일 (.env.local, data/cafes.json, docs/scope.md)
├─ lessons/<챕터>/<레슨>.html
├─ assets/
│  ├─ css/style.css        DESIGN.md 디자인 시스템
│  └─ images/…             레슨 이미지 (02 프로젝트 세팅: assets/images/project-setup/)
└─ .nojekyll
```

## 실습 파일 (VibeCafe.zip)

느좋카페 실습용 환경변수 템플릿(`.env.local`), 시드 데이터(`data/cafes.json`), 구현 범위 문서(`docs/scope.md`)가 들어 있습니다.
`.env.local`에는 발급받은 카카오맵 JavaScript 키만 채워 넣으면 됩니다.
랜딩 페이지 상단, 좌측 사이드바, 02장 레슨에서 다운로드할 수 있습니다.
GitHub Pages에 올리면 `https://<user>.github.io/<repo>/VibeCafe.zip` 로도 받을 수 있습니다.

## 로컬 미리보기

```bash
cd site
python3 -m http.server 8080   # → http://localhost:8080
```

## GitHub Pages 배포

1. `site/` 폴더의 내용을 저장소에 올립니다.
2. Settings → Pages → Source 를 해당 브랜치/폴더로 지정합니다.
3. 모든 경로(이미지·CSS·링크·zip)가 상대 경로라 프로젝트 페이지에서도 그대로 동작합니다.

## 다시 빌드하기

페이지 구조·디자인·챕터를 수정하려면 프로젝트 루트에서:

```bash
python3 _build/build.py
```

## 출처

학습 목적의 복제본입니다. 원본 콘텐츠·이미지의 저작권은 원저작자(grabity.me)에게 있습니다.
