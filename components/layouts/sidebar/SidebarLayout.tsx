import Link from "next/link";
import styles from "./SidebarLayout.module.css";

export interface ISidebarLayout {}

const SidebarLayout: React.FC<ISidebarLayout> = () => {
  return (
    <nav className={styles.nav}>
      <input type="text" placeholder="Search..." className={styles.input} />

      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
};

export default SidebarLayout;
