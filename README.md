# VizHub

VizHub is a sleek and modern web application that allows you to view detailed GitHub profile information and repository data in a visually appealing way. The application uses React for the frontend and Node.js for the backend, and it incorporates Chart.js to display repository language usage in a pie chart.

Made by SOZENKA !

## Features

- **GitHub Profile Viewer**: Enter a GitHub username to fetch and display the user's profile information, including their avatar, bio, followers, following, public repositories, location, company, and blog.
- **Repository Language Usage Chart**: View a pie chart displaying the languages used in the user's public repositories.
- **Responsive Design**: The application is fully responsive and looks great on all devices.
- **Modern UI**: The design features a dark theme with a modern and minimalist aesthetic, using the 'Monument Extended' font for a unique look.

## Technologies Used

- **Frontend**: React, Chart.js, CSS (Flexbox)
- **Backend**: Node.js, Express
- **API**: GitHub REST API v3

## Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/yourusername/vizhub.git
    cd vizhub
    ```

2. **Install server dependencies**:
    ```sh
    npm install
    ```

3. **Navigate to the client directory and install dependencies**:
    ```sh
    cd client
    npm install
    ```

4. **Build the React application**:
    ```sh
    npm run build
    ```

5. **Navigate back to the root directory**:
    ```sh
    cd ..
    ```

6. **Run the application**:
    ```sh
    npm run dev
    ```

## Usage

1. Open your web browser and go to `http://localhost:3000`.
2. Enter a GitHub username in the input field and click "Fetch Profile".
3. View the user's profile information and repository language usage chart.

## Contributing

If you would like to contribute to VizHub, please fork the repository and submit a pull request. We welcome any improvements, bug fixes, and new features.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any inquiries or feedback, please contact [Sozenka](mailto:yasserhoriarts@gmail.com).
