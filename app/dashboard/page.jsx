import Card from "../ui/dashboard/card/card";
import Chart from "../ui/dashboard/chart/chart";
import styles from "../ui/dashboard/dashboard.module.css";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/dashboard/transactions/transactions";

const cards = [
  {
    id: 1,
    title: "Card 1",
    number: 100,
    change: 10,
  },
  {
    id: 2,
    title: "Card 2",
    number: 200,
    change: 55,
  },
  {
    id: 3,
    title: "Card 3",
    number: 300,
    change: 1,
  },
];

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
