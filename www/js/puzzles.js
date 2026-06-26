window.PUZZLES = [
{
  "id": "l1", "category": "logic", "title": "Barrel Weight",
  "type": "visual", "difficulty": 4,
  "question": {"en": "Tap the hole in the barrel to make it lighter!", "hi": "बैरल को हल्का करने के लिए छेद पर टैप करें!"},
  "answer": {"en": "a hole", "hi": "एक छेद"},
  "hint": {"en": "Look at the barrel carefully — something is letting water out.", "hi": "बैरल को ध्यान से देखें — कुछ पानी बाहर निकाल रहा है।"},
  "visual": {
    "bg": "linear-gradient(135deg, #2a1f1a, #3d2b1f)",
    "interaction": {"type": "tap-correct"},
    "elements": [
      {"id": "barrel", "type": "shape", "x": 50, "y": 45, "w": 100, "h": 70, "color": "#8B4513", "shape": "rounded", "border": "3px solid #6B3410"},
      {"id": "hoop1", "type": "shape", "x": 50, "y": 32, "w": 90, "h": 6, "color": "#555", "shape": "rounded"},
      {"id": "hoop2", "type": "shape", "x": 50, "y": 58, "w": 90, "h": 6, "color": "#555", "shape": "rounded"},
      {"id": "hole", "type": "shape", "x": 55, "y": 48, "w": 14, "h": 10, "color": "#1a0f0a", "shape": "circle", "interact": "tap", "correct": true, "animate": "pulse"},
      {"id": "water1", "type": "emoji", "x": 58, "y": 58, "content": "💧", "size": 18, "animate": "float"},
      {"id": "water2", "type": "emoji", "x": 55, "y": 62, "content": "💧", "size": 14, "animate": "float"},
      {"id": "puddle", "type": "shape", "x": 50, "y": 70, "w": 60, "h": 12, "color": "rgba(0,150,255,0.2)", "shape": "circle"}
    ]
  }
},
{
  "id": "l2", "category": "logic", "title": "Break Without Touch", "type": "choice", "difficulty": 2,
  "question": {"en": "What can you break even if you never touch it?", "hi": "ऐसी कौन सी चीज़ है जिसे आप बिना छुए भी तोड़ सकते हैं?"},
  "answer": {"en": "A promise", "hi": "वादा"},
  "hint": {"en": "Think of something abstract, not physical.", "hi": "किसी अमूर्त चीज़ के बारे में सोचें, भौतिक नहीं।"},
  "options": [{"en": "A promise", "hi": "वादा"}, {"en": "A glass", "hi": "गिलास"}, {"en": "A stick", "hi": "लकड़ी"}, {"en": "A bone", "hi": "हड्डी"}]
},
{
  "id": "l3", "category": "logic", "title": "Your Shadow", "type": "text", "difficulty": 3,
  "question": {"en": "I follow you all the time and copy your every move, but you can never touch me or catch me. What am I?", "hi": "मैं हर समय तुम्हारा पीछा करता हूँ और हर हरकत की नकल करता हूँ, लेकिन तुम मुझे छू या पकड़ नहीं सकते। मैं क्या हूँ?"},
  "answer": {"en": "your shadow", "hi": "तुम्हारी परछाई"},
  "hint": {"en": "I disappear when there is no light.", "hi": "जब रोशनी नहीं होती तो मैं गायब हो जाता हूँ।"}
},
{
  "id": "l4", "category": "logic", "title": "White House",
  "type": "visual", "difficulty": 3,
  "question": {"en": "Tap the White House! The green house is on the left and the blue house is on the right.", "hi": "सफेद घर को टैप करें! हरा घर बाएं है और नीला घर दाएं है।"},
  "answer": {"en": "In Washington D.C.", "hi": "वॉशिंगटन डी.सी. में"},
  "hint": {"en": "Think about famous landmarks, not just positions.", "hi": "मशहूर इमारतों के बारे में सोचें, सिर्फ स्थिति के बारे में नहीं।"},
  "visual": {
    "bg": "linear-gradient(180deg, #87CEEB 0%, #90EE90 60%, #8B7355 100%)",
    "interaction": {"type": "tap-correct"},
    "elements": [
      {"id": "green", "type": "shape", "x": 20, "y": 55, "w": 50, "h": 45, "color": "#2e7d32", "shape": "rounded", "interact": "tap", "animate": "pulse"},
      {"id": "green_roof", "type": "shape", "x": 20, "y": 40, "w": 0, "h": 0, "color": "transparent", "border": "25px solid transparent", "shape": "circle"},
      {"id": "white", "type": "shape", "x": 50, "y": 55, "w": 50, "h": 45, "color": "#f0f0f0", "shape": "rounded", "interact": "tap", "correct": true, "animate": "glow"},
      {"id": "white_roof", "type": "shape", "x": 50, "y": 40, "w": 0, "h": 0, "color": "transparent"},
      {"id": "blue", "type": "shape", "x": 80, "y": 55, "w": 50, "h": 45, "color": "#1565c0", "shape": "rounded", "interact": "tap"},
      {"id": "blue_roof", "type": "shape", "x": 80, "y": 40, "w": 0, "h": 0, "color": "transparent"},
      {"id": "label_g", "type": "text", "x": 20, "y": 75, "content": {"en":"GREEN","hi":"हरा"}, "size": 10, "color": "#aaa"},
      {"id": "label_w", "type": "text", "x": 50, "y": 75, "content": {"en":"WHITE","hi":"सफेद"}, "size": 10, "color": "#fff", "bold": true},
      {"id": "label_b", "type": "text", "x": 80, "y": 75, "content": {"en":"BLUE","hi":"नीला"}, "size": 10, "color": "#aaa"}
    ]
  }
},
{
  "id": "l5", "category": "logic", "title": "Teeth No Bite",
  "type": "visual", "difficulty": 2,
  "question": {"en": "Tap what has many teeth but cannot bite!", "hi": "उस चीज़ को टैप करें जिसके कई दाँत हैं लेकिन वह काट नहीं सकती!"},
  "answer": {"en": "a comb", "hi": "कंघी"},
  "hint": {"en": "You might use it every morning.", "hi": "हर सुबह आप इसका इस्तेमाल कर सकते हैं।"},
  "visual": {
    "bg": "linear-gradient(135deg, #2a2a3e, #3a3a5e)",
    "interaction": {"type": "tap-correct"},
    "elements": [
      {"id": "comb_back", "type": "shape", "x": 50, "y": 42, "w": 120, "h": 30, "color": "#4a90d9", "shape": "rounded"},
      {"id": "tooth1", "type": "shape", "x": 28, "y": 58, "w": 6, "h": 25, "color": "#4a90d9", "shape": "rounded"},
      {"id": "tooth2", "type": "shape", "x": 36, "y": 58, "w": 6, "h": 25, "color": "#4a90d9", "shape": "rounded"},
      {"id": "tooth3", "type": "shape", "x": 44, "y": 58, "w": 6, "h": 25, "color": "#4a90d9", "shape": "rounded"},
      {"id": "tooth4", "type": "shape", "x": 52, "y": 58, "w": 6, "h": 25, "color": "#4a90d9", "shape": "rounded"},
      {"id": "tooth5", "type": "shape", "x": 60, "y": 58, "w": 6, "h": 25, "color": "#4a90d9", "shape": "rounded"},
      {"id": "tooth6", "type": "shape", "x": 68, "y": 58, "w": 6, "h": 25, "color": "#4a90d9", "shape": "rounded"},
      {"id": "tooth7", "type": "shape", "x": 28, "y": 58, "w": 6, "h": 25, "color": "#4a90d9", "shape": "rounded"},
      {"id": "comb", "type": "shape", "x": 50, "y": 42, "w": 120, "h": 30, "color": "transparent", "shape": "rounded", "border": "3px solid #5ba0e9", "interact": "tap", "correct": true, "animate": "pulse"},
      {"id": "hair", "type": "emoji", "x": 85, "y": 42, "content": "💇", "size": 24, "z": 2},
      {"id": "mirror", "type": "emoji", "x": 20, "y": 30, "content": "🪞", "size": 28, "interact": "tap"}
    ]
  }
},
{
  "id": "l6", "category": "logic", "title": "Sons and Sister", "type": "choice", "difficulty": 4,
  "question": {"en": "A woman has 3 sons. Each son has 1 sister. How many children does she have?", "hi": "एक महिला के 3 बेटे हैं। हर बेटे की 1 बहन है। उस महिला के कितने बच्चे हैं?"},
  "answer": {"en": "4", "hi": "4"},
  "hint": {"en": "Think about whether the sons share the same sister.", "hi": "क्या सभी बेटों की बहन एक ही हो सकती है?"},
  "options": [{"en": "3", "hi": "3"}, {"en": "4", "hi": "4"}, {"en": "5", "hi": "5"}, {"en": "6", "hi": "6"}]
},
{
  "id": "l7", "category": "logic", "title": "Always Ahead", "type": "text", "difficulty": 3,
  "question": {"en": "What is always in front of you but you can never see it?", "hi": "ऐसी क्या चीज़ है जो हमेशा आपके सामने होती है लेकिन आप उसे देख नहीं सकते?"},
  "answer": {"en": "the future", "hi": "भविष्य"},
  "hint": {"en": "Think about time, not objects.", "hi": "समय के बारे में सोचें, वस्तुओं के बारे में नहीं।"}
},
{
  "id": "l8", "category": "logic", "title": "Subtract Once", "type": "choice", "difficulty": 3,
  "question": {"en": "How many times can you subtract 5 from 25?", "hi": "आप 25 में से 5 कितनी बार घटा सकते हैं?"},
  "answer": {"en": "Once", "hi": "एक बार"},
  "hint": {"en": "Read the question very literally.", "hi": "सवाल को शाब्दिक रूप से ध्यान से पढ़ें।"},
  "options": [{"en": "Once", "hi": "एक बार"}, {"en": "5 times", "hi": "5 बार"}, {"en": "Never", "hi": "कभी नहीं"}, {"en": "4 times", "hi": "4 बार"}]
},
{
  "id": "l9", "category": "logic", "title": "Bankrupt at Hotel", "type": "text", "difficulty": 5,
  "question": {"en": "A woman parks her car at a hotel and realizes she is bankrupt. What happened?", "hi": "एक महिला अपनी कार होटल में खड़ी करती है और महसूस करती है कि वह दिवालिया हो गई। क्या हुआ?"},
  "answer": {"en": "she was playing monopoly", "hi": "वह monopoly खेल रही थी"},
  "hint": {"en": "Think about board games with hotels and cars.", "hi": "ऐसे बोर्ड गेम के बारे में सोचें जिसमें होटल और कार होते हैं।"}
},
{
  "id": "l10", "category": "logic", "title": "Greenhouse Material",
  "type": "visual", "difficulty": 3,
  "question": {"en": "Tap what a greenhouse is made of!", "hi": "ग्रीनहाउस जिस चीज़ से बना है उसे टैप करें!"},
  "answer": {"en": "Glass", "hi": "काँच"},
  "hint": {"en": "Some houses are named for their purpose, not their color.", "hi": "कुछ घरों के नाम उनके रंग के कारण नहीं, बल्कि उद्देश्य के कारण हैं।"},
  "visual": {
    "bg": "linear-gradient(180deg, #87CEEB 0%, #B0E0E6 40%, #228B22 100%)",
    "interaction": {"type": "tap-correct"},
    "elements": [
      {"id": "frame", "type": "shape", "x": 50, "y": 45, "w": 120, "h": 70, "color": "rgba(144,238,144,0.15)", "shape": "rounded", "border": "3px solid #8B7355"},
      {"id": "roof_left", "type": "line", "x": 30, "y": 28, "w": 60, "color": "#8B7355", "rotate": 45},
      {"id": "roof_right", "type": "line", "x": 70, "y": 28, "w": 60, "color": "#8B7355", "rotate": -45},
      {"id": "glass1", "type": "shape", "x": 35, "y": 42, "w": 35, "h": 30, "color": "rgba(200,230,255,0.3)", "shape": "rounded", "border": "1px solid rgba(255,255,255,0.2)", "interact": "tap", "correct": true, "animate": "glow"},
      {"id": "glass2", "type": "shape", "x": 65, "y": 42, "w": 35, "h": 30, "color": "rgba(200,230,255,0.3)", "shape": "rounded", "border": "1px solid rgba(255,255,255,0.2)", "interact": "tap", "correct": true},
      {"id": "glass3", "type": "shape", "x": 35, "y": 62, "w": 35, "h": 25, "color": "rgba(200,230,255,0.3)", "shape": "rounded", "border": "1px solid rgba(255,255,255,0.2)", "interact": "tap", "correct": true},
      {"id": "glass4", "type": "shape", "x": 65, "y": 62, "w": 35, "h": 25, "color": "rgba(200,230,255,0.3)", "shape": "rounded", "border": "1px solid rgba(255,255,255,0.2)", "interact": "tap", "correct": true},
      {"id": "plant1", "type": "emoji", "x": 35, "y": 55, "content": "🌱", "size": 22, "z": 2},
      {"id": "plant2", "type": "emoji", "x": 65, "y": 58, "content": "🌻", "size": 24, "z": 2},
      {"id": "sun", "type": "emoji", "x": 85, "y": 18, "content": "☀️", "size": 28, "animate": "pulse"}
    ]
  }
},
{
  "id": "m1", "category": "math", "title": "Operation Trap", "type": "choice", "difficulty": 3,
  "question": {"en": "Solve: 7 + 7 ÷ 7 + 7 × 7 − 7 = ?", "hi": "हल करें: 7 + 7 ÷ 7 + 7 × 7 − 7 = ?"},
  "answer": {"en": "50", "hi": "50"},
  "hint": {"en": "BODMAS rule — division and multiplication come before addition and subtraction.", "hi": "BODMAS नियम — पहले भाग और गुणा, फिर जोड़ और घटाव करें।"},
  "options": [{"en": "56", "hi": "56"}, {"en": "0", "hi": "0"}, {"en": "50", "hi": "50"}, {"en": "14", "hi": "14"}]
},
{
  "id": "m2", "category": "math", "title": "Bat and Ball", "type": "choice", "difficulty": 3,
  "question": {"en": "A bat and a ball together cost ₹110. The bat costs ₹100 more than the ball. How much does the ball cost?", "hi": "एक बैट और एक गेंद की कुल कीमत ₹110 है। बैट, गेंद से ₹100 अधिक महँगा है। गेंद की कीमत कितनी है?"},
  "answer": {"en": "₹5", "hi": "₹5"},
  "hint": {"en": "If the ball were ₹10, the bat would be ₹110 and total would be ₹120 — not right.", "hi": "अगर गेंद ₹10 होती, तो बैट ₹110 और कुल ₹120 होता — यह सही नहीं है।"},
  "options": [{"en": "₹10", "hi": "₹10"}, {"en": "₹5", "hi": "₹5"}, {"en": "₹55", "hi": "₹55"}, {"en": "₹100", "hi": "₹100"}]
},
{
  "id": "m3", "category": "math", "title": "Circle Corners",
  "type": "visual", "difficulty": 1,
  "question": {"en": "Tap how many corners a circle has!", "hi": "वृत्त के कोनों की संख्या टैप करें!"},
  "answer": {"en": "0", "hi": "0"},
  "hint": {"en": "A corner is formed where two straight lines meet.", "hi": "कोना दो सीधी रेखाओं के मिलने से बनता है।"},
  "visual": {
    "bg": "linear-gradient(135deg, #1a1a3e, #2a2a5e)",
    "interaction": {"type": "tap-correct"},
    "elements": [
      {"id": "circle", "type": "shape", "x": 50, "y": 38, "w": 90, "h": 90, "color": "rgba(0,150,255,0.1)", "shape": "circle", "border": "3px solid #00d4ff", "animate": "pulse"},
      {"id": "corner1", "type": "shape", "x": 25, "y": 20, "w": 10, "h": 10, "color": "rgba(255,255,255,0.15)", "shape": "rounded"},
      {"id": "corner2", "type": "shape", "x": 75, "y": 20, "w": 10, "h": 10, "color": "rgba(255,255,255,0.15)", "shape": "rounded"},
      {"id": "corner3", "type": "shape", "x": 25, "y": 56, "w": 10, "h": 10, "color": "rgba(255,255,255,0.15)", "shape": "rounded"},
      {"id": "corner4", "type": "shape", "x": 75, "y": 56, "w": 10, "h": 10, "color": "rgba(255,255,255,0.15)", "shape": "rounded"},
      {"id": "label_q", "type": "text", "x": 50, "y": 18, "content": {"en":"How many corners?","hi":"कितने कोने?"}, "size": 11, "color": "#888"},
      {"id": "btn_0", "type": "button", "x": 30, "y": 72, "content": {"en":"0","hi":"0"}, "color": "linear-gradient(135deg, #2ecc71, #27ae60)", "size": 16, "interact": "tap", "correct": true},
      {"id": "btn_1", "type": "button", "x": 50, "y": 72, "content": {"en":"1","hi":"1"}, "color": "linear-gradient(135deg, #e94560, #d63850)", "size": 16, "interact": "tap"},
      {"id": "btn_4", "type": "button", "x": 70, "y": 72, "content": {"en":"4","hi":"4"}, "color": "linear-gradient(135deg, #e94560, #d63850)", "size": 16, "interact": "tap"}
    ]
  }
},
{
  "id": "m4", "category": "math", "title": "Cat Rate",
  "type": "visual", "difficulty": 3,
  "question": {"en": "If 3 cats catch 3 mice in 3 mins, how many cats catch 100 mice in 100 mins?", "hi": "अगर 3 बिल्लियाँ 3 चूहे 3 मिनट में पकड़ती हैं, तो 100 मिनट में 100 चूहे पकड़ने के लिए कितनी बिल्लियाँ?"},
  "answer": {"en": "3", "hi": "3"},
  "hint": {"en": "One cat catches one mouse in 3 minutes. In 100 minutes, one cat catches ~33 mice.", "hi": "एक बिल्ली एक चूहा 3 मिनट में पकड़ती है। 100 मिनट में एक बिल्ली ~33 चूहे पकड़ेगी।"},
  "visual": {
    "bg": "linear-gradient(135deg, #1a2a1a, #2a3a2a)",
    "interaction": {"type": "tap-correct"},
    "elements": [
      {"id": "cat1", "type": "emoji", "x": 20, "y": 28, "content": "🐱", "size": 28},
      {"id": "cat2", "type": "emoji", "x": 35, "y": 28, "content": "🐱", "size": 28},
      {"id": "cat3", "type": "emoji", "x": 50, "y": 28, "content": "🐱", "size": 28},
      {"id": "mouse1", "type": "emoji", "x": 65, "y": 30, "content": "🐭", "size": 20, "animate": "shake"},
      {"id": "mouse2", "type": "emoji", "x": 75, "y": 28, "content": "🐭", "size": 20, "animate": "shake"},
      {"id": "mouse3", "type": "emoji", "x": 85, "y": 30, "content": "🐭", "size": 20, "animate": "shake"},
      {"id": "time_text", "type": "text", "x": 50, "y": 42, "content": {"en":"3 mins = 3 mice","hi":"3 मिनट = 3 चूहे"}, "size": 10, "color": "#888"},
      {"id": "q_text", "type": "text", "x": 50, "y": 50, "content": {"en":"100 mice in 100 mins?","hi":"100 मिनट में 100 चूहे?"}, "size": 11, "color": "#aaa", "bold": true},
      {"id": "ans3", "type": "button", "x": 25, "y": 65, "content": {"en":"3","hi":"3"}, "color": "linear-gradient(135deg, #2ecc71, #27ae60)", "size": 16, "interact": "tap", "correct": true},
      {"id": "ans33", "type": "button", "x": 42, "y": 65, "content": {"en":"33","hi":"33"}, "color": "linear-gradient(135deg, #e94560, #d63850)", "size": 16, "interact": "tap"},
      {"id": "ans100", "type": "button", "x": 59, "y": 65, "content": {"en":"100","hi":"100"}, "color": "linear-gradient(135deg, #e94560, #d63850)", "size": 16, "interact": "tap"},
      {"id": "ans1", "type": "button", "x": 76, "y": 65, "content": {"en":"1","hi":"1"}, "color": "linear-gradient(135deg, #e94560, #d63850)", "size": 16, "interact": "tap"}
    ]
  }
},
{
  "id": "m5", "category": "math", "title": "Horse Profit", "type": "choice", "difficulty": 3,
  "question": {"en": "Bought a horse for ₹60, sold for ₹70, bought again for ₹80, sold for ₹90. Total profit?", "hi": "एक घोड़ा ₹60 में खरीदा, ₹70 में बेचा, फिर ₹80 में वापस खरीदा और ₹90 में बेच दिया। कुल कितना लाभ हुआ?"},
  "answer": {"en": "₹20", "hi": "₹20"},
  "hint": {"en": "Treat as two separate trades: ₹60→₹70 (+10) and ₹80→₹90 (+10).", "hi": "दो अलग-अलग लेन-देन मानें: ₹60→₹70 (+10) और ₹80→₹90 (+10)।"},
  "options": [{"en": "₹10", "hi": "₹10"}, {"en": "₹20", "hi": "₹20"}, {"en": "₹0", "hi": "₹0"}, {"en": "₹30", "hi": "₹30"}]
},
{
  "id": "m6", "category": "math", "title": "Hidden Nines", "type": "text", "difficulty": 2,
  "question": {"en": "How many times does the digit 9 appear when you write all numbers from 1 to 100?", "hi": "1 से 100 तक सभी संख्याएँ लिखने पर अंक 9 कितनी बार आता है?"},
  "answer": {"en": "20", "hi": "20"},
  "hint": {"en": "Don't forget the 90s! And 99 counts as two 9s.", "hi": "90 के दशक को मत भूलिए! और 99 में 9 दो बार आता है।"}
},
{
  "id": "m7", "category": "math", "title": "Zero Trap", "type": "choice", "difficulty": 2,
  "question": {"en": "1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 × 0 = ?", "hi": "1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 × 0 = ?"},
  "answer": {"en": "45", "hi": "45"},
  "hint": {"en": "The ×0 only applies to 10, not the whole sum. Multiply first, then add.", "hi": "× 0 सिर्फ 10 पर लागू होता है, पूरे जोड़ पर नहीं। पहले गुणा करें।"},
  "options": [{"en": "0", "hi": "0"}, {"en": "45", "hi": "45"}, {"en": "55", "hi": "55"}, {"en": "10", "hi": "10"}]
},
{
  "id": "w1", "category": "word", "title": "Triple Double", "type": "choice", "difficulty": 3,
  "question": {"en": "What common English word has three consecutive double letters?", "hi": "किस अंग्रेज़ी शब्द में लगातार तीन डबल अक्षर आते हैं?"},
  "answer": {"en": "Bookkeeper", "hi": "Bookkeeper"},
  "hint": {"en": "This person keeps financial records. Think: oo, kk, ee.", "hi": "यह व्यक्ति किताबों का हिसाब रखता है। सोचें: oo, kk, ee।"},
  "options": [{"en": "Bookkeeper", "hi": "Bookkeeper"}, {"en": "Success", "hi": "Success"}, {"en": "Coffee", "hi": "Coffee"}, {"en": "Balloon", "hi": "Balloon"}]
},
{
  "id": "w2", "category": "word", "title": "Always Wrong",
  "type": "visual", "difficulty": 2,
  "question": {"en": "Tap what word is always spelled incorrectly!", "hi": "उस शब्द को टैप करें जो हमेशा गलत लिखा जाता है!"},
  "answer": {"en": "Incorrectly", "hi": "Incorrectly"},
  "hint": {"en": "Read the question again — very carefully!", "hi": "सवाल फिर से ध्यान से पढ़ें!"},
  "visual": {
    "bg": "linear-gradient(135deg, #2a1a2a, #3a2a3a)",
    "interaction": {"type": "tap-correct"},
    "elements": [
      {"id": "sign", "type": "shape", "x": 50, "y": 38, "w": 130, "h": 50, "color": "#2a1a1a", "shape": "rounded", "border": "2px solid #e94560", "animate": "glow"},
      {"id": "sign_text", "type": "text", "x": 50, "y": 38, "content": {"en":"INCORRECTLY","hi":"INCORRECTLY"}, "size": 18, "bold": true, "color": "#e94560", "z": 2, "interact": "tap", "correct": true, "animate": "pulse"},
      {"id": "person", "type": "emoji", "x": 18, "y": 35, "content": "🤔", "size": 30, "animate": "bounce"},
      {"id": "arrow", "type": "text", "x": 30, "y": 50, "content": {"en":"⬆️ Always wrong!","hi":"⬆️ हमेशा गलत!"}, "size": 10, "color": "#888"},
      {"id": "sparkle1", "type": "emoji", "x": 75, "y": 22, "content": "✨", "size": 16, "animate": "float"},
      {"id": "sparkle2", "type": "emoji", "x": 30, "y": 20, "content": "✨", "size": 14, "animate": "float"}
    ]
  }
},
{
  "id": "w3", "category": "word", "title": "Rearranged Tense", "type": "choice", "difficulty": 3,
  "question": {"en": "What common verb becomes its own past tense when you rearrange its letters?", "hi": "कौन सी क्रिया अपने अक्षरों को पुनर्व्यवस्थित करके अपना भूतकाल बनाती है?"},
  "answer": {"en": "Eat", "hi": "Eat"},
  "hint": {"en": "A short three-letter verb related to food.", "hi": "खाने से जुड़ी एक तीन अक्षरों वाली क्रिया।"},
  "options": [{"en": "Eat", "hi": "Eat"}, {"en": "Run", "hi": "Run"}, {"en": "Sing", "hi": "Sing"}, {"en": "Drink", "hi": "Drink"}]
},
{
  "id": "w4", "category": "word", "title": "Vowelless", "type": "choice", "difficulty": 2,
  "question": {"en": "What 7-letter word contains no vowels (A, E, I, O, U)?", "hi": "किस 7-अक्षर के अंग्रेज़ी शब्द में कोई स्वर नहीं है?"},
  "answer": {"en": "Rhythms", "hi": "Rhythms"},
  "hint": {"en": "This word relates to music and beat patterns.", "hi": "यह शब्द संगीत की ताल से जुड़ा है।"},
  "options": [{"en": "Rhythms", "hi": "Rhythms"}, {"en": "Shyly", "hi": "Shyly"}, {"en": "Gypsum", "hi": "Gypsum"}, {"en": "Crypts", "hi": "Crypts"}]
},
{
  "id": "w5", "category": "word", "title": "Letter in Words", "type": "choice", "difficulty": 2,
  "question": {"en": "What comes once in \"minute\", twice in \"moment\", but never in \"thousand years\"?", "hi": "ऐसा क्या है जो \"minute\" में एक बार, \"moment\" में दो बार, लेकिन \"thousand years\" में कभी नहीं आता?"},
  "answer": {"en": "M", "hi": "M"},
  "hint": {"en": "Look at the LETTERS inside each word, not the meanings.", "hi": "हर शब्द के अक्षर देखें, अर्थ नहीं।"},
  "options": [{"en": "M", "hi": "M"}, {"en": "T", "hi": "T"}, {"en": "O", "hi": "O"}, {"en": "N", "hi": "N"}]
},
{
  "id": "w6", "category": "word", "title": "Single Vowel", "type": "choice", "difficulty": 3,
  "question": {"en": "What 9-letter word has only one vowel?", "hi": "किस 9-अक्षर के अंग्रेज़ी शब्द में केवल एक स्वर है?"},
  "answer": {"en": "Strengths", "hi": "Strengths"},
  "hint": {"en": "It means powers or abilities. Only E is a vowel.", "hi": "इसका अर्थ ताकतें है। इसमें केवल E स्वर है।"},
  "options": [{"en": "Strengths", "hi": "Strengths"}, {"en": "Sprinter", "hi": "Sprinter"}, {"en": "Stretched", "hi": "Stretched"}, {"en": "Splendid", "hi": "Splendid"}]
},
{
  "id": "t1", "category": "tap", "title": "Sleeping Guard",
  "type": "visual", "difficulty": 3,
  "question": {"en": "Wake the guard! But don't make too much noise...", "hi": "गार्ड को जगाएँ! लेकिन बहुत शोर मत करें..."},
  "answer": {"en": "the bell", "hi": "घंटी"},
  "hint": {"en": "Maybe you don't need to tap the guard. What else could wake him without noise?", "hi": "शायद आपको गार्ड को नहीं, बल्कि घंटी को टैप करना चाहिए।"},
  "visual": {
    "bg": "linear-gradient(180deg, #0a0a1a 0%, #1a1a3a 50%, #2a1a0a 100%)",
    "interaction": {"type": "tap-correct"},
    "elements": [
      {"id": "guard", "type": "emoji", "x": 45, "y": 45, "content": "🪖", "size": 40, "interact": "tap", "animate": "pulse"},
      {"id": "zzz1", "type": "text", "x": 58, "y": 28, "content": {"en":"Zzz","hi":"Zzz"}, "size": 14, "color": "#888", "animate": "float"},
      {"id": "zzz2", "type": "text", "x": 68, "y": 22, "content": {"en":"Zzz","hi":"Zzz"}, "size": 11, "color": "#666", "animate": "float"},
      {"id": "bell", "type": "emoji", "x": 25, "y": 30, "content": "🔔", "size": 32, "interact": "tap", "correct": true, "animate": "glow"},
      {"id": "btn", "type": "button", "x": 78, "y": 55, "content": {"en":"🚨 ALARM","hi":"🚨 अलार्म"}, "color": "linear-gradient(135deg, #e94560, #d63850)", "size": 10, "interact": "tap"},
      {"id": "wall", "type": "shape", "x": 50, "y": 58, "w": 140, "h": 3, "color": "rgba(255,255,255,0.1)", "shape": "rounded"}
    ]
  }
},
{
  "id": "t2", "category": "tap", "title": "Prank Button",
  "type": "visual", "difficulty": 2,
  "question": {"en": "Tap the \"Don't Tap\" button 5 times!", "hi": "\"टैप न करें\" बटन को 5 बार टैप करें!"},
  "answer": {"en": "5", "hi": "5"},
  "hint": {"en": "It's a prank! The warning is the joke — just tap it.", "hi": "यह एक मज़ाक है! चेतावनी ही मज़ाक है — बस इसे टैप करें।"},
  "visual": {
    "bg": "linear-gradient(135deg, #2a1a1a, #3a1a1a)",
    "interaction": {"type": "tap-count"},
    "elements": [
      {"id": "big_btn", "type": "button", "x": 50, "y": 40, "content": {"en":"🚫 DON'T TAP","hi":"🚫 टैप न करें"}, "color": "linear-gradient(135deg, #e94560, #d63850)", "size": 16, "interact": "tap", "correct": true, "animate": "pulse"},
      {"id": "arrow", "type": "text", "x": 50, "y": 18, "content": {"en":"👆 5 times!","hi":"👆 5 बार!"}, "size": 14, "color": "#e94560", "bold": true}
    ]
  }
},
{
  "id": "t3", "category": "tap", "title": "Triple Trouble", "type": "tap", "difficulty": 4,
  "question": {"en": "Tap until the counter shows exactly 10. Every 3rd tap counts as 2!", "hi": "तब तक टैप करें जब तक काउंटर 10 न दिखाए। हर तीसरा टैप 2 गिना जाता है!"},
  "answer": {"en": "8", "hi": "8"},
  "hint": {"en": "Sequence: 1+1+2+1+1+2+1+1 = 10. Count the number of taps (not the total).", "hi": "क्रम: 1+1+2+1+1+2+1+1 = 10। टैप्स गिनें (योग नहीं)।"}
},
{
  "id": "t4", "category": "tap", "title": "Mirror Tap",
  "type": "visual", "difficulty": 3,
  "question": {"en": "Tap the LEFT button 3 times! (Read the labels, not positions!)", "hi": "LEFT लिखे बटन को 3 बार टैप करें! (लेबल पढ़ें, स्थिति नहीं!)"},
  "answer": {"en": "3", "hi": "3"},
  "hint": {"en": "Look at the LABELS on the buttons, not their positions.", "hi": "बटनों की स्थिति नहीं, बल्कि उन पर लिखे लेबल देखें।"},
  "visual": {
    "bg": "linear-gradient(135deg, #1a1a2e, #2a2a4e)",
    "interaction": {"type": "tap-count"},
    "elements": [
      {"id": "btn_left", "type": "button", "x": 35, "y": 40, "content": {"en":"RIGHT","hi":"RIGHT"}, "color": "linear-gradient(135deg, #3498db, #2980b9)", "size": 14, "interact": "tap"},
      {"id": "btn_right", "type": "button", "x": 65, "y": 40, "content": {"en":"LEFT","hi":"LEFT"}, "color": "linear-gradient(135deg, #2ecc71, #27ae60)", "size": 14, "interact": "tap", "correct": true, "animate": "glow"},
      {"id": "label_l", "type": "text", "x": 35, "y": 55, "content": {"en":"← This says RIGHT","hi":"← यह RIGHT लिखा है"}, "size": 9, "color": "#888"},
      {"id": "label_r", "type": "text", "x": 65, "y": 55, "content": {"en":"→ This says LEFT","hi":"→ यह LEFT लिखा है"}, "size": 9, "color": "#888"},
      {"id": "instruction", "type": "text", "x": 50, "y": 22, "content": {"en":"Tap the LEFT button 3×","hi":"LEFT बटन 3× टैप करें"}, "size": 11, "color": "#f5c518", "bold": true}
    ]
  }
},
{
  "id": "t5", "category": "tap", "title": "Zero Hero", "type": "tap", "difficulty": 4,
  "question": {"en": "Tap the button 0 times. Yes, ZERO. Just wait for the timer.", "hi": "बटन को 0 बार टैप करें। जी हाँ — शून्य। बस टाइमर खत्म होने का इंतज़ार करें।"},
  "answer": {"en": "0", "hi": "0"},
  "hint": {"en": "The hardest command to follow is \"do nothing.\"", "hi": "सबसे कठिन आदेश है \"कुछ मत करो।\""}
},
{
  "id": "s1", "category": "shake", "title": "Snow Globe", "type": "shake", "difficulty": 3,
  "question": {"en": "Get the key out of the snow globe! The globe is sealed and the key is buried under snow.", "hi": "स्नो ग्लोब से चाबी निकालें! ग्लोब सील है और चाबी बर्फ के नीचे दबी है।"},
  "answer": {"en": "shake", "hi": "shake"},
  "hint": {"en": "What happens to a snow globe when you shake it vigorously? The snow settles!", "hi": "जब आप स्नो ग्लोब को ज़ोर से हिलाते हैं तो क्या होता है? बर्फ जम जाती है!"}
},
{
  "id": "s2", "category": "shake", "title": "Genie Bottle", "type": "shake", "difficulty": 2,
  "question": {"en": "Wake the genie trapped inside the bottle! Tapping does nothing — the cork is stuck.", "hi": "बोतल में फंसे जिन्न को जगाएँ! टैप करने से कुछ नहीं होता — कॉर्क बहुत मज़बूती से बंद है।"},
  "answer": {"en": "shake", "hi": "shake"},
  "hint": {"en": "How do you open a stubborn bottle that won't budge?", "hi": "आप एक जिद्दी बोतल कैसे खोलते हैं?"}
},
{
  "id": "s3", "category": "shake", "title": "Gravity Switch", "type": "shake", "difficulty": 4,
  "question": {"en": "Move the ball to the finish line! A wall blocks the path.", "hi": "गेंद को फिनिश लाइन तक ले जाएँ! एक दीवार रास्ता रोक रही है।"},
  "answer": {"en": "shake", "hi": "shake"},
  "hint": {"en": "What if gravity changed direction? Tilt and roll the ball over the wall!", "hi": "क्या होगा अगर गुरुत्वाकर्षण बदल जाए? गेंद को दीवार के ऊपर से घुमाएँ!"}
},
{
  "id": "c1", "category": "trick", "title": "Marathon Position",
  "type": "visual", "difficulty": 2,
  "question": {"en": "In a race, you overtake the runner in second place. Tap what position you're in now!", "hi": "एक दौड़ में, आप दूसरे स्थान पर दौड़ रहे धावक को पीछे छोड़ देते हैं। अब आप किस स्थान पर हैं?"},
  "answer": {"en": "Second place", "hi": "दूसरा स्थान"},
  "hint": {"en": "You passed the SECOND place runner, not the first.", "hi": "आपने दूसरे स्थान वाले को पीछे छोड़ा, पहले को नहीं।"},
  "visual": {
    "bg": "linear-gradient(180deg, #87CEEB 0%, #90EE90 60%, #8B7355 100%)",
    "interaction": {"type": "tap-correct"},
    "elements": [
      {"id": "track", "type": "line", "x": 50, "y": 55, "w": 140, "color": "#8B4513"},
      {"id": "runner1", "type": "emoji", "x": 75, "y": 40, "content": "🥇", "size": 36, "z": 2},
      {"id": "label1", "type": "text", "x": 75, "y": 50, "content": {"en":"1st","hi":"पहला"}, "size": 10, "color": "#aaa"},
      {"id": "runner2", "type": "emoji", "x": 50, "y": 38, "content": "🏃", "size": 34, "z": 2, "interact": "tap", "correct": true, "animate": "glow"},
      {"id": "label2", "type": "text", "x": 50, "y": 48, "content": {"en":"You passed 2nd!","hi":"आपने दूसरे को पीछे छोड़ा!"}, "size": 8, "color": "#f5c518"},
      {"id": "runner3", "type": "emoji", "x": 25, "y": 42, "content": "🥉", "size": 30, "z": 2},
      {"id": "label3", "type": "text", "x": 25, "y": 52, "content": {"en":"3rd","hi":"तीसरा"}, "size": 10, "color": "#aaa"},
      {"id": "crowd", "type": "emoji", "x": 85, "y": 25, "content": "👥", "size": 24},
      {"id": "finish", "type": "text", "x": 90, "y": 54, "content": {"en":"🏁","hi":"🏁"}, "size": 24}
    ]
  }
},
{
  "id": "c2", "category": "trick", "title": "All But Nine", "type": "choice", "difficulty": 2,
  "question": {"en": "A farmer has 17 sheep. All but 9 run away. How many sheep are left?", "hi": "एक किसान के पास 17 भेड़ें हैं। 9 को छोड़कर बाकी सब भाग जाती हैं। किसान के पास कितनी भेड़ें बची हैं?"},
  "answer": {"en": "9", "hi": "9"},
  "hint": {"en": "\"All but 9\" means 9 stayed. The rest ran.", "hi": "\"9 को छोड़कर सब\" का मतलब 9 रह गईं, बाकी भाग गईं।"},
  "options": [{"en": "9", "hi": "9"}, {"en": "8", "hi": "8"}, {"en": "17", "hi": "17"}, {"en": "0", "hi": "0"}]
},
{
  "id": "c3", "category": "trick", "title": "Rooster Egg",
  "type": "visual", "difficulty": 1,
  "question": {"en": "If a rooster lays a brown egg on the peak of a barn roof, which side will it roll down?", "hi": "अगर एक मुर्गा खलिहान की छत के शिखर पर भूरा अंडा देता है, तो वह किस तरफ लुढ़केगा?"},
  "answer": {"en": "Roosters don't lay eggs", "hi": "मुर्गा अंडे नहीं देता"},
  "hint": {"en": "Think about which animals can and cannot lay eggs.", "hi": "सोचिए कि कौन से जानवर अंडे दे सकते हैं।"},
  "visual": {
    "bg": "linear-gradient(180deg, #87CEEB 0%, #FFE4B5 40%, #8B7355 100%)",
    "interaction": {"type": "tap-correct"},
    "elements": [
      {"id": "barn", "type": "shape", "x": 50, "y": 60, "w": 110, "h": 60, "color": "#8B4513", "shape": "rounded"},
      {"id": "roof_l", "type": "line", "x": 30, "y": 38, "w": 70, "color": "#A0522D", "rotate": 35},
      {"id": "roof_r", "type": "line", "x": 70, "y": 38, "w": 70, "color": "#A0522D", "rotate": -35},
      {"id": "rooster", "type": "emoji", "x": 50, "y": 26, "content": "🐓", "size": 32, "interact": "tap", "correct": true, "animate": "bounce"},
      {"id": "egg", "type": "emoji", "x": 65, "y": 30, "content": "🥚", "size": 22, "animate": "pulse"},
      {"id": "sun", "type": "emoji", "x": 85, "y": 15, "content": "☀️", "size": 26, "animate": "pulse"},
      {"id": "cloud", "type": "emoji", "x": 20, "y": 16, "content": "☁️", "size": 24},
      {"id": "q_label", "type": "text", "x": 50, "y": 78, "content": {"en":"Which side? →","hi":"किस तरफ? →"}, "size": 10, "color": "#888"}
    ]
  }
},
{
  "id": "c4", "category": "trick", "title": "Plane Crash",
  "type": "visual", "difficulty": 2,
  "question": {"en": "A plane crashes on the border of the USA and Canada. Tap where they bury the survivors!", "hi": "एक विमान USA और Canada की सीमा पर दुर्घटनाग्रस्त होता है। जीवित बचे लोगों को कहाँ दफनाते हैं?"},
  "answer": {"en": "Survivors aren't buried", "hi": "जीवित लोगों को दफन नहीं किया जाता"},
  "hint": {"en": "If they survived the crash, are they... still alive?", "hi": "अगर वे दुर्घटना में बच गए, तो क्या वे... अभी भी जीवित हैं?"},
  "visual": {
    "bg": "linear-gradient(180deg, #1a1a3a 0%, #2a3a5a 40%, #8B7355 100%)",
    "interaction": {"type": "tap-correct"},
    "elements": [
      {"id": "plane", "type": "emoji", "x": 50, "y": 30, "content": "✈️", "size": 36, "animate": "shake"},
      {"id": "smoke", "type": "emoji", "x": 40, "y": 26, "content": "💨", "size": 20, "animate": "float"},
      {"id": "survivor1", "type": "emoji", "x": 35, "y": 52, "content": "🚶", "size": 28, "interact": "tap", "correct": true, "animate": "glow"},
      {"id": "survivor2", "type": "emoji", "x": 45, "y": 54, "content": "🚶‍♀️", "size": 28, "interact": "tap", "correct": true},
      {"id": "sign_left", "type": "text", "x": 22, "y": 44, "content": {"en":"🇺🇸 USA","hi":"🇺🇸 USA"}, "size": 12, "color": "#fff", "bold": true},
      {"id": "sign_right", "type": "text", "x": 78, "y": 44, "content": {"en":"🇨🇦 CANADA","hi":"🇨🇦 CANADA"}, "size": 12, "color": "#fff", "bold": true},
      {"id": "border", "type": "line", "x": 50, "y": 55, "w": 2, "color": "#e94560", "rotate": 0},
      {"id": "ambulance", "type": "emoji", "x": 80, "y": 55, "content": "🚑", "size": 26},
      {"id": "shovel", "type": "emoji", "x": 20, "y": 58, "content": "🪓", "size": 20}
    ]
  }
},
{
  "id": "c5", "category": "trick", "title": "Alphabet Letters", "type": "choice", "difficulty": 3,
  "question": {"en": "How many letters are in \"the alphabet\"?", "hi": "\"द अल्फ़ाबेट\" (the alphabet) में कितने अक्षर हैं?"},
  "answer": {"en": "11", "hi": "11"},
  "hint": {"en": "Count the letters in the PHRASE, not the A-Z alphabet.", "hi": "A-Z वर्णमाला के 26 नहीं, बल्कि वाक्यांश के अक्षर गिनिए।"},
  "options": [{"en": "11", "hi": "11"}, {"en": "26", "hi": "26"}, {"en": "8", "hi": "8"}, {"en": "33", "hi": "33"}]
},
{
  "id": "c6", "category": "trick", "title": "Empty Shelf",
  "type": "visual", "difficulty": 2,
  "question": {"en": "Tap how many books you can put in an empty bookshelf!", "hi": "एक खाली किताबों की शेल्फ़ में आप कितनी किताबें रख सकते हैं?"},
  "answer": {"en": "1", "hi": "1"},
  "hint": {"en": "After you put 1 book in, it's no longer empty.", "hi": "1 किताब रखने के बाद वह खाली नहीं रहेगी।"},
  "visual": {
    "bg": "linear-gradient(135deg, #2a1a0a, #3a2a1a)",
    "interaction": {"type": "tap-correct"},
    "elements": [
      {"id": "shelf_top", "type": "shape", "x": 50, "y": 30, "w": 130, "h": 6, "color": "#6B3410", "shape": "rounded"},
      {"id": "shelf_bottom", "type": "shape", "x": 50, "y": 52, "w": 130, "h": 6, "color": "#6B3410", "shape": "rounded"},
      {"id": "shelf_left", "type": "shape", "x": 3, "y": 41, "w": 6, "h": 40, "color": "#6B3410", "shape": "rounded"},
      {"id": "shelf_right", "type": "shape", "x": 97, "y": 41, "w": 6, "h": 40, "color": "#6B3410", "shape": "rounded"},
      {"id": "shelf_label", "type": "text", "x": 50, "y": 18, "content": {"en":"📚 EMPTY SHELF","hi":"📚 खाली शेल्फ़"}, "size": 12, "color": "#888"},
      {"id": "book1", "type": "emoji", "x": 30, "y": 40, "content": "📕", "size": 24, "interact": "tap", "correct": true, "animate": "glow"},
      {"id": "book2", "type": "emoji", "x": 50, "y": 40, "content": "📗", "size": 24},
      {"id": "book3", "type": "emoji", "x": 70, "y": 40, "content": "📘", "size": 24},
      {"id": "hint_text", "type": "text", "x": 50, "y": 65, "content": {"en":"Tap 1 book (then shelf isn't empty!)","hi":"1 किताब टैप करें (फिर शेल्फ़ खाली नहीं!)"}, "size": 9, "color": "#666"}
    ]
  }
},
{
  "id": "c7", "category": "trick", "title": "One Match",
  "type": "visual", "difficulty": 2,
  "question": {"en": "Dark room — candle, gas lamp, fireplace, and ONE match. Tap what you light first!", "hi": "अंधेरे कमरे में मोमबत्ती, गैस लैंप, चिमनी और एक माचिस — पहले क्या जलाएँगे?"},
  "answer": {"en": "The match", "hi": "माचिस"},
  "hint": {"en": "Before you can light anything else, what must you light first?", "hi": "कुछ और जलाने से पहले, पहले क्या जलाना होगा?"},
  "visual": {
    "bg": "linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)",
    "interaction": {"type": "tap-correct"},
    "elements": [
      {"id": "match", "type": "emoji", "x": 50, "y": 45, "content": "🔥", "size": 36, "interact": "tap", "correct": true, "animate": "glow"},
      {"id": "candle", "type": "emoji", "x": 22, "y": 38, "content": "🕯️", "size": 28, "interact": "tap"},
      {"id": "lamp", "type": "emoji", "x": 50, "y": 25, "content": "💡", "size": 30, "interact": "tap", "animate": "pulse"},
      {"id": "fireplace", "type": "emoji", "x": 78, "y": 50, "content": "🔥", "size": 32, "interact": "tap"},
      {"id": "question_text", "type": "text", "x": 50, "y": 72, "content": {"en":"🔦 Light first?","hi":"🔦 पहले क्या जलाएँ?"}, "size": 11, "color": "#666"},
      {"id": "arrow", "type": "text", "x": 50, "y": 62, "content": {"en":"👆 Tap the match!","hi":"👆 माचिस टैप करें!"}, "size": 10, "color": "#e94560"}
    ]
  }
},
{
  "id": "o1", "category": "observation", "title": "Your Name", "type": "text", "difficulty": 2,
  "question": {"en": "What belongs to you, but other people use it more than you do?", "hi": "ऐसी क्या चीज़ है जो आपकी है, लेकिन दूसरे लोग उसका आपसे ज़्यादा इस्तेमाल करते हैं?"},
  "answer": {"en": "your name", "hi": "आपका नाम"},
  "hint": {"en": "People call you by it every day.", "hi": "लोग हर दिन आपको इससे बुलाते हैं।"}
},
{
  "id": "o2", "category": "observation", "title": "Hidden F", "type": "choice", "difficulty": 3,
  "question": {"en": "Count the letter F:\nFINISHED FILES ARE THE RESULT OF YEARS OF SCIENTIFIC STUDY COMBINED WITH THE EXPERIENCE OF YEARS", "hi": "F गिनें:\nFINISHED FILES ARE THE RESULT OF YEARS OF SCIENTIFIC STUDY COMBINED WITH THE EXPERIENCE OF YEARS"},
  "answer": {"en": "6", "hi": "6"},
  "hint": {"en": "Some F's are in words like \"OF\" that you skim over. Count every word!", "hi": "कुछ F \"OF\" जैसे शब्दों में हैं जिन्हें आप जल्दी पढ़ लेते हैं। हर शब्द गिनें!"},
  "options": [{"en": "6", "hi": "6"}, {"en": "3", "hi": "3"}, {"en": "4", "hi": "4"}, {"en": "5", "hi": "5"}]
},
{
  "id": "o3", "category": "observation", "title": "Seven Daughters", "type": "choice", "difficulty": 2,
  "question": {"en": "A woman has 7 daughters. Each daughter has one brother. How many children total?", "hi": "एक महिला की 7 बेटियाँ हैं। हर बेटी का एक भाई है। कुल कितने बच्चे हैं?"},
  "answer": {"en": "8", "hi": "8"},
  "hint": {"en": "Do all 7 daughters each have a DIFFERENT brother, or the SAME one?", "hi": "क्या सभी 7 बेटियों के अलग-अलग भाई हैं या सबका एक ही भाई है?"},
  "options": [{"en": "8", "hi": "8"}, {"en": "7", "hi": "7"}, {"en": "14", "hi": "14"}, {"en": "1", "hi": "1"}]
},
{
  "id": "o4", "category": "observation", "title": "Apple Trick",
  "type": "visual", "difficulty": 2,
  "question": {"en": "If you have 3 apples, take 2 apples. Tap the apples you take!", "hi": "अगर आपके पास 3 सेब हैं, 2 सेब ले लें। आप जो सेब लेते हैं उन्हें टैप करें!"},
  "answer": {"en": "2", "hi": "2"},
  "hint": {"en": "Focus on \"YOU take away 2.\" Those apples are now in YOUR hands.", "hi": "ध्यान दें \"आप 2 सेब ले लेते हैं।\" वे सेब अब आपके पास हैं।"},
  "visual": {
    "bg": "linear-gradient(135deg, #2a1a0a, #3a2a1a)",
    "interaction": {"type": "tap-count"},
    "elements": [
      {"id": "table", "type": "shape", "x": 50, "y": 52, "w": 130, "h": 20, "color": "#5D4037", "shape": "rounded"},
      {"id": "apple1", "type": "emoji", "x": 28, "y": 38, "content": "🍎", "size": 36, "interact": "tap", "correct": true, "animate": "pulse"},
      {"id": "apple2", "type": "emoji", "x": 50, "y": 36, "content": "🍎", "size": 36, "interact": "tap", "correct": true, "animate": "pulse"},
      {"id": "apple3", "type": "emoji", "x": 72, "y": 38, "content": "🍎", "size": 36, "interact": "tap"},
      {"id": "label", "type": "text", "x": 50, "y": 20, "content": {"en":"Tap 2 apples to take them!","hi":"2 सेब लेने के लिए टैप करें!"}, "size": 11, "color": "#f5c518"}
    ]
  }
},
{
  "id": "o5", "category": "observation", "title": "Phone Keypad",
  "type": "visual", "difficulty": 2,
  "question": {"en": "Multiply all digits on a phone keypad (0-9). Tap the answer!", "hi": "फ़ोन कीपैड (0-9) के सभी अंकों को गुणा करें। सही उत्तर टैप करें!"},
  "answer": {"en": "0", "hi": "0"},
  "hint": {"en": "Check EVERY digit. Is there one digit that makes the whole product zero?", "hi": "हर अंक जाँचें। कोई ऐसा अंक जो पूरे गुणन को शून्य कर देता है?"},
  "visual": {
    "bg": "linear-gradient(135deg, #1a1a2e, #2a2a3e)",
    "interaction": {"type": "tap-correct"},
    "elements": [
      {"id": "screen", "type": "shape", "x": 50, "y": 18, "w": 60, "h": 20, "color": "rgba(0,212,255,0.1)", "shape": "rounded", "border": "1px solid rgba(0,212,255,0.2)"},
      {"id": "screen_text", "type": "text", "x": 50, "y": 18, "content": {"en":"0-9 × all = ?","hi":"0-9 × सब = ?"}, "size": 10, "color": "#00d4ff"},
      {"id": "k1", "type": "button", "x": 25, "y": 35, "content": {"en":"1","hi":"1"}, "color": "#333", "size": 14, "interact": "tap"},
      {"id": "k2", "type": "button", "x": 50, "y": 35, "content": {"en":"2","hi":"2"}, "color": "#333", "size": 14, "interact": "tap"},
      {"id": "k3", "type": "button", "x": 75, "y": 35, "content": {"en":"3","hi":"3"}, "color": "#333", "size": 14, "interact": "tap"},
      {"id": "k4", "type": "button", "x": 25, "y": 48, "content": {"en":"4","hi":"4"}, "color": "#333", "size": 14, "interact": "tap"},
      {"id": "k5", "type": "button", "x": 50, "y": 48, "content": {"en":"5","hi":"5"}, "color": "#333", "size": 14, "interact": "tap"},
      {"id": "k6", "type": "button", "x": 75, "y": 48, "content": {"en":"6","hi":"6"}, "color": "#333", "size": 14, "interact": "tap"},
      {"id": "k7", "type": "button", "x": 25, "y": 61, "content": {"en":"7","hi":"7"}, "color": "#333", "size": 14, "interact": "tap"},
      {"id": "k8", "type": "button", "x": 50, "y": 61, "content": {"en":"8","hi":"8"}, "color": "#333", "size": 14, "interact": "tap"},
      {"id": "k9", "type": "button", "x": 75, "y": 61, "content": {"en":"9","hi":"9"}, "color": "#333", "size": 14, "interact": "tap"},
      {"id": "k0", "type": "button", "x": 50, "y": 74, "content": {"en":"0","hi":"0"}, "color": "linear-gradient(135deg, #e94560, #d63850)", "size": 16, "interact": "tap", "correct": true, "animate": "glow"},
      {"id": "ans0", "type": "button", "x": 20, "y": 80, "content": {"en":"0","hi":"0"}, "color": "linear-gradient(135deg, #2ecc71, #27ae60)", "size": 12},
      {"id": "ans362", "type": "button", "x": 50, "y": 80, "content": {"en":"362880","hi":"362880"}, "color": "#555", "size": 10}
    ]
  }
},
{
  "id": "o6", "category": "observation", "title": "The Photo", "type": "choice", "difficulty": 4,
  "question": {"en": "\"Brothers and sisters I have none, but that man's father is my father's son.\" Who is in the photo?", "hi": "\"मेरा कोई भाई-बहन नहीं है, लेकिन उस आदमी के पिता मेरे पिता के बेटे हैं।\" फोटो में कौन है?"},
  "answer": {"en": "His son", "hi": "उसका बेटा"},
  "hint": {"en": "\"My father's son\" — if he has no siblings, who is his father's only son? Himself! So \"that man's father is me\" — who is that man?", "hi": "\"मेरे पिता के बेटे\" — अगर उसका कोई भाई नहीं है, तो वह खुद! तो \"उस आदमी के पिता मैं हूँ\" — तो वह आदमी कौन?"},
  "options": [{"en": "His son", "hi": "उसका बेटा"}, {"en": "Himself", "hi": "खुद"}, {"en": "His father", "hi": "उसके पिता"}, {"en": "His nephew", "hi": "उसका भतीजा"}]
},
{
  "id": "x1", "category": "lateral", "title": "The Elevator",
  "type": "visual", "difficulty": 3,
  "question": {"en": "A man lives on the 15th floor. He takes the elevator to 10th and walks 5 floors up. Tap why!", "hi": "एक आदमी 15वीं मंज़िल पर रहता है। लिफ्ट से सिर्फ 10वीं मंज़िल तक जाता है और 5 मंज़िलें पैदल चढ़ता है। क्यों?"},
  "answer": {"en": "he is too short to reach the 15 button", "hi": "वह बहुत छोटा है और 15 के बटन तक नहीं पहुँच सकता"},
  "hint": {"en": "Think about what he can physically reach inside the elevator.", "hi": "सोचिए वह लिफ्ट के अंदर शारीरिक रूप से किस बटन तक पहुँच सकता है।"},
  "visual": {
    "bg": "linear-gradient(135deg, #1a1a2e, #2a2a3e)",
    "interaction": {"type": "tap-correct"},
    "elements": [
      {"id": "panel", "type": "shape", "x": 50, "y": 42, "w": 60, "h": 90, "color": "#2a2a3e", "shape": "rounded", "border": "2px solid rgba(255,255,255,0.15)"},
      {"id": "b15", "type": "shape", "x": 40, "y": 18, "w": 16, "h": 10, "color": "#444", "shape": "rounded"},
      {"id": "b15_t", "type": "text", "x": 40, "y": 18, "content": {"en":"15","hi":"15"}, "size": 8, "color": "#666"},
      {"id": "b14", "type": "shape", "x": 60, "y": 18, "w": 16, "h": 10, "color": "#444", "shape": "rounded"},
      {"id": "b14_t", "type": "text", "x": 60, "y": 18, "content": {"en":"14","hi":"14"}, "size": 8, "color": "#666"},
      {"id": "b13", "type": "shape", "x": 40, "y": 27, "w": 16, "h": 10, "color": "#444", "shape": "rounded"},
      {"id": "b13_t", "type": "text", "x": 40, "y": 27, "content": {"en":"13","hi":"13"}, "size": 8, "color": "#666"},
      {"id": "b12", "type": "shape", "x": 60, "y": 27, "w": 16, "h": 10, "color": "#444", "shape": "rounded"},
      {"id": "b12_t", "type": "text", "x": 60, "y": 27, "content": {"en":"12","hi":"12"}, "size": 8, "color": "#666"},
      {"id": "b11", "type": "shape", "x": 40, "y": 36, "w": 16, "h": 10, "color": "#444", "shape": "rounded"},
      {"id": "b11_t", "type": "text", "x": 40, "y": 36, "content": {"en":"11","hi":"11"}, "size": 8, "color": "#666"},
      {"id": "b10", "type": "shape", "x": 60, "y": 36, "w": 16, "h": 10, "color": "#2ecc71", "shape": "rounded", "animate": "glow"},
      {"id": "b10_t", "type": "text", "x": 60, "y": 36, "content": {"en":"10","hi":"10"}, "size": 8, "color": "#fff"},
      {"id": "b9", "type": "shape", "x": 40, "y": 45, "w": 16, "h": 10, "color": "#444", "shape": "rounded"},
      {"id": "b9_t", "type": "text", "x": 40, "y": 45, "content": {"en":"9","hi":"9"}, "size": 8, "color": "#666"},
      {"id": "b8", "type": "shape", "x": 60, "y": 45, "w": 16, "h": 10, "color": "#444", "shape": "rounded"},
      {"id": "b8_t", "type": "text", "x": 60, "y": 45, "content": {"en":"8","hi":"8"}, "size": 8, "color": "#666"},
      {"id": "b7", "type": "shape", "x": 40, "y": 54, "w": 16, "h": 10, "color": "#444", "shape": "rounded"},
      {"id": "b7_t", "type": "text", "x": 40, "y": 54, "content": {"en":"7","hi":"7"}, "size": 8, "color": "#666"},
      {"id": "b6", "type": "shape", "x": 60, "y": 54, "w": 16, "h": 10, "color": "#444", "shape": "rounded"},
      {"id": "b6_t", "type": "text", "x": 60, "y": 54, "content": {"en":"6","hi":"6"}, "size": 8, "color": "#666"},
      {"id": "b5", "type": "shape", "x": 40, "y": 63, "w": 16, "h": 10, "color": "#444", "shape": "rounded"},
      {"id": "b5_t", "type": "text", "x": 40, "y": 63, "content": {"en":"5","hi":"5"}, "size": 8, "color": "#666"},
      {"id": "b4", "type": "shape", "x": 60, "y": 63, "w": 16, "h": 10, "color": "#444", "shape": "rounded"},
      {"id": "b4_t", "type": "text", "x": 60, "y": 63, "content": {"en":"4","hi":"4"}, "size": 8, "color": "#666"},
      {"id": "b3", "type": "shape", "x": 40, "y": 72, "w": 16, "h": 10, "color": "#444", "shape": "rounded"},
      {"id": "b3_t", "type": "text", "x": 40, "y": 72, "content": {"en":"3","hi":"3"}, "size": 8, "color": "#666"},
      {"id": "b2", "type": "shape", "x": 60, "y": 72, "w": 16, "h": 10, "color": "#444", "shape": "rounded"},
      {"id": "b2_t", "type": "text", "x": 60, "y": 72, "content": {"en":"2","hi":"2"}, "size": 8, "color": "#666"},
      {"id": "b1", "type": "shape", "x": 40, "y": 81, "w": 16, "h": 10, "color": "#444", "shape": "rounded"},
      {"id": "b1_t", "type": "text", "x": 40, "y": 81, "content": {"en":"1","hi":"1"}, "size": 8, "color": "#666"},
      {"id": "man", "type": "emoji", "x": 50, "y": 58, "content": "🧒", "size": 20, "z": 3, "animate": "bounce"},
      {"id": "arrow_15", "type": "text", "x": 50, "y": 12, "content": {"en":"⬆️ Too high!","hi":"⬆️ बहुत ऊपर!"}, "size": 8, "color": "#e94560"},
      {"id": "b10_correct", "type": "shape", "x": 60, "y": 36, "w": 18, "h": 12, "color": "transparent", "shape": "rounded", "border": "2px solid #2ecc71", "interact": "tap", "correct": true, "z": 5}
    ]
  }
},
{
  "id": "x2", "category": "lateral", "title": "The Bar",
  "type": "visual", "difficulty": 3,
  "question": {"en": "A man walks into a bar and asks for water. The bartender pulls out a gun. The man says \"Thanks!\" Tap why!", "hi": "एक आदमी बार में जाता है और पानी माँगता है। बारटेंडर बंदूक निकालता है। आदमी \"शुक्रिया\" कहता है। क्यों?"},
  "answer": {"en": "he had hiccups and the scare cured them", "hi": "उसे हिचकी आ रही थी और डर से वह ठीक हो गई"},
  "hint": {"en": "Think about a common condition that sudden shock can cure instantly.", "hi": "एक आम समस्या जो अचानक झटके से तुरंत ठीक हो सकती है।"},
  "visual": {
    "bg": "linear-gradient(135deg, #2a1a0a, #3a2a1a)",
    "interaction": {"type": "tap-correct"},
    "elements": [
      {"id": "counter", "type": "shape", "x": 50, "y": 52, "w": 140, "h": 12, "color": "#6B3410", "shape": "rounded"},
      {"id": "bartender", "type": "emoji", "x": 72, "y": 35, "content": "🧑‍🍳", "size": 34, "z": 2},
      {"id": "gun", "type": "emoji", "x": 65, "y": 40, "content": "🔫", "size": 24, "animate": "pulse"},
      {"id": "man", "type": "emoji", "x": 32, "y": 38, "content": "🧑‍🦰", "size": 34, "z": 2, "interact": "tap", "correct": true, "animate": "glow"},
      {"id": "hiccup", "type": "text", "x": 32, "y": 22, "content": {"en":"😮 *hic!*","hi":"😮 *हिचकी!*"}, "size": 11, "color": "#f5c518", "animate": "shake"},
      {"id": "glass", "type": "emoji", "x": 38, "y": 46, "content": "🥛", "size": 20},
      {"id": "shelf", "type": "shape", "x": 80, "y": 22, "w": 40, "h": 4, "color": "#555", "shape": "rounded"},
      {"id": "bottle1", "type": "emoji", "x": 75, "y": 18, "content": "🍾", "size": 16},
      {"id": "bottle2", "type": "emoji", "x": 85, "y": 18, "content": "🥃", "size": 16},
      {"id": "question", "type": "text", "x": 50, "y": 65, "content": {"en":"👆 Tap the man! (Why did he say thanks?)","hi":"👆 आदमी को टैप करें! (उसने धन्यवाद क्यों कहा?)"}, "size": 9, "color": "#888"}
    ]
  }
},
{
  "id": "x3", "category": "lateral", "title": "The Operation", "type": "text", "difficulty": 2,
  "question": {"en": "A father and son have a car accident. The father dies. The son is rushed to hospital. The surgeon says, \"I can't operate — he's my son!\" How?", "hi": "एक पिता और बेटा कार दुर्घटना में होते हैं। पिता की मौत हो जाती है। बेटे को अस्पताल ले जाया जाता है। सर्जन कहता है, \"मैं ऑपरेशन नहीं कर सकता — यह मेरा बेटा है!\" कैसे?"},
  "answer": {"en": "the surgeon is his mother", "hi": "सर्जन उसकी माँ है"},
  "hint": {"en": "Think about the surgeon's gender. Not all surgeons are men.", "hi": "सर्जन के लिंग के बारे में सोचिए। सभी सर्जन पुरुष नहीं होते।"}
},
{
  "id": "x4", "category": "lateral", "title": "The Desert",
  "type": "visual", "difficulty": 4,
  "question": {"en": "A man is found dead in a desert with a large pack on his back. No footprints around. Tap how he died!", "hi": "एक आदमी रेगिस्तान में पीठ पर बड़े बैग के साथ मृत पाया जाता है। आसपास कोई पैरों के निशान नहीं। कैसे मरा?"},
  "answer": {"en": "his parachute failed to open", "hi": "उसका पैराशूट नहीं खुला"},
  "hint": {"en": "How could someone reach the desert without leaving footprints? What is that \"pack\"?", "hi": "कोई बिना पैरों के निशान छोड़े रेगिस्तान में कैसे पहुँच सकता है? वह \"बैग\" क्या है?"},
  "visual": {
    "bg": "linear-gradient(180deg, #87CEEB 0%, #F4A460 30%, #EDC9AF 70%, #D2B48C 100%)",
    "interaction": {"type": "tap-correct"},
    "elements": [
      {"id": "sky", "type": "shape", "x": 50, "y": 15, "w": 140, "h": 30, "color": "transparent", "shape": "rounded"},
      {"id": "sand1", "type": "shape", "x": 50, "y": 55, "w": 140, "h": 40, "color": "#EDC9AF", "shape": "rounded"},
      {"id": "sand2", "type": "shape", "x": 50, "y": 72, "w": 140, "h": 25, "color": "#D2B48C", "shape": "rounded"},
      {"id": "man", "type": "emoji", "x": 50, "y": 55, "content": "🧑‍✈️", "size": 32, "z": 3},
      {"id": "pack", "type": "emoji", "x": 50, "y": 44, "content": "🎒", "size": 28, "z": 4, "interact": "tap", "correct": true, "animate": "glow"},
      {"id": "cactus", "type": "emoji", "x": 20, "y": 58, "content": "🌵", "size": 28},
      {"id": "sun", "type": "emoji", "x": 82, "y": 15, "content": "☀️", "size": 30, "animate": "pulse"},
      {"id": "cloud", "type": "emoji", "x": 25, "y": 14, "content": "☁️", "size": 22},
      {"id": "label", "type": "text", "x": 50, "y": 80, "content": {"en":"👆 What's the pack?","hi":"👆 बैग क्या है?"}, "size": 11, "color": "#f5c518"},
      {"id": "footprint_hint", "type": "text", "x": 50, "y": 88, "content": {"en":"No footprints around...","hi":"कोई पैरों के निशान नहीं..."}, "size": 9, "color": "#888"}
    ]
  }
},
{
  "id": "x5", "category": "lateral", "title": "Glass Room", "type": "text", "difficulty": 4,
  "question": {"en": "A man is found dead in a locked room. Broken glass and a puddle of water on the floor. Door locked from inside. How did he die?", "hi": "एक आदमी बंद कमरे में मृत पाया जाता है। फर्श पर टूटा काँच और पानी का गड्ढा। दरवाज़ा अंदर से बंद। वह कैसे मरा?"},
  "answer": {"en": "it was a fish in an aquarium that fell and broke", "hi": "वह एक मछली थी जिसका एक्वेरियम गिरकर टूट गया"},
  "hint": {"en": "Does \"a man\" always mean a human? Think about pets in glass containers.", "hi": "क्या \"आदमी\" का मतलब हमेशा इंसान होता है? काँच के घर में रहने वाले पालतू जानवर के बारे में सोचिए।"}
}
];
