package main

import "testing"

func TestIsTriangle(t *testing.T) {
	tt := []struct {
		name string
		a    int
		b    int
		c    int
		want bool
	}{
		{
			name: "test1",
			a:    5,
			b:    1,
			c:    2,
			want: false,
		},
		{
			name: "test2",
			a:    1,
			b:    2,
			c:    5,
			want: false,
		},
		{
			name: "test3",
			a:    2,
			b:    5,
			c:    1,
			want: false,
		},
		{
			name: "test4",
			a:    4,
			b:    2,
			c:    3,
			want: true,
		},
		{
			name: "test5",
			a:    5,
			b:    1,
			c:    5,
			want: true,
		},
		{
			name: "test6",
			a:    2,
			b:    2,
			c:    2,
			want: true,
		},
		{
			name: "test7",
			a:    -1,
			b:    2,
			c:    3,
			want: false,
		},
	}
	for _, tc := range tt {
		t.Run("1: "+tc.name, func(t *testing.T) {
			result := IsTriangle1(tc.a, tc.b, tc.c)
			if result != tc.want {
				t.Errorf("want: %v got: %v", tc.want, result)
			}
		})
		t.Run("2: "+tc.name, func(t *testing.T) {
			result := IsTriangle2(tc.a, tc.b, tc.c)
			if result != tc.want {
				t.Errorf("want: %v got: %v", tc.want, result)
			}
		})
	}
}
