package main

import "testing"

func TestDuplicate_count(t *testing.T) {
	tt := []struct {
		name string
		in   string
		want int
	}{
		{"test1", "abcde", 0},
		{"test2", "abcdea", 1},
		{"test3", "abcdeaB11", 3},
		{"test4", "indivisibility", 1},
	}
	for _, tc := range tt {
		t.Run(tc.name, func(t *testing.T) {
			got := duplicate_count(tc.in)
			if got != tc.want {
				t.Errorf("got: %v, want: %v", got, tc.want)
			}
		})
	}
}
