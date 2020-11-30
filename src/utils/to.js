export default (promise) => {
  console.log('to prommise:');
  return promise.then((data) => {
    // console.log('data promise', data);
    return [null, data]
  }).catch((error) => {
    console.log('error message', error)
    try {
      const e = [JSON.parse(error.message)];
      return e;
    } catch (err) {
      console.log('err when parsing json', err)
      return [error.toString()]
    }
  })
}
