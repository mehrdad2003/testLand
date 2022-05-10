module.exports=function(grunt){
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        uglify:{
            t1:{
                options:{
                    sourceMap:true
                },
                files:{
                    'public/all.min.js':['public/js/script.js']
                }
            }
        },
       
    })
}