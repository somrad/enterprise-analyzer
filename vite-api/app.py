import json
from flask import Flask, jsonify, request
from flask_cors import CORS
import os
import logging
import socket


HOST_NAME = os.environ.get('OPENSHIFT_APP_DNS', 'localhost')
APP_NAME = os.environ.get('OPENSHIFT_APP_NAME', 'flask')
IP = os.environ.get('OPENSHIFT_PYTHON_IP', '127.0.0.1')
PORT = int(os.environ.get('OPENSHIFT_PYTHON_PORT',8000))
HOME_DIR = os.environ.get('OPENSHIFT_HOMEDIR', os.getcwd())

log = logging.getLogger(__name__)
app = Flask(__name__)
CORS(app)

# @app.route('/api/add', methods=['POST'])
# def add_numbers():
#     data = request.get_json()
#     num1 = float(data.get('num1', 0))
#     num2 = float(data.get('num2', 0))
#     result = num1 + num2
#     return jsonify({"result": result})

# @app.route('/health')
# def health_check():
#     return jsonify({"status": "healthy"})

@app.route('/')
def hello():
    return jsonify({
        'host_name': HOST_NAME,
        'app_name': APP_NAME,
        'ip': IP,
        'port': PORT,
        'home_dir': HOME_DIR,
        'host': socket.gethostname()
    })


# @app.route("/",methods=['get'])
# def index():
#     return "hello world"

# @app.route("/api/echo", methods=["POST"])
# def hello():
#     data = request.get_json()
#     name = data.get('name','')
    
#     response = {
#             'status': 'success',
#             'received_data': {
#                 'name': name
#             }
#         }
#     return jsonify(response),200

# print(__name__)

# if __name__ == "__main__":
#     app.run(debug=True, host='0.0.0.0')

if __name__ == "__main__":
    app.run()