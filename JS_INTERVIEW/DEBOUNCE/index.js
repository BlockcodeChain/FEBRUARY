let count = 0;

let handleInput = () => {
    console.log("fetching", count++);
}

const dosomeMagic = function(fn, d) {
    let timeout;

    return function(...args) {
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            fn.apply(this, args);
        }, d);
    }
}

let bettersol = dosomeMagic(handleInput, 300);

// SCROLL
window.addEventListener("scroll", debounce(handleScroll, 300));
// RESIZE
window.addEventListener("resize", debounce(handleResize, 500));