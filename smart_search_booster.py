import time
import random
import concurrent.futures
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service

# --- CONFIGURATION ---
TARGET_NAME = "M. Irsyad Fachryanto"
PORTFOLIO_URL = "irsyad-architect.surge.sh"
PROXIES = [] 

USER_AGENTS = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36",
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
]

def simulate_search_boost(thread_id, proxy=None):
    print(f"[Thread-{thread_id}] Initializing...")
    chrome_options = Options()
    chrome_options.add_argument(f"user-agent={random.choice(USER_AGENTS)}")
    chrome_options.add_argument("--headless=new")
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
    
    if proxy:
        chrome_options.add_argument(f'--proxy-server={proxy}')

    driver = webdriver.Chrome(options=chrome_options)
    
    try:
        # Step 1: Search on Google
        driver.get("https://www.google.com")
        time.sleep(random.uniform(2, 4))
        
        search_box = driver.find_element(By.NAME, "q")
        print(f"[Thread-{thread_id}] Searching for: {TARGET_NAME}")
        for char in TARGET_NAME:
            search_box.send_keys(char)
            time.sleep(random.uniform(0.05, 0.2))
        search_box.send_keys(Keys.ENTER)
        time.sleep(random.uniform(3, 5))
        
        # Step 2: Look through pages (Up to 3)
        found = False
        for page in range(1, 4):
            print(f"[Thread-{thread_id}] Scanning Page {page}...")
            driver.execute_script("window.scrollTo(0, document.body.scrollHeight/2);")
            time.sleep(1)
            
            links = driver.find_elements(By.TAG_NAME, "a")
            for link in links:
                href = link.get_attribute("href")
                if href and PORTFOLIO_URL in href:
                    print(f"[Thread-{thread_id}] SUCCESS: Found on Page {page}! Clicking...")
                    driver.execute_script("arguments[0].click();", link)
                    found = True
                    break
            
            if found: break
            
            # Go to next page if not found
            try:
                next_button = driver.find_element(By.ID, "pnnext")
                next_button.click()
                time.sleep(random.uniform(2, 4))
            except:
                print(f"[Thread-{thread_id}] No 'Next' button found.")
                break

        # Step 3: Fallback - Direct Visit (To ensure traffic)
        if not found:
            print(f"[Thread-{thread_id}] Not found in search. Executing Direct Visit to boost authority...")
            driver.get(f"https://{PORTFOLIO_URL}")
            time.sleep(2)
        
        # Interaction on site
        stay_time = random.uniform(20, 40)
        print(f"[Thread-{thread_id}] Simulating interaction for {stay_time:.2f}s...")
        # Random scrolling
        for _ in range(5):
            driver.execute_script(f"window.scrollBy(0, {random.randint(200, 600)});")
            time.sleep(random.uniform(3, 7))
        
        print(f"[Thread-{thread_id}] Cycle Complete.")

    except Exception as e:
        print(f"[Thread-{thread_id}] ERROR: {e}")
    finally:
        driver.quit()

def run_multi_boost(instances=3):
    print(f">>> [SDA ELITE ENGINE V2] Launching {instances} parallel simulations...")
    with concurrent.futures.ThreadPoolExecutor(max_workers=instances) as executor:
        futures = [executor.submit(simulate_search_boost, i+1, random.choice(PROXIES) if PROXIES else None) for i in range(instances)]
        concurrent.futures.wait(futures)

if __name__ == "__main__":
    run_multi_boost(instances=3)
