Intl.PluralRules&&"function"==typeof Intl.PluralRules.__addLocaleData&&Intl.PluralRules.__addLocaleData({data:{categories:{cardinal:["one","two","many","other"],ordinal:["other"]},fn:function(a,l){var t=String(a).split("."),e=t[0],n=!t[1],o=Number(t[0])==a,r=o&&t[0].slice(-1);return l?"other":1==a&&n?"one":2==e&&n?"two":n&&(a<0||a>10)&&o&&0==r?"many":"other"}},locale:"iw"});