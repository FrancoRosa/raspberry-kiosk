import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { useParams } from 'react-router-dom';
import useKey from '../js/useKey';

pdfjs.GlobalWorkerOptions.workerSrc = '/js/pdf.worker.js';

const Pdf = ({ history }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [zoom, setZoom] = useState(1);

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

  const returnToMenuOrZoomOut = () => {
    if (zoom === 1) history.push('/pdfs');
    setZoom(zoom-1);
  }

  const zoomInPage = () => {
    if (zoom < 4)
    setZoom(zoom+1);
  }

  const prevPage = () => {
    document.querySelector('#prev').click()
  }
  
  const nextPage = () => {
    document.querySelector('#next').click()
  }

  const scrollUp = () => {
    if (zoom > 1) {
      let onZoom = document.querySelector('.document-status');
      onZoom.scrollBy({
        top: -100,
        left: 0,
        behavior: 'smooth'
      })
    } else {
      prevPage();
    }
  }
  
  const scrollDown = () => {
    if (zoom > 1) {
      let onZoom = document.querySelector('.document-status');
      onZoom.scrollBy({
        top: +100,
        left: 0,
        behavior: 'smooth'
      })
    } else {
      nextPage();
    }
  }
  
  const debug = () => {
    let x = document.querySelector('.document-status');
    console.log('height:', x.scrollHeight)
    console.log('width:', x.scrollWidth)
  }

  const {id} = useParams();

  useKey("KeyO", returnToMenuOrZoomOut);
  useKey("KeyA", prevPage);
  useKey("KeyD", nextPage);
  useKey("KeyW", scrollUp);
  useKey("KeyS", scrollDown);
  useKey("KeyP", zoomInPage);

  return (
    <div className="container">
      <Document
        file={`/pdf/${id}`}
        onLoadSuccess={onDocumentLoadSuccess}
        className="document-status"
      >
        <Page pageNumber={pageNumber} height={480} scale={zoom} onClick={debug} className="document_page"/>
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
