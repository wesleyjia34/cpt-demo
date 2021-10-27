window.BENCHMARK_DATA = {
  "lastUpdate": 1635307156484,
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
          "id": "46deabac42a7a80eb5e06ce31ba814acda4feff1",
          "message": "make it worse",
          "timestamp": "2021-10-25T19:46:27-04:00",
          "tree_id": "90f9208804e73c687d2dcd6b30fbe8428b0faefe",
          "url": "https://github.com/wesleyjia34/cpt-demo/commit/46deabac42a7a80eb5e06ce31ba814acda4feff1"
        },
        "date": 1635205624700,
        "tool": "pytest",
        "benches": [
          {
            "name": "src/demo/tests/test_utils.py::test_benchmark_looper_time",
            "value": 1.1182256526009695,
            "unit": "iter/sec",
            "range": "stddev: 0.0013497772183299424",
            "extra": "mean: 894.2738861999999 msec\nrounds: 5"
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
          "id": "ef060f020918920774b9c0a70e1073dd3c386e2d",
          "message": "make it good again",
          "timestamp": "2021-10-25T19:48:43-04:00",
          "tree_id": "dd8a20eb942274dcc2dbc933f972421f721be3c4",
          "url": "https://github.com/wesleyjia34/cpt-demo/commit/ef060f020918920774b9c0a70e1073dd3c386e2d"
        },
        "date": 1635205751208,
        "tool": "pytest",
        "benches": [
          {
            "name": "src/demo/tests/test_utils.py::test_benchmark_looper_time",
            "value": 51.56186041099643,
            "unit": "iter/sec",
            "range": "stddev: 0.00025416247507258527",
            "extra": "mean: 19.39417996226399 msec\nrounds: 53"
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
          "id": "0c6615c265892fd1784348cd15c17a07fb845109",
          "message": "make it bad again",
          "timestamp": "2021-10-25T19:51:04-04:00",
          "tree_id": "66d5e56f83f70491670aee5268356f20c569ba2f",
          "url": "https://github.com/wesleyjia34/cpt-demo/commit/0c6615c265892fd1784348cd15c17a07fb845109"
        },
        "date": 1635205902778,
        "tool": "pytest",
        "benches": [
          {
            "name": "src/demo/tests/test_utils.py::test_benchmark_looper_time",
            "value": 1.9034332228085324,
            "unit": "iter/sec",
            "range": "stddev: 0.0003617418932191539",
            "extra": "mean: 525.366473599999 msec\nrounds: 5"
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
          "id": "b840e4a4c0987d89456f64a12adbbd35f6b2b653",
          "message": "added second benchmark test",
          "timestamp": "2021-10-25T21:21:36-04:00",
          "tree_id": "5662d37bcd13334001fc55dc9f8072e1198ebd72",
          "url": "https://github.com/wesleyjia34/cpt-demo/commit/b840e4a4c0987d89456f64a12adbbd35f6b2b653"
        },
        "date": 1635211333160,
        "tool": "pytest",
        "benches": [
          {
            "name": "src/demo/tests/test_utils.py::test_benchmark_looper_time",
            "value": 1.896112481051122,
            "unit": "iter/sec",
            "range": "stddev: 0.0010667088670695875",
            "extra": "mean: 527.3948723999979 msec\nrounds: 5"
          },
          {
            "name": "src/demo/tests/test_utils.py::test_benchmark_reduce_fib_nums_time",
            "value": 814668.0084424688,
            "unit": "iter/sec",
            "range": "stddev: 7.25286921916775e-8",
            "extra": "mean: 1.2274938866347043 usec\nrounds: 188644"
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
          "id": "0de3340a1a542c535d2138f473fd3cb4c5155bdf",
          "message": "introduce mild, tolerable degradation",
          "timestamp": "2021-10-25T21:23:15-04:00",
          "tree_id": "5273a1322d07602533b8bac796adc83702769f15",
          "url": "https://github.com/wesleyjia34/cpt-demo/commit/0de3340a1a542c535d2138f473fd3cb4c5155bdf"
        },
        "date": 1635211429042,
        "tool": "pytest",
        "benches": [
          {
            "name": "src/demo/tests/test_utils.py::test_benchmark_looper_time",
            "value": 1.8899344060201149,
            "unit": "iter/sec",
            "range": "stddev: 0.00015105827323919562",
            "extra": "mean: 529.118892599999 msec\nrounds: 5"
          },
          {
            "name": "src/demo/tests/test_utils.py::test_benchmark_reduce_fib_nums_time",
            "value": 687126.7472272742,
            "unit": "iter/sec",
            "range": "stddev: 2.99867747075706e-7",
            "extra": "mean: 1.4553355753290733 usec\nrounds: 175439"
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
          "id": "4e36d746b4ff8aac7bb366aaa67a11fc85431eb8",
          "message": "introduce another real perf degradation",
          "timestamp": "2021-10-25T21:27:32-04:00",
          "tree_id": "d2b1e77ab3a52543f0344ee8e62b36349ee54408",
          "url": "https://github.com/wesleyjia34/cpt-demo/commit/4e36d746b4ff8aac7bb366aaa67a11fc85431eb8"
        },
        "date": 1635211685041,
        "tool": "pytest",
        "benches": [
          {
            "name": "src/demo/tests/test_utils.py::test_benchmark_looper_time",
            "value": 1.6414142169357762,
            "unit": "iter/sec",
            "range": "stddev: 0.006144918864515346",
            "extra": "mean: 609.2307411999997 msec\nrounds: 5"
          },
          {
            "name": "src/demo/tests/test_utils.py::test_benchmark_reduce_fib_nums_time",
            "value": 196998.15726494286,
            "unit": "iter/sec",
            "range": "stddev: 0.000007571689544653361",
            "extra": "mean: 5.07618961458152 usec\nrounds: 91744"
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
          "id": "4b5da5be20d2e61c82e85040bfbc7159da59f2af",
          "message": "remove typo",
          "timestamp": "2021-10-26T23:58:39-04:00",
          "tree_id": "870e887698275dd7b396fd05354350c658d7e753",
          "url": "https://github.com/wesleyjia34/cpt-demo/commit/4b5da5be20d2e61c82e85040bfbc7159da59f2af"
        },
        "date": 1635307155687,
        "tool": "pytest",
        "benches": [
          {
            "name": "src/demo/tests/test_utils.py::test_benchmark_looper_time",
            "value": 1.5178976703183578,
            "unit": "iter/sec",
            "range": "stddev: 0.0007011065118780113",
            "extra": "mean: 658.8059390000012 msec\nrounds: 5"
          },
          {
            "name": "src/demo/tests/test_utils.py::test_benchmark_sum_ints_time",
            "value": 173754.2703534621,
            "unit": "iter/sec",
            "range": "stddev: 4.85187436632795e-7",
            "extra": "mean: 5.755254233267105 usec\nrounds: 97088"
          }
        ]
      }
    ]
  }
}