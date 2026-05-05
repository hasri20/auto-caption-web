import { useState } from 'react';
import { UploadZone } from './components/UploadZone';
import { ProcessingView } from './components/ProcessingView';
import { ResultView } from './components/ResultView';
import { Sparkles } from 'lucide-react';
import './index.css';

type AppState = 'upload' | 'processing' | 'result';

function App() {
  const [appState, setAppState] = useState<AppState>('upload');
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [resultData, setResultData] = useState<{ videoUrl: string, vttUrl: string } | null>(null);

  const handleUpload = (file: File) => {
    setVideoFile(file);
    setAppState('processing');
  };

  const handleProcessingComplete = (videoUrl: string, vttUrl: string) => {
    setResultData({ videoUrl, vttUrl });
    setAppState('result');
  };

  const handleError = (msg: string) => {
    alert("Error processing video: " + msg);
    setAppState('upload');
  };

  const handleReset = () => {
    setVideoFile(null);
    setResultData(null);
    setAppState('upload');
  };

  return (
    <div className="app-container">
      <header className="header">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
          <div style={{
            background: 'rgba(139, 92, 246, 0.1)',
            padding: '1rem',
            borderRadius: '50%',
            color: 'var(--accent-primary)'
          }}>
            <Sparkles size={40} />
          </div>
        </div>
        <h1>
          Auto<span className="text-gradient">Captions</span> AI
        </h1>
        <p>
          Transform your videos in seconds. Upload your video, and our AI will automatically extract audio, transcribe speech, and burn beautiful subtitles perfectly synced with the timing.
        </p>
      </header>

      <main className="main-content">
        {appState === 'upload' && (
          <UploadZone onUpload={handleUpload} />
        )}

        {appState === 'processing' && videoFile && (
          <ProcessingView
            videoFile={videoFile}
            onComplete={handleProcessingComplete}
            onError={handleError}
          />
        )}

        {appState === 'result' && resultData && (
          <ResultView videoUrl={resultData.videoUrl} vttUrl={resultData.vttUrl} onReset={handleReset} />
        )}
      </main>
    </div>
  );
}

export default App;
