'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');

  grunt.initConfig({
    jshint: {
      dev: {
        src: ['Gruntfile.js', 'test/**/*.js', 'lib/**/*.js']
      },
      options: {
        jshintrc: 'config/.jshintrc'
      }
    },

    jscs: {
      dev: {
        src: ['Gruntfile.js', 'test/**/*.js', 'lib/**/*.js']
      },
      options: {
        config: 'config/.jscsrc',
        esnext: true,
        verbose: true,
        requireCurlyBraces: ['if']
      }
    },

    simplemocha: {
      dev: {
        src: ['test/**/*.js']
      },

      options: {
        globals: ['should'],
        timeout: 3000,
        ignoreLeaks: false,
        grep: '',
        ui: 'bdd',
        reporter: 'tap'
      }
    }
  });

  grunt.registerTask('test', ['jshint:dev', 'jscs:dev']);
  grunt.registerTask('default', ['test']);
};
