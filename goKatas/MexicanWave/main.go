package main

import (
	"strings"
)

func wave(words string) []string {
	theWave := []string{}
	chars := strings.Split(words, "")
	for i, v := range words {
		if string(v) == " " {
			if i > 0 {
				chars[i-1] = strings.ToLower(chars[i-1])
				continue
			}
			continue
		}
		if i == 0 {
			chars[0] = strings.ToUpper(chars[0])
		}
		if i > 0 {
			chars[i-1] = strings.ToLower(chars[i-1])
			chars[i] = strings.ToUpper(chars[i])
		}
		theWave = append(theWave, strings.Join(chars, ""))
	}
	return theWave
}
