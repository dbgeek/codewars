package main

func Arithmetic(a int, b int, operator string) int {
	switch {
	case operator == "add":
		return a + b
	case operator == "subtract":
		return a - b
	case operator == "multiply":
		return a * b
	case operator == "divide":
		return a / b
	default:
		panic("Unkown operator")
	}
}
