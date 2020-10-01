import sys
import qrcode

data = ""
labels = ["Name:", "Aadhar Number:", "Date of Birth:", "Address:", "Phone num:", "Email:"]

for i in range(len(labels)):
    data += labels[i] + sys.argv[i+1] + ";"
#print(data)

#filename = "models/"+sys.argv[1]+".png"
filename = "views/index1.png"
print(data)
img = qrcode.make(data)
img.save(filename)

sys.stdout.flush()
