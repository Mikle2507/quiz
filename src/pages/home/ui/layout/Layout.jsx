import { Logo } from "@/shared";
import styles from "./styles.module.css";

export function Layout({ children }) {
  return (
    <div className={styles.app}>
      <header>
        <Logo />
      </header>
      {children}
      <footer className={styles.footer}>
        Проект выполнен в рамках стажировки{" "}
        <a href="https://preax.ru/" target="_blank">
          PREAX
        </a>
      </footer>
    </div>
  );
}
