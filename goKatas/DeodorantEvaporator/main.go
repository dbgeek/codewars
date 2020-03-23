package main

func Evaporator(content float64, evapPerDay int, threshold int) int {
	thresholdPrc := float64(threshold) / 100
	lowestContent := content * thresholdPrc
	evapPerDayPrc := float64(evapPerDay) / 100
	days := 0
	for content >= lowestContent {
		content -= content * evapPerDayPrc
		days++
	}
	return days
}
