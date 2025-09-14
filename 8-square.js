const size = parseInt(process.argv[2]);

function printRow(n, count = 0) {
  if (count >= n) return;
  console.log('X'.repeat(n));
  printRow(n, count + 1);
}

if (isNaN(size)) {
  console.log('Missing size');
} else {
  printRow(size);
}