from ..utils import looper, sum_incrementing_ints

def test_looper_returns_iter_count():
    input_iters = 1000000
    completed_iters = looper(input_iters)
    assert completed_iters == 1000000

def test_benchmark_looper_time(benchmark):
    benchmark(looper, 1000000)

def test_benchmark_sum_ints_time(benchmark):
    benchmark(sum_incrementing_ints)