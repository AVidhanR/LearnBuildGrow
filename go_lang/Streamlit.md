# Real-time sentiment analysis

Creating a complete **real-time sentiment analysis** dashboard within a short timeframe is challenging, but I can guide you through the steps to set up a basic version. Here's a simplified implementation plan using Streamlit for the frontend, Python for the backend, and TextBlob for sentiment analysis. We'll use Tweepy to interact with the Twitter API and deploy it on Streamlit sharing for simplicity.

### Step 1: Set Up the Environment

1. **Install necessary libraries:**

   ```bash
   pip install streamlit tweepy textblob
   ```

2. **Create a Twitter Developer Account** and get your API keys from the Twitter Developer Portal.

### Step 2: Streamlit App Structure

1. Create a Python Script (`app.py`)

```python
import streamlit as st
import tweepy
from textblob import TextBlob

# Set up Twitter API credentials
API_KEY = 'your_api_key'
API_SECRET_KEY = 'your_api_secret_key'
ACCESS_TOKEN = 'your_access_token'
ACCESS_TOKEN_SECRET = 'your_access_token_secret'

# Authenticate to Twitter
auth = tweepy.OAuth1UserHandler(API_KEY, API_SECRET_KEY, ACCESS_TOKEN, ACCESS_TOKEN_SECRET)
api = tweepy.API(auth)

# Function to fetch tweets
def fetch_tweets(query, count=100):
    tweets = api.search_tweets(q=query, count=count, lang='en', tweet_mode='extended')
    return tweets

# Function to analyze sentiment
def analyze_sentiment(tweet):
    analysis = TextBlob(tweet)
    if analysis.sentiment.polarity > 0:
        return 'Positive'
    elif analysis.sentiment.polarity == 0:
        return 'Neutral'
    else:
        return 'Negative'

# Streamlit app
st.title('Real-time Sentiment Analysis Dashboard')

query = st.text_input('Enter a keyword or hashtag to search for:')
if st.button('Analyze'):
    with st.spinner('Fetching tweets...'):
        tweets = fetch_tweets(query)

    st.success(f'Fetched {len(tweets)} tweets.')

    sentiments = [analyze_sentiment(tweet.full_text) for tweet in tweets]

    positive_tweets = [tweet.full_text for tweet in tweets if analyze_sentiment(tweet.full_text) == 'Positive']
    negative_tweets = [tweet.full_text for tweet in tweets if analyze_sentiment(tweet.full_text) == 'Negative']
    neutral_tweets = [tweet.full_text for tweet in tweets if analyze_sentiment(tweet.full_text) == 'Neutral']

    st.write(f'Positive tweets: {len(positive_tweets)}')
    st.write(f'Negative tweets: {len(negative_tweets)}')
    st.write(f'Neutral tweets: {len(neutral_tweets)}')

    st.subheader('Sample Positive Tweets')
    for tweet in positive_tweets[:5]:
        st.write(tweet)

    st.subheader('Sample Negative Tweets')
    for tweet in negative_tweets[:5]:
        st.write(tweet)

    st.subheader('Sample Neutral Tweets')
    for tweet in neutral_tweets[:5]:
        st.write(tweet)

```

### Step 3: Deploying on Streamlit Sharing

1. **Sign up for Streamlit Sharing** if you haven't already.
2. **Push your code to GitHub.**
3. **Deploy your app:**
   - Go to [Streamlit Sharing](https://share.streamlit.io/)
   - Click "New app" and connect your GitHub repository.
   - Select the repository and branch, and then click "Deploy."

### Additional Considerations

1. **API Rate Limits:** Be aware of Twitter's rate limits. You might need to handle rate limits gracefully in your final implementation.
2. **Error Handling:** Implement error handling to manage API errors and connectivity issues.
3. **Styling and Enhancements:** Customize the UI using Streamlit's features to improve user experience.

This is a basic implementation to get you started. You can enhance it further by incorporating more advanced NLP models from Hugging Face Transformers and deploying on platforms like Heroku or AWS for better scalability and performance.

---

# Image classification app

Creating a complete **image classification app** quickly involves leveraging pre-trained models and streamlining the deployment process. Here's a step-by-step guide to help you develop this application using Streamlit, TensorFlow, and a pre-trained model (VGG16) for image classification.

### Step 1: Set Up the Environment

1. **Install necessary libraries:**

   ```bash
   pip install streamlit tensorflow pillow
   ```

### Step 2: Prepare the Pre-trained Model

We will use VGG16, a popular pre-trained model available in TensorFlow.

```python
import streamlit as st
from PIL import Image
import numpy as np
import tensorflow as tf
from tensorflow.keras.applications.vgg16 import VGG16, preprocess_input, decode_predictions

# Load pre-trained VGG16 model + higher level layers
model = VGG16(weights='imagenet')

# Function to preprocess the image
def preprocess_image(image):
    img = image.resize((224, 224))
    img_array = np.array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array = preprocess_input(img_array)
    return img_array

# Function to decode the predictions
def predict(image, model):
    processed_image = preprocess_image(image)
    preds = model.predict(processed_image)
    decoded_preds = decode_predictions(preds, top=3)[0]
    return decoded_preds
```

### Step 3: Streamlit App Structure

1. Create a Python Script (`app.py`)

```python
import streamlit as st
from PIL import Image
import numpy as np
import tensorflow as tf
from tensorflow.keras.applications.vgg16 import VGG16, preprocess_input, decode_predictions

# Load pre-trained VGG16 model + higher level layers
model = VGG16(weights='imagenet')

# Function to preprocess the image
def preprocess_image(image):
    img = image.resize((224, 224))
    img_array = np.array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array = preprocess_input(img_array)
    return img_array

# Function to decode the predictions
def predict(image, model):
    processed_image = preprocess_image(image)
    preds = model.predict(processed_image)
    decoded_preds = decode_predictions(preds, top=3)[0]
    return decoded_preds

# Streamlit app
st.title('Image Classification App')
st.write('Upload an image to classify it into predefined categories.')

uploaded_file = st.file_uploader("Choose an image...", type="jpg")

if uploaded_file is not None:
    image = Image.open(uploaded_file)
    st.image(image, caption='Uploaded Image.', use_column_width=True)
    st.write("")
    st.write("Classifying...")

    predictions = predict(image, model)

    for pred in predictions:
        st.write(f"{pred[1]}: {pred[2]*100:.2f}%")

```

### Step 4: Deploying on Streamlit Sharing

1. **Sign up for Streamlit Sharing** if you haven't already.
2. **Push your code to GitHub.**
3. **Deploy your app:**
   - Go to [Streamlit Sharing](https://share.streamlit.io/)
   - Click "New app" and connect your GitHub repository.
   - Select the repository and branch, and then click "Deploy."

### Additional Considerations

1. **Error Handling:** Add error handling to manage potential issues with file uploads and predictions.
2. **Model Performance:** Optionally, you can switch to more advanced models like ResNet for better accuracy.
3. **UI Enhancements:** Customize the UI using Streamlit features to improve user experience.

By following these steps, you'll have a functional image classification app ready for submission. If you have more time, consider adding more features like batch processing or detailed visualizations of the prediction results.

---

# Healthcare prediction system

Creating a **healthcare prediction system** involves training a machine learning model on a healthcare dataset and then deploying it using Streamlit. We'll use the UCI Heart Disease dataset for this example and a simple logistic regression model from Scikit-learn. Here's a step-by-step guide:

### Step 1: Set Up the Environment

1. **Install necessary libraries:**

   ```bash
   pip install streamlit scikit-learn pandas
   ```

### Step 2: Prepare the Dataset

1. **Download the dataset:**
   - You can download the UCI Heart Disease dataset from [here](https://archive.ics.uci.edu/ml/datasets/heart+Disease).
2. **Load and preprocess the dataset:**

   ```python
   import pandas as pd
   from sklearn.model_selection import train_test_split
   from sklearn.preprocessing import StandardScaler
   from sklearn.linear_model import LogisticRegression
   from sklearn.metrics import accuracy_score

   # Load the dataset
   url = "<https://archive.ics.uci.edu/ml/machine-learning-databases/heart-disease/processed.cleveland.data>"
   column_names = ['age', 'sex', 'cp', 'trestbps', 'chol', 'fbs', 'restecg', 'thalach', 'exang', 'oldpeak', 'slope', 'ca', 'thal', 'target']
   data = pd.read_csv(url, names=column_names)

   # Preprocess the dataset
   data = data.replace('?', pd.NA).dropna()
   data['ca'] = data['ca'].astype(float)
   data['thal'] = data['thal'].astype(float)

   # Split the dataset
   X = data.drop('target', axis=1)
   y = data['target'].apply(lambda x: 1 if x > 0 else 0)
   X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

   # Standardize the dataset
   scaler = StandardScaler()
   X_train = scaler.fit_transform(X_train)
   X_test = scaler.transform(X_test)

   # Train a logistic regression model
   model = LogisticRegression()
   model.fit(X_train, y_train)

   # Evaluate the model
   y_pred = model.predict(X_test)
   accuracy = accuracy_score(y_test, y_pred)
   print(f"Model accuracy: {accuracy}")

   ```

### Step 3: Streamlit App Structure

1. Create a Python Script (`app.py`)

```python
import streamlit as st
import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
import numpy as np

# Load and preprocess the dataset
@st.cache_data
def load_data():
    url = "<https://archive.ics.uci.edu/ml/machine-learning-databases/heart-disease/processed.cleveland.data>"
    column_names = ['age', 'sex', 'cp', 'trestbps', 'chol', 'fbs', 'restecg', 'thalach', 'exang', 'oldpeak', 'slope', 'ca', 'thal', 'target']
    data = pd.read_csv(url, names=column_names)
    data = data.replace('?', pd.NA).dropna()
    data['ca'] = data['ca'].astype(float)
    data['thal'] = data['thal'].astype(float)
    return data

# Load data
data = load_data()

# Split data
X = data.drop('target', axis=1)
y = data['target'].apply(lambda x: 1 if x > 0 else 0)
scaler = StandardScaler()
X = scaler.fit_transform(X)

# Train model
model = LogisticRegression()
model.fit(X, y)

# Streamlit app
st.title("Healthcare Prediction System")
st.write("Enter patient data to predict the likelihood of heart disease:")

def user_input_features():
    age = st.number_input("Age", 0, 120, 50)
    sex = st.selectbox("Sex", [0, 1])
    cp = st.selectbox("Chest pain type", [0, 1, 2, 3])
    trestbps = st.number_input("Resting blood pressure", 0, 200, 120)
    chol = st.number_input("Serum cholesterol", 0, 600, 200)
    fbs = st.selectbox("Fasting blood sugar > 120 mg/dl", [0, 1])
    restecg = st.selectbox("Resting electrocardiographic results", [0, 1, 2])
    thalach = st.number_input("Maximum heart rate achieved", 0, 220, 150)
    exang = st.selectbox("Exercise induced angina", [0, 1])
    oldpeak = st.number_input("ST depression induced by exercise", 0.0, 10.0, 1.0)
    slope = st.selectbox("Slope of the peak exercise ST segment", [0, 1, 2])
    ca = st.number_input("Number of major vessels (0-3) colored by fluoroscopy", 0, 3, 0)
    thal = st.selectbox("Thalassemia", [1, 2, 3])
    data = {
        'age': age,
        'sex': sex,
        'cp': cp,
        'trestbps': trestbps,
        'chol': chol,
        'fbs': fbs,
        'restecg': restecg,
        'thalach': thalach,
        'exang': exang,
        'oldpeak': oldpeak,
        'slope': slope,
        'ca': ca,
        'thal': thal
    }
    features = pd.DataFrame(data, index=[0])
    return features

input_df = user_input_features()
input_scaled = scaler.transform(input_df)

# Prediction
prediction = model.predict(input_scaled)
prediction_proba = model.predict_proba(input_scaled)

st.subheader("Prediction")
heart_disease = np.array(['No Heart Disease', 'Heart Disease'])
st.write(heart_disease[prediction][0])

st.subheader("Prediction Probability")
st.write(prediction_proba)

```

### Step 4: Deploying on Streamlit Sharing

1. **Sign up for Streamlit Sharing** if you haven't already.
2. **Push your code to GitHub.**
3. **Deploy your app:**
   - Go to [Streamlit Sharing](https://share.streamlit.io/)
   - Click "New app" and connect your GitHub repository.
   - Select the repository and branch, and then click "Deploy."

### Additional Considerations

1. **Data Privacy:** Ensure that patient data is handled securely and ethically.
2. **Model Performance:** Optionally, you can experiment with more complex models or feature engineering to improve accuracy.
3. **UI Enhancements:** Customize the UI using Streamlit features to improve user experience.

By following these steps, you'll have a functional healthcare prediction system ready for submission. If you have more time, consider adding more features or using additional datasets to improve the system.

---

# Real-time object detection application

Creating a **real-time object detection application** involves integrating a pre-trained model for object detection with a frontend interface for video streaming and displaying results. Below is a step-by-step guide to implement this project using Streamlit and TensorFlow with the YOLOv3 model for object detection.

### Step 1: Set Up the Environment

1. **Install necessary libraries:**

   ```bash
   pip install streamlit opencv-python-headless tensorflow numpy
   ```

### Step 2: Prepare the Pre-trained Model

We will use a YOLOv3 pre-trained model. Download the model weights and configuration files from the official [YOLOv3 website](https://pjreddie.com/darknet/yolo/).

### Step 3: Implement Object Detection with YOLOv3

Create a Python script (`object_detection.py`) for handling object detection.

```python
import cv2
import numpy as np

class YOLO:
    def __init__(self, model_path, config_path, labels_path):
        self.net = cv2.dnn.readNet(model_path, config_path)
        self.labels = open(labels_path).read().strip().split("\\n")
        self.layer_names = self.net.getLayerNames()
        self.output_layers = [self.layer_names[i[0] - 1] for i in self.net.getUnconnectedOutLayers()]

    def detect_objects(self, image):
        height, width = image.shape[:2]
        blob = cv2.dnn.blobFromImage(image, 0.00392, (416, 416), swapRB=True, crop=False)
        self.net.setInput(blob)
        outs = self.net.forward(self.output_layers)

        class_ids = []
        confidences = []
        boxes = []

        for out in outs:
            for detection in out:
                scores = detection[5:]
                class_id = np.argmax(scores)
                confidence = scores[class_id]
                if confidence > 0.5:
                    center_x = int(detection[0] * width)
                    center_y = int(detection[1] * height)
                    w = int(detection[2] * width)
                    h = int(detection[3] * height)
                    x = int(center_x - w / 2)
                    y = int(center_y - h / 2)
                    boxes.append([x, y, w, h])
                    confidences.append(float(confidence))
                    class_ids.append(class_id)

        indices = cv2.dnn.NMSBoxes(boxes, confidences, 0.5, 0.4)
        result = []
        for i in indices:
            i = i[0]
            box = boxes[i]
            result.append((self.labels[class_ids[i]], confidences[i], box))
        return result
```

### Step 4: Streamlit App Structure

Create a Python script (`app.py`) for the Streamlit interface.

```python
import streamlit as st
import cv2
import numpy as np
from PIL import Image
import tempfile
from object_detection import YOLO

st.title("Real-time Object Detection")

# Load YOLO model
yolo = YOLO("yolov3.weights", "yolov3.cfg", "coco.names")

# Option to use webcam or upload video
use_webcam = st.checkbox("Use Webcam")

# Video Processing
if use_webcam:
    st.write("Using webcam...")
    video_stream = st.camera_input("Record a video")

    if video_stream is not None:
        temp_file = tempfile.NamedTemporaryFile(delete=False)
        temp_file.write(video_stream.getbuffer())
        cap = cv2.VideoCapture(temp_file.name)
else:
    uploaded_file = st.file_uploader("Upload a video...", type=["mp4", "mov", "avi", "mkv"])

    if uploaded_file is not None:
        temp_file = tempfile.NamedTemporaryFile(delete=False)
        temp_file.write(uploaded_file.getbuffer())
        cap = cv2.VideoCapture(temp_file.name)

if (use_webcam and video_stream is not None) or (not use_webcam and uploaded_file is not None):
    stframe = st.empty()
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break

        detections = yolo.detect_objects(frame)
        for label, confidence, box in detections:
            x, y, w, h = box
            cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)
            text = f"{label} ({confidence:.2f})"
            cv2.putText(frame, text, (x, y - 5), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)

        stframe.image(frame, channels="BGR")

    cap.release()

st.write("Upload a video or use the webcam to perform real-time object detection.")
```

### Step 5: Deploying on Streamlit Sharing

1. **Sign up for Streamlit Sharing** if you haven't already.
2. **Push your code to GitHub.**
3. **Deploy your app:**
   - Go to [Streamlit Sharing](https://share.streamlit.io/)
   - Click "New app" and connect your GitHub repository.
   - Select the repository and branch, and then click "Deploy."

### Additional Considerations

1. **Error Handling:** Add error handling for video streaming issues.
2. **Model Performance:** Optionally, you can use more advanced models or fine-tune the current model for better performance.
3. **UI Enhancements:** Customize the UI using Streamlit features to improve user experience.

By following these steps, you'll have a functional real-time object detection app ready for submission. If you have more time, consider adding additional features or optimizations.

---

# Personalized movie recommendation system

Creating a personalized movie recommendation system involves several steps, including data preprocessing, model training, and frontend development. We will use the MovieLens dataset, Streamlit for the frontend, and Scikit-learn for collaborative filtering. Here’s a step-by-step guide to implementing this project.

### Step 1: Set Up the Environment

1. **Install necessary libraries:**

   ```bash
   pip install streamlit scikit-learn pandas numpy
   ```

### Step 2: Prepare the Dataset

1. **Download the MovieLens dataset:**
   - Download the dataset from [MovieLens](https://grouplens.org/datasets/movielens/latest/).
2. **Load and preprocess the dataset:**

```python
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.metrics import mean_squared_error
import numpy as np

# Load the datasets
movies = pd.read_csv('movies.csv')
ratings = pd.read_csv('ratings.csv')

# Merge datasets on movieId
data = pd.merge(ratings, movies, on='movieId')

# Create a pivot table
user_movie_matrix = data.pivot_table(index='userId', columns='title', values='rating')

# Fill NaN values with 0
user_movie_matrix.fillna(0, inplace=True)

# Create a similarity matrix
user_similarity = cosine_similarity(user_movie_matrix)
user_similarity_df = pd.DataFrame(user_similarity, index=user_movie_matrix.index, columns=user_movie_matrix.index)
```

### Step 3: Build the Recommendation Function

```python
def get_recommendations(user_id, num_recommendations=5):
    user_ratings = user_movie_matrix.loc[user_id]
    similar_users = user_similarity_df[user_id].sort_values(ascending=False)
    recommended_movies = pd.Series()

    for similar_user in similar_users.index:
        if similar_user != user_id:
            similar_user_ratings = user_movie_matrix.loc[similar_user]
            unseen_movies = similar_user_ratings[similar_user_ratings > 0].index.difference(user_ratings[user_ratings > 0].index)
            for movie in unseen_movies:
                if movie in recommended_movies:
                    recommended_movies[movie] += similar_user_ratings[movie]
                else:
                    recommended_movies[movie] = similar_user_ratings[movie]
    return recommended_movies.sort_values(ascending=False).head(num_recommendations)
```

### Step 4: Streamlit App Structure

1. **Create a Python Script (`app.py`):**

```python
import streamlit as st
import pandas as pd

# Load the datasets
movies = pd.read_csv('movies.csv')
ratings = pd.read_csv('ratings.csv')

# Merge datasets on movieId
data = pd.merge(ratings, movies, on='movieId')

# Create a pivot table
user_movie_matrix = data.pivot_table(index='userId', columns='title', values='rating')

# Fill NaN values with 0
user_movie_matrix.fillna(0, inplace=True)

# Create a similarity matrix
user_similarity = cosine_similarity(user_movie_matrix)
user_similarity_df = pd.DataFrame(user_similarity, index=user_movie_matrix.index, columns=user_movie_matrix.index)

def get_recommendations(user_id, num_recommendations=5):
    user_ratings = user_movie_matrix.loc[user_id]
    similar_users = user_similarity_df[user_id].sort_values(ascending=False)
    recommended_movies = pd.Series()

    for similar_user in similar_users.index:
        if similar_user != user_id:
            similar_user_ratings = user_movie_matrix.loc[similar_user]
            unseen_movies = similar_user_ratings[similar_user_ratings > 0].index.difference(user_ratings[user_ratings > 0].index)
            for movie in unseen_movies:
                if movie in recommended_movies:
                    recommended_movies[movie] += similar_user_ratings[movie]
                else:
                    recommended_movies[movie] = similar_user_ratings[movie]
    return recommended_movies.sort_values(ascending=False).head(num_recommendations)

# Streamlit app
st.title("Personalized Movie Recommendation System")

user_id = st.number_input("Enter User ID", min_value=1, max_value=610, value=1)
num_recommendations = st.slider("Number of Recommendations", min_value=1, max_value=20, value=5)

if st.button("Get Recommendations"):
    recommendations = get_recommendations(user_id, num_recommendations)
    st.write("Recommended Movies:")
    for movie in recommendations.index:
        st.write(movie)
```

### Step 5: Deploying on Streamlit Sharing

1. **Sign up for Streamlit Sharing** if you haven't already.
2. **Push your code to GitHub.**
3. **Deploy your app:**
   - Go to [Streamlit Sharing](https://share.streamlit.io/)
   - Click "New app" and connect your GitHub repository.
   - Select the repository and branch, and then click "Deploy."

### Additional Considerations

1. **User Authentication:** Implement a user authentication system for profile management.
2. **Collecting User Ratings:** Add features to collect and store user ratings and preferences.
3. **Model Enhancements:** Experiment with more advanced models and fine-tune for better recommendations.
4. **UI Enhancements:** Customize the UI using Streamlit features to improve user experience.

By following these steps, you'll have a functional personalized movie recommendation system ready for submission. If you have more time, consider adding additional features or optimizations.
