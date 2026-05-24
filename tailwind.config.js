/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        sans: ['Mona Sans', 'Montserrat', 'system-ui', 'sans-serif'],
        airge: ['Mona Sans', 'Montserrat', 'system-ui', 'sans-serif'],
      },
      colors: {
        /* AIRGÉ semantic tokens (mirror :root in src/index.css) */
        'airge-bg': 'var(--airge-bg)',
        'airge-bg-subtle': 'var(--airge-bg-subtle)',
        'airge-bg-deep': 'var(--airge-bg-deep)',
        'airge-surface': 'var(--airge-surface)',
        'airge-surface-soft': 'var(--airge-surface-soft)',
        'airge-foreground': 'var(--airge-foreground)',
        'airge-muted': 'var(--airge-muted)',
        'airge-primary': 'var(--airge-primary)',
        'airge-primary-hover': 'var(--airge-primary-hover)',
        'airge-primary-light': 'var(--airge-primary-light)',
        'airge-border': 'var(--airge-border)',
        'airge-accent-warm': 'var(--airge-accent-warm)',
        'airge-accent-danger': 'var(--airge-accent-danger)',
        'airge-ink': 'var(--airge-ink)',

        /* Legacy template names → same AIRGÉ values (avoid breaking existing JSX) */
        primary: 'var(--airge-bg-subtle)',
        'brand-blue': 'var(--airge-primary)',
        'coral-red': 'var(--airge-accent-danger)',
        'slate-gray': 'var(--airge-muted)',
        'pale-blue': 'var(--airge-surface)',
        'white-400': 'rgba(244, 247, 248, 0.80)',
        'security-ink': 'var(--airge-bg-deep)',

        /* Aliases used in earlier config pass */
        'airge-text': 'var(--airge-foreground)',
        'airge-surface-subtle': 'var(--airge-surface-soft)',
        'airge-highlight': 'var(--airge-primary-light)',
        'airge-warm': 'var(--airge-accent-warm)',
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.35)',
        'soft-card': '0 10px 40px -10px rgba(0, 0, 0, 0.35)',
        'tarif-card': '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
        'cta-final': '0 25px 50px -12px rgba(94, 224, 229, 0.25)',
      },
      backgroundImage: {
        /* Grid “raillures” — kept on dark backgrounds (teal border tone) */
        'hero-grid':
          'linear-gradient(180deg, rgba(58, 119, 121, 0.25) 2.5%, rgba(58, 119, 121, 0) 2.5%), linear-gradient(90deg, rgba(58, 119, 121, 0.25) 2.5%, rgba(58, 119, 121, 0) 2.5%)',
      },
      screens: {
        wide: '1440px',
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
