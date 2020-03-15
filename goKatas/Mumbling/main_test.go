package main

import "testing"

func TestAccum(t *testing.T) {
	tt := []struct {
		name string
		in   string
		out  string
	}{
		{
			name: "test1",
			in:   "ZpglnRxqenU",
			out:  "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu",
		},
		{
			name: "test2",
			in:   "MjtkuBovqrU",
			out:  "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu",
		},
		{
			name: "test3",
			in:   "EvidjUnokmM",
			out:  "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm",
		},
		{
			name: "test4",
			in:   "HbideVbxncC",
			out:  "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc",
		},
	}

	for _, tc := range tt {
		t.Run(tc.name, func(t *testing.T) {
			result := Accum(tc.in)
			if result != tc.out {
				t.Errorf("wanted: %v, got: %v", tc.out, result)
			}
		})
	}
}

func TestRepeatChar(t *testing.T) {
	tt := []struct {
		name   string
		char   string
		repeat int
		out    string
	}{
		{
			name:   "test1",
			char:   "a",
			repeat: 3,
			out:    "Aaa",
		},
	}
	for _, tc := range tt {
		t.Run(tc.name, func(t *testing.T) {
			result := repeatChar(tc.char, tc.repeat)
			if result != tc.out {
				t.Errorf("wanted: %v, got: %v", tc.out, result)
			}
		})
	}
}
