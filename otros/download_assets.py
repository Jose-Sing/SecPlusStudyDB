import urllib.request
import os

def main():
    url = "https://cdn.tailwindcss.com?plugins=forms,container-queries"
    output_dir = os.path.dirname(os.path.abspath(__file__))
    output_path = os.path.join(output_dir, "..", "assets", "tailwind.js")
    
    print(f"Downloading Tailwind JS from {url}...")
    try:
        # User-Agent to avoid getting blocked
        req = urllib.request.Request(
            url, 
            headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
        )
        with urllib.request.urlopen(req) as response:
            with open(output_path, 'wb') as f:
                f.write(response.read())
        print(f"Successfully downloaded tailwind.js to {output_path}")
    except Exception as e:
        print(f"Error downloading Tailwind: {e}")

if __name__ == "__main__":
    main()
