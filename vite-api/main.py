import json
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/add', methods=['POST'])
def add_numbers():
    data = request.get_json()
    num1 = float(data.get('num1', 0))
    num2 = float(data.get('num2', 0))
    result = num1 + num2
    return jsonify({"result": result})

@app.route('/health')
def health_check():
    return jsonify({"status": "healthy"})


@app.route("/",methods=['get'])
def index():
    return "hello world"

@app.route("/api/echo", methods=["POST"])
def hello():
    data = request.get_json()
    name = data.get('name','')
    
    response = {
            'status': 'success',
            'received_data': {
                'name': name
            }
        }
    return jsonify(response),200

if __name__ == "__main__":
    app.run(port=8000,debug=True, host='0.0.0.0')