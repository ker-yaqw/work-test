export const avifWebp = () => {
	return app.gulp.src(app.path.src.avifWebp)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "IMAGES",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(app.plugins.newer(app.path.build.images))
        .pipe(app.plugins.webp())
		.pipe(app.gulp.dest(app.path.build.images))
		.pipe(app.gulp.src(app.path.src.avifWebp))
		.pipe(app.plugins.newer(app.path.build.images))
		.pipe(
            app.plugins.if(
                app.isBuild,
                app.plugins.imagemin({
                    verbose: true,
                    progressive: true,
                    svgoPlugins: [{ removeViewBox: false }],
                    interlaced: true,
                    optimizationLevel: 3, // 0 to 7
                })
            )
		)
		.pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.plugins.browserSync.stream());
};
