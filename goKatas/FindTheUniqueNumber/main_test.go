package main

import "testing"

func TestFindUniq(t *testing.T) {
	tt := []struct {
		name string
		in   []float32
		want float32
	}{
		{
			"test1",
			[]float32{1.0, 1.0, 1.0, 2.0, 1.0, 1.0},
			2,
		},
		{
			"test1",
			[]float32{0, 0, 0.55, 0, 0},
			0.55,
		},
	}
	for _, tc := range tt {
		t.Run(tc.name, func(t *testing.T) {
			got := FindUniq(tc.in)
			if got != tc.want {
				t.Errorf("got: %v, want: %v", got, tc.want)
			}
		})
	}
}
