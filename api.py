import requests

# Define the base URL of the Flask app
base_url = 'http://127.0.0.1:5000/api/'

# Endpoint to retrieve all items
all_items_endpoint = base_url + 'all_items'

# Endpoint to retrieve attributes by title
song_by_title_endpoint = base_url + 'song_by_title/'

# Endpoint to allow rating a song
rate_song_endpoint = base_url + 'rate_song'

# Send GET request to retrieve all items
response_all_items = requests.get(all_items_endpoint)
print('All items response:', response_all_items.json())

# Send GET request to retrieve attributes by title
title = '3AM'  # Example song title
response_song_by_title = requests.get(song_by_title_endpoint + title)
print('Song by title response:', response_song_by_title.json())

# Send POST request to rate a song
data = {'title': '3AM', 'rating': 4}  # Example data for rating a song
response_rate_song = requests.post(rate_song_endpoint, json=data)
print('Rate song response:', response_rate_song.json())
