function IsInteger(a){return"number"===Type(a)&&(!isNaN(a)&&a!==1/0&&a!==-1/0&&Math.floor(Math.abs(a))===Math.abs(a))}