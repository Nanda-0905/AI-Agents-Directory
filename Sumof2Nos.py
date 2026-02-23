def add(a, b):
    return a + b

def main():
    try:
        x = float(input("Enter first number: "))
        y = float(input("Enter second number: "))
    except ValueError:
        print("Invalid input. Please enter numeric values.")
        return

    s = add(x, y)
    # print as int if both inputs were integers
    if x.is_integer() and y.is_integer():
        print("Sum:", int(s))
    else:
        print("Sum:", s)

if __name__ == "__main__":
    main()