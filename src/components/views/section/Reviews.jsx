import { useEffect, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Axios from "axios";
import Loading from "../../global/Loading";
import Review from "./Review";
import { renewTotalData } from "../../../reducers/page";
// import { data } from "./testData";
function Reviews() {
  const dispatch = useDispatch();
  const { size, offset } = useSelector(
    (state) => state.pageReducer,
    shallowEqual
  );
  const { filters } = useSelector((state) => state.filtersReducer);
  const [reviews, setReviews] = useState(null);
  console.log("reviews");
  useEffect(() => {
    async function fetchData() {
      const yearFilterQueryStr =
        filters[0].names[filters[0]["active"]] !== "전체"
          ? `&YEAR=${filters[0].names[filters[0]["active"]]}`
          : "";
      const subjectFilterQueryStr =
        filters[1].names[filters[1]["active"]] !== "전체"
          ? `&SUBJECT=${filters[1].names[filters[1]["active"]]}`
          : "";
      const reqUri =
        `/front_test_review?SIZE=${size}&OFFSET=${offset}` +
        yearFilterQueryStr +
        subjectFilterQueryStr;
      const response = await Axios.get(reqUri);
      //현재 백엔드가 작동하지 않으므로 테스트 데이터를 넣었습니다.
      //원래는 필터가 변할 때마다 쿼리 파라미터값 변경 후 서버에 재요청하여 새로운 필터링 된 데이터를 받아와서 렌더링합니다.
      console.log("요청: " + reqUri);
      // const response = data;
      console.log("response", response.data);
      setReviews(response.data.data);
      dispatch(renewTotalData(response.data.total));
    }
    fetchData();
  }, [filters, offset]);

  if (reviews && reviews.length === 0)
    return (
      <div style={{ textAlign: "center", margin: "50px" }}>값이 없습니다.</div>
    );
  return reviews ? (
    <div>
      {reviews.map((review, i) => (
        <Review info={review} key={i} />
      ))}{" "}
    </div>
  ) : (
    <Loading />
  );
}

export default Reviews;
