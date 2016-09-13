module.exports = function(grunt) {
  grunt.initConfig({
    package: grunt.file.readJSON('package.json'),
    browserify: {
      dist: {
        files: {
          'dist/magic-address.js': [ 'src/magic-address.js' ]
        },
        options: {
          browserifyOptions: { debug: true, standalone: 'MagicAddress' },
          transform: [
            [ 'babelify', { 'presets': [ 'es2015' ] } ]
          ]
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },

      dist: {
        src: [
          'Gruntfile.js',
          'src/magic-address.js'
        ]
      }
    },
    jscs: {
      options: {
        config: '.jscsrc'
      },

      dist: {
        src: [
          'Gruntfile.js',
          'src/magic-address.js'
        ]
      }
    },
    watch: {
      dist: {
        files: 'src/magic-address.js',
        tasks: [ 'jscs', 'jshint', 'browserify' ]
      }
    },
    uglify: {
      options: {
        banner: '/*! \n' +
                ' * <%= package.name %> - v<%= package.version %> \n' +
                ' * <%= package.homepage %> \n' +
                ' */ \n'
      },
      dist: {
        files: {
          'dist/magic-address.min.js': ['dist/magic-address.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['jscs', 'jshint', 'browserify', 'uglify']);
};
