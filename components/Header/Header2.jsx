import Link from "next/link";
import React from "react";
import styles from "./Header.module.css";
import { BiMap } from "react-icons/bi";
const Header2 = () => {
  return (
    <>
      <div className={styles.comtainer}>
        <section className={styles.elementor_row}>
          <div className={styles.conten}>
            <div className={styles.logo}>
              <figure>
                <img
                  src="https://lingvico.themerex.net/wp-content/uploads/2018/07/logo.png"
                  alt=""
                  width="200px"
                />
              </figure>
            </div>
            <div className={styles.menu}>
              <div>
                <ul>
                  <li>
                    <Link href="">
                      <button className={styles.homebtn}>Home</button>
                    </Link>
                  </li>
                  <li className={styles.btn4}>
                    <Link href="">
                      <button>Home</button>
                    </Link>
                    <ul className={styles.menu2}>
                      <li>
                        <Link href="">
                          <button>Home 1</button>
                        </Link>{" "}
                      </li>
                      <li>
                        <Link href="">
                          <button>Home 2</button>
                        </Link>{" "}
                      </li>
                      <li>
                        <Link href="">
                          <button>Home 3</button>
                        </Link>{" "}
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="">
                      <button>Home</button>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <button>Home</button>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <button>Home</button>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <button>Home</button>
                    </Link>
                    <ul className={styles.menu2}>
                      <li>
                        <Link href="">
                          <button>Home 1</button>
                        </Link>{" "}
                      </li>
                      <li>
                        <Link href="">
                          <button>Home 2</button>
                        </Link>{" "}
                      </li>
                      <li>
                        <Link href="">
                          <button>Home 3</button>
                        </Link>{" "}
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className={styles.contact}>
                <div>
                  <BiMap className={styles.iconmap} />
                </div>
                <div>
                  <p>123 6th St. Melbourne, FL 32904</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Header2;
