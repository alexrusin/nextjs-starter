module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        fresh: 'var(--fresh)',
        vermillion: 'var(--vermillion)',
        sunshine: 'var(--sunshine)',
        clean: 'var(--clean)',
      },
      fontFamily: {
        quinto: ['Quintessential', 'Roboto'],
      },
    },
  },
  plugins: [],
};
