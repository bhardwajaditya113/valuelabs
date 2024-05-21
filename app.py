from flask import Flask, jsonify, request
import pandas as pd

app = Flask(__name__)

# Read the normalized data from the CSV file into a DataFrame
df = pd.read_csv('normalized_data.csv')

# Display the DataFrame
print(df)

# API endpoint to return all items in the normalized data set
@app.route('/api/all_items', methods=['GET'])
def get_all_items():
    page = request.args.get('page', default=1, type=int)
    per_page = request.args.get('per_page', default=10, type=int)
    
    start_idx = (page - 1) * per_page
    end_idx = start_idx + per_page
    
    items = normalized_data[start_idx:end_idx]
    return jsonify(items)

# API endpoint to return attributes of a song by title
@app.route('/api/song_by_title/<title>', methods=['GET'])
def get_song_by_title(title):
    song = next((item for item in normalized_data if item["title"] == title), None)
    if song:
        return jsonify(song)
    else:
        return jsonify({"message": "Song not found"}), 404

# API endpoint to rate a song (Nice to have)
@app.route('/api/rate_song', methods=['POST'])
def rate_song():
    data = request.json
    title = data.get('title')
    rating = data.get('rating')
    
    # Update the rating of the song in the normalized data
    # Add your implementation here
    
    return jsonify({"message": "Song rating updated successfully"})

# Bonus: Write unit tests for the APIs
# Add your unit tests here

if __name__ == '__main__':
    app.run(debug=True)
