"use client"

import { useLanguage } from "@/lib/language-provider"

export default function LicensePage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "License",
      description: "NextLib is released under the MIT License",
      license: `MIT License

Copyright (c) 2025 NextLib Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`,
    },
    ru: {
      title: "Лицензия",
      description: "NextLib выпущена под лицензией MIT",
      license: `Лицензия MIT

Авторское право (c) 2025 Участники NextLib

Настоящим предоставляется разрешение, бесплатно, любому лицу, получившему копию
этого программного обеспечения и связанных файлов документации ("Программное обеспечение"), на использование
Программного обеспечения без ограничений, включая, без ограничений, права
на использование, копирование, изменение, объединение, публикацию, распространение, сублицензирование и/или продажу
копий Программного обеспечения, а также разрешение лицам, которым предоставляется
Программное обеспечение, делать это при соблюдении следующих условий:

Вышеуказанное уведомление об авторском праве и данное уведомление о разрешении должны быть включены во все
копии или существенные части Программного обеспечения.

ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ ПРЕДОСТАВЛЯЕТСЯ "КАК ЕСТЬ", БЕЗ КАКИХ-ЛИБО ГАРАНТИЙ, ЯВНЫХ ИЛИ
ПОДРАЗУМЕВАЕМЫХ, ВКЛЮЧАЯ, НО НЕ ОГРАНИЧИВАЯСЬ ГАРАНТИЯМИ ТОВАРНОЙ ПРИГОДНОСТИ,
ПРИГОДНОСТИ ДЛЯ КОНКРЕТНОЙ ЦЕЛИ И НЕНАРУШЕНИЯ ПРАВ. НИ В КОЕМ СЛУЧАЕ АВТОРЫ ИЛИ ПРАВООБЛАДАТЕЛИ НЕ НЕСУТ ОТВЕТСТВЕННОСТИ
ЗА ЛЮБЫЕ ПРЕТЕНЗИИ, УБЫТКИ ИЛИ ДРУГУЮ
ОТВЕТСТВЕННОСТЬ, БУДЬ ТО В РЕЗУЛЬТАТЕ ДОГОВОРА, ПРАВОНАРУШЕНИЯ ИЛИ ИНОГО, ВЫТЕКАЮЩИЕ ИЗ,
ИЗ ИЛИ В СВЯЗИ С ПРОГРАММНЫМ ОБЕСПЕЧЕНИЕМ ИЛИ ИСПОЛЬЗОВАНИЕМ ИЛИ ДРУГИМИ ДЕЙСТВИЯМИ В ПРОГРАММНОМ ОБЕСПЕЧЕНИИ.`,
    },
  }

  const current = content[language as keyof typeof content] || content.en

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{current.title}</h1>
          <p className="text-xl text-muted-foreground">{current.description}</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-8">
          <pre className="text-sm text-muted-foreground overflow-auto whitespace-pre-wrap break-words">
            {current.license}
          </pre>
        </div>
      </div>
    </main>
  )
}
