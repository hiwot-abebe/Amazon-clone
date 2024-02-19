import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { IoSearch } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
import classes from "./Header.module.css";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/Firebase";

function Header() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  return (
    <>
      <section className={classes.fixed}>
        <section>
          <div className={classes.header_container}>
            {/* logo section*/}
            <div className={classes.logo_container}>
              <Link to="/">
                <img
                  src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                  alt="amazon logo"
                />
              </Link>
              <div className={classes.delivery}>
                <span>{<SlLocationPin />}</span>
                <div>
                  <p>Delivered to</p>
                  <span>Ethiopia</span>
                </div>
              </div>
            </div>

            {/* search section  */}
            <div className={classes.search}>
              <select name="" id="">
                <option value="">All</option>
              </select>
              <input type="text" />
              {<IoSearch size={40} />}
            </div>

            {/* right side link */}

            <div className={classes.order_container}>
              <Link to ="" className={classes.language}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/2560px-Flag_of_the_United_States.svg.png"
                  alt=""
                />
                <select>
                  <option value="">EN</option>
                </select>
              </Link>

              <Link to={!user && "/auth"}>
                <div>
                  {user ? (
                    <>
                      <p>Hello {user?.email?.split("@")[0]}</p>
                      <span onClick={() => auth.signOut()}> sign out</span>
                    </>
                  ) : (
                    <>
                      <p> Hello, Sign In</p>
                      <span> Account & Lists</span>
                    </>
                  )}
                </div>
              </Link>

              <Link to="/Orders">
                <p> returns</p>
                <span> & orders</span>
              </Link>
              <Link to="/Cart" className={classes.cart}>
                {<BiCart size={35} />}
                <span>{totalItem}</span>
              </Link>
            </div>
          </div>
        </section>
        <LowerHeader />
      </section>
    </>
  );
}

export default Header;
