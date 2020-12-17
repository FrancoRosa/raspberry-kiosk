// import pdf from '../pdf/prof.pdf';
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import useKey from '../js/useKey';
import { useParams } from 'react-router-dom';


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Pdf = ({ history, file }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  }

  const pageController = value => {
    switch (value) {
      case 'next':
        if (pageNumber < numPages) {
          return pageNumber + 1;
        }
        return pageNumber
      case 'prev':
        if (pageNumber > 1) {
          return pageNumber - 1;
        }
        return pageNumber
      case 'home':
        return 1
      default:
        return pageNumber;
    }
  }

  const returnToMenu = () => {
    history.push('/');
  }

  const prevPage = () => {
    document.querySelector('#prev').click()
  }
  
  const nextPage = () => {
    document.querySelector('#next').click()
  }
  
  const {id} = useParams();

  useKey("KeyO", returnToMenu);
  useKey("KeyA", prevPage);
  useKey("KeyD", nextPage);

  return (
    <div className="container">
      <Document
        file={`/pdf/${id}`}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p className="page-number">Page {pageNumber} of {numPages}</p>
      <div className="pdf-controls">
        <button 
          id="prev" 
          onClick={() => setPageNumber(pageController('prev'))}
        />
        <button 
          id="next" 
          onClick={() => setPageNumber(pageController('next'))}
        />
      </div>
    </div>
  );
}

export default Pdf;
