import "./Pages.css";

function Pages({ totalPages, page, setPage, lastPage, firstPage }) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPages); i++) {
    pages.push(i);
  }

  return (
    <>
      {
        <div className="button_container">
          <button
            className={page <= 1 ? "page-btn disable" : "page-btn"}
            disabled={page <= 1}
            onClick={() => setPage(page - 1)}
          >
            <i className="fa-solid fa-angles-left"></i> Previous
          </button>
          {pages.map((p, index) => {
            if (index + 1 >= firstPage && index + 1 <= lastPage) {
              return (
                <button
                  className={p === page ? "page-btn active_button" : "page-btn"}
                  key={index}
                  onClick={() => setPage(p)}
                >
                  {p}
                </button>
              );
            } else {
              return "";
            }
          })}
          {page >= totalPages - 9 ? (
            ""
          ) : (
            <button className="extension">...</button>
          )}
          <button
            className={
              page === totalPages ? "page-btn active_button" : "page-btn"
            }
            onClick={() => {
              setPage(totalPages);
            }}
          >
            {totalPages}
          </button>
          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="page-btn"
          >
            Next <i className="fa-solid fa-angles-right"></i>
          </button>
        </div>
      }
    </>
  );
}

export default Pages;
