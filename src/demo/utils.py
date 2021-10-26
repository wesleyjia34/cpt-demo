from functools import reduce

def looper(iter_count: int) -> int:
    for i in range(iter_count):
        for j in range(25):
            i
    return i + 1
    
def reduce_fibonacci_nums() -> int:
    
    fib_num_count = 50
    return reduce(lambda x, y: x + y, range(fib_num_count))
