import React from "react";

function Pagination({ currentPage, pageCount, handlePageChange }) {
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className={"page-item " + (currentPage === 0 ? "disabled" : "")}>
                    <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
                </li>
                {[...Array(pageCount)].map((_, index) => (
                    <li key={index} className={"page-item " + (index === currentPage ? "active" : "")}>
                        <button className="page-link" onClick={() => handlePageChange(index)}>{index + 1}</button>
                    </li>
                ))}
                <li className={"page-item " + (currentPage === pageCount - 1 ? "disabled" : "")}>
                    <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>Next</button>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;
