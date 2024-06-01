// App.jsx
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;



// import { RouterProvider } from "react-router-dom";
// import { router } from "./router";

// // import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// // // import Home from './components/Home';
// // // import About from './components/About';
// // // import Contact from './components/Contact';

// // import GetBalance from './components/GetBalance';
// // import AddFunds from './components/AddFunds';
// // import TransferFunds from './components/TransferFunds';

// const App = () => {
//   return (

//    <>
//      <RouterProvider router={router} />
//    </>
//   ) 
// };

// export default App;