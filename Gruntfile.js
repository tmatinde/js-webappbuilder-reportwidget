
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: [
                'settings/**/*.js',
                '*.js'
            ]
        },
        jsonlint: {
            all: {
                src: [
                    'settings/**/*.json',
                    '*.json'],
                options: {
                    format: true,
                    indent: 2,
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jsonlint');

    grunt.registerTask('default', ['jshint', 'jsonlint']);
};