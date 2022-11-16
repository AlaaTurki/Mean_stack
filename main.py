from flask import Flask, Response

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/register')
def register():
    response =  Response("{'name':'test'}", status=200, mimetype='application/json')
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response
if __name__ == '__main__':
    app.run(host="0.0.0.0", port=3000)