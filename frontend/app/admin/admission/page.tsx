"use client"

import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  GraduationCap, 
  BookOpen, 
  MessageSquare, 
  Calendar, 
  Flag, 
  Tag, 
  Edit3, 
  Save, 
  X, 
  Plus,
  Search,
  Filter,
  MoreVertical,
  Clock,
  AlertCircle,
  CheckCircle,
  Users,
  MapPin,
  Star
} from 'lucide-react';

const AdmissionLeadCRM = () => {
  const [leadData, setLeadData] = useState({
    student_full_name: "Arun Kumar",
    email: "arun.kumar@example.com",
    phone_number: "9876543210",
    preferred_program: "B.Sc Computer Science",
    highest_education_level: "12th Grade",
    additional_information: "Interested in hostel facilities.",
    lead_status: "New",
    lead_source: "Website Form",
    assigned_to: "Admissions Officer - Priya",
    call_notes: "Initial inquiry made, very interested in IT stream.",
    call_status: "Pending",
    follow_up_date: "2025-05-10T10:00:00Z",
    remarks: "Follow up for document submission.",
    priority_level: "High",
    last_contacted: "2025-05-05T14:30:00Z",
    next_action: "Schedule campus tour",
    report_tags: ["IT", "Hostel", "High Priority"]
  });

  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  interface LeadData {
    student_full_name: string;
    email: string;
    phone_number: string;
    preferred_program: string;
    highest_education_level: string;
    additional_information: string;
    lead_status: string;
    lead_source: string;
    assigned_to: string;
    call_notes: string;
    call_status: string;
    follow_up_date: string;
    remarks: string;
    priority_level: string;
    last_contacted: string;
    next_action: string;
    report_tags: string[];
  }

  type StatusType = 'new' | 'contacted' | 'qualified' | 'converted' | 'lost' | string;

  const getStatusColor = (status: StatusType): string => {
    switch (status.toLowerCase()) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'contacted': return 'bg-yellow-100 text-yellow-800';
      case 'qualified': return 'bg-green-100 text-green-800';
      case 'converted': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  interface PriorityColorMap {
    [key: string]: string;
  }

  const getPriorityColor = (priority: string): string => {
    switch (priority.toLowerCase()) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  interface FormatDateOptions {
    year: 'numeric';
    month: 'short';
    day: 'numeric';
    hour: '2-digit';
    minute: '2-digit';
  }

  const formatDate = (dateString: string, options?: FormatDateOptions): string => {
    return new Date(dateString).toLocaleDateString('en-US', options ?? {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  interface HandleInputChange {
    (field: keyof LeadData, value: string | string[]): void;
  }

  const handleInputChange: HandleInputChange = (field, value) => {
    setLeadData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to your backend
    console.log('Saved lead data:', leadData);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      {/* <div className="bg-white shadow-sm border-b border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <GraduationCap className="h-8 w-8 text-orange-500" />
                <h1 className="text-xl font-bold text-gray-900">Engineering College CRM</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Filter className="h-5 w-5" />
              </button>
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">PK</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Lead Header */}
        <div className="bg-white rounded-xl shadow-lg border border-orange-200 overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4">
            <div className="flex justify-between items-start">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <User className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{leadData.student_full_name}</h2>
                  <p className="text-orange-100">{leadData.preferred_program}</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(leadData.lead_status)}`}>
                      {leadData.lead_status}
                    </span>
                    <div className="flex items-center text-orange-100">
                      <Flag className={`h-4 w-4 mr-1 ${getPriorityColor(leadData.priority_level)}`} />
                      <span className="text-sm">{leadData.priority_level} Priority</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                {isEditing ? (
                  <>
                    <button
                      onClick={handleSave}
                      className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors"
                    >
                      <Save className="h-5 w-5 text-white" />
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors"
                    >
                      <X className="h-5 w-5 text-white" />
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors"
                  >
                    <Edit3 className="h-5 w-5 text-white" />
                  </button>
                )}
                <button className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors">
                  <MoreVertical className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-gray-50">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                {new Date(leadData.last_contacted).toLocaleDateString()}
              </div>
              <div className="text-sm text-gray-600">Last Contacted</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{leadData.lead_source}</div>
              <div className="text-sm text-gray-600">Lead Source</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{leadData.call_status}</div>
              <div className="text-sm text-gray-600">Call Status</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{leadData.report_tags.length}</div>
              <div className="text-sm text-gray-600">Active Tags</div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-lg border border-orange-200 mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'overview', label: 'Overview', icon: User },
                { id: 'communication', label: 'Communication', icon: MessageSquare },
                { id: 'timeline', label: 'Timeline', icon: Clock },
                { id: 'documents', label: 'Documents', icon: BookOpen }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-orange-500 text-orange-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                    <User className="h-5 w-5 mr-2 text-orange-500" />
                    Personal Information
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={leadData.student_full_name}
                          onChange={(e) => handleInputChange('student_full_name', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                      ) : (
                        <p className="text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">{leadData.student_full_name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      {isEditing ? (
                        <input
                          type="email"
                          value={leadData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                      ) : (
                        <div className="flex items-center space-x-2 text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">
                          <Mail className="h-4 w-4 text-orange-500" />
                          <span>{leadData.email}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      {isEditing ? (
                        <input
                          type="tel"
                          value={leadData.phone_number}
                          onChange={(e) => handleInputChange('phone_number', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                      ) : (
                        <div className="flex items-center space-x-2 text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">
                          <Phone className="h-4 w-4 text-orange-500" />
                          <span>{leadData.phone_number}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Program</label>
                      {isEditing ? (
                        <select
                          value={leadData.preferred_program}
                          onChange={(e) => handleInputChange('preferred_program', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        >
                          <option>B.Tech Computer Science</option>
                          <option>B.Tech Electronics</option>
                          <option>B.Tech Mechanical</option>
                          <option>B.Tech Civil</option>
                          <option>B.Sc Computer Science</option>
                        </select>
                      ) : (
                        <div className="flex items-center space-x-2 text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">
                          <GraduationCap className="h-4 w-4 text-orange-500" />
                          <span>{leadData.preferred_program}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Education Level</label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={leadData.highest_education_level}
                          onChange={(e) => handleInputChange('highest_education_level', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                      ) : (
                        <p className="text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">{leadData.highest_education_level}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Lead Management */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                    <Flag className="h-5 w-5 mr-2 text-orange-500" />
                    Lead Management
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Lead Status</label>
                      {isEditing ? (
                        <select
                          value={leadData.lead_status}
                          onChange={(e) => handleInputChange('lead_status', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        >
                          <option>New</option>
                          <option>Contacted</option>
                          <option>Qualified</option>
                          <option>Converted</option>
                          <option>Lost</option>
                        </select>
                      ) : (
                        <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(leadData.lead_status)}`}>
                          {leadData.lead_status}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Assigned To</label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={leadData.assigned_to}
                          onChange={(e) => handleInputChange('assigned_to', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                      ) : (
                        <div className="flex items-center space-x-2 text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">
                          <Users className="h-4 w-4 text-orange-500" />
                          <span>{leadData.assigned_to}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Priority Level</label>
                      {isEditing ? (
                        <select
                          value={leadData.priority_level}
                          onChange={(e) => handleInputChange('priority_level', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        >
                          <option>High</option>
                          <option>Medium</option>
                          <option>Low</option>
                        </select>
                      ) : (
                        <div className={`flex items-center space-x-2 ${getPriorityColor(leadData.priority_level)}`}>
                          <Flag className="h-4 w-4" />
                          <span className="font-medium">{leadData.priority_level}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Follow-up Date</label>
                      {isEditing ? (
                        <input
                          type="datetime-local"
                          value={leadData.follow_up_date.slice(0, 16)}
                          onChange={(e) => handleInputChange('follow_up_date', e.target.value + ':00Z')}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                      ) : (
                        <div className="flex items-center space-x-2 text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">
                          <Calendar className="h-4 w-4 text-orange-500" />
                          <span>{formatDate(leadData.follow_up_date)}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Next Action</label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={leadData.next_action}
                          onChange={(e) => handleInputChange('next_action', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                      ) : (
                        <p className="text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">{leadData.next_action}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
                      <div className="flex flex-wrap gap-2">
                        {leadData.report_tags.map((tag, index) => (
                          <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                        {isEditing && (
                          <button className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                            <Plus className="h-3 w-3 mr-1" />
                            Add Tag
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'communication' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">Communication History</h3>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                    <Plus className="h-4 w-4" />
                    <span>Add Note</span>
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium text-gray-900">Call Notes</span>
                          <span className="text-sm text-gray-500">{formatDate(leadData.last_contacted)}</span>
                        </div>
                        {isEditing ? (
                          <textarea
                            value={leadData.call_notes}
                            onChange={(e) => handleInputChange('call_notes', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            rows={3}
                          />
                        ) : (
                          <p className="text-gray-700">{leadData.call_notes}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <AlertCircle className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium text-gray-900">Remarks</span>
                          <span className="text-sm text-gray-500">System Generated</span>
                        </div>
                        {isEditing ? (
                          <textarea
                            value={leadData.remarks}
                            onChange={(e) => handleInputChange('remarks', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            rows={2}
                          />
                        ) : (
                          <p className="text-gray-700">{leadData.remarks}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium text-gray-900">Additional Information</span>
                          <span className="text-sm text-gray-500">Student Provided</span>
                        </div>
                        {isEditing ? (
                          <textarea
                            value={leadData.additional_information}
                            onChange={(e) => handleInputChange('additional_information', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            rows={2}
                          />
                        ) : (
                          <p className="text-gray-700">{leadData.additional_information}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'timeline' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Activity Timeline</h3>
                
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                  
                  <div className="space-y-6">
                    <div className="relative flex items-start space-x-4">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center relative z-10">
                        <Star className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1 bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-900">Lead Created</h4>
                          <span className="text-sm text-gray-500">{formatDate(leadData.last_contacted)}</span>
                        </div>
                        <p className="text-gray-600">New admission inquiry received from {leadData.lead_source}</p>
                      </div>
                    </div>
                    
                    <div className="relative flex items-start space-x-4">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center relative z-10">
                        <Phone className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1 bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-900">Initial Contact</h4>
                          <span className="text-sm text-gray-500">{formatDate(leadData.last_contacted)}</span>
                        </div>
                        <p className="text-gray-600">{leadData.call_notes}</p>
                      </div>
                    </div>
                    
                    <div className="relative flex items-start space-x-4">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center relative z-10">
                        <Calendar className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1 bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-900">Follow-up Scheduled</h4>
                          <span className="text-sm text-gray-500">Upcoming</span>
                        </div>
                        <p className="text-gray-600">Next action: {leadData.next_action} on {formatDate(leadData.follow_up_date)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'documents' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">Documents</h3>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                    <Plus className="h-4 w-4" />
                    <span>Upload Document</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h4 className="font-medium text-gray-900 mb-2">Academic Transcripts</h4>
                    <p className="text-sm text-gray-600 mb-4">Upload 12th grade marksheets</p>
                    <button className="text-orange-500 hover:text-orange-600 text-sm font-medium">
                      Upload Files
                    </button>
                  </div>

                  <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h4 className="font-medium text-gray-900 mb-2">Certificates</h4>
                    <p className="text-sm text-gray-600 mb-4">Upload extracurricular/activity certificates</p>
                    <button className="text-orange-500 hover:text-orange-600 text-sm font-medium">
                      Upload Files
                    </button>
                  </div>
                  <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h4 className="font-medium text-gray-900 mb-2">Passport Size Photo</h4>
                    <p className="text-sm text-gray-600 mb-4">Upload student photograph</p>
                    <button className="text-orange-500 hover:text-orange-600 text-sm font-medium">
                      Upload Files
                    </button>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-medium text-gray-900 mb-4">Uploaded Documents</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3">
                      <div className="flex items-center space-x-3">
                        <BookOpen className="h-5 w-5 text-gray-500" />
                        <span className="text-gray-800">12th_Marksheet.pdf</span>
                        <span className="text-xs text-gray-500">2.4 MB</span>
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-blue-500 hover:text-blue-600">
                          View
                        </button>
                        <button className="text-red-500 hover:text-red-600">
                          Delete
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3">
                      <div className="flex items-center space-x-3">
                        <BookOpen className="h-5 w-5 text-gray-500" />
                        <span className="text-gray-800">Sports_Certificate.jpg</span>
                        <span className="text-xs text-gray-500">1.2 MB</span>
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-blue-500 hover:text-blue-600">
                          View
                        </button>
                        <button className="text-red-500 hover:text-red-600">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionLeadCRM;