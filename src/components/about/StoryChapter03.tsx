import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

export default function StoryChapter03() {
    const { t } = useTranslation('pages');
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [showControls, setShowControls] = useState(true);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => setShowControls(false), 3000);
        return () => clearTimeout(timer);
    }, [isPlaying]);

    return (
        <section className="py-20 sm:py-32 lg:py-48 bg-white relative">
            <div className="container-wide">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-center mb-16 sm:mb-24"
                    >
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <span className="text-5xl sm:text-6xl font-black text-uniteda-gold/20">{t('about.story.chapter_03.num')}</span>
                            <span className="text-[10px] font-black text-uniteda-gold uppercase tracking-[0.2em]">{t('about.story.chapter_03.label')}</span>
                        </div>
                        <h2 className="text-3xl sm:text-6xl lg:text-7xl font-black text-uniteda-emerald-dark uppercase tracking-tighter mb-8 italic leading-tight text-balance">
                            {t('about.story.chapter_03.title')}
                        </h2>
                        <p className="text-lg sm:text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
                            {t('about.story.chapter_03.content')}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        onMouseMove={() => setShowControls(true)}
                        onMouseLeave={() => isPlaying && setShowControls(false)}
                        className="relative aspect-video rounded-[1.5rem] sm:rounded-[3rem] overflow-hidden bg-black shadow-2xl border-[6px] sm:border-[12px] border-[#fafafa] group/video"
                        style={{ willChange: "transform, opacity" }}
                    >
                        <video
                            ref={videoRef}
                            src="/assets/videos/United.mp4"
                            poster="/assets/obour-facility-exterior.webp"
                            className="w-full h-full object-cover"
                            autoPlay
                            muted={isMuted}
                            loop
                            playsInline
                            preload="none"
                            onClick={togglePlay}
                        />


                        {/* Premium Controls Overlay */}
                        <AnimatePresence>
                            {(showControls || !isPlaying) && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
                                >
                                    {/* Central Play/Pause Button */}
                                    <motion.button
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0.8, opacity: 0 }}
                                        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={togglePlay}
                                        className="pointer-events-auto w-20 h-20 sm:w-28 sm:h-28 rounded-full glass-panel border border-white/40 flex items-center justify-center text-white shadow-[0_0_50px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all"
                                    >
                                        {isPlaying ? (
                                            <Pause className="w-8 h-8 sm:w-10 sm:h-10 fill-current" />
                                        ) : (
                                            <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current translate-x-1" />
                                        )}
                                    </motion.button>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Bottom-Right Audio Control */}
                        <AnimatePresence>
                            {(showControls || !isPlaying) && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="absolute bottom-6 sm:bottom-12 right-6 sm:right-12 z-30"
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.1, backgroundColor: "#fbbf24" }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={toggleMute}
                                        className={cn(
                                            "w-12 h-12 rounded-2xl glass-panel border border-white/20 flex items-center justify-center text-white shadow-lg transition-all",
                                            !isMuted && "bg-uniteda-gold"
                                        )}
                                    >
                                        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                                    </motion.button>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Progress Bar (Visual Only for Premium Feel) */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 sm:h-2 bg-white/10 overflow-hidden">
                            <motion.div
                                animate={{ x: ["-100%", "0%"] }}
                                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                className="h-full w-full bg-uniteda-gold shadow-[0_0_10px_rgba(251,191,36,0.6)]"
                            />
                        </div>

                        <div className="absolute bottom-6 sm:bottom-12 left-1/2 -translate-x-1/2 w-full max-w-xs text-center pointer-events-none">
                            <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-[8px] sm:text-[10px] font-black text-white uppercase tracking-[0.3em] border border-white/20">
                                {t('about.story.chapter_03.cinema_label')}
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
