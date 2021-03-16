function steamrollArray(val, result = []) {
  val.forEach(item => {
    if (Array.isArray(item)) steamrollArray(item, result);
    else result.push(item);
  });
  return result;
}

steamrollArray([1, [2], [3, [[4]]]]); //[1,2,3,4]