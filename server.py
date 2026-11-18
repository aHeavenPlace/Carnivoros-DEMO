#!/usr/bin/env python3
"""
Servidor local simple para Pa' Carnívoros DEMO
Ejecuta: python3 server.py
"""
import http.server
import socketserver
import os
import sys

PORT = 8080

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

if __name__ == '__main__':
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print("=" * 60)
        print(f"🔥 Pa' Carnívoros Bucaramanga - Demo Web App")
        print(f"Servidor activo en: http://localhost:{PORT}")
        print("Presiona Ctrl+C para detener.")
        print("=" * 60)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServidor detenido.")
            sys.exit(0)
