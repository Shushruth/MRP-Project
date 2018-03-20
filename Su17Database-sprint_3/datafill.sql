INSERT INTO Product 
(product_id, productDesignation, productName, standardSalesPrice ) VALUES 
(1, 'P1','Product 1', 107.50), 
(2, 'P2','Product 2', 225.00), 
(3, 'P3','Product 3', 12.75), 
(4, 'P4','Product 4', 18.00), 
(5, 'P5','Product 5', 149.99);
 
INSERT INTO ProductionRun 
( production_run_id, product, quantity,  targetStartDate, targetCompleteDate, status_id ) VALUES 
(1, 1, 3370,'2017-05-15','2017-06-25', 2), 
(2, 3, 3957,'2017-06-15','2017-06-25', 1), 
(3, 2, 6300,'2017-07-15','2017-07-25', 1), 
(4, 2, 95,  '2017-06-15','2017-08-25', 1), 
(5, 2, 666, '2017-07-15','2017-08-25', 3), 
(6, 4, 1261,'2017-09-15','2017-09-25', 1), 
(7, 5, 4215,'2017-10-15','2017-10-25', 3), 
(8, 5, 2770,'2017-09-15','2017-10-25', 1); 
 
INSERT INTO manufacturer( manufacturer_id, name ) VALUES 
(1,'Panasonic Electronic Components'), 
(2,'Sullins Connector Solutions'), 
(3,'BOURNS INC.'), 
(4,'Cree inc.'), 
(5,'Diodes incorporated'), 
(6,'Toshiba semiconductor and storage'), 
(7,'Samsung Electro-Mechanics America Inc'), 
(8,'Nxperia USA INC'); 
 
INSERT INTO part (part_id, description, value , units, mfrPartNumber, manufacturer, standardCost,standardLeadTime,quantityOnHand ) VALUES 
(1,'RES ARRAY 4 RES 6.8K OHM 1206',6800,'OHM','EXB-38V682JV',1 , 0.10000,3,834), 
(2,'CONN HEADER .100 SINGL R/A 36POS',36,'POS','PBC36SBAN',2 , 2.62000,3,3957), 
(3,'FIXED IND 100UH 1.9A 180 MOHM',180,'MOHM','SDR1307-101KL', 2, 0.82000,20,6300), 
(4,'LED ARRAY 6MM 3000K 90CRI 380LM',380,'LM','CXB1304-0000-000C0UB230G', 2, 3.03000,4,95), 
(5,'IC LED DRVR RGLTR DIM 1A SOT89-5',1,'A','PAM2861CBR', 5, 0.88000,16,666), 
(6,'IC SCHMITT INVERTER C2MOS SSOP8', 3,'CH','TC7W14FU', 6, 0.46000,10,12861), 
(7,'RES ARRAY 4 RES 33K OHM 1206',33000,'OHM', 'EXB-38V333JV', 1, 0.10000,8,3390), 
(8,'CAP CER 0.47UF 16V X7R 0603',16,'V','CL10B474KO8NNNC', 7, 0.10000,15,43185), 
(9,'DIODE SCHOTTKY 40V 120MA SOD323',40,'V','RB751V40', 8, 0.30000,3,664); 
 
INSERT INTO BillOfMaterials (bom_id, product, version_id) VALUES 
(1, 1, 1), 
(2, 1, 2);

INSERT INTO LineItem (line_item_id, bom, part, quantity) VALUES 
(1, 1, 1, 1), 
(2, 1, 2, 2), 
(3, 1, 4, 1), 
(4, 1, 8, 3), 
(5, 1, 1, 1), 
(6, 1, 2, 2), 
(7, 1, 4, 1), 
(8, 1, 8, 4), 
(9, 1, 6, 1);