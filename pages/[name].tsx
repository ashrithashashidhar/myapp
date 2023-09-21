import { useRouter } from "next/router";
import { NextPage } from "next";

const NamePage: NextPage = () => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <div>
      <h1>Hello, {name}!</h1>
    </div>
  );
};

export default NamePage;
