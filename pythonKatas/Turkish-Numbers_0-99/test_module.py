import turkish_number
import unittest

'''
Test.assert_equals(get_turkish_number(1), "bir")
Test.assert_equals(get_turkish_number(13), "on üç")
Test.assert_equals(get_turkish_number(27), "yirmi yedi")
Test.assert_equals(get_turkish_number(38), "otuz sekiz")
Test.assert_equals(get_turkish_number(77), "yetmiş yedi")
Test.assert_equals(get_turkish_number(94), "doksan dört")
'''

class UnitTests(unittest.TestCase):
  def test_turkish_number(self):
    test_cases = [
      [
        1,
        "bir"
      ],
      [
        13,
        "on üç"
      ],
      [
        27,
        "yirmi yedi"
      ],
      [
        38,
        "otuz sekiz"
      ],
      [
        77,
        "yetmiş yedi"
      ],
      [
        94,
        "doksan dört"
      ],
      [
        10,
        "on"
      ]
    ]

    for num, want in test_cases:
      gott = turkish_number.get_turkish_number(num)
      self.assertEqual(gott, want)