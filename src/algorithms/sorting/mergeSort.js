export const getMergeSortAnimations = (array) => {
  const animations = [];
  if (array.length <= 1) return;

  mergeSort(array, 0, array.length - 1, animations);
  return animations;
};

const mergeSort = (array, start, end, animations) => {
  if (end <= start) return;
  const mid = Math.floor((start + end) / 2);

  mergeSort(array, start, mid, animations);
  mergeSort(array, mid + 1, end, animations);

  mergeInPlace(array, start, mid, end, animations);
};

const mergeInPlace = (array, start, mid, end, animations) => {
  let i = start;
  let j = mid + 1;

  const merged = [];
  let k = 0;

  while (i <= mid && j <= end) {
    animations.push({
      type: "comparison",
      color: "indigo",
      data: [i, j],
    });

    animations.push({
      type: "comparison",
      color: "mediumpurple",
      data: [i, j],
    });

    if (array[i] < array[j]) {
      animations.push({
        type: "sort",
        data: [start + k, array[i]],
      });

      merged[k++] = array[i++];
    } else {
      animations.push({
        type: "sort",
        data: [start + k, array[j]],
      });

      merged[k++] = array[j++];
    }
  }

  while (i <= mid) {
    animations.push({
      type: "sort",
      data: [start + k, array[i]],
    });
    merged[k++] = array[i++];
  }

  while (j <= end) {
    animations.push({
      type: "sort",
      data: [start + k, array[j]],
    });
    merged[k++] = array[j++];
  }

  for (let l = 0; l < merged.length; l++) {
    array[start + l] = merged[l];
    if (merged.length == array.length)
      animations.push({
        type: "done",
        color: "green",
        data: [start + l],
      });
  }
};
