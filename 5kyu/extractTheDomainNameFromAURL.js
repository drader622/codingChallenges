// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
  let domain;
  url = url.split('.');
  url.forEach(x => {
    if (x.includes('//')) {
      let splitURL = x.split('//');
      domain = splitURL[1]
    }
  });
  if (!url[0].includes('http')) domain = url[0];
  if (!domain || domain === 'www') {
    domain = url[1];
  }
  return domain;
}

console.log(domainName("http://google.com"), "google");
console.log(domainName("http://google.co.jp"), "google");
console.log(domainName("www.xakep.ru"), "xakep");
console.log(domainName("http://www.13l7yw8oqgyebbx420c1f.net/"), "13l7yw8oqgyebbx420c1f");
console.log(domainName("https://youtube.com"), "youtube");
console.log(domainName("v34kkyug4d.tv/index.php"), "v34kkyug4d")