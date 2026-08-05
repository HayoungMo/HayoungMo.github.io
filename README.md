# Mo Hayoung Portfolio

GitHub Pages로 배포하는 개인 포트폴리오 사이트입니다.

- Site: https://hayoungmo.github.io/
- About: https://hayoungmo.github.io/about.html
- Portfolio: https://hayoungmo.github.io/portfolio.html
- GitHub: https://github.com/HayoungMo

## 구성

- `index.html`: About과 Portfolio로 이동하는 대문 페이지
- `about.html`: 자기소개, 개발 방식, 기술 스택, 이력서 링크를 정리한 소개 페이지
- `portfolio.html`: Fullstack/AI 프로젝트 모음, 시연 영상, GitHub README, PDF 링크를 정리한 포트폴리오 페이지
- `style.css`: 공통 스타일
- `assets/`: 이력서, 프로젝트 PDF, 프로필 이미지

## 프로젝트 자료

- Fullstack: PlusHome
- AI Projects: Machine Learning, Deep Learning, LLM/RAG, Final Project

## 수정과 배포

로컬에서 파일을 수정한 뒤 아래 순서로 반영합니다.

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

`main` 브랜치에 push하면 GitHub Actions가 `index.html`, `about.html`, `portfolio.html`, `style.css`, `assets` 폴더를 GitHub Pages로 배포합니다.

## 영상 연결 방법

YouTube에 영상을 일부 공개로 업로드한 뒤 `portfolio.html`의 영상 영역을 iframe으로 교체합니다.

```html
<iframe
  class="video-frame"
  src="https://www.youtube.com/embed/영상ID"
  title="Project demo"
  allowfullscreen>
</iframe>
```

PDF 파일을 같은 이름으로 교체하면 HTML 링크는 그대로 두고 PDF 파일만 commit/push하면 됩니다.
