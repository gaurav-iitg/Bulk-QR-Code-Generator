import React from "react";
import Image from "next/image";

const page = ({ params }: { params: { uuid: string } }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1>QR Code</h1>
      <p>URL: {params.url}</p>
      <Image
        src={`/${params.url}.png`}
        width="300"
        height="300"
        alt="QR Image"
      />
    </div>
  );
};

export default page;
