package main

import "testing"

func TestGps(t *testing.T) {
	tt := []struct {
		name string
		x    []float64
		s    int
		want int
	}{
		{
			name: "test1",
			x:    []float64{0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25},
			s:    15,
			want: 74,
		},
		{
			name: "test2",
			x:    []float64{0.0, 0.23, 0.46, 0.69, 0.92, 1.15, 1.38, 1.61},
			s:    20,
			want: 41,
		},
		{
			name: "test3",
			x:    []float64{0.0, 0.11, 0.22, 0.33, 0.44, 0.65, 1.08, 1.26, 1.68, 1.89, 2.1, 2.31, 2.52, 3.25},
			s:    12,
			want: 219,
		},
	}
	for _, tc := range tt {
		t.Run(tc.name, func(t *testing.T) {
			result := Gps(tc.s, tc.x)
			if result != tc.want {
				t.Errorf("got: %v want: %v", result, tc.want)
			}
		})
	}
}