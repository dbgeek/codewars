package main

import "testing"

/*Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/
func TestLongest(t *testing.T) {
	tt := []struct {
		name string
		in1  string
		in2  string
		want string
	}{
		{
			name: "test1",
			in1:  "xyaabbbccccdefww",
			in2:  "xxxxyyyyabklmopq",
			want: "abcdefklmopqwxy",
		},
		{
			name: "test2",
			in1:  "abcdefghijklmnopqrstuvwxyz",
			in2:  "abcdefghijklmnopqrstuvwxyz",
			want: "abcdefghijklmnopqrstuvwxyz",
		},
	}
	for _, tc := range tt {
		t.Run(tc.name, func(t *testing.T) {
			got := TwoToOne(tc.in1, tc.in2)
			if got != tc.want {
				t.Errorf("got: %v, want: %v", got, tc.want)
			}
		})
	}
}
