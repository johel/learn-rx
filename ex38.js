function (clicks, saveData, name) {
	return clicks.
		throttle(1000).
		concatMap(function () {
			return saveData(name);
		})
}
        