Intl.PluralRules&&"function"==typeof Intl.PluralRules.__addLocaleData&&Intl.PluralRules.__addLocaleData({data:{categories:{cardinal:["one","other"],ordinal:["many","other"]},fn:function(a,l){var e=String(a).split("."),t=Number(e[0])==a,n=t&&e[0].slice(-1);return l?6==n||9==n||t&&0==n&&0!=a?"many":"other":1==a?"one":"other"}},locale:"kk"});