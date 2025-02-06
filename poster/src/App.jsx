import { CheckCircle2, AlertCircle } from 'lucide-react';

const EnhancedColumnGrading = () => {
  return (
    <div className="w-full h-screen grid grid-cols-3 bg-gray-100 font-sans">
      {/* Reference Answer Column */}
      <div className="h-full border-r border-gray-200 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="h-full flex flex-col">
          <div className="p-4 border-b bg-white/80 backdrop-blur-sm sticky top-0">
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 rounded-full text-sm bg-blue-100 text-blue-700">อ้างอิง</span>
              <h2 className="text-lg font-semibold text-blue-700">เฉลยของอาจารย์</h2>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            <div className="bg-white/80 rounded-lg shadow-sm p-6">
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                สำหรับโครงการขนาดใหญ่ที่มีความซับซ้อนสูงและมีทีมงานจำนวนมาก ควรเลือกใช้ Waterfall Model เนื่องจาก:
              </p>
              <div className="space-y-3">
                {[
                  'มีโครงสร้างและขั้นตอนที่ชัดเจน ทำให้ง่ายต่อการควบคุมและติดตามความคืบหน้า',
                  'เหมาะกับโครงการที่มีข้อกำหนดชัดเจนและเปลี่ยนแปลงน้อย',
                  'มีการจัดทำเอกสารอย่างละเอียดในแต่ละขั้นตอน',
                  'การแบ่งงานเป็นเฟสที่ชัดเจนช่วยให้จัดการทรัพยากรและงบประมาณได้ดี'
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-blue-50/50">
                    <span className="text-blue-500 font-medium">•</span>
                    <p className="text-gray-700 text-sm">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grading Column */}
      <div className="h-full border-r border-gray-200 bg-gradient-to-b from-purple-50/50 to-white">
        <div className="h-full flex flex-col">
          <div className="p-4 border-b bg-white/80 backdrop-blur-sm sticky top-0">
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 rounded-full text-sm bg-purple-100 text-purple-700">การประเมิน</span>
              <h2 className="text-lg font-semibold text-purple-700">การประเมินผล</h2>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Score Display */}
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-lg shadow-sm p-6">
              <div className="text-center space-y-2">
                <div className="text-4xl font-bold text-purple-700">7/10</div>
                <div className="text-sm text-purple-600">คะแนน (70%)</div>
              </div>
            </div>

            {/* Strengths */}
            <div className="bg-white/80 rounded-lg shadow-sm p-6 space-y-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-green-500 w-5 h-5" />
                <h3 className="text-green-700 font-medium">จุดแข็ง</h3>
              </div>
              <div className="space-y-3">
                {[
                  'เลือก Waterfall Model ได้ถูกต้องตามบริบทของโจทย์',
                  'อธิบายเหตุผลพื้นฐานได้ดีในเรื่องการควบคุมและการทำงานเป็นขั้นตอน'
                ].map((strength, index) => (
                  <div key={index} className="p-3 rounded-lg bg-green-50/50 text-sm text-gray-700">
                    {strength}
                  </div>
                ))}
              </div>
            </div>

            {/* Improvements */}
            <div className="bg-white/80 rounded-lg shadow-sm p-6 space-y-4">
              <div className="flex items-center gap-2">
                <AlertCircle className="text-red-500 w-5 h-5" />
                <h3 className="text-red-700 font-medium">จุดที่ควรปรับปรุง</h3>
              </div>
              <div className="space-y-3">
                {[
                  'ขาดการอธิบายรายละเอียดเชิงลึกเกี่ยวกับประโยชน์ของ Waterfall',
                  'ไม่ได้กล่าวถึงข้อดีด้านการจัดทำเอกสารที่ละเอียด'
                ].map((improvement, index) => (
                  <div key={index} className="p-3 rounded-lg bg-red-50/50 text-sm text-gray-700">
                    {improvement}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Student Answer Column */}
      <div className="h-full bg-gradient-to-b from-green-50/50 to-white">
        <div className="h-full flex flex-col">
          <div className="p-4 border-b bg-white/80 backdrop-blur-sm sticky top-0">
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 rounded-full text-sm bg-green-100 text-green-700">คำตอบ</span>
              <h2 className="text-lg font-semibold text-green-700">คำตอบของนักศึกษา</h2>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            <div className="bg-white/80 rounded-lg shadow-sm p-6">
              <div className="p-4 rounded-lg bg-green-50/50">
                <p className="text-gray-700 text-sm leading-relaxed">
                  &quot;ผมจะเลือกใช้ Waterfall Model ครับ เพราะโครงการมีขนาดใหญ่และซับซ้อน 
                  ต้องการการควบคุมที่เข้มงวด Waterfall จะช่วยให้ทีมทำงานเป็นขั้นตอน 
                  มีเอกสารชัดเจน และควบคุมงบประมาณได้ดี ทีมงานจำนวนมากจะได้เข้าใจ
                  หน้าที่ของตัวเองและทำงานไปในทิศทางเดียวกัน&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedColumnGrading;