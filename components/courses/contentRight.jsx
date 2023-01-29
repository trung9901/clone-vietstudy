import Link from 'next/link'
import React, { useState } from 'react'
import {BiSearch} from 'react-icons/bi'
import styles from '../../pages/courses/courses.module.css'
const ContentRight = () => {
  const [isActive,setActive] = useState(1)
  const onToggle = (number) => {
    setActive(number)
  }
  return (
    <div className={styles.content_right}>
      <form>
          <input type="text" placeholder='Search...' />
          <button><BiSearch/></button>
      </form>
      <div className={styles.content_right_news}>
        <div className={styles.content_right_news_nav}>
          <button onClick={()=>onToggle(1)} className={isActive==1?"bg-[#f24080] text-white":"bg-white text-[#4a287c]"}>RECENT NEWS</button>
          <button onClick={()=>onToggle(2)} className={isActive==2?"bg-[#f24080] text-white":"bg-white text-[#4a287c]"}>POPULAR NEWS</button>
        </div>
        <div className={styles.content_right_news_item}>
          <div>
            <img src="https://th.bing.com/th/id/R.c986f784e3010d7a561040239dcf3530?rik=v7FcTzNhG80hKA&pid=ImgRaw&r=0" alt="" />
          </div>
          <div className={styles.content_right_news_item_copy}>
            <h3>Tips for Improving Your Speaking Skills</h3>
            <p>10 July, 2018</p>
          </div>
        </div>
        <div className={styles.content_right_news_item}>
          <div>
            <img src="https://th.bing.com/th/id/R.c986f784e3010d7a561040239dcf3530?rik=v7FcTzNhG80hKA&pid=ImgRaw&r=0" alt="" />
          </div>
          <div className={styles.content_right_news_item_copy}>
            <h3>Tips for Improving Your Speaking Skills</h3>
            <p>10 July, 2018</p>
          </div>
        </div>
        <div className={styles.content_right_news_item}>
          <div>
            <img src="https://th.bing.com/th/id/R.c986f784e3010d7a561040239dcf3530?rik=v7FcTzNhG80hKA&pid=ImgRaw&r=0" alt="" />
          </div>
          <div className={styles.content_right_news_item_copy}>
            <h3>Tips for Improving Your Speaking Skills</h3>
            <p>10 July, 2018</p>
          </div>
        </div>
      </div>
      <div className={styles.content_right_cate}>
        <h2>Categories</h2>
        <ul>
          <li><Link href={`#`}>English</Link></li>
          <li><Link href={`#`}>English</Link></li>
          <li><Link href={`#`}>English</Link></li>
          <li><Link href={`#`}>English</Link></li>
          <li><Link href={`#`}>English</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default ContentRight