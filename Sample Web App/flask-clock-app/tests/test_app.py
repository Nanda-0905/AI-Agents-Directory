import unittest
from src.app import app

class FlaskAppTests(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True

    def test_home_page(self):
        response = self.app.get('/')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b'Clock', response.data)

    def test_static_files(self):
        response = self.app.get('/static/css/styles.css')
        self.assertEqual(response.status_code, 200)

        response = self.app.get('/static/js/clock.js')
        self.assertEqual(response.status_code, 200)

if __name__ == '__main__':
    unittest.main()