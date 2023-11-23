module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],

    framework: {
        name: "@storybook/web-components-vite",
        options: {}
    },

    async viteFinal(config, { configType }) {
		// customize the Vite config here
		config.optimizeDeps.include = [
			...(config.optimizeDeps?.include ?? []),
			'@storybook/web-components',
		]
		config.optimizeDeps.exclude = [...(config.optimizeDeps?.exclude ?? []), 'lit', 'lit-html']

		// return the customized config
		return config
	},

    docs: {
        autodocs: true
    }
}