'use client'

import { useState } from 'react'
import { ArrowDownLeft, ArrowUpRight, Bell, ChevronRight, CreditCard, DollarSign, Home, MoreHorizontal, Plus, QrCode, Search, Settings, Sparkles, UserRound, Wallet, X } from 'lucide-react'

const transactions = [
  { name: 'Maya Johnson', detail: 'Today, 2:42 PM', amount: '+$120.00', type: 'received', initials: 'MJ', color: '#d9f99d' },
  { name: 'Whole Foods Market', detail: 'Today, 12:18 PM', amount: '-$54.28', type: 'spent', initials: 'W', color: '#fde68a' },
  { name: 'Alex Rivera', detail: 'Yesterday, 6:04 PM', amount: '+$45.00', type: 'received', initials: 'AR', color: '#bfdbfe' },
  { name: 'Netflix.com', detail: 'Sep 20, 2024', amount: '-$15.49', type: 'spent', initials: 'N', color: '#fecdd3' },
]

export default function Dashboard() {
  const [showSend, setShowSend] = useState(false)
  const [showAdd, setShowAdd] = useState(false)
  const [search, setSearch] = useState('')
  const [sent, setSent] = useState(false)

  return <main className="app-shell">
    <aside className="sidebar">
      <div className="brand"><span className="brand-mark">$</span><span>cashflow</span></div>
      <nav><a className="active"><Home size={19}/> Overview</a><a><Wallet size={19}/> Activity</a><a><CreditCard size={19}/> Cash Card</a><a><QrCode size={19}/> Pay & Request</a></nav>
      <div className="sidebar-bottom"><a><Settings size={19}/> Settings</a><div className="user"><div className="avatar">JD</div><div><strong>Jordan Davis</strong><small>@jordan.d</small></div><MoreHorizontal size={18}/></div></div>
    </aside>
    <section className="content">
      <header><div><p className="eyebrow">Tuesday, September 24, 2024</p><h1>Good morning, Jordan <span>✦</span></h1></div><div className="header-actions"><button className="icon-button"><Bell size={20}/><i/></button><div className="header-avatar">JD</div></div></header>
      <div className="hero-grid">
        <div className="balance-card"><div className="card-top"><span>Cash balance</span><button className="dots"><MoreHorizontal size={19}/></button></div><div className="balance">$2,847<span>.63</span></div><div className="card-footer"><span><span className="trend">↗</span> 12.8% <em>this month</em></span><button className="add-money" onClick={() => setShowAdd(true)}><Plus size={16}/> Add money</button></div></div>
        <div className="quick-actions"><p className="section-label">Quick actions</p><div className="action-row"><button onClick={() => setShowSend(true)}><span className="action-icon send"><ArrowUpRight size={21}/></span><b>Send</b><small>Pay someone</small></button><button><span className="action-icon request"><ArrowDownLeft size={21}/></span><b>Request</b><small>Get paid back</small></button><button><span className="action-icon scan"><QrCode size={21}/></span><b>Scan</b><small>Pay in-store</small></button></div></div>
      </div>
      <div className="lower-grid"><section className="transactions"><div className="section-heading"><div><p className="section-label">Recent activity</p><h2>Your transactions</h2></div><button className="view-all">View all <ChevronRight size={16}/></button></div><div className="search"><Search size={17}/><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search transactions" /></div><div className="transaction-list">{transactions.filter(t => t.name.toLowerCase().includes(search.toLowerCase())).map((t) => <div className="transaction" key={t.name}><div className="transaction-avatar" style={{background: t.color}}>{t.initials}</div><div className="transaction-info"><b>{t.name}</b><small>{t.detail}</small></div><strong className={t.type}>{t.amount}</strong></div>)}</div></section><aside className="right-column"><div className="cash-card"><div className="card-brand"><span className="brand-mark small">$</span> cashflow</div><div className="card-chip"/><div className="card-number">•••• &nbsp; 4821</div><div className="card-name">JORDAN DAVIS <span>VISA</span></div></div><button className="promo"><span><Sparkles size={19}/></span><div><b>Make your money work harder</b><small>Explore Cashflow Boosts</small></div><ChevronRight size={17}/></button></aside></div>
    </section>
    {showSend && <Modal title="Send money" close={() => setShowSend(false)}><div className="modal-icon"><ArrowUpRight size={25}/></div><label>Recipient</label><input className="modal-input" placeholder="Name, $cashtag, phone, or email" autoFocus/><label>Amount</label><div className="amount-input"><span>$</span><input placeholder="0.00" type="number"/></div><button className="primary" onClick={() => {setSent(true); setTimeout(() => {setSent(false); setShowSend(false)}, 1200)}}>{sent ? 'Sent!' : 'Continue'}</button></Modal>}
    {showAdd && <Modal title="Add money" close={() => setShowAdd(false)}><div className="modal-icon green"><Plus size={25}/></div><label>Amount to add</label><div className="amount-input"><span>$</span><input placeholder="0.00" type="number" autoFocus/></div><p className="helper">Funds will be added from your linked bank account ending in 4821.</p><button className="primary" onClick={() => setShowAdd(false)}>Add money</button></Modal>}
  </main>
}

function Modal({title, close, children}: {title: string, close: () => void, children: React.ReactNode}) { return <div className="overlay"><div className="modal"><button className="close" onClick={close}><X size={20}/></button><h2>{title}</h2>{children}</div></div> }
