import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomModal from "./Modal";
import Pagination from "./Pagination";
import Table from "./Table";
import "./App.css";

function App() {
  const [val, setVal] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedRow, setSelectedRow] = useState(null); // To track the selected row
  const [showModal, setShowModal] = useState(false); // To control modal visibility
  const itemsPerPage = 10; // Pagination Count

  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [selectedCharacteristics, setSelectedCharacteristics] = useState("");


  const fetchUsers = async () => {
    try {
      const response = await fetch("https://api.potterdb.com/v1/potions");
      const data1 = await response.json();
      setVal(data1.data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);


  // Search & Filter
  const filteredData = val.filter(
    (dat) =>
      dat.attributes.name.toLowerCase().includes(searchName.toLowerCase()) &&
      (selectedDifficulty === "" ||
        dat.attributes.difficulty === selectedDifficulty) &&
      (selectedCharacteristics === "" ||
        dat.attributes.characteristics === selectedCharacteristics)
  );

  const handleDifficultyChange = (event) => {
    setSelectedDifficulty(event.target.value);
  };

  const handleCharacteristicsChange = (event) => {
    setSelectedCharacteristics(event.target.value);
  };


  //Pagination
  const startIndex = currentPage * itemsPerPage;
  const endIndex = (currentPage + 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  // Modal with row details
  const handleRowClick = (row) => {
    setSelectedRow(row);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          value={searchName}
          placeholder="Search..."
          onChange={(e) => setSearchName(e.target.value)}
        />
        
        <label>
          DIFFICULTY :
          <select
            className="filter-dropdown"
            value={selectedDifficulty}
            onChange={handleDifficultyChange}
          >
            <option value="">All</option>
            <option value="Beginner">Beginner</option>
            <option value="Moderate">Moderate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </label>

        <label>
          CHARACTERISTICS :
          <select
            className="filter-dropdown"
            value={selectedCharacteristics}
            onChange={handleCharacteristicsChange}
          >
            <option value="">All</option>
            <option value="Red in colour">Red</option>
            <option value="Green in colour">Green</option>
            <option value="Blue in colour">Blue</option>
          </select>
        </label>
      </div>

      <Table data={paginatedData} handleRowClick={handleRowClick} />
      <CustomModal
        show={showModal}
        handleClose={handleCloseModal}
        selectedRow={selectedRow}
      />

      <Pagination
        className="pagination"
        currentPage={currentPage}
        pageCount={pageCount}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
