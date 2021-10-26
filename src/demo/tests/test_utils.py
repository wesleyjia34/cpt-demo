from ..utils import looper, reduce_fibonacci_nums

def test_looper_returns_iter_count():
    input_iters = 1000000
    completed_iters = looper(input_iters)
    assert completed_iters == 1000000

def test_benchmark_looper_time(benchmark):
    benchmark(looper, 1000000)

def test_benchmark_reduce_fib_nums_time(benchmark):
    benchmark(reduce_fibonacci_nums)