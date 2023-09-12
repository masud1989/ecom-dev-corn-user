import React, { Fragment } from 'react';
import BannerSlider from '../../components/home/BannerSlider';
import Services from '../../components/home/Services';
import Categories from '../../components/home/Categories';
import BlogCard from '../../components/home/BlogCard';
import Marquee from 'react-fast-marquee';
import ProductCard from '../../components/home/ProductCard';

const Home = () => {
  return (
    <Fragment>
      <BannerSlider />
      <Services />
      <Categories />
      {/* Product  */}
      <section className='py-5'>
        <div className='container'>
          <h3 className='section-title'>Featured Product</h3>
          <div className='row '>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      {/* Brand  */}
      <section className='py-5'>
        <div className='container'>
          <h3 className='section-title'>Our Brnds</h3>
          <div className='row '>
            <div className='col-12'>
              <div className='card-wrapper'>
                <Marquee>
                  <div className='mx-5 w-25'>
                    <img src='images/brand-01.png' alt='brand' />
                  </div>
                  <div className='mx-5 w-25'>
                    <img src='images/brand-02.png' alt='brand' />
                  </div>
                  <div className='mx-5 w-25'>
                    <img src='images/brand-03.png' alt='brand' />
                  </div>
                  <div className='mx-5 w-25'>
                    <img src='images/brand-04.png' alt='brand' />
                  </div>
                  <div className='mx-5 w-25'>
                    <img src='images/brand-05.png' alt='brand' />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog  */}
      <section className='py-5'>
        <div className='container'>
          <h3 className='section-title'>Latest News</h3>
          <div className='row '>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Home