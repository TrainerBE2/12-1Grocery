import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  server: {
    port: 3000,
    fs: {
      strict: false,
    },
  },
  define: {
    __DEV__: process.env.NODE_ENV !== 'production',
  },
};
