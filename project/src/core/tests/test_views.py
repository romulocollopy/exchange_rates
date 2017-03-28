from django.test import TestCase
from django.core.urlresolvers import reverse


class HomeViewTest(TestCase):

    def setUp(self):
        self.url = reverse('core:home')

    def test_home_200(self):
        resp = self.client.get(self.url)
        self.assertEqual(200, resp.status_code)

    def test_home_template_is_used(self):
        resp = self.client.get(self.url)
        self.assertTemplateUsed(resp, 'core/home.html')

    def test_static_is_loaded(self):
        resp = self.client.get(self.url)
        self.assertContains(resp, 'static/js/main.js')
