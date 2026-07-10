import LinkButton from "./LinkButton";

function PdfDownloadButton({ href, ready = false }) {
  return (
    <LinkButton href={ready ? href : ""} icon="download" variant="primary" disabled={!ready}>
      {ready ? "PDF Portfolio" : "PDF 준비 중"}
    </LinkButton>
  );
}

export default PdfDownloadButton;
