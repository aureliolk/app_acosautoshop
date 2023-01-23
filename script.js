function addEllipsis(text, length) {
    if (text.length > length) {
        return text.substring(0, length) + "...";
    }
    return text;
}

const title = document.querySelectorAll("#title h2");
title.forEach((h2) => {
    h2.textContent = addEllipsis(h2.textContent, 30);
});

const summary = document.querySelectorAll("#summary p");
summary.forEach((p) => {
    p.textContent = addEllipsis(p.textContent, 120);
});