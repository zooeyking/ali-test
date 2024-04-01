import styles from "./page.module.css";
import CouponPanel from "@/components/couponPanel/couponPanel";
import { getPageData } from "@/lib/data";

const api = "https://systemjs.1688.com/krump/schema/1352.json";

export default async function Home() {
  const { list: couponList } = await getPageData(api);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h2 className={styles.title}>1688进货红包</h2>
        <div className={styles.listContainer}>
          {couponList.map((item, index) => (
            <CouponPanel key={index} {...item} />
          ))}
        </div>
      </div>
    </main>
  );
}
