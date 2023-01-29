import React from "react";

import Footer from "../../components/Footer/Footer";
import styles from "./Home.module.css";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";
import Link from "next/link";
import Header2 from "../../components/Header/Header2";
const Home = () => {
  return (
    <>
      <Header2 />
      <main className={styles.main}>
        <section className={styles.wrap_banner}>
          <div className={styles.bg}>
            <div className={styles.banner}>
              <div className={styles.banner_img}></div>
            </div>
          </div>
        </section>
        <section className={styles.wrap_widget}>
          <div className={styles.widget}>
            <div className={styles.row}>
              <div className={styles.widget_left}>
                <span className={styles.subtitle}>Start Now!</span>
                <h2 className={styles.title}>Learn a New Language!</h2>
                <p className={styles.title_desc}>
                  Our school is known for the high-quality education programs
                  worldwide. We work with the best teachers who know how to
                  engage students in the learning activities!
                </p>
              </div>
              <div className={styles.widget_right}>
                <div className={styles.widget_right_box}>
                  <ol class="">
                    <li>
                      <span>
                        <small>1</small>
                      </span>
                      <h6>An Easy Study Approach</h6>
                    </li>
                    <li>
                      <span>
                        <small>1</small>
                      </span>
                      <h6>Free Teaching Materials</h6>
                    </li>
                    <li>
                      <span>
                        <small>1</small>
                      </span>
                      <h6>A Free Mobile Application</h6>
                    </li>
                    <li>
                      <span>
                        <small>1</small>
                      </span>
                      <h6>An Accredited School</h6>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.wrap_edu}>
          <div className={styles.edu}>
            <div className={styles.row}>
              <div className={styles.edu_left}>
                <div className={styles.edu_left_above}>
                  <img
                    src="https://lingvico.themerex.net/wp-content/uploads/2018/07/img-10-copyright.jpg"
                    alt=""
                  />
                </div>
                <div className={styles.edu_left_under}>
                  <div className="">
                    <div className={styles.edu_left_under_title}>
                      <h6>
                        Watch Intro Video <br />
                        About the School:
                      </h6>
                      <p>
                        Are you Interested in <br />
                        our school &amp; classes?
                      </p>
                    </div>
                    <div className={styles.edu_left_under_media}>
                      <iframe
                        src="https://www.youtube.com/embed/tzDe2w13sa8"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.edu_right}>
                <div className="">
                  <div
                    id="trx_sc_title_1513909840"
                    className={styles.edu_right_above}
                  >
                    <span className={styles.subtitle}>High Quality</span>
                    <h2 className={styles.title}>
                      <span className="sc_item_title_text">
                        Let’s Start Your Education!
                      </span>
                    </h2>
                    <div className={styles.title_desc}>
                      <p>
                        We offer a brand new approach to the most basic things.
                        The wide range of learning options allows our students
                        to select the most convenient and effective course!
                      </p>
                    </div>
                    <a
                      href="http://lingvico.themerex.net/booking-calendar/"
                      id="sc_button_1502874590"
                      className={styles.wrap_button}
                    >
                      <span className={styles.button}>make an appointment</span>
                      {/* /.sc_button_text */}
                    </a>
                    {/* /.sc_button */}
                  </div>
                  <div className={styles.edu_right_under}>
                    <img
                      width={544}
                      height={325}
                      src="https://lingvico.themerex.net/wp-content/uploads/2018/07/img-11-copyright.jpg"
                      className="attachment-full size-full"
                      alt
                      loading="lazy"
                      srcSet="https://lingvico.themerex.net/wp-content/uploads/2018/07/img-11-copyright.jpg 544w, https://lingvico.themerex.net/wp-content/uploads/2018/07/img-11-copyright-300x179.jpg 300w, https://lingvico.themerex.net/wp-content/uploads/2018/07/img-11-copyright-370x221.jpg 370w"
                      sizes="(max-width: 544px) 100vw, 544px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.wrap_courses}>
          <div className={styles.courses}>
            <div className={styles.courses_title}>
              <div className={styles.courses_title_small}>
                <span>Find a Course</span>
              </div>
              <div className={styles.courses_title_big}>
                <h2>Featured Courses</h2>
              </div>
              <div className={styles.blogger}>
                <ul className="">
                  <li>
                    <a
                      href="#blogger_filters_26_content"
                      className="active"
                      data-tab={26}
                      data-page={1}
                    >
                      <span className="trx_addons_extended_taxonomy extended_taxonomy_custom_1338866031">
                        <img
                          loading="lazy"
                          className="trx_addons_extended_taxonomy_img"
                          src="//lingvico.themerex.net/wp-content/uploads/2019/02/flag-5-1.png"
                          alt="Chinese"
                          width={18}
                          height={18}
                        />
                        <span>Chinese</span>
                      </span>{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#blogger_filters_22_content"
                      data-tab={22}
                      data-page={1}
                    >
                      <span className="trx_addons_extended_taxonomy extended_taxonomy_custom_755215229">
                        <img
                          loading="lazy"
                          className="trx_addons_extended_taxonomy_img"
                          src="//lingvico.themerex.net/wp-content/uploads/2019/02/flag-1-1.png"
                          alt="English"
                          width={18}
                          height={18}
                        />
                        <span>English</span>
                      </span>{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#blogger_filters_23_content"
                      data-tab={23}
                      data-page={1}
                    >
                      <span className="trx_addons_extended_taxonomy extended_taxonomy_custom_780325515">
                        <img
                          loading="lazy"
                          className="trx_addons_extended_taxonomy_img"
                          src="//lingvico.themerex.net/wp-content/uploads/2019/02/flag-2-1.png"
                          alt="French"
                          width={18}
                          height={18}
                        />
                        <span>French</span>
                      </span>{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#blogger_filters_25_content"
                      data-tab={25}
                      data-page={1}
                    >
                      <span className="trx_addons_extended_taxonomy extended_taxonomy_custom_509027174">
                        <img
                          loading="lazy"
                          className="trx_addons_extended_taxonomy_img"
                          src="//lingvico.themerex.net/wp-content/uploads/2019/02/flag-4-1.png"
                          alt="German"
                          width={18}
                          height={18}
                        />
                        <span>German</span>
                      </span>{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#blogger_filters_27_content"
                      data-tab={27}
                      data-page={1}
                    >
                      <span className="trx_addons_extended_taxonomy extended_taxonomy_custom_195924154">
                        <img
                          loading="lazy"
                          className="trx_addons_extended_taxonomy_img"
                          src="//lingvico.themerex.net/wp-content/uploads/2019/02/flag-6-1.png"
                          alt="Japanese"
                          width={18}
                          height={18}
                        />
                        <span>Japanese</span>
                      </span>{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#blogger_filters_24_content"
                      data-tab={24}
                      data-page={1}
                    >
                      <span className="trx_addons_extended_taxonomy extended_taxonomy_custom_1471140350">
                        <img
                          loading="lazy"
                          className="trx_addons_extended_taxonomy_img"
                          src="//lingvico.themerex.net/wp-content/uploads/2019/02/flag-3-1.png"
                          alt="Spanish"
                          width={18}
                          height={18}
                        />
                        <span>Spanish</span>
                      </span>{" "}
                    </a>
                  </li>{" "}
                </ul>
              </div>
            </div>
            <div className={styles.courses_slider}>
              <Link href="/courses/id">
                <div className={styles.courses_slider_item}>
                  <div className={styles.courses_slider_item_image}>
                    <img
                      width={342}
                      height={254}
                      src="https://lingvico.themerex.net/wp-content/uploads/2018/07/post-8-copyright-342x254.jpg"
                      className="attachment-lingvico-thumb-learnpress size-lingvico-thumb-learnpress wp-post-image"
                      alt
                      loading="lazy"
                    />
                  </div>

                  <div className={styles.courses_slider_item_content}>
                    <h5>Exam Preparation</h5>
                    <p>
                      This course is available for short periods during the
                      year.
                    </p>
                    <div className={styles.time}></div>
                  </div>
                </div>
              </Link>
              <Link href="/courses/id">
                <div className={styles.courses_slider_item}>
                  <div className={styles.courses_slider_item_image}>
                    <img
                      width={342}
                      height={254}
                      src="https://lingvico.themerex.net/wp-content/uploads/2018/07/post-8-copyright-342x254.jpg"
                      className="attachment-lingvico-thumb-learnpress size-lingvico-thumb-learnpress wp-post-image"
                      alt
                      loading="lazy"
                    />
                  </div>

                  <div className={styles.courses_slider_item_content}>
                    <h5>Exam Preparation</h5>
                    <p>
                      This course is available for short periods during the
                      year.
                    </p>
                    <div className={styles.time}></div>
                  </div>
                </div>
              </Link>
              <Link href="/courses/id">
                <div className={styles.courses_slider_item}>
                  <div className={styles.courses_slider_item_image}>
                    <img
                      width={342}
                      height={254}
                      src="https://lingvico.themerex.net/wp-content/uploads/2018/07/post-8-copyright-342x254.jpg"
                      className="attachment-lingvico-thumb-learnpress size-lingvico-thumb-learnpress wp-post-image"
                      alt
                      loading="lazy"
                    />
                  </div>

                  <div className={styles.courses_slider_item_content}>
                    <h5>Exam Preparation</h5>
                    <p>
                      This course is available for short periods during the
                      year.
                    </p>
                    <div className={styles.time}></div>
                  </div>
                </div>
              </Link>
              <Link href="/courses/id">
                <div className={styles.courses_slider_item}>
                  <div className={styles.courses_slider_item_image}>
                    <img
                      width={342}
                      height={254}
                      src="https://lingvico.themerex.net/wp-content/uploads/2018/07/post-8-copyright-342x254.jpg"
                      className="attachment-lingvico-thumb-learnpress size-lingvico-thumb-learnpress wp-post-image"
                      alt
                      loading="lazy"
                    />
                  </div>

                  <div className={styles.courses_slider_item_content}>
                    <h5>Exam Preparation</h5>
                    <p>
                      This course is available for short periods during the
                      year.
                    </p>
                    <div className={styles.time}></div>
                  </div>
                </div>
              </Link>


            </div>
            <div className={styles.arrow_button}>
              <div className={styles.arrow_button_left}>
                <FaAngleDoubleLeft />
              </div>
              <div className={styles.arrow_button_right}>
                <FaAngleDoubleRight />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.wrap_student}>
          <div className={styles.student}>
            <div className={styles.student_title}>
              <span>Testimonials</span>
              <h2>What Students Say</h2>
            </div>
            <div className={styles.student_content}>
              <div className={styles.student_content_image}>
                <img
                  width={112}
                  height={112}
                  src="https://lingvico.themerex.net/wp-content/uploads/2018/07/5test-copyright-112x112.jpg"
                  className="attachment-lingvico-thumb-small size-lingvico-thumb-small wp-post-image"
                  alt
                  loading="lazy"
                  srcSet="https://lingvico.themerex.net/wp-content/uploads/2018/07/5test-copyright-112x112.jpg 112w, https://lingvico.themerex.net/wp-content/uploads/2018/07/5test-copyright-150x150.jpg 150w, https://lingvico.themerex.net/wp-content/uploads/2018/07/5test-copyright-75x75.jpg 75w, https://lingvico.themerex.net/wp-content/uploads/2018/07/5test-copyright-90x90.jpg 90w, https://lingvico.themerex.net/wp-content/uploads/2018/07/5test-copyright-148x148.jpg 148w, https://lingvico.themerex.net/wp-content/uploads/2018/07/5test-copyright.jpg 297w"
                  sizes="(max-width: 112px) 100vw, 112px"
                />
              </div>
              <p>
                For YEARS I have searched for an advanced Spanish class that
                REALLY was advanced. This is the first one that I have found.
                The Advanced Spanish Media class with Magin Revillo is
                excellent. His method includes a variety of readings from
                newspapers, journals, websites.
              </p>
              <div className={styles.student_content_name}>Brain Minon</div>
              <div className={styles.student_content_advanced}>
                Advanced Spanish Course
              </div>
              <div className={styles.student_content_wrap_rating}>
                <span className={styles.student_content_rating}>
                  <span className={styles.star}>
                    <svg
                      className="star_solid"
                      aria-hidden="true"
                      focusable="false"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-8 -8 584 520"
                    >
                      <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                    </svg>
                  </span>
                  <span className={styles.star}>
                    <svg
                      className="star_solid"
                      aria-hidden="true"
                      focusable="false"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-8 -8 584 520"
                    >
                      <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                    </svg>
                  </span>
                  <span className={styles.star}>
                    <svg
                      className="star_solid"
                      aria-hidden="true"
                      focusable="false"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-8 -8 584 520"
                    >
                      <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                    </svg>
                  </span>
                  <span className={styles.star}>
                    <svg
                      className="star_solid"
                      aria-hidden="true"
                      focusable="false"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-8 -8 584 520"
                    >
                      <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                    </svg>
                  </span>
                  <span className={styles.star}>
                    <svg
                      className="star_solid"
                      aria-hidden="true"
                      focusable="false"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-8 -8 584 520"
                    >
                      <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                    </svg>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.wrap_plan}>
          <div className={styles.plan}>
            <div className={styles.plan_title}>
              <span>Testimonials</span>
              <h2>What Students Say</h2>
            </div>
            <div className={styles.plan_content}>
              <div className={styles.price_item_default}>
                <div className={styles.price_item_info}>
                  <h3 className={styles.price_item_title}>
                    <span>Easy Education</span>
                  </h3>
                  <div className={styles.price_item_price}>
                    <span className={styles.price_item_price_value}>$159</span>
                    <span className={styles.price_item_price_decimals}>99</span>
                  </div>
                  <div className={styles.price_item_detail}>
                    <p style={{ textAlign: "center" }}>
                      This course is perfect for someone who wants to start easy
                      language learning.
                    </p>
                  </div>
                </div>
                {/* /.sc_price_item_info */}

                <a href="http://lingvico.themerex.net/pricing/">
                  <button className={styles.price_item_button}>
                    {" "}
                    Choose this program
                  </button>
                </a>
              </div>
              <div className={styles.price_item_default}>
                <div className={styles.price_item_info}>
                  <h3 className={styles.price_item_title}>
                    <span>Easy Education</span>
                  </h3>
                  <div className={styles.price_item_price}>
                    <span className={styles.price_item_price_value}>$159</span>
                    <span className={styles.price_item_price_decimals}>99</span>
                  </div>
                  <div className={styles.price_item_detail}>
                    <p style={{ textAlign: "center" }}>
                      This course is perfect for someone who wants to start easy
                      language learning.
                    </p>
                  </div>
                </div>
                {/* /.sc_price_item_info */}

                <a href="http://lingvico.themerex.net/pricing/">
                  <button className={styles.price_item_button}>
                    {" "}
                    Choose this program
                  </button>
                </a>
              </div>
              <div className={styles.price_item_default}>
                <div className={styles.price_item_info}>
                  <h3 className={styles.price_item_title}>
                    <span>Easy Education</span>
                  </h3>
                  <div className={styles.price_item_price}>
                    <span className={styles.price_item_price_value}>$159</span>
                    <span className={styles.price_item_price_decimals}>99</span>
                  </div>
                  <div className={styles.price_item_detail}>
                    <p style={{ textAlign: "center" }}>
                      This course is perfect for someone who wants to start easy
                      language learning.
                    </p>
                  </div>
                </div>
                {/* /.sc_price_item_info */}

                <a href="http://lingvico.themerex.net/pricing/">
                  <button className={styles.price_item_button}>
                    {" "}
                    Choose this program
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.wrap_courses}>
          <div className={styles.courses}>
            <div className={styles.courses_title}>
              <div className={styles.courses_title_small}>
                <span>Find a Course</span>
              </div>
              <div className={styles.courses_title_big}>
                <h2>Featured Courses</h2>
              </div>
              <div className={styles.blogger}>
                <ul className="">
                  <li>
                    <a
                      href="#blogger_filters_26_content"
                      className="active"
                      data-tab={26}
                      data-page={1}
                    >
                      <span className="trx_addons_extended_taxonomy extended_taxonomy_custom_1338866031">
                        <img
                          loading="lazy"
                          className="trx_addons_extended_taxonomy_img"
                          src="//lingvico.themerex.net/wp-content/uploads/2019/02/flag-5-1.png"
                          alt="Chinese"
                          width={18}
                          height={18}
                        />
                        <span>Chinese</span>
                      </span>{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#blogger_filters_22_content"
                      data-tab={22}
                      data-page={1}
                    >
                      <span className="trx_addons_extended_taxonomy extended_taxonomy_custom_755215229">
                        <img
                          loading="lazy"
                          className="trx_addons_extended_taxonomy_img"
                          src="//lingvico.themerex.net/wp-content/uploads/2019/02/flag-1-1.png"
                          alt="English"
                          width={18}
                          height={18}
                        />
                        <span>English</span>
                      </span>{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#blogger_filters_23_content"
                      data-tab={23}
                      data-page={1}
                    >
                      <span className="trx_addons_extended_taxonomy extended_taxonomy_custom_780325515">
                        <img
                          loading="lazy"
                          className="trx_addons_extended_taxonomy_img"
                          src="//lingvico.themerex.net/wp-content/uploads/2019/02/flag-2-1.png"
                          alt="French"
                          width={18}
                          height={18}
                        />
                        <span>French</span>
                      </span>{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#blogger_filters_25_content"
                      data-tab={25}
                      data-page={1}
                    >
                      <span className="trx_addons_extended_taxonomy extended_taxonomy_custom_509027174">
                        <img
                          loading="lazy"
                          className="trx_addons_extended_taxonomy_img"
                          src="//lingvico.themerex.net/wp-content/uploads/2019/02/flag-4-1.png"
                          alt="German"
                          width={18}
                          height={18}
                        />
                        <span>German</span>
                      </span>{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#blogger_filters_27_content"
                      data-tab={27}
                      data-page={1}
                    >
                      <span className="trx_addons_extended_taxonomy extended_taxonomy_custom_195924154">
                        <img
                          loading="lazy"
                          className="trx_addons_extended_taxonomy_img"
                          src="//lingvico.themerex.net/wp-content/uploads/2019/02/flag-6-1.png"
                          alt="Japanese"
                          width={18}
                          height={18}
                        />
                        <span>Japanese</span>
                      </span>{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#blogger_filters_24_content"
                      data-tab={24}
                      data-page={1}
                    >
                      <span className="trx_addons_extended_taxonomy extended_taxonomy_custom_1471140350">
                        <img
                          loading="lazy"
                          className="trx_addons_extended_taxonomy_img"
                          src="//lingvico.themerex.net/wp-content/uploads/2019/02/flag-3-1.png"
                          alt="Spanish"
                          width={18}
                          height={18}
                        />
                        <span>Spanish</span>
                      </span>{" "}
                    </a>
                  </li>{" "}
                </ul>
              </div>
            </div>
            <div className={styles.courses_slider}>
              <Link href="/courses/id">
                <div className={styles.courses_slider_item}>
                  <div className={styles.courses_slider_item_image}>
                    <img
                      width={342}
                      height={254}
                      src="https://lingvico.themerex.net/wp-content/uploads/2018/07/post-8-copyright-342x254.jpg"
                      className="attachment-lingvico-thumb-learnpress size-lingvico-thumb-learnpress wp-post-image"
                      alt
                      loading="lazy"
                    />
                  </div>

                  <div className={styles.courses_slider_item_content}>
                    <h5>Exam Preparation</h5>
                    <p>
                      This course is available for short periods during the
                      year.
                    </p>
                    <div className={styles.time}></div>
                  </div>
                </div>
              </Link>
              <Link href="/courses/id">
                <div className={styles.courses_slider_item}>
                  <div className={styles.courses_slider_item_image}>
                    <img
                      width={342}
                      height={254}
                      src="https://lingvico.themerex.net/wp-content/uploads/2018/07/post-8-copyright-342x254.jpg"
                      className="attachment-lingvico-thumb-learnpress size-lingvico-thumb-learnpress wp-post-image"
                      alt
                      loading="lazy"
                    />
                  </div>

                  <div className={styles.courses_slider_item_content}>
                    <h5>Exam Preparation</h5>
                    <p>
                      This course is available for short periods during the
                      year.
                    </p>
                    <div className={styles.time}></div>
                  </div>
                </div>
              </Link>
              <Link href="/courses/id">
                <div className={styles.courses_slider_item}>
                  <div className={styles.courses_slider_item_image}>
                    <img
                      width={342}
                      height={254}
                      src="https://lingvico.themerex.net/wp-content/uploads/2018/07/post-8-copyright-342x254.jpg"
                      className="attachment-lingvico-thumb-learnpress size-lingvico-thumb-learnpress wp-post-image"
                      alt
                      loading="lazy"
                    />
                  </div>

                  <div className={styles.courses_slider_item_content}>
                    <h5>Exam Preparation</h5>
                    <p>
                      This course is available for short periods during the
                      year.
                    </p>
                    <div className={styles.time}></div>
                  </div>
                </div>
              </Link>
              <Link href="/courses/id">
                <div className={styles.courses_slider_item}>
                  <div className={styles.courses_slider_item_image}>
                    <img
                      width={342}
                      height={254}
                      src="https://lingvico.themerex.net/wp-content/uploads/2018/07/post-8-copyright-342x254.jpg"
                      className="attachment-lingvico-thumb-learnpress size-lingvico-thumb-learnpress wp-post-image"
                      alt
                      loading="lazy"
                    />
                  </div>

                  <div className={styles.courses_slider_item_content}>
                    <h5>Exam Preparation</h5>
                    <p>
                      This course is available for short periods during the
                      year.
                    </p>
                    <div className={styles.time}></div>
                  </div>
                </div>
              </Link>


            </div>
            <div className={styles.arrow_button}>
              <div className={styles.arrow_button_left}>
                <FaAngleDoubleLeft />
              </div>
              <div className={styles.arrow_button_right}>
                <FaAngleDoubleRight />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.wrap_blog}>
          <div className={styles.blog}>
            <div className={styles.row}>
              <div className={styles.blog_left}>
                <div className={styles.blog_left_title}>
                  <span>Our Blog</span>
                  <h2>Schools News</h2>
                </div>
                <div className={styles.blog_left_post}>
                  <div className={styles.blog_left_post_image}>
                    <img
                      width={805}
                      height={400}
                      src="https://lingvico.themerex.net/wp-content/uploads/2018/07/post-3-copyright-805x400.jpg"
                      className="attachment-lingvico-thumb-excerpt size-lingvico-thumb-excerpt wp-post-image"
                      alt
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.blog_left_post_content}>
                    <div className={styles.blog_left_post_content_date}>
                      <button>our students</button>
                      <span>8 June, 2018 | 3Comments</span>
                    </div>
                    <h5 className={styles.blog_left_post_content_title}>
                      Explore the New Guide to English Prepositions (Time)
                    </h5>
                    <p className={styles.blog_left_post_content_desc}>
                      We have been working on a new approach to our basic
                      English classes, and now we finally have this new…
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.blog_right}>
                <ul className={styles.tabs}>
                  <li>RECENT NEWS</li>
                  <li>POPULAR NEWS</li>
                </ul>
                <ul className={styles.post}>
                  <li>
                    <div className={styles.post_image}>
                      <img
                        width={112}
                        height={112}
                        src="https://lingvico.themerex.net/wp-content/uploads/2018/07/post-4-copyright-112x112.jpg"
                        className="attachment-lingvico-thumb-small size-lingvico-thumb-small wp-post-image"
                        alt="Tips for Improving Your Speaking Skills"
                        loading="lazy"
                        srcSet="https://lingvico.themerex.net/wp-content/uploads/2018/07/post-4-copyright-112x112.jpg 112w, https://lingvico.themerex.net/wp-content/uploads/2018/07/post-4-copyright-150x150.jpg 150w, https://lingvico.themerex.net/wp-content/uploads/2018/07/post-4-copyright-75x75.jpg 75w, https://lingvico.themerex.net/wp-content/uploads/2018/07/post-4-copyright-90x90.jpg 90w, https://lingvico.themerex.net/wp-content/uploads/2018/07/post-4-copyright-148x148.jpg 148w, https://lingvico.themerex.net/wp-content/uploads/2018/07/post-4-copyright-370x370.jpg 370w"
                        sizes="(max-width: 112px) 100vw, 112px"
                      />
                    </div>
                    <div className={styles.post_item}>
                      <h6 className={styles.post_title}>
                        Tips for Improving Your Speaking Skills
                      </h6>
                      <div className={styles.post_info}>10 July, 2018</div>
                    </div>
                  </li>
                  <li>
                    <div className={styles.post_image}>
                      <img
                        width={112}
                        height={112}
                        src="https://lingvico.themerex.net/wp-content/uploads/2018/07/post-4-copyright-112x112.jpg"
                        className="attachment-lingvico-thumb-small size-lingvico-thumb-small wp-post-image"
                        alt="Tips for Improving Your Speaking Skills"
                        loading="lazy"
                        srcSet="https://lingvico.themerex.net/wp-content/uploads/2018/07/post-4-copyright-112x112.jpg 112w, https://lingvico.themerex.net/wp-content/uploads/2018/07/post-4-copyright-150x150.jpg 150w, https://lingvico.themerex.net/wp-content/uploads/2018/07/post-4-copyright-75x75.jpg 75w, https://lingvico.themerex.net/wp-content/uploads/2018/07/post-4-copyright-90x90.jpg 90w, https://lingvico.themerex.net/wp-content/uploads/2018/07/post-4-copyright-148x148.jpg 148w, https://lingvico.themerex.net/wp-content/uploads/2018/07/post-4-copyright-370x370.jpg 370w"
                        sizes="(max-width: 112px) 100vw, 112px"
                      />
                    </div>
                    <div className={styles.post_item}>
                      <h6 className={styles.post_title}>
                        Tips for Improving Your Speaking Skills
                      </h6>
                      <div className={styles.post_info}>10 July, 2018</div>
                    </div>
                  </li>
                  <li>
                    <div className={styles.post_image}>
                      <img
                        width={112}
                        height={112}
                        src="https://lingvico.themerex.net/wp-content/uploads/2018/07/post-4-copyright-112x112.jpg"
                        className="attachment-lingvico-thumb-small size-lingvico-thumb-small wp-post-image"
                        alt="Tips for Improving Your Speaking Skills"
                        loading="lazy"
                        srcSet="https://lingvico.themerex.net/wp-content/uploads/2018/07/post-4-copyright-112x112.jpg 112w, https://lingvico.themerex.net/wp-content/uploads/2018/07/post-4-copyright-150x150.jpg 150w, https://lingvico.themerex.net/wp-content/uploads/2018/07/post-4-copyright-75x75.jpg 75w, https://lingvico.themerex.net/wp-content/uploads/2018/07/post-4-copyright-90x90.jpg 90w, https://lingvico.themerex.net/wp-content/uploads/2018/07/post-4-copyright-148x148.jpg 148w, https://lingvico.themerex.net/wp-content/uploads/2018/07/post-4-copyright-370x370.jpg 370w"
                        sizes="(max-width: 112px) 100vw, 112px"
                      />
                    </div>
                    <div className={styles.post_item}>
                      <h6 className={styles.post_title}>
                        Tips for Improving Your Speaking Skills
                      </h6>
                      <div className={styles.post_info}>10 July, 2018</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-[url('https://lingvico.themerex.net/wp-content/themes/lingvico/images/custom-bg.jpg')] bg-no-repeat bg-cover ">
            <div className=" grid grid-cols-[800px_600px] text-white py-[30px] w-[1480px] m-auto    ">
              <div className="mx-[96px]">
                <p className="text-[30px]"> Subscribe Now!</p>
                <h2 className="font-bold text-[50px] ">
                  Subscribe to the School’s <br /> Newsletter!
                </h2>
                <p>Want to get all our latest news, events and promotions?</p>
              </div>
              <div className="mx-[96px]">
                <div>
                  <form action="" className="flex pt-[80px]">
                    <input
                      type="text"
                      placeholder="Enter your email"
                      className="text-black w-[80%] px-[20px]"
                    />
                    <button className="border bg-slate-600 px-[20px] py-[10px] mx-[10px] w-[200px]">
                      Subscribe Now{" "}
                    </button>
                  </form>
                  <p className="pt-[10px]">
                    {" "}
                    I have read and agree to the Privacy Policy
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[1480px] m-auto pt-[20px] my-[100px]">
            <div>
              <img
                src="https://lingvico.themerex.net/wp-content/uploads/2018/07/img-1-copyright.png"
                alt=""
              />
            </div>
            <div className="px-[50px]">
              <p className="text-red-500">Language App</p>
              <h2 className=" font-bold text-[50px] ">
                Download a Free <br /> Mobile App!
              </h2>
              <div className="flex my-[25px]">
                <div>
                  <button className="rounded-full p-[8px] px-[15px] bg-yellow-400 font-bold text-white">
                    1
                  </button>
                </div>
                <div className="mx-[20px]">
                  <h4 className="font-bold text-[20px]">
                    Download App For Free
                  </h4>
                  <p>
                    How to learn languages for free? This collection features
                    lessons in 48 languages.
                  </p>
                </div>
              </div>
              <div className="flex my-[25px]">
                <div>
                  <button className="rounded-full p-[8px] px-[15px] bg-yellow-400 font-bold text-white">
                    2
                  </button>
                </div>
                <div className="mx-[20px]">
                  <h4 className="font-bold text-[20px]">
                    Download App For Free
                  </h4>
                  <p>
                    How to learn languages for free? This collection features
                    lessons in 48 languages.
                  </p>
                </div>
              </div>
              <div className="flex justify-center ">
                <div className="flex">
                  <div>
                    <button className="bg-[#f24080] py-[10px] px-[40px] font-bold text-[20px]  text-white">
                      Apple Store
                    </button>
                  </div>
                </div>
                <div>
                  <button className="bg-[#3f354d] py-[10px] px-[40px] font-bold text-[20px] mx-[10px] text-white">
                    Google play
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
