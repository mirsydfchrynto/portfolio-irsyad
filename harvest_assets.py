import requests
import os
import time

# Nexus-E Harvester V1.0
# Purpose: Connect to high-value GitHub nodes and automate engagement for prestige.

GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")
HEADERS = {"Authorization": f"token {GITHUB_TOKEN}", "Accept": "application/vnd.github.v3+json"}

# High-Value Target Repositories for 2026 Economy
TARGETS = [
    "openclaw/openclaw",      # AI Personal Assistant
    "mendableai/firecrawl",   # LLM Scraping
    "n8n-io/n8n",             # Workflow Automation
    "wasp-lang/open-saas",    # SaaS Boilerplate
    "coollabsio/coolify",     # Self-hosted PaaS
    "shadcn-ui/ui",           # UI Standard
    "donnemartin/system-design-primer" # Knowledge
]

def star_repo(repo):
    url = f"https://api.github.com/user/starred/{repo}"
    response = requests.put(url, headers=HEADERS)
    if response.status_code == 204:
        print(f"[SUCCESS] Starred: {repo}")
    else:
        print(f"[FAILED] {repo}: {response.status_code}")

def watch_repo(repo):
    url = f"https://api.github.com/repos/{repo}/subscription"
    data = {"subscribed": True}
    response = requests.put(url, headers=HEADERS, json=data)
    if response.status_code == 200:
        print(f"[SUCCESS] Watching: {repo}")
    else:
        print(f"[FAILED] {repo}: {response.status_code}")

if __name__ == "__main__":
    if not GITHUB_TOKEN:
        print("ERROR: GITHUB_TOKEN environment variable not set.")
    else:
        print("--- NEXUS-E HARVESTING INITIATED ---")
        for repo in TARGETS:
            star_repo(repo)
            watch_repo(repo)
            time.sleep(1) # Ethical delay
        print("--- HARVESTING COMPLETE ---")
