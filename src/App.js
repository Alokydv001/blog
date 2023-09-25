// // import React from 'react';
// // import NumberList from './NumberList';

// // const App = () => {
// //   const numbers = [1, 2, 3, 4, 5];


// //   return (
// //     <div>
// //       <h1>List of Numbers</h1>
// //       <NumberList numbers={numbers} />
// //     </div>
// //   );
// // };

// // export default App;

// // import React from 'react';
// // import UserTable from './UserTable';

// // const App = () => {
// //   const users = [
// //     { name: 'alok', age: 25, email: 'alok@gmail.com' },
// //     { name: 'sunny', age: 25, email: 'sunny@gmail.com' },
// //     { name: 'akki', age: 25, email: 'akki@gmail.com' },
// //   ];

// //   return (
// //     <div>
// //       <h1>User Table</h1>
// //       <UserTable users={users} />
// //     </div>
// //   );
// // };

// // export default App;

// import React from 'react';
// import DropdownSelect from './DropdownSelect';

// const options = ['avhinav', 'vishal ', 'vicky'];

// const App = () => {
//   return (
//     <div>
//       <DropdownSelect options={options} />
//     </div>
//   );
// };

// export default App;

import Countdown from "./Countdown";
import React from 'react';
import './App.css';
import Forms from "./Forms";

function App() {
  return (
    <div className="App">
      <Countdown></Countdown>
      <Forms></Forms>
    </div>
  );
}

export default App;







