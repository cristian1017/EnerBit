
export const Pagination = ({perPage, totalProdu, paginate}) => {
  const pageNumbers = [];
  for(let i = 1; i<=Math.ceil(totalProdu/perPage); i++){
    pageNumbers.push(i)
  }

  return (
    <>
      <nav aria-label="Page navigation example" style={{margin:"20px"}}>
        <ul className="pagination">
          {
            pageNumbers.map(number => {
              return (
                <li className="page-item" key={number}>
                  <a
                    onClick={() => paginate(number)}
                    className="page-link"
                  >
                    {number}
                  </a>
                </li>
              );
            })
          }
        </ul>
      </nav>
    </>
  );
}
