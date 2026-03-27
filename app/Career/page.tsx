"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { Lobster } from 'next/font/google'
import { MapPin, ArrowUpRight, Briefcase, Clock, X, Upload, Send, CheckCircle2, ShieldCheck, Leaf, Factory, Zap, Check, Lock } from 'lucide-react'
import { useState } from 'react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

const lobster = Lobster({
  subsets: ['latin'],
  weight: '400',
})

// --- REALISTIC DATA ---
const jobDetails = [
  { 
    id: 1, 
    title: "Quality Control Officer", 
    dept: "R&D - Food Safety", 
    loc: "Nashik Manufacturing Cluster", 
    type: "Full-Time",
    salary: "₹6L - ₹9L PA",
    description: "Lead the hygiene audit team for our high-stability garlic and ginger paste lines. You will oversee microbial testing and ensure zero-deviation from international export standards.",
    requirements: ["B.Tech/M.Sc in Food Technology", "Experience with BRCGS or FSSC 22000", "Strong analytical skills in lab environments"],
    responsibilities: ["Validation of CCPs (Critical Control Points)", "Managing raw material traceability", "Conducting sensory evaluation panels"]
  },
  { 
    id: 2, 
    title: "Maintenance Engineer", 
    dept: "Operations", 
    loc: "Nashik HQ", 
    type: "Full-Time",
    salary: "₹8L - ₹12L PA",
    description: "Responsible for the upkeep of our automated dehydration units and CNC-controlled processing machinery.",
    requirements: ["B.E. in Mechanical/Electrical Engineering", "Experience with PLC & Automation", "2+ years in food processing industry"],
    responsibilities: ["Preventive maintenance scheduling", "Managing spare parts inventory", "Troubleshooting pneumatic systems"]
  }
];

// --- CLOSED PROGRAMS DATA ---
const closedPrograms = [
  { id: 101, title: "Summer Internship 2025", dept: "Marketing", loc: "Nashik", type: "Internship" },
  { id: 102, title: "Supply Chain Head", dept: "Logistics", loc: "Pune", type: "Full-Time" }
];

const hiringSteps = [
  { step: "01", title: "Application", desc: "Submit your CV through our portal." },
  { step: "02", title: "Technical Screen", desc: "A call with our department heads." },
  { step: "03", title: "On-site Visit", desc: "Experience our Nashik facility first-hand." },
  { step: "04", title: "Offer", desc: "Welcome to the Vrinda Aagro family." },
];

export default function CareerPage() {
  const [viewingJob, setViewingJob] = useState<any | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const handleApply = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newErrors: { [key: string]: string } = {}

    if (!formData.get("fullname")) newErrors.fullname = "Name is required"
    if (!formData.get("email")) newErrors.email = "Valid email is required"
    if (!formData.get("resume")) newErrors.resume = "Please upload your CV"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
    } else {
      setErrors({})
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setShowForm(false)
        setViewingJob(null)
      }, 3000)
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-red-50">
      <Navigation />

      {/* Hero Section */}
      <header className="relative pt-48 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/Background/sample.jpg" alt="Vrinda Aagro" className="w-full h-full object-cover grayscale-[0.2] brightness-[0.50]" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="border-l-4 border-red-600 pl-8">
            <motion.h1 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className={`${lobster.className} text-5xl sm:text-6xl text-white leading-tight`}>Jobs/Internships</motion.h1>
            <p className="max-w-md text-slate-400 text-sm font-light mt-6 border-t border-white/10 pt-6">We don't just process food; we engineer flavor and hygiene for the global market.</p>
          </div>
        </div>
      </header>

      {/* Hiring Process Header */}
      <p className="max-w-auto text-center text-slate-900 text-2xl font-extrabold mt-32 border-t border-slate-100 pt-12">Processing time with stages</p>
      
      {/* Hiring Process Section */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-100 mt-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            {hiringSteps.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative">
                <span className="text-6xl font-black text-slate-200 absolute -top-10 -left-4 z-0">{s.step}</span>
                <div className="relative z-10">
                  <h3 className="text-lg font-black uppercase tracking-tighter text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Jobs Listing */}
      <main className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-black uppercase tracking-tighter italic">Available Roles</h2>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{jobDetails.length} Positions</span>
        </div>

        <div className="grid gap-6 mb-24">
          {jobDetails.map((job) => (
            <motion.div 
              key={job.id}
              whileHover={{ x: 10 }}
              className="bg-white border border-slate-100 rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row justify-between items-center gap-8 hover:shadow-2xl hover:shadow-slate-200/50 transition-all cursor-pointer group"
              onClick={() => setViewingJob(job)}
            >
              <div className="flex-1 space-y-3 text-center md:text-left">
                <span className="text-yellow-600 font-black text-[10px] uppercase tracking-widest">{job.dept}</span>
                <h3 className="text-3xl font-bold tracking-tight group-hover:text-red-600 transition-colors uppercase">{job.title}</h3>
                <div className="flex justify-center md:justify-start gap-4 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                  <span className="flex items-center gap-1"><MapPin size={12} /> {job.loc}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {job.type}</span>
                </div>
              </div>
              <button className="bg-slate-950 text-white px-10 py-5 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-red-600 transition-all">Details <ArrowUpRight size={16} className="inline ml-2"/></button>
            </motion.div>
          ))}
        </div>

        {/* --- CLOSED PROGRAMS SECTION --- */}
        <div className="flex items-center justify-between mb-12 opacity-60">
          <h2 className="text-2xl font-black uppercase tracking-tighter italic">Closed Programs</h2>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Archive</span>
        </div>

        <div className="grid gap-6 grayscale opacity-60">
          {closedPrograms.map((prog) => (
            <div 
              key={prog.id}
              className="bg-slate-50 border border-slate-200 rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row justify-between items-center gap-8 cursor-not-allowed"
            >
              <div className="flex-1 space-y-3 text-center md:text-left">
                <span className="text-slate-400 font-black text-[10px] uppercase tracking-widest">{prog.dept}</span>
                <h3 className="text-3xl font-bold tracking-tight text-slate-400 uppercase">{prog.title}</h3>
                <div className="flex justify-center md:justify-start gap-4 text-[10px] text-slate-300 font-bold uppercase tracking-widest">
                  <span className="flex items-center gap-1"><MapPin size={12} /> {prog.loc}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {prog.type}</span>
                </div>
              </div>
              <button 
                disabled 
                className="bg-slate-200 text-slate-400 px-10 py-5 rounded-2xl font-black uppercase text-[10px] tracking-widest cursor-not-allowed flex items-center gap-2"
              >
                Can't Enter <Lock size={14} />
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* DETAIL OVERLAY & FORM (Logic remains same) */}
      <AnimatePresence>
        {viewingJob && (
          <div className="fixed inset-0 z-[110] flex items-center justify-end">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => {setViewingJob(null); setShowForm(false)}} className="absolute inset-0 bg-slate-950/70 backdrop-blur-md" />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="relative h-full w-full max-w-2xl bg-white shadow-2xl overflow-y-auto">
              {!showForm ? (
                <div className="p-10 md:p-16">
                  <button onClick={() => setViewingJob(null)} className="mb-12 flex items-center gap-2 text-slate-400 hover:text-red-600 font-bold uppercase text-[10px] tracking-widest"><X size={18}/> Close</button>
                  <span className="text-yellow-600 font-black text-xs uppercase tracking-[0.3em]">{viewingJob.dept}</span>
                  <h2 className={`${lobster.className} text-5xl mt-4 mb-8`}>{viewingJob.title}</h2>
                  <div className="space-y-10">
                    <div>
                      <h4 className="font-black uppercase text-[10px] tracking-[0.2em] mb-4 text-slate-400">About the role</h4>
                      <p className="text-slate-600 leading-relaxed text-sm">{viewingJob.description}</p>
                    </div>
                    <div>
                      <h4 className="font-black uppercase text-[10px] tracking-[0.2em] mb-4 text-slate-400">Key Responsibilities</h4>
                      <ul className="grid gap-3">
                        {viewingJob.responsibilities.map((r: any, i: number) => (
                          <li key={i} className="flex items-start gap-3 text-xs text-slate-600 font-medium"><CheckCircle2 size={16} className="text-green-500 mt-0.5 flex-shrink-0" /> {r}</li>
                        ))}
                      </ul>
                    </div>
                    <button onClick={() => setShowForm(true)} className="w-full bg-red-600 text-white py-6 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-slate-900 transition-all">Apply for this position</button>
                  </div>
                </div>
              ) : (
                <div className="p-10 md:p-16">
                  <button onClick={() => setShowForm(false)} className="mb-12 text-slate-400 hover:text-red-600 font-bold uppercase text-[10px] tracking-widest">← Back to Details</button>
                  {isSubmitted ? (
                    <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center justify-center h-[50vh] text-center">
                      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6"><Check size={40} /></div>
                      <h3 className={`${lobster.className} text-4xl mb-2`}>Application Sent!</h3>
                      <p className="text-slate-500 text-sm">Our HR team will review your profile and contact you soon.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleApply} className="space-y-6">
                      <h2 className={`${lobster.className} text-4xl mb-8`}>Personal Details</h2>
                      <div>
                        <input name="fullname" type="text" placeholder="Full Name *" className={`w-full bg-slate-50 border ${errors.fullname ? 'border-red-500' : 'border-slate-100'} p-5 rounded-2xl outline-none focus:border-red-600 transition-all`} />
                        {errors.fullname && <p className="text-red-500 text-[10px] mt-2 font-bold uppercase ml-2">{errors.fullname}</p>}
                      </div>
                      <div>
                        <input name="email" type="email" placeholder="Email Address *" className={`w-full bg-slate-50 border ${errors.email ? 'border-red-500' : 'border-slate-100'} p-5 rounded-2xl outline-none focus:border-red-600 transition-all`} />
                        {errors.email && <p className="text-red-500 text-[10px] mt-2 font-bold uppercase ml-2">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="block text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2 ml-2">Resume / CV (PDF Only)</label>
                        <div className={`relative border-2 border-dashed ${errors.resume ? 'border-red-300 bg-red-50' : 'border-slate-200'} rounded-2xl p-10 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50 transition-all`}>
                          <Upload size={24} className="text-slate-300 mb-2" />
                          <span className="text-[10px] font-bold text-slate-500">Click to upload document</span>
                          <input name="resume" type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                        </div>
                        {errors.resume && <p className="text-red-500 text-[10px] mt-2 font-bold uppercase ml-2">{errors.resume}</p>}
                      </div>
                      <button type="submit" className="w-full bg-red-600 text-white py-6 rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl shadow-red-200 hover:bg-slate-900 transition-all flex items-center justify-center gap-3">
                        Submit Application <Send size={16} />
                      </button>
                    </form>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  )
}