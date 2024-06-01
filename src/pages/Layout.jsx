// Layout.jsx
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;



// // import { Outlet } from "react-router-dom";
// import { Navbar } from "../components/Navbar";


// const isPhone = () => {
//     const phonePattern =
//         /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
//     return phonePattern.test(navigator.userAgent);
// };

// export const Layout = () => {
//     return (
//         <>
//             <header>
//                 {isPhone() ? (
                   

//                             <Navbar />

                  
//                 ) : (
               
//                         <Navbar />
                  
//                 )}
//             </header>

 

//         </>
//     );
// };