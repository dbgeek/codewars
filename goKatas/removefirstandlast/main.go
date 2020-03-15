package main

func RemoveChar(word string) string {
  r := []rune(word)
  return string(r[1:len(r) - 1])
}