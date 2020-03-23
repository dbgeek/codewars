package main

import "testing"

func TestEvaporator(t *testing.T) {
	tt := []struct {
		name       string
		content    float64
		evapPerDay int
		threshold  int
		want       int
	}{
		{
			"test1", 10, 10, 10, 22,
		},
		{
			"test2", 10, 10, 5, 29,
		},
		{
			"test3", 100, 5, 5, 59,
		},
	}
	for _, tc := range tt {
		t.Run(tc.name, func(t *testing.T) {
			got := Evaporator(tc.content, tc.evapPerDay, tc.threshold)
			if got != tc.want {
				t.Errorf("got: %v, want: %v", got, tc.want)
			}
		})
	}
}
