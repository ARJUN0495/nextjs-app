"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from "./transactions.module.css";
import data from "./MOCK_DATA.json";

const Transactions = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(data.length / recordsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          {currentRecords.map((transaction) => (
            <tr key={transaction.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src="/noavatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {transaction.name}
                </div>
              </td>
              <td>
                <span
                  className={`${styles.status} ${
                    styles[transaction.status.toLowerCase()]
                  }`}
                >
                  {transaction.status}
                </span>
              </td>
              <td>{new Date(transaction.date).toLocaleDateString()}</td>
              <td>${transaction.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.pagination}>
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={styles.pageButton}
        >
          <FaArrowLeft />
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handleClick(index + 1)}
            className={`${styles.pageButton} ${
              currentPage === index + 1 ? styles.active : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={styles.pageButton}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Transactions;
