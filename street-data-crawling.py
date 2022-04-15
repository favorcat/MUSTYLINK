from selenium import webdriver  # 웹수집 자동화를 위한 크롬 드라이버 호출
from selenium.webdriver.common.keys import Keys
import time, os
import urllib.request

driver = webdriver.Chrome(r'C:\\Users\\favorcat\\Downloads\\chromedriver99.0.exe')  # 크롬드라이버 위치 (크롬버전확인)

fashions = ['americancasual', 'casual', 'chic', 'dandy', 'formal', 'girlish', 'golf', 'retro', 'romantic', 'sports', 'street']

for look in fashions:
    driver.get("https://www.musinsa.com/mz/streetsnap?style_type={}".format(look))
    max_page = int(driver.find_element_by_class_name("totalPagingNum").text)
    os.makedirs('./street-data/'+look, exist_ok=True)
    
    for i in range(max_page):
        driver.get("https://www.musinsa.com/mz/streetsnap?style_type={}&_mon=&gender=&p={}#listStart".format(look, i+1))
        
        images = driver.find_elements_by_class_name("articleImg")
        
        # articleImg > a
        links = []
        for k in images:
            links.append(k.find_elements_by_xpath("a"))

        # articleImg > a의 href에서 숫자 추출
        count = []
        imgLinks = []
        for link in links:
            tmp = link[0].get_attribute('href').split("/")[6]
            count.append(tmp.split("?")[0])
            imgLinks.append(link[0].find_elements_by_xpath("img"))

        cnt = 0
        for image in imgLinks:
            try:
                imgUrl = image[0].get_attribute("src")
                print(imgUrl)
                opener=urllib.request.build_opener()
                opener.addheaders=[('User-Agent','Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1941.0 Safari/537.36')]
                urllib.request.install_opener(opener)
                urllib.request.urlretrieve(imgUrl, './street-data/' + look + '/' + count[cnt] + ".jpg")
                cnt += 1
            except:
                pass