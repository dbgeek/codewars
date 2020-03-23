package main

import "unicode"

func duplicate_count(s1 string) int {
	seen := make(map[rune]int)
	for _, v := range s1 {
		lowerRune := unicode.ToLower(v)
		if _, ok := seen[lowerRune]; ok {
			seen[lowerRune]++
		} else {
			seen[lowerRune] = 1
		}
	}
	dublicateCount := 0
	for _, v := range seen {
		if v > 1 {
			dublicateCount++
		}
	}
	return dublicateCount
}
