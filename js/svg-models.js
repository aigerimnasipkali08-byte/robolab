// Высокодетализированные векторные SVG-модели микроконтроллеров и радиодеталей
// Включает точные координаты контактных отверстий (пинов) для подключения виртуальных проводов

window.SVG_MODELS = {
  // Каталог элементов для центральной колонки «Библиотека»
  CATALOG: {
    controllers: [
      { type: "arduino_uno", name: "Arduino Uno R3", sub: "ATmega328P · 16MHz", width: 270, height: 200 },
      { type: "arduino_nano", name: "Arduino Nano", sub: "ATmega328P · Mini-USB", width: 220, height: 96 },
      { type: "arduino_mega", name: "Arduino Mega 2560", sub: "ATmega2560 · 54 I/O", width: 330, height: 200 },
      { type: "esp32_devkit", name: "ESP32 DevKit V1", sub: "ESP-WROOM-32 · Wi-Fi", width: 230, height: 126 },
      { type: "rpi_pico", name: "Raspberry Pi Pico", sub: "RP2040 · Dual ARM", width: 220, height: 96 }
    ],
    modules: [
      { type: "led", name: "Светодиод 5мм", sub: "Красный / Зелёный / Синий", width: 70, height: 96 },
      { type: "resistor", name: "Резистор", sub: "220 Ом · 0.25 Вт", width: 130, height: 48 },
      { type: "button", name: "Тактовая кнопка", sub: "6×6 мм · Нормально разомкн.", width: 88, height: 88 },
      { type: "servo", name: "Сервопривод SG90", sub: "Micro Servo 9g · 0..180°", width: 150, height: 118 },
      { type: "lcd1602", name: "Дисплей LCD 1602", sub: "16×2 символов · I2C", width: 216, height: 112 },
      { type: "oled", name: "Дисплей OLED 0.96\"", sub: "SSD1306 · 128×64 I2C", width: 136, height: 126 },
      { type: "neopixel", name: "Полоса NeoPixel 8×RGB", sub: "WS2812B · Адресная LED", width: 224, height: 68 },
      { type: "dht11", name: "Датчик DHT11", sub: "Температура и влажность", width: 116, height: 134 },
      { type: "ultrasonic", name: "Дальномер HC-SR04", sub: "Ультразвуковой · 2..200 см", width: 164, height: 114 },
      { type: "ldr", name: "Фоторезистор LDR", sub: "Датчик освещённости", width: 116, height: 118 },
      { type: "potentiometer", name: "Потенциометр 10 кОм", sub: "Переменный резистор", width: 110, height: 118 }
    ]
  },

  // Возвращает массив пинов { id, label, x, y, type } относительно левого верхнего угла компонента
  getPins(comp) {
    const t = comp.type;
    if (t === "arduino_uno") {
      return [
        // Верхняя колодка DIGITAL (слева направо)
        { id: "GND3", label: "GND", x: 76, y: 12, type: "gnd" },
        { id: "D13", label: "D13", x: 90, y: 12, type: "digital" },
        { id: "D12", label: "D12", x: 104, y: 12, type: "digital" },
        { id: "D11", label: "D11~", x: 118, y: 12, type: "digital" },
        { id: "D10", label: "D10~", x: 132, y: 12, type: "digital" },
        { id: "D9",  label: "D9~",  x: 146, y: 12, type: "digital" },
        { id: "D8",  label: "D8",   x: 160, y: 12, type: "digital" },
        { id: "D7",  label: "D7",   x: 178, y: 12, type: "digital" },
        { id: "D6",  label: "D6~",  x: 192, y: 12, type: "digital" },
        { id: "D5",  label: "D5~",  x: 206, y: 12, type: "digital" },
        { id: "D4",  label: "D4",   x: 220, y: 12, type: "digital" },
        { id: "D3",  label: "D3~",  x: 234, y: 12, type: "digital" },
        { id: "D2",  label: "D2",   x: 248, y: 12, type: "digital" },
        // Нижняя колодка POWER
        { id: "3V3",  label: "3.3V", x: 88,  y: 188, type: "power" },
        { id: "5V",   label: "5V",   x: 102, y: 188, type: "power" },
        { id: "GND1", label: "GND",  x: 116, y: 188, type: "gnd" },
        { id: "GND2", label: "GND",  x: 130, y: 188, type: "gnd" },
        { id: "VIN",  label: "VIN",  x: 144, y: 188, type: "power" },
        // Нижняя колодка ANALOG IN
        { id: "A0", label: "A0", x: 172, y: 188, type: "analog" },
        { id: "A1", label: "A1", x: 186, y: 188, type: "analog" },
        { id: "A2", label: "A2", x: 200, y: 188, type: "analog" },
        { id: "A3", label: "A3", x: 214, y: 188, type: "analog" },
        { id: "A4", label: "A4/SDA", x: 228, y: 188, type: "analog" },
        { id: "A5", label: "A5/SCL", x: 242, y: 188, type: "analog" }
      ];
    }

    if (t === "arduino_nano") {
      return [
        { id: "D13", label: "D13", x: 36,  y: 10, type: "digital" },
        { id: "D12", label: "D12", x: 52,  y: 10, type: "digital" },
        { id: "D11", label: "D11", x: 68,  y: 10, type: "digital" },
        { id: "D10", label: "D10", x: 84,  y: 10, type: "digital" },
        { id: "D9",  label: "D9",  x: 100, y: 10, type: "digital" },
        { id: "D8",  label: "D8",  x: 116, y: 10, type: "digital" },
        { id: "D7",  label: "D7",  x: 132, y: 10, type: "digital" },
        { id: "D4",  label: "D4",  x: 148, y: 10, type: "digital" },
        { id: "D2",  label: "D2",  x: 164, y: 10, type: "digital" },
        { id: "GND1", label: "GND", x: 180, y: 10, type: "gnd" },
        { id: "5V",  label: "5V",  x: 52,  y: 86, type: "power" },
        { id: "GND2", label: "GND", x: 68,  y: 86, type: "gnd" },
        { id: "A0",  label: "A0",  x: 100, y: 86, type: "analog" },
        { id: "A1",  label: "A1",  x: 116, y: 86, type: "analog" },
        { id: "A2",  label: "A2",  x: 132, y: 86, type: "analog" },
        { id: "A4",  label: "A4/SDA", x: 148, y: 86, type: "analog" },
        { id: "A5",  label: "A5/SCL", x: 164, y: 86, type: "analog" }
      ];
    }

    if (t === "arduino_mega") {
      return [
        { id: "GND3", label: "GND", x: 76, y: 12, type: "gnd" },
        { id: "D13", label: "D13", x: 90, y: 12, type: "digital" },
        { id: "D12", label: "D12", x: 104, y: 12, type: "digital" },
        { id: "D11", label: "D11", x: 118, y: 12, type: "digital" },
        { id: "D10", label: "D10", x: 132, y: 12, type: "digital" },
        { id: "D9",  label: "D9",  x: 146, y: 12, type: "digital" },
        { id: "D8",  label: "D8",  x: 160, y: 12, type: "digital" },
        { id: "D7",  label: "D7",  x: 178, y: 12, type: "digital" },
        { id: "D6",  label: "D6",  x: 192, y: 12, type: "digital" },
        { id: "D5",  label: "D5",  x: 206, y: 12, type: "digital" },
        { id: "D4",  label: "D4",  x: 220, y: 12, type: "digital" },
        { id: "D3",  label: "D3",  x: 234, y: 12, type: "digital" },
        { id: "D2",  label: "D2",  x: 248, y: 12, type: "digital" },
        { id: "5V",  label: "5V",  x: 96,  y: 188, type: "power" },
        { id: "GND1", label: "GND", x: 112, y: 188, type: "gnd" },
        { id: "GND2", label: "GND", x: 128, y: 188, type: "gnd" },
        { id: "A0",  label: "A0",  x: 168, y: 188, type: "analog" },
        { id: "A1",  label: "A1",  x: 184, y: 188, type: "analog" },
        { id: "A2",  label: "A2",  x: 200, y: 188, type: "analog" },
        { id: "A4",  label: "A4/SDA", x: 216, y: 188, type: "analog" },
        { id: "A5",  label: "A5/SCL", x: 232, y: 188, type: "analog" }
      ];
    }

    if (t === "esp32_devkit") {
      return [
        { id: "3V3",  label: "3V3",  x: 34,  y: 12, type: "power" },
        { id: "GND1", label: "GND",  x: 52,  y: 12, type: "gnd" },
        { id: "D13",  label: "D13",  x: 70,  y: 12, type: "digital" },
        { id: "D12",  label: "D12",  x: 88,  y: 12, type: "digital" },
        { id: "D11",  label: "D14",  x: 106, y: 12, type: "digital" },
        { id: "D9",   label: "D27",  x: 124, y: 12, type: "digital" },
        { id: "D8",   label: "D26",  x: 142, y: 12, type: "digital" },
        { id: "D7",   label: "D25",  x: 160, y: 12, type: "digital" },
        { id: "A0",   label: "A0/34", x: 178, y: 12, type: "analog" },
        { id: "5V",   label: "VIN/5V", x: 34, y: 114, type: "power" },
        { id: "GND2", label: "GND",   x: 52, y: 114, type: "gnd" },
        { id: "D2",   label: "D2",    x: 70, y: 114, type: "digital" },
        { id: "D4",   label: "D4",    x: 88, y: 114, type: "digital" },
        { id: "A1",   label: "A1/35", x: 124, y: 114, type: "analog" },
        { id: "A4",   label: "SDA/21", x: 160, y: 114, type: "analog" },
        { id: "A5",   label: "SCL/22", x: 178, y: 114, type: "analog" }
      ];
    }

    if (t === "rpi_pico") {
      return [
        { id: "D2",   label: "GP2",  x: 36,  y: 10, type: "digital" },
        { id: "D3",   label: "GP3",  x: 54,  y: 10, type: "digital" },
        { id: "D4",   label: "GP4",  x: 72,  y: 10, type: "digital" },
        { id: "D7",   label: "GP7",  x: 90,  y: 10, type: "digital" },
        { id: "D8",   label: "GP8",  x: 108, y: 10, type: "digital" },
        { id: "D9",   label: "GP9",  x: 126, y: 10, type: "digital" },
        { id: "D13",  label: "GP13", x: 144, y: 10, type: "digital" },
        { id: "GND1", label: "GND",  x: 162, y: 10, type: "gnd" },
        { id: "5V",   label: "VBUS", x: 36,  y: 86, type: "power" },
        { id: "3V3",  label: "3V3",  x: 54,  y: 86, type: "power" },
        { id: "GND2", label: "GND",  x: 72,  y: 86, type: "gnd" },
        { id: "A0",   label: "ADC0", x: 108, y: 86, type: "analog" },
        { id: "A1",   label: "ADC1", x: 126, y: 86, type: "analog" },
        { id: "A4",   label: "SDA",  x: 162, y: 86, type: "analog" }
      ];
    }

    // Пины модулей и радиодеталей
    switch (t) {
      case "led":
        return [
          { id: "anode",   label: "Анод (+)",  x: 24, y: 88, type: "input" },
          { id: "cathode", label: "Катод (–)", x: 46, y: 88, type: "gnd" }
        ];
      case "resistor":
        return [
          { id: "t1", label: "Вывод 1", x: 8,   y: 24, type: "passive" },
          { id: "t2", label: "Вывод 2", x: 122, y: 24, type: "passive" }
        ];
      case "button":
        return [
          { id: "out", label: "SIG (1A)", x: 22, y: 80, type: "output" },
          { id: "gnd", label: "GND (2B)", x: 66, y: 80, type: "gnd" }
        ];
      case "servo":
        return [
          { id: "gnd", label: "GND (Кор.)", x: 44, y: 110, type: "gnd" },
          { id: "vcc", label: "VCC (Красн.)", x: 74, y: 110, type: "power" },
          { id: "pwm", label: "PWM (Оранж.)", x: 104, y: 110, type: "input" }
        ];
      case "lcd1602":
        return [
          { id: "gnd", label: "GND", x: 38,  y: 104, type: "gnd" },
          { id: "vcc", label: "VCC", x: 64,  y: 104, type: "power" },
          { id: "sda", label: "SDA", x: 90,  y: 104, type: "input" },
          { id: "scl", label: "SCL", x: 116, y: 104, type: "input" }
        ];
      case "oled":
        return [
          { id: "gnd", label: "GND", x: 34,  y: 14, type: "gnd" },
          { id: "vcc", label: "VCC", x: 56,  y: 14, type: "power" },
          { id: "scl", label: "SCK", x: 78,  y: 14, type: "input" },
          { id: "sda", label: "SDA", x: 100, y: 14, type: "input" }
        ];
      case "neopixel":
        return [
          { id: "gnd", label: "GND", x: 14, y: 18, type: "gnd" },
          { id: "vcc", label: "5V",  x: 14, y: 34, type: "power" },
          { id: "din", label: "DIN", x: 14, y: 50, type: "input" }
        ];
      case "dht11":
        return [
          { id: "vcc", label: "VCC",  x: 32, y: 126, type: "power" },
          { id: "out", label: "DATA", x: 58, y: 126, type: "output" },
          { id: "gnd", label: "GND",  x: 84, y: 126, type: "gnd" }
        ];
      case "ultrasonic":
        return [
          { id: "vcc",  label: "VCC",  x: 50,  y: 106, type: "power" },
          { id: "trig", label: "TRIG", x: 72,  y: 106, type: "input" },
          { id: "out",  label: "ECHO", x: 94,  y: 106, type: "output" },
          { id: "gnd",  label: "GND",  x: 116, y: 106, type: "gnd" }
        ];
      case "ldr":
        return [
          { id: "vcc", label: "VCC", x: 32, y: 110, type: "power" },
          { id: "out", label: "AO",  x: 58, y: 110, type: "output" },
          { id: "gnd", label: "GND", x: 84, y: 110, type: "gnd" }
        ];
      case "potentiometer":
        return [
          { id: "gnd", label: "GND", x: 30, y: 110, type: "gnd" },
          { id: "out", label: "SIG", x: 55, y: 110, type: "output" },
          { id: "vcc", label: "VCC", x: 80, y: 110, type: "power" }
        ];
      default:
        return [];
    }
  },

  // Отрисовка фотореалистичной векторной SVG-модели контроллера или радиодетали
  renderSVG(comp, isRunning, mcuPinStates = {}) {
    const t = comp.type;
    const p = comp.props || {};
    const rt = comp.runtime || {};

    // ==================== 1. ARDUINO UNO R3 ====================
    if (t === "arduino_uno") {
      const lOn = !!mcuPinStates["D13"];
      return `
        <svg viewBox="0 0 270 200" width="270" height="200" class="board-svg">
          <defs>
            <linearGradient id="unoPcb" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#00878F"/>
              <stop offset="60%" stop-color="#00727A"/>
              <stop offset="100%" stop-color="#005C63"/>
            </linearGradient>
            <linearGradient id="metalShell" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#f1f5f9"/>
              <stop offset="50%" stop-color="#cbd5e1"/>
              <stop offset="100%" stop-color="#94a3b8"/>
            </linearGradient>
          </defs>
          <!-- Контур синей печатной платы Arduino Uno со срезанными углами -->
          <path d="M 18 4 L 254 4 L 266 16 L 266 184 L 254 196 L 18 196 L 18 4 Z" fill="url(#unoPcb)" stroke="#00494F" stroke-width="2"/>
          <!-- Медные дорожки под паяльной маской -->
          <g stroke="#009CA6" stroke-width="1" fill="none" opacity="0.45">
            <path d="M 90 22 L 90 48 L 130 85"/>
            <path d="M 118 22 L 118 54 L 145 85"/>
            <path d="M 146 22 L 146 60 L 160 85"/>
            <path d="M 192 22 L 192 65 L 185 85"/>
            <path d="M 172 178 L 172 150 L 165 130"/>
            <path d="M 200 178 L 200 150 L 190 130"/>
            <path d="M 228 178 L 228 148 L 210 130"/>
          </g>
          <!-- Четыре белых монтажных отверстия с металлизацией -->
          <circle cx="34" cy="20" r="5.5" fill="#f8fafc" stroke="#eab308" stroke-width="2"/>
          <circle cx="34" cy="180" r="5.5" fill="#f8fafc" stroke="#eab308" stroke-width="2"/>
          <circle cx="254" cy="36" r="5.5" fill="#f8fafc" stroke="#eab308" stroke-width="2"/>
          <circle cx="254" cy="166" r="5.5" fill="#f8fafc" stroke="#eab308" stroke-width="2"/>

          <!-- Серебристый металлический USB-B разъём -->
          <rect x="2" y="34" width="44" height="54" rx="3" fill="url(#metalShell)" stroke="#64748b" stroke-width="1.5"/>
          <rect x="8" y="42" width="32" height="38" rx="2" fill="none" stroke="#94a3b8" stroke-width="1"/>
          <path d="M 8 54 L 26 54 M 8 68 L 26 68" stroke="#64748b" stroke-width="1.2"/>
          <text x="14" y="64" fill="#475569" font-family="monospace" font-size="7" font-weight="bold">USB-B</text>

          <!-- Чёрный цилиндрический разъём питания DC Barrel Jack -->
          <rect x="4" y="136" width="48" height="40" rx="4" fill="#18181b" stroke="#09090b" stroke-width="1.5"/>
          <rect x="12" y="142" width="36" height="28" rx="2" fill="#27272a"/>
          <rect x="40" y="152" width="8" height="8" rx="1" fill="#cbd5e1"/>

          <!-- Кнопка RESET в правом верхнем/левом углу -->
          <rect x="28" y="8" width="20" height="16" rx="2" fill="#cbd5e1" stroke="#64748b" stroke-width="1"/>
          <circle cx="38" cy="16" r="5.5" fill="#dc2626" stroke="#991b1b" stroke-width="1"/>
          <text x="27" y="30" fill="#ffffff" font-family="monospace" font-size="5.5" font-weight="bold">RESET</text>

          <!-- Серебристый овальный кварцевый резонатор 16.000 MHz -->
          <rect x="78" y="78" width="32" height="14" rx="7" fill="url(#metalShell)" stroke="#64748b" stroke-width="1.2"/>
          <text x="82" y="87" fill="#334155" font-family="monospace" font-size="5.5" font-weight="bold">16.000M</text>

          <!-- Микросхема USB-UART ATmega16U2 -->
          <rect x="56" y="48" width="18" height="18" rx="1" fill="#18181b" stroke="#52525b" stroke-width="1"/>

          <!-- Прямоугольный чип микроконтроллера ATmega328P в DIP-28 корпусе с ножками -->
          <g transform="translate(116, 108)">
            <!-- 14 металлических ножек сверху и 14 снизу -->
            <g fill="#cbd5e1">
              <rect x="6" y="-5" width="4" height="6"/><rect x="15" y="-5" width="4" height="6"/>
              <rect x="24" y="-5" width="4" height="6"/><rect x="33" y="-5" width="4" height="6"/>
              <rect x="42" y="-5" width="4" height="6"/><rect x="51" y="-5" width="4" height="6"/>
              <rect x="60" y="-5" width="4" height="6"/><rect x="69" y="-5" width="4" height="6"/>
              <rect x="78" y="-5" width="4" height="6"/><rect x="87" y="-5" width="4" height="6"/>
              <rect x="96" y="-5" width="4" height="6"/><rect x="105" y="-5" width="4" height="6"/>
              <rect x="114" y="-5" width="4" height="6"/><rect x="123" y="-5" width="4" height="6"/>

              <rect x="6" y="31" width="4" height="6"/><rect x="15" y="31" width="4" height="6"/>
              <rect x="24" y="31" width="4" height="6"/><rect x="33" y="31" width="4" height="6"/>
              <rect x="42" y="31" width="4" height="6"/><rect x="51" y="31" width="4" height="6"/>
              <rect x="60" y="31" width="4" height="6"/><rect x="69" y="31" width="4" height="6"/>
              <rect x="78" y="31" width="4" height="6"/><rect x="87" y="31" width="4" height="6"/>
              <rect x="96" y="31" width="4" height="6"/><rect x="105" y="31" width="4" height="6"/>
              <rect x="114" y="31" width="4" height="6"/><rect x="123" y="31" width="4" height="6"/>
            </g>
            <!-- DIP-панель и корпус чипа -->
            <rect x="0" y="0" width="134" height="32" rx="2" fill="#18181b" stroke="#3f3f46" stroke-width="1.5"/>
            <path d="M 0 11 A 5 5 0 0 1 0 21" fill="#09090b" stroke="#52525b" stroke-width="1"/>
            <text x="22" y="15" fill="#e4e4e7" font-family="monospace" font-size="8.5" font-weight="bold">ATMEGA328P-PU</text>
            <text x="34" y="25" fill="#a1a1aa" font-family="monospace" font-size="6.5">MICROCHIP · AVR</text>
          </g>

          <!-- Фирменная шелкография ARDUINO UNO -->
          <text x="130" y="62" fill="#ffffff" font-family="sans-serif" font-size="15" font-weight="900" letter-spacing="0.5">ARDUINO</text>
          <rect x="206" y="49" width="38" height="16" rx="3" fill="#ffffff"/>
          <text x="211" y="61" fill="#00727A" font-family="sans-serif" font-size="11" font-weight="900">UNO</text>
          <text x="132" y="74" fill="#b2f5ea" font-family="monospace" font-size="6.5" font-weight="bold">DIGITAL (PWM~)</text>

          <!-- Встроенные SMD-светодиоды L, TX, RX, ON -->
          <g transform="translate(88, 42)">
            <rect x="0" y="0" width="10" height="6" rx="1" fill="${lOn ? '#facc15' : '#52525b'}" stroke="#e4e4e7" stroke-width="0.6"/>
            <text x="13" y="5.5" fill="#ffffff" font-family="monospace" font-size="6.5" font-weight="bold">L (D13)</text>

            <rect x="0" y="11" width="10" height="5" rx="1" fill="${isRunning ? '#38bdf8' : '#52525b'}" stroke="#e4e4e7" stroke-width="0.6"/>
            <text x="13" y="16" fill="#ffffff" font-family="monospace" font-size="6">TX</text>

            <rect x="0" y="20" width="10" height="5" rx="1" fill="${isRunning ? '#38bdf8' : '#52525b'}" stroke="#e4e4e7" stroke-width="0.6"/>
            <text x="13" y="25" fill="#ffffff" font-family="monospace" font-size="6">RX</text>
          </g>

          <g transform="translate(226, 86)">
            <rect x="0" y="0" width="10" height="6" rx="1" fill="${isRunning ? '#22c55e' : '#52525b'}" stroke="#e4e4e7" stroke-width="0.6"/>
            <text x="13" y="5.5" fill="#ffffff" font-family="monospace" font-size="6.5" font-weight="bold">ON</text>
          </g>

          <!-- Верхняя чёрная колодка пинов DIGITAL -->
          <rect x="68" y="5" width="188" height="14" rx="1.5" fill="#18181b" stroke="#3f3f46" stroke-width="1"/>
          <text x="72" y="29" fill="#ffffff" font-family="monospace" font-size="6.2" font-weight="bold">GND 13 12 ~11 ~10 ~9  8   7 ~6 ~5  4 ~3  2</text>

          <!-- Нижние чёрные колодки пинов POWER и ANALOG IN -->
          <rect x="80" y="181" width="74" height="14" rx="1.5" fill="#18181b" stroke="#3f3f46" stroke-width="1"/>
          <text x="86" y="166" fill="#b2f5ea" font-family="monospace" font-size="6.5" font-weight="bold">POWER</text>
          <text x="82" y="177" fill="#ffffff" font-family="monospace" font-size="6" font-weight="bold">3V3 5V GND GND VIN</text>

          <rect x="164" y="181" width="86" height="14" rx="1.5" fill="#18181b" stroke="#3f3f46" stroke-width="1"/>
          <text x="176" y="166" fill="#b2f5ea" font-family="monospace" font-size="6.5" font-weight="bold">ANALOG IN</text>
          <text x="168" y="177" fill="#ffffff" font-family="monospace" font-size="6.2" font-weight="bold">A0 A1 A2 A3 A4 A5</text>
        </svg>
      `;
    }

    // ==================== 2. ARDUINO NANO ====================
    if (t === "arduino_nano") {
      return `
        <svg viewBox="0 0 220 96" width="220" height="96" class="board-svg">
          <rect x="8" y="2" width="208" height="92" rx="6" fill="#00727A" stroke="#00494F" stroke-width="2"/>
          <rect x="0" y="28" width="28" height="40" rx="2" fill="#cbd5e1" stroke="#64748b" stroke-width="1.5"/>
          <text x="4" y="51" fill="#334155" font-family="monospace" font-size="6" font-weight="bold">MINI</text>
          <!-- Ромбовидный чип ATmega328P TQFP-32 -->
          <g transform="translate(105, 48) rotate(45)">
            <rect x="-18" y="-18" width="36" height="36" rx="2" fill="#18181b" stroke="#cbd5e1" stroke-width="1.5"/>
            <circle cx="-11" cy="-11" r="2" fill="#a1a1aa"/>
          </g>
          <text x="89" y="50" fill="#f8fafc" font-family="monospace" font-size="6.5" font-weight="bold">MEGA328P</text>
          <rect x="155" y="38" width="22" height="20" rx="2" fill="#e2e8f0" stroke="#64748b"/>
          <circle cx="166" cy="48" r="6" fill="#dc2626"/>
          <text x="36" y="28" fill="#ffffff" font-family="sans-serif" font-size="9" font-weight="900">ARDUINO NANO</text>
          <circle cx="192" cy="48" r="4" fill="${isRunning ? '#22c55e' : '#475569'}"/>
        </svg>
      `;
    }

    // ==================== 3. ARDUINO MEGA 2560 ====================
    if (t === "arduino_mega") {
      return `
        <svg viewBox="0 0 330 200" width="330" height="200" class="board-svg">
          <path d="M 18 4 L 314 4 L 326 16 L 326 184 L 314 196 L 18 196 Z" fill="#006870" stroke="#004247" stroke-width="2"/>
          <rect x="2" y="34" width="44" height="54" rx="3" fill="#cbd5e1" stroke="#64748b" stroke-width="1.5"/>
          <rect x="4" y="136" width="48" height="40" rx="4" fill="#18181b"/>
          <!-- Квадратный чип ATmega2560 TQFP-100 -->
          <rect x="115" y="68" width="66" height="66" rx="3" fill="#18181b" stroke="#cbd5e1" stroke-width="2"/>
          <text x="122" y="98" fill="#f8fafc" font-family="monospace" font-size="7.5" font-weight="bold">ATMEGA2560</text>
          <text x="128" y="110" fill="#94a3b8" font-family="monospace" font-size="6">16AU · AVR</text>
          <text x="200" y="66" fill="#ffffff" font-family="sans-serif" font-size="14" font-weight="900">ARDUINO</text>
          <rect x="200" y="72" width="68" height="16" rx="3" fill="#ffffff"/>
          <text x="206" y="84" fill="#006870" font-family="sans-serif" font-size="10" font-weight="900">MEGA 2560</text>
          <!-- Двухрядная гребёнка справа -->
          <rect x="298" y="20" width="20" height="160" rx="2" fill="#18181b" stroke="#3f3f46"/>
          <rect x="68" y="5" width="192" height="14" rx="1.5" fill="#18181b"/>
          <rect x="86" y="181" width="162" height="14" rx="1.5" fill="#18181b"/>
        </svg>
      `;
    }

    // ==================== 4. ESP32 DEVKIT V1 ====================
    if (t === "esp32_devkit") {
      return `
        <svg viewBox="0 0 230 126" width="230" height="126" class="board-svg">
          <!-- Чёрная матовая плата ESP32 -->
          <rect x="6" y="4" width="218" height="118" rx="8" fill="#18181b" stroke="#3f3f46" stroke-width="2"/>
          <!-- Micro-USB слева -->
          <rect x="0" y="46" width="22" height="34" rx="2" fill="#cbd5e1" stroke="#64748b" stroke-width="1.5"/>
          <!-- Кнопки EN и BOOT -->
          <rect x="26" y="28" width="14" height="18" rx="2" fill="#e2e8f0"/><circle cx="33" cy="37" r="4" fill="#18181b"/>
          <text x="28" y="25" fill="#a1a1aa" font-family="monospace" font-size="6">EN</text>
          <rect x="26" y="80" width="14" height="18" rx="2" fill="#e2e8f0"/><circle cx="33" cy="89" r="4" fill="#18181b"/>
          <text x="25" y="106" fill="#a1a1aa" font-family="monospace" font-size="6">BOOT</text>
          <!-- Чип CP2102 -->
          <rect x="54" y="50" width="24" height="24" rx="2" fill="#09090b" stroke="#52525b"/>
          <text x="56" y="64" fill="#a1a1aa" font-family="monospace" font-size="5">CP2102</text>
          <!-- Металлический экран радиомодуля ESP-WROOM-32 -->
          <rect x="94" y="28" width="88" height="70" rx="4" fill="#d4d4d8" stroke="#71717a" stroke-width="1.5"/>
          <text x="106" y="58" fill="#27272a" font-family="monospace" font-size="8.5" font-weight="bold">ESP-WROOM-32</text>
          <text x="114" y="72" fill="#52525b" font-family="monospace" font-size="7">Wi-Fi + BT 4.2</text>
          <!-- Печатная золотая Wi-Fi антенна справа -->
          <rect x="184" y="30" width="34" height="66" rx="2" fill="#09090b" stroke="#27272a"/>
          <path d="M 188 78 L 212 78 L 212 66 L 192 66 L 192 54 L 212 54 L 212 42 L 190 42" fill="none" stroke="#eab308" stroke-width="2.2"/>
          <!-- Индикатор питания -->
          <circle cx="76" cy="36" r="3.5" fill="${isRunning ? '#ef4444' : '#52525b'}"/>
          <circle cx="76" cy="90" r="3.5" fill="${mcuPinStates['D2'] || mcuPinStates['D13'] ? '#3b82f6' : '#52525b'}"/>
        </svg>
      `;
    }

    // ==================== 5. RASPBERRY PI PICO ====================
    if (t === "rpi_pico") {
      return `
        <svg viewBox="0 0 220 96" width="220" height="96" class="board-svg">
          <rect x="8" y="3" width="206" height="90" rx="6" fill="#15803d" stroke="#14532d" stroke-width="2"/>
          <rect x="0" y="32" width="22" height="32" rx="2" fill="#cbd5e1" stroke="#64748b" stroke-width="1.5"/>
          <!-- Белая кнопка BOOTSEL -->
          <rect x="46" y="38" width="22" height="18" rx="2" fill="#f8fafc" stroke="#94a3b8"/>
          <circle cx="57" cy="47" r="5" fill="#e2e8f0" stroke="#64748b"/>
          <text x="43" y="65" fill="#dcfce7" font-family="monospace" font-size="5.5" font-weight="bold">BOOTSEL</text>
          <!-- Чип RP2040 в центре -->
          <rect x="96" y="28" width="40" height="40" rx="3" fill="#18181b" stroke="#3f3f46" stroke-width="1.5"/>
          <text x="103" y="48" fill="#f8fafc" font-family="monospace" font-size="7.5" font-weight="bold">RP2040</text>
          <text x="102" y="58" fill="#86efac" font-family="monospace" font-size="5.5">Raspberry Pi</text>
          <circle cx="34" cy="26" r="3.5" fill="${isRunning ? '#4ade80' : '#14532d'}"/>
        </svg>
      `;
    }

    // ==================== 6. СВЕТОДИОД 5 ММ (LED) ====================
    if (t === "led") {
      const color = p.color || "red";
      const lit = !!rt.lit && !rt.burned;
      const burned = !!rt.burned;
      const palette = {
        red:    { off: "#991b1b", on: "#ef4444", core: "#fecaca", glow: "rgba(239,68,68,0.75)" },
        green:  { off: "#166534", on: "#22c55e", core: "#bbf7d0", glow: "rgba(34,197,94,0.75)" },
        yellow: { off: "#854d0e", on: "#facc15", core: "#fef08a", glow: "rgba(250,204,21,0.8)" },
        blue:   { off: "#1e40af", on: "#3b82f6", core: "#bfdbfe", glow: "rgba(59,130,246,0.75)" }
      }[color] || { off: "#991b1b", on: "#ef4444", core: "#fecaca", glow: "rgba(239,68,68,0.75)" };

      return `
        <svg viewBox="0 0 70 96" width="70" height="96" class="comp-svg">
          <!-- Металлические выводы: Анод (с изгибом) и Катод -->
          <path d="M 24 88 L 24 64 L 29 56 L 29 48" fill="none" stroke="#94a3b8" stroke-width="3" stroke-linecap="round"/>
          <path d="M 46 88 L 46 48" fill="none" stroke="#94a3b8" stroke-width="3" stroke-linecap="round"/>
          ${lit ? `<circle cx="35" cy="30" r="28" fill="${palette.glow}" />` : ""}
          <!-- Купол светодиода 5 мм -->
          <path d="M 17 46 L 17 26 A 18 18 0 0 1 53 26 L 53 46 Z"
                fill="${burned ? '#1f2937' : (lit ? palette.on : palette.off)}"
                stroke="${lit ? '#ffffff' : 'rgba(255,255,255,0.4)'}" stroke-width="1.5"/>
          <rect x="14" y="44" width="42" height="6" rx="2" fill="${burned ? '#111827' : (lit ? palette.on : palette.off)}"/>
          <!-- Внутренний отражатель (наковальня и кристалл) -->
          <path d="M 29 44 L 29 32 L 33 32 M 43 44 L 43 28 L 35 28 L 39 34 Z" stroke="rgba(255,255,255,0.45)" stroke-width="1.2" fill="none"/>
          ${lit ? `<ellipse cx="35" cy="24" rx="9" ry="11" fill="${palette.core}" opacity="0.85"/>` : `<ellipse cx="29" cy="22" rx="4" ry="7" fill="rgba(255,255,255,0.35)"/>`}
          ${burned ? `<text x="24" y="36" font-size="18">💥</text>` : ""}
          <text x="15" y="76" fill="#ef4444" font-family="monospace" font-size="9" font-weight="bold">+</text>
          <text x="50" y="76" fill="#3b82f6" font-family="monospace" font-size="9" font-weight="bold">–</text>
        </svg>
      `;
    }

    // ==================== 7. РЕЗИСТОР ====================
    if (t === "resistor") {
      const ohms = p.resistance || 220;
      const bands = ohms <= 100
        ? ["#92400e", "#0f172a", "#92400e", "#eab308"]
        : ohms <= 220
          ? ["#ef4444", "#ef4444", "#92400e", "#eab308"]
          : ohms <= 1000
            ? ["#92400e", "#0f172a", "#ef4444", "#eab308"]
            : ["#92400e", "#0f172a", "#f97316", "#eab308"];
      const txt = ohms >= 1000 ? (ohms / 1000) + " кОм" : ohms + " Ом";
      return `
        <svg viewBox="0 0 130 48" width="130" height="48" class="comp-svg">
          <line x1="8" y1="24" x2="122" y2="24" stroke="#94a3b8" stroke-width="3.5" stroke-linecap="round"/>
          <!-- Гантелевидный керамический корпус резистора -->
          <path d="M 30 12 C 38 12, 40 15, 48 15 L 82 15 C 90 15, 92 12, 100 12 C 105 12, 107 17, 107 24 C 107 31, 105 36, 100 36 C 92 36, 90 33, 82 33 L 48 33 C 40 33, 38 36, 30 36 C 25 36, 23 31, 23 24 C 23 17, 25 12, 30 12 Z"
                fill="#e6cfa3" stroke="#a1804c" stroke-width="1.5"/>
          <rect x="38" y="14" width="6" height="20" fill="${bands[0]}"/>
          <rect x="50" y="15" width="6" height="18" fill="${bands[1]}"/>
          <rect x="62" y="15" width="6" height="18" fill="${bands[2]}"/>
          <rect x="82" y="14" width="5" height="20" fill="${bands[3]}"/>
          <text x="44" y="10" fill="#334155" font-family="monospace" font-size="8.5" font-weight="bold">${txt}</text>
        </svg>
      `;
    }

    // ==================== 8. ТАКТОВАЯ КНОПКА ====================
    if (t === "button") {
      const pressed = !!p.pressed;
      return `
        <svg viewBox="0 0 88 88" width="88" height="88" class="comp-svg">
          <!-- Металлические лапки -->
          <line x1="22" y1="6" x2="22" y2="80" stroke="#94a3b8" stroke-width="4" stroke-linecap="round"/>
          <line x1="66" y1="6" x2="66" y2="80" stroke="#94a3b8" stroke-width="4" stroke-linecap="round"/>
          <!-- Корпус кнопки 6x6 мм -->
          <rect x="14" y="14" width="60" height="54" rx="6" fill="#1e293b" stroke="#0f172a" stroke-width="2"/>
          <rect x="18" y="18" width="52" height="46" rx="4" fill="#cbd5e1" stroke="#64748b" stroke-width="1"/>
          <circle cx="24" cy="24" r="2.5" fill="#1e293b"/>
          <circle cx="64" cy="24" r="2.5" fill="#1e293b"/>
          <circle cx="24" cy="58" r="2.5" fill="#1e293b"/>
          <circle cx="64" cy="58" r="2.5" fill="#1e293b"/>
          <!-- Круглый толкатель -->
          <circle cx="44" cy="41" r="${pressed ? 14 : 16}" fill="${pressed ? '#16a34a' : '#dc2626'}" stroke="#0f172a" stroke-width="2"/>
          <text x="23" y="44" fill="#ffffff" font-family="monospace" font-size="7.5" font-weight="bold">${pressed ? 'ЗАМКН.' : 'CLICK'}</text>
        </svg>
      `;
    }

    // ==================== 9. СЕРВОПРИВОД SG90 ====================
    if (t === "servo") {
      const angle = p.angle ?? 0;
      return `
        <svg viewBox="0 0 150 118" width="150" height="118" class="comp-svg">
          <!-- Трёхжильный шлейф (Коричневый GND, Красный VCC, Оранжевый PWM) -->
          <path d="M 44 110 L 44 82" stroke="#78350f" stroke-width="5"/>
          <path d="M 74 110 L 74 82" stroke="#dc2626" stroke-width="5"/>
          <path d="M 104 110 L 104 82" stroke="#f97316" stroke-width="5"/>
          <rect x="34" y="92" width="80" height="14" rx="2" fill="#18181b"/>

          <!-- Крепёжные ушки корпуса SG90 -->
          <rect x="10" y="34" width="130" height="12" rx="2" fill="#1d4ed8" stroke="#1e40af"/>
          <circle cx="18" cy="40" r="3" fill="#f8fafc"/>
          <circle cx="132" cy="40" r="3" fill="#f8fafc"/>

          <!-- Полупрозрачный синий корпус Micro Servo 9g -->
          <rect x="26" y="14" width="98" height="68" rx="6" fill="#2563eb" stroke="#1e3a8a" stroke-width="2"/>
          <!-- Видимые латунные шестерёнки внутри -->
          <circle cx="92" cy="42" r="14" fill="#eab308" opacity="0.35" stroke="#ca8a04"/>
          <circle cx="62" cy="42" r="20" fill="#1d4ed8" stroke="#60a5fa" stroke-width="1.5"/>
          <text x="72" y="72" fill="#dbeafe" font-family="sans-serif" font-size="8" font-weight="bold">TowerPro SG90</text>
          <text x="32" y="72" fill="#fef08a" font-family="monospace" font-size="8.5" font-weight="bold">${angle}°</text>

          <!-- Поворотная белая качалка сервопривода -->
          <g transform="translate(62, 42) rotate(${angle - 90})">
            <path d="M -9 -8 L -5 -44 A 5 5 0 0 1 5 -44 L 9 -8 A 9 9 0 1 1 -9 -8 Z" fill="#f8fafc" stroke="#64748b" stroke-width="1.5"/>
            <circle cx="0" cy="-36" r="2" fill="#475569"/>
            <circle cx="0" cy="-26" r="2" fill="#475569"/>
            <circle cx="0" cy="-16" r="2" fill="#475569"/>
            <circle cx="0" cy="0" r="4.5" fill="#cbd5e1" stroke="#334155"/>
          </g>
        </svg>
      `;
    }

    // ==================== 10. ДИСПЛЕЙ LCD 1602 ====================
    if (t === "lcd1602") {
      const l1 = p.line1 || "UrokRobototehnik";
      const l2 = p.line2 || "Ready...   16x02";
      return `
        <svg viewBox="0 0 216 112" width="216" height="112" class="comp-svg">
          <!-- Зелёная текстолитовая плата LCD 1602 -->
          <rect x="4" y="4" width="208" height="96" rx="5" fill="#15803d" stroke="#14532d" stroke-width="2"/>
          <circle cx="14" cy="14" r="4" fill="#f8fafc" stroke="#eab308" stroke-width="2"/>
          <circle cx="202" cy="14" r="4" fill="#f8fafc" stroke="#eab308" stroke-width="2"/>
          <circle cx="14" cy="90" r="4" fill="#f8fafc" stroke="#eab308" stroke-width="2"/>
          <circle cx="202" cy="90" r="4" fill="#f8fafc" stroke="#eab308" stroke-width="2"/>
          <!-- Чёрная металлическая рамка экрана -->
          <rect x="16" y="16" width="184" height="66" rx="4" fill="#18181b" stroke="#3f3f46" stroke-width="1.5"/>
          <!-- ЖК-матрица с подсветкой -->
          <rect x="24" y="22" width="168" height="54" rx="2" fill="${isRunning ? '#84cc16' : '#3f6212'}" stroke="#1a2e05" stroke-width="1"/>
          <text x="30" y="44" fill="#0f172a" font-family="monospace" font-size="12.5" font-weight="bold" letter-spacing="1">${l1.slice(0, 16)}</text>
          <text x="30" y="64" fill="#0f172a" font-family="monospace" font-size="12.5" font-weight="bold" letter-spacing="1">${l2.slice(0, 16)}</text>
          <text x="142" y="94" fill="#dcfce7" font-family="monospace" font-size="6.5" font-weight="bold">LCD 1602A I2C</text>
        </svg>
      `;
    }

    // ==================== 11. OLED 0.96" I2C (SSD1306) ====================
    if (t === "oled") {
      const l1 = p.line1 || "OLED 128x64";
      const l2 = p.line2 || "Temp: 24.5 C";
      return `
        <svg viewBox="0 0 136 126" width="136" height="126" class="comp-svg">
          <rect x="8" y="6" width="120" height="114" rx="6" fill="#1e3a8a" stroke="#172554" stroke-width="2"/>
          <circle cx="18" cy="16" r="3.5" fill="#f8fafc" stroke="#eab308" stroke-width="1.5"/>
          <circle cx="118" cy="16" r="3.5" fill="#f8fafc" stroke="#eab308" stroke-width="1.5"/>
          <circle cx="18" cy="110" r="3.5" fill="#f8fafc" stroke="#eab308" stroke-width="1.5"/>
          <circle cx="118" cy="110" r="3.5" fill="#f8fafc" stroke="#eab308" stroke-width="1.5"/>
          <text x="28" y="28" fill="#93c5fd" font-family="monospace" font-size="6.5" font-weight="bold">GND VCC SCK SDA</text>
          <!-- Чёрное стекло OLED матрицы -->
          <rect x="16" y="34" width="104" height="68" rx="2" fill="#09090b" stroke="#334155" stroke-width="1.5"/>
          <!-- Верхняя жёлтая зона и нижняя голубая зона свечения пикселей -->
          <text x="22" y="50" fill="${isRunning ? '#facc15' : '#475569'}" font-family="monospace" font-size="9.5" font-weight="bold">${l1.slice(0, 13)}</text>
          <line x1="18" y1="56" x2="118" y2="56" stroke="#1e293b" stroke-width="1"/>
          <text x="22" y="74" fill="${isRunning ? '#38bdf8' : '#475569'}" font-family="monospace" font-size="9.5" font-weight="bold">${l2.slice(0, 13)}</text>
          <text x="22" y="92" fill="${isRunning ? '#38bdf8' : '#334155'}" font-family="monospace" font-size="7.5">SSD1306 · I2C OK</text>
          <!-- Оранжевый шлейф стекла внизу -->
          <rect x="46" y="102" width="44" height="12" fill="#d97706"/>
        </svg>
      `;
    }

    // ==================== 12. ПОЛОСА NEOPIXEL 8×RGB (WS2812B) ====================
    if (t === "neopixel") {
      const pixels = p.pixels || ["#ef4444", "#f97316", "#facc15", "#22c55e", "#06b6d4", "#3b82f6", "#a855f7", "#ec4899"];
      const ledsSvg = [0, 1, 2, 3, 4, 5, 6, 7].map(i => {
        const x = 30 + i * 23;
        const col = isRunning ? pixels[(i + (p.offset || 0)) % pixels.length] : "#cbd5e1";
        return `
          <g transform="translate(${x}, 22)">
            <rect x="0" y="0" width="18" height="24" rx="1.5" fill="#f8fafc" stroke="#94a3b8" stroke-width="1"/>
            <circle cx="9" cy="12" r="7" fill="${col}" ${isRunning ? `filter="drop-shadow(0 0 5px ${col})"` : ""}/>
          </g>
        `;
      }).join("");

      return `
        <svg viewBox="0 0 224 68" width="224" height="68" class="comp-svg">
          <rect x="6" y="8" width="212" height="52" rx="5" fill="#18181b" stroke="#3f3f46" stroke-width="2"/>
          <text x="34" y="18" fill="#a1a1aa" font-family="monospace" font-size="6.5" font-weight="bold">WS2812B RGB NEOPIXEL ×8</text>
          ${ledsSvg}
        </svg>
      `;
    }

    // ==================== 13. ДАТЧИК ТЕМПЕРАТУРЫ И ВЛАЖНОСТИ DHT11 ====================
    if (t === "dht11") {
      return `
        <svg viewBox="0 0 116 134" width="116" height="134" class="comp-svg">
          <!-- Плата модуля -->
          <rect x="12" y="8" width="92" height="114" rx="6" fill="#18181b" stroke="#3f3f46" stroke-width="1.5"/>
          <!-- Голубой решетчатый корпус датчика DHT11 -->
          <rect x="22" y="14" width="72" height="56" rx="4" fill="#0284c7" stroke="#0369a1" stroke-width="2"/>
          <g stroke="#0c4a6e" stroke-width="2" opacity="0.65">
            <line x1="30" y1="24" x2="86" y2="24"/>
            <line x1="30" y1="34" x2="86" y2="34"/>
            <line x1="30" y1="44" x2="86" y2="44"/>
            <line x1="30" y1="54" x2="86" y2="54"/>
            <line x1="48" y1="18" x2="48" y2="64"/>
            <line x1="68" y1="18" x2="68" y2="64"/>
          </g>
          <text x="36" y="42" fill="#ffffff" font-family="monospace" font-size="9.5" font-weight="bold">DHT11</text>
        </svg>
      `;
    }

    // ==================== 14. УЛЬТРАЗВУКОВОЙ ДАЛЬНОМЕР HC-SR04 ====================
    if (t === "ultrasonic") {
      return `
        <svg viewBox="0 0 164 114" width="164" height="114" class="comp-svg">
          <rect x="6" y="6" width="152" height="96" rx="6" fill="#0284c7" stroke="#0369a1" stroke-width="2"/>
          <!-- Два серебристых цилиндрических излучателя T и R -->
          <circle cx="46" cy="44" r="28" fill="#cbd5e1" stroke="#64748b" stroke-width="2"/>
          <circle cx="46" cy="44" r="20" fill="#334155" stroke="#475569" stroke-width="1.5"/>
          <circle cx="46" cy="44" r="9" fill="#1e293b"/>

          <circle cx="118" cy="44" r="28" fill="#cbd5e1" stroke="#64748b" stroke-width="2"/>
          <circle cx="118" cy="44" r="20" fill="#334155" stroke="#475569" stroke-width="1.5"/>
          <circle cx="118" cy="44" r="9" fill="#1e293b"/>

          <!-- Кварц посередине сверху -->
          <rect x="70" y="12" width="24" height="10" rx="5" fill="#e2e8f0" stroke="#64748b"/>
          <text x="61" y="80" fill="#ffffff" font-family="monospace" font-size="8.5" font-weight="bold">HC-SR04</text>
          <text x="20" y="80" fill="#bae6fd" font-family="monospace" font-size="7.5" font-weight="bold">T</text>
          <text x="140" y="80" fill="#bae6fd" font-family="monospace" font-size="7.5" font-weight="bold">R</text>
        </svg>
      `;
    }

    // ==================== 15. ФОТОРЕЗИСТОР LDR ====================
    if (t === "ldr") {
      return `
        <svg viewBox="0 0 116 118" width="116" height="118" class="comp-svg">
          <rect x="12" y="8" width="92" height="98" rx="6" fill="#1e3a8a" stroke="#172554" stroke-width="2"/>
          <!-- Головка фоторезистора с меандром из сульфида кадмия -->
          <ellipse cx="58" cy="36" rx="22" ry="18" fill="#f59e0b" stroke="#b45309" stroke-width="2"/>
          <path d="M 42 30 L 74 30 L 42 36 L 74 36 L 42 42 L 74 42" fill="none" stroke="#fef3c7" stroke-width="2"/>
          <text x="34" y="66" fill="#dbeafe" font-family="monospace" font-size="8" font-weight="bold">LDR SENSOR</text>
        </svg>
      `;
    }

    // ==================== 16. ПОТЕНЦИОМЕТР 10 кОм ====================
    if (t === "potentiometer") {
      const val = p.value ?? 50;
      const deg = -130 + (val / 100) * 260;
      return `
        <svg viewBox="0 0 110 118" width="110" height="118" class="comp-svg">
          <rect x="12" y="8" width="86" height="98" rx="8" fill="#1e293b" stroke="#334155" stroke-width="2"/>
          <circle cx="55" cy="42" r="26" fill="#cbd5e1" stroke="#64748b" stroke-width="2"/>
          <circle cx="55" cy="42" r="18" fill="#334155"/>
          <g transform="translate(55, 42) rotate(${deg})">
            <rect x="-3" y="-18" width="6" height="14" rx="2" fill="#f97316"/>
          </g>
          <text x="26" y="78" fill="#f8fafc" font-family="monospace" font-size="8" font-weight="bold">10kΩ (${val}%)</text>
        </svg>
      `;
    }

    return "";
  }
};
