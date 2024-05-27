"use client";
import data from "@/app/dashboard/users/MOCK_USERS.json";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";

const UserDetailsPage = () => {
  const pathname = usePathname();
  const router = useRouter();

  const userId = parseInt(pathname.split("/").pop());
  const user = data.find((user) => user.id === userId);

  if (!user) {
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
            <Image src={"/user.webp"} alt="" fill />
          </div>
          {user.name}
        </div>
        <div className={styles.formContainer}>
          <form action="" className={styles.form}>
            <input type="hidden" name="id" value={user.id} />
            <label>Name</label>
            <input type="text" name="name" value={user.name} />
            <label>Email</label>
            <input type="email" name="email" value={user.email} />
            <label>Created</label>
            <input type="text" name="date" value={user.created} />
            <label>Role</label>
            <select name="isAdmin" id="isAdmin">
              <option value={true} selected={user.isAdmin}>
                Admin
              </option>
              <option value={false} selected={!user.isAdmin}>
                Client
              </option>
            </select>
            <label>Status</label>
            <select name="isActive" id="isActive">
              <option value={true} selected={user.isActive}>
                Active
              </option>
              <option value={false} selected={!user.isActive}>
                Pending
              </option>
            </select>
            <button>Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;
