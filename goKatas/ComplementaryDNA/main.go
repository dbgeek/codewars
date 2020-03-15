package main

import "strings"

func DNAStrand(dna string) string {
	side := map[string]string{
		"A": "T",
		"T": "A",
		"C": "G",
		"G": "C",
	}
	result := []string{}
	for _, v := range dna {
		result = append(result, side[string(v)])
	}
	return strings.Join(result, "")
}
