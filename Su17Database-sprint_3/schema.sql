DROP DATABASE IF EXISTS Su17;  
CREATE DATABASE Su17;  
USE Su17;  
  
CREATE TABLE ProductionRun (  
  production_run_id INT UNSIGNED NOT NULL AUTO_INCREMENT, 
  product INT UNSIGNED NOT NULL, #FK Product(product_id) 
  quantity INT UNSIGNED NOT NULL, 
  targetStartDate DATE, 
  targetCompleteDate DATE, 
  status_id INT UNSIGNED NOT NULL, #status_id 1 = 'planned', 2 = 'in process', 3 = 'cancelled', 4 = 'complete' 
  PRIMARY KEY (production_run_id) 
); 
   
CREATE TABLE Product ( 
  product_id INT UNSIGNED NOT NULL AUTO_INCREMENT, 
  productDesignation VARCHAR(40) NOT NULL, 
  productName VARCHAR(40) NOT NULL, 
  standardSalesPrice DOUBLE (18,2), 
  PRIMARY KEY (product_id) 
); 
   
CREATE TABLE BillOfMaterials( 
  bom_id INT UNSIGNED NOT NULL AUTO_INCREMENT, 
  product INT UNSIGNED NOT NULL, #FK Product(product_id) 
  version_id INT, 
  PRIMARY KEY (bom_id) 
); 
   
CREATE TABLE LineItem ( 
  line_item_id INT UNSIGNED NOT NULL AUTO_INCREMENT,  
  bom INT UNSIGNED, #FK BillOfMaterials(bom_id) 
  part INT UNSIGNED, #FK Part(part_id) 
  quantity INT, 
  PRIMARY KEY (line_item_id) 
); 
  
CREATE TABLE Part ( 
  part_id INT UNSIGNED NOT NULL AUTO_INCREMENT, 
  description VARCHAR(200), 
  VALUE DOUBLE (18,2), 
  units VARCHAR (40), 
  mfrPartNumber VARCHAR (40), 
  manufacturer INT UNSIGNED NOT NULL, #FK Manufacturer(manufacturer_id) 
  standardCost DOUBLE (18, 2), 
  standardLeadTime INT, 
  quantityOnHand INT, 
  PRIMARY KEY (part_id) 
); 
   
CREATE TABLE Manufacturer( 
  manufacturer_id INT UNSIGNED NOT NULL AUTO_INCREMENT,  
  name CHAR(40), 
  PRIMARY KEY (manufacturer_id) 
); 
     
ALTER TABLE LineItem 
  ADD FOREIGN KEY(bom) 
  REFERENCES BillOfMaterials(bom_id); 
 
ALTER TABLE LineItem 
  ADD FOREIGN KEY(part) 
  REFERENCES Part(part_id); 
   
ALTER TABLE Part 
  ADD FOREIGN KEY(manufacturer) 
  REFERENCES Manufacturer(manufacturer_id); 
 




  

  

  
