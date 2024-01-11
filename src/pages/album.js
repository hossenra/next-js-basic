import Image from "next/image";

const Album = () => {
  return (
    <div>
      <h1>This image is using img tag</h1>
      <img
        src="https://images.ctfassets.net/c63hsprlvlya/IacLLeOBR5WCvdCPqKuff/6860b5cc464c4f54703a2befa3f706b4/nextjs3.webp"
        alt=""
        width="100%"
      />
      <Image src="" alt="" />
    </div>
  );
};

export default Album;
