function CreateHTML(e,r,t,i){var n=RequireObjectCoercible(e),o=ToString(n),c="<"+r;if(""!==t){c=c+" "+t+'="'+ToString(i).replace(/"/g,"&quot;")+'"'}return c+">"+o+"</"+r+">"}