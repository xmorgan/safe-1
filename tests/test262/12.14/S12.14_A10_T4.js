  var c1 = 0, fin = 0;
  while (c1 < 2)
  {
    try
{      c1 += 1;
      break;}
    catch (er1)
{      }

    finally
{      fin = 1;
      continue;}

    fin = - 1;
    c1 += 2;
  }
  {
    var __result1 = fin !== 1;
    var __expect1 = false;
  }
  {
    var __result2 = c1 !== 2;
    var __expect2 = false;
  }
  var c2 = 0, fin2 = 0;
  while (c2 < 2)
  {
    try
{      throw "ex1";}
    catch (er1)
{      c2 += 1;
      break;}

    finally
{      fin2 = 1;
      continue;}

    c2 += 2;
    fin2 = - 1;
  }
  {
    var __result3 = fin2 !== 1;
    var __expect3 = false;
  }
  {
    var __result4 = c2 !== 2;
    var __expect4 = false;
  }
  