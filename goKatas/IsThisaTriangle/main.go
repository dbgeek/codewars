package main

import "sort"

func IsTriangle1(a, b, c int) bool {
	return a + b > c && a + c > b && b + c > a
}


func IsTriangle2(a, b, c int) bool {
	d := []int{a,b,c}
	sort.Ints(d)
	return d[0] + d[1] > d[2]
}