// components/DownloadPDF.js
import React from 'react';
import { jsPDF } from 'jspdf';

const DownloadPDF = () => {
  const downloadResume = () => {
    const doc = new jsPDF();
    doc.text('Nobita - Resume', 10, 10);
    doc.save('resume.pdf');
  };

  return (
    <div>
      <button onClick={downloadResume}>Download PDF</button>
    </div>
  );
};

export default DownloadPDF;
