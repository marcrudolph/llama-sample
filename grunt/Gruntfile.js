module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-connect-proxy');
	grunt.loadNpmTasks('grunt-este-watch');
	grunt.loadNpmTasks('grunt-sync');

	grunt.initConfig({
		esteWatch: {
			options: {
				dirs: ['../source/**/']
			},
			'*': function() { return ['sync'] }			
		},
		sync: {
			output: {
				cwd: '../source',
				src: ['**', '!**/*.less', '!less' ],
				dest: 'output/'
			}
		},
		connect: {
			server: {
				options: {
					port: 8081,
					protocol: 'https',
					base: 'output/',
					hostname: '*',
					middleware: [require('grunt-connect-proxy/lib/utils').proxyRequest, require('serve-static')('output/')]
				},
				proxies: [{
					context: '/api',
					host: 'localhost',
					port: 8888,
					https: false,
					changeOrigin: false,
					xforward: true
				}]
			}

		}

	});

	grunt.registerTask('live', ['configureProxies:server', 'connect:server', 'sync', 'esteWatch']);
};