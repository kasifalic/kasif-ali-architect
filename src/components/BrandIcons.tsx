import React from 'react';

// This file contains SVG icons for various tech brands
// Each icon is a React component that takes width, height, and className props

interface IconProps {
  width?: number;
  height?: number;
  className?: string;
}

export const AWSIcon: React.FC<IconProps> = ({ width = 24, height = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.75 11.35a4.32 4.32 0 0 0-.24-1.3 2.57 2.57 0 0 0-.52-.91 2.16 2.16 0 0 0-.75-.55 2.4 2.4 0 0 0-.93-.19 2.13 2.13 0 0 0-1.25.39 2.49 2.49 0 0 0-.86 1 3.92 3.92 0 0 0-.39 1.56c0 .17 0 .35.05.53a4.24 4.24 0 0 0 .15.66 3.1 3.1 0 0 0 .3.66 1.83 1.83 0 0 0 .52.55 1.42 1.42 0 0 0 .76.22 1.71 1.71 0 0 0 .92-.29 2.53 2.53 0 0 0 .8-.81 3.5 3.5 0 0 0 .44-1.52zm5.25-.61a6.9 6.9 0 0 1-.37 2.28 5.9 5.9 0 0 1-1 1.8 4.37 4.37 0 0 1-1.58 1.2 4.55 4.55 0 0 1-1.94.42 3.49 3.49 0 0 1-1.54-.34 3.41 3.41 0 0 1-1.18-1h-.05l-.3 1.13H15.6v-5.72l-.09-5.07h1.32l.3 1.25h.05a3.83 3.83 0 0 1 1.26-1.13 3.3 3.3 0 0 1 1.57-.37 3.37 3.37 0 0 1 1.64.42 4.13 4.13 0 0 1 1.39 1.21 6.12 6.12 0 0 1 1 1.91 7.58 7.58 0 0 1 .36 2.41zM12 14.31a4.5 4.5 0 0 0-.24-1.34 2 2 0 0 0-.6-.83 1.24 1.24 0 0 0-.8-.29 1.54 1.54 0 0 0-1.13.48 2.91 2.91 0 0 0-.75 1.25 5.83 5.83 0 0 0-.26 1.79 6 6 0 0 0 .21 1.7 2.73 2.73 0 0 0 .65 1.2 1.48 1.48 0 0 0 1.09.46 1.42 1.42 0 0 0 .88-.3 2.31 2.31 0 0 0 .67-.87 4.87 4.87 0 0 0 .28-1.25zm0-10.26v5.55l.09 5.57h-1.27l-.3-1.32h-.05a2.9 2.9 0 0 1-1.13 1.14 3.28 3.28 0 0 1-1.62.39 2.91 2.91 0 0 1-1.56-.44 3.94 3.94 0 0 1-1.23-1.23 6.07 6.07 0 0 1-.81-1.9 9.62 9.62 0 0 1-.28-2.4 7.56 7.56 0 0 1 .3-2.19 5.68 5.68 0 0 1 .85-1.76 4 4 0 0 1 1.34-1.18 3.62 3.62 0 0 1 1.77-.43 3.33 3.33 0 0 1 1.52.34 3.24 3.24 0 0 1 1.13 1h.05l.3-1.14z"/>
  </svg>
);

export const AzureIcon: React.FC<IconProps> = ({ width = 24, height = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M5.483 21.3H24L14.025 4.013l-3.038 8.347 5.836 6.938L5.483 21.3zM13.23 2.7L6.105 8.677 0 19.253h5.505l7.725-16.553z"/>
  </svg>
);

export const GCPIcon: React.FC<IconProps> = ({ width = 24, height = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 3.989c-.407 0-.817.095-1.197.278l-8.466 4.865c-.755.435-1.204 1.199-1.204 2.037v5.666c0 .837.449 1.602 1.204 2.037l8.466 4.865c.38.183.79.278 1.197.278s.817-.095 1.198-.278l8.465-4.865c.755-.435 1.204-1.2 1.204-2.037V11.17c0-.838-.449-1.602-1.204-2.037l-8.465-4.865c-.38-.183-.79-.278-1.198-.278zm-9.492 7.714l3.07 1.768 2.985-1.72 7.981-4.6-3.07-1.767-10.966 6.319zM12 5.25l3.463 1.992-3.463 1.992-3.462-1.992L12 5.25zm4.117 2.372l3.07 1.768v3.536l-3.07-1.768v-3.536zm-4.117 3.536l3.463 1.992v3.984L12 19.127l-3.462-2.01v-3.967l3.462-1.992zm-4.117-3.536v3.536l-3.07 1.768v-3.536l3.07-1.768zm-3.07 6.319l3.07 1.768v3.536l-3.07-1.768v-3.536zm8.234 1.768l3.07-1.768v3.536l-3.07 1.768v-3.536z"/>
  </svg>
);

export const CiscoIcon: React.FC<IconProps> = ({ width = 24, height = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2.4c-1.4 0-2.5 1.1-2.5 2.5v4.3c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5V4.9c0-1.4-1.1-2.5-2.5-2.5zm8.7 3.6c-1.4 0-2.5 1.1-2.5 2.5v4.3c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5V8.5c0-1.4-1.1-2.5-2.5-2.5zm-17.4 0c-1.4 0-2.5 1.1-2.5 2.5v4.3c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5V8.5c0-1.4-1.1-2.5-2.5-2.5zm13.1 7.2c-1.4 0-2.5 1.1-2.5 2.5v4.3c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5v-4.3c0-1.4-1.1-2.5-2.5-2.5zm-8.8 0c-1.4 0-2.5 1.1-2.5 2.5v4.3c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5v-4.3c0-1.4-1.1-2.5-2.5-2.5z"/>
  </svg>
);

export const VMwareIcon: React.FC<IconProps> = ({ width = 24, height = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M7.156 9.578c-.956 2.452-1.845 4.709-2.752 7.106h-.87C2.175 13.01 1.02 9.95 0 7.106h1.764c.696 2.122 1.479 4.453 2.088 6.574h.087c.566-1.948 1.305-4.366 2.001-6.574h1.65c.653 2.122 1.392 4.54 1.914 6.574h.087c.653-2.122 1.349-4.453 2.088-6.574h1.698c-1.001 2.844-2.11 5.904-3.393 9.578h-.87c-.913-2.397-1.802-4.654-2.666-7.106h-.087zm10.442 0c-1.914 0-3.48 1.304-3.48 3.6 0 2.122 1.305 3.6 3.35 3.6.87 0 1.567-.174 2.175-.479v-1.391c-.566.348-1.218.566-2.001.566-1.218 0-1.975-.74-1.975-2.296 0-1.435.74-2.296 1.975-2.296.783 0 1.435.218 2.001.566V9.97c-.566-.261-1.218-.392-2.045-.392zm-5.22 0c-1.914 0-3.48 1.304-3.48 3.6 0 2.122 1.305 3.6 3.35 3.6.87 0 1.567-.174 2.175-.479v-1.391c-.566.348-1.218.566-2.001.566-1.218 0-1.975-.74-1.975-2.296 0-1.435.74-2.296 1.975-2.296.783 0 1.435.218 2.001.566V9.97c-.566-.261-1.218-.392-2.045-.392z"/>
  </svg>
);

export const OktaIcon: React.FC<IconProps> = ({ width = 24, height = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 0C5.389 0 0 5.35 0 12s5.35 12 12 12 12-5.35 12-12S18.611 0 12 0zm0 18c-3.325 0-6-2.675-6-6s2.675-6 6-6 6 2.675 6 6-2.675 6-6 6z"/>
  </svg>
);

export const JiraIcon: React.FC<IconProps> = ({ width = 24, height = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005zm5.723-5.756H5.736a5.215 5.215 0 0 0 5.215 5.214h2.129v2.058a5.218 5.218 0 0 0 5.215 5.214V6.758a1.001 1.001 0 0 0-1.001-1.001zM23.013 0H11.455a5.215 5.215 0 0 0 5.215 5.215h2.129v2.057A5.215 5.215 0 0 0 24 12.483V1.005A1.001 1.001 0 0 0 23.013 0z"/>
  </svg>
);

export const NetAppIcon: React.FC<IconProps> = ({ width = 24, height = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25zm2.259 14.23h-4.518v-9.04h4.518v9.04z"/>
  </svg>
);

export const FortinetIcon: React.FC<IconProps> = ({ width = 24, height = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M19.5 12c0 4.142-3.358 7.5-7.5 7.5-4.142 0-7.5-3.358-7.5-7.5 0-4.142 3.358-7.5 7.5-7.5 4.142 0 7.5 3.358 7.5 7.5zm-7.5-9C6.71 3 2 7.71 2 13.5S6.71 24 12.5 24 23 19.29 23 13.5 18.29 3 12.5 3H12zm0 3c-4.142 0-7.5 3.358-7.5 7.5 0 4.142 3.358 7.5 7.5 7.5 4.142 0 7.5-3.358 7.5-7.5 0-4.142-3.358-7.5-7.5-7.5z"/>
  </svg>
);

export const SynologyIcon: React.FC<IconProps> = ({ width = 24, height = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-6h2v6zm3 0h-2v-8h2v8zm3 0h-2V8h2v8z"/>
  </svg>
);

// Generic cloud icon for other cloud providers
export const CloudIcon: React.FC<IconProps> = ({ width = 24, height = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
  </svg>
);

// Generic server icon for infrastructure providers
export const ServerIcon: React.FC<IconProps> = ({ width = 24, height = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M4 1h16c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2zm0 9h16c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2zm0 9h16c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2zM9 5h1V3H9v2zm0 9h1v-2H9v2zm0 9h1v-2H9v2zm-4-2h1v-2H5v2zm0-9h1V3H5v2zm0 9h1v-2H5v2z"/>
  </svg>
);

// Generic network icon for network providers
export const NetworkIcon: React.FC<IconProps> = ({ width = 24, height = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M17 16l-4-4V8.82C14.16 8.4 15 7.3 15 6c0-1.66-1.34-3-3-3S9 4.34 9 6c0 1.3.84 2.4 2 2.82V12l-4 4H3v5h5v-3.05l4-4.2 4 4.2V21h5v-5h-4z"/>
  </svg>
);

// Generic database icon for storage providers
export const DatabaseIcon: React.FC<IconProps> = ({ width = 24, height = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm0 2c3.87 0 6 1.5 6 2s-2.13 2-6 2-6-1.5-6-2 2.13-2 6-2zm0 16c-3.87 0-6-1.5-6-2V9.83c1.24.72 3.27 1.17 6 1.17s4.76-.45 6-1.17V19c0 .5-2.13 2-6 2z"/>
  </svg>
);

// Generic software icon for SaaS providers
export const SoftwareIcon: React.FC<IconProps> = ({ width = 24, height = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M21 2H3c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM3 4h10v16H3V4zm18 16h-6V4h6v16z"/>
  </svg>
);

// Map of brand names to their respective icons
export const brandIcons: Record<string, React.FC<IconProps>> = {
  'AWS': AWSIcon,
  'Azure': AzureIcon,
  'GCP': GCPIcon,
  'Digital Ocean': CloudIcon,
  'Linode': CloudIcon,
  'Cisco': CiscoIcon,
  'Dell': ServerIcon,
  'HPE': ServerIcon,
  'VMware': VMwareIcon,
  'Nutanix': ServerIcon,
  'Proxmox': ServerIcon,
  'Fortinet': FortinetIcon,
  'Juniper': NetworkIcon,
  'Meraki': NetworkIcon,
  'Sophos': NetworkIcon,
  'Ubiquiti': NetworkIcon,
  'Aruba': NetworkIcon,
  'NetApp': NetAppIcon,
  'Synology': SynologyIcon,
  'TrueNAS': DatabaseIcon,
  'Ceph': DatabaseIcon,
  'Hitachi': DatabaseIcon,
  'Okta': OktaIcon,
  'Jira': JiraIcon,
  'Intune': SoftwareIcon,
  'Jamf': SoftwareIcon,
  'Zoho': SoftwareIcon,
  'Manage Engine': SoftwareIcon
};

export default brandIcons;
