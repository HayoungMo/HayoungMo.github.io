# Mo Hayoung Portfolio

GitHub Pages용 정적 포트폴리오입니다.

## 구성

- `index.html`: 포트폴리오 메인 페이지
- `style.css`: 페이지 스타일
- `assets/`: 프로필 이미지와 제출용 PDF 파일

## GitHub Pages 배포 방법

1. GitHub에서 새 저장소를 만들거나 기존 포트폴리오 저장소를 엽니다.
2. 이 폴더 안의 파일을 저장소 루트에 업로드합니다.
3. 저장소의 `Settings` > `Pages`로 이동합니다.
4. `Build and deployment`에서 `Deploy from a branch`를 선택합니다.
5. Branch를 `main`, Folder를 `/root`로 선택하고 저장합니다.
6. 잠시 후 `https://계정명.github.io/저장소명/` 주소로 접속합니다.

## 수정할 때

- 문구는 `index.html`에서 수정합니다.
- 색상과 간격은 `style.css` 상단의 `:root` 색상 변수와 각 섹션 스타일에서 수정합니다.
- PDF를 교체할 때는 `assets` 폴더의 파일명을 유지하면 HTML 링크를 따로 수정하지 않아도 됩니다.
