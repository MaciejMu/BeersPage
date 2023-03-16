"use client";

import { useEffect } from "react";

function Error({ err, res }: { err: Error; res: () => void }) {
  useEffect(() => {
    console.error(err);
  }, [err]);

  return (
    <>
      <h2>Something went wrong!</h2>
      <a href={"/"}>Home</a>
    </>
  );
}

export default Error;
