CreateMethodProperty(Math,"cosh",function r(t){if(isNaN(t))return NaN;if(0===t&&1/t==1/0)return 1;if(0===t&&1/t==-1/0)return 1;if(t===1/0)return 1/0;if(t===-1/0)return 1/0;if((t=Math.abs(t))>709){var e=Math.exp(.5*t);return e/2*e}return((e=Math.exp(t))+1/e)/2});