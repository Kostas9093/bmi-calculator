import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/bmi-calculator/"
});

// "/https://github.com/Kostas9093/bmi-calculator/"