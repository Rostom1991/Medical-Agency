/* eslint-disable react/prop-types */

function Pagination({ totalPosts, postsPerPage, currentPage, setCurrentPage }) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="flex gap-2">
      {pages.map((page, index) => (
        <button
          onClick={() => setCurrentPage(page)}
          className={`${
            page === currentPage
              ? "border-2 rounded w-[1.7rem] py-[1px] bg-cyan-600 text-white text-sm "
              : "border-2 rounded w-[1.7rem] py-[1px] text-gray-700 text-sm "
          }`}
          key={index}>
          {" "}
          {page}{" "}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
