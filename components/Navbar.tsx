import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav
      className="flexBetween bg-neutral-900
  padding-container relative z-30 py-5 max-container"
    >
      <Link href={"/"}>
        <Image src={"/logo.png"} alt="logo" width={100} height={100}></Image>
      </Link>
      {/* <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16
             text-white flexCenter cursor-pointer pb-1.5 transition-all
              hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul> */}
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Kontakt"
          icon="/user.svg"
          variant="btn_green"
        ></Button>
      </div>

      <Image
        src={"/menu.svg"}
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer  lg:hidden"
      ></Image>
    </nav>
  );
};

export default Navbar;
