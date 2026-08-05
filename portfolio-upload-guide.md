# 포트폴리오 PDF/영상 업로드 가이드

이 가이드는 완성한 프로젝트 PDF와 시연 영상을 GitHub Pages 포트폴리오에 연결할 때 사용하는 기준입니다.

## 결론

- PDF는 포트폴리오 저장소 안의 `assets` 폴더에 넣고 `index.html`에서 링크를 연결한다.
- 영상은 YouTube 일부 공개 업로드 후 링크로 연결하는 방식을 가장 추천한다.
- 이 컴퓨터를 쓰지 않아도 GitHub Pages 사이트는 계속 접속된다. 사이트는 내 PC가 아니라 GitHub에 올라간 저장소를 기준으로 배포된다.
- 다른 컴퓨터에서 수정하려면 GitHub 저장소를 다시 clone하거나 GitHub 웹에서 파일을 업로드하면 된다.

## 추천 파일 구조

현재 저장소:

```text
C:\Users\human-05\Desktop\Portfolio\HayoungMo.github.io
```

추천 구조:

```text
HayoungMo.github.io/
  index.html
  style.css
  assets/
    resume-backend.pdf
    plushome-full.pdf
    plushome-mini.pdf
    ml-summary.pdf
    dl-summary.pdf
    llm-rag-summary.pdf
    videos/
      plushome-demo.mp4
      ml-demo.mp4
      dl-demo.mp4
      llm-rag-demo.mp4
    thumbs/
      plushome-thumb.png
      ml-thumb.png
      dl-thumb.png
      llm-rag-thumb.png
```

폴더를 더 깔끔하게 나누고 싶으면 `assets/pdf/`, `assets/videos/`, `assets/thumbs/`로 분리해도 됩니다. 다만 이미 연결된 파일은 현재 `./assets/파일명.pdf` 형식이므로, 폴더를 바꾸면 `index.html`의 링크도 같이 바꿔야 합니다.

## 파일 이름 규칙

파일명은 영어 소문자, 숫자, 하이픈만 쓰는 것을 추천합니다.

좋은 예:

```text
ml-summary.pdf
dl-summary.pdf
llm-rag-summary.pdf
plushome-demo.mp4
```

피하는 예:

```text
모하영 머신러닝 개인 프로젝트.pdf
LLM 최종(진짜최종).pdf
deep learning demo video.mp4
```

한글 파일명도 동작은 할 수 있지만, 웹 주소에서 인코딩이 길어지고 링크가 깨졌는지 확인하기 어려워집니다.

## PDF 올리는 방법

1. 완성한 PDF 파일명을 정리한다.

```text
머신러닝 요약본 -> ml-summary.pdf
딥러닝 요약본 -> dl-summary.pdf
LLM/RAG 요약본 -> llm-rag-summary.pdf
```

2. PDF를 아래 폴더에 복사한다.

```text
C:\Users\human-05\Desktop\Portfolio\HayoungMo.github.io\assets
```

3. `index.html`에서 해당 프로젝트 카드의 버튼을 PDF 링크로 바꾼다.

예시:

```html
<a href="./assets/ml-summary.pdf" target="_blank" rel="noreferrer">Mini PDF</a>
```

4. 문서 모음 영역에도 추가하고 싶으면 `Documents` 섹션에 링크를 하나 더 추가한다.

예시:

```html
<a href="./assets/ml-summary.pdf" target="_blank" rel="noreferrer">Machine Learning 요약 PDF</a>
<a href="./assets/dl-summary.pdf" target="_blank" rel="noreferrer">Deep Learning 요약 PDF</a>
<a href="./assets/llm-rag-summary.pdf" target="_blank" rel="noreferrer">LLM/RAG 요약 PDF</a>
```

## 영상 올리는 방법

### 1순위: YouTube 일부 공개

가장 추천하는 방식입니다.

1. YouTube에 영상을 업로드한다.
2. 공개 범위는 `일부 공개`로 설정한다.
3. 영상 링크를 복사한다.
4. `index.html`의 프로젝트 카드에 영상 버튼을 연결한다.

예시:

```html
<a href="https://youtu.be/영상ID" target="_blank" rel="noreferrer">Demo Video</a>
```

장점:

- GitHub 저장소 용량이 커지지 않는다.
- 영상 재생이 빠르고 안정적이다.
- 면접관이 브라우저에서 바로 볼 수 있다.

### 2순위: Google Drive 링크

YouTube에 올리기 부담스러우면 Google Drive도 가능합니다.

1. Google Drive에 영상을 업로드한다.
2. 공유 설정을 `링크가 있는 모든 사용자 보기 가능`으로 바꾼다.
3. 공유 링크를 `index.html` 버튼에 연결한다.

예시:

```html
<a href="https://drive.google.com/file/d/파일ID/view" target="_blank" rel="noreferrer">Demo Video</a>
```

주의할 점:

- 공유 권한을 꼭 확인해야 한다.
- 회사나 학교 계정 Drive는 외부 접근이 막힐 수 있다.

### 3순위: GitHub Pages에 mp4 직접 올리기

영상이 아주 짧고 용량이 작을 때만 사용합니다.

추천 기준:

- 20MB 이하: 가능
- 20MB 이상: YouTube 또는 Drive 추천
- 50MB 이상: GitHub에서 경고가 뜰 수 있으므로 비추천
- 100MB 초과: 일반 Git 저장소에 올릴 수 없음

직접 올릴 경우:

```text
assets/videos/ml-demo.mp4
```

HTML 링크 예시:

```html
<a href="./assets/videos/ml-demo.mp4" target="_blank" rel="noreferrer">Demo Video</a>
```

GitHub Pages에서는 Git LFS 파일을 사용할 수 없으므로, 큰 영상 때문에 Git LFS를 쓰는 방식은 피합니다.

## 프로젝트별 연결 추천

PlusHome:

- GitHub: 이미 연결
- Full PDF: `./assets/plushome-full.pdf`
- Mini PDF: `./assets/plushome-mini.pdf`
- Video: YouTube 일부 공개 링크 추천

Machine Learning:

- GitHub: `https://github.com/HayoungMo/ml_mohayoung_project`
- Mini PDF: `./assets/ml-summary.pdf`
- Video: 선택 사항, 모델 학습 결과나 Streamlit/Notebook 실행 화면이 있으면 연결

Deep Learning:

- GitHub: 딥러닝 저장소가 있으면 연결
- Mini PDF: `./assets/dl-summary.pdf`
- Video: 이미지 업로드, 예측 결과, confidence 출력 흐름을 1분 내외로 촬영

LLM/RAG:

- GitHub: `https://github.com/HayoungMo/llm_mohayoung_project`
- Mini PDF: `./assets/llm-rag-summary.pdf`
- Video: 이미지 업로드, 카테고리 예측, 질문 입력, RAG 근거 문서, 답변 출력 흐름을 촬영

## 올린 뒤 배포 순서

로컬에서 수정한 경우:

```bash
git status
git add index.html style.css assets portfolio-upload-guide.md
git commit -m "Add portfolio PDFs and demo links"
git push origin main
```

그 다음 GitHub에서 확인:

1. `HayoungMo.github.io` 저장소로 이동
2. `Actions` 탭 또는 `Settings > Pages` 확인
3. 배포가 끝난 뒤 GitHub Pages 주소 접속

GitHub Pages는 보통 push 후 잠시 뒤 자동 반영됩니다.

## 다른 컴퓨터에서 수정하는 방법

다른 컴퓨터에서도 문제 없습니다.

처음 한 번:

```bash
git clone https://github.com/HayoungMo/HayoungMo.github.io.git
cd HayoungMo.github.io
npm install
```

수정할 때:

```bash
git pull origin main
```

파일 수정 후:

```bash
git add .
git commit -m "Update portfolio materials"
git push origin main
```

GitHub 웹에서 직접 업로드할 수도 있습니다. 단, 브라우저로 올리는 파일은 25MiB 이하만 가능하므로 큰 영상은 웹 업로드에 맞지 않습니다.

## 확인 체크리스트

- PDF 파일명이 영어 소문자와 하이픈으로 정리되어 있는가
- `assets` 폴더에 PDF가 들어갔는가
- 영상은 YouTube 일부 공개 또는 Drive 링크로 연결했는가
- `index.html`의 `href` 경로가 실제 파일명과 같은가
- GitHub에 push했는가
- Pages 배포가 끝난 뒤 실제 사이트에서 버튼을 눌러봤는가
- PDF 안에 전화번호, 주소, API 키, 민감한 코드, 비공개 데이터가 들어가지 않았는가

## 참고 공식 문서

- GitHub Pages는 지정한 브랜치와 폴더에 push된 내용을 기준으로 배포됩니다: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- GitHub Pages 사이트와 저장소에는 용량 제한이 있습니다: https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
- GitHub 일반 저장소는 50MiB 초과 파일에 경고가 뜨고, 100MiB 초과 파일은 차단됩니다: https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github
- Git LFS는 GitHub Pages 사이트에서 사용할 수 없습니다: https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-git-large-file-storage
