Intl.PluralRules&&"function"==typeof Intl.PluralRules.__addLocaleData&&Intl.PluralRules.__addLocaleData({data:{categories:{cardinal:["one","other"],ordinal:["one","many","other"]},fn:function(a,l){var e=String(a).split("."),n=e[0],t=n.slice(-2);return l?1==n?"one":0==n||t>=2&&t<=20||40==t||60==t||80==t?"many":"other":1==a?"one":"other"}},locale:"ka"});