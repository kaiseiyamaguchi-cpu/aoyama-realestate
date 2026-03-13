export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--navy-deep)]/90 backdrop-blur-md border-b border-[var(--gold)]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-[var(--gold)] flex items-center justify-center">
                <span className="text-[var(--gold)] text-lg font-light" className="font-display">A</span>
              </div>
              <div>
                <p className="text-xs tracking-[0.3em] text-[var(--gold)]" className="font-display">AOYAMA</p>
                <p className="text-[10px] tracking-[0.2em] text-white/60">REAL ESTATE</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-10">
              <a href="#about" className="text-sm tracking-wider text-white/70 hover:text-[var(--gold)] transition-colors">会社概要</a>
              <a href="#services" className="text-sm tracking-wider text-white/70 hover:text-[var(--gold)] transition-colors">サービス</a>
              <a href="#properties" className="text-sm tracking-wider text-white/70 hover:text-[var(--gold)] transition-colors">物件情報</a>
              <a href="#contact" className="text-sm tracking-wider text-white/70 hover:text-[var(--gold)] transition-colors">お問い合わせ</a>
            </div>
            <a href="#contact" className="btn-gold text-sm tracking-wider px-6 py-3">
              <span>無料査定</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy-deep)] via-[var(--navy-dark)] to-[var(--navy-medium)]" />

        {/* Decorative elements */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-[var(--gold)]/5 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[var(--navy-medium)]/50 blur-3xl" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 pt-40">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="gold-line mb-8 animate-fade-in" />
              <p className="text-[var(--gold)] text-sm tracking-[0.3em] mb-6 animate-fade-in-up" className="font-display">
                LUXURY REAL ESTATE
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8 opacity-0 animate-fade-in-up animation-delay-200">
                理想の住まいは、<br />
                <span className="text-gold-gradient">妥協しなくていい。</span>
              </h1>
              <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-lg opacity-0 animate-fade-in-up animation-delay-400">
                東京都心の厳選物件を、AI査定と専属コンシェルジュがご案内。あなたの人生の舞台となる一室を、最短即日でお見つけします。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up animation-delay-600">
                <a href="#contact" className="btn-gold text-center">
                  <span>無料査定を始める</span>
                </a>
                <a href="#properties" className="btn-outline text-center">
                  物件を探す
                </a>
              </div>
              <div className="flex items-center gap-8 mt-12 opacity-0 animate-fade-in-up animation-delay-800">
                <div>
                  <p className="text-3xl font-light text-[var(--gold)]" className="font-display">3,200<span className="text-lg">+</span></p>
                  <p className="text-xs text-white/50 tracking-wider">累計取引実績</p>
                </div>
                <div className="w-px h-12 bg-white/20" />
                <div>
                  <p className="text-3xl font-light text-[var(--gold)]" className="font-display">98.7<span className="text-lg">%</span></p>
                  <p className="text-xs text-white/50 tracking-wider">顧客満足度</p>
                </div>
                <div className="w-px h-12 bg-white/20" />
                <div>
                  <p className="text-3xl font-light text-[var(--gold)]" className="font-display">24<span className="text-lg">h</span></p>
                  <p className="text-xs text-white/50 tracking-wider">査定対応</p>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy-medium)] to-[var(--navy-dark)] flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 border border-[var(--gold)]/30 rounded-sm flex items-center justify-center">
                      <svg className="w-16 h-16 text-[var(--gold)]/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <p className="text-white/30 text-sm tracking-wider">PROPERTY IMAGE</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-[var(--gold)]/30" />
                <div className="absolute -top-4 -left-4 w-20 h-20 border border-[var(--gold)]/20" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in animation-delay-1000">
          <span className="text-xs tracking-[0.2em] text-white/40">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-[var(--gold)] to-transparent" />
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-[var(--gold)] text-sm tracking-[0.3em] mb-6" className="font-display">PROBLEM</p>
            <h2 className="text-3xl md:text-4xl font-light mb-8">
              こんなお悩み、<br className="md:hidden" />ありませんか？
            </h2>
            <div className="gold-line-center" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "忙しくて物件探しの時間がない",
                description: "仕事や家庭の都合で、休日も内見に時間を割けない。効率的に理想の物件を見つけたい。"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                ),
                title: "適正価格がわからない",
                description: "相場より高く買ってしまうのでは？売却時に安く見積もられていないか不安。"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "信頼できる担当者に出会えない",
                description: "強引な営業や、情報が少ない担当者では安心して任せられない。"
              }
            ].map((item, index) => (
              <div key={index} className="luxury-card p-8 rounded-sm">
                <div className="w-16 h-16 rounded-sm bg-[var(--navy-deep)] flex items-center justify-center mb-6 text-[var(--gold)]">
                  {item.icon}
                </div>
                <h3 className="text-lg font-medium mb-4">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-4xl mx-auto" />

      {/* Solution Section */}
      <section id="services" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-[var(--gold)] text-sm tracking-[0.3em] mb-6" className="font-display">SOLUTION</p>
            <h2 className="text-3xl md:text-4xl font-light mb-8">
              青山不動産が、<br className="md:hidden" />すべて解決します
            </h2>
            <div className="gold-line-center" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "AI即時査定",
                subtitle: "最短30分で適正価格をご提示",
                description: "独自AIが過去10年分の取引データを分析。相場に基づいた適正価格を最短30分でご提示。売却も購入も、納得のいく価格で。",
                features: ["過去10年分のデータ分析", "エリア特性を加味", "リアルタイム相場反映"]
              },
              {
                number: "02",
                title: "VR内見",
                subtitle: "自宅から24時間いつでも",
                description: "高精細3Dスキャンによる360°バーチャル内見。通勤時間や休憩時間に、スマートフォンから物件をじっくり検討できます。",
                features: ["360°高精細映像", "寸法・間取り確認", "昼夜の日当たりシミュレーション"]
              },
              {
                number: "03",
                title: "専属コンシェルジュ",
                subtitle: "一人の担当が最後まで",
                description: "経験10年以上のプロフェッショナルが専属で担当。物件探しから契約、アフターサポートまで一貫してお任せください。",
                features: ["平均経験年数12年", "24時間チャット対応", "契約後1年間サポート"]
              }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="luxury-card p-10 rounded-sm h-full flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-5xl font-light text-[var(--gold)]/20" className="font-display">{item.number}</span>
                    <div className="w-10 h-10 rounded-full border border-[var(--gold)]/30 flex items-center justify-center group-hover:bg-[var(--gold)]/10 transition-colors">
                      <svg className="w-4 h-4 text-[var(--gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-light mb-2 text-gold-gradient">{item.title}</h3>
                  <p className="text-sm text-white/50 mb-6">{item.subtitle}</p>
                  <p className="text-white/70 text-sm leading-relaxed mb-8">{item.description}</p>
                  <ul className="mt-auto space-y-3">
                    {item.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3 text-sm text-white/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 bg-[var(--navy-dark)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-[var(--gold)] text-sm tracking-[0.3em] mb-6" className="font-display">HOW IT WORKS</p>
            <h2 className="text-3xl md:text-4xl font-light mb-8">
              ご成約までの流れ
            </h2>
            <div className="gold-line-center" />
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "STEP 01", title: "無料相談", description: "Webフォームまたはお電話でお問い合わせ。ご希望条件をヒアリングします。" },
              { step: "STEP 02", title: "AI査定・物件提案", description: "AIが最適な物件を厳選。売却の場合は適正価格をご提示します。" },
              { step: "STEP 03", title: "VR・現地内見", description: "気になる物件をVRで確認。その後、現地内見で最終チェック。" },
              { step: "STEP 04", title: "ご契約・お引渡し", description: "契約手続きからお引渡しまで、専属コンシェルジュがサポート。" }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full border border-[var(--gold)]/30 flex items-center justify-center bg-[var(--navy-deep)]">
                    <span className="text-2xl font-light text-[var(--gold)]" className="font-display">{index + 1}</span>
                  </div>
                  <p className="text-[10px] tracking-[0.2em] text-[var(--gold)]/60 mb-2">{item.step}</p>
                  <h3 className="text-lg font-medium mb-3">{item.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] border-t border-dashed border-[var(--gold)]/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="properties" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <p className="text-[var(--gold)] text-sm tracking-[0.3em] mb-6" className="font-display">FEATURED PROPERTIES</p>
              <h2 className="text-3xl md:text-4xl font-light">
                厳選物件
              </h2>
            </div>
            <a href="#" className="mt-6 md:mt-0 text-sm text-[var(--gold)] tracking-wider hover:underline">
              すべての物件を見る →
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { area: "港区 南青山", type: "3LDK", size: "98.5m²", price: "1億8,500万円", tag: "NEW" },
              { area: "渋谷区 神宮前", type: "2LDK", size: "72.3m²", price: "1億2,800万円", tag: "VR対応" },
              { area: "港区 六本木", type: "1LDK", size: "58.2m²", price: "8,900万円", tag: "即入居可" }
            ].map((property, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden mb-6 bg-[var(--navy-dark)]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-16 h-16 text-[var(--gold)]/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)] via-transparent opacity-60" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-[var(--gold)] text-[var(--navy-deep)] text-xs tracking-wider">
                    {property.tag}
                  </span>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-2xl font-light" className="font-display">{property.price}</p>
                  </div>
                </div>
                <h3 className="text-lg font-medium mb-2 group-hover:text-[var(--gold)] transition-colors">{property.area}</h3>
                <p className="text-sm text-white/60">{property.type} / {property.size}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-[var(--navy-dark)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-[var(--gold)] text-sm tracking-[0.3em] mb-6" className="font-display">TESTIMONIALS</p>
            <h2 className="text-3xl md:text-4xl font-light mb-8">
              お客様の声
            </h2>
            <div className="gold-line-center" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "VR内見のおかげで、限られた時間の中でも効率的に物件を比較検討できました。担当の方も非常に丁寧で、初めてのマンション購入でも安心して進められました。",
                name: "T.S様",
                detail: "30代 / 会社経営 / 港区でマンション購入"
              },
              {
                quote: "AI査定で提示された価格に最初は半信半疑でしたが、実際にその価格で売却できました。相場よりも高く売れたので、とても満足しています。",
                name: "M.K様",
                detail: "50代 / 医師 / 渋谷区でマンション売却"
              }
            ].map((testimonial, index) => (
              <div key={index} className="luxury-card p-10 rounded-sm">
                <svg className="w-10 h-10 text-[var(--gold)]/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-lg leading-relaxed mb-8 text-white/80">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--navy-deep)] flex items-center justify-center">
                    <span className="text-[var(--gold)] text-sm">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-white/50">{testimonial.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Company Info */}
      <section id="about" className="py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--navy-dark)] hidden lg:block" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[var(--gold)] text-sm tracking-[0.3em] mb-6" className="font-display">ABOUT US</p>
              <h2 className="text-3xl md:text-4xl font-light mb-8">
                青山不動産について
              </h2>
              <div className="gold-line mb-8" />
              <p className="text-white/70 leading-relaxed mb-6">
                2010年の創業以来、東京都心部の高級物件に特化し、3,200件以上の取引実績を積み重ねてまいりました。
              </p>
              <p className="text-white/70 leading-relaxed mb-8">
                私たちは、お客様一人ひとりのライフスタイルに寄り添い、「住まい」という人生の重要な決断を全力でサポートいたします。最新のテクノロジーと、経験豊富なプロフェッショナルの知見を融合させ、これからも最高のサービスを提供し続けます。
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-light text-[var(--gold)] mb-1" className="font-display">15年</p>
                  <p className="text-sm text-white/50">業界経験</p>
                </div>
                <div>
                  <p className="text-3xl font-light text-[var(--gold)] mb-1" className="font-display">50名+</p>
                  <p className="text-sm text-white/50">専門スタッフ</p>
                </div>
              </div>
            </div>
            <div className="relative lg:pl-16">
              <div className="aspect-square rounded-sm bg-[var(--navy-medium)] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto border border-[var(--gold)]/30 flex items-center justify-center mb-4">
                    <span className="text-4xl text-[var(--gold)]" className="font-display">A</span>
                  </div>
                  <p className="text-white/30 text-sm tracking-wider">COMPANY IMAGE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-[var(--navy-dark)]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-[var(--gold)] text-sm tracking-[0.3em] mb-6" className="font-display">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-light mb-8">
              よくあるご質問
            </h2>
            <div className="gold-line-center" />
          </div>

          <div className="space-y-6">
            {[
              { q: "査定は本当に無料ですか？", a: "はい、完全無料です。AI査定も、訪問査定も、費用は一切いただきません。売却をご決断された場合のみ、成約時に仲介手数料をいただいております。" },
              { q: "購入と売却、どちらにも対応していますか？", a: "はい、売買どちらもお任せください。購入の場合は物件探しから、売却の場合は査定からサポートいたします。買い替えの方には、売却と購入を同時に進めるプランもございます。" },
              { q: "対応エリアはどこですか？", a: "東京都心部（港区、渋谷区、目黒区、世田谷区、新宿区、千代田区、中央区）を中心に、近郊エリアも対応可能です。詳しくはお問い合わせください。" },
              { q: "VR内見だけで購入を決めても大丈夫ですか？", a: "VR内見は物件の絞り込みに大変便利ですが、ご契約前には必ず現地内見をお勧めしております。周辺環境や実際の雰囲気を確認いただくことで、より安心してご決断いただけます。" },
              { q: "相談だけでも対応してもらえますか？", a: "もちろんです。「いつか購入したい」「売却を検討し始めた」という段階でも、お気軽にご相談ください。無理な営業は一切いたしません。" }
            ].map((item, index) => (
              <div key={index} className="border-b border-white/10 pb-6">
                <h3 className="text-lg font-medium mb-3 flex items-start gap-4">
                  <span className="text-[var(--gold)]">Q.</span>
                  {item.q}
                </h3>
                <p className="text-white/60 leading-relaxed pl-8">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy-deep)] via-[var(--navy-dark)] to-[var(--navy-medium)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[var(--gold)]/5 blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-[var(--gold)] text-sm tracking-[0.3em] mb-6" className="font-display">CONTACT</p>
          <h2 className="text-3xl md:text-5xl font-light mb-8">
            まずは無料相談から
          </h2>
          <p className="text-lg text-white/70 leading-relaxed mb-4 max-w-2xl mx-auto">
            購入・売却のご相談、AI査定のご依頼など、お気軽にお問い合わせください。専属コンシェルジュが24時間以内にご連絡いたします。
          </p>
          <p className="text-sm text-white/50 mb-12">
            ※ 無理な営業は一切いたしません。安心してご相談ください。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="#" className="btn-gold text-lg px-12 py-5">
              <span>無料相談を予約する</span>
            </a>
            <a href="tel:03-1234-5678" className="btn-outline text-lg px-12 py-5">
              03-1234-5678
            </a>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-white/50">
            <span>受付時間: 10:00 - 20:00</span>
            <span className="w-px h-4 bg-white/20" />
            <span>年中無休</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 border border-[var(--gold)] flex items-center justify-center">
                  <span className="text-[var(--gold)] text-lg font-light" className="font-display">A</span>
                </div>
                <div>
                  <p className="text-xs tracking-[0.3em] text-[var(--gold)]" className="font-display">AOYAMA</p>
                  <p className="text-[10px] tracking-[0.2em] text-white/60">REAL ESTATE</p>
                </div>
              </div>
              <p className="text-sm text-white/50 leading-relaxed max-w-sm">
                東京都心の高級物件に特化した不動産会社。AI査定と専属コンシェルジュで、理想の住まい探しをサポートします。
              </p>
            </div>
            <div>
              <h4 className="text-sm tracking-wider mb-6">MENU</h4>
              <ul className="space-y-3 text-sm text-white/50">
                <li><a href="#about" className="hover:text-[var(--gold)] transition-colors">会社概要</a></li>
                <li><a href="#services" className="hover:text-[var(--gold)] transition-colors">サービス</a></li>
                <li><a href="#properties" className="hover:text-[var(--gold)] transition-colors">物件情報</a></li>
                <li><a href="#contact" className="hover:text-[var(--gold)] transition-colors">お問い合わせ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm tracking-wider mb-6">COMPANY</h4>
              <ul className="space-y-3 text-sm text-white/50">
                <li>株式会社青山不動産</li>
                <li>〒107-0062</li>
                <li>東京都港区南青山3-1-1</li>
                <li>青山タワービル 15F</li>
                <li className="pt-2">
                  <a href="tel:03-1234-5678" className="text-[var(--gold)]">03-1234-5678</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="section-divider mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
            <p>© 2024 AOYAMA REAL ESTATE. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[var(--gold)] transition-colors">プライバシーポリシー</a>
              <a href="#" className="hover:text-[var(--gold)] transition-colors">利用規約</a>
              <a href="#" className="hover:text-[var(--gold)] transition-colors">特定商取引法に基づく表記</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
