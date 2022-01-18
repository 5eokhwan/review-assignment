import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import Loading from "../../global/Loading";
import Review from "./Review";
import { renewTotalData } from "../../../reducers/page";

function Reviews() {
  const dispatch = useDispatch();
  const { size, offset } = useSelector((state) => state.pageReducer);
  const { filters } = useSelector((state) => state.filtersReducer);
  const [reviews, setReviews] = useState(null);

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
      console.log(
        `https://dev.seoltab.com/front_test_review?SIZE=${size}&OFFSET=${offset}` +
          yearFilterQueryStr +
          subjectFilterQueryStr
      );
      const response = await Axios.get(
        `https://dev.seoltab.com/front_test_review?SIZE=${size}&OFFSET=${offset}` +
          yearFilterQueryStr +
          subjectFilterQueryStr
      );
      console.log(response.data);
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
    reviews.map((review, i) => <Review info={review} key={i} />)
  ) : (
    <Loading />
  );
}

export default Reviews;
