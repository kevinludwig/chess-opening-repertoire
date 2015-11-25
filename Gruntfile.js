'use strict';
module.exports = function(grunt) {
    var files = ['Gruntfile.js', 'app.js', 'lib/**/*.js', 'controllers/**/*.js', 'test/**/*.js'];

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: ['coverage'],
        jshint: {
            files: files,
            options: {
                bitwise: true,
                curly: true,
                eqeqeq: true,
                forin: true,
                freeze: true,
                nocomma: true,
                noarg: true,
                nonew: true,
                notypeof: true,
                shadow: false,
                undef: true,
                unused: true,
                node: true,
                mocha: true
            }
        },
        jscs: {
            src: files,
            options: {
                preset: 'google',
                validateIndentation: 4,
                requireCamelCaseOrUpperCaseIdentifiers: 'ignoreProperties',
                disallowMultipleVarDecl: null,
                requireMultipleVarDecl: 'onevar',
                maximumLineLength: {
                    value: 160,
                }
            }
        },
        jsbeautifier: {
            files: files
        },
        mocha_istanbul: {
            coverage: {
                src: 'test',
                options: {
                    'report-formats': 'html',
                    print: 'summary',
                    check: {
                        lines: 90,
                        functions: 90,
                        statements: 90,
                        branches: 80
                    }
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['clean', 'jshint', 'jsbeautifier', 'jscs', 'mocha_istanbul']);
};
