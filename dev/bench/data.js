window.BENCHMARK_DATA = {
  "lastUpdate": 1635205903771,
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
      }
    ]
  }
}