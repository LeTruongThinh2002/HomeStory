import { Link } from "@inertiajs/react";

const Pagination = ({ links }: any) => {
  if (!Array.isArray(links)) {
    console.log(links);
    console.error("Pagination links should be an array");
    return null;
  }

  return (
    <nav className="text-center mt-4">
      {links.map((link: any) => (
        <Link
          preserveScroll
          href={link.url || "#"}
          key={link.label}
          dangerouslySetInnerHTML={{ __html: link.label }}
          className={
            "inline-block py-2 px-3 rounded-lg text-gray-200 text-xs " +
            (link.active ? "bg-gray-950 " : " ") +
            (!link.url
              ? "!text-gray-500 cursor-not-allowed "
              : "hover:bg-gray-950")
          }
        ></Link>
      ))}
    </nav>
  );
};

export default Pagination;
