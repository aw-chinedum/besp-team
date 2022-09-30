import {  Link, useParams} from "react-router-dom";
export default function Paginate(){
  const {pageNum}  = useParams();
  let previous = '/members/'+ ((pageNum - 1)? pageNum : 1);
  let next ='/members/'+ (pageNum + 1);
   return(
     <nav aria-label="Page navigation example" className="d-flex justify-content-center">
        <ul className="pagination">
            <li className="page-item">
                <a className="page-link" href={previous} aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li className="page-item page1"><a className="page-link" href="/members/1">1</a></li>
            <li className="page-item"><a className="page-link" href="/members/2">2</a></li>
            <li className="page-item">
                <a className="page-link" href="././NAN" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
     </nav>

    )
}

