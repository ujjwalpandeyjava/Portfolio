import React, { useState } from "react";
import { FiDownload } from "react-icons/fi";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import style from './PDFViewer.module.css';
import pdfFile from '../images/Resume_CV/ujjwal_Pandey_C_V.pdf';

// https://github.com/wojtekmaj/react-pdf#support-for-annotations
// https://drive.google.com/file/d/1pBi221O_ccRc2Eg9UUKaUZt_yLIzjQV1/view?usp=sharing

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	"pdfjs-dist/build/pdf.worker.min.js",
	import.meta.url
).toString();

export default function PDFViewer() {
	// const fileUrl = 'https://drive.google.com/uc?id=1pBi221O_ccRc2Eg9UUKaUZt_yLIzjQV1';
	const [numPages, setNumPages] = useState(1);
	const [pageNumber, setPageNumber] = useState(1);
	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};
	const goToPrevPage = () => {
		setPageNumber(prevPageNumber => Math.max(prevPageNumber - 1, 1));
	};
	const goToNextPage = () => {
		setPageNumber(prevPageNumber =>
			Math.min(prevPageNumber + 1, numPages)
		);
	};
	return (
		<div className={style.pdfSection}>
			<div className={style.heading}>Ujjwal Pandey Resume</div>
			<PDF file={pdfFile} onDocumentLoadSuccess={onDocumentLoadSuccess} pageNumber={pageNumber} /> {/* if file in public folder*/}
			{/* <PDF file="./ujjwal_Pandey_C_V.pdf" /> */}
			<div className={style.pdfPageNavCont}>
				<nav className={style.pdfPageNav}>
					<button onClick={goToPrevPage}><MdNavigateBefore /> Prev</button>
					<span>Page {pageNumber} of {numPages}</span>
					<button onClick={goToNextPage}>Next <MdNavigateNext /></button>
				</nav>
				<div className={style.downloadCV}>
					<a className={style.downloadCV} href={pdfFile} download="_Ujjwal-full_stack-C.V.pdf">Download C.V</a><FiDownload />
				</div>
			</div>
		</div>
	);
};

function PDF({ file, onDocumentLoadSuccess, pageNumber }) {
	return (
		<div className={style.page}>
			<div className={style.doc} >
				<Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
					<Page pageNumber={pageNumber} renderTextLayer={false} />
				</Document>
			</div>
		</div>
	);
};