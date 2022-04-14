import os
import json
from typing import OrderedDict

path_dir = 'D:\\Github\\fashion-look\\fashion-look\\src\\assets\\imageData\\' #경로 끝에 / 꼭 붙이기
folder_list = os.listdir(path_dir) #경로 읽어 여러 폴더들 읽기
folder_list.sort() #정렬

res = 0
for folder in folder_list:
    folder_dir = os.path.join(path_dir,folder)
    file_list = os.listdir(folder_dir)
    file_list.sort(reverse=True)

    for file in file_list:
        num = file.split('.')[0]
        data = OrderedDict()
        data['src'] = os.path.join(folder_dir,file)
        data['url'] = 'https://www.musinsa.com/app/styles/views/{}?use_yn_360=&style_type=&brand=&model=&tag_no=&max_rt=&min_rt=&display_cnt=60&list_kind=big&sort=date&page=1'.format(num)
        # print(json.dumps(data, ensure_ascii=False, indent="\t"))
        with open('./json/'+ folder +'.json', 'a', encoding="utf-8") as make_file:
            json.dump(data, make_file, ensure_ascii=False, indent="\t")
            make_file.write(",")