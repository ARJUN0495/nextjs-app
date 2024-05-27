import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";
import Image from "next/image";

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <Image
          src={"/noavatar.png"}
          alt=""
          width={"100"}
          height={40}
          className={styles.productImage}
        />
        <input type="text" placeholder="Title" name="title" required />
        <input type="text" placeholder="Price" name="price" required />
        <input type="text" placeholder="category" name="category" />

        <textarea
          required
          name="desc"
          id="desc"
          rows="3"
          placeholder="description"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProductPage;
