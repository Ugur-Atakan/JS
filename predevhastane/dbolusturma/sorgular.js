let muayene_hasta="SELECT * FROM Hastalar inner join Muayeneler on  Muayeneler.hastaId=Hastalar.id;";
let hasta_hastane="SELECT * FROM Hastalar inner join Hastaneler on  Hastaneler.id=Hastalar.hastaneId;";
let recete_muayene="SELECT * FROM Receteler inner join Muayeneler on  Muayeneler.id=Receteler.muayeneid;";
