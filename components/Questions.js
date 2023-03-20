import React, { useState } from "react";
import Link from "next/link";

const Questions = () => {
  const [step, setStep] = useState("step1");
  const [answers, setAnswers] = useState({});

  if (step === "step1") {
    return (
      <div>
        <h3>What are you looking to do?</h3>
        <button
          onClick={() =>
            setAnswers(
              { ...answers, questionOne: "place to eat" },
              setStep("step2")
            )
          }
        >
          Place to eat
        </button>
        <button
          onClick={() =>
            setAnswers(
              { ...answers, questionOne: "tourist destinations" },
              setStep("step2")
            )
          }
        >
          Tourist destinations
        </button>
        <button
          onClick={() =>
            setAnswers(
              { ...answers, questionOne: "local parks" },
              setStep("step2")
            )
          }
        >
          Local parks
        </button>
        <button
          onClick={() =>
            setAnswers(
              { ...answers, questionOne: "museums and galleries" },
              setStep("step2")
            )
          }
        >
          Museums and galleries
        </button>
      </div>
    );
  } else if (step === "step2") {
    return (
      <div>
        <h3>How far from your current location?</h3>
        <button
          onClick={() =>
            setAnswers(
              { ...answers, questionTwo: "0km - 5km" },
              setStep("step3")
            )
          }
        >
          0km - 5km
        </button>
        <button
          onClick={() =>
            setAnswers(
              { ...answers, questionTwo: "5km - 10km" },
              setStep("step3")
            )
          }
        >
          5km - 10km
        </button>
        <button
          onClick={() =>
            setAnswers(
              { ...answers, questionTwo: "10km - 20km" },
              setStep("step3")
            )
          }
        >
          10km - 20km
        </button>
        <button
          onClick={() =>
            setAnswers(
              { ...answers, questionTwo: "does not matter" },
              setStep("step3")
            )
          }
        >
          Does not matter
        </button>
      </div>
    );
  } else if (step === "step3") {
    return (
      <div>
        <h3>How much are looking to spend</h3>
        <button
          onClick={() =>
            setAnswers({ ...answers, questionThree: "$" }, setStep("step4"))
          }
        >
          $
        </button>
        <button
          onClick={() =>
            setAnswers({ ...answers, questionThree: "$$" }, setStep("step4"))
          }
        >
          $$
        </button>
        <button
          onClick={() =>
            setAnswers({ ...answers, questionThree: "$$$" }, setStep("step4"))
          }
        >
          $$$
        </button>
        <button
          onClick={() =>
            setAnswers({ ...answers, questionThree: "$$$$" }, setStep("step4"))
          }
        >
          $$$$
        </button>
      </div>
    );
  } else if (step === "step4") {
    return (
      <div>
        <h3>
          You have selected the following. Click next to show your locations on
          our map
        </h3>
        <p>{answers.questionOne}</p>
        <p>{answers.questionTwo}</p>
        <p>{answers.questionThree}</p>
        <Link
          href={`/map?questionOne=${answers.questionOne}&questionTwo=${answers.questionTwo}&questionThree=${answers.questionThree}`}
        >
          <button>NEXT</button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <p></p>
    </div>
  );
};

export default Questions;

// we will set the state of which component should show on screen based on the current step state
// once the onclick is clicked then we should setstate to the next step and so on

/* questions to ask:
1- what are you in the mood for? 1- place to eat 2- visit tourist locations 3- local park
2- how far from current location? 1- 0km - 2km 2- 2km - 5km 3- more than 5km
aa how much are you looking to spend? */

// const takeAnswersAndChangeState = () => {
//   if (step === "step1") {
//     setAnswers({ ...answers, questionOne: "running" });
//     setStep("step2");
//     console.log("answers", answers);
//   } else if (step === "step2") {
//     setAnswers({ ...answers, questionTwo: "jumping" });
//     setStep("step3");
//     console.log("answers", answers);
//   } else if (step === "step3") {
//     setAnswers({ ...answers, questionThree: "flying" });
//     setStep("step2");
//     console.log("answers", answers);
//   }
// };
