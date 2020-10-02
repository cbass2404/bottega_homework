from functools import reduce

list_of_numbers = [1, 2 , 3, 432, 41234, 5234, 1.2, 100]

def list_adder(list_name) :
    print(sum(list_name))
    
list_adder(list_of_numbers)

print(sum(list_of_numbers))