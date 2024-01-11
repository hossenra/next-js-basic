import { useRouter } from "next/router";

const ErrorPage = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/news");
  }, 5000);

  return (
    <div>
      <img
        src="https://static.vecteezy.com/system/resources/previews/006/549/647/original/404-landing-page-free-vector.jpg"
        alt=""
        width="100%"
      />
    </div>
  );
};

export default ErrorPage;
