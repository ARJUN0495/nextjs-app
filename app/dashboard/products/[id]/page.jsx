"use client";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

const SingleProductPage = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const productId = parseInt(pathname.split("/").pop());
  const product = products.find((product) => product.id === productId);

  if (!product) {
    return <div>User not found</div>;
  }
  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <button onClick={handleGoBack} className={styles.backButton}>
          <FaArrowLeft /> Back
        </button>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.infoContainer}>
          <div className={styles.imgContainer}>
            <Image src={product.image} alt="" fill />
          </div>
          {product.title}
        </div>
        <div className={styles.formContainer}>
          <form action="" className={styles.form}>
            <input type="hidden" name="id" value={product.id} />
            <label>Title</label>
            <input type="text" name="title" value={product.title} />
            <label>Price</label>
            <input type="number" name="price" value={product.price} />
            <label>Stock</label>
            <input type="text" name="stock" value={product.category} />
            <label>Description</label>
            <textarea type="text" name="size" value={product.description} />
            <button>Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
