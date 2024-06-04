import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="logo">
      <svg style={{ width: "1.14em", height: "1em" }}>
        <use href="./images/logo.svg#logo-83" />
      </svg>
    </Link>
  );
};

export default Logo;