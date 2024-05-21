import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const mockUser = {
  id: 1,
  username: "JohnDoe",
  email: "johndoe@example.com",
  phone: "1234567890",
  address: "123 Main St, City",
  isAdmin: false,
  isActive: true,
};

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={"/noavatar.png"} alt="" fill />
        </div>
        {mockUser.username}
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="hidden" name="id" value={mockUser.id} />
          <label>Username</label>
          <input
            type="text"
            name="mockusername"
            placeholder={mockUser.username}
          />
          <label>Email</label>
          <input type="email" name="email" placeholder={mockUser.email} />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder={mockUser.phone} />
          <label>Address</label>
          <textarea type="text" name="address" placeholder={mockUser.address} />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected={mockUser.isAdmin}>
              Yes
            </option>
            <option value={false} selected={!mockUser.isAdmin}>
              No
            </option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true} selected={mockUser.isActive}>
              Yes
            </option>
            <option value={false} selected={!mockUser.isActive}>
              No
            </option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
