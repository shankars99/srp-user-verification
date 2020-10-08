import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'

import numpy as np
import tensorflow as tf
import cv2
from tensorflow import keras

root_dir = "/home/shankar/git-repo/srp-user-verification/pyScripts/"

model = keras.models.load_model(root_dir +"saves")

test_real_images       = root_dir + "../views"
img_num = "person_no_mask"

img=cv2.imread(os.path.join(test_real_images,img_num+'.jpeg'))
#plt.imshow(img)
new_img=cv2.resize(img,(50,50))
new_img=new_img.reshape(-1,50,50,1)
predict=model.predict(new_img)
#print(predict)

img=cv2.imread(os.path.join(test_real_images,img_num+'.jpeg'),cv2.IMREAD_GRAYSCALE)
new_img=cv2.resize(img,(50,50))
new_img=new_img.reshape(-1,50,50,1)
predict=model.predict(new_img)
#print(predict)

if predict[0][0] == 1:
    print("no mask")
else:
    print("mask")
