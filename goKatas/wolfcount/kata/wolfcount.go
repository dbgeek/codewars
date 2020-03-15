package kata

//GetCount ...
func GetCount(str string) (count int) {
	m := map[string]bool{
		"a": true,
		"e": true,
		"i": true,
		"o": true,
		"u": true,
	}
	_ = m
	for _, v := range str {
		if m[string(v)] {
			count++
		}
	}
	return count
}
