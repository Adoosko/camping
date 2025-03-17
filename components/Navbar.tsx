import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      className="  backdrop-filter backdrop-blur-lg  z-[99999] sticky
    
    
    
    top-0 bg-neutral-800/30 "
    >
      <div
        className="flexBetween 
  px-10 relative   max-container"
      >
        <Link href={"/"} className="text-white flex items-center font-bold">
          <Image src={"/logo.png"} alt="logo" width={85} height={80}></Image>
          NA FORMU
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
        {/* <div className="lg:flexCenter hidden">
          <Button
            type="button"
            title="Kontakt"
            icon="/user.svg"
            variant="btn_green"
          ></Button>
        </div> */}

        {/* <Image
          src={"/menu.svg"}
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer  lg:hidden"
        ></Image> */}
      </div>
    </nav>
  );
};

export default Navbar;
