import { Download, RotateCcw } from 'lucide-react';

interface ResultViewProps {
  videoUrl: string;
  vttUrl: string;
  onReset: () => void;
}

export function ResultView({ videoUrl, vttUrl, onReset }: ResultViewProps) {

  const handleDownload = () => {
    // Basic download for original video. 
    // Since we use WebVTT, a proper "hardcoded" download would require backend processing.
    const link = document.createElement('a');
    link.href = videoUrl;
    link.download = "video.mp4";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="glass-panel result-view fade-in" style={{ padding: '2rem' }}>
      <div className="video-container">
        {/* We use crossorigin="anonymous" to allow VTT loading from different port */}
        <video
          src={videoUrl}
          className="video-player"
          controls
          autoPlay
          muted
          crossOrigin="anonymous"
        >
          {vttUrl && (
            <track
              kind="subtitles"
              src={vttUrl}
              srcLang="en"
              label="English"
              default
            />
          )}
        </video>
      </div>

      <div className="result-actions">
        <button className="btn btn-secondary" onClick={onReset}>
          <RotateCcw size={18} /> Process Another
        </button>

        <button className="btn btn-primary" onClick={handleDownload}>
          <Download size={18} /> Download Video
        </button>

      </div>
    </div>
  );
}
