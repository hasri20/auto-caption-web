import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';

interface ProcessingViewProps {
  videoFile: File;
  onComplete: (videoUrl: string, vttUrl: string) => void;
  onError: (msg: string) => void;
}

export function ProcessingView({ videoFile, onComplete, onError }: ProcessingViewProps) {

  useEffect(() => {
    const uploadVideo = async () => {

      try {
        const formData = new FormData();
        formData.append('file', videoFile);

        const response = await fetch('http://localhost:8000/api/upload-video', {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();

        if (data.status === 'success') {
          setTimeout(() => onComplete(data.video_url, data.vtt_url), 1000);
        } else {
          onError(data.message || 'Unknown error');
        }
      } catch (err) {
        onError(err instanceof Error ? err.message : 'Network error');
      }
    };

    uploadVideo();
  }, [videoFile, onComplete, onError]);

  return (
    <div className="glass-panel processing-view fade-in">
      <div className="loader-container">
        <div className="loader-ring"></div>
        <Loader2 size={48} className="loader-icon" />
      </div>

      <h3 className="text-gradient" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
        Magic is happening...
      </h3>
      <p style={{ color: 'var(--text-secondary)' }}>This may take a few minutes depending on the video length.</p>

    </div>
  );
}
