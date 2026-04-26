'use client';

import React, { useState } from 'react';
import {
  Search, Bell, Settings, Plus, Menu, ArrowLeft, ArrowRight,
  Share, MessageSquare, Clock, Star, MoreHorizontal, LayoutGrid, Calendar as CalendarIcon,
  Filter, ArrowDownUp, ChevronDown, Check, LayoutTemplate, Download, CheckSquare, Target,
  Folder, FileText, Book, Archive, MoreVertical, LayoutList, AlignLeft, Table,
  Activity, Lightbulb
} from 'lucide-react';

const TASKS = [
  { id: 1, task: 'Write project proposal', status: 'Not started', priority: 'High', due: 'May 20, 2024', project: 'Website Redesign', projectColor: 'bg-purple-500', checked: false },
  { id: 2, task: 'Reply to emails', status: 'Done', priority: 'Medium', due: 'May 16, 2024', project: 'Daily Tasks', projectColor: 'bg-blue-500', checked: true },
  { id: 3, task: 'Research user feedback', status: 'In progress', priority: 'High', due: 'May 22, 2024', project: 'Website Redesign', projectColor: 'bg-purple-500', checked: false },
  { id: 4, task: 'Design homepage wireframe', status: 'Not started', priority: 'High', due: 'May 25, 2024', project: 'Website Redesign', projectColor: 'bg-purple-500', checked: false },
  { id: 5, task: 'Buy groceries', status: 'Not started', priority: 'Low', due: 'May 18, 2024', project: 'Personal', projectColor: 'bg-green-500', checked: false },
  { id: 6, task: 'Prepare presentation', status: 'In progress', priority: 'Medium', due: 'May 18, 2024', project: 'Work', projectColor: 'bg-orange-500', checked: false },
  { id: 7, task: 'Book flight tickets', status: 'Not started', priority: 'Medium', due: 'May 24, 2024', project: 'Personal', projectColor: 'bg-green-500', checked: false },
  { id: 8, task: 'Call with client', status: 'Done', priority: 'High', due: 'May 15, 2024', project: 'Work', projectColor: 'bg-orange-500', checked: false },
  { id: 9, task: 'Update style guide', status: 'In progress', priority: 'Low', due: 'May 19, 2024', project: 'Website Redesign', projectColor: 'bg-purple-500', checked: false },
  { id: 10, task: 'Review pull requests', status: 'Not started', priority: 'Medium', due: 'May 23, 2024', project: 'Work', projectColor: 'bg-orange-500', checked: false },
  { id: 11, task: 'Plan team offsite', status: 'Not started', priority: 'Low', due: 'May 30, 2024', project: 'Work', projectColor: 'bg-orange-500', checked: false },
  { id: 12, task: 'Organize desk', status: 'Done', priority: 'Low', due: 'May 17, 2024', project: 'Personal', projectColor: 'bg-green-500', checked: false },
];

function StatusBadge({ status }: { status: string }) {
  if (status === 'Done') {
    return (
      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[13px] bg-[#edf3ec] text-[#4d7e3e]">
        <div className="w-1.5 h-1.5 rounded-full bg-[#4d7e3e]"></div>
        {status}
      </span>
    );
  }
  if (status === 'In progress') {
    return (
      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[13px] bg-[#e8f0fe] text-[#0d47a1]">
        <div className="w-1.5 h-1.5 rounded-full bg-[#0d47a1]"></div>
        {status}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[13px] bg-[#f1f1ef] text-[#787774]">
      <div className="w-1.5 h-1.5 rounded-full bg-[#787774]"></div>
      {status}
    </span>
  );
}

function PriorityBadge({ priority }: { priority: string }) {
  if (priority === 'High') {
    return <span className="inline-block px-1.5 rounded text-[13px] text-[#db4040] bg-[#fdebec]">High</span>;
  }
  if (priority === 'Medium') {
    return <span className="inline-block px-1.5 rounded text-[13px] text-[#d9730d] bg-[#fdf2e8]">Medium</span>;
  }
  return <span className="inline-block px-1.5 rounded text-[13px] text-[#4d7e3e] bg-[#edf3ec]">Low</span>;
}

export default function NotionClone() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="flex h-screen w-full bg-white text-[#37352f] overflow-hidden relative">
      {/* Sidebar Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-10 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`w-[240px] flex-shrink-0 bg-[#fbfbfa] border-r border-[#e9e9e7] flex flex-col absolute md:relative z-20 h-full transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        {/* Workspace Switcher */}
        <div className="flex items-center justify-between px-3 h-12 hover:bg-black/5 cursor-pointer transition-colors mt-2 mx-2 rounded">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-black rounded flex justify-center items-center text-white text-xs font-bold font-mono">
              N
            </div>
            <span className="font-semibold text-[14px]">My Workspace</span>
            <ArrowDownUp className="w-3 h-3 text-[#787774] opacity-50" />
          </div>
          <LayoutTemplate className="w-4 h-4 text-[#787774]" />
        </div>

        {/* Quick Links */}
        <div className="px-2 mt-2 space-y-0.5">
          <div className="flex items-center gap-2 px-3 py-1 hover:bg-black/5 rounded cursor-pointer text-[#787774] group border-transparent border transition-colors hover:text-[#37352f]">
            <Search className="w-4 h-4" />
            <span className="text-[14px]">Search</span>
            <span className="ml-auto text-[12px] opacity-0 group-hover:opacity-100 transition-opacity">âK</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 hover:bg-black/5 rounded cursor-pointer text-[#787774] transition-colors hover:text-[#37352f]">
            <Bell className="w-4 h-4" />
            <span className="text-[14px]">Inbox</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 hover:bg-black/5 rounded cursor-pointer text-[#787774] transition-colors hover:text-[#37352f]">
            <Settings className="w-4 h-4" />
            <span className="text-[14px]">Settings & members</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto mt-6">
          {/* Favorites */}
          <div className="mb-6">
            <div className="px-5 text-[11px] font-semibold text-[#787774] mb-1">Favorites</div>
            <div className="px-2 space-y-0.5">
              <div className="flex items-center gap-2 px-3 py-1 bg-black/5 rounded cursor-pointer text-[#37352f] font-medium">
                <CheckSquare className="w-4 h-4 text-green-600" />
                <span className="text-[14px]">To Do List</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 hover:bg-black/5 rounded cursor-pointer text-[#37352f] transition-colors">
                <Target className="w-4 h-4 text-red-500" />
                <span className="text-[14px]">Goals</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 hover:bg-black/5 rounded cursor-pointer text-[#37352f] transition-colors">
                <Activity className="w-4 h-4 text-green-500" />
                <span className="text-[14px]">Habit Tracker</span>
              </div>
            </div>
          </div>

          {/* Pages */}
          <div className="mb-6">
            <div className="px-5 text-[11px] font-semibold text-[#787774] mb-1">Pages</div>
            <div className="px-2 space-y-0.5">
              <div className="flex items-center gap-2 px-3 py-1 hover:bg-black/5 rounded cursor-pointer text-[#37352f] transition-colors">
                <Folder className="w-4 h-4 text-[#787774]" />
                <span className="text-[14px]">Projects</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 hover:bg-black/5 rounded cursor-pointer text-[#37352f] transition-colors">
                <FileText className="w-4 h-4 text-[#787774]" />
                <span className="text-[14px]">Notes</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 hover:bg-black/5 rounded cursor-pointer text-[#37352f] transition-colors">
                <Book className="w-4 h-4 text-[#787774]" />
                <span className="text-[14px]">Resources</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 hover:bg-black/5 rounded cursor-pointer text-[#37352f] transition-colors">
                <Archive className="w-4 h-4 text-[#787774]" />
                <span className="text-[14px]">Archive</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 hover:bg-black/5 rounded cursor-pointer text-[#787774] transition-colors mt-1">
                <Plus className="w-4 h-4" />
                <span className="text-[14px]">Add a page</span>
              </div>
            </div>
          </div>

          {/* Databases */}
          <div className="mb-6">
            <div className="px-5 text-[11px] font-semibold text-[#787774] mb-1">Databases</div>
            <div className="px-2 space-y-0.5">
              <div className="flex items-center gap-2 px-3 py-1 hover:bg-black/5 rounded cursor-pointer text-[#37352f] transition-colors">
                <LayoutList className="w-4 h-4 text-[#787774]" />
                <span className="text-[14px]">Tasks</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 hover:bg-black/5 rounded cursor-pointer text-[#37352f] transition-colors">
                <LayoutList className="w-4 h-4 text-[#787774]" />
                <span className="text-[14px]">Projects</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 hover:bg-black/5 rounded cursor-pointer text-[#37352f] transition-colors">
                <LayoutList className="w-4 h-4 text-[#787774]" />
                <span className="text-[14px]">Areas</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 hover:bg-black/5 rounded cursor-pointer text-[#787774] transition-colors mt-1">
                <Plus className="w-4 h-4" />
                <span className="text-[14px]">Add a database</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom actions */}
        <div className="mt-auto px-2 py-3 border-t border-[#e9e9e7]">
          <div className="flex items-center gap-2 px-3 py-1.5 hover:bg-black/5 rounded cursor-pointer text-[#787774] transition-colors">
            <Plus className="w-4 h-4" />
            <span className="text-[14px] font-medium">New page</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 bg-white">
        {/* Top Navbar */}
        <header className="flex items-center justify-between px-4 h-12 w-full flex-shrink-0 sticky top-0 bg-white z-10">
          <div className="flex items-center gap-3 text-[#787774]">
            <Menu className="w-5 h-5 cursor-pointer hover:bg-black/5 rounded md:hidden" onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
            <div className="flex items-center gap-1 hidden sm:flex">
              <ArrowLeft className="w-4 h-4 cursor-pointer hover:bg-black/5 rounded p-0.5" />
              <ArrowRight className="w-4 h-4 cursor-pointer hover:bg-black/5 rounded p-0.5 opacity-30" />
            </div>
            <div className="flex items-center gap-2 bg-transparent hover:bg-black/5 px-2 py-0.5 rounded cursor-pointer ml-2">
              <CheckSquare className="w-4 h-4 text-[#37352f]" />
              <span className="text-[15px] font-medium text-[#37352f]">To Do List</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-[#787774]">
            <span className="text-[13px] hidden md:block">Edited just now</span>
            <div className="flex items-center gap-1">
              <span className="text-[14px] hover:bg-black/5 px-2 py-1 rounded cursor-pointer hidden sm:block">Share</span>
              <MessageSquare className="w-4 h-4 cursor-pointer hover:bg-black/5 rounded mx-1" />
              <Clock className="w-4 h-4 cursor-pointer hover:bg-black/5 rounded mx-1" />
              <Star className="w-4 h-4 cursor-pointer hover:bg-black/5 rounded mx-1" />
              <MoreHorizontal className="w-5 h-5 cursor-pointer hover:bg-black/5 rounded mx-1" />
            </div>
          </div>
        </header>

        {/* Scrollable Area */}
        <div className="flex-1 overflow-y-auto w-full flex flex-col px-6 md:px-8 py-6 max-w-[1000px] mx-auto">
          {/* Page Header */}
          <div className="flex flex-col mx-2 sm:mx-0 mb-6 mt-2">
            <div className="mb-4">
              <CheckSquare className="w-16 h-16 text-green-600 bg-green-100 p-2 rounded-xl" />
            </div>
            <h1 className="text-[40px] font-bold tracking-tight text-[#37352f] mb-3">To Do List</h1>
            <p className="text-[15px] text-[#787774]">A simple to do list to plan your tasks and get things done.</p>
          </div>

          {/* Table Area */}
          <div className="w-full flex flex-col">
            {/* View Controls & Actions */}
            <div className="flex flex-wrap items-center justify-between border-b border-[#e9e9e7] pb-1.5 mb-2 gap-2">
              <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
                <div className="flex items-center gap-1.5 px-2 py-1 rounded cursor-pointer text-[#37352f] font-medium border-b-2 border-[#37352f]">
                  <Table className="w-4 h-4" />
                  <span className="text-[14px]">All Task</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 hover:bg-black/5 rounded cursor-pointer text-[#787774] transition-colors">
                  <LayoutGrid className="w-4 h-4" />
                  <span className="text-[14px]">Board</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 hover:bg-black/5 rounded cursor-pointer text-[#787774] transition-colors">
                  <CalendarIcon className="w-4 h-4" />
                  <span className="text-[14px]">Today</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 hover:bg-black/5 rounded cursor-pointer text-[#787774] transition-colors">
                  <CalendarIcon className="w-4 h-4" />
                  <span className="text-[14px]">Calendar</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-[#787774] hidden md:flex">
                  <span className="text-[14px] hover:bg-black/5 px-2 py-1 rounded cursor-pointer transition-colors">Filter</span>
                  <span className="text-[14px] hover:bg-black/5 px-2 py-1 rounded cursor-pointer transition-colors">Sort</span>
                  <Search className="w-4 h-4 hover:bg-black/5 rounded cursor-pointer" />
                  <MoreHorizontal className="w-4 h-4 hover:bg-black/5 rounded cursor-pointer" />
                </div>
                
                {/* New Button with Dropdown */}
                <div className="relative">
                  <div className="flex items-center bg-[#2ea2f8] text-white rounded cursor-pointer hover:bg-[#208ce1] transition-colors shadow-sm">
                    <div className="px-3 py-1 flex items-center h-7 border-r border-[#1a85d6]">
                      <span className="text-[14px] font-medium">New</span>
                    </div>
                    <div 
                      className="px-1.5 flex items-center justify-center h-7 hover:bg-[#1f87dc] rounded-r"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Open Dropdown */}
                  {isDropdownOpen && (
                  <div className="absolute top-9 right-0 w-[200px] bg-white rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.1),0_0_1px_rgba(0,0,0,0.2)] border border-[#e9e9e7] py-1 z-20">
                    <div className="px-3 py-1.5 text-[12px] font-medium text-[#787774] mb-1">New</div>
                    
                    <div className="flex items-center gap-2 px-3 py-1.5 hover:bg-black/5 cursor-pointer text-[#37352f] text-[14px]">
                      <CheckSquare className="w-4 h-4 text-[#787774]" />
                      <span>Task</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 hover:bg-black/5 cursor-pointer text-[#37352f] text-[14px]">
                      <LayoutGrid className="w-4 h-4 text-[#787774]" />
                      <span>Board</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 hover:bg-black/5 cursor-pointer text-[#37352f] text-[14px]">
                      <CalendarIcon className="w-4 h-4 text-[#787774]" />
                      <span>Calendar event</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 hover:bg-black/5 cursor-pointer text-[#37352f] text-[14px]">
                      <FileText className="w-4 h-4 text-[#787774]" />
                      <span>Note</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 hover:bg-black/5 cursor-pointer text-[#37352f] text-[14px]">
                      <LayoutTemplate className="w-4 h-4 text-[#787774]" />
                      <span>Template</span>
                    </div>
                    
                    <div className="h-[1px] bg-[#e9e9e7] my-1 mx-2"></div>
                    
                    <div className="flex items-center gap-2 px-3 py-1.5 hover:bg-black/5 cursor-pointer text-[#37352f] text-[14px]">
                      <Download className="w-4 h-4 text-[#787774]" />
                      <span>Import</span>
                    </div>
                  </div>
                  )}
                </div>
              </div>
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-[36px_minmax(180px,2fr)_minmax(120px,1fr)_minmax(100px,1fr)_minmax(120px,1fr)_minmax(160px,1.5fr)_40px] items-center text-[#787774] text-[13px] py-2 border-b border-[#e9e9e7] mb-1">
              <div className="flex justify-center">
                <div className="w-3.5 h-3.5 border-2 border-[#e9e9e7] rounded-[3px] bg-transparent"></div>
              </div>
              <div className="flex items-center gap-1.5 hover:bg-black/5 px-1 py-0.5 -ml-1 rounded cursor-pointer">
                <span className="font-serif italic mr-0.5">Aa</span>
                <span className="font-medium">Task</span>
              </div>
              <div className="flex items-center gap-1.5 hover:bg-black/5 px-1 py-0.5 -ml-1 rounded cursor-pointer">
                <Target className="w-3.5 h-3.5" />
                <span className="font-medium">Status</span>
              </div>
              <div className="flex items-center gap-1.5 hover:bg-black/5 px-1 py-0.5 -ml-1 rounded cursor-pointer">
                <AlignLeft className="w-3.5 h-3.5" />
                <span className="font-medium">Priority</span>
              </div>
              <div className="flex items-center gap-1.5 hover:bg-black/5 px-1 py-0.5 -ml-1 rounded cursor-pointer">
                <CalendarIcon className="w-3.5 h-3.5" />
                <span className="font-medium">Due</span>
              </div>
              <div className="flex items-center gap-1.5 hover:bg-black/5 px-1 py-0.5 -ml-1 rounded cursor-pointer">
                <ArrowRight className="w-3.5 h-3.5 -rotate-45" />
                <span className="font-medium">Project</span>
              </div>
              <div className="flex justify-center text-[#e9e9e7] hover:text-[#37352f] cursor-pointer cursor-crosshair">
                <Plus className="w-4 h-4" />
              </div>
            </div>

            {/* Table Body */}
            <div className="flex flex-col group/table">
              {TASKS.map((task, i) => (
                <div key={i} className="grid grid-cols-[36px_minmax(180px,2fr)_minmax(120px,1fr)_minmax(100px,1fr)_minmax(120px,1fr)_minmax(160px,1.5fr)_40px] items-center text-[14px] py-1 border-b border-[#e9e9e7] hover:bg-black/[0.02] group/row transition-colors">
                  <div className="flex justify-center">
                    {task.checked ? (
                      <div className="w-[18px] h-[18px] bg-[#2ea2f8] rounded flex items-center justify-center cursor-pointer">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    ) : (
                      <div className="w-[18px] h-[18px] border-[1.5px] border-[#e9e9e7] hover:border-[#787774] rounded bg-white cursor-pointer transition-colors"></div>
                    )}
                  </div>
                  
                  <div className={`font-medium ${task.checked ? 'text-[#787774] line-through' : 'text-[#37352f]'} truncate pr-4`}>
                    {task.task}
                  </div>
                  
                  <div className="pr-4">
                    <StatusBadge status={task.status} />
                  </div>
                  
                  <div className="pr-4">
                    <PriorityBadge priority={task.priority} />
                  </div>
                  
                  <div className="text-[#37352f] truncate pr-4">
                    {task.due}
                  </div>
                  
                  <div className="flex items-center gap-1.5 truncate pr-2">
                    <div className={`w-2 h-2 rounded-full ${task.projectColor}`}></div>
                    <span className="text-[#37352f]">{task.project}</span>
                  </div>

                  <div className="flex justify-center opacity-0 group-hover/row:opacity-100 transition-opacity">
                    <MoreHorizontal className="w-4 h-4 text-[#787774] hover:bg-black/5 rounded cursor-pointer" />
                  </div>
                </div>
              ))}
              
              {/* Add New Row */}
              <div className="grid grid-cols-[36px_1fr] items-center text-[14px] py-2 border-b border-[#e9e9e7] cursor-pointer hover:bg-black/[0.02]">
                <div className="flex justify-center text-[#e9e9e7]">
                  <Plus className="w-4 h-4" />
                </div>
                <div className="text-[#787774]">New page</div>
              </div>
            </div>

            {/* Table Footer */}
            <div className="flex items-center text-[11px] text-[#787774] mt-2 font-medium tracking-wide">
              <span>COUNT</span>
              <span className="ml-2">12</span>
            </div>

            {/* Notes Toggle section */}
            <div className="mt-8">
              <div className="flex items-center gap-1.5 text-[16px] font-semibold text-[#37352f] mb-2 cursor-pointer hover:bg-black/5 rounded py-0.5 px-1 -ml-1 w-max">
                <ChevronDown className="w-4 h-4" />
                <h2>Notes</h2>
              </div>
              <div className="ml-5">
                <div className="bg-[#fff7e3] px-4 py-3 rounded text-[14px] text-[#37352f] flex items-start gap-2">
                  <Lightbulb className="w-5 h-5 shrink-0 text-yellow-600" />
                  <span>Break tasks into smaller steps and focus on one thing at a time.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
