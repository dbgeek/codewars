package main

import "testing"

func TestArithmetic(t *testing.T) {
	tt := []struct {
		name      string
		a, b      int
		operation string
		want      int
	}{
		{
			"testAdd1", 8, 2, "add", 10,
		},
		{
			"testSubtrat1", 8, 2, "subtract", 6,
		},
		{
			"testMultiply", 8, 2, "multiply", 16,
		},
		{
			"testDivide", 8, 2, "divide", 4,
		},
	}

	for _, tc := range tt {
		t.Run(tc.name, func(t *testing.T) {
			got := Arithmetic(tc.a, tc.b, tc.operation)
			if got != tc.want {
				t.Errorf("want: %v, got: %v", tc.want, got)
			}
		})
	}
}
