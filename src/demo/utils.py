from functools import reduce

def looper(iter_count: int) -> int:
    for i in range(iter_count):
        for j in range(25):
            i
    return i + 1
    
def sum_incrementing_ints() -> int:
    
    max_int = 200
    return reduce(lambda x, y: x + y, range(1, max_int + 1))
