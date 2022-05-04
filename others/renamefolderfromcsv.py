import csv,os,sys
#this script will read from csv file the original owner and github repo
#to rename the folders downloaded using github classroom assistant to ownername
with open('repos.csv', mode='r') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    line_count = 0
    for row in csv_reader:
        if line_count == 0:
            print(f'Column names are {", ".join(row)}')
            line_count += 1
        repoURLprefix = "https://github.com/sdmgdt/webdev-"
        repoURL = row["URL to Classroom Assignment repository created"];
        sstart=repoURL.find(repoURLprefix) 
        sslen=len(repoURLprefix)
        #extract the github id from repo URL by skipping the prefix
        ghid=repoURL[sslen+sstart:] 
        #convert all spaces and commas in name to _
        underscoredname = row["Name"].replace(" ", "_").replace(",","_")
        print(f'\t{underscoredname} is {ghid}')
        try:
            #rename the ghid folder to name with underscore
            os.rename(ghid, underscoredname)
            line_count += 1
        except:
            print(f'error for {ghid}')
    print(f'Processed {line_count} lines.')

