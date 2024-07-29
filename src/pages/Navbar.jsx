import { useEffect, useRef, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-Config";

const Navbar = () => {
  const [state, setState] = useState(false);
  const navRef = useRef();
  const { user } = useUser();
  // Replace / path with your path
  const navigation = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Articles", path: "/articleList" },
  ];

  useEffect(() => {
    const body = document.body;

    // Disable scrolling
    const customBodyStyle = ["overflow-hidden", "lg:overflow-visible"];
    if (state) body.classList.add(...customBodyStyle);
    // Enable scrolling
    else body.classList.remove(...customBodyStyle);

    // Sticky strick
    const customStyle = ["sticky-nav", "fixed", "border-b"];
    window.onscroll = () => {
      if (window.scrollY > 80) navRef.current.classList.add(...customStyle);
      else navRef.current.classList.remove(...customStyle);
    };
  }, [state]);

  const Logout =async()=>{
    await signOut(auth)
  }
  return (
    <nav ref={navRef} className="bg-white w-full top-0 z-20">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:px-8 lg:flex">
        <div className="flex items-center justify-between py-3 lg:py-4 lg:block">
          <a href="#">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAhFBMVEX///9EUEWe1cs8ST2boJtcZVxBTUIaLxya08kvPjAzQTQ5Rjr8/Pw2RDdOWU/29/a/wr/l5uXf4N+Bh4GtsK15gHri8u+q2tFpcWnIysjy+fiIjont7u3O0M7G5d8kNSWRl5IAHQDW7ei1uba339gLJQ0AFwCkqKQAIQMADgAAAABxeHKYCbW7AAAGXklEQVR4nO2bCXOqOhSAjYEgO7IoCFgu1kff8///v5ewSNhCq2j1zvlmOp0iE/KR7eTErlYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPyNGG6ausn8fdvv3faruH5oETlLDfFtiRPIJMwi+zm1ug03PGNCsGo5wtvs+Gxiehv2X9jGDj9QiWmlovukc3UbJqdnVe3nOF+oxvQEHW3753pb+LrjRsZNLfXQnb5NUpvbsCzuj7+J0lQSEVEtQ/16GyqeV7sf8k2ZtgEJkZ5Xux/ycxkEMk8BZF4VXiZiF2x7bIl/OxmrcP3MC4LAi4t+CCaSOezyIyXfHYRPst3o5Psnx31cPNTKICSHlqZqGv1BciB1ltBJmcPxc79fbzab9Xq//8yngggjzYJQtihyGMSPWnZ5GYxJU2Os0QiZi1smZA7HUoSarKvf++OYjuF4MtZ0GtBSdM2UA//hMl1MEkYzMjlVWfMwnd3gGW5s6ZgvmsbogSB2eoAMQppVNO95TOZw7KlUPvtj9wmGI2PcL5po8gOiIpEM0rFkTMocjpsRF9Y6HRvjhAYqZdkoe64MwmbdNkOZKZeejXEaNktdEF7cRiyDiBpNyORTLtRm3Y4bZ8qF2Sy9Ys3IIKzZozK7sfHSjptmrKXWpAsrSri5XV4GqfGYzOFT4EKpO1oSa8I3JT9ZBn0lIzK52GWzrqKB6ENYNMHLTml9GU05Kxrhr5RN05OZa5i6abaBsGFo01gzCa57ZDTVc1In1lT+4tdQZjejQkcNKzztNAxRvz6UP91LaNFcT0dGDV32pozthbdR0oHMTC9jMnRCswu+5qpeJIaRFArf7jh8lIwaNNGYHXA2ataXoWvMXNOwfra96FwplzqAsTFng60lY2hOBsvtTOm26Rj6wL7Mbj8rs/mkvYyrNpavwZj90V4m4tTj7TLVJFwTm1w/u0WGDpqUK1xpg9ZV0a49BC0ZP/PdjJ8nfat9ff8MZOZ7GZNx2sLxhYuSjXYoLbtv5Xea/EtyZE7GuEXmYHAyZswndbkJm8T9Gt0BP9/wLXO6u2UEMtwMsKgMV+fJMXMeyMy6MJlVNNHNVo/qZkFbaSy3g5SfzchNs9m+u2aq3AQQtd1sWZmCX1Auo+uMFg/WmdloppqaCd/sbT/jesOyMu3BC6oiAGNlzEYA3100A27RVIrGxuN68AIyht2m+jphWBWbefOx2Xw4c+iHM0rgssduZT74vF/GPgUYBXWer+hGfiNRszci850h0w80NUX2Yvnc2a3dLZOEHyYh+r9BaWPP7WjOI/uZ+X6Ws7K3XncLgE2TdAu/V8YItabdyz8L8QZqfKe5m84AVA1T7VMiVVT0AjI+at7Of+Xcb1i64GlYH80BzDTNJq+eNbNtvl/mcp1MTK+84GrTSYeR7Ex1DChcati8XOHKojd1t4wdXmVYbL9iKUd9ymY6byaSaTIADIcI0jOLytTJEcMn5uijdJLVe/R2bSBWudMV7DU367x9nHES2tzbzdqVjG0h6yfK/WmGPYjLNbcxY7WFE8QAHRf68nzRmLxXxmnyckRpgz/3grSeTucUYIXqpiFmObvVOcCh0WbTPwYwnFCQ1bx3ncnMsmys8uXYRYhU/nwGhxIftadIZR9irQp/WS9j5xfr7hRNVY7D8zM3tsyphPPdi2ZmaaqqyVn38rYIZMROztSRkzPaoCH90LTics9Oexk1+cx3+Wd5yFRDLw1PZyg2O2xS68MmrOkLytCKZZ6XRYPLdupnsed5ceZHw2/7JPRDyalioB2t9rGs9yFn54D7Nf1pLo3qRJIXyhZC7BhQanexi0TNxmQmkcaC81nGHV9t47DLKTPns9cD2jRZLSzzu/Cbs9f9WtH3sNuIrV613hiJ35K/7rfXvkWKuESn9YhT56fBDp/bqRnLi55pPBf3JHWim0XTZs8l8S9VIHFtmKVPNZ9Hkum9eJYsejzzVCS9nwHAb9sww12n7v12nW6GPyWp5+XX/b73HBLpDRjzjdeYAnVksPq2A4YS8asl3Qm+cbvQtZ8/fD4/5NtzT8S16tifKKrzvmO/JrUUTdc//lj+9o1DsobEiS+e725f+L+jfoBhJ8nfYQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPCW/A+iH2QIhg9hqwAAAABJRU5ErkJggg=="
              width={120}
              height={50}
              alt="ogo"
            />
          </a>
          <div className="lg:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-between flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${
            state ? "h-screen pb-20 overflow-auto pr-4" : "hidden"
          }`}
        >
          <div>
            <ul className="flex flex-col-reverse space-x-0 lg:space-x-6 lg:flex-row">
              {user ? (
                <li className="mt-4 lg:mt-0">
                  <button
                    className="py-3 px-4 text-center border text-white bg-indigo-500 hover:bg-indigo-700 rounded-md block lg:inline lg:border-0"
                    onClick={Logout}
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <>
                  <li className="mt-8 lg:mt-0">
                    <Link
                      to="/login"
                      className="py-3 px-4 text-center text-white bg-indigo-500 hover:bg-indigo-700 rounded-md shadow block lg:inline"
                    >
                      Login
                    </Link>
                  </li>
                  <li className="mt-8 lg:mt-0">
                    <Link
                      to="/signUp"
                      className="py-3 px-4 text-center text-white bg-indigo-500 hover:bg-indigo-700 rounded-md shadow block lg:inline"
                    >
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="flex-1">
            <ul className="justify-center items-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className="text-gray-800 font-bold hover:text-indigo-600"
                  >
                    <Link to={item.path} className="mx-2">
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
