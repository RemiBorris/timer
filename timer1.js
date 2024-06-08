const input = process.argv.slice(2);
const timer = function(array) {
  array.forEach(num => {
    if (num % 1 === 0 && num > 0) {
      setTimeout(() => process.stdout.write("\x07"), num * 1000);
    }
  });
};

timer(input);