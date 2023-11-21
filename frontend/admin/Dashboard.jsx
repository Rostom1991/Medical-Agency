import axios from "axios";
import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();
function Dashboard() {
  const [pdf, setPdf] = useState(null);

  const getApplicantPdf = async () => {
    await axios
      .get("http://localhost:5000/apply/6558dbd2e6826053c96e143a")
      .then((response) => {
        console.log(response.data.resume.data);
        const pdfBlob = new Blob([response.data.resume.data], {
          type: "application/pdf",
        });
        const pdfUrl = URL.createObjectURL(pdfBlob);
        setPdf(pdfUrl);
      })
      .catch(() => console.log("error getting the resume!"));
  };

  useEffect(() => {
    getApplicantPdf();
  }, []);

  return (
    <div>
      {pdf && (
        <Document file={{ data: pdf }}>
          <Page loading="lazy" pageNumber={1} />
        </Document>
      )}
    </div>
  );
}

export default Dashboard;
