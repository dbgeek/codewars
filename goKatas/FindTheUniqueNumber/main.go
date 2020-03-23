package main

func FindUniq(arr []float32) float32 {
	seen := make(map[float32]int)
	unique := make(map[float32]bool)
	for _, v := range arr {
		if _, ok := seen[v]; ok {
			seen[v]++
			delete(unique, v)

		} else {
			seen[v] = 1
			unique[v] = true
		}
	}
	for k := range unique {
		return k
	}
	return arr[0]
}
