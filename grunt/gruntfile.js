module.exports = function(grunt){

    pkg: grunt.file.readJSON('package.json'),

        grunt.initConfig({

            watch: {

                files: ['../*.html','../css/*.css'],
                options:{
                    livereload:true
                }

            }
        });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);

};