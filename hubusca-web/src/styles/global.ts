import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

    :root {
        /* --- Colors --- */
        /* Brand */
        --brand-1: #008000;
        --brand-2: #93bf85;
        --brand-3: #dbead5;

        /* Grey */
        --grey-0: #0b0d0d;
        --grey-1: #212529;
        --grey-2: #495057;
        --grey-3: #868e96;
        --grey-4: #adb5bd;
        --grey-5: #ced4da;
        --grey-6: #dee2e6;
        --grey-7: #e9ecef;
        --grey-8: #f1f3f5;
        --grey-9: #f8f9fa;
        --grey-10: #fdfdfd;

        /* White & Black */
        --white: #fff;
        --black: #000;

        /* --- Fonts --- */
        --font-family-lexend: 'Lexend', sans-serif;
        --font-family-inter: 'Inter', sans-serif;

        /* --- Font Sizes --- */
        /* Headings */
        --size-h1: 2.75rem;
        --size-h2: 2.25rem;
        --size-h3: 2rem;
        --size-h4: 1.75rem;
        --size-h5: 1.5rem;
        --size-h6: 1.25rem;
        --size-h7: 1rem;

        /* Body */
        --size-body-1: 1rem;
        --size-body-2: 0.88rem;
        --size-body-3: 0.75rem;
        --size-body-4: 0.63rem;

        /* --- Weight --- */
        --weight-400: 400;
        --weight-500: 500;
        --weight-600: 600;
        --weight-700: 700;

        /* --- Gap --- */
        --gap-5: 5px;
        --gap-10: 10px;
        --gap-15: 15px;
        --gap-20: 20px;
        --gap-25: 25px;
        --gap-30: 30px;
        --gap-60: 60px;

        /* --- Boder Radius --- */
        --border-radius-4: 4px;
        --border-radius-8: 8px;
        --border-radius-150: 150px;
    }

    html, body, div, span, iframe, h1, h2, h3, h4, h5, h6, p, a, img, small, strong, form, label, article, aside, figure, figcaption, footer, header, nav, section, button, textarea, option, input, select,ul,li {
        margin: 0;
        padding: 0;
        font-size: 100%;
        vertical-align: baseline;
        text-decoration: none;
        border: none;
        box-sizing: border-box;
        background: none;
        color: inherit;
    }
    
    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px white inset;
    }
    
    article, aside, details, figcaption, figure, 
    footer, header, nav, section {
        display: block;
    }
    
    body {
        width: 100vw;
        height: 100vh;
        overflow-x: hidden;
        position: relative;
        -webkit-font-smoothing: antialiased;
    }

    ul,li {
        list-style: none;
    }

    input, select{
        outline: none;
        background: transparent;
    }

    button{
        cursor: pointer;
        display: inline-flex;
	    align-items: center;
	    justify-content: center;
        border: none;
        background: transparent;
        transition: 0.3s;
    }

`;
