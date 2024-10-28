import React, { useState } from 'react';
import { Phone, MessageCircle, Share2 } from 'lucide-react';
import { ContactItem } from './ContactItem';

const WECHAT_ID = 'stkj13692738796';

export function Contact() {
  const [showToast, setShowToast] = useState(false);

  const handleWeChatClick = () => {
    if (/MicroMessenger/i.test(navigator.userAgent)) {
      window.location.href = `weixin://contacts/profile/${WECHAT_ID}`;
    } else if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      window.location.href = `weixin://dl/add/${WECHAT_ID}`;
      
      setTimeout(() => {
        const downloadPrompt = document.getElementById('wechat-download');
        if (downloadPrompt) {
          downloadPrompt.classList.remove('hidden');
        }
      }, 2000);
    } else {
      const qrModal = document.getElementById('qr-modal');
      if (qrModal) {
        qrModal.classList.remove('hidden');
      }
    }
  };

  const handleShare = () => {
    if (/MicroMessenger/i.test(navigator.userAgent)) {
      const shareGuide = document.getElementById('share-guide');
      if (shareGuide) {
        shareGuide.classList.remove('hidden');
      }
    } else {
      if (navigator.share) {
        navigator.share({
          title: '三体网络科技有限公司',
          text: '精选联盟直播带货达人解决方案',
          url: window.location.href,
        }).catch(() => {
          setShowToast(true);
          setTimeout(() => setShowToast(false), 3000);
        });
      } else {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      }
    }
  };

  return (
    <>
      <section className="py-16 px-6 bg-gray-50" id="contact">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">联系我们</h2>
          <div className="space-y-8">
            <ContactItem
              icon={MessageCircle}
              title="微信咨询"
              content={WECHAT_ID}
              action={{
                onClick: handleWeChatClick,
                label: "点击添加微信好友"
              }}
            />
            
            <ContactItem
              icon={Phone}
              title="电话"
              content="0752-3939079"
            />

            <div className="pt-4">
              <button
                onClick={handleShare}
                className="flex items-center gap-2 w-full justify-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                <Share2 className="w-5 h-5" />
                分享给好友
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WeChat Download Prompt */}
      <div id="wechat-download" className="fixed inset-0 bg-black/50 hidden z-50">
        <div className="bg-white rounded-lg p-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-sm">
          <h3 className="text-lg font-semibold mb-4">未检测到微信</h3>
          <p className="text-gray-600 mb-6">请先安装微信后再试</p>
          <div className="flex gap-4">
            <button
              onClick={() => window.location.href = 'https://weixin.qq.com/'}
              className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              下载微信
            </button>
            <button
              onClick={() => {
                const prompt = document.getElementById('wechat-download');
                if (prompt) prompt.classList.add('hidden');
              }}
              className="flex-1 border border-gray-300 px-4 py-2 rounded-lg"
            >
              取消
            </button>
          </div>
        </div>
      </div>

      {/* Share Guide */}
      <div id="share-guide" className="fixed inset-0 bg-black/90 hidden z-50" onClick={(e) => {
        const guide = document.getElementById('share-guide');
        if (guide && e.target === guide) {
          guide.classList.add('hidden');
        }
      }}>
        <div className="absolute top-4 right-8">
          <img 
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADy0lEQVR4nO2aW4hNURjHf+M2GsO4DQnJ5DbIZTwgeSHxYF5cHoSUB0WUB5dCKeWBEg8uDzyIBw/KJcWLcisPJrkmd5MmY2iMGWb0r/XVOnt/e5+z99lz9pzZv1q1c/b6vvWt/15rfd9aZzmKKKKIXFABTAKWALuAE8B14CnwEfgO/NR/X+l354G9wEpgBlASZKdLgbnAduAq8Av4C/zJsv0BPgDngK3AdKAkiI5PAI4Az3PodC7tFbAXqA2i8+uBpzl2NpP2HFgXj84XA/v0lY2y/QaOAXVRdX4o0BRDx+3tDjAiis4vB97F3Hm7PQZmhtX5YmC/Yc9+AHeB08AuYC2wEJgKjANGAaXaMPn7OGARsA7YA5wC7gHvDR7kJ7AnX+dXAj8MHX0IbAYm5/HQEmAKsBW4BbQY+LYAFfkQ4JBh2F8CNuV5jWcjwkbgkqGvh3MRYLNhzB8GRoXwkNHAAeDtfwgwGXiSQYA/wI4QH2Ijwk7gd4Y+PwYmZSvAXsNktzeEhyQjwm5DX/cYvICjqDMM+/vAuJAe4kWEOh0qfvp8DxibjQANhsXOjpAe4keEHYa+H8xGgCbDVnZ4SA/JRoQjhr6fykaAW4Zp7+iQHpKLCAd9+n4zGwEeGBY7k0N6SK4iNPr0/X42ArQaFjvlIT0kHxHu+/S9NRsBfhkWOyUhPSRfEe769P1nNgJ8Myx2ikN6iBcRlvv0/Vs2AnwyLHaKQnqIVxHO+vT9YzYCtBsWO04ID/EjwnGfvn/IRoC3hsVOUQgP8SvCKZ++v8lGgNeGxU5RCA/JJMJZn76/ykaAF4bFTlEID8kkwnmfvr/IRoBnhsVOUQgPySTCJZ++P81GgEeGxU5RCA/xI8IVn74/zEaA+4bFTlEID/EjwnWfvt/LRoBbhsVOUQgPySTCTZ++38hGgKuGxU5RCA/JJMIdn75fzkaACwFtgzOJcM+n7+ezEeCMYbFTFMJD/Ihw36fvp7MR4KRhsVMU0kP8iPDQp+8nshHgmGGxUxTSQ/yI8Min78eyEeCAYbFTFNJD/Ijw2KfvB7MRYJdhsVMU0kP8iPDEp+87sxFgk2GxUxTSQ/yI8NSn7xuzEWCNYbFTFNJD/Ijw3KfvqwMTwNEZnqKQHuJHhBc+fV8WmACOzvAUhfQQPyK89On7osAEcHSGpyikh/gR4ZVP3+cHJoCjMzxFIT3EjwivffpeH5gAjs7wFIX0ED8ivPHp+5zABHB0hqcopIf4EeGtT99nByaAozM8RSE9xI8I73z6PiMwARyd4SkK6SF+RGgPrPdFFFFEEUUU0Yv4B15WzJ8fFE2mAAAAAElFTkSuQmCC"
            alt="Share arrow"
            className="w-8 h-8 animate-bounce"
          />
        </div>
        <p className="text-white text-center absolute bottom-32 left-1/2 -translate-x-1/2">
          点击右上角分享给好友
        </p>
      </div>

      {/* Desktop QR Code Modal */}
      <div id="qr-modal" className="fixed inset-0 bg-black/50 hidden z-50" onClick={(e) => {
        const modal = document.getElementById('qr-modal');
        if (modal && e.target === modal) {
          modal.classList.add('hidden');
        }
      }}>
        <div className="bg-white rounded-lg p-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-sm">
          <h3 className="text-lg font-semibold mb-4">添加微信好友</h3>
          <p className="text-gray-600 mb-4">请使用手机微信扫描二维码添加好友</p>
          <div className="flex justify-center mb-4">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://u.wechat.com/${WECHAT_ID}`}
              alt="WeChat QR Code"
              className="w-48 h-48"
            />
          </div>
          <button
            onClick={() => {
              const modal = document.getElementById('qr-modal');
              if (modal) modal.classList.add('hidden');
            }}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            关闭
          </button>
        </div>
      </div>

      {/* Toast Notification */}
      <div className={`fixed bottom-4 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg transition-opacity duration-300 ${showToast ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        复制链接成功
      </div>
    </>
  );
}