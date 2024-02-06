export const js = () => {
	return app.gulp.src(app.path.src.js, { sourcemaps: app.isDev })
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "JS",
				message: "Error: <%= error.message %>"
			}))
		)
        //.pipe(app.gulp.dest(app.path.build.js))
		.pipe(app.plugins.webpack({
			mode: app.isBuild ? 'production' : 'development',
			output: {
				filename: 'script.js',
			}
		}))
		//.pipe(app.plugins.terser())
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(app.plugins.browserSync.stream());
};