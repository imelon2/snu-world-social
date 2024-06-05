import Link from "next/link";

export default function Navbar() {
  const list = [
    { id: 0, name: "Home", href: "/" },
    { id: 1, name: "Vote", href: "/vote" },
    { id: 2, name: "Me", href: "/me" },
  ];

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 shadow-md mx-auto max-w-md ">
        <ul className="flex justify-around py-2">
          {list.map((element) => {
            return (
              <li key={element.id} className="">
                <Link
                  href={element.href}
                  className="flex flex-col border items-center p-2 hover:bg-blue-500 font-semibold"
                >
                  {element.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
