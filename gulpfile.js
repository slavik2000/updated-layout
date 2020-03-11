const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const watch = require("gulp-watch");
const ghPages = require("gh-pages");
const path = require("path");

gulp.task("sass-compile", function() {
  return gulp
    .src("./scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("./css"));
});

function deploy(cb) {
  ghPages.publish(path.join(process.cwd(), "./"), cb);
}
exports.deploy = deploy;

gulp.task("watch", function() {
  gulp.watch("./scss/**/*.scss", gulp.series("sass-compile"));
});
