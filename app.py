from flask import Flask, request, jsonify, render_template
import requests

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/product')
def get_product():
    variable = request.args.get('variable')
    date = request.args.get('date')
    time = request.args.get('time')
    region = request.args.get('region')

    # Aquí se llamaría a la API externa con los parámetros recibidos.
    # Para efectos de ejemplo se devuelven imágenes de ejemplo.
    images = [
        "https://placekitten.com/400/300?image=1",
        "https://placekitten.com/400/300?image=2",
        "https://placekitten.com/400/300?image=3"
    ]

    data = {
        "variable": variable,
        "date": date,
        "time": time,
        "region": region
    }

    return jsonify({"images": images, "params": data})

if __name__ == '__main__':
    app.run(debug=True)
