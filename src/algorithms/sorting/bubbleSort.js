export const getBubbleSortAnimations = (array) => {
  const animations = [];
  if (array.length <= 1) return array;

  bubbleSort(array, animations);
  return animations;
};

const bubbleSort = (array, animations) => {
  const n = array.length;
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n - i; j++) {
      // Comparing
      animations.push({
        type: "comparison",
        color: "indigo",
        data: [j, j - 1],
      });
      // Comparing Finished
      animations.push({
        type: "comparison",
        color: "mediumpurple",
        data: [j, j - 1],
      });

      if (array[j] < array[j - 1]) {
        animations.push({
          type: "swap",
          data: [
            [j, array[j - 1]],
            [j - 1, array[j]],
          ],
        });

        let temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      }
    }

    animations.push({
      type: "done",
      color: "green",
      data: [n - i - 1],
    });
  }
};
