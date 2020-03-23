package main

import (
	"reflect"
	"testing"
)

func TestWave(t *testing.T) {
	tt := []struct {
		name string
		in   string
		want []string
	}{
		{"test1", "abc", []string{"Abc", "aBc", "abC"}},
		{"test2", " ab  c", []string{" Ab  c", " aB  c", " ab  C"}},
		{"test3", "", []string{}},
		{"test4", "z", []string{"Z"}},
		{"test5", "a a a a a", []string{"A a a a a", "a A a a a", "a a A a a", "a a a A a", "a a a a A"}},
		{"test6", "                                                           ", []string{}},
		{"test7", " a  b     c  defghijk l  m no pqrs tuvwx yz     ", []string{" A  b     c  defghijk l  m no pqrs tuvwx yz     ", " a  B     c  defghijk l  m no pqrs tuvwx yz     ", " a  b     C  defghijk l  m no pqrs tuvwx yz     ", " a  b     c  Defghijk l  m no pqrs tuvwx yz     ", " a  b     c  dEfghijk l  m no pqrs tuvwx yz     ", " a  b     c  deFghijk l  m no pqrs tuvwx yz     ", " a  b     c  defGhijk l  m no pqrs tuvwx yz     ", " a  b     c  defgHijk l  m no pqrs tuvwx yz     ", " a  b     c  defghIjk l  m no pqrs tuvwx yz     ", " a  b     c  defghiJk l  m no pqrs tuvwx yz     ", " a  b     c  defghijK l  m no pqrs tuvwx yz     ", " a  b     c  defghijk L  m no pqrs tuvwx yz     ", " a  b     c  defghijk l  M no pqrs tuvwx yz     ", " a  b     c  defghijk l  m No pqrs tuvwx yz     ", " a  b     c  defghijk l  m nO pqrs tuvwx yz     ", " a  b     c  defghijk l  m no Pqrs tuvwx yz     ", " a  b     c  defghijk l  m no pQrs tuvwx yz     ", " a  b     c  defghijk l  m no pqRs tuvwx yz     ", " a  b     c  defghijk l  m no pqrS tuvwx yz     ", " a  b     c  defghijk l  m no pqrs Tuvwx yz     ", " a  b     c  defghijk l  m no pqrs tUvwx yz     ", " a  b     c  defghijk l  m no pqrs tuVwx yz     ", " a  b     c  defghijk l  m no pqrs tuvWx yz     ", " a  b     c  defghijk l  m no pqrs tuvwX yz     ", " a  b     c  defghijk l  m no pqrs tuvwx Yz     ", " a  b     c  defghijk l  m no pqrs tuvwx yZ     "}},
		{"test8", " x yz", []string{" X yz", " x Yz", " x yZ"}},
		{"test9", "aaaaa", []string{"Aaaaa", "aAaaa", "aaAaa", "aaaAa", "aaaaA"}},
	}
	for _, tc := range tt {
		t.Run(tc.name, func(t *testing.T) {
			got := wave(tc.in)
			if !reflect.DeepEqual(got, tc.want) {
				t.Errorf("got: %v, want: %v\n", got, tc.want)
			}
		})
	}
}
