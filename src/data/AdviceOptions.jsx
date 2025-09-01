const adviceOptions = {
  headers: ["Digital Advisor", "Personal Advisor", "Personal Advisor Select", "Wealth Management"],
  rows: [
    {
      label: "Minimum to qualify",
      values: ["$100²", "$50,000", "$500,000", "$5M+"],
    },
    {
      label: "Annual advisory fee (cost per $10,000)",
      values: [
        "Approximately $15–$163",
        "Approximately $30–$313",
        <>No more than $30<sup>4</sup></>,
        <>No more than $30<sup>4</sup></>,
      ],
    },
    {
      label: "Access to an advisor",
      values: [false, true, true, true],
    },
    {
      label: "Access to a dedicated advisor",
      values: [false, false, true, true],
    },
    {
      label: "Access to a dedicated team of specialists",
      values: [false, false, false, true],
    },
    {
      label: "Active portfolio options",
      values: [true, true, true, true],
    },
    {
      label: <>Automated tax-loss harvesting<sup>5</sup></>,
      values: [true, false, true, true],
    },
    {
      label: "Personal trust services",
      values: [false, false, true, true],
    },
    {
      label: "Tax-Efficient Retirement Strategy",
      values: [false, false, true, true],
    },
    {
      label: "Legacy & estate planning",
      values: [false, false, false, true],
    },
  ],
};


export default adviceOptions;