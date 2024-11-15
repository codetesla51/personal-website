/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            // Custom Colors
            colors: {
                bg: "#111111",
                bgsec: "#0a0a0a",
                acc: "#27ea66",
                tx: "#fff",
                dark: "#111111",
                br: "#b6b1ae"
            },

            // Custom Fonts
            fontFamily: {
                kink: ["Kanit", "sans-serif"] // Use Google Font 'Roboto' as the default sans font
            },

            // Font Sizes
            fontSize: {
                sm: "0.8rem",
                base: "1rem",
                xl: "1.25rem",
                "2xl": "1.563rem",
                "3xl": "1.953rem",
                "4xl": "2.441rem",
                "5xl": "3.052rem"
            },

            // Other Custom Styles (optional)
            spacing: {
                18: "4.5rem", // Custom spacing for padding/margin
                72: "18rem",
                84: "21rem",
                96: "24rem"
            },
            borderRadius: {
                lg: "0.5rem",
                xl: "1rem"
            }
        }
    },
    plugins: []
};
