import os
#arr=os.listdir('.')
#print(arr)
###
#files = [f for f in os.listdir('.') if os.path.isfile(f)]
#for f in files:
#  print (f)
###

dirs = [d for d in os.listdir('.') if os.path.isdir(d)]
for d in dirs:
  print (d,end=",")
  folder_count = 0
  a_count=0
  dir = d
  for path in os.listdir(dir):
    if os.path.isdir(os.path.join(dir, path)):
        if(path!=".git"):
          folder_count += 1
          #print(path)
        if(path.find('A1')!=-1):
          a_count+=1
  print(folder_count,",",a_count)
  
