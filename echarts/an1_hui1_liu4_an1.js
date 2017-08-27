(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('六安', {"type":"FeatureCollection","features":[{"type":"Feature","id":"341502","properties":{"name":"金安区","cp":[116.539173,31.750119],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@EGCGCECI@@@AAECI@E@AAGEGKIKCKAIBIBKDOB@F@DBHBLDHDHDFDHBJBD@HCHAJABC@A@AB@@CBC@AAC@GA@@ECCAA@GE@@EAAAA@A@A@C@ABE@@BABAB@BADAB@B@BAF@DDDBHBBDF@BBD@FBH@B@BB@BBBA@@DABALADAB@BBB@@@@@BBB@B@B@BAB@BABC@@BB@@@DABADABAH@B@B@DABCFCHAHAD@B@FCH@DAH@@@@@BCJ@FAHCHGHIBI@MHIFABA@ABGHEL@FFJDFJJDAFCHAHB@@@BBDAH@H@DBHBFBFABADECGCGL@FCH@@GBGBEBAJEJCDCHELCF@DBB@BADEFEHGFEDBB@@BBD@@@BB@@BBBBB@BBBB@@AB@@BD@@B@@BB@B@@@@BB@@B@@@B@@B@@@BBB@@B@BBBA@@D@@BBBA@@@AB@@@D@@@@BB@BBBA@BB@@@@@@B@BAB@@B@BA@@@@BBDBB@BABAB@@B@@@BABBB@BA@CFCFBB@@B@BAB@@BB@@@AB@B@@@B@B@@B@@@DB@@BBADBB@@BBB@BB@@B@CB@B@@@@@@@BBBBB@BAB@@ADED@BA@@B@@B@@B@D@BAB@@@BB@@BBDBB@B@@@B@@BFBBA@@BA@A@@B@@A@@B@@A@@B@@@BA@AB@@AB@@@@@BBDDDBB@BBFDDDDBB@@BBBFDBBBBBDD@B@B@D@D@BADBF@BBB@@DB@BBBBJBB@D@BB@BABABA@C@@B@@@@BB@@@@@@B@@B@B@@@@@B@@BB@@@@@@BBBBABBB@@@@BB@@BB@@AB@B@@@@B@B@@A@@BA@@B@@@@@@@B@@@@@B@B@BA@B@@@@BB@@@BB@@@@BB@@BB@D@BABB@B@@@@@BA@B@B@@@BB@B@@@A@@B@DB@@B@@D@B@@@@@@B@@@@@@@@@@B@@@@@@B@@@BD@ABA@A@@BE@@D@@A@@@@B@BBB@@@@BB@@ABA@ABA@AD@@@@B@@B@@AB@@A@@B@@BB@@@B@@A@@BA@AB@B@@A@BB@@@@@@ABADBB@@@@BB@@@BA@@@@@BB@@D@B@@A@@@@BB@@@@@A@AB@@@@@@BB@@@B@@@@@A@A@@B@@B@@B@@@@@B@AB@BCB@@@BBA@@B@@@@@@@@B@@@@@@B@@@@@BAB@@ABA@@B@@ABAB@D@B@BA@@BB@@BB@A@AB@@@BB@@@@@CB@@@B@@AB@FA@@BA@A@A@CA@BA@AB@BAAAAEC@@@B@@@@ABA@@BA@@B@@@@BB@@AD@B@D@F@@@@@@AB@@@B@@@@AB@AA@@@A@@@@@AAA@@@A@@@A@A@@@A@@AA@@@@DAB@@@@@B@@@@@@@B@@@BB@A@BB@@@@@B@@@@@@@@@B@BB@@B@@@@@B@@@@@@@B@@@D@@@@@@@B@@@@@@B@B@@@BB@B@B@@@@@B@@@B@@@@@@@@@BB@@B@@BBA@@@@@@@B@@@@@@BB@A@@@A@@@@@@@AB@B@@@@@@AA@@A@A@@@@@@@AA@@@@@@A@AB@@@@@@A@@A@@AB@FDDDJDDDJBDDF@@DJBDBF@BABAB@@BBDDFD@FDDBD@D@DCHAD@BABCD@@@B@BBFBBBD@DBB@BB@BBBBBBD@D@@@@@BB@B@BB@@B@DAB@B@DDBBBBBBD@FBDAJ@BBDADAFCH@F@BBD@B@B@@CB@BADABABCBE@G@C@CAA@KBE@C@@@A@A@AB@B@BA@@BA@@@A@@BAD@BABADAF@D@B@BBBB@BB@@@BADAB@B@BBBBDBBBBB@BBBBDBBBFAFBB@F@FAD@BBB@BBBBBD@D@F@F@DBL@BCDAD@D@B@DABAB@BB@@BB@BBB@@B@D@@@B@D@BADCDABCBABA@@B@BBBAD@DBF@J@B@BB@BBB@@BBB@BEHCDCFAD@B@B@@@D@FBDDDBBB@@BDDFDDDBBDB@@DBB@B@H@DA@@BAB@D@BB@@B@B@B@DAD@BAB@D@B@BB@@@@DAHAHCHAD@DAJADAH@B@HBHADAB@HCFCFCBADADAHEFCDCFEPEDA@@@@HAHCLEB@PEDAHABA@@FA@ALCHC@@FAHAF@HABADGBECUBU@Q@O@G@G@EAGDKFIJEH@HDHBHDHDFDFDHDHDNBHBHBJ@L@NEJAH@@AD@JEGIEEIAKCICGEICIEI@GCGAGCCCCE@CDGFCDC@E@CACDEFGF@L@FBHACEEGCAACEAAAECGEGAGCICGCGCEEECCGAC@CABC@A@A@@AAABABAB@@A@@DA@A@AB@@ABAB@@@@@@A@@@AB@@@B@@A@@B@@@@@@A@@@AB@@@@@D@@@@@@@@A@@@A@@B@@@B@@@B@@A@A@@BA@@DA@@B@BA@A@@B@B@@@@@@A@@A@@A@@@@B@@@@@@BBA@B@A@@@@BA@@BA@@BA@C@@B@@@@@@A@@A@@@@A@A@@@A@@@A@@@AB@@A@@@@A@@A@@@@@@B@@@@@@@B@@@BA@ABA@ADAD@JFDBBAFADE@EAC@AAAAA@AAA@ED@BAB@F@FBJ@F@H@FAFCBGBEAG@@@IAEAGACAA@@CGAE@EBEHKDEDCBCBGBGAA@C@GAI@ABC@A@CFEBC@CBG@EACCCGGCE@ACCCEACAE@G@GBKBABGDADEBE@C@@@@BADA@ABABABIAE@C@C@C@A@C@E@C@A@ABE@C@AAA@ACE@A@A@A@ABEDC@A@A@A@ABABAHC@ABABA@A@AB@@ABCDADABAB@DABCBADCBABABCBC@CB@@@D@BABADAB@FA@@B@DCBA@A@@@AAA@@@AB@@@B@@@B@BB@@B@B@@AB@D@@@BA@A@A@@@AB@@@B@@@B@@@BC@ADABA@A@ABAB@@@B@@@@@B@@@D@@A@ABA@@@AB@@@BA@ABB@@B@@@@@BA@@B@@@B@@B@B@@B@@@@@BA@@AA@@@A@@@ABA@@@@@A@AAACAAA@@AC@@AA@AA@A@A@@@@@@@@A@A@@@A@@A@@AA@@A@@B@@A@@AA@@AAA@AA@@@AA@@AA@@@@AAA@A@AB@BA@C@A@A@@A@AA@@@A@@@AA@@@CBA@@@@A@A@@@@A@AA@A@@@@AAA@@@@@@A@@BA@A@@B@@A@@@A@@AA@@AB@@A@@@C@AACA@A@@BA@@@A@@@AA@CAC@@@@@A@@@@A@A@@@@BAB@BA@A@A@@C@C@AA@@@@A@@@AB@AA@@@AA@@@A@A@@@A@@AA@@A@ABA@A@@@EA@@A@@AB@@AA@@@A@A@A@@@@AA@@@A@CB@@A@AA@@A@AA@@A@AC@@@@A@@@AB@@A@@ACA@@A@@@A@@BA@@@@@AA@AA@@@A@ABA@@@A@A@A@AACCAAA@A@@AA@AA@@A@@A@AAA@@A@A@A@@@AAA@A@A@AA@@A@@@A@A@@@@A@A@@A@CAA@@@A@A@@@A@@AAA@AA@A@@@AB@BAB@@A@A@@AAA@AA@@@A@@@A@ABADABA@@@A@@@@@@A@A@@A@@@A@ABA@A@A@@A@@BA@A@A@@A@A@@@A@@@@@AC@@@AA@@@AAABA@@BA@@@CBA@C@A@A@A@@AAAAA@@C@@BA@AAA@A@@@@@@@@A@@B@BAB@@AB@@A@@@AA@@@CAC@KCKAOCECCCAGACEEEC@@GGCCCECGAG@G@CEIEKIEQE@@A@CB@@EAEAICGAGDGDGDIFI@GCEKAC@@@@ACAIA@@CAAAA@EDGB@FCHI@A@@@@FEBE@C"],"encodeOffsets":[[119385,32075]]}},{"type":"Feature","id":"341504","properties":{"name":"叶集区","cp":[115.925271,31.863693],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@I@IFGDCDGDGFIHIFCBGDABCBEHC@CBEAEA@@C@C@IBE@CBGBEFEBIFMFQDGBABA@GBC@C@A@CC@A@ABEBCBA@CAC@CCCAAC@A@ABCDCDEBED@B@F@DBDDH@H@D@FAFIHCDADCDCBC@A@C@CBABAB@@@H@BBD@B@@@DBH@B@R@D@@BB@@@B@B@@@B@@@BAB@@BFDFBB@BAH@B@B@B@BDBDBDBHNDHBBN^@DFR@BCH@BCDAF@DBB@DABGHEDAH@J@@@@BHFFDHFVJJDL@DADAD@BBBDHDBB@DADA@@BBBABA@@A@@AB@B@@@B@@@@AA@@ABA@B@@BB@@B@@A@@@A@A@@B@@@@@@B@@@B@@B@@@@@@AA@B@@A@@B@A@AA@@@@@A@A@@AA@@@@B@@@@@@BB@@@B@@A@@@@@AA@@AB@@@B@D@@@@AB@@@BA@B@@@@B@@B@@@@@@F@B@@@@B@@@@@B@B@@A@@B@@@@@@@@B@@@B@@@@B@@@B@@B@@@B@@@BB@@@ABB@@@@@@@@BB@@@@B@@BBA@BBA@@BAB@B@@BB@@B@@BB@@@AB@@B@@B@@@@@BA@A@ABA@@DABAB@DC@@@A@AAA@C@AAA@A@ABAB@B@B@B@D@@@@@@B@@AB@@@B@@BDB@@@@@AB@@@B@@@@BB@@@@B@@@@BBAB@@@@@BAB@@@B@@@@@@@B@@@@@AC@@@A@@B@B@@@@@@@@AAA@@@A@@@@@@AA@@@@@AF@B@@AA@@@@A@@B@@@@A@@@@AC@AB@BABA@@B@@AB@B@@@BB@@@BB@@BB@@A@@@AB@@A@A@@@@@AB@@@@A@@@@@AFABBB@B@@B@@BB@@B@D@B@BB@DB@@@@B@@@B@@@@@BB@AB@@BB@@@AB@BA@@B@@@@@B@B@B@BDB@B@@@B@@@@@@A@@@A@A@@FA@@D@@@BB@BB@@B@@@@BB@@B@@B@@B@@B@@@DB@@B@@@BA@@@@@@@@BB@B@@BBA@@B@@@A@@AB@A@@AB@@ABAA@@@B@@@BA@@@@@A@@@AB@@A@@B@B@@A@@@@@A@@BA@@@@B@@AB@@AB@AAB@@A@@B@@BB@@@@AB@@@@AB@B@@BB@@ABBBB@@B@B@@@@@B@@A@@@@@@B@@B@@@A@BB@@BB@@@B@@@B@@@@@B@@B@B@A@@B@@B@@@@@@@B@@BA@BB@A@@B@@@@B@@@@A@@@@B@@ABA@@B@@A@@B@@@@A@@@@@@@@@@@ABA@@@@B@@@B@@@B@@@@BDA@ABA@A@@@A@@CB@@A@@@A@AAA@@AA@@@@AB@@@@@@@B@@@B@@@B@@@@@@@@@@AB@@@@@B@BA@@@@@@@@@@@@@@B@BA@@@@@AA@@A@@@AD@AAD@@@B@@@D@@A@@@AB@@@BA@@@@@A@@B@@@B@BA@@B@@@BABBB@D@@AB@@BB@@@B@@@B@@@@@@ABA@@AA@@@@@@@@@AA@@@@@@@@A@@@@B@BBAA@@@@@A@@AA@@BA@BB@@@@@@@B@@@@@@@@BB@@@@@@@B@B@@@@A@@@@B@@AB@@B@@@@@@@@@@@@B@@@@@@@B@@B@@@@B@@@@@@@B@@@B@@AB@@@B@BAB@BAB@B@BABB@@B@B@@@@B@@BAB@B@BABB@@@AB@@@@@@A@@B@@@B@B@@@B@@@@BB@@@B@@AB@@@B@@@B@@A@A@@B@B@@@@A@@@A@@@@@@@@B@B@@@@@B@@B@@@@BA@@B@@@B@BB@@@@B@@BB@@@BA@@@@@A@@B@@B@@B@@@@A@@B@ABB@@@B@@@@@B@BA@@@@@@BB@@@B@@@AB@@A@@@B@@B@@@B@@@@@B@@@B@@@@@B@@@@@B@@@BB@AB@@@@@B@@@@BA@@@@B@@@@@@D@@@@BBB@@B@BCB@@@@@BBDB@@B@BA@@@A@@BA@@BB@@@@@B@@@B@@B@@D@BBBDBB@@@BAB@BAB@BA@@B@@AB@@BB@BBBAD@B@@@DBBBB@B@BBB@@BBB@@BBB@FBB@@@BB@BD@@@D@@@BB@BAB@@@BB@@BBBB@B@BA@@B@D@BBBB@@BB@@BABB@@B@HCGGAAB@@AC@@AA@@A@@@A@@B@B@DB@@BAB@@AA@@AC@@AAA@@A@A@A@@@A@BA@@@ABA@@@AA@@@A@@BAB@@A@A@AC@@A@@@@B@B@@@@CD@@AB@BC@A@@@@A@@@C@@@@A@@@A@@A@A@@CAAAAAA@C@@@AAAA@@@A@@B@B@B@B@@BBBB@BA@C@@@@@ABA@A@AA@@@A@@@A@@B@@@BA@@@A@@@ACA@AA@@@C@A@A@A@@@A@@C@@AAA@@@@DAB@@@@A@@C@@@AA@@@A@@B@@ABA@@B@B@@@@@@A@@@A@@@@BA@@@@BBBB@@BA@@B@@BD@@@B@@A@@@@A@AAA@@A@@BA@@B@B@@A@@@A@@@@A@ABA@@AA@@A@@@@BA@@BB@A@A@@@@@AB@B@B@BABA@A@@@AAAA@@@ABA@@@@AA@@@@ABA@@@AAA@A@@B@BAB@@@@A@@AAA@@@@ABA@@@A@@@AA@AA@@CB@@A@@@@@@A@@BA@ABCBA@A@@@@DABA@@A@AAA@AC@@A@AAAA@@A@@AA@@A@@@ABA@@@C@AB@@@@@D@@@BA@@@AA@@@AA@@@A@A@@@ACA@@@@AA@@@AB@B@B@@@@A@@A@@CA@A@@AA@@A@A@@BA@@B@@@@@BB@B@B@@B@@@@@BA@ABAB@@@@C@C@@AAAA@@@@@A@AB@@@B@B@BB@@@A@@@A@@CAIAGCGAAAAC@EBEBG@C@G@A@E@CDIDCBCBABA@CAI@CAEAIAC@AACEK@AAAEBEFAFEBC@EA@CAC@E@CAAEGAACACCEAIGMCMCMAGCC@AHCDIBGBIBI@CBI@IBEBEDCH@FBB@DBDBD@F@DEDGCEAAACAGAECECGAKAEAIEEAIAE@A@"],"encodeOffsets":[[118827,32526]]}},{"type":"Feature","id":"341503","properties":{"name":"裕安区","cp":[116.479829,31.738183],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BCBCFIBC@A@C@C@CACCCCCEA@AC@EAA@@AACA@AAEACAC@A@A@@B@B@BBBBDB@BBB@DBFBHD@BADCFABABCFABCDOJGBEBKFCBEDIB@@@@@@@@@@@@@@I@KB@@A@@@KHED@BA@EBIBC@@@C@GAEC@C@G@GACACAAEEECCCEECCCCGBC@ABI@I@IAGAICIAIAKBGBCBGBIDKFIJGRELADJFDBDFHJHHDFBDAF@F@@AJAFBHDHDJLFHBD@DFBBBD@FBHCBIAM@QJQBOBIDGDGFCFCFC@I@M@KBKFIDAD@H@JAF@BADEDEDGDA@A@@@G@WAG@GAG@EBABGDEFEBGBGFEDCHCHCDEBG@GBA@IBGDEJCJ@H@JBHDHFFLDJ@H@F@HDDDBDBFBFDDDDHDHBHDFDHBFDHBD@J@FBF@JDFDLFH@JBLBJDDH@DBD@DBFBHDT@JBFDTD@HDNBNDNDJHFBDDDBBBFHBB@D@FBD@DFBD@FABEFEFABB@BFLBD@BBDBJBF@DBJ@DABABADCDCJ@D@F@B@H@DAHAF@FBDBBHBHDJBDB@@@B@@@B@@AAA@A@@@A@@B@B@@@@BBBB@@@D@D@@A@AB@BAB@@@@A@@@@A@AAA@@@@A@@@AB@@@B@BB@@BB@B@@DB@@@@B@@A@A@A@@B@@BB@@@@DB@B@@@B@B@@BB@@B@@B@@AB@@C@@@@@A@@B@D@@AB@B@@@BB@@BB@@@BBBBB@@@BDB@BBB@@@ABCB@@@@@BABAD@BAB@@@B@@@@B@@@DA@@BBB@@B@@@B@@AB@B@@B@BB@@@B@@A@ABA@@@@BBB@B@@AB@B@@B@@B@@B@BA@@B@BB@B@@@BABABA@A@A@@B@@@@@B@BAA@@AB@@@@@BB@@BB@BAB@@@@@@B@@@BA@A@@@AB@@@BB@BBB@@@@@@BA@@@C@@AA@@@AB@@AAAA@@@@AB@@@@@B@@@B@@@@A@A@@@AB@BA@@@@B@@BB@@D@@@@B@@A@CB@@@@BB@BD@@@@B@@@B@B@B@D@@BBB@BD@@B@@@B@@A@@@AB@@@B@@@B@@B@BAB@B@@@@@DABA@AA@AA@A@A@A@@@@B@@BBBB@@D@B@BBBBDB@@@B@BB@@@B@@@@@@D@@@B@@B@D@@ABA@@DC@@@@@A@A@@B@@@BDB@B@@@BA@AB@@@B@@B@@AB@B@@ABB@@@B@B@B@@@BB@BD@@BB@@BA@AB@@CAA@A@@@@B@@@BB@@BD@@BA@BBHHFFHHDFPNJFFJDHDDBL@DFP@@HHBBFFDF@FBD@DDDBFFFBFBDDDDFFDBDDFDFBBDBDBDDDBFDDBFBH@DAB@@AHCDAFCFCFCHA@@@@BAD@DABBD@H@D@DBBBDBJBDBBAB@JEBABA@A@@@A@@@C@CBCBABABAF@DABAB@@A@CBCBEBABA@ABABCD@BBDB@@BBB@BB@B@B@D@BBBBBB@DBB@BBBD@@BBDBF@D@DBD@B@D@BC@CAC@ABABAFC@@BABA@C@ABCBCDA@AFCDADBB@B@B@@BBB@B@BBBB@BBBB@@B@BDBDBDDDFBB@DBLBF@FAD@B@D@B@DBDD@BBBDDDH@BBBAB@DABCJ@B@B@BB@PHDDBBBABAFEJCFAFANAD@D@B@@@BBB@BB@BDB@@B@DD@@@B@F@@@@@B@BC@A@A@A@ABA@ABAB@BBB@BBB@B@@@BCDA@@BCD@@@BBBB@B@D@FAH@BADCFADA@@@@D@@@B@BBDBDDDDFBD@@@D@@@DB@@F@AA@@A@CA@ACC@AAA@C@CAE@A@AD@BABADMDE@AB@BA@CAA@ECKAGA@AA@@@@AAA@C@A@ABC@CBA@A@A@@@AAC@A@AB@@CBG@A@A@CA@@CAAACCECCC@AA@AACCAC@E@C@@@A@ABCDEDCFG@AAA@AA@AAA@@A@A@IAE@CBCAA@A@AB@BADABADCBC@A@C@A@@@C@AA@AAA@@AA@@ABABA@C@A@CBCDC@AAK@C@E@E@CACAAAAA@AAC@EBE@A@EAEBAACAAAAAA@AAAAACAA@A@ABABC@A@@AAA@AA@A@A@CBEBCBA@ABC@AB@@@B@@AB@@A@ABAB@B@@@D@F@LAB@DBD@H@F@DABABABC@ADA@@@A@AAC@A@EDGBEBCAC@ABIAC@EACAAAACA@C@ABA@C@AA@@A@AAA@@@@C@C@AAAAAAA@@AAA@CACAAAE@A@A@@DCBA@ABCDG@C@CACCC@EECCCAA@@BABA@AAEACCI@@CEACCICCCICC@EBA@@@BB@@@@@@@BAB@@@@@@@BB@@@@@@B@B@@@BB@@@@@@@ABA@@@@@@B@@@B@A@@A@@@@A@@@@@@@B@AA@@@AA@@A@@@@@@@@@A@@@A@@@@@A@AAA@@A@A@@@@@@@@A@@@@@@@C@@@A@@@@@@@A@@@@@AA@@A@A@@@@@@@@@A@@@@AAB@A@@A@@@A@@@@@@@A@@@@BA@C@@B@@BB@@@B@B@@@B@@@B@BB@@@@B@@@B@@BBA@@@@@A@@BA@@@@@@@E@C@ABC@@AA@@@@@AB@@AB@BA@@@@@A@@FDBBBB@ABAB@@ADBB@B@B@@AB@@EBA@@@A@@DA@@@@A@@A@@BAB@A@@AA@@AB@@A@A@CBABA@@@AB@BA@@BA@A@@@@@A@@@@A@@@@@@@@@@AB@AA@@A@ADA@@B@A@@@@@AA@@@@AB@B@@@@@A@@@A@@A@@@@A@@B@B@@@@AA@@@@@BA@C@@@AA@@@@B@@A@@AA@@@@AABCBA@@@@@@AAB@@@@ABAB@@AB@@@@A@@AA@@@AB@@@BA@@@AA@@@@@BCB@BAB@BA@@AA@@@@AA@A@A@@B@@@@CF@@AB@B@BAC@@A@@@A@@@@A@@@@@@@@@@@@A@@@@A@C@@@@AA@@C@AB@@@A@A@@A@@@A@AAB@@@@A@A@BA@A@CAA@@AA@@@@AA@@A@@A@@A@B@@A@A@A@@@@@A@@@@@@@AB@@AB@@@@A@A@@A@A@@BA@@AA@@A@@A@AAABAA@A@@@@A@@AA@@@@@A@A@@@@A@@@@A@@A@@A@@@@DABABABA@@A@CAAAIAA@ACA@@AA@AAEBC@A@C@C@A@ACCAAAACAAEAA@@AACCCCAE@AAACCAC@A@@@@BA@@BAB@@A@@@AB@@@@AB@@@@AB@B@@AB@AAAE@@@A@@@AAAAC@AA@@A@@BA@A@C@AA@@@@AB@@AFCBC@@BA@AAAAA@A@@@@@@@ADAA@@@AAA@AA@@AABCAA@@CA@@A@@@@A@A@@@ABA@@A@@AA@ABA@@@AADEDEB@@AAABA@A@@@AA@ABABA@CAAA@@@@ABA@@@BA@A@A@@@@A@@AABAAA@@A@@C@@@A@@B@@ABAA@@@CB@AA@A@AA@AA@@A@@@@A@@@AA@@A@@A@A@@AA@@@AC@@BA@@AAAAA@AAAA@@AA@@C@AA@@AAABCB@@EBC@A@C@EAEAGGC@CBEHABABGBCECGCC@AAEICGBGBGDEFQPEFGDGDGDIBIBKA@@IAICCCAC@ACE@EBA@A@CFC@@JEFCHE@E@KEKGKAG@@AAAA@I@A"],"encodeOffsets":[[119135,32241]]}},{"type":"Feature","id":"341522","properties":{"name":"霍邱县","cp":[116.277911,32.353038],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@A@@@@B@@@@A@@B@@AAABA@A@AB@@@A@@A@A@@@AAABA@A@ABA@ABA@@@A@@BA@@@A@@@@@@@A@@@@@@AA@@@@@@@A@@@@@@@@@@@@@@AA@@BA@@@@@@B@@A@A@@@@@@@A@@A@@@@@@A@@@@@@@A@@AAB@@BB@@@B@@@@BBAAA@@@@@@B@@@@@@B@@B@@@@@@@@BB@@AB@B@@@@A@@@A@@@A@@AA@@BC@A@AAAB@@A@@@ABA@@@A@@@@B@@@@AB@@A@@B@@@BC@@@A@@@C@BBC@@B@@@BB@@B@@@@ABA@@@@@@@@@@@@@@@ABA@@@@@A@@B@@@@@@@@A@@@A@@@A@@@@@@@A@@B@@B@@BB@BBB@@@B@@@DA@@@B@@@BAB@BCB@A@@A@@@A@@@A@@@@@AB@B@@@@@@@@@@@B@@A@@@@BA@@@AB@BA@@@@@@B@@A@@@@@@AB@A@@AAB@@@A@@@@@@@AA@@@@B@A@AA@@@@@A@@@A@@@A@@AA@@A@B@@@AA@@@@@@@@BA@@@@@A@A@@@AAAA@BA@@AA@A@@B@@A@@B@@A@@AA@@@@BA@BBA@@BA@@BA@@@@@AB@@@B@@@@@BA@A@@@@BA@@B@@@B@@@@AB@@A@@@B@AB@BA@@BB@A@@BB@@@A@@@AB@AA@A@@A@@@@@@B@@A@@@AA@@C@@@AA@@@@AA@@@AA@@@@@AA@@AAA@@C@@@EB@@@B@B@@@B@@@@A@@@A@A@ACA@A@A@@@@@A@@@ABA@@B@@AA@@BAA@@A@@@@@A@@@A@@A@@CAAA@C@A@@@AA@@@AA@A@AAEB@B@@@@@B@@A@@B@@@@@B@BA@@B@@@BA@@AA@@A@@AA@@A@A@@BA@@@ABABA@@BBD@@@@@B@@A@@@@B@@B@@BA@E@@B@@@@BB@@@@@@@B@@BB@B@@@@@@A@A@@@@B@@BD@@@@A@@@@@@@A@@@A@AB@@@@A@AB@A@@A@@@@@AA@@@@@A@@BA@@@@A@AC@@@A@@BA@@@A@@@@C@A@A@A@A@AB@B@BBB@B@DBB@B@B@@CDA@ABCB@@AB@B@BAB@@@@A@@@@AA@@B@@AA@@@AA@@AA@A@AB@@AB@AAB@AA@@@@@AA@@@@@@@@AA@B@@AA@@A@@@A@@@@A@@@A@@A@@@A@@@@@@@@@@AB@@@@A@A@@@@@A@@A@E@@@@@@@@AA@@@@@@AAB@@A@@B@@C@A@@@A@@BB@@B@@@@@BA@@@A@@A@@@@A@@@@@BB@@@B@B@@@@BBB@A@@@@BA@B@@B@@@@A@@@@A@@@A@@@@A@@@@B@B@@@BA@@@AA@@@AAB@BB@@B@@A@@@A@A@@BB@@@ABAB@@@@@B@@B@@@@BB@@@@@@@@B@@@@@@A@@B@@@@@@B@@@@@@@@B@@@B@@@@A@@@@@A@@@@@AB@@@@@@A@@B@@@AA@@@@B@@@BB@@B@@ABA@@BA@@B@B@@@B@@B@@B@@@@@B@@@@B@BA@@@@@B@@A@@B@@@@BBB@@@@@@@A@@@A@@B@@A@@@@@A@@B@@@@@@@B@@@B@@@@A@@@@@@@BBB@@B@@A@@B@@@@@B@@BB@@@BA@@@A@@@A@@@@A@A@@@@A@AD@@@@@B@@@@@B@@C@@@@B@@A@@BA@@@BB@@@B@@@@@@@B@B@@B@B@@BA@@@@B@@B@B@B@@@@B@@@@B@B@@B@@A@@B@@@@BAB@@BBBA@AB@B@@BBCB@@@B@@A@@B@B@@B@ABA@@B@@B@@BBDA@@@A@A@@B@@BB@BBB@B@BB@ABBBBBDBHBFDFBDFBHDF@DBBAB@BIFIHA@ADANCLAFAD@B@@DDDBBB@@BB@D@D@H@B@@BDBF@@BBBD@B@@@BBB@FBD@FBB@B@F@BBD@B@B@DABAB@B@DBF@DBB@BBB@BBD@B@BADABABITADCDCBGFCH@B@D@L@FELABGVEN@H@D@JBLBTBFFNDFBB@FADILABCDABABBF@JAJADABIBA@EBAB@BBDFDFDBB@@@D@BCN@B@DBB@BBDANAN@BEBCDAB@B@B@DAF@B@@BF@F@B@B@@AD@F@D@F@D@B@B@BBB@@@B@N@F@F@B@@@B@@ADCF@BCF@BAFAB@DADADADAJ@BBD@@@B@B@BAB@DGF@@ABCBA@A@@@@@@@@B@@@@@@@@@B@@@@@B@@@@BB@B@@@@@B@@A@@B@@@@B@@B@@@@@@@@BA@@@@B@@@BA@@@B@@@@@@@B@BA@@BA@@B@@@@@@B@@B@@B@@@@@@N@@@JABIDU@A@A@AB@@AB@@BB@@BBBDDBFDBDBBB@BBFBF@B@@D@D@F@HDJ@BAHADKFA@AB@F@D@BCBC@G@K@GA@@E@EAEAAAABADBDDFFFFHHDNFB@JFFDDFBF@J@H@DDBPJPJB@FDFBJJLLDBD@D@FCDADBH@DBAB@@RHDFZ`BBBBBBPPJHd@D@LADAD@DAHCXIDALEDEN]FMDO@ABEBCJCB@ZIjCNELEDBT_DGFOBGDIDKFMBQBCDGHOHCZIHA@CFOBEDOP@X@FKBEJKP^N^ZMT`TGZNFGLOJBDP@BCPABCVdVBFDHDLF^dAL@V@H@T@ZUP[@@JSHMT_HCjSPGBAFAFABALCJBXFRDPDHATGPEZIZBAG@C@CAE@E@EACAE@CACCEBCBCFCFEFAFCBEMOIUA@BE@A@A@ABIFMBEDCB@FCTQNcBCRODCBeBGHUBO@CIU@G@@@AJS@CBGIIOYQEAAGGDEHERMBOOSFUBEHYTMDMBE@OAI@@AGEQHSBAFOTO@CDCDGFG@C@CCA@@CA@@C@@@C@EACCCCCAAAA@@@C@@@@@CBEBCDABG@EBC@A@A@AA@A@@DC@AB@DC@A@@@AAA@AAA@ABABAB@BAB@B@B@D@@A@A@@@@@E@A@@CCA@@@CA@AAAA@AA@@A@C@C@MBEBEBIDEFABABAACCOGA@@A@A@ADIBA@CBAAA@ACGCCAA@ACCCAA@C@A@C@EBE@KACAA@EACCACACACA@@@AAAAA@AA@A@AAA@AA@A@A@CACBED@BCBADAD@B@DABAB@@EDABAB@BBD@DADC@A@C@CAC@E@CAAA@@ACAAA@CAA@AAAA@A@C@A@AAAA@AA@@CAAAC@ADAB@BABABAFAD@D@BA@ABCBE@ABABABAD@D@D@@@B@@@BABABIFA@ABCAIACAAACAC@G@C@AACBC@AB@@@@GBEDEDEDCBGD@BA@CBG@EACAECCACCCACAAACECEACECCECCACAEEEAECC@CAC@ECEEEAAGG@@EO@CAKCCCGEIIEOMCEGGEEGDA@@@AAAB@@AA@@AAAAC@A@@@ABA@A@AA@AA@@A@@BA@AAA@@C@@@C@@AAA@@A@EAA@AA@@AA@AA@AAA@A@AACA@@A@C@ABAAA@@AA@@BA@@@ABA@ABA@AB@@A@CAAA@A@CA@@@@A@@@A@@@@AA@@AB@@@B@@ABA@@@CAAA@@@@A@ADA@@@AA@A@@C@@@@@@@@A@@B@@A@@A@@@@@A@@BAA@@A@@@@@A@@@@@A@@@A@@@@@A@@@A@@@@A@@@BA@@B@@@A@@AA@@@@@@ABA@@@@@A@@@A@BAA@@@@B@@A@@@@AA@@@@B@@@@AB@@A@@AA@@@@@AAA@@@A@@@AB@@@@@AA@@@@@A@A@@@@@@@@@@B@@@B@@A@A@@@@B@BA@@@A@@@A@@BA@@@A@@A@@A@@@A@A@"],"encodeOffsets":[[118914,32701]]}},{"type":"Feature","id":"341524","properties":{"name":"金寨县","cp":[115.934366,31.72717],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@EAGAGAECCIKGCCEAEAKBEFEFAF@FCHENADCJEDCFCBCDEBEDEFCFCHCHCJCFCDCDCBCDCDEFEDCFEFIJCDGDIBIDQDKBKBGBE@IBGAIACAECACCCCECGCG@EEGIGECGAGAGAGACCACAG@GAIAECEAEEEAAKCC@GBIFGFGDGFCDEFA@ADAFCHGJCFEHGLCH@H@LAF@F@B@D@H@DAH@BBD@D@DBFAFADAFGJAFEJCDCFGFEHEDEDCBGDEBEBG@GAC@GCGAOAE@CDEJ@FCBEFGDA@@@@@AB@@AB@FBDDH@DBJ@H@FDFDDAJ@DABA@A@EECAC@C@CDCJAFC`CJADCBCBABE@C@A@AACAC@C@ADAD@@CAGEGCECAAAEACA@A@CBCFCDEBQB[FCB@BBBBBRJBB@F@BOR@DB@BBLDBDLLDJBDADABGDUREDDJBDFFHFBDBBAD@F@HBF@N@FBFBBBBDB@B@BCFUb@@@DADAHCD@FABBBBD@B@@@BCBAB@B@D@B@BHLDDPFHBDDDBBDDDBBBBJDJDFDJHDBFLDDFLDJBD@B@FBDBFBBBBABADCD@B@B@B@DDDDJBBBBHD@BB@@H@D@BBDDDFDDBHBNDDBBDFBLHFDFBH@FBFBDBBDDHBF@J@@ADGLGLGH@BAB@B@BDDFBDBDD@D@H@B@D@B@BB@FBB@FJBFBFBBHDJDNFFDDFFJFFFDHDDB@@D@DAF@FANCD@F@DDBD@BBD@BBBFFDBDDD@B@H@FBHBFBBDDDBD@D@BDBFBHDFDBDDDBB@@F@JDLFJDHFFFDBHFBB@BFH@BB@BB@@D@DBB@DBB@XDD@BBFDDFFFBBFFBDDDBDD@D@B@@@B@DAD@B@BAD@@ABCBCJEBAD@B@D@DBDBDBB@B@@@FAFEFAVEJ@B@B@@BBB@@AB@@A@A@A@ABA@@@@@A@@B@@@B@@B@@@B@@@BB@@@B@@@B@@AB@@@B@@@BB@@B@@B@@@B@@@D@B@B@@@BB@@@B@B@B@@@BBB@@BBB@DAD@B@B@B@D@B@BB@@B@B@@@B@@@B@B@H@@@@@@@B@@B@@DDBDB@@@@@@@B@@@BA@@BAB@@@B@@AB@DAB@@@BAB@B@BA@@B@@@B@@AB@@@B@@@B@B@B@@@@AB@@ADA@@BABCBA@@BAB@@@B@B@@AB@@@@@B@@@BA@@F@@@BB@@@@B@@@BB@@B@@@@@B@@@@@@@@@@A@C@@@@@@@@@@A@@@@@@A@@@AB@@ABA@AB@BA@@@@B@@@BAB@BA@@@@B@@@@BB@@BBBB@@BBBBBBB@@BB@@@@BBB@B@BB@@@@@@BB@@BB@BBB@@BB@BB@@@D@@@@@BA@@@@@ABA@AB@B@@@B@@@B@@BBBBB@@B@@B@@B@@B@@@B@@@BBB@B@@B@@B@@B@BB@@BB@@BBB@@@@@B@B@@A@@@@@A@@BA@AB@@A@@@C@A@A@@BABA@A@@BA@@B@@@B@@@B@@@B@DBD@BBB@B@BB@@B@@AB@@@@@@@B@@AB@B@B@@@B@@@B@@@B@@@@@B@@@B@DBF@B@BBDBBDBB@B@BBB@BB@BBDBBBB@@DBB@@BBDBD@D@FAB@B@BB@FBBFCFADCDCBAB@D@BBDD@DBD@DABADAF@B@BDDB@D@D@HAB@BAHARCNEJEFAFEHADAF@JAD@D@@@FBFBDAD@FGDABAHCDAJEJGHEHCDCHCJEJ@B@F@JBFBJFFBLBHBFDFDHBDBBBFBHDFC@C@EACAC@CAA@EDGFCFAJAJ@DAJ@JAHAJADCBGCSAE@ICSAGAE@CAC@CCGICKAIAG@KEECICE@EAI@C@GAECGAECGCGAGCCCCCAEAEACCCGCE@G@I@KCEECGAG@I@GDIFIHCJAB@HAH@FADCDGDGFCHEHAFAFEHCBAFAH@HBH@XBH@@@B@B@HCFCFCBC@ABE@I@GBCJCLELAN@J@D@DEDEHEHCJCPARARIN@JBDAAG@EACAACEC@GAKECICGAGBEBI@@@EBEACCEGGGICECAIE@@QAOCICGEECEEGEA@EAI@IBGBA@A@C@GAICKCMEKI@@MGOGKIGICEEGAE@GDGVWJEDCAKAIAE@E@GBEFGFEDEDI@E@G@G@E@AAGEWAKBGHCHAHCDCDKCGCMEEEGKGIEEGIEGEIE@@IAIAIECECAAAAI@C@GIGMIEGCEAEB@DGFGHCBEAC@AECMAI@G@GAGAGCGCCCACEEE@EAA@GCIEECGIEECKCIAGAIAIAKAGBIHEFCFCBEGGSMOIKCE@EBIDE@KAGCIGIEGEKBCLCFCLGDEFGBEAGAKEGEIGGIECGCCAE@E@EBE@GDEBGBGAEAA@"],"encodeOffsets":[[118585,31877]]}},{"type":"Feature","id":"341523","properties":{"name":"舒城县","cp":[116.948736,31.462234],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AACAGKGMECA@A@G@KDKDEBCDABCHABCBCBCBE@E@A@C@ABA@AAGGCAEAEAA@C@AB@BAD@BABABCBIFKHABCBE@ABCBCFA@CBC@E@A@AAACAA@GAAA@AACAA@AA@AAAACA@EACAACCAAGACAA@@A@A@ADGDC@KBE@E@AAAAGEACACAECK@AAACCAACCC@CACCACCCCAE@I@E@CB@D@DBHBB@BAB@BAD@BBBBFBDBD@B@@@D@B@D@D@BAD@D@@BDBDDDBB@D@B@BABBD@DBFDJDDDDBFBDBD@DBBLLFHBBDFBDBD@B@DABCFABABCB@B@B@BBDDD@B@D@@@BCF@B@H@D@@@D@@@BBD@@@B@BADAFA@ABAD@D@DADBH@B@BBBBDBB@BBB@BAB@BADABA@@BC@EBCBA@A@A@@@AACAAA@A@@@AAC@AAAA@GCECAA@@ACAACC@ACAA@CA@@EGCECCCGCGACA@@AA@E@A@A@ADCB@DCFA@@@A@AAACCEGGICEAE@G@CAEACCCACEAEA@A@CAE@C@EBCBC@E@CBCBEDAD@LDBDHDRBDBDBBB@BCBA@CBCBCBAB@H@H@B@FDFDBB@@FHFF@DBD@F@JBB@BBB@@FFFFDHDHBFAHEJEJCJ@HDF@@BBDBHDHFDHBJ@FDHFJHDPDJBJ@LDHHDHALCP@LFNPALCJAJALBLDLJFHBH@B@FDJBF@B@@DJDFDHFH@DAFEF@@@@@BGJEDA@CH@FBBBB@DB@BJBD@@@@BDFLHDJ@JEHCHCHCHBJDFBFB@@DAB@@@RFJFFLFJ@D@HBHDHDFDDHH@@FDFFBDBHDDFDPDLBLDD@DB@@B@@B@@@BA@@BA@ABA@@@@B@@@@@@B@B@BBB@@AD@@@BBBB@BB@B@B@D@B@DA@@B@@AB@BABB@@B@@B@@BD@@@@B@@@B@B@@@@B@BAB@@@BB@B@B@BAB@@@B@@@@B@B@@@@B@@@B@BABCBAB@@@B@@@B@@BBB@BB@B@@@BA@ABA@@B@B@@BBB@BB@@@B@B@@@B@DBB@@@@B@B@@B@B@@@B@@@BBB@B@B@BB@@B@B@B@@@BB@B@BB@@@BBB@@BB@B@BBDDBBB@B@B@@@B@BAB@@@B@@BBB@@@@B@@AB@@@B@@@DB@BB@@@BA@@B@@@@@BDB@@@BBB@@@BBB@@@DAB@@@B@@B@@B@B@B@@@B@@BA@@BB@@@FB@@B@B@BAB@@@BB@@@B@@@B@B@@BB@@B@@BBA@@B@@@@@BBD@D@@@@B@BABA@AB@@@@@B@B@@B@@@@@D@DBB@@B@@@B@@AB@@@BDBBBD@@@B@@@BA@@BB@@@B@@@BA@@@@BAB@@@B@@@@B@BB@@@@@BBBB@@@@@@B@B@@B@DA@@B@@B@@@B@@BBB@@@@B@B@DABA@@B@BBB@B@@B@@BB@@B@@BBB@BB@@BB@@@BA@@@@BB@@BB@@@@B@@@B@B@@@@@@B@B@B@@BBB@@BD@@BBDBBB@B@B@@@@AB@B@@@B@@BB@@AB@@@@A@@@@A@AA@@@A@@@AB@@@@A@@@AA@BAB@@A@@B@@ABBBD@@@B@@@BBDBHDLFJ@NDF@B@JBHBBDPDDFHEJBB@HAPFBCACBAD@J@BFD@HCB@LBH@JDDBDCVBLIPLNDB@F@DCDB@DD@DGAACABAHDB@DEFBCDBHJCDLCDBBHDNBB@HAHCJ@D@BFHEF@DBB@BEPAHCBEBAD@D@JCBB@HNJFHPHD@HAHBFAHEFCBADAH@F@PCNCTFHAHABF@LDDB@FDL@JCFEBID@D@FBLBLBB@LBHD@@HBN@J@\\QBAFCH@BBFFDBDAJSB@@KNCAA@@AG@ABIDAAAAADE@@@@@ABA@AB@DA@@BAB@HCBABC@AEEIIA@GAY@M@U@IBGBa@A@cCQECAAACACACAAAACCIEEEGEGGGGGGGEEEECGGIEGEKCGEGEGCGEGEKEKCICE@AEE@ACEEECGAEAG@EBGBCDCFEDG@GEGEGCECKAGAG@IBI@M@GAGGKCCKAKAGCEE@EBE@E@GAAECEEGEEIQLGDGFEBC@C@E@EEIQKGIEMICGCEAACEEIEIEKCGAE@ACGAGAAAICGCGEEGEAC@AAGAKBEAKAACAC@O@KBEAA@@CAEAGECECECIGKGQKOEMAKBIDG@GECAIAGACCAEAEAC@A@CBI@EA@AAEAGAC@ABCAECEECEEGEGC@CAE@AAA@AA@@AGAAA@GCAAAEEGGCCAA@A@@@ABCDCBCBC@C@CBA@GACACAE@A@A@A@@AAAKICAI@E@CB@BCB@@CBIEG@IA"],"encodeOffsets":[[119525,31806]]}},{"type":"Feature","id":"341525","properties":{"name":"霍山县","cp":[116.351892,31.410561],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@ACBI@GEG@GAIAM@IMBCAC@QAKCE@EBCBCBAFAHAJ@HCJEBGAK@IF@BIFCBCBE@E@EDKBGBICUEEBC@CHBFBF@HBH@JAFAFA@GBCBEBIDML@@IHGH@BAAE@@@@AA@@A@@@@A@@@@@AB@@@@@@@@@B@@A@@@@@@B@@@@AB@@@@@@AB@@ABABABABA@ABADAFCDEH@JAH@H@LLAHFJFJHHDLBF@JCFAF@LDPJTNHHAFEDEDGFAJBHBLBJBJBHDJDLFFHJFDJFHDB@FBF@FFBDDDHDHDHBHBH@J@NBFD@BBDAFGDEHCHA@BFDFFHNJJH@H@DBJBBDBDFJFJBJB@@JFHFJFFHJFLHFHFFDNDHCLCDGDGBGDAHBLFXBH@B@F@H@H@FCJCFEFEHAF@H@FBFBJBLCDIFUXCH@HBFFHDFHJLJPHNH@@LJNFLDJDHBD@B@B@HAJAJ@FBB@HFFFFDHFJDPDRB@@BCFKHQJILEJCHADAHALAJBJBJDHBJBJ@J@BAD@HADDDDFFDDFDFFBBBDBD@H@H@DFDHBD@@@D@JAFAB@@AFCLG@@B@@@LAJ@@@@@@@@@@@@@@@JAFCDALEFAHAPIDCBADEBABADEBC@AGCEACAA@AAA@ACAA@A@A@AB@B@D@DBFBBBB@BD@BB@FBD@@BFBDDDDBD@D@D@D@BADEJADAD@B@JBBBB@@BHHLFL@L@FGFEDIF@@ED@D@BAB@FDF@BBDDDJDJB@@LBJAJAHCHCHCFEROFEHCHAHAJDBF@BDDDHDFHABABAFGDAD@HHFBFBD@B@D@FA@@DABAFCHEFGFEBC@AAA@CDEFKDGDCFIBIFAHAHA@@DG@EHKHDFDBCBAAEAEAG@C@GBGAC@A@@GAGBEDCBIICEEI@EFKHGBAB@BAJENGJ@JAHGDGBG@EDI@A@@@@BG@CDG@E@ABCBGDGDEBA@C@A@ABGBABCBA@C@@AA@@ADABA@ABA@A@A@AA@@@@A@AAA@CBKBABCB@@ABAAA@@A@AAG@EAC@ACEAAAGCC@CBE@A@ABABC@ABABA@AF@BAD@B@B@B@BBFB@@HFB@DBFD@@HBD@BBD@DA@@BAB@D@BABIDG@GACAICGCECGCGAKAG@C@EEM@KDOBKCGGGKCI@IAOCGCEICG@EAICGGEGCCAAA@@CE@GDIFIFIBGAECGCGEEEE@@AA@AAA@I@EAC@CEEEG@@AAECECA@G@G@A@ABADAD@DABADA@AAACACCQCGCAAFAFCFCDEHGFAB@@AB@BCB@BCB@BCBA@C@C@I@E@AAC@A@AAABC@IF@@G@I@A@MHIFGBCBA@@@EECCAACAA@AAGA@@AC@A@C@A@C@CAAAAAAAAAA@@CAAAAACAA@EAAACBC@C@A@IAGCGECAAA@AAC@A@A@@BEAA@AAACG@@EC@A@@GA@@BAAAA@A@@@C@AABABAAAC@C@A@@@@@@A@AAAEAAAAAABC@@A@ABACAAAA@C@@A@A@@@CI@@@A@BA@AAA@@ACAA@@@E@@@CACCCACAAICAAEAQESKEEGEICGCIAA@E@AAI@E@MBIDIHELAD@DBDBFAHCHEFEFEDGDKDE@QEOCIAEAKCECEAA@CAABABEBEBCBCBCDCBA@AACAAACAC@AA@@BE@A@CAAAAGEGCMEOEGCIMEGMS"],"encodeOffsets":[[118837,31795]]}}],"UTF8Encoding":true});}));