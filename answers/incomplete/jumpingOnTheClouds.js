const jumpingOnClouds = c => {
  let jump = 0;
  for (var i = 0; i < c.length; i++) {
    if (c[i + 2] === 0 && i + 2 < c.length) {
      console.log('jump two spots');
      i++;
      jump++;
    } else if (c[i + 1] === 0 && i + 1 < c.length) {
      console.log('jump one spot');
      jump++;
    }
  }
  console.log(jump);
  return jump;
};

// jumpingOnClouds([0, 0, 0, 0, 1, 0]);
jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]);
