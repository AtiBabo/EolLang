import interpreter
from flask import Flask, render_template, redirect, request, jsonify


app = Flask(__name__)

@app.route('/')
def index():
    return redirect('https://imaginative-bonbon-a52d24.netlify.app/')

@app.route('/interpreter', methods=['GET', 'POST'])
def interpreterSite():
    result = None
    
    if request.method == 'POST':
        value = str(request.form['id_name'])
        
        result = f"\n{interpreter.Run(str(value))}".replace("\n", "<br/>")
        return jsonify({'result': result})
    else:
        return render_template('Run.html')

if __name__ == '__main__':
    app.run(debug=True) 