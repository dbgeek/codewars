package main

import "testing"

func TestDNAStrand(t *testing.T) {
	tt := []struct {
		name string
		in   string
		out  string
	}{
		{
			name: "test1",
			in:   "AAAA",
			out:  "TTTT",
		},
		{
			name: "test2",
			in:   "ATTGC",
			out:  "TAACG",
		},
		{
			name: "test3",
			in:   "GTAT",
			out:  "CATA",
		},
	}

	for _, tc := range tt {
		t.Run(tc.name, func(t *testing.T) {
			result := DNAStrand(tc.in)
			if result != tc.out {
				t.Errorf("got: %v want: %v\n", result, tc.out)
			}
		})
	}
}
