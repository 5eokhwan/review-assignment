import { useSelector, useDispatch } from "react-redux";
import {
  selectPage,
  nextPage,
  previousPage,
  nextOffet,
  previousOffet,
} from "../../../reducers/page";

function Pagination() {
  const dispatch = useDispatch();

  const { size, gap, offset, totalReview } = useSelector(
    (state) => state.pageReducer
  );

  const returnSE = (offset, totalPage) => {
    if (offset - gap / 2 < 1) return [0, 0 + gap];
    else if (offset - gap / 2 > totalPage - gap)
      return [totalPage - gap, totalPage];
    else return [Math.floor(offset - gap / 2), Math.floor(offset + gap / 2)];
  };

  const totalPage = Math.ceil(totalReview / size);

  const numBtnList = [];
  for (let i = 0; i < totalPage; i++) numBtnList.push(i + 1);
  console.log(numBtnList);
  const [s, e] = returnSE(offset, totalPage);
  const target = numBtnList.slice(s, e);
  console.log(offset, totalPage, s, e, target);
  return (
    <>
      <div
        className={offset !== 1 ? "page arrow left two" : "page arrow none"}
        onClick={() => dispatch(previousOffet())}
      ></div>
      <div
        className={offset !== 1 ? "page arrow left" : "page arrow none"}
        onClick={() => dispatch(previousPage())}
      ></div>

      {target.map((val, i) => (
        <div
          className={val === offset ? "page active" : "page"}
          key={i}
          onClick={() => dispatch(selectPage(val))}
        >
          {val}
        </div>
      ))}
      {totalReview ? (
        <>
          <div
            className={
              offset !== totalPage ? "page arrow right" : "page arrow none"
            }
            onClick={() => dispatch(nextPage())}
          ></div>
          <div
            className={
              offset !== totalPage ? "page arrow right two" : "page arrow none"
            }
            onClick={() => dispatch(nextOffet())}
          ></div>
        </>
      ) : undefined}
    </>
  );
}

export default Pagination;
