function(pricesNASDAQ, printRecord, stopButton) {
	var stopButtonClicks = Observable.fromEvent(stopButton, 'click'),
		microsoftPrices =
			pricesNASDAQ.
				filter(function(priceRecord) {
					return priceRecord.name === "MSFT";
				}).takeUntil(stopButtonClicks)
				// ----- To finish this expression, use takeUntil to complete the sequence when stopButtonClicks fires.

	microsoftPrices.
		forEach(function(priceRecord) {
			printRecord(priceRecord);
		});
}
		