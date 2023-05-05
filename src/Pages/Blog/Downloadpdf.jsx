import jsPDF from "jspdf";
import React from "react";
import html2canvas from "html2canvas";

const Downloadpdf = () => {
  const handleDownload = () => {
    const input = document.getElementById("component-to-pdf");
    html2canvas(input, { scale: 0.59, top: 500 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("blogs.pdf");
    });
  };

  return (
    <button className="btn btn-primary mt-32 md:mt-0 " onClick={handleDownload}>
      Download Blogs PDF
    </button>
  );
};

export default Downloadpdf;
