from selenium import webdriver  # 웹수집 자동화를 위한 크롬 드라이버 호출
from selenium.webdriver.common.keys import Keys
import time, os
import urllib.request

driver = webdriver.Chrome(r'/Applications/chromedriver')  # 크롬드라이버 위치 (크롬버전확인)

fashions = ['americancasual', 'casual', 'chic', 'dandy', 'formal', 'girlish', 'golf', 'retro', 'romantic', 'sports', 'street']

for look in fashions:
    driver.get("https://store.musinsa.com/app/styles/lists?use_yn_360=&style_type={}&brand=&model=&tag_no=&max_rt=&min_rt=&display_cnt=60&list_kind=big&sort=date&page=1".format(look))
    max_page = int(driver.find_element_by_class_name("totalPagingNum").text)
    os.makedirs(look, exist_ok=True)
    
    for i in range(max_page):
        driver.get("https://store.musinsa.com/app/styles/lists?use_yn_360=&style_type={}&brand=&model=&tag_no=&max_rt=&min_rt=&display_cnt=60&list_kind=big&sort=date&page={}".format(look, i+1))
        
        images = driver.find_elements_by_class_name("style-list-thumbnail__img")
        count = []
        links = driver.find_elements_by_class_name('style-list-item__link')
        for link in links:
            count.append(link.get_attribute('onclick').split("\'")[1])
        cnt = 0
        # count = i*60+1
        
        for image in images:
            try:
                imgUrl = image.get_attribute("src")
                opener=urllib.request.build_opener()
                opener.addheaders=[('User-Agent','Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1941.0 Safari/537.36')]
                urllib.request.install_opener(opener)
                urllib.request.urlretrieve(imgUrl, look + '/' + count[cnt] + ".jpg")
                cnt += 1
            except:
                pass