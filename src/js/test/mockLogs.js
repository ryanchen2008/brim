import Log from "../models/Log"

export const dns = () =>
  new Log(
    [
      "8",
      "dns",
      "1425565514.419939",
      "Cum4LVba3W3KNG6qa",
      "fe80::eef4:bbff:fe51:89ec",
      "5353",
      "ff02::fb",
      "5353",
      "udp",
      "0",
      "0.119484",
      "_ipp._tcp.local",
      "1",
      "C_INTERNET",
      "12",
      "PTR",
      "0",
      "NOERROR",
      "T",
      "F",
      "F",
      "F",
      "0",
      "_workstation._tcp.local,sniffer [ec:f4:bb:51:89:ec]._workstation._tcp.local",
      "4500.000000,4500.000000",
      "F"
    ],
    [
      {name: "_td", type: "int"},
      {name: "_path", type: "string"},
      {name: "ts", type: "time"},
      {name: "uid", type: "string"},
      {name: "id.orig_h", type: "addr"},
      {name: "id.orig_p", type: "port"},
      {name: "id.resp_h", type: "addr"},
      {name: "id.resp_p", type: "port"},
      {name: "proto", type: "enum"},
      {name: "trans_id", type: "count"},
      {name: "rtt", type: "interval"},
      {name: "query", type: "string"},
      {name: "qclass", type: "count"},
      {name: "qclass_name", type: "string"},
      {name: "qtype", type: "count"},
      {name: "qtype_name", type: "string"},
      {name: "rcode", type: "count"},
      {name: "rcode_name", type: "string"},
      {name: "AA", type: "bool"},
      {name: "TC", type: "bool"},
      {name: "RD", type: "bool"},
      {name: "RA", type: "bool"},
      {name: "Z", type: "count"},
      {name: "answers", type: "vector[string]"},
      {name: "TTLs", type: "vector[interval]"},
      {name: "rejected", type: "bool"}
    ]
  )

export const conn = () =>
  new Log(
    [
      "0",
      "conn",
      "1425612054.369843",
      "Cynwae4qh1GxM82hQ2",
      "192.168.0.50",
      "1900",
      "239.255.255.250",
      "1900",
      "udp",
      "-",
      "2.000293",
      "282",
      "0",
      "S0",
      "-",
      "-",
      "0",
      "D",
      "3",
      "366",
      "0",
      "0",
      "(empty)"
    ],
    [
      {name: "_td", type: "int"},
      {name: "_path", type: "string"},
      {name: "ts", type: "time"},
      {name: "uid", type: "string"},
      {name: "id.orig_h", type: "addr"},
      {name: "id.orig_p", type: "port"},
      {name: "id.resp_h", type: "addr"},
      {name: "id.resp_p", type: "port"},
      {name: "proto", type: "enum"},
      {name: "service", type: "string"},
      {name: "duration", type: "interval"},
      {name: "orig_bytes", type: "count"},
      {name: "resp_bytes", type: "count"},
      {name: "conn_state", type: "string"},
      {name: "local_orig", type: "bool"},
      {name: "local_resp", type: "bool"},
      {name: "missed_bytes", type: "count"},
      {name: "history", type: "string"},
      {name: "orig_pkts", type: "count"},
      {name: "orig_ip_bytes", type: "count"},
      {name: "resp_pkts", type: "count"},
      {name: "resp_ip_bytes", type: "count"},
      {name: "tunnel_parents", type: "set[string]"}
    ]
  )

export const ssl = () =>
  new Log(
    [
      "11",
      "ssl",
      "1425567047.054434",
      "C9B5J516zqcdF67oZg",
      "192.168.0.51",
      "56370",
      "80.239.174.117",
      "443",
      "TLSv12",
      "TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256",
      "secp256r1",
      "safebrowsing.google.com",
      "F",
      "-",
      "-",
      "T",
      "FPMCwkS9onVulXPqj,FCxNfg2sNI0B4oxhb9,FrDvM43FCiCtvKMXh",
      "(empty)",
      "CN=*.google.com,O=Google Inc,L=Mountain View,ST=California,C=US",
      "CN=Google Internet Authority G2,O=Google Inc,C=US",
      "-",
      "-"
    ],
    [
      {name: "_td", type: "int"},
      {name: "_path", type: "string"},
      {name: "ts", type: "time"},
      {name: "uid", type: "string"},
      {name: "id.orig_h", type: "addr"},
      {name: "id.orig_p", type: "port"},
      {name: "id.resp_h", type: "addr"},
      {name: "id.resp_p", type: "port"},
      {name: "version", type: "string"},
      {name: "cipher", type: "string"},
      {name: "curve", type: "string"},
      {name: "server_name", type: "string"},
      {name: "resumed", type: "bool"},
      {name: "last_alert", type: "string"},
      {name: "next_protocol", type: "string"},
      {name: "established", type: "bool"},
      {name: "cert_chain_fuids", type: "vector[string]"},
      {name: "client_cert_chain_fuids", type: "vector[string]"},
      {name: "subject", type: "string"},
      {name: "issuer", type: "string"},
      {name: "client_subject", type: "string"},
      {name: "client_issuer", type: "string"}
    ]
  )

export const http = () =>
  new Log(
    [
      "10",
      "http",
      "1425567042.047800",
      "CBQjjR1ZrY6LmUfzX5",
      "192.168.0.51",
      "60677",
      "91.189.89.240",
      "80",
      "1",
      "GET",
      "start.ubuntu.com",
      "/14.10/Google/?sourceid=hp",
      "-",
      "1.0",
      "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:33.0) Gecko/20100101 Firefox/33.0",
      "0",
      "6005",
      "200",
      "OK",
      "-",
      "-",
      "(empty)",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "FUPWLQXTNsTNvf33",
      "-",
      "text/html"
    ],
    [
      {name: "_td", type: "int"},
      {name: "_path", type: "string"},
      {name: "ts", type: "time"},
      {name: "uid", type: "string"},
      {name: "id.orig_h", type: "addr"},
      {name: "id.orig_p", type: "port"},
      {name: "id.resp_h", type: "addr"},
      {name: "id.resp_p", type: "port"},
      {name: "trans_depth", type: "count"},
      {name: "method", type: "string"},
      {name: "host", type: "string"},
      {name: "uri", type: "string"},
      {name: "referrer", type: "string"},
      {name: "version", type: "string"},
      {name: "user_agent", type: "string"},
      {name: "request_body_len", type: "count"},
      {name: "response_body_len", type: "count"},
      {name: "status_code", type: "count"},
      {name: "status_msg", type: "string"},
      {name: "info_code", type: "count"},
      {name: "info_msg", type: "string"},
      {name: "tags", type: "set[enum]"},
      {name: "username", type: "string"},
      {name: "password", type: "string"},
      {name: "proxied", type: "set[string]"},
      {name: "orig_fuids", type: "vector[string]"},
      {name: "orig_filenames", type: "vector[string]"},
      {name: "orig_mime_types", type: "vector[string]"},
      {name: "resp_fuids", type: "vector[string]"},
      {name: "resp_filenames", type: "vector[string]"},
      {name: "resp_mime_types", type: "vector[string]"}
    ]
  )

export const x509 = () =>
  new Log(
    [
      "13",
      "x509",
      "1425567047.116478",
      "FPMCwkS9onVulXPqj",
      "3",
      "20D8C6DD696DFD45",
      "CN=*.google.com,O=Google Inc,L=Mountain View,ST=California,C=US",
      "CN=Google Internet Authority G2,O=Google Inc,C=US",
      "1425097940.000000",
      "1432796400.000000",
      "id-ecPublicKey",
      "sha1WithRSAEncryption",
      "ecdsa",
      "256",
      "-",
      "prime256v1",
      "*.google.com,*.android.com,*.appengine.google.com,*.cloud.google.com,*.google-analytics.com,*.google.ca,*.google.cl,*.google.co.in,*.google.co.jp,*.google.co.uk,*.google.com.ar,*.google.com.au,*.google.com.br,*.google.com.co,*.google.com.mx,*.google.com.tr,*.google.com.vn,*.google.de,*.google.es,*.google.fr,*.google.hu,*.google.it,*.google.nl,*.google.pl,*.google.pt,*.googleadapis.com,*.googleapis.cn,*.googlecommerce.com,*.googlevideo.com,*.gstatic.cn,*.gstatic.com,*.gvt1.com,*.gvt2.com,*.metric.gstatic.com,*.urchin.com,*.url.google.com,*.youtube-nocookie.com,*.youtube.com,*.youtubeeducation.com,*.ytimg.com,android.com,g.co,goo.gl,google-analytics.com,google.com,googlecommerce.com,urchin.com,youtu.be,youtube.com,youtubeeducation.com",
      "-",
      "-",
      "-",
      "F",
      "-"
    ],
    [
      {name: "_td", type: "int"},
      {name: "_path", type: "string"},
      {name: "ts", type: "time"},
      {name: "id", type: "string"},
      {name: "certificate.version", type: "count"},
      {name: "certificate.serial", type: "string"},
      {name: "certificate.subject", type: "string"},
      {name: "certificate.issuer", type: "string"},
      {name: "certificate.not_valid_before", type: "time"},
      {name: "certificate.not_valid_after", type: "time"},
      {name: "certificate.key_alg", type: "string"},
      {name: "certificate.sig_alg", type: "string"},
      {name: "certificate.key_type", type: "string"},
      {name: "certificate.key_length", type: "count"},
      {name: "certificate.exponent", type: "string"},
      {name: "certificate.curve", type: "string"},
      {name: "san.dns", type: "vector[string]"},
      {name: "san.uri", type: "vector[string]"},
      {name: "san.email", type: "vector[string]"},
      {name: "san.ip", type: "vector[addr]"},
      {name: "basic_constraints.ca", type: "bool"},
      {name: "basic_constraints.path_len", type: "count"}
    ]
  )

export const dhcp = () =>
  new Log(
    [
      "1",
      "dhcp",
      "1425567029.996704",
      "CrTPSI1Qb5sB8eBmm7",
      "192.168.0.51",
      "68",
      "192.168.0.1",
      "67",
      "ec:f4:bb:4f:b2:45",
      "192.168.0.51",
      "86400.000000",
      "4244918360"
    ],
    [
      {name: "_td", type: "int"},
      {name: "_path", type: "string"},
      {name: "ts", type: "time"},
      {name: "uid", type: "string"},
      {name: "id.orig_h", type: "addr"},
      {name: "id.orig_p", type: "port"},
      {name: "id.resp_h", type: "addr"},
      {name: "id.resp_p", type: "port"},
      {name: "mac", type: "string"},
      {name: "assigned_ip", type: "addr"},
      {name: "lease_time", type: "interval"},
      {name: "trans_id", type: "count"}
    ]
  )

export const files = () =>
  new Log(
    [
      "2",
      "files",
      "1425567042.160756",
      "FUPWLQXTNsTNvf33",
      "91.189.89.240",
      "192.168.0.51",
      "CBQjjR1ZrY6LmUfzX5",
      "HTTP",
      "0",
      "(empty)",
      "text/html",
      "-",
      "0.000018",
      "-",
      "F",
      "6005",
      "-",
      "0",
      "0",
      "F",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      {name: "_td", type: "int"},
      {name: "_path", type: "string"},
      {name: "ts", type: "time"},
      {name: "fuid", type: "string"},
      {name: "tx_hosts", type: "set[addr]"},
      {name: "rx_hosts", type: "set[addr]"},
      {name: "conn_uids", type: "set[string]"},
      {name: "source", type: "string"},
      {name: "depth", type: "count"},
      {name: "analyzers", type: "set[string]"},
      {name: "mime_type", type: "string"},
      {name: "filename", type: "string"},
      {name: "duration", type: "interval"},
      {name: "local_orig", type: "bool"},
      {name: "is_orig", type: "bool"},
      {name: "seen_bytes", type: "count"},
      {name: "total_bytes", type: "count"},
      {name: "missing_bytes", type: "count"},
      {name: "overflow_bytes", type: "count"},
      {name: "timedout", type: "bool"},
      {name: "parent_fuid", type: "string"},
      {name: "md5", type: "string"},
      {name: "sha1", type: "string"},
      {name: "sha256", type: "string"},
      {name: "extracted", type: "string"},
      {name: "extracted_cutoff", type: "bool"},
      {name: "extracted_size", type: "count"}
    ]
  )

export const ssh = () =>
  new Log(
    [
      "7",
      "ssh",
      "1426082138.532389",
      "CNScWmtf760GTTbv9",
      "217.195.49.112",
      "36294",
      "192.168.0.2",
      "22",
      "-",
      "-",
      "-",
      "-",
      "-",
      "SSH-2.0-OpenSSH_6.4",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      {name: "_td", type: "int"},
      {name: "_path", type: "string"},
      {name: "ts", type: "time"},
      {name: "uid", type: "string"},
      {name: "id.orig_h", type: "addr"},
      {name: "id.orig_p", type: "port"},
      {name: "id.resp_h", type: "addr"},
      {name: "id.resp_p", type: "port"},
      {name: "version", type: "count"},
      {name: "auth_success", type: "bool"},
      {name: "auth_attempts", type: "count"},
      {name: "direction", type: "enum"},
      {name: "client", type: "string"},
      {name: "server", type: "string"},
      {name: "cipher_alg", type: "string"},
      {name: "mac_alg", type: "string"},
      {name: "compression_alg", type: "string"},
      {name: "kex_alg", type: "string"},
      {name: "host_key_alg", type: "string"},
      {name: "host_key", type: "string"}
    ]
  )

export const ftp = () =>
  new Log(
    [
      "3",
      "ftp",
      "1426095842.051249",
      "CZ2wlb4EthWazxSxf6",
      "192.168.0.54",
      "50642",
      "77.67.22.165",
      "21",
      "anonymous",
      "CommonUpdater%40McAfeeB2B.com",
      "EPSV",
      "-",
      "-",
      "-",
      "500",
      "Command not supported.",
      "-",
      "-",
      "-",
      "-",
      "-"
    ],
    [
      {name: "_td", type: "int"},
      {name: "_path", type: "string"},
      {name: "ts", type: "time"},
      {name: "uid", type: "string"},
      {name: "id.orig_h", type: "addr"},
      {name: "id.orig_p", type: "port"},
      {name: "id.resp_h", type: "addr"},
      {name: "id.resp_p", type: "port"},
      {name: "user", type: "string"},
      {name: "password", type: "string"},
      {name: "command", type: "string"},
      {name: "arg", type: "string"},
      {name: "mime_type", type: "string"},
      {name: "file_size", type: "count"},
      {name: "reply_code", type: "count"},
      {name: "reply_msg", type: "string"},
      {name: "data_channel.passive", type: "bool"},
      {name: "data_channel.orig_h", type: "addr"},
      {name: "data_channel.resp_h", type: "addr"},
      {name: "data_channel.resp_p", type: "port"},
      {name: "fuid", type: "string"}
    ]
  )

export const packet_filter = () =>
  new Log(
    [
      "4",
      "packet_filter",
      "1535576059.244117",
      "bro",
      "ip or not ip",
      "T",
      "T"
    ],
    [
      {name: "_td", type: "int"},
      {name: "_path", type: "string"},
      {name: "ts", type: "time"},
      {name: "node", type: "string"},
      {name: "filter", type: "string"},
      {name: "init", type: "bool"},
      {name: "success", type: "bool"}
    ]
  )

export const weird = () =>
  new Log(
    [
      "12",
      "weird",
      "1425565544.849413",
      "Cum4LVba3W3KNG6qa",
      "fe80::eef4:bbff:fe51:89ec",
      "5353",
      "ff02::fb",
      "5353",
      "dns_unmatched_msg",
      "-",
      "F",
      "bro"
    ],
    [
      {name: "_td", type: "int"},
      {name: "_path", type: "string"},
      {name: "ts", type: "time"},
      {name: "uid", type: "string"},
      {name: "id.orig_h", type: "addr"},
      {name: "id.orig_p", type: "port"},
      {name: "id.resp_h", type: "addr"},
      {name: "id.resp_p", type: "port"},
      {name: "name", type: "string"},
      {name: "addl", type: "string"},
      {name: "notice", type: "bool"},
      {name: "peer", type: "string"}
    ]
  )

export const dpd = () =>
  new Log(
    [
      "5",
      "dpd",
      "1425634708.769961",
      "CmN9fY3Yeg3v8u2Jff",
      "192.168.0.51",
      "48217",
      "194.107.151.200",
      "80",
      "tcp",
      "HTTP",
      "not a http reply line"
    ],
    [
      {name: "_td", type: "int"},
      {name: "_path", type: "string"},
      {name: "ts", type: "time"},
      {name: "uid", type: "string"},
      {name: "id.orig_h", type: "addr"},
      {name: "id.orig_p", type: "port"},
      {name: "id.resp_h", type: "addr"},
      {name: "id.resp_p", type: "port"},
      {name: "proto", type: "enum"},
      {name: "analyzer", type: "string"},
      {name: "failure_reason", type: "string"}
    ]
  )

export const pe = () =>
  new Log(
    [
      "9",
      "pe",
      "1425649100.736865",
      "FxADxanpFc2GG166e",
      "I386",
      "1329490526.000000",
      "Windows 2000",
      "WINDOWS_GUI",
      "T",
      "F",
      "F",
      "T",
      "F",
      "F",
      "T",
      "T",
      "T",
      "T",
      ".text,.rdata,.data,.CRT,.rsrc"
    ],
    [
      {name: "_td", type: "int"},
      {name: "_path", type: "string"},
      {name: "ts", type: "time"},
      {name: "id", type: "string"},
      {name: "machine", type: "string"},
      {name: "compile_ts", type: "time"},
      {name: "os", type: "string"},
      {name: "subsystem", type: "string"},
      {name: "is_exe", type: "bool"},
      {name: "is_64bit", type: "bool"},
      {name: "uses_aslr", type: "bool"},
      {name: "uses_dep", type: "bool"},
      {name: "uses_code_integrity", type: "bool"},
      {name: "uses_seh", type: "bool"},
      {name: "has_import_table", type: "bool"},
      {name: "has_export_table", type: "bool"},
      {name: "has_cert_table", type: "bool"},
      {name: "has_debug_data", type: "bool"},
      {name: "section_names", type: "vector[string]"}
    ]
  )

export const smtp = () =>
  new Log(
    [
      "6",
      "smtp",
      "1425895554.646293",
      "C0QRZj4RGUwJ0rtH9i",
      "192.168.0.53",
      "1732",
      "81.236.55.3",
      "25",
      "1",
      "passwordnedxp",
      "ned.pwned.se@gmx.com",
      "homer.pwned.se@gmx.com",
      "Mon, 9 Mar 2015 11:03:58 +0100",
      '"Password Ned" <ned.pwned.se@gmx.com>',
      "<homer.pwned.se@gmx.com>",
      "-",
      "-",
      "<8501ED1263D742DFB6B601A139AA38EC@passwordnedxp>",
      "-",
      "I'm on-diddly-line now!",
      "-",
      "-",
      "-",
      "250 <54E6F832004A05C2> Mail accepted",
      "81.236.55.3,192.168.0.53",
      "Microsoft Outlook Express 6.00.2900.5512",
      "F",
      "Fp8UCO3vSLTMez2Afe,F5bzWH26vYbxTuCgZh"
    ],
    [
      {name: "_td", type: "int"},
      {name: "_path", type: "string"},
      {name: "ts", type: "time"},
      {name: "uid", type: "string"},
      {name: "id.orig_h", type: "addr"},
      {name: "id.orig_p", type: "port"},
      {name: "id.resp_h", type: "addr"},
      {name: "id.resp_p", type: "port"},
      {name: "trans_depth", type: "count"},
      {name: "helo", type: "string"},
      {name: "mailfrom", type: "string"},
      {name: "rcptto", type: "set[string]"},
      {name: "date", type: "string"},
      {name: "from", type: "string"},
      {name: "to", type: "set[string]"},
      {name: "cc", type: "set[string]"},
      {name: "reply_to", type: "string"},
      {name: "msg_id", type: "string"},
      {name: "in_reply_to", type: "string"},
      {name: "subject", type: "string"},
      {name: "x_originating_ip", type: "addr"},
      {name: "first_received", type: "string"},
      {name: "second_received", type: "string"},
      {name: "last_reply", type: "string"},
      {name: "path", type: "vector[addr]"},
      {name: "user_agent", type: "string"},
      {name: "tls", type: "bool"},
      {name: "fuids", type: "vector[string]"}
    ]
  )
