 export function getTemplateNode(id, selector) {
     return document
         .querySelector(id)
         .content.querySelector(selector)
         .cloneNode(true);
 }