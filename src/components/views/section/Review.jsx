import React, { useRef, useState, useEffect } from "react";

function checkOverflow(el) {
  let curOverflow = el.style.overflow;
  if (!curOverflow || curOverflow === "visible") el.style.overflow = "hidden";
  let isOverflowing =
    el.clientWidth < el.scrollWidth || el.clientHeight < el.scrollHeight;
  el.style.overflow = curOverflow;
  return isOverflowing;
}

function Review({ info }) {
  const [isSpread, SetIsSpread] = useState(false);
  const [isSpreadBtn, setIsSpreadBtn] = useState(false);
  const textBoxRef = useRef();

  useEffect(() => {
    SetIsSpread(false);
    if (textBoxRef.current) setIsSpreadBtn(checkOverflow(textBoxRef.current));
  }, [info]);

  return (
    <article className={isSpread ? "more" : ""}>
      <h1>
        {info.student_name} | {info.year_name + ", " + info.subject_view_name}
      </h1>
      <p className="date">{info.reg_datetime}</p>
      <div className="content" ref={textBoxRef}>
        {info.review}
      </div>

      <div
        className="more_button"
        onClick={() => {
          SetIsSpread(!isSpread);
        }}
      >
        {isSpreadBtn ? (isSpread ? "축소" : "더보기") : null}
      </div>
    </article>
  );
}

export default Review;
