package main

import (
	"sort"
	"strings"
)

/*
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

each taken only once - coming from s1 or s2.
Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

func TwoToOne(s1 string, s2 string) string {
	var builder strings.Builder
	builder.WriteString(s1)
	builder.WriteString(s2)
	str := strings.Split(builder.String(), "")
	sort.Strings(str)
	prev := ""
	builder.Reset()
	for _, char := range str {
		if prev != char {
			builder.WriteString(char)
		}
		prev = char
	}
	return builder.String()
}
