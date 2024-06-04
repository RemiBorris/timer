const input = process.argv.slice(2);
input.forEach(num => {
  if (num % 1 === 0 && num > 0) {
    setTimeout(() => process.stdout.write("\x07"), num * 1000)
  }
});