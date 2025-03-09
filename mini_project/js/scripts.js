/* Changes the theme button style on hover */
function on_hover_theme_button() {
    let theme_button = document.getElementById("theme-button");
    theme_button.src = "images/theme-button-blue.png";
}

/* Reverts the theme button style when mouse leaves */
function on_leave_theme_button() {
    let theme_button = document.getElementById("theme-button");
    theme_button.src = "images/theme-button-white.png";
}

/* Cycles through the available color themes */
function cycle_theme() {
    let theme = localStorage.getItem("theme") || "default";

    if (theme === "default") {
        document.documentElement.style.setProperty("--banner-color", 'var(--federal-blue)');
        document.documentElement.style.setProperty("--gradient-color-start", 'var(--light-cyan)');
        document.documentElement.style.setProperty("--gradient-color-end", 'var(--pacific-cyan)');
        document.documentElement.style.setProperty("--gradient-panels-start", 'var(--light-cyan)');
        document.documentElement.style.setProperty("--gradient-panels-end", 'whitesmoke');
        document.documentElement.style.setProperty("--piping-color", 'var(--honolulu-blue)');        

        localStorage.setItem("theme", "all-blue");
    } else if (theme === "all-blue") {
        document.documentElement.style.setProperty("--banner-color", 'var(--space-cadet)');
        document.documentElement.style.setProperty("--gradient-color-start", 'var(--tiffany-blue)');
        document.documentElement.style.setProperty("--gradient-color-end", 'var(--floral-white)');
        document.documentElement.style.setProperty("--gradient-panels-start", 'var(--jasmine)');
        document.documentElement.style.setProperty("--gradient-panels-end", 'whitesmoke');
        document.documentElement.style.setProperty("--piping-color", 'var(--ut-orange)');

        localStorage.setItem("theme", "semi-colorful");
    } else if (theme === "semi-colorful") {
        document.documentElement.style.setProperty("--banner-color", 'var(--amaranth)');
        document.documentElement.style.setProperty("--gradient-color-start", 'var(--caribbean-current)');
        document.documentElement.style.setProperty("--gradient-color-end", 'whitesmoke');
        document.documentElement.style.setProperty("--gradient-panels-start", 'var(--hunyadi-yellow)');
        document.documentElement.style.setProperty("--gradient-panels-end", 'whitesmoke');
        document.documentElement.style.setProperty("--piping-color", 'var(--hunyadi-yellow)');        

        localStorage.setItem("theme", "colorful");
    } else {
        document.documentElement.style.setProperty("--banner-color", '#17598f');
        document.documentElement.style.setProperty("--gradient-color-start", '#fdfdfd');
        document.documentElement.style.setProperty("--gradient-color-end", 'cadetblue');
        document.documentElement.style.setProperty("--gradient-panels-start", 'whitesmoke');
        document.documentElement.style.setProperty("--gradient-panels-end", 'white');
        document.documentElement.style.setProperty("--piping-color", 'cornflowerblue');        

        localStorage.setItem("theme", "default");
    }

    document.getElementById('theme-name').textContent = localStorage.getItem("theme")   ;
}

/* Shows the fun content */
function fun_content_show() {
    let fun_content = document.getElementById("fun-contents");
    if (fun_content.style.display === "none") {
        fun_content.style.display = 'block';
    } else {
        fun_content.style.display = 'none';
    }
}