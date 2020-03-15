package kata

import (
	"testing"
)

func TestWolfCount(t *testing.T) {

	tt := []struct {
		name string
		in   string
		out  int
	}{
		{
			name: "test1",
			in:   "abracadabra",
			out:  5,
		},
	}

	for _, tc := range tt {
		t.Run(tc.name, func(t *testing.T) {
			got := GetCount(tc.in)
			if got != tc.out {
				t.Errorf("want: %v & got: %v\n", tc.out, got)
			}
		})
	}

}
