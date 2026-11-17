import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import {
  UploadCloud,
  FileText,
  X,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  AlertCircle,
} from 'lucide-react';
import {
  BUDGET_RANGES,
  DESIGN_STYLES,
  PROPERTY_TYPES,
  SERVICES_LIST,
  STUDIO_INFO,
} from '../data/studioData';

interface UploadedReference {
  id: string;
  name: string;
  sizeLabel: string;
  previewUrl?: string;
}

interface ConsultationFormProps {
  preselectedService?: string | null;
  preselectedStyle?: string | null;
}

interface FormValues {
  fullName: string;
  phone: string;
  email: string;
  propertyType: string;
  propertyLocation: string;
  areaSqFt: string;
  designStyle: string;
  servicesRequired: string[];
  estimatedBudget: string;
  startDate: string;
  requirements: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function ConsultationForm({
  preselectedService,
  preselectedStyle,
}: ConsultationFormProps) {
  const [values, setValues] = useState<FormValues>({
    fullName: '',
    phone: '',
    email: '',
    propertyType: PROPERTY_TYPES[0],
    propertyLocation: '',
    areaSqFt: '',
    designStyle: DESIGN_STYLES[0],
    servicesRequired: ['Residential Interior Design'],
    estimatedBudget: BUDGET_RANGES[1],
    startDate: '',
    requirements: '',
  });

  const [uploads, setUploads] = useState<UploadedReference[]>([]);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedSummary, setSubmittedSummary] = useState<FormValues | null>(
    null
  );

  useEffect(() => {
    if (!preselectedService && !preselectedStyle) return;
    setValues((prev) => ({
      ...prev,
      designStyle:
        preselectedStyle &&
        (DESIGN_STYLES as readonly string[]).includes(preselectedStyle)
          ? preselectedStyle
          : prev.designStyle,
      servicesRequired: preselectedService
        ? Array.from(new Set([...prev.servicesRequired, preselectedService]))
        : prev.servicesRequired,
    }));
    setSubmittedSummary(null);
  }, [preselectedService, preselectedStyle]);

  const toggleService = (title: string) => {
    setValues((prev) => {
      const exists = prev.servicesRequired.includes(title);
      const nextServices = exists
        ? prev.servicesRequired.filter((s) => s !== title)
        : [...prev.servicesRequired, title];
      return { ...prev, servicesRequired: nextServices };
    });
    if (errors.servicesRequired) {
      setErrors((prev) => ({ ...prev, servicesRequired: undefined }));
    }
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (!fileList) return;

    const newFiles: UploadedReference[] = Array.from(fileList).map((file) => {
      const isImage = file.type.startsWith('image/');
      return {
        id: `${file.name}-${file.size}-${Date.now()}`,
        name: file.name,
        sizeLabel: formatBytes(file.size),
        previewUrl: isImage ? URL.createObjectURL(file) : undefined,
      };
    });

    setUploads((prev) => [...prev, ...newFiles].slice(0, 6));
    e.target.value = '';
  };

  const removeUpload = (id: string) => {
    setUploads((prev) => {
      const target = prev.find((f) => f.id === id);
      if (target?.previewUrl) URL.revokeObjectURL(target.previewUrl);
      return prev.filter((f) => f.id !== id);
    });
  };

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!values.fullName.trim() || values.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name.';
    }

    const digitsOnly = values.phone.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      nextErrors.phone = 'Please enter a valid 10-digit phone or WhatsApp number.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(values.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!values.propertyLocation.trim()) {
      nextErrors.propertyLocation = 'Please enter the property location or neighborhood.';
    }

    if (values.areaSqFt.trim() && Number(values.areaSqFt) <= 0) {
      nextErrors.areaSqFt = 'Area must be a positive number in sq. ft.';
    }

    if (values.servicesRequired.length === 0) {
      nextErrors.servicesRequired = 'Select at least one service required.';
    }

    return nextErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setSubmittedSummary(values);
  };

  const buildWhatsAppSummaryUrl = (data: FormValues) => {
    const lines = [
      `Hello ELITE DECOR Interior Company,`,
      `I would like to book a free design consultation:`,
      `• Name: ${data.fullName}`,
      `• Phone: ${data.phone}`,
      `• Email: ${data.email}`,
      `• Property: ${data.propertyType} in ${data.propertyLocation}`,
      data.areaSqFt ? `• Area: ${data.areaSqFt} Sq. Ft.` : '',
      `• Preferred Style: ${data.designStyle}`,
      `• Services: ${data.servicesRequired.join(', ')}`,
      `• Budget: ${data.estimatedBudget}`,
      data.startDate ? `• Target Start: ${data.startDate}` : '',
      data.requirements ? `• Notes: ${data.requirements}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    return `https://wa.me/${STUDIO_INFO.contact.whatsappRaw}?text=${encodeURIComponent(
      lines
    )}`;
  };

  return (
    <section
      id="consultation"
      className="border-t border-[#E2DDD3] bg-[#F7F4EF] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Guidance Column */}
          <div className="lg:col-span-4">
            <div className="mb-2.5 flex items-center gap-2 text-xs font-medium tracking-wide text-[#8D6B2E]">
              <span>Complimentary Session</span>
              <span aria-hidden="true">·</span>
              <span>45-Minute Studio Review</span>
            </div>

            <h2 className="font-display text-balance text-3xl leading-[1.12] font-semibold tracking-tight text-[#191816] sm:text-4xl">
              Book Your Free Design Consultation.
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-[#4A463F] sm:text-base">
              Share your floor plan, spatial goals, and target timeline. Our senior
              design architect will prepare tailored layout ideas, material directions,
              and an initial budget estimate.
            </p>

            <div className="mt-8 divide-y divide-[#E2DDD3] border-y border-[#E2DDD3] text-sm">
              <div className="py-4">
                <div className="font-semibold text-[#191816]">
                  01. Floor Plan &amp; Space Audit
                </div>
                <p className="mt-1 text-xs leading-relaxed text-[#5A554E]">
                  Review furniture flow, storage opportunities, and natural daylighting.
                </p>
              </div>
              <div className="py-4">
                <div className="font-semibold text-[#191816]">
                  02. Curated Material Palette
                </div>
                <p className="mt-1 text-xs leading-relaxed text-[#5A554E]">
                  Explore wood veneers, BWP laminates, stones, and lighting fixtures.
                </p>
              </div>
              <div className="py-4">
                <div className="font-semibold text-[#191816]">
                  03. Transparent Cost Roadmap
                </div>
                <p className="mt-1 text-xs leading-relaxed text-[#5A554E]">
                  Receive an accurate phase-wise budget and milestone schedule.
                </p>
              </div>
            </div>
          </div>

          {/* Right Consultation Form Card */}
          <div className="lg:col-span-8">
            {submittedSummary ? (
              <div
                role="status"
                className="rounded-sm border border-[#D4CCC0] bg-[#FAF8F4] p-8 sm:p-10"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2
                    className="mt-1 h-7 w-7 shrink-0 text-[#2E6F40]"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-serif text-3xl font-semibold text-[#191816]">
                      Consultation Request Received
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#4A463F]">
                      Thank you, <strong>{submittedSummary.fullName}</strong>. Our
                      Edappally design team has logged your project inquiry for{' '}
                      <strong>
                        {submittedSummary.propertyType} in{' '}
                        {submittedSummary.propertyLocation}
                      </strong>{' '}
                      and will reach out on{' '}
                      <strong className="tabular-nums">{submittedSummary.phone}</strong>{' '}
                      within one business day.
                    </p>
                  </div>
                </div>

                <dl className="mt-7 grid grid-cols-1 gap-4 border-y border-[#E2DDD3] py-6 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="text-xs text-[#5A554E]">Preferred Style</dt>
                    <dd className="mt-0.5 font-medium text-[#191816]">
                      {submittedSummary.designStyle}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-[#5A554E]">Estimated Budget</dt>
                    <dd className="mt-0.5 font-medium text-[#191816] tabular-nums">
                      {submittedSummary.estimatedBudget}
                    </dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-xs text-[#5A554E]">Selected Services</dt>
                    <dd className="mt-0.5 font-medium text-[#191816]">
                      {submittedSummary.servicesRequired.join(' · ')}
                    </dd>
                  </div>
                  {uploads.length > 0 && (
                    <div className="sm:col-span-2">
                      <dt className="text-xs text-[#5A554E]">Attached Files</dt>
                      <dd className="mt-0.5 font-medium text-[#191816]">
                        {uploads.map((u) => u.name).join(', ')}
                      </dd>
                    </div>
                  )}
                </dl>

                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <a
                    href={buildWhatsAppSummaryUrl(submittedSummary)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[46px] items-center gap-2 rounded-sm bg-[#191816] px-6 py-3 text-xs font-semibold text-[#F7F4EF] transition-colors hover:bg-[#33302B]"
                  >
                    <MessageCircle className="h-4 w-4 text-[#D4B475]" aria-hidden="true" />
                    <span>Send Brief via WhatsApp Now</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setSubmittedSummary(null)}
                    className="min-h-[46px] rounded-sm border border-[#D4CCC0] px-5 py-3 text-xs font-semibold text-[#191816] transition-colors hover:border-[#191816]"
                  >
                    Edit Consultation Details
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-sm border border-[#E2DDD3] bg-[#FAF8F4] p-6 sm:p-9"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold text-[#191816]"
                    >
                      Full Name <span className="text-[#9E2A2B]">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      placeholder="e.g., Arjun Menon"
                      value={values.fullName}
                      onChange={(e) => {
                        setValues({ ...values, fullName: e.target.value });
                        if (errors.fullName)
                          setErrors({ ...errors, fullName: undefined });
                      }}
                      className="mt-1.5 min-h-[44px] w-full rounded-sm border border-[#D4CCC0] bg-white px-3.5 py-2.5 text-sm text-[#191816] placeholder:text-[#8E877D] focus:border-[#8D6B2E] focus:outline-none"
                    />
                    {errors.fullName && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#9E2A2B]">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold text-[#191816]"
                    >
                      Phone Number <span className="text-[#9E2A2B]">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={values.phone}
                      onChange={(e) => {
                        setValues({ ...values, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      className="mt-1.5 min-h-[44px] w-full rounded-sm border border-[#D4CCC0] bg-white px-3.5 py-2.5 text-sm text-[#191816] tabular-nums placeholder:text-[#8E877D] focus:border-[#8D6B2E] focus:outline-none"
                    />
                    {errors.phone && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#9E2A2B]">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-[#191816]"
                    >
                      Email Address <span className="text-[#9E2A2B]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={values.email}
                      onChange={(e) => {
                        setValues({ ...values, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      className="mt-1.5 min-h-[44px] w-full rounded-sm border border-[#D4CCC0] bg-white px-3.5 py-2.5 text-sm text-[#191816] placeholder:text-[#8E877D] focus:border-[#8D6B2E] focus:outline-none"
                    />
                    {errors.email && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#9E2A2B]">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Property Type */}
                  <div>
                    <label
                      htmlFor="propertyType"
                      className="block text-xs font-semibold text-[#191816]"
                    >
                      Property Type
                    </label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      value={values.propertyType}
                      onChange={(e) =>
                        setValues({ ...values, propertyType: e.target.value })
                      }
                      className="mt-1.5 min-h-[44px] w-full rounded-sm border border-[#D4CCC0] bg-white px-3.5 py-2.5 text-sm text-[#191816] focus:border-[#8D6B2E] focus:outline-none"
                    >
                      {PROPERTY_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Property Location */}
                  <div>
                    <label
                      htmlFor="propertyLocation"
                      className="block text-xs font-semibold text-[#191816]"
                    >
                      Property Location <span className="text-[#9E2A2B]">*</span>
                    </label>
                    <input
                      id="propertyLocation"
                      name="propertyLocation"
                      type="text"
                      required
                      placeholder="e.g., Edappally, Kochi"
                      value={values.propertyLocation}
                      onChange={(e) => {
                        setValues({ ...values, propertyLocation: e.target.value });
                        if (errors.propertyLocation)
                          setErrors({ ...errors, propertyLocation: undefined });
                      }}
                      className="mt-1.5 min-h-[44px] w-full rounded-sm border border-[#D4CCC0] bg-white px-3.5 py-2.5 text-sm text-[#191816] placeholder:text-[#8E877D] focus:border-[#8D6B2E] focus:outline-none"
                    />
                    {errors.propertyLocation && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#9E2A2B]">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.propertyLocation}</span>
                      </p>
                    )}
                  </div>

                  {/* Approximate Property Area */}
                  <div>
                    <label
                      htmlFor="areaSqFt"
                      className="block text-xs font-semibold text-[#191816]"
                    >
                      Approximate Property Area (Sq. Ft.)
                    </label>
                    <input
                      id="areaSqFt"
                      name="areaSqFt"
                      type="number"
                      min="100"
                      placeholder="e.g., 2400"
                      value={values.areaSqFt}
                      onChange={(e) => {
                        setValues({ ...values, areaSqFt: e.target.value });
                        if (errors.areaSqFt)
                          setErrors({ ...errors, areaSqFt: undefined });
                      }}
                      className="mt-1.5 min-h-[44px] w-full rounded-sm border border-[#D4CCC0] bg-white px-3.5 py-2.5 text-sm text-[#191816] tabular-nums placeholder:text-[#8E877D] focus:border-[#8D6B2E] focus:outline-none"
                    />
                    {errors.areaSqFt && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#9E2A2B]">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.areaSqFt}</span>
                      </p>
                    )}
                  </div>

                  {/* Preferred Interior Design Style */}
                  <div>
                    <label
                      htmlFor="designStyle"
                      className="block text-xs font-semibold text-[#191816]"
                    >
                      Preferred Interior Design Style
                    </label>
                    <select
                      id="designStyle"
                      name="designStyle"
                      value={values.designStyle}
                      onChange={(e) =>
                        setValues({ ...values, designStyle: e.target.value })
                      }
                      className="mt-1.5 min-h-[44px] w-full rounded-sm border border-[#D4CCC0] bg-white px-3.5 py-2.5 text-sm text-[#191816] focus:border-[#8D6B2E] focus:outline-none"
                    >
                      {DESIGN_STYLES.map((style) => (
                        <option key={style} value={style}>
                          {style}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Estimated Budget */}
                  <div>
                    <label
                      htmlFor="estimatedBudget"
                      className="block text-xs font-semibold text-[#191816]"
                    >
                      Estimated Budget
                    </label>
                    <select
                      id="estimatedBudget"
                      name="estimatedBudget"
                      value={values.estimatedBudget}
                      onChange={(e) =>
                        setValues({ ...values, estimatedBudget: e.target.value })
                      }
                      className="mt-1.5 min-h-[44px] w-full rounded-sm border border-[#D4CCC0] bg-white px-3.5 py-2.5 text-sm text-[#191816] tabular-nums focus:border-[#8D6B2E] focus:outline-none"
                    >
                      {BUDGET_RANGES.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Project Start Date */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="startDate"
                      className="block text-xs font-semibold text-[#191816]"
                    >
                      Preferred Project Start Date
                    </label>
                    <input
                      id="startDate"
                      name="startDate"
                      type="date"
                      value={values.startDate}
                      onChange={(e) =>
                        setValues({ ...values, startDate: e.target.value })
                      }
                      className="mt-1.5 min-h-[44px] w-full rounded-sm border border-[#D4CCC0] bg-white px-3.5 py-2.5 text-sm text-[#191816] tabular-nums focus:border-[#8D6B2E] focus:outline-none sm:max-w-xs"
                    />
                  </div>

                  {/* Services Required (Multi-select Interactive Controls) */}
                  <div className="sm:col-span-2">
                    <span className="block text-xs font-semibold text-[#191816]">
                      Services Required <span className="text-[#9E2A2B]">*</span>
                    </span>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {SERVICES_LIST.map((srv) => {
                        const selected = values.servicesRequired.includes(srv.title);
                        return (
                          <button
                            key={srv.id}
                            type="button"
                            aria-pressed={selected}
                            onClick={() => toggleService(srv.title)}
                            className={`min-h-[38px] rounded-sm px-3.5 py-1.5 text-xs font-medium whitespace-nowrap transition-colors duration-150 ${
                              selected
                                ? 'bg-[#191816] text-[#F7F4EF]'
                                : 'border border-[#D4CCC0] bg-white text-[#4A463F] hover:border-[#8D6B2E] hover:text-[#191816]'
                            }`}
                          >
                            {srv.title}
                          </button>
                        );
                      })}
                    </div>
                    {errors.servicesRequired && (
                      <p className="mt-2 flex items-center gap-1.5 text-xs text-[#9E2A2B]">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.servicesRequired}</span>
                      </p>
                    )}
                  </div>

                  {/* Additional Requirements */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="requirements"
                      className="block text-xs font-semibold text-[#191816]"
                    >
                      Additional Requirements &amp; Vision
                    </label>
                    <textarea
                      id="requirements"
                      name="requirements"
                      rows={3}
                      placeholder="Share room priorities, wood or stone preferences, or specific storage needs..."
                      value={values.requirements}
                      onChange={(e) =>
                        setValues({ ...values, requirements: e.target.value })
                      }
                      className="mt-1.5 w-full rounded-sm border border-[#D4CCC0] bg-white px-3.5 py-2.5 text-sm text-[#191816] placeholder:text-[#8E877D] focus:border-[#8D6B2E] focus:outline-none"
                    />
                  </div>

                  {/* Reference Images or Floor Plan Upload */}
                  <div className="sm:col-span-2">
                    <span className="block text-xs font-semibold text-[#191816]">
                      Reference Images or Floor Plan Upload (Optional)
                    </span>
                    <label
                      htmlFor="floorplanUpload"
                      className="mt-1.5 flex cursor-pointer flex-col items-center justify-center rounded-sm border border-dashed border-[#C7BEB0] bg-white px-5 py-6 text-center transition-colors hover:border-[#8D6B2E] hover:bg-[#FAF8F4]"
                    >
                      <UploadCloud
                        className="h-6 w-6 text-[#8D6B2E]"
                        aria-hidden="true"
                      />
                      <span className="mt-2 text-xs font-medium text-[#191816]">
                        Click to upload floor plans (PDF, JPG, PNG) or interior inspiration
                      </span>
                      <span className="mt-0.5 text-[11px] text-[#5A554E]">
                        Up to 6 files
                      </span>
                      <input
                        id="floorplanUpload"
                        type="file"
                        multiple
                        accept="image/*,.pdf,.dwg"
                        onChange={handleFileUpload}
                        className="sr-only"
                      />
                    </label>

                    {uploads.length > 0 && (
                      <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                        {uploads.map((file) => (
                          <li
                            key={file.id}
                            className="flex items-center justify-between gap-3 rounded-sm border border-[#E2DDD3] bg-white p-2.5"
                          >
                            <div className="flex min-w-0 items-center gap-2.5">
                              {file.previewUrl ? (
                                <img
                                  src={file.previewUrl}
                                  alt={file.name}
                                  className="h-10 w-10 shrink-0 rounded-sm object-cover"
                                />
                              ) : (
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#EFEAE1] text-[#8D6B2E]">
                                  <FileText className="h-4 w-4" aria-hidden="true" />
                                </span>
                              )}
                              <div className="min-w-0">
                                <div className="truncate text-xs font-medium text-[#191816]">
                                  {file.name}
                                </div>
                                <div className="text-[11px] text-[#5A554E] tabular-nums">
                                  {file.sizeLabel}
                                </div>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeUpload(file.id)}
                              aria-label={`Remove ${file.name}`}
                              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm text-[#5A554E] hover:bg-[#EFEAE1] hover:text-[#191816]"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-7 flex flex-col justify-between gap-4 border-t border-[#E2DDD3] pt-6 sm:flex-row sm:items-center">
                  <p className="text-xs text-[#5A554E]">
                    100% complimentary consultation. Zero obligation.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 rounded-sm bg-[#191816] px-7 py-3.5 text-sm font-semibold text-[#F7F4EF] whitespace-nowrap transition-colors duration-150 hover:bg-[#33302B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8D6B2E]"
                  >
                    <span>Book a Free Consultation</span>
                    <ArrowRight className="h-4 w-4 text-[#D4B475]" aria-hidden="true" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
