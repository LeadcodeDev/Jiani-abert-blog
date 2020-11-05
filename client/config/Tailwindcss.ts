export default {
    theme: {},
    variants: {},
    plugins: [],
    cssPath: '@/public/css/tailwind.css',
    configPath: 'tailwind.config.js',
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: ['src/components/**/*.vue', 'src/template/layouts/**/*.vue', 'src/template/pages/**/*.vue', 'src/plugins/**/*.js', 'nuxt.config.js'],
    },
}