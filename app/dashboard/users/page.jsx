"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Link from "next/link";
import data from "./MOCK_USERS.json";

const UsersPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const recordsPerPage = 5;

  useEffect(() => {
    const filtered = data.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  }, [searchTerm]);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredData.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const totalPages = Math.ceil(filteredData.length / recordsPerPage);
  const pageNumbers = [...Array(totalPages + 1).keys()].slice(1);

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
      <div className={styles.top}>
        <Search placeholder="Search for a user..." onSearch={setSearchTerm} />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td className={styles.heading}>Name</td>
            <td className={styles.heading}>Email</td>
            <td className={styles.heading}>Created At</td>
            <td className={styles.heading}>Role</td>
            <td className={styles.heading}>Status</td>
            <td className={styles.heading}>Action</td>
          </tr>
        </thead>
        <tbody>
          {currentRecords.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src="/noavatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {user.name}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{new Date(user.created).toLocaleDateString()}</td>
              <td>{user.Role}</td>
              <td>{user.status}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form>
                    <input type="hidden" name="id" value={user.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
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
        {pageNumbers.map((pageNumber) => {
          return (
            <button
              key={pageNumber}
              onClick={() => handleClick(pageNumber)}
              className={`${styles.pageButton} ${
                currentPage === pageNumber ? styles.active : ""
              }`}
            >
              {pageNumber}
            </button>
          );
        })}
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

export default UsersPage;
