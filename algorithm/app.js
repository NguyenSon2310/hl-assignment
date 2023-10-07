miniMaxSum = (arr) => {
  console.log("Input:", arr);
  // convert arr to intergers array
  const intergers = arr.split(" ").map(Number).sort();

  // find four minimum numbers
  const fourMinNumbers = intergers.slice(0, 4);

  // find four maximum numbers
  const fourMaxNumbers = intergers.reverse().slice(0, 4);

  // declare variables for sum
  let min = fourMinNumbers.reduce((acc, num) => acc + num, 0);
  let max = fourMaxNumbers.reduce((acc, num) => acc + num, 0);

  console.log("Output:", min, max);

  // sort array again
  intergers.sort()
  for (let i = 0; i < intergers.length; i++) {
    const filtered = intergers.filter((element, index) => {
      return index !== i;
    });
    console.log(
      `${i + 1}: If we sum everything except ${
        intergers[i]
      }, our sum is: ${filtered
        .toString()
        .replaceAll(",", " + ")} = ${filtered.reduce(
        (acc, num) => acc + num,
        0
      )}`
    );
  }

  // Bonus:
  // Count total of array
  console.log("Count total of array:", intergers.length);

  // Find min in array
  console.log("Find min in array:", Math.min(...intergers));

  // Find max in array
  console.log("Find max in array:", Math.max(...intergers));

  // Find even elements in array
  console.log(
    "Find even elements in array:",
    intergers.filter((element) => {
      return element % 2 === 0;
    })
  );

  // Find odd elements in array
  console.log(
    "Find odd elements in array:",
    intergers.filter((element) => {
      return element % 2 !== 0;
    })
  );
};

miniMaxSum("2 4 1 3 5");
