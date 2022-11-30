function wait() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}
wait().then(function (resove) {
  console.log("Run Function after given Time");
});
