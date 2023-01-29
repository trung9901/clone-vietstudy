import React from 'react'
import Header from '../../../components/Header/Header1'
import styles from '../../courses/courses.module.css'
import Link from 'next/link'
import ContentRight from '../../../components/courses/contentRight'
const Checkout = () => {
  return (
    <div className={styles.container}>
        <Header/>
        <div className={styles.content}>
            <div className={styles.content_left}>
                <h3>Checkout</h3>
                <div className={styles.content_left_mess}>
                Please login to enroll the course!
                </div>
                <div className={styles.content_main}>
                    <div className={styles.account}>
                        <form className={styles.form_signin}>
                            <h2>Login</h2>
                            <label htmlFor="">
                                <p>Email <span>*</span></p>
                                <input type="email" placeholder='Enter Email' />
                            </label>
                            <label htmlFor=""> 
                                <p>Password <span>*</span></p>
                                <input type="password" placeholder='Enter Password' />
                            </label>
                            <div className='flex justify-between py-7 text-gray-600 '>
                                <label htmlFor="" className={styles.form_signin_checkbox}>
                                    <input type="checkbox" /><span> Remember me</span>
                                </label>
                                <Link href={`#`}><a className='underline hover:text-blue-600'>Forget password?</a></Link>
                            </div>
                            <p>Do not have an account? <span className='cursor-pointer text-blue-400 hover:text-blue-600'>SignUp</span>.</p>
                        </form>
                    </div>
                    <div className={styles.list_orders}>
                        <h2>Your Order</h2>
                        <div className={styles.list_orders_items}>
                            <div className={styles.list_orders_item}>
                                <div>
                                    <img src="https://th.bing.com/th/id/R.bbf5acb86040e6fd35e6f5a4ef3cf7e5?rik=rFhq8qnmpWxBWw&pid=ImgRaw&r=0" alt="" />
                                </div>
                                <div className={styles.list_orders_item_name}>
                                    Product 1ccccccccccccccccccccccccccccccccc
                                </div>
                                <div>
                                    $300
                                </div>
                            </div>
                            <div className={styles.list_orders_item}>
                                <div>
                                    <img src="https://th.bing.com/th/id/R.bbf5acb86040e6fd35e6f5a4ef3cf7e5?rik=rFhq8qnmpWxBWw&pid=ImgRaw&r=0" alt="" />
                                </div>
                                <div className={styles.list_orders_item_name}>
                                    Product 1ccccccccccccccccccccccccccccccccc
                                </div>
                                <div>
                                    $300
                                </div>
                            </div>
                            <div className={styles.list_orders_item}>
                                <div>
                                    <img src="https://th.bing.com/th/id/R.bbf5acb86040e6fd35e6f5a4ef3cf7e5?rik=rFhq8qnmpWxBWw&pid=ImgRaw&r=0" alt="" />
                                </div>
                                <div className={styles.list_orders_item_name}>
                                    Product 1ccccccccccccccccccccccccccccccccc
                                </div>
                                <div>
                                    $300
                                </div>
                            </div>
                            <div className='flex justify-between w-[95%] mx-auto py-10'>
                                <p className='text-xl'>Total</p>
                                <p className='text-3xl font-semibold'>$1000</p>
                            </div>
                        </div>
                        <button className={styles.btn_orders}>PLACE ORDER</button>
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

export default Checkout