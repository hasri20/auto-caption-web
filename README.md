# AI Auto-Caption Web Application

This is the frontend component of the AI Auto-Caption Application, a modern web app designed to automatically generate and display captions on uploaded videos.

## Overview

The application provides a seamless, synchronized viewing experience for end users by allowing them to upload video files, which are then processed to generate precise subtitles. It uses a modern, glassmorphism-themed user interface built with React.

The frontend is built with React, TypeScript, and Vite, and communicates with a Python (FastAPI) backend. The backend leverages the OpenAI Whisper model for accurate speech-to-text transcription. Instead of relying on complex FFmpeg subtitle encoding, this application uses a robust WebVTT-based captioning workflow for smooth in-browser playback and display.

## Screenshots

![Home Screen](https://github.com/hasri20/auto-caption-web/blob/main/screenshot/screnshot%20home.png)

![Result Screen](https://github.com/hasri20/auto-caption-web/blob/main/screenshot/screenshot%20result.png)

## Features

- **Video Upload**: A sleek drag-and-drop interface for uploading video files.
- **Automated Captioning**: Integration with a FastApi/Whisper backend to transcribe audio to text.
- **Synchronized Playback**: Subtitles are displayed perfectly in sync with the video using WebVTT format.
- **Modern UI/UX**: A clean, responsive design utilizing a glassmorphism aesthetic.

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Language**: TypeScript
- **Icons**: Lucide React
- **Styling**: Vanilla CSS (Custom Design System)

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- The Python (FastAPI) backend should be running to handle the video transcription.

### Installation

1. Clone the repository and navigate to the project directory:
   ```bash
   cd video-caption-web
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173` (or the port specified by Vite).

## Backend Integration

Ensure your backend API is properly configured and running. The frontend expects to send video files to the backend and receive WebVTT formatted subtitles in return.
