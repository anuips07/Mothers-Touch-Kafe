import React, { useState } from "react";
import "./Testimonials.css";
import { TestimonialData } from "./TestimonialData";

export default function Testimonials() {
  const [testData, setTestData] = useState(TestimonialData[0]);

  const toggleTestimonial = (cta) => {
    if (cta === "next") {
      setTestData(TestimonialData[testData?.id]);
    } else {
      setTestData(TestimonialData[testData?.id - 2]);
    }
  };

  return (
    <div className="test-cntr">
      <div className="test-toggle">
        <div className={testData?.id === 1 ? "prev-test disabled-toggle" : "prev-test"} disabled={testData?.id === 1} onClick={() => toggleTestimonial("prev")}>
          ◀︎
        </div>
        <div className={testData?.id === TestimonialData.length ? "next-test disabled-toggle" : "next-test"} disabled={testData?.id === TestimonialData.length} onClick={() => toggleTestimonial("next")}>
          ▶︎
        </div>
      </div>

      <div className="test-l test-panel">
        <div className="test-header">
          <img src="/images/testimonials/Msg-Bubble.png" />
          <h1>Testim</h1>
        </div>

        <div className="user-cntr">
          <img src="/images/testimonials/User-Icon.png" />
          <h2>{testData?.name}</h2>

          <div className="rating-cntr">
            <svg className={testData?.rating >= 1 ? "rating-active" : "no-rating"} xmlns="http://www.w3.org/2000/svg" width="37" height="38.009" viewBox="228.002 3500.997 37 38.009">
              <path d="m265.002 3520.002-14.162 4.466.03 14.538-8.725-11.778-14.143 4.52 8.77-11.746-8.77-11.745 14.143 4.519 8.724-11.779-.029 14.538 14.162 4.467Z" fill="#ffdf08" fill-rule="evenodd" data-name="Star1" />
            </svg>

            <svg className={testData?.rating >= 2 ? "rating-active" : "no-rating"} xmlns="http://www.w3.org/2000/svg" width="61" height="62.014" viewBox="275.003 3488.996 61 62.014">
              <path d="m336.003 3520.003-23.347 7.286.047 23.72-14.382-19.216-23.318 7.373 14.458-19.163-14.458-19.164 23.318 7.374 14.382-19.217-.047 23.72 23.347 7.287Z" fill="#ffdf08" fill-rule="evenodd" data-name="Star2" />
            </svg>

            <svg className={testData?.rating >= 3 ? "rating-active" : "no-rating"} xmlns="http://www.w3.org/2000/svg" width="98.906" height="98.959" viewBox="346.474 3470.462 98.906 98.959">
              <path d="m445.38 3519.942-37.855 11.628.076 37.852-23.32-30.666-37.807 11.766 23.443-30.58-23.443-30.58 37.808 11.766 23.32-30.666-.077 37.852 37.855 11.628Z" fill="#ffdf08" fill-rule="evenodd" data-name="Star3" />
            </svg>

            <svg className={testData?.rating >= 4 ? "rating-active" : "no-rating"} xmlns="http://www.w3.org/2000/svg" width="61" height="62.014" viewBox="275.003 3488.996 61 62.014">
              <path d="m336.003 3520.003-23.347 7.286.047 23.72-14.382-19.216-23.318 7.373 14.458-19.163-14.458-19.164 23.318 7.374 14.382-19.217-.047 23.72 23.347 7.287Z" fill="#ffdf08" fill-rule="evenodd" data-name="Star4" />
            </svg>

            <svg className={testData?.rating >= 5 ? "rating-active" : "no-rating"} xmlns="http://www.w3.org/2000/svg" width="37" height="38.009" viewBox="228.002 3500.997 37 38.009">
              <path d="m265.002 3520.002-14.162 4.466.03 14.538-8.725-11.778-14.143 4.52 8.77-11.746-8.77-11.745 14.143 4.519 8.724-11.779-.029 14.538 14.162 4.467Z" fill="#ffdf08" fill-rule="evenodd" data-name="Star5" />
            </svg>
          </div>
        </div>
      </div>

      <div className="test-r test-panel">
        <div className="test-header">
          <h1>onials</h1>
        </div>

        <div className="user-msg-cntr">
          {testData?.msg.split("$").map((msg, index) => {
            return <p key={`msg${index}`}>{msg}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
