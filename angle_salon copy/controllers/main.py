# -*- coding: utf-8 -*-
import base64
import requests
from odoo import SUPERUSER_ID
from odoo import http
from odoo.tools.translate import _
from odoo.http import request


class WebsiteContactLead(http.Controller):

    @http.route('/contactform_action', type='json', auth='public', website=True)
    def create_contact(self, **data):
        data = data and data['datas']
        res = dict()
        for d in eval(data):
            res[d.get('name')] = d.get('value')
        contact = request.env['crm.lead'].sudo().create({
            'name': res.get('name'),
            'email_from': res.get('email'),
            'phone': res.get('mobile'),
            'description': res.get('message'),
        })
        if not contact:
            return False