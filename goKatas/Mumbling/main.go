package main

import (
	"strings"
)

func repeatChar(c string, repeat int) string {
	builder := strings.Builder{}
	builder.WriteString(strings.ToUpper(c))

	for i := 1; i < repeat; i++ {
		builder.WriteString(strings.ToLower(c))
	}

	return builder.String()
}

func Accum(s string) string {
	result := []string{}
	for idx, char := range s {
		result = append(result, repeatChar(string(char), idx+1))
	}
	return strings.Join(result, "-")
}
