#Author: Alex Wilson

import csv
import string

#read file
file = open("VCDB-Cleaned-Piped.txt", 'rb')
lines = []
for line in file.xreadlines():
    lines.append(string.split(line, '|'))


#id | ORG_NAME | ORG_INDUSTRY | ACTOR_TYPE | ACTOR_PATTERN | COUNTRY | STATE | REPORT_DAY | REPORT_MONTH | REPORT_YEAR | NUM_RECORDS_LOST | VICTIM_TYPE | DATA_LOST_TYPE | SUMMARY | REFERENCE

#Map org values to unique IDs in orgslist | ORG_NAME | ORG_INDUSTRY |
orgsList = {}
index = 0
for x in lines:
    print x
    value = [x[1].replace("\"", "").strip(), x[2].replace("\"", "").strip()]

    found = False
    for v in orgsList.itervalues():
        if v == value:
            found = True
  
    if not found:
        orgsList[index] = value
        index = index + 1

#save to file
with open('ORG_DATA.txt', 'a') as the_file:
    the_file.write("org_id~org_name~org_industry\n")
    for key, value in orgsList.iteritems():
        the_file.write( str(key) + "~" + value[0] + "~" + value[1] + "\n")


#Map actor values to unique IDs in actorList  | ACTOR_TYPE | ACTOR_PATTERN 
actorList = {}
ind = 0
for x in lines[1:len(lines)-1]:
    value = [x[3].replace("\"", "").strip(), x[4].replace("\"", "").strip()]
    found = False
    for v in actorList.itervalues():
        if v == value:
            found = True
    
    if not found:
        actorList[ind] = value
        ind = ind + 1

#save to file
with open('ACTOR_DATA.txt', 'a') as the_file:
    the_file.write("actor_id~actor_type~actor_pattern\n")
    for key, value in actorList.iteritems():
        the_file.write(str(key) + "~" + value[0] + "~" + value[1] + "\n")


#Now map each incident in global csv with existing org and actor
incidentTable = []
for line in lines[1:len(lines)-1]:
    #incident ID is given in each unique row
    incidentId = line[0]
    #get org ID from orgsList
    org_id = -1
    org_value = [line[1].replace("\"", "").strip(), line[2].replace("\"", "").strip()]
    for k, v in orgsList.iteritems():
        if v==org_value:
            org_id = k

    #get actor ID from actorList
    actor_id = -1
    actor_value = [line[3].replace("\"", "").strip(), line[4].replace("\"", "").strip()]
    for k, v in actorList.iteritems():
        if v==actor_value:
            actor_id = k
    
    res = str(incidentId) + "~" + str(org_id) + "~" + str(actor_id) + "~" + '~'.join(str(v.replace("\n", "")) for v in line[5:]) + "~" + "SUMMARY_HERE" + "~" + "REFERENCES_HERE"
    #concatenate those three values with the remaining columns
    incidentTable.append(res)

#save to file
with open('INCIDENT_DATA.txt', 'a') as the_file:
    the_file.write("incident_id~org_id~actor_id~country~state~report_day~report_month~report_year~num_records_lost~victim_type~data_lost_type~summary~references\n")
    for row in incidentTable:
        the_file.write(row+"\n")

print("Finished")
