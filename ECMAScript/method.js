// Map

nums = [1, 2, 3, 4, 5];
const mapped = nums.map((item) => {
  if (item > 3) {
    return item;
  }
});

console.log(mapped);

// Filter
const filtered = nums.filter((item) => item > 3);

console.log(filtered);
