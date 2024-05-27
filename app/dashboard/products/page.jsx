"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const recordsPerPage = 5;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const filteredData = searchTerm
    ? products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products;

  const totalPages = Math.ceil(filteredData.length / recordsPerPage);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredData.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const pageNumbers = [...Array(totalPages + 1).keys()].slice(1);

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

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search
          placeholder="Search for a product..."
          onSearch={setSearchTerm}
        />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td className={styles.heading}>Title</td>
            <td className={styles.heading}>Description</td>
            <td className={styles.heading}>Price</td>
            <td className={styles.heading}>Image</td>
            <td className={styles.heading}>Stock</td>
            <td className={styles.heading}>Action</td>
          </tr>
        </thead>
        <tbody>
          {currentRecords.map((product) => (
            <tr key={product.id}>
              <td>
                <div className={styles.product}>{product.title}</div>
              </td>
              <td>{product.description}</td>
              <td>${product.price}</td>
              <td>
                <Image
                  src={product.image}
                  alt=""
                  width={80}
                  height={80}
                  className={styles.productImage}
                />
              </td>
              <td>{product.category}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/${product.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action="">
                    <input type="hidden" name="id" value={product.id} />
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

export default ProductsPage;
