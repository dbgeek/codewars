package main

import (
	"testing"
)

func TestNbYear(t *testing.T) {
	tt := []struct {
		name    string
		p0      int
		percent float64
		aug     int
		p       int
		want    int
	}{
		{
			"test1", 1500, 5, 100, 5000, 15,
		},
		{
			"test2", 1500000, 2.5, 10000, 2000000, 10,
		},
		{
			"test3", 1500000, 0.25, 1000, 2000000, 94,
		},
		{
			"test4", 1500000, 0.25, -1000, 2000000, 151,
		},
	}
	for _, tc := range tt {
		t.Run(tc.name, func(t *testing.T) {
			got := NbYear(tc.p0, tc.percent, tc.aug, tc.p)
			if got != tc.want {
				t.Errorf("got: %v, wanted: %v", got, tc.want)
			}
		})
	}
}
