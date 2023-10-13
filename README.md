# Medicon-GroupProject

          |-------------------------------------------------------     MEDICON HEALTH CARE WEBSITE ------------------------------------------------------------------------------|

____________________________________________________________________________________________________________________________________________________________________________________________


           |--------------------------------------------------- configurations and installation guidelines------------------------------------------------------------------------|



		01 ---------First Unzip the File ----------------------   MediconGroupProject.zip --> Extract 



		02 ---------Next This file past into your /xampp/htdoc folder. If you dont have pre installed XAMPP software install the XAMPP into your Computer
			Using this link  (https://www.apachefriends.org/download.html)

		03 ----------Next create a database in xampp server. Database name is 'registration'.


						Create 04 table in this database.


					1st table______________________________________________________________________________________________

				| 1st table name is 'user' and 4 coloms. 'name','email','NIC','phoneNo','Gender' are coloms name. Table primary key is NIC.

					2nd table______________________________________________________________________________________________

				| 2nd table name is 'appoinment' and coloms names are 'name','NIC','phoneno','date','doctor' and 'reason'. Primary key is NIC.

					3ed table______________________________________________________________________________________________

				|  3th table name is 'pay' and coloms names are 'NIC','cardnumber' and 'expiryDate'. Prymary key is NIC and it forign key 'appoinment' table 'NIC'.
				

					4th table______________________________________________________________________________________________


				| 4th tabale name is 'payorder' and coloms names are 'Amount','itemId','cname','pnum','address',ZIP' and 'cardNumber'. Primary key is 'pnum'.


		04 then On servers and 

##########################################################__________After this all Steps done you can run The page on localhost_________####################################################






