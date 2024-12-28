from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# members API route

@app.route("/categories")
def categories():
    return {"categories": ['Marketing', "Sales", "RevOps", "Productivity"]}

if __name__ == "__main__":
    app.run(host='localhost', port=5274)