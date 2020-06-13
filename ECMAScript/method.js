nums = [1, 2, 3, 4, 5];

// Filter
const filtered = nums.filter((item) => item > 3);

console.log(filtered);

// Map
const mapped = nums.map((item) => {
  if (item > 3) {
    return item;
  }
});

console.log(mapped);
