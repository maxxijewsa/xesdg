import "./winter-theme.css";

export function WinterTheme() {
  return (
    <>
      {/* Fog Border Effect */}
      <div className="winter-fog-border" />

      {/* Falling Winter Snowflakes */}
      <div className="falling-flowers-container">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="falling-flower"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 6}s`,
            }}
          >
            <svg viewBox="0 0 100 100" className="flower-svg">
              {/* Snowflake design */}
              {/* Center hexagon */}
              <circle cx="50" cy="50" r="8" fill="rgba(255, 255, 255, 0.95)" />
              
              {/* 6 main arms with branches */}
              {[0, 60, 120, 180, 240, 300].map((angle) => {
                const rad = (angle * Math.PI) / 180;
                const x2 = 50 + 25 * Math.cos(rad);
                const y2 = 50 + 25 * Math.sin(rad);
                const x3 = 50 + 35 * Math.cos(rad);
                const y3 = 50 + 35 * Math.sin(rad);
                
                return (
                  <g key={`arm-${angle}`}>
                    {/* Main arm */}
                    <line 
                      x1="50" 
                      y1="50" 
                      x2={x3} 
                      y2={y3} 
                      stroke="rgba(255, 255, 255, 0.9)" 
                      strokeWidth="2"
                    />
                    {/* Side branches */}
                    <line 
                      x1={x2} 
                      y1={y2} 
                      x2={x2 + 10 * Math.cos(rad + Math.PI/3)} 
                      y2={y2 + 10 * Math.sin(rad + Math.PI/3)} 
                      stroke="rgba(255, 255, 255, 0.7)" 
                      strokeWidth="1.5"
                    />
                    <line 
                      x1={x2} 
                      y1={y2} 
                      x2={x2 + 10 * Math.cos(rad - Math.PI/3)} 
                      y2={y2 + 10 * Math.sin(rad - Math.PI/3)} 
                      stroke="rgba(255, 255, 255, 0.7)" 
                      strokeWidth="1.5"
                    />
                  </g>
                );
              })}
            </svg>
          </div>
        ))}
      </div>
    </>
  );
}
