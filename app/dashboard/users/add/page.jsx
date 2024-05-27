import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="name" name="name" required />
        <input type="email" placeholder="email" name="email" required />
        <input type="phone" placeholder="created" name="created" />
        <input type="phone" placeholder="role" name="role" />
        <input type="phone" placeholder="status" name="status" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUserPage;
