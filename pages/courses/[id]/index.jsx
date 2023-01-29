import Link from 'next/link'
import React, { useState } from 'react'
import ContentRight from '../../../components/courses/contentRight'
import Header from '../../../components/Header/Header1'
import styles from '../courses.module.css'
import courses from './courses-detail.module.css'
import {AiFillClockCircle,AiFillCaretDown} from 'react-icons/ai'
import {FaPaste,FaUserGraduate,FaSignal} from 'react-icons/fa'
import {BsBookmark} from 'react-icons/bs'
import {SiNiconico} from 'react-icons/si'
const CoursesDetail = () => {
    const [isActive,setActive] = useState(1)
    const onToggle = (number)=>{
        setActive(number)
    }
  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.content}>
      <div className={styles.content_left}>
        <div className={courses.contentWap}>
            <div className={courses.content_left}>
                <div className={courses.content_left_head}>
                    <div className={courses.content_left_instruc}>
                        <div className={courses.content_left_instruc_img}>
                            <img src="https://th.bing.com/th/id/R.8ee1479d42f7819a9b3c98e3cde042af?rik=SL1pWPcvQtpUiA&pid=ImgRaw&r=0" alt="" />
                        </div>
                        <div className={courses.content_left_instruc_info}>
                            <p>Intructor</p>
                            <Link href={`#`}>Mery Stivens</Link>
                        </div>
                    </div>
                    <div className={courses.content_left_cate}>
                        <div className='text-3xl text-[#f24080] mt-2 mr-3'>
                            <BsBookmark/>
                        </div>
                        <div>
                            <p>Category</p>
                            <div className='flex'>
                                <img src="https://th.bing.com/th/id/OIP.O--kzSM1Pxz1H3kfnWFM6wHaFj?pid=ImgDet&rs=1" alt="" />
                                <span>Vietnamese</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={courses.content_courses}>
                    <h3>Intensive Course</h3>
                    <div className={courses.content_courses_items}>
                        <div className={courses.content_courses_item}>
                            <p><AiFillClockCircle/></p>
                            <span>12 Weeks</span>
                        </div>
                        <div className={courses.content_courses_item}>
                            <p><FaSignal/></p>
                            <span>All Levels</span>
                        </div>
                        <div className={courses.content_courses_item}>
                            <p><FaPaste/></p>
                            <span>2 Lessons</span>
                        </div>
                        <div className={courses.content_courses_item}>
                            <p><SiNiconico/></p>
                            <span>0 Quizzes</span>
                        </div>
                        <div className={courses.content_courses_item}>
                            <p><FaUserGraduate/></p>
                            <span>0 Students</span>
                        </div>
                    </div>
                </div>
                <div className={courses.content}>
                    <div className={courses.content_btn}>
                        <button onClick={()=>{onToggle(1)}} className={isActive===1?courses.content_btn_active:""}>Overview</button>
                        <button onClick={()=>{onToggle(2)}} className={isActive===2?courses.content_btn_active:""}>Curriculum</button>
                        <button onClick={()=>{onToggle(3)}} className={isActive===3?courses.content_btn_active:""}>Instructor</button>
                    </div>
                    <div className={`${isActive==1?courses.content_btn1:"hidden"}`}>
                        <div className={courses.content_btn1_head}>
                            <p>Mini-Group course is comprised of small groups (max 4 students).</p>
                            <img src="https://lingvico.themerex.net/wp-content/uploads/2018/07/post-11-copyright-1170x658.jpg" alt="" />
                        </div>
                        <div className={courses.content_btn1_desc}>
                            <h3>Cource description</h3>
                            <p>
                                If you are a newbie to managing a WordPress website, then congratulations! You are here at the right track with us because we are going to introduce you one of the most basic knowledge when owning a WordPress page: how to find your site the best WordPress Hosting service. This process is often overlooked by most of the website owners. But it can be considered the most important key point to bring your site to stand out of the crowd. A great hosting service could help you to improve SEO and increase sales as well.
                            </p>
                        </div>
                        <div className={courses.content_btn1_certification}>
                            <h3>Certification</h3>
                            <img src="https://lingvico.themerex.net/wp-content/uploads/2018/07/certificat.png" alt="" />
                            <p>
                            If you are a newbie to managing a WordPress website, then congratulations! You are here at the right track with us because we are going to introduce you one of the most basic knowledge when owning a WordPress page: how to find your site the best WordPress Hosting service. This process is often overlooked by most of the website owners. But it can be considered the most important key point to bring your site to stand out of the crowd. A great hosting service could help you to improve SEO and increase sales as well.
                            </p>
                        </div>
                        <div className={courses.content_btn1_outcomes}>
                            <h3>Learning outcomes</h3>
                            <ul>
                                <li>Over 37 lectures and 55.5 hours of content!</li>
                                <li>LIVE PROJECT End to End Software Testing Training Included.</li>
                                <li>Learn Software Testing and Automation basics from a professional trainer from your own desk.</li>
                                <li>Information packed practical training starting from basics to advanced testing techniques.</li>
                                <li>Best suitable for beginners to advanced level users and who learn faster when demonstrated.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={`${isActive==2?courses.content_btn2:"hidden"}`}>
                        <div className={courses.content_btn2_title}>
                            <div>
                                <h3>SECTION 1</h3>
                                <p>Perfect Inelasticity And Perfect</p>
                            </div>
                            <div className={courses.content_btn2_title_icon}>
                                <AiFillCaretDown/>
                            </div>
                        </div>
                        <div className={courses.content_btn2_title}>
                            <div>
                                <h3>SECTION 2</h3>
                                <p>Perfect Inelasticity And Perfect</p>
                            </div>
                            <div className={courses.content_btn2_title_icon}>
                                <AiFillCaretDown/>
                            </div>
                        </div>
                    </div>
                    <div className={`${isActive==3?courses.content_btn3:"hidden"}`}>
                        <div className={courses.content_btn3_img}>
                            <img src="https://secure.gravatar.com/avatar/c7e3f3397345a925df6618129457d14c?s=250&d=mm&r=g" alt="" />
                        </div>
                        <div className={courses.content_btn3_info}>
                            <h3>Mery Stivens</h3>
                            <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tindunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={courses.form_cmt}>
                    <h3>Leave a comment</h3>
                    <div className={courses.form_cmt_input}>
                        <input type="text" placeholder='Your Name*' />
                        <input type="text" placeholder='Your Email*' />
                    </div>
                    <div className={courses.form_cmt_checkbox}>
                        <input type="checkbox" />
                        <span>Save my name, email, and website in this browser for the next time I comment.</span>
                    </div>
                    <textarea placeholder='Your comment*'></textarea>
                    <div className={courses.form_cmt_checkbox}>
                        <input type="checkbox" />
                        <span>By using this form you agree with the storage and handling of your data by this website. *</span>
                    </div>
                    <button>Leave a comment</button>
                </div>
            </div>
            <div className={courses.content_right}>
                <img src="https://th.bing.com/th/id/OIP.kN30E0FmgeeJwqqHRbs7lQHaE8?pid=ImgDet&rs=1" alt="" />
                <p>$500</p>
                <Link href={`/courses/checkout`}><button>buy now</button></Link>
            </div>
        </div>
    </div>
        {/* content right */}
        <div>
            <ContentRight/>
        </div>
      </div>
    </div>
  )
}

export default CoursesDetail