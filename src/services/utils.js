export function getNodeFromTemplate(template, selector) {

    return new DOMParser()
        .parseFromString(template, "text/html")
        .querySelector(selector);
}