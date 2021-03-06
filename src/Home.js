// import Image from 'react-bootstrap/Image';
import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
import img2 from "./Images/logo.png";
import "./Home.css";
import { Form, Col, Button, Accordion, Card } from "react-bootstrap";

export const Home = () => {
  const history = useHistory();
  const [pin, setPin] = useState(0);
  const [districtCode, setDistrictCode] = useState();

  const onGetNotified = () => {
    if (districtCode) {
      history.push("/vaccine", { districtCode, method: "district" });
    } else {
      history.push("/vaccine", { pincode: pin, method: "pincode" });
    }
  };

  const onDistrictCodeSelect = (e) => {
    const code = e.target.value.match(/(\d+)/)[0];
    setDistrictCode(code);
  };

  return (
    <div className="mainBody">
      <div className="covidlogo">
        <img src={img2} alt="/" className="cowinlogo" />
      </div>
      <div className="mainDiv">
        <div className="state">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Control
              size="lg"
              as="select"
              defaultValue="Choose..."
              onChange={onDistrictCodeSelect}
            >
              <option>- District -</option>
              <option value="582 Adilabad">582 Adilabad</option>
              <option value="320 Agar">320 Agar</option>
              <option value="622 Agra">622 Agra</option>
              <option value="154 Ahmedabad">154 Ahmedabad</option>
              <option value="770 Ahmedabad Corporation">
                770 Ahmedabad Corporation
              </option>
              <option value="391 Ahmednagar">391 Ahmednagar</option>
              <option value="425 Aizawl East">425 Aizawl East</option>
              <option value="426 Aizawl West">426 Aizawl West</option>
              <option value="507 Ajmer">507 Ajmer</option>
              <option value="364 Akola">364 Akola</option>
              <option value="301 Alappuzha">301 Alappuzha</option>
              <option value="623 Aligarh">623 Aligarh</option>
              <option value="710 Alipurduar District">
                710 Alipurduar District
              </option>
              <option value="357 Alirajpur">357 Alirajpur</option>
              <option value="704 Almora">704 Almora</option>
              <option value="512 Alwar">512 Alwar</option>
              <option value="193 Ambala">193 Ambala</option>
              <option value="625 Ambedkar Nagar">625 Ambedkar Nagar</option>
              <option value="626 Amethi">626 Amethi</option>
              <option value="366 Amravati">366 Amravati</option>
              <option value="174 Amreli">174 Amreli</option>
              <option value="485 Amritsar">485 Amritsar</option>
              <option value="627 Amroha">627 Amroha</option>
              <option value="179 Anand">179 Anand</option>
              <option value="9 Anantapur">9 Anantapur</option>
              <option value="224 Anantnag">224 Anantnag</option>
              <option value="445 Angul">445 Angul</option>
              <option value="22 Anjaw">22 Anjaw</option>
              <option value="334 Anuppur">334 Anuppur</option>
              <option value="779 Aranthangi">779 Aranthangi</option>
              <option value="74 Araria">74 Araria</option>
              <option value="158 Aravalli">158 Aravalli</option>
              <option value="555 Ariyalur">555 Ariyalur</option>
              <option value="78 Arwal">78 Arwal</option>
              <option value="354 Ashoknagar">354 Ashoknagar</option>
              <option value="578 Attur">578 Attur</option>
              <option value="628 Auraiya">628 Auraiya</option>
              <option value="77 Aurangabad">77 Aurangabad</option>
              <option value="397 Aurangabad">397 Aurangabad</option>
              <option value="646 Ayodhya">646 Ayodhya</option>
              <option value="629 Azamgarh">629 Azamgarh</option>
              <option value="630 Badaun">630 Badaun</option>
              <option value="270 Bagalkot">270 Bagalkot</option>
              <option value="707 Bageshwar">707 Bageshwar</option>
              <option value="631 Baghpat">631 Baghpat</option>
              <option value="632 Bahraich">632 Bahraich</option>
              <option value="46 Baksa">46 Baksa</option>
              <option value="338 Balaghat">338 Balaghat</option>
              <option value="448 Balangir">448 Balangir</option>
              <option value="633 Balarampur">633 Balarampur</option>
              <option value="447 Balasore">447 Balasore</option>
              <option value="634 Ballia">634 Ballia</option>
              <option value="110 Balod">110 Balod</option>
              <option value="111 Baloda bazar">111 Baloda bazar</option>
              <option value="112 Balrampur">112 Balrampur</option>
              <option value="159 Banaskantha">159 Banaskantha</option>
              <option value="635 Banda">635 Banda</option>
              <option value="223 Bandipore">223 Bandipore</option>
              <option value="276 Bangalore Rural">276 Bangalore Rural</option>
              <option value="265 Bangalore Urban">265 Bangalore Urban</option>
              <option value="83 Banka">83 Banka</option>
              <option value="711 Bankura">711 Bankura</option>
              <option value="519 Banswara">519 Banswara</option>
              <option value="636 Barabanki">636 Barabanki</option>
              <option value="225 Baramulla">225 Baramulla</option>
              <option value="516 Baran">516 Baran</option>
              <option value="637 Bareilly">637 Bareilly</option>
              <option value="472 Bargarh">472 Bargarh</option>
              <option value="528 Barmer">528 Barmer</option>
              <option value="483 Barnala">483 Barnala</option>
              <option value="47 Barpeta">47 Barpeta</option>
              <option value="343 Barwani">343 Barwani</option>
              <option value="712 Basirhat HD (North 24 Parganas)">
                712 Basirhat HD (North 24 Parganas)
              </option>
              <option value="113 Bastar">113 Bastar</option>
              <option value="638 Basti">638 Basti</option>
              <option value="493 Bathinda">493 Bathinda</option>
              <option value="294 BBMP">294 BBMP</option>
              <option value="384 Beed">384 Beed</option>
              <option value="98 Begusarai">98 Begusarai</option>
              <option value="264 Belgaum">264 Belgaum</option>
              <option value="274 Bellary">274 Bellary</option>
              <option value="114 Bemetara">114 Bemetara</option>
              <option value="362 Betul">362 Betul</option>
              <option value="687 Bhadohi">687 Bhadohi</option>
              <option value="583 Bhadradri Kothagudem">
                583 Bhadradri Kothagudem
              </option>
              <option value="454 Bhadrak">454 Bhadrak</option>
              <option value="82 Bhagalpur">82 Bhagalpur</option>
              <option value="370 Bhandara">370 Bhandara</option>
              <option value="508 Bharatpur">508 Bharatpur</option>
              <option value="180 Bharuch">180 Bharuch</option>
              <option value="175 Bhavnagar">175 Bhavnagar</option>
              <option value="771 Bhavnagar Corporation">
                771 Bhavnagar Corporation
              </option>
              <option value="523 Bhilwara">523 Bhilwara</option>
              <option value="351 Bhind">351 Bhind</option>
              <option value="200 Bhiwani">200 Bhiwani</option>
              <option value="99 Bhojpur">99 Bhojpur</option>
              <option value="312 Bhopal">312 Bhopal</option>
              <option value="272 Bidar">272 Bidar</option>
              <option value="115 Bijapur">115 Bijapur</option>
              <option value="639 Bijnour">639 Bijnour</option>
              <option value="501 Bikaner">501 Bikaner</option>
              <option value="116 Bilaspur">116 Bilaspur</option>
              <option value="219 Bilaspur">219 Bilaspur</option>
              <option value="713 Birbhum">713 Birbhum</option>
              <option value="398 Bishnupur">398 Bishnupur</option>
              <option value="714 Bishnupur HD (Bankura)">
                714 Bishnupur HD (Bankura)
              </option>
              <option value="765 Biswanath">765 Biswanath</option>
              <option value="242 Bokaro">242 Bokaro</option>
              <option value="57 Bongaigaon">57 Bongaigaon</option>
              <option value="176 Botad">176 Botad</option>
              <option value="468 Boudh">468 Boudh</option>
              <option value="229 Budgam">229 Budgam</option>
              <option value="640 Bulandshahr">640 Bulandshahr</option>
              <option value="367 Buldhana">367 Buldhana</option>
              <option value="514 Bundi">514 Bundi</option>
              <option value="342 Burhanpur">342 Burhanpur</option>
              <option value="100 Buxar">100 Buxar</option>
              <option value="66 Cachar">66 Cachar</option>
              <option value="141 Central Delhi">141 Central Delhi</option>
              <option value="271 Chamarajanagar">271 Chamarajanagar</option>
              <option value="214 Chamba">214 Chamba</option>
              <option value="699 Chamoli">699 Chamoli</option>
              <option value="708 Champawat">708 Champawat</option>
              <option value="429 Champhai">429 Champhai</option>
              <option value="641 Chandauli">641 Chandauli</option>
              <option value="399 Chandel">399 Chandel</option>
              <option value="108 Chandigarh">108 Chandigarh</option>
              <option value="380 Chandrapur">380 Chandrapur</option>
              <option value="20 Changlang">20 Changlang</option>
              <option value="766 Charaideo">766 Charaideo</option>
              <option value="201 Charkhi Dadri">201 Charkhi Dadri</option>
              <option value="245 Chatra">245 Chatra</option>
              <option value="565 Chengalpet">565 Chengalpet</option>
              <option value="571 Chennai">571 Chennai</option>
              <option value="778 Cheyyar">778 Cheyyar</option>
              <option value="328 Chhatarpur">328 Chhatarpur</option>
              <option value="337 Chhindwara">337 Chhindwara</option>
              <option value="181 Chhotaudepur">181 Chhotaudepur</option>
              <option value="273 Chikamagalur">273 Chikamagalur</option>
              <option value="291 Chikkaballapur">291 Chikkaballapur</option>
              <option value="58 Chirang">58 Chirang</option>
              <option value="268 Chitradurga">268 Chitradurga</option>
              <option value="642 Chitrakoot">642 Chitrakoot</option>
              <option value="10 Chittoor">10 Chittoor</option>
              <option value="521 Chittorgarh">521 Chittorgarh</option>
              <option value="400 Churachandpur">400 Churachandpur</option>
              <option value="530 Churu">530 Churu</option>
              <option value="539 Coimbatore">539 Coimbatore</option>
              <option value="715 Cooch Behar">715 Cooch Behar</option>
              <option value="783 COOCHBEHAR">783 COOCHBEHAR</option>
              <option value="547 Cuddalore">547 Cuddalore</option>
              <option value="457 Cuttack">457 Cuttack</option>
              <option value="137 Dadra and Nagar Haveli">
                137 Dadra and Nagar Haveli
              </option>
              <option value="182 Dahod">182 Dahod</option>
              <option value="716 Dakshin Dinajpur">716 Dakshin Dinajpur</option>
              <option value="269 Dakshina Kannada">269 Dakshina Kannada</option>
              <option value="138 Daman">138 Daman</option>
              <option value="327 Damoh">327 Damoh</option>
              <option value="163 Dang">163 Dang</option>
              <option value="117 Dantewada">117 Dantewada</option>
              <option value="94 Darbhanga">94 Darbhanga</option>
              <option value="717 Darjeeling">717 Darjeeling</option>
              <option value="48 Darrang">48 Darrang</option>
              <option value="350 Datia">350 Datia</option>
              <option value="511 Dausa">511 Dausa</option>
              <option value="275 Davanagere">275 Davanagere</option>
              <option value="697 Dehradun">697 Dehradun</option>
              <option value="473 Deogarh">473 Deogarh</option>
              <option value="253 Deoghar">253 Deoghar</option>
              <option value="643 Deoria">643 Deoria</option>
              <option value="168 Devbhumi Dwaraka">168 Devbhumi Dwaraka</option>
              <option value="324 Dewas">324 Dewas</option>
              <option value="614 Dhalai">614 Dhalai</option>
              <option value="118 Dhamtari">118 Dhamtari</option>
              <option value="257 Dhanbad">257 Dhanbad</option>
              <option value="341 Dhar">341 Dhar</option>
              <option value="566 Dharmapuri">566 Dharmapuri</option>
              <option value="278 Dharwad">278 Dharwad</option>
              <option value="62 Dhemaji">62 Dhemaji</option>
              <option value="458 Dhenkanal">458 Dhenkanal</option>
              <option value="524 Dholpur">524 Dholpur</option>
              <option value="59 Dhubri">59 Dhubri</option>
              <option value="388 Dhule">388 Dhule</option>
              <option value="718 Diamond Harbor HD (S 24 Parganas)">
                718 Diamond Harbor HD (S 24 Parganas)
              </option>
              <option value="25 Dibang Valley">25 Dibang Valley</option>
              <option value="43 Dibrugarh">43 Dibrugarh</option>
              <option value="67 Dima Hasao">67 Dima Hasao</option>
              <option value="434 Dimapur">434 Dimapur</option>
              <option value="556 Dindigul">556 Dindigul</option>
              <option value="336 Dindori">336 Dindori</option>
              <option value="139 Diu">139 Diu</option>
              <option value="232 Doda">232 Doda</option>
              <option value="258 Dumka">258 Dumka</option>
              <option value="520 Dungarpur">520 Dungarpur</option>
              <option value="119 Durg">119 Durg</option>
              <option value="719 East Bardhaman">719 East Bardhaman</option>
              <option value="105 East Champaran">105 East Champaran</option>
              <option value="145 East Delhi">145 East Delhi</option>
              <option value="424 East Garo Hills">424 East Garo Hills</option>
              <option value="11 East Godavari">11 East Godavari</option>
              <option value="418 East Jaintia Hills">
                418 East Jaintia Hills
              </option>
              <option value="23 East Kameng">23 East Kameng</option>
              <option value="414 East Khasi Hills">414 East Khasi Hills</option>
              <option value="42 East Siang">42 East Siang</option>
              <option value="535 East Sikkim">535 East Sikkim</option>
              <option value="247 East Singhbhum">247 East Singhbhum</option>
              <option value="307 Ernakulam">307 Ernakulam</option>
              <option value="563 Erode">563 Erode</option>
              <option value="644 Etah">644 Etah</option>
              <option value="645 Etawah">645 Etawah</option>
              <option value="199 Faridabad">199 Faridabad</option>
              <option value="499 Faridkot">499 Faridkot</option>
              <option value="647 Farrukhabad">647 Farrukhabad</option>
              <option value="196 Fatehabad">196 Fatehabad</option>
              <option value="484 Fatehgarh Sahib">484 Fatehgarh Sahib</option>
              <option value="648 Fatehpur">648 Fatehpur</option>
              <option value="487 Fazilka">487 Fazilka</option>
              <option value="480 Ferozpur">480 Ferozpur</option>
              <option value="649 Firozabad">649 Firozabad</option>
              <option value="280 Gadag">280 Gadag</option>
              <option value="379 Gadchiroli">379 Gadchiroli</option>
              <option value="467 Gajapati">467 Gajapati</option>
              <option value="228 Ganderbal">228 Ganderbal</option>
              <option value="153 Gandhinagar">153 Gandhinagar</option>
              <option value="772 Gandhinagar Corporation">
                772 Gandhinagar Corporation
              </option>
              <option value="449 Ganjam">449 Ganjam</option>
              <option value="243 Garhwa">243 Garhwa</option>
              <option value="120 Gariaband">120 Gariaband</option>
              <option value="136 Gaurela Pendra Marwahi">
                136 Gaurela Pendra Marwahi
              </option>
              <option value="650 Gautam Buddha Nagar">
                650 Gautam Buddha Nagar
              </option>
              <option value="79 Gaya">79 Gaya</option>
              <option value="651 Ghaziabad">651 Ghaziabad</option>
              <option value="652 Ghazipur">652 Ghazipur</option>
              <option value="177 Gir Somnath">177 Gir Somnath</option>
              <option value="256 Giridih">256 Giridih</option>
              <option value="60 Goalpara">60 Goalpara</option>
              <option value="262 Godda">262 Godda</option>
              <option value="53 Golaghat">53 Golaghat</option>
              <option value="615 Gomati">615 Gomati</option>
              <option value="653 Gonda">653 Gonda</option>
              <option value="378 Gondia">378 Gondia</option>
              <option value="104 Gopalganj">104 Gopalganj</option>
              <option value="654 Gorakhpur">654 Gorakhpur</option>
              <option value="267 Gulbarga">267 Gulbarga</option>
              <option value="251 Gumla">251 Gumla</option>
              <option value="348 Guna">348 Guna</option>
              <option value="5 Guntur">5 Guntur</option>
              <option value="489 Gurdaspur">489 Gurdaspur</option>
              <option value="188 Gurgaon">188 Gurgaon</option>
              <option value="313 Gwalior">313 Gwalior</option>
              <option value="68 Hailakandi">68 Hailakandi</option>
              <option value="655 Hamirpur">655 Hamirpur</option>
              <option value="217 Hamirpur">217 Hamirpur</option>
              <option value="517 Hanumangarh">517 Hanumangarh</option>
              <option value="656 Hapur">656 Hapur</option>
              <option value="361 Harda">361 Harda</option>
              <option value="657 Hardoi">657 Hardoi</option>
              <option value="702 Haridwar">702 Haridwar</option>
              <option value="289 Hassan">289 Hassan</option>
              <option value="658 Hathras">658 Hathras</option>
              <option value="279 Haveri">279 Haveri</option>
              <option value="255 Hazaribagh">255 Hazaribagh</option>
              <option value="386 Hingoli">386 Hingoli</option>
              <option value="191 Hisar">191 Hisar</option>
              <option value="764 Hojai">764 Hojai</option>
              <option value="720 Hoogly">720 Hoogly</option>
              <option value="360 Hoshangabad">360 Hoshangabad</option>
              <option value="481 Hoshiarpur">481 Hoshiarpur</option>
              <option value="721 Howrah">721 Howrah</option>
              <option value="581 Hyderabad">581 Hyderabad</option>
              <option value="306 Idukki">306 Idukki</option>
              <option value="401 Imphal East">401 Imphal East</option>
              <option value="402 Imphal West">402 Imphal West</option>
              <option value="314 Indore">314 Indore</option>
              <option value="17 Itanagar Capital Complex">
                17 Itanagar Capital Complex
              </option>
              <option value="315 Jabalpur">315 Jabalpur</option>
              <option value="459 Jagatsinghpur">459 Jagatsinghpur</option>
              <option value="584 Jagtial">584 Jagtial</option>
              <option value="505 Jaipur I">505 Jaipur I</option>
              <option value="506 Jaipur II">506 Jaipur II</option>
              <option value="527 Jaisalmer">527 Jaisalmer</option>
              <option value="460 Jajpur">460 Jajpur</option>
              <option value="492 Jalandhar">492 Jalandhar</option>
              <option value="659 Jalaun">659 Jalaun</option>
              <option value="390 Jalgaon">390 Jalgaon</option>
              <option value="396 Jalna">396 Jalna</option>
              <option value="533 Jalore">533 Jalore</option>
              <option value="722 Jalpaiguri">722 Jalpaiguri</option>
              <option value="230 Jammu">230 Jammu</option>
              <option value="169 Jamnagar">169 Jamnagar</option>
              <option value="773 Jamnagar Corporation">
                773 Jamnagar Corporation
              </option>
              <option value="259 Jamtara">259 Jamtara</option>
              <option value="107 Jamui">107 Jamui</option>
              <option value="585 Jangaon">585 Jangaon</option>
              <option value="121 Janjgir-Champa">121 Janjgir-Champa</option>
              <option value="122 Jashpur">122 Jashpur</option>
              <option value="660 Jaunpur">660 Jaunpur</option>
              <option value="586 Jayashankar Bhupalpally">
                586 Jayashankar Bhupalpally
              </option>
              <option value="91 Jehanabad">91 Jehanabad</option>
              <option value="340 Jhabua">340 Jhabua</option>
              <option value="189 Jhajjar">189 Jhajjar</option>
              <option value="515 Jhalawar">515 Jhalawar</option>
              <option value="661 Jhansi">661 Jhansi</option>
              <option value="723 Jhargram">723 Jhargram</option>
              <option value="474 Jharsuguda">474 Jharsuguda</option>
              <option value="510 Jhunjhunu">510 Jhunjhunu</option>
              <option value="204 Jind">204 Jind</option>
              <option value="410 Jiribam">410 Jiribam</option>
              <option value="502 Jodhpur">502 Jodhpur</option>
              <option value="587 Jogulamba Gadwal">587 Jogulamba Gadwal</option>
              <option value="54 Jorhat">54 Jorhat</option>
              <option value="178 Junagadh">178 Junagadh</option>
              <option value="774 Junagadh Corporation">
                774 Junagadh Corporation
              </option>
              <option value="80 Kaimur">80 Kaimur</option>
              <option value="190 Kaithal">190 Kaithal</option>
              <option value="413 Kakching">413 Kakching</option>
              <option value="464 Kalahandi">464 Kalahandi</option>
              <option value="724 Kalimpong">724 Kalimpong</option>
              <option value="552 Kallakurichi">552 Kallakurichi</option>
              <option value="588 Kamareddy">588 Kamareddy</option>
              <option value="409 Kamjong">409 Kamjong</option>
              <option value="24 Kamle">24 Kamle</option>
              <option value="49 Kamrup Metropolitan">
                49 Kamrup Metropolitan
              </option>
              <option value="50 Kamrup Rural">50 Kamrup Rural</option>
              <option value="557 Kanchipuram">557 Kanchipuram</option>
              <option value="450 Kandhamal">450 Kandhamal</option>
              <option value="408 Kangpokpi">408 Kangpokpi</option>
              <option value="213 Kangra">213 Kangra</option>
              <option value="123 Kanker">123 Kanker</option>
              <option value="662 Kannauj">662 Kannauj</option>
              <option value="297 Kannur">297 Kannur</option>
              <option value="663 Kanpur Dehat">663 Kanpur Dehat</option>
              <option value="664 Kanpur Nagar">664 Kanpur Nagar</option>
              <option value="544 Kanyakumari">544 Kanyakumari</option>
              <option value="479 Kapurthala">479 Kapurthala</option>
              <option value="476 Karaikal">476 Karaikal</option>
              <option value="525 Karauli">525 Karauli</option>
              <option value="51 Karbi-Anglong">51 Karbi-Anglong</option>
              <option value="309 Kargil">309 Kargil</option>
              <option value="69 Karimganj">69 Karimganj</option>
              <option value="589 Karimnagar">589 Karimnagar</option>
              <option value="203 Karnal">203 Karnal</option>
              <option value="559 Karur">559 Karur</option>
              <option value="295 Kasaragod">295 Kasaragod</option>
              <option value="665 Kasganj">665 Kasganj</option>
              <option value="234 Kathua">234 Kathua</option>
              <option value="75 Katihar">75 Katihar</option>
              <option value="353 Katni">353 Katni</option>
              <option value="666 Kaushambi">666 Kaushambi</option>
              <option value="135 Kawardha">135 Kawardha</option>
              <option value="461 Kendrapara">461 Kendrapara</option>
              <option value="455 Kendujhar">455 Kendujhar</option>
              <option value="101 Khagaria">101 Khagaria</option>
              <option value="590 Khammam">590 Khammam</option>
              <option value="339 Khandwa">339 Khandwa</option>
              <option value="344 Khargone">344 Khargone</option>
              <option value="156 Kheda">156 Kheda</option>
              <option value="616 Khowai">616 Khowai</option>
              <option value="252 Khunti">252 Khunti</option>
              <option value="446 Khurda">446 Khurda</option>
              <option value="216 Kinnaur">216 Kinnaur</option>
              <option value="444 Kiphire">444 Kiphire</option>
              <option value="76 Kishanganj">76 Kishanganj</option>
              <option value="231 Kishtwar">231 Kishtwar</option>
              <option value="283 Kodagu">283 Kodagu</option>
              <option value="241 Koderma">241 Koderma</option>
              <option value="441 Kohima">441 Kohima</option>
              <option value="61 Kokrajhar">61 Kokrajhar</option>
              <option value="277 Kolar">277 Kolar</option>
              <option value="428 Kolasib">428 Kolasib</option>
              <option value="371 Kolhapur">371 Kolhapur</option>
              <option value="725 Kolkata">725 Kolkata</option>
              <option value="298 Kollam">298 Kollam</option>
              <option value="124 Kondagaon">124 Kondagaon</option>
              <option value="282 Koppal">282 Koppal</option>
              <option value="451 Koraput">451 Koraput</option>
              <option value="125 Korba">125 Korba</option>
              <option value="126 Koriya">126 Koriya</option>
              <option value="503 Kota">503 Kota</option>
              <option value="304 Kottayam">304 Kottayam</option>
              <option value="780 Kovilpatti">780 Kovilpatti</option>
              <option value="305 Kozhikode">305 Kozhikode</option>
              <option value="27 Kra Daadi">27 Kra Daadi</option>
              <option value="4 Krishna">4 Krishna</option>
              <option value="562 Krishnagiri">562 Krishnagiri</option>
              <option value="221 Kulgam">221 Kulgam</option>
              <option value="211 Kullu">211 Kullu</option>
              <option value="591 Kumuram Bheem">591 Kumuram Bheem</option>
              <option value="226 Kupwara">226 Kupwara</option>
              <option value="7 Kurnool">7 Kurnool</option>
              <option value="186 Kurukshetra">186 Kurukshetra</option>
              <option value="21 Kurung Kumey">21 Kurung Kumey</option>
              <option value="667 Kushinagar">667 Kushinagar</option>
              <option value="170 Kutch">170 Kutch</option>
              <option value="210 Lahaul Spiti">210 Lahaul Spiti</option>
              <option value="63 Lakhimpur">63 Lakhimpur</option>
              <option value="668 Lakhimpur Kheri">668 Lakhimpur Kheri</option>
              <option value="84 Lakhisarai">84 Lakhisarai</option>
              <option value="311 Lakshadweep">311 Lakshadweep</option>
              <option value="669 Lalitpur">669 Lalitpur</option>
              <option value="244 Latehar">244 Latehar</option>
              <option value="383 Latur">383 Latur</option>
              <option value="432 Lawngtlai">432 Lawngtlai</option>
              <option value="310 Leh">310 Leh</option>
              <option value="33 Lepa Rada">33 Lepa Rada</option>
              <option value="250 Lohardaga">250 Lohardaga</option>
              <option value="29 Lohit">29 Lohit</option>
              <option value="40 Longding">40 Longding</option>
              <option value="438 Longleng">438 Longleng</option>
              <option value="31 Lower Dibang Valley">
                31 Lower Dibang Valley
              </option>
              <option value="18 Lower Siang">18 Lower Siang</option>
              <option value="32 Lower Subansiri">32 Lower Subansiri</option>
              <option value="670 Lucknow">670 Lucknow</option>
              <option value="488 Ludhiana">488 Ludhiana</option>
              <option value="431 Lunglei">431 Lunglei</option>
              <option value="70 Madhepura">70 Madhepura</option>
              <option value="95 Madhubani">95 Madhubani</option>
              <option value="540 Madurai">540 Madurai</option>
              <option value="592 Mahabubabad">592 Mahabubabad</option>
              <option value="593 Mahabubnagar">593 Mahabubnagar</option>
              <option value="671 Maharajganj">671 Maharajganj</option>
              <option value="127 Mahasamund">127 Mahasamund</option>
              <option value="477 Mahe">477 Mahe</option>
              <option value="206 Mahendragarh">206 Mahendragarh</option>
              <option value="183 Mahisagar">183 Mahisagar</option>
              <option value="672 Mahoba">672 Mahoba</option>
              <option value="673 Mainpuri">673 Mainpuri</option>
              <option value="767 Majuli">767 Majuli</option>
              <option value="302 Malappuram">302 Malappuram</option>
              <option value="726 Malda">726 Malda</option>
              <option value="469 Malkangiri">469 Malkangiri</option>
              <option value="427 Mamit">427 Mamit</option>
              <option value="594 Mancherial">594 Mancherial</option>
              <option value="215 Mandi">215 Mandi</option>
              <option value="335 Mandla">335 Mandla</option>
              <option value="319 Mandsaur">319 Mandsaur</option>
              <option value="290 Mandya">290 Mandya</option>
              <option value="482 Mansa">482 Mansa</option>
              <option value="674 Mathura">674 Mathura</option>
              <option value="675 Mau">675 Mau</option>
              <option value="456 Mayurbhanj">456 Mayurbhanj</option>
              <option value="595 Medak">595 Medak</option>
              <option value="596 Medchal">596 Medchal</option>
              <option value="676 Meerut">676 Meerut</option>
              <option value="160 Mehsana">160 Mehsana</option>
              <option value="677 Mirzapur">677 Mirzapur</option>
              <option value="491 Moga">491 Moga</option>
              <option value="437 Mokokchung">437 Mokokchung</option>
              <option value="439 Mon">439 Mon</option>
              <option value="678 Moradabad">678 Moradabad</option>
              <option value="171 Morbi">171 Morbi</option>
              <option value="347 Morena">347 Morena</option>
              <option value="55 Morigaon">55 Morigaon</option>
              <option value="612 Mulugu">612 Mulugu</option>
              <option value="395 Mumbai">395 Mumbai</option>
              <option value="128 Mungeli">128 Mungeli</option>
              <option value="85 Munger">85 Munger</option>
              <option value="727 Murshidabad">727 Murshidabad</option>
              <option value="679 Muzaffarnagar">679 Muzaffarnagar</option>
              <option value="86 Muzaffarpur">86 Muzaffarpur</option>
              <option value="266 Mysore">266 Mysore</option>
              <option value="470 Nabarangpur">470 Nabarangpur</option>
              <option value="728 Nadia">728 Nadia</option>
              <option value="56 Nagaon">56 Nagaon</option>
              <option value="576 Nagapattinam">576 Nagapattinam</option>
              <option value="597 Nagarkurnool">597 Nagarkurnool</option>
              <option value="532 Nagaur">532 Nagaur</option>
              <option value="365 Nagpur">365 Nagpur</option>
              <option value="709 Nainital">709 Nainital</option>
              <option value="90 Nalanda">90 Nalanda</option>
              <option value="52 Nalbari">52 Nalbari</option>
              <option value="598 Nalgonda">598 Nalgonda</option>
              <option value="558 Namakkal">558 Namakkal</option>
              <option value="36 Namsai">36 Namsai</option>
              <option value="382 Nanded">382 Nanded</option>
              <option value="729 Nandigram HD (East Medinipore)">
                729 Nandigram HD (East Medinipore)
              </option>
              <option value="387 Nandurbar">387 Nandurbar</option>
              <option value="613 Narayanpet">613 Narayanpet</option>
              <option value="129 Narayanpur">129 Narayanpur</option>
              <option value="184 Narmada">184 Narmada</option>
              <option value="352 Narsinghpur">352 Narsinghpur</option>
              <option value="389 Nashik">389 Nashik</option>
              <option value="164 Navsari">164 Navsari</option>
              <option value="92 Nawada">92 Nawada</option>
              <option value="462 Nayagarh">462 Nayagarh</option>
              <option value="323 Neemuch">323 Neemuch</option>
              <option value="140 New Delhi">140 New Delhi</option>
              <option value="3 Nicobar">3 Nicobar</option>
              <option value="577 Nilgiris">577 Nilgiris</option>
              <option value="599 Nirmal">599 Nirmal</option>
              <option value="600 Nizamabad">600 Nizamabad</option>
              <option value="412 Noney">412 Noney</option>
              <option value="730 North 24 Parganas">
                730 North 24 Parganas
              </option>
              <option value="1 North and Middle Andaman">
                1 North and Middle Andaman
              </option>
              <option value="146 North Delhi">146 North Delhi</option>
              <option value="147 North East Delhi">147 North East Delhi</option>
              <option value="423 North Garo Hills">423 North Garo Hills</option>
              <option value="151 North Goa">151 North Goa</option>
              <option value="537 North Sikkim">537 North Sikkim</option>
              <option value="617 North Tripura">617 North Tripura</option>
              <option value="143 North West Delhi">143 North West Delhi</option>
              <option value="465 Nuapada">465 Nuapada</option>
              <option value="205 Nuh">205 Nuh</option>
              <option value="381 Osmanabad">381 Osmanabad</option>
              <option value="19 Pakke Kessang">19 Pakke Kessang</option>
              <option value="261 Pakur">261 Pakur</option>
              <option value="308 Palakkad">308 Palakkad</option>
              <option value="246 Palamu">246 Palamu</option>
              <option value="564 Palani">564 Palani</option>
              <option value="394 Palghar">394 Palghar</option>
              <option value="529 Pali">529 Pali</option>
              <option value="207 Palwal">207 Palwal</option>
              <option value="187 Panchkula">187 Panchkula</option>
              <option value="185 Panchmahal">185 Panchmahal</option>
              <option value="195 Panipat">195 Panipat</option>
              <option value="326 Panna">326 Panna</option>
              <option value="39 Papum Pare">39 Papum Pare</option>
              <option value="573 Paramakudi">573 Paramakudi</option>
              <option value="385 Parbhani">385 Parbhani</option>
              <option value="731 Paschim Medinipore">
                731 Paschim Medinipore
              </option>
              <option value="161 Patan">161 Patan</option>
              <option value="300 Pathanamthitta">300 Pathanamthitta</option>
              <option value="486 Pathankot">486 Pathankot</option>
              <option value="494 Patiala">494 Patiala</option>
              <option value="97 Patna">97 Patna</option>
              <option value="698 Pauri Garhwal">698 Pauri Garhwal</option>
              <option value="601 Peddapalli">601 Peddapalli</option>
              <option value="570 Perambalur">570 Perambalur</option>
              <option value="435 Peren">435 Peren</option>
              <option value="443 Phek">443 Phek</option>
              <option value="411 Pherzawl">411 Pherzawl</option>
              <option value="680 Pilibhit">680 Pilibhit</option>
              <option value="706 Pithoragarh">706 Pithoragarh</option>
              <option value="575 Poonamallee">575 Poonamallee</option>
              <option value="238 Poonch">238 Poonch</option>
              <option value="172 Porbandar">172 Porbandar</option>
              <option value="12 Prakasam">12 Prakasam</option>
              <option value="682 Pratapgarh">682 Pratapgarh</option>
              <option value="522 Pratapgarh">522 Pratapgarh</option>
              <option value="624 Prayagraj">624 Prayagraj</option>
              <option value="475 Puducherry">475 Puducherry</option>
              <option value="546 Pudukkottai">546 Pudukkottai</option>
              <option value="227 Pulwama">227 Pulwama</option>
              <option value="363 Pune">363 Pune</option>
              <option value="732 Purba Medinipore">732 Purba Medinipore</option>
              <option value="463 Puri">463 Puri</option>
              <option value="73 Purnia">73 Purnia</option>
              <option value="733 Purulia">733 Purulia</option>
              <option value="681 Raebareli">681 Raebareli</option>
              <option value="284 Raichur">284 Raichur</option>
              <option value="393 Raigad">393 Raigad</option>
              <option value="130 Raigarh">130 Raigarh</option>
              <option value="109 Raipur">109 Raipur</option>
              <option value="359 Raisen">359 Raisen</option>
              <option value="602 Rajanna Sircilla">602 Rajanna Sircilla</option>
              <option value="358 Rajgarh">358 Rajgarh</option>
              <option value="173 Rajkot">173 Rajkot</option>
              <option value="775 Rajkot Corporation">
                775 Rajkot Corporation
              </option>
              <option value="131 Rajnandgaon">131 Rajnandgaon</option>
              <option value="237 Rajouri">237 Rajouri</option>
              <option value="518 Rajsamand">518 Rajsamand</option>
              <option value="292 Ramanagara">292 Ramanagara</option>
              <option value="567 Ramanathapuram">567 Ramanathapuram</option>
              <option value="235 Ramban">235 Ramban</option>
              <option value="254 Ramgarh">254 Ramgarh</option>
              <option value="683 Rampur">683 Rampur</option>
              <option value="734 Rampurhat HD (Birbhum)">
                734 Rampurhat HD (Birbhum)
              </option>
              <option value="240 Ranchi">240 Ranchi</option>
              <option value="603 Rangareddy">603 Rangareddy</option>
              <option value="781 Ranipet">781 Ranipet</option>
              <option value="322 Ratlam">322 Ratlam</option>
              <option value="372 Ratnagiri">372 Ratnagiri</option>
              <option value="471 Rayagada">471 Rayagada</option>
              <option value="239 Reasi">239 Reasi</option>
              <option value="316 Rewa">316 Rewa</option>
              <option value="202 Rewari">202 Rewari</option>
              <option value="417 Ri-Bhoi">417 Ri-Bhoi</option>
              <option value="192 Rohtak">192 Rohtak</option>
              <option value="81 Rohtas">81 Rohtas</option>
              <option value="700 Rudraprayag">700 Rudraprayag</option>
              <option value="497 Rup Nagar">497 Rup Nagar</option>
              <option value="162 Sabarkantha">162 Sabarkantha</option>
              <option value="317 Sagar">317 Sagar</option>
              <option value="684 Saharanpur">684 Saharanpur</option>
              <option value="71 Saharsa">71 Saharsa</option>
              <option value="260 Sahebganj">260 Sahebganj</option>
              <option value="545 Salem">545 Salem</option>
              <option value="96 Samastipur">96 Samastipur</option>
              <option value="236 Samba">236 Samba</option>
              <option value="452 Sambalpur">452 Sambalpur</option>
              <option value="685 Sambhal">685 Sambhal</option>
              <option value="604 Sangareddy">604 Sangareddy</option>
              <option value="373 Sangli">373 Sangli</option>
              <option value="498 Sangrur">498 Sangrur</option>
              <option value="686 Sant Kabir Nagar">686 Sant Kabir Nagar</option>
              <option value="102 Saran">102 Saran</option>
              <option value="496 SAS Nagar">496 SAS Nagar</option>
              <option value="376 Satara">376 Satara</option>
              <option value="333 Satna">333 Satna</option>
              <option value="534 Sawai Madhopur">534 Sawai Madhopur</option>
              <option value="500 SBS Nagar">500 SBS Nagar</option>
              <option value="356 Sehore">356 Sehore</option>
              <option value="403 Senapati">403 Senapati</option>
              <option value="349 Seoni">349 Seoni</option>
              <option value="618 Sepahijala">618 Sepahijala</option>
              <option value="248 Seraikela Kharsawan">
                248 Seraikela Kharsawan
              </option>
              <option value="430 Serchhip">430 Serchhip</option>
              <option value="148 Shahdara">148 Shahdara</option>
              <option value="332 Shahdol">332 Shahdol</option>
              <option value="688 Shahjahanpur">688 Shahjahanpur</option>
              <option value="321 Shajapur">321 Shajapur</option>
              <option value="689 Shamli">689 Shamli</option>
              <option value="93 Sheikhpura">93 Sheikhpura</option>
              <option value="87 Sheohar">87 Sheohar</option>
              <option value="346 Sheopur">346 Sheopur</option>
              <option value="35 Shi Yomi">35 Shi Yomi</option>
              <option value="208 Shimla">208 Shimla</option>
              <option value="287 Shimoga">287 Shimoga</option>
              <option value="345 Shivpuri">345 Shivpuri</option>
              <option value="222 Shopian">222 Shopian</option>
              <option value="690 Shravasti">690 Shravasti</option>
              <option value="433 Siaha">433 Siaha</option>
              <option value="37 Siang">37 Siang</option>
              <option value="691 Siddharthnagar">691 Siddharthnagar</option>
              <option value="605 Siddipet">605 Siddipet</option>
              <option value="331 Sidhi">331 Sidhi</option>
              <option value="513 Sikar">513 Sikar</option>
              <option value="249 Simdega">249 Simdega</option>
              <option value="374 Sindhudurg">374 Sindhudurg</option>
              <option value="330 Singrauli">330 Singrauli</option>
              <option value="212 Sirmaur">212 Sirmaur</option>
              <option value="531 Sirohi">531 Sirohi</option>
              <option value="194 Sirsa">194 Sirsa</option>
              <option value="88 Sitamarhi">88 Sitamarhi</option>
              <option value="692 Sitapur">692 Sitapur</option>
              <option value="561 Sivaganga">561 Sivaganga</option>
              <option value="580 Sivakasi">580 Sivakasi</option>
              <option value="44 Sivasagar">44 Sivasagar</option>
              <option value="103 Siwan">103 Siwan</option>
              <option value="209 Solan">209 Solan</option>
              <option value="375 Solapur">375 Solapur</option>
              <option value="693 Sonbhadra">693 Sonbhadra</option>
              <option value="198 Sonipat">198 Sonipat</option>
              <option value="64 Sonitpur">64 Sonitpur</option>
              <option value="735 South 24 Parganas">
                735 South 24 Parganas
              </option>
              <option value="2 South Andaman">2 South Andaman</option>
              <option value="149 South Delhi">149 South Delhi</option>
              <option value="144 South East Delhi">144 South East Delhi</option>
              <option value="421 South Garo Hills">421 South Garo Hills</option>
              <option value="152 South Goa">152 South Goa</option>
              <option value="768 South Salmara Mankachar">
                768 South Salmara Mankachar
              </option>
              <option value="538 South Sikkim">538 South Sikkim</option>
              <option value="619 South Tripura">619 South Tripura</option>
              <option value="150 South West Delhi">150 South West Delhi</option>
              <option value="422 South West Garo Hills">
                422 South West Garo Hills
              </option>
              <option value="415 South West Khasi Hills">
                415 South West Khasi Hills
              </option>
              <option value="509 Sri Ganganagar">509 Sri Ganganagar</option>
              <option value="490 Sri Muktsar Sahib">
                490 Sri Muktsar Sahib
              </option>
              <option value="13 Sri Potti Sriramulu Nellore">
                13 Sri Potti Sriramulu Nellore
              </option>
              <option value="14 Srikakulam">14 Srikakulam</option>
              <option value="220 Srinagar">220 Srinagar</option>
              <option value="466 Subarnapur">466 Subarnapur</option>
              <option value="132 Sukma">132 Sukma</option>
              <option value="694 Sultanpur">694 Sultanpur</option>
              <option value="453 Sundargarh">453 Sundargarh</option>
              <option value="72 Supaul">72 Supaul</option>
              <option value="133 Surajpur">133 Surajpur</option>
              <option value="165 Surat">165 Surat</option>
              <option value="776 Surat Corporation">
                776 Surat Corporation
              </option>
              <option value="157 Surendranagar">157 Surendranagar</option>
              <option value="134 Surguja">134 Surguja</option>
              <option value="606 Suryapet">606 Suryapet</option>
              <option value="404 Tamenglong">404 Tamenglong</option>
              <option value="166 Tapi">166 Tapi</option>
              <option value="495 Tarn Taran">495 Tarn Taran</option>
              <option value="30 Tawang">30 Tawang</option>
              <option value="701 Tehri Garhwal">701 Tehri Garhwal</option>
              <option value="407 Tengnoupal">407 Tengnoupal</option>
              <option value="551 Tenkasi">551 Tenkasi</option>
              <option value="392 Thane">392 Thane</option>
              <option value="541 Thanjavur">541 Thanjavur</option>
              <option value="569 Theni">569 Theni</option>
              <option value="296 Thiruvananthapuram">
                296 Thiruvananthapuram
              </option>
              <option value="554 Thoothukudi (Tuticorin)">
                554 Thoothukudi (Tuticorin)
              </option>
              <option value="405 Thoubal">405 Thoubal</option>
              <option value="303 Thrissur">303 Thrissur</option>
              <option value="325 Tikamgarh">325 Tikamgarh</option>
              <option value="45 Tinsukia">45 Tinsukia</option>
              <option value="26 Tirap">26 Tirap</option>
              <option value="560 Tiruchirappalli">560 Tiruchirappalli</option>
              <option value="548 Tirunelveli">548 Tirunelveli</option>
              <option value="550 Tirupattur">550 Tirupattur</option>
              <option value="568 Tiruppur">568 Tiruppur</option>
              <option value="572 Tiruvallur">572 Tiruvallur</option>
              <option value="553 Tiruvannamalai">553 Tiruvannamalai</option>
              <option value="574 Tiruvarur">574 Tiruvarur</option>
              <option value="526 Tonk">526 Tonk</option>
              <option value="440 Tuensang">440 Tuensang</option>
              <option value="288 Tumkur">288 Tumkur</option>
              <option value="504 Udaipur">504 Udaipur</option>
              <option value="65 Udalguri">65 Udalguri</option>
              <option value="705 Udham Singh Nagar">
                705 Udham Singh Nagar
              </option>
              <option value="233 Udhampur">233 Udhampur</option>
              <option value="286 Udupi">286 Udupi</option>
              <option value="318 Ujjain">318 Ujjain</option>
              <option value="406 Ukhrul">406 Ukhrul</option>
              <option value="329 Umaria">329 Umaria</option>
              <option value="218 Una">218 Una</option>
              <option value="620 Unakoti">620 Unakoti</option>
              <option value="695 Unnao">695 Unnao</option>
              <option value="34 Upper Siang">34 Upper Siang</option>
              <option value="41 Upper Subansiri">41 Upper Subansiri</option>
              <option value="736 Uttar Dinajpur">736 Uttar Dinajpur</option>
              <option value="281 Uttar Kannada">281 Uttar Kannada</option>
              <option value="703 Uttarkashi">703 Uttarkashi</option>
              <option value="155 Vadodara">155 Vadodara</option>
              <option value="777 Vadodara Corporation">
                777 Vadodara Corporation
              </option>
              <option value="89 Vaishali">89 Vaishali</option>
              <option value="167 Valsad">167 Valsad</option>
              <option value="696 Varanasi">696 Varanasi</option>
              <option value="543 Vellore">543 Vellore</option>
              <option value="355 Vidisha">355 Vidisha</option>
              <option value="293 Vijayapura">293 Vijayapura</option>
              <option value="607 Vikarabad">607 Vikarabad</option>
              <option value="542 Viluppuram">542 Viluppuram</option>
              <option value="549 Virudhunagar">549 Virudhunagar</option>
              <option value="8 Visakhapatnam">8 Visakhapatnam</option>
              <option value="15 Vizianagaram">15 Vizianagaram</option>
              <option value="608 Wanaparthy">608 Wanaparthy</option>
              <option value="609 Warangal(Rural)">609 Warangal(Rural)</option>
              <option value="610 Warangal(Urban)">610 Warangal(Urban)</option>
              <option value="377 Wardha">377 Wardha</option>
              <option value="369 Washim">369 Washim</option>
              <option value="299 Wayanad">299 Wayanad</option>
              <option value="737 West Bardhaman">737 West Bardhaman</option>
              <option value="106 West Champaran">106 West Champaran</option>
              <option value="142 West Delhi">142 West Delhi</option>
              <option value="420 West Garo Hills">420 West Garo Hills</option>
              <option value="16 West Godavari">16 West Godavari</option>
              <option value="416 West Jaintia Hills">
                416 West Jaintia Hills
              </option>
              <option value="28 West Kameng">28 West Kameng</option>
              <option value="769 West Karbi Anglong">
                769 West Karbi Anglong
              </option>
              <option value="419 West Khasi Hills">419 West Khasi Hills</option>
              <option value="38 West Siang">38 West Siang</option>
              <option value="536 West Sikkim">536 West Sikkim</option>
              <option value="263 West Singhbhum">263 West Singhbhum</option>
              <option value="621 West Tripura">621 West Tripura</option>
              <option value="436 Wokha">436 Wokha</option>
              <option value="611 Yadadri Bhuvanagiri">
                611 Yadadri Bhuvanagiri
              </option>
              <option value="285 Yadgir">285 Yadgir</option>
              <option value="197 Yamunanagar">197 Yamunanagar</option>
              <option value="478 Yanam">478 Yanam</option>
              <option value="368 Yavatmal">368 Yavatmal</option>
              <option value="6 YSR District, Kadapa (Cuddapah)">
                6 YSR District, Kadapa (Cuddapah)
              </option>
              <option value="442 Zunheboto">442 Zunheboto</option>
            </Form.Control>
          </Form.Group>

          <div className="name">
            <Form.Group>
              <Form.Control
                size="lg"
                type="number"
                placeholder="Phone (Without country code) (optional)"
              />
            </Form.Group>

            <div className="pin">
              <Form.Group>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Pin Code"
                  onChange={(e) => setPin(e.target.value)}
                />
              </Form.Group>
            </div>
          </div>
          <div className="mybutton">
            <Button variant="danger" size="lg" onClick={onGetNotified}>
              Get Notified
            </Button>{" "}
          </div>
        </div>
      </div>
      <div className="FAQ">*General Questions/ FAQ</div>
      <div className="acco">
        <Accordion defaultActiveKey="0" className="pokemon">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              How this site works?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                Just enter either your pincode or state and district and this
                site will give you instant notification whenever we detect an
                availability. Note that to receive notification you have to keep
                the site open
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              How will I receive the notification?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                This site will make a bell like sound whenever an availability
                is detected. We suggest you to also keep cowin site open in
                order to immediately book the slot.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              Is my personal data collected?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                No we do not collect any personal data from the user. This site
                remains 100% transparent. Any queries contact the developers
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>

      <div className="myFooter">
        <footer class="page-footer font-small blue">
          <div class="footer-copyright text-center py-3">
            ?? 2020 Copyright:
            <a href="/"> Covid Relief Ninjas</a>
          </div>
        </footer>
      </div>
    </div>
  );
};
