import { memo, useEffect, useState } from "react";

const FromAsyncRequest = ({ value, getCollectionApi }) => {
  // link1 => link2
  const [items, setItems] = useState([]);

  useEffect(() => {
    // const getCollectionApi = () => {
    //   console.log("start_request");
    //   return Promise.resolve(
    //     Array(value) // 1 => 2 => 3
    //       .fill("")
    //       .map((el, idx) => idx + 1)
    //   );
    // };
    getCollectionApi().then((arr) => setItems(arr));
  }, [getCollectionApi]); // link1 => link2

  console.log("FromAsync");

  return (
    <>
      <h2>FromAsyncRequest</h2>
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default memo(FromAsyncRequest);
