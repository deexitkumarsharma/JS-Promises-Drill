function wait(time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time * 1000);
  });
}

wait(4).then(() => {
  console.log("Run Function after given Time");
});
