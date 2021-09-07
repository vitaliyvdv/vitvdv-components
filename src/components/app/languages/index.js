import React, { useRef } from "react"
import { useRouter } from "next/router"

import { RadioButton, RadioButtonList } from "src/components/common/inputs"

const LangList = [
  {
    title: "En",
    value: "en"
  },
  {
    title: "Ru",
    value: "ru"
  }
]

const LanguagesItem = ({ value, title, currentLang }) => {
  const inputRef = useRef(null)
  const router = useRouter()

  return (
    <RadioButton
      label={title}
      value={value}
      ref={inputRef}
      name='lang'
      defaultChecked={value === currentLang}
      onChange={() => router.push(router.route, router.asPath, { locale: inputRef.current.value })}
    />
  )
}

const Languages = ({ currentLang }) => {
  return (
    <RadioButtonList>
      {LangList.map((item, index) => (
        <LanguagesItem key={index} title={item.title} value={item.value} currentLang={currentLang} />
      ))}
    </RadioButtonList>
  )
}

export default Languages
