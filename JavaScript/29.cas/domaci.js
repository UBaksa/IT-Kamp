// Napraviti funkciju koja racuna razliku u danima izmedju sledeca dva datuma:
//"1995-05-24" i "2004-09-15".

function fukncija(par1, par2) {
  return (Date.parse(par1) - Date.parse(par2)) / 86400000;
}

console.log(funckija("2004 sep 15", "99 may 24"));
