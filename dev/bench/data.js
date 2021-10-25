window.BENCHMARK_DATA = {
  "lastUpdate": 1635205059071,
  "repoUrl": "https://github.com/wesleyjia34/cpt-demo",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "wesley.jia@placeexchange.com",
            "name": "Wesley Jia",
            "username": "wesleyjia34"
          },
          "committer": {
            "email": "wesley.jia@placeexchange.com",
            "name": "Wesley Jia",
            "username": "wesleyjia34"
          },
          "distinct": true,
          "id": "726e652b08d177d95d2e1132569ef9ba06acaf72",
          "message": "adding benchmarking",
          "timestamp": "2021-10-25T19:34:24-04:00",
          "tree_id": "3f1a125446d9f9167f77267bf363a5fd0aed80d4",
          "url": "https://github.com/wesleyjia34/cpt-demo/commit/726e652b08d177d95d2e1132569ef9ba06acaf72"
        },
        "date": 1635204895891,
        "tool": "pytest",
        "benches": [
          {
            "name": "src/demo/tests/test_utils.py::test_benchmark_looper_time",
            "value": 8.113159880399557,
            "unit": "iter/sec",
            "range": "stddev: 0.00018860277858608653",
            "extra": "mean: 123.25653811111043 msec\nrounds: 9"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "wesley.jia@placeexchange.com",
            "name": "Wesley Jia",
            "username": "wesleyjia34"
          },
          "committer": {
            "email": "wesley.jia@placeexchange.com",
            "name": "Wesley Jia",
            "username": "wesleyjia34"
          },
          "distinct": true,
          "id": "d85a94d76497364018d7183af4f47533c433d5a1",
          "message": "introduce performance degradation",
          "timestamp": "2021-10-25T19:37:06-04:00",
          "tree_id": "4ea7e136c33789c52e97244229761009e3405262",
          "url": "https://github.com/wesleyjia34/cpt-demo/commit/d85a94d76497364018d7183af4f47533c433d5a1"
        },
        "date": 1635205058362,
        "tool": "pytest",
        "benches": [
          {
            "name": "src/demo/tests/test_utils.py::test_benchmark_looper_time",
            "value": 2.168088336535673,
            "unit": "iter/sec",
            "range": "stddev: 0.00031835412682862336",
            "extra": "mean: 461.23581920000163 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}