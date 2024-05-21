import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const mockProduct = {
  id: 1,
  title: "Product 1",
  price: 10.99,
  stock: 100,
  color: "Red",
  size: "Large",
  cat: "kitchen",
  desc: "Description for Product 1",
};

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {mockProduct.title}
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="hidden" name="id" value={mockProduct.id} />
          <label>Title</label>
          <input type="text" name="title" placeholder={mockProduct.title} />
          <label>Price</label>
          <input type="number" name="price" placeholder={mockProduct.price} />
          <label>Stock</label>
          <input type="number" name="stock" placeholder={mockProduct.stock} />
          <label>Color</label>
          <input
            type="text"
            name="color"
            placeholder={mockProduct.color || "color"}
          />
          <label>Size</label>
          <textarea
            type="text"
            name="size"
            placeholder={mockProduct.size || "size"}
          />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder={mockProduct.desc}
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
