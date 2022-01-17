function Review({ info }) {
  return (
    <article>
      <h1>
        {info.student_name} | {info.year_name + ", " + info.subject_view_name}
      </h1>
      <p className="date">{info.reg_datetime}</p>
      <p className="content">{info.review}</p>
    </article>
  );
}

export default Review;
