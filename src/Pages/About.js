import React from 'react';
import Navbar from '../components/header/Navbar';
import Footer from '../components/footer/Footer';

const About = () => {
  return (
    <div className="main-wrapper">
      <Navbar />
      <div className="container">
        <section className="about">
          <h1 className="about-title">About Us</h1>
          <div className="about-content">
            <p>
              <strong><i>My Shop</i></strong> is build to provide the latest collection of mobiles, laptops, games setups etc.
              At here, user can find the latest modal with all in-depth details. This is one of a kind of ecommerce shop.
            </p>
            <p>
              At the home page of the site, there is a search icon which users can use to find if the product details is available or not. Also this usually does not happen that product is not present in the site. <br/><br/> But even if this case arise, users can drop the email to myshopsupport@gmail.com so that support can add the product quickly and users can search and buy the product hasstle-free.
            </p>
            <p>
              We aim to be the topmost trusted site where users can read the reviews, know about detailed product description and make a informed decision on purchasing of the product. We hopefully believe that we are half way through and can reach to more to a better-ness by this year. 
              <br/>
              <br/>
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. <br /><br /> Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. <br /><br /> In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. <br /><br />Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
            </p>

          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;