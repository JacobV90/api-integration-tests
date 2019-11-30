from flask import Flask, request
import os
import uuid

app = Flask(__name__)

@app.route('/users' , methods=['POST'])
def create_user():
  try:
    return {}
  except Exception as _ex:
    raise _ex
