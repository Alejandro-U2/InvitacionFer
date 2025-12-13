const FloralCorner = ({ position }) => {
  const positionClasses = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0 scale-x-[-1]',
    'bottom-left': 'bottom-0 left-0 scale-y-[-1]',
    'bottom-right': 'bottom-0 right-0 scale-[-1]'
  }

  return (
    <div className={`absolute ${positionClasses[position]} w-44 h-44 pointer-events-none`}>
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" className="w-full h-full opacity-70">
        <g fill="#B89090">
          {/* Rama horizontal superior */}
          <path d="M 180 20 Q 170 22, 160 25 Q 150 28, 140 32 Q 130 36, 120 40" fill="none" stroke="#B89090" strokeWidth="2"/>
          
          {/* Hojas de la rama horizontal */}
          <ellipse cx="175" cy="15" rx="12" ry="6" transform="rotate(-20 175 15)"/>
          <ellipse cx="165" cy="19" rx="11" ry="6" transform="rotate(-25 165 19)"/>
          <ellipse cx="155" cy="23" rx="12" ry="6" transform="rotate(-30 155 23)"/>
          <ellipse cx="145" cy="28" rx="11" ry="6" transform="rotate(-35 145 28)"/>
          <ellipse cx="135" cy="33" rx="10" ry="5" transform="rotate(-40 135 33)"/>
          
          <ellipse cx="172" cy="25" rx="10" ry="5" transform="rotate(15 172 25)"/>
          <ellipse cx="162" cy="28" rx="9" ry="5" transform="rotate(10 162 28)"/>
          <ellipse cx="152" cy="32" rx="10" ry="5" transform="rotate(5 152 32)"/>
          <ellipse cx="142" cy="36" rx="9" ry="5" transform="rotate(0 142 36)"/>
          
          {/* Espiral decorativa */}
          <path d="M 185 15 Q 184 18, 186 20 Q 188 21, 189 19 Q 190 16, 188 14 Q 185 13, 184 15" fill="#B89090"/>
          <circle cx="186" cy="17" r="1.5" fill="#B89090"/>
          
          {/* Círculos decorativos superiores */}
          <circle cx="180" cy="28" r="2" fill="#B89090"/>
          <circle cx="170" cy="32" r="1.5" fill="#B89090"/>
          <circle cx="160" cy="36" r="2" fill="#B89090"/>
          <circle cx="150" cy="40" r="1.5" fill="#B89090"/>
          <circle cx="188" cy="10" r="1.5" fill="#B89090"/>
          <circle cx="182" cy="8" r="1" fill="#B89090"/>
          
          {/* Rama vertical */}
          <path d="M 180 45 Q 178 60, 176 75 Q 174 90, 172 105 Q 170 120, 168 135 Q 166 150, 164 165" fill="none" stroke="#B89090" strokeWidth="2"/>
          
          {/* Hojas de la rama vertical - lado derecho */}
          <ellipse cx="183" cy="50" rx="5" ry="11" transform="rotate(25 183 50)"/>
          <ellipse cx="181" cy="65" rx="5" ry="10" transform="rotate(30 181 65)"/>
          <ellipse cx="179" cy="80" rx="5" ry="11" transform="rotate(35 179 80)"/>
          <ellipse cx="177" cy="95" rx="5" ry="10" transform="rotate(40 177 95)"/>
          <ellipse cx="175" cy="110" rx="5" ry="11" transform="rotate(45 175 110)"/>
          <ellipse cx="173" cy="125" rx="5" ry="10" transform="rotate(50 173 125)"/>
          <ellipse cx="171" cy="140" rx="5" ry="11" transform="rotate(55 171 140)"/>
          <ellipse cx="169" cy="155" rx="5" ry="10" transform="rotate(60 169 155)"/>
          
          {/* Hojas de la rama vertical - lado izquierdo */}
          <ellipse cx="174" cy="55" rx="4" ry="9" transform="rotate(-20 174 55)"/>
          <ellipse cx="172" cy="70" rx="4" ry="9" transform="rotate(-25 172 70)"/>
          <ellipse cx="170" cy="85" rx="4" ry="9" transform="rotate(-30 170 85)"/>
          <ellipse cx="168" cy="100" rx="4" ry="9" transform="rotate(-35 168 100)"/>
          <ellipse cx="166" cy="115" rx="4" ry="9" transform="rotate(-40 166 115)"/>
          <ellipse cx="164" cy="130" rx="4" ry="9" transform="rotate(-45 164 130)"/>
          <ellipse cx="162" cy="145" rx="4" ry="9" transform="rotate(-50 162 145)"/>
          
          {/* Círculos en la rama vertical */}
          <circle cx="180" cy="58" r="1.5" fill="#B89090"/>
          <circle cx="178" cy="73" r="1.5" fill="#B89090"/>
          <circle cx="176" cy="88" r="1.5" fill="#B89090"/>
          <circle cx="174" cy="103" r="1.5" fill="#B89090"/>
          <circle cx="172" cy="118" r="1.5" fill="#B89090"/>
          <circle cx="170" cy="133" r="1.5" fill="#B89090"/>
          <circle cx="168" cy="148" r="1.5" fill="#B89090"/>
          <circle cx="166" cy="163" r="1.5" fill="#B89090"/>
          
          {/* Espiral media */}
          <path d="M 185 70 Q 184 73, 186 75 Q 188 76, 189 74 Q 190 71, 188 69 Q 185 68, 184 70" fill="#B89090"/>
          
          {/* Grupo de hojas adicional */}
          <ellipse cx="165" cy="48" rx="4" ry="8" transform="rotate(-50 165 48)"/>
          <ellipse cx="158" cy="55" rx="4" ry="8" transform="rotate(-45 158 55)"/>
          <ellipse cx="151" cy="62" rx="4" ry="8" transform="rotate(-40 151 62)"/>
          
          <circle cx="162" cy="52" r="1" fill="#B89090"/>
          <circle cx="155" cy="58" r="1" fill="#B89090"/>
        </g>
      </svg>
    </div>
  )
}

export default FloralCorner
