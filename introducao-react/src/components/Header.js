import React from 'react';

// export default function Header(props) {
//   return (
//     <h1>{props.title}</h1>
//   );
// }

export default function Header({title}) {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
}