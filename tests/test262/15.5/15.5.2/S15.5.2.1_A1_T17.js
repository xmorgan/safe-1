  var __str = new String(1.2345);
  {
    var __result1 = typeof __str !== "object";
    var __expect1 = false;
  }
  {
    var __result2 = __str.constructor !== String;
    var __expect2 = false;
  }
  {
    var __result3 = __str != "1.2345";
    var __expect3 = false;
  }
  __str = new String(1.234567890);
  {
    var __result4 = typeof __str !== "object";
    var __expect4 = false;
  }
  {
    var __result5 = __str.constructor !== String;
    var __expect5 = false;
  }
  {
    var __result6 = __str != "1.23456789";
    var __expect6 = false;
  }
  __str = new String(1.234500000000000000000000000);
  {
    var __result7 = typeof __str !== "object";
    var __expect7 = false;
  }
  {
    var __result8 = __str.constructor !== String;
    var __expect8 = false;
  }
  {
    var __result9 = __str != "1.2345";
    var __expect9 = false;
  }
  