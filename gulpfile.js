//require:相当于<script src="gulp.js"></script>
var gulp = require("gulp");
// var concat = require("gulp-concat");
// var uglify = require("gulp-uglify");
// var rename = require("gulp-rename");
var sass = require("gulp-sass");

// let basepath = "C:\\phpStudy\\WWW\\anta";

//定义一个复制文件的任务
//task函数的第一个参数：copyHtml是任务名
//task函数的第一个参数function是任务copyHtml对应的功能
gulp.task("copy-html",function(){
	//gulp.src("index.html").pipe(gulp.dest("dist"));
	//gulp.src("index.html")
	gulp.src("*.html")
	.pipe(gulp.dest("C:\\phpStudy\\PHPTutorial\\WWW\\anta"));
});



//复制图片文件
gulp.task("copy-img",function(){
	gulp.src("img/**/*")
	.pipe(gulp.dest("C:\\phpStudy\\PHPTutorial\\WWW\\anta\\img"));
});


gulp.task("copy-js",function(){
	gulp.src("js/**/*")
	.pipe(gulp.dest("C:\\phpStudy\\PHPTutorial\\WWW\\anta\\js"));
});

gulp.task("copy-css",function(){
	gulp.src("css/**/*")
	.pipe(gulp.dest("C:\\phpStudy\\PHPTutorial\\WWW\\anta\\css"));
});

gulp.task("copy-font",function(){
	gulp.src("font/**/*")
	.pipe(gulp.dest("C:\\phpStudy\\PHPTutorial\\WWW\\anta\\font"));
});
gulp.task("copy-php",function(){
	gulp.src("php/**/*")
	.pipe(gulp.dest("C:\\phpStudy\\PHPTutorial\\WWW\\anta\\php"));
});


// //合并js文件
// gulp.task("concat-js",function(){
// 	gulp.src(["js/index.js","js/goodslist.js"])
// 	.pipe(concat("common.js"))
// 	.pipe(gulp.dest(basepath+"\\js"));
// });

// //合并并且压缩js文件
// gulp.task("concatanduglify-js",function(){
// 	gulp.src(["js/index.js","js/goodslist.js"])
// 	.pipe(concat("common.js"))
// 	.pipe(uglify())
// 	.pipe(gulp.dest(basepath+"\\js"));
// });

// //管道：pipe。

// //合并并且压缩重命名js文件
// gulp.task("concatanduglifyandrename-js",function(){
// 	gulp.src(["js/index.js","js/goodslist.js"])
// 	.pipe(concat("common.js"))
// 	.pipe(gulp.dest(basepath+"\\js"))
// 	.pipe(uglify())
// 	.pipe(rename("common.min.js"))
// 	.pipe(gulp.dest(basepath+"\\js"));
// });

// sass的编译
gulp.task("sass",function(){
	gulp.src("workSass/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("C:\\phpStudy\\PHPTutorial\\WWW\\anta\\css"));
});
7

// build全部
gulp.task("build",["copy-html","copy-img","copy-js","copy-css","copy-font","copy-php","sass"],function(){
	console.log("OK");
});
// gulp.task("build",["copy-html","copy-img"],function(){
// 	console.log("o le");
// });

//监听
gulp.task("watchall",function(){
	//一旦过根目录下任何html文件的内容发生改变，那么就立即执行任务copy-html;
	gulp.watch("*.html",["copy-html"]);
	gulp.watch("css/**/*",["copy-css"]);
	gulp.watch("img/**/*",["copy-img"]);
	gulp.watch("js/**/*",["copy-js"]);
	gulp.watch("php/**/*",["copy-php"]);
	gulp.watch("font/**/*",["copy-font"]);
	gulp.watch("workSass/**/*.scss",["sass"]);
});
