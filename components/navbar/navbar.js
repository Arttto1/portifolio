import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-white absolute w-full">
      <div className="flex max-w-[50vw] m-auto items-center justify-between py-2">
        <div>
          <h1 className="bold text-3xl">NEXTphone</h1>
        </div>
        <div className="flex gap-4 text-xl">
          <Link href={"/"}>Products</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
