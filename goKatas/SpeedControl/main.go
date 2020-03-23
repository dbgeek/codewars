package main

func Gps(s int, x []float64) int {
	distance := []float64{}
	for i := 1; i < len(x); i++ {
		distance = append(distance, x[i]-x[i-1])
	}
	maxSpeed := 0.0
	for _, v := range distance {
		speed := 3600 * v / float64(s)
		if maxSpeed < speed {
			maxSpeed = speed
		}
	}
	return int(maxSpeed)
}
