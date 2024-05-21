import json
import pandas as pd

# Load the JSON file
with open('playlist.json', 'r') as file:
    data = json.load(file)

# Normalize the data
normalized_data = {key: list(value.values()) for key, value in data.items()}

# Convert the normalized data to DataFrame
df = pd.DataFrame(normalized_data)

# Save the DataFrame to CSV file with UTF-8 encoding
df.to_csv('normalized_data.csv', index=False, encoding='utf-8')


# Display the DataFrame as a table
print(df)
