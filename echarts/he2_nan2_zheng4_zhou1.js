(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('郑州', {"type":"FeatureCollection","features":[{"type":"Feature","id":"410102","properties":{"name":"中原区","cp":[113.613337,34.748256],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BAD@@C@C@A@C@@G@ACB@@@A@CAA@@ABA@@GAC@@@AEMBA@CFABCBG@A@BBC@AFADA@IFG@IBA@E@EAABC@AA@KE@EAACDABAACE@@AG@K@A@ED@BEJABAB@D@D@B@@E@@@@BG@AEO@@B@@@@AD@@@B@@@@A@@@@@@@A@@C@@@A@@@@C@A@@@AB@B@B@@AB@@CBCBA@C@@@C@C@ABC@A@A@@A@@AAB@@AA@AAC@C@@B@B@@A@@@@AAC@@@@@@@B@D@@@B@@A@E@G@G@A@C@@A@@@AA@@B@@@BAB@@@BBD@B@B@@@BB@@@@@F@F@D@@@@@BBBD@@BB@@DB@@B@@BB@B@B@B@BB@@@@@@ED@@@D@@A@@@A@C@A@A@@BA@BB@B@@@BA@@@A@A@@@@D@D@BBB@@@BA@AD@@A@ABA@A@C@A@A@C@A@CB@@A@AB@BA@@B@DB@@D@@@BBAB@@B@@@BB@@@@B@B@BB@@F@DD@@@BBDAB@F@@CD@@E@AB@ABBB@@@@B@B@@@BA@@@@J@@@BAB@@@DD@@B@B@B@B@@@@D@@@@A@A@AB@@@D@@@B@@B@@@B@@@@@@BABA@@@AA@@A@@B@@@@@@@@@@@BE@A@A@@B@B@B@@@@@B@@BA@@@@BB@@@@B@@@@@@D@BCD@@@@@BBH@J@D@@E@@@@EA@G@A@E@@@@@@C@AaFIBBB@B@B@@BBDBDD@@@@@D@B@B@B@B@@@B@BABA@ABEBAB@@@@@B@J@@@BBB@@BBBB@B@B@D@BBB@@@B@@AB@BBB@B@@FBFBB@B@DAB@B@BBBB@@B@@BDABAB@@@B@DBB@D@FAD@B@B@BBH@D@D@B@FBD@BB@@BBAB@BB@@B@BA@@BBD@B@BBB@@DDHD@@F@BABBHE@@D@@@BFBBB@DBL@H@B@HDB@H@DAB@BAHABCDABBB@ACF@B@@DEF@BFDN@DCD@AAB@@ADEFC@@D@B@D@@AF@@@NA@AA@@G@@HKDCBEB@FBBG@GBEAC@AGIAB@CEE@@@EBAAA@AB@BA@A@@@@@@@BB@D@BAB@@CH@AA@@F@@@@AFIB@BBD@@ADGDGHI@@A@A@ACBCD@DEFB@AFIA@DE@AA@@A@A@AAC@@@@AGAA@A@CB@F@@@@@@KE@@HA@@G@@@A@C@A@C@@@A@K@A@@G@@C@@@AD@@BB@@GA@@BA@@AE@BCBC@CBE@@C@E@E@"],"encodeOffsets":[[116345,35554]]}},{"type":"Feature","id":"410103","properties":{"name":"二七区","cp":[113.640211,34.724114],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@C@A@AAA@AC@@A@A@A@@@@HC@@FAB@B@@ABA@AAA@@@@CAAAA@@@@A@A@@AB@@@D@@@@@BAB@@@@AAA@AB@@@@A@@C@@A@E@E@AB@@ABEL@BA@@@@@@@EA@@@A@@A@@@AABA@@CCCAA@@@A@@@@@AB@BA@@BBD@@@@ABA@@B@@ABAB@@@@@@BB@@DBBB@@@BABAB@BBB@B@B@BABA@EDAB@@@BAB@@CBA@@B@@@B@@ABA@CBA@A@@@A@A@AAAAAGAA@@AAA@AA@@@E@AAAAAAA@A@C@C@C@@K@@@AB@@@H@B@B@B@BAB@BA@@B@B@@@BA@@@E@A@CBA@@@A@@@A@@@@BAB@B@BBBBB@@BB@@@@@@ABA@M@A@A@ABABA@@B@@@@@BB@@B@B@B@@@B@@A@@@ABC@EBA@A@ABABABAB@@@B@@B@B@B@B@HA@@@BB@@@@BA@BDAB@BBFBF@@@@GF@@@@BDA@A@A@@@@B@B@B@DCB@B@@@B@B@B@B@B@@@BB@@@@@BDBB@@B@B@@@@B@@B@@@@B@@@@A@A@AB@@@BABAB@@@BAD@@@BDD@B@B@B@B@@BD@D@DBD@@@B@AA@@AA@@@@B@B@@@B@@@@B@@B@@@DB@@@B@@@DBBBB@BB@@@@@DB@@@B@@@@BB@BDP@BFH@@A@@F@@@@A@C@CBABAFI@AFCB@L@H@@BF@BDABCBBDFBF@@LBBD@BAFBF@B@JAH@JEB@BCBED@AAB@H@DABADEB@NABF@@D@HB@@AB@BB@DBB@@@A@BDH@@@@D@B@D@DC@ABF@F@D@@@AF@DADADF@@BB@@AB@@HA@@AC@@B@@@DH@@@@B@L@B@@@D@B@D@B@@@HB@@GF@@L@@@@E@A@@D@BBBBH@@@@BD@B@B@BB@@BD@F@@@B@DCBC@B@ADGDAB@D@HABD@@BD@@FD@@@@B@D@F@@@FA@EAA@AC@AF@@A@@ABAA@@AD@DADAB@@ABAA@@A@@@@@A@@@@B@BA@AB@@@@@@AA@@A@@@@A@@@@@@AA@@@@A@@@A@@AA@@@@CA@@@CB@B@BA@@@@@@BA@@AA@@@@CC@A@@@A@@FKBCDE@@BA@ADC@@@@C@@A@AD@@@BA@AAAD@@E@C@@@EE@ACC@@B@B@GE@AAB@F@ACB@J@@A@@@C@@@@BCL@@@@EBQQ@@@ACAAACA@@CG@AECA@EA@@@EE@ABEFED@@@@@AAB@BC@CBAAA@ACCAC@@AA@@@ABC@AAAAA@@CACACAA@@@C@@@A@@B@D@B@@A@A@@@@B@@A@@@@@A@@A@A@A@@M@C@A@@AA@@A@@A@GA@@A@@@ABA@@@A@@AAA@@AAA@CA@@@A@A@@AEEE@AA@IAC@@@ABADAB@@A@AAG@@@AA@AACACAA@@DC@@"],"encodeOffsets":[[116328,35451]]}},{"type":"Feature","id":"410104","properties":{"name":"管城回族区","cp":[113.6775,34.75429],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@B@@@@B@@B@@AD@@@F@@@@EB@@DB@@DD@D@@@@@F@@BB@@@B@@@@BF@@@@CA@@A@@@AB@B@@DB@@AB@B@@@B@@@@@B@@A@@D@@AA@@A@@@@@@@@@@@@@@BI@@A@@@CIG@@@@C@ADBD@D@@IDB@HF@F@@A@@BA@@B@B@B@B@@AC@@CA@@@C@AAD@B@@A@@@AL@@D@BB@J@D@@BFD@@@JBBBBFH@@DDDBFDFDB@HFBB@@HFNB@@JBPB@@@@FBFARAF@RDZK@A@ANCH@B@@@HGBAHEF@@A@@GA@@D@@@@@AAAA@@@A@@F@B@BA@AB@AA@ABC@@@ABBD@@@BA@@@A@AB@@@@@F@BA\\CFAGQAOC@AIAECI@@QA]BAE@GNIBGGGAAAGACBI@E@K@@AW@@WC@@ELI@BGCCGBEB@@CAHIGAABST@@AC@@@AA@A@@A@@@@@AAAA@@@@E@@@@@AA@AA@@@A@A@AAC@ABC@C@C@CBA@@AI@AB@DAB@A@A@A@@A@@BA@AA@A@A@ABA@@@@@A@@A@@@@@@A@@@@BA@@B@@A@@@@@@AAA@@@@A@@@@B@@A@@@AB@@@B@@@@@@ABCAE@GA@@A@@B@@ABA@A@@@@@@C@A@@A@A@@A@A@AA@AAAAA@@@@A@@@AC@A@G@E@@@@@AA@@@AC@@B@@@@@@B@@B@@AB@B@F@B@D@B@@@BD@@@@@@B@B@@@BA@@@GCA@@@AB@@@B@@@@A@@@A@A@@@@@@A@@A@AAC@A@ABA@C@@@@@@BA@@@C@@@ABA@AB@B@BAFAB@F@F@@@B@DA@@@AB@@G@A@@@ABABAD@@ABA@@@AD@@@@@@A@@@AA@AA@@@@BAB@@@@C@@@CAA@@@@@AB@B@@@@@@AAAA@@@@A@BDAB@@@@A@@@A@@A@@BC@A@@@AA@@BA@@@@@@@AAB@@@@@@A@@@@C@@@AA@@@@BAAAAA@@@A@@BA@@@A@A@A@AA@@A@@A@@@ABABA@A@@@@@@A@@@C@@A@C@CDCB@@A@@@@@A@A@@@@@@B@BABA@A@A@A@@@A@ABAD@B@@A@A@C@@BAD@B@@BB@@BDDD@BBBAB@DADA@BB@@@@C@EFAF@BFF@@B@@FDBBFH@@DB@BDBBBD@@R@AR@F@@K@AD@@@@@D@@@BI@A@BDE@A@BBF@@H@A@AD@BDF@@F@@@D@FC@BB@BAB@@C@@B@BD@@@@@CD@BAB@@CFADEL@@@B@@@BDD@@@@BB@@AB@@@@@@ABA@A@@D@@DB@@@@BB@@@B@@@B@@B@@B@@@@B@@@@@@BB@@B@@@@A@@BABA@@@@@@B@@@@@BB@AB@B@@B@@@A@@BB@@BB@@@@@D@AC@A@@@@FDHAB@@@B@D@@@B@@A@@BA"],"encodeOffsets":[[116412,35589]]}},{"type":"Feature","id":"410105","properties":{"name":"金水区","cp":[113.660617,34.800004],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@C@CA@B@D@@H@DJ@@B@@@AJ@@@@@@@@@@@@@@@BB@@BC@@@@BA@@@@@A@@@A@A@@BA@@CA@A@@B@@@BB@@D@@E@@A@@A@@@A@@AE@@@@@C@C@@CA@@CA@@F@@E@@@C@@BA@@@@A@@A@@@AB@@@BA@@@C@A@@@A@GBEC@@@@@BBDC@@@@@A@@AA@@AB@@@A@@@A@CBCBC@@BB@AB@BB@@@BED@@BBB@FEB@@E@C@A@@@@@EC@@AC@@ACGBC@A@CBCH@B@AADCDA@@@E@C@CFB@EJ@BEACFC@ADBDB@B@@@GJCHCH@BCFDBBADBBAB@@ABABAB@@@@@HBBA@BDGB@@@@@@@CFADDBBA@@@@@@B@BB@@@@BABE@@B@@@D@D@@@AD@@ABA@ADABB@A@@DCB@DCF@@@B@D@BAB@@@F@B@D@@BF@FB@@DJ@BF@@BHK@BDA@BH@@@@@BHB@@@DDNBBFDBDB@@BD@B@D@F@B@@IL@BAD@F@T@@FFA@AB@@B@DRAF@B@FA@JDAB@@B@@PB@@@F@@@F@BNFBBL@XAlC@@JARONL@APG@@FM@@BB@DBFDHHFJDBB@D@J@F@BAV@BFAD@NADAB@D@F@FARAHAR@JATAB_@CEACGACCEC@@@ACACAAACCKAAACACAA@CAC@A@@@@BA@@@C@A@@HA@@BD@@@@HA@@@@@A@@D@BA@@@A@@B@@@AIAB@@ACCBA@AA@A@@C@@@ACAAEI@@@AAAB@@@B@@@DAB@@@@@@@@AAAAC@@@@LE@@@@CK@@@@HA@AB@@AAA@@@@A@@AA@@G@A@@@A@@AA@@C@@@@A@G@A@@B@BAH@BA@@@A@@@A@@BB@@@@@AAG@E@AA@@@@@@CAE@A@A@A@@A@@ACK@CE@GFABGH@@A@G@MD@B@BYLQCE@QBEBEA@@@@OAIA@@MAGE@@AAGEA@ECECCACC@@EGAAAA@I@@EC@AC@I@A@@A@CK@@B@@@BA@C@BBD@@@B@@DD@@BA@A@A@A@@@AB@@@BE@E@@GCA@JC@"],"encodeOffsets":[[116438,35574]]}},{"type":"Feature","id":"410108","properties":{"name":"惠济区","cp":[113.6169,34.867457],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@BC@@C@C@@@A@@@AFAB@@@@AAA@@@@@@@ABCABCDE@@@@@@A@CH@AABGA@@@@A@ABAB@BA@ABCAABCADE@A@BC@AAA@EJ@B@@E@@@BBG@@DA@ABC@A@@A@@@@@@@BABA@@BBBAB@F@@FF@DBAHJ@BBDAF@HAHEAA@AFCDGL@@@HB@@BMB@@E@@BC@A@C@@@EDCF@BA@BBC@CDM@EC@AFE@CA@E@BDA@AACBADGBABA@CBG@A@GCA@G@K@CAA@AAAE@@C@@@GFAAABE@@B@DA@@F@@C@A@@@@B@BA@@D@B@D@B@@A@E@E@EB@@@@@B@F@BBD@B@F@@B@@@@B@B@BA@@@@BD@@@BB@F@@D@@B@BD@B@@B@B@@H@B@@B@BA@@B@DD@@@@HAB@@@D@@@@@@A@A@@@@B@@@D@BA@A@@@BB@B@B@D@@@B@B@D@@@@@@@B@@@B@@@@A@@@A@B@@@BB@@B@@@@@@@C@@@@B@@BDBB@B@@A@@@AA@CA@@@AC@@@@A@A@@@@@AA@@A@@@A@@@A@@@@@@D@@@BB@B@@@@D@@@B@@@@A@@@@BB@@@BB@@@@@@AB@@@@@BBB@B@@@B@@B@@@BB@@DA@@@B@@@@A@@B@BBD@@@B@@A@@B@@@@A@@@@B@@@B@@@@AA@@@@@@A@@@@@@@B@@A@@A@@@@@@@@AA@@B@@@B@B@@@@B@B@@B@B@@@DB@@@@A@A@@B@@@@@BD@A@@BB@@@@@@@@A@@@AB@B@@@@@@BB@@@@@B@@A@@@@@AABBAB@@@A@@A@@@@@@B@@B@B@BB@@@@@@CDAB@@BD@@BBB@B@@^N@L@FAH@F@JAFADAHAFAHCFADANIDCFAfO@@DERKHEB@B@D@JCHAD@JAH@B@D@B@DABAB@FCDADABAD@J@F@NAR@D@B@D@HCB@DAD@D@D@F@JAD@NCDAD@BADABAJGDCB@DABAB@HAREH@DAHAD@F@PCFAB@F@LAFAHAD@D@D@DAF@B@LAN@@ABU@A@E@I@CAAICGECGAE@CAA@@EN@@OH@BMKQPIB@@kDWBK@AAME@A@E@@@E@@OA@@@AA@CB@IEBA@E@QB@C@AA@@BEB@ES@E@C@ABK@@JA@E@C@A@C@@AA@ACECAACM@C@@GA@A@@@@AGB@ACL@AG@@AEI@@CA@@EAE@@@C@A@E@@BA@A@C@A@@DE@CDA@CB@A@BABCB@BA@@"],"encodeOffsets":[[116367,35633]]}},{"type":"Feature","id":"410106","properties":{"name":"上街区","cp":[113.30893,34.802752],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@@B@@A@@BA@@@CB@@@@@@@BA@A@A@@@@@A@A@A@K@BBB@BBB@@@@BA@CB@@AB@B@B@@ABA@A@@B@@@B@BB@DBBBB@@BBD@@BBB@@B@BAB@@BB@@FBBBB@@B@B@@@BCB@BCFAD@@AD@B@DADAFADAD@@A@ABA@A@AAA@CAA@AA@CACA@AC@DBB@BB@AD@DAB@B@BAB@BAF@B@B@@B@@@DB@@BB@@B@@B@B@B@FB@@B@@A@@@A@A@@@A@@@A@A@A@@B@@C@@@ABAB@B@B@BDD@B@@@BAB@BA@@@BB@B@@@D@@A@@@A@AB@@@B@D@BAB@@@BBB@@BBB@@@@B@@@BA@ABA@@B@@@@BBBB@@@D@B@BB@@@@B@@ABA@@B@@@B@B@B@@@@@@@B@F@@B@@B@@@@D@@@@B@@@@@@BB@BBA@@B@@@@B@BB@@B@@BA@@@@BB@@@BGFAB@@A@@BB@H@@@@BF@B@J@@@@BF@B@BB@@BF\\A@A@CFAL@ACOB@@AE@@@@FA@A@@@@@@B@J@@@B@@A@C@A@@B@@@@@B@@C@@B@@@@@@@B@@@B@B@@@DD@@@@@@BBB@@AD@B@B@@@@@@@FA@@D@@AF@DEB@@FB@@@@C@CA@@A@IA@@AA@@@BA@@A@B@BA@A@@@@@AD@BA@@B@@@HA@@BA@AB@@@@C@A@@@@@@@@@@@AA@B@@A@@@@A@@@A@@@A@@@A@ABAA@A@@@AB@AAA@A@@@@C@@@A@@@A@A@C@G@@@@@@@I@A@@A@AAA@AAAAAA@AAA@A@A@AAA@ABCCB@A@C@@A@A@A@@I@@I@@A@A@@A@@@@@AC@@@A@@@@E@A@A@A@A@A@A@@@@@@@@BA@@A@@@@@@AA@A@@A@A@A@@A@@@@@@B@@@B@B@@@@AB@@BB@@AB@@@@A@A@@B@@A@@B@@@B@@@@A@@D@BBBB@@@@B@@AB@@@@@@A@A@@BA@C@A@@@@BA@AB@BA@@BA@AB@BA@@@@@A@A@@@A@@@A@A@@@@@AB@@ABA@A@ABA@@B@@A@@@@@A@AEECEA@AA@AA@@@A@A@@@AAA@AA@@@@A@@@@@@@A@GC@@C@AAA@@@A@@@A@AAA@A@@@"],"encodeOffsets":[[116003,35549]]}},{"type":"Feature","id":"410122","properties":{"name":"中牟县","cp":[113.976253,34.718936],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@E@@@AC@@AD@@AB@@@C@@@A@@@A@@CB@@AC@@@@DC@@@A@@@E@BFA@@EA@BFA@@A@@@D@@@DA@@CA@BDA@BFC@@BABA@@BA@@ACB@A@@AI@BC@BDE@AEA@A@BDC@@CA@@@E@@@C@@AA@@@C@A@@@AC@@B@B@@CA@@BC@@AC@@AB@@@A@@@@@A@BDG@F\\B@@D@BB@@@CB@AKB@BD@@@C@@DAB@AA@A@A@@AA@@@@AGB@@AE@@AKC@@EA@AK@@A@@AABAAAB@@GB@@EB@DEBAB@@AB@D@D@@@BBF@@CB@B@BAACA@@BF@@@@E@@D@A@D@B@@ABE@A@AB@@C@A@@@@DA@@@@@AA@@@A@@EBA@A@@BA@A@@@@@A@@B@@@BE@@@@BAHBB@@@B@@@BC@@B@@@B@B@@A@@@@BAB@@@BB@@B@D@@B@@@@C@@B@@BDD@BDD@DBB@B@@@B@@@@@B@@@D@@@D@@BF@BBDA@@@A@A@@@@BBD@BB@@BB@@@BBA@@D@B@BBBBBB@ABAB@B@@@BBB@B@B@@AB@@@BBB@B@BCBA@ABCD@B@B@@@BA@@@@DADCFKFKF@@@CAAIBCBECA@CB@@C@@BA@@@AB@F@@A@@@A@BAA@@@@@@@@B@BA@A@@@@AA@@@@@BD@BAB@@@B@@BF@B@B@@A@AB@@@B@@@B@@BB@BBB@BB@@B@BBB@BBBB@B@B@B@@@@A@A@A@@@@@@B@BB@@D@B@@@BB@@@F@BA@C@A@@B@B@BDAB@@B@@B@@@B@@@B@@B@BB@B@@@@BA@C@@@@B@@@@AB@@B@@B@B@@A@@@A@@@AA@A@@ABAB@@@BBBB@B@BB@@@@@@@@ADH@B@EDCHEF@@IAK@@FFFBHIB@@A@A@A@@@@HDHAD@B@N@FMBABA@AAK@AUEB@@G@CBQ@AB@@A@@BA@A@E@@@A@@@@AAA@A@@A@@@@B@B@@C@A@@@@B@B@@@@A@AB@@@@@BA@@@AA@@A@CBA@@BBJ@@AB@D@D@DAD@BBD@B@B@B@@BBB@@B@@@@@F@@B@BB@B@@@@@BB@B@@B@@BD@@TSBAHBGJDB@@FAHADDAHJ@FK@@XD@@BX@@@L@FAJBDBHBBHHAHMJ@HBF^ARB@@DJBFBJD@BPHREB[DABE@@@@@A@@B@B@@AB@@C@AA@B@@AD@BBBA@@BABA@E@@@@B@@BBBB@@@@C@@@HB@@@B@DDL@BB@@@@B@B@BBF@D@@@@B@@B@FBH@B@@@@AA@@@B@@@B@@ABG@ABA@@@@B@H@B@@D@@@BB@@@B@@@B@HB@@BB@@@@@BB@BA@@BGB@@@@DL@@@@KF@@@@BDBB@B@@@@@@A@CB@@A@@@A@BB@B@@FJBBBD@@D@@@@BBBB@DABD@@BABJ@@A@@@@B@@ABC@@@@B@@@@GB@@@@AC@@GB@@@B@D@@AB@@@@@BBD@DBBBDBDBBDLBDBBBDBD@@D@DFBDDHFB@DA`DAJ@ZAJ@JAB@B@F@HANBPBLBF@H@D@F@RBBBDBFBFBBBBBBBDBLJHF@BNHFFBBFBLLJFHJHJDBBDHFLJFDHDNFLDLB@BH@FBD@JBR@F@@@J@P@V@JBN@H@JB@@B@NBF@F@D@B@FAFARGJAFCFAHALE@@@AD@FAB@FCJCLEFCHCDADADABAHCPIDA@@D@HCB@JAB@D@CS@EAA@CAU@ACC@E@K@C@A@@@@J@@AEWCB@EA@AE@@AA@CA@AGB@AAHBAEB@AI@AA@AAA@@A@CB@@A@CC@AAB@ACGB@AB@@C@@BDB@@EB@AEEA@AAAG@@@A@@@IA@@@DC@AABFA@ACA@@BCBAAC@@C@@IBBB@B@@EBBBABBF@BCA@@A@@BA@@@C@AA@@A@CGCBBDC@@B@BA@C@@B@@BFABCGABA@AECB@AEB@CC@C@@BC@@@ACCBA@A@CGA@@AC@ALA@DMA@@AA@@B@@@@@@@BC@@BA@@D@BAAA@AA@AAC@A@AA@@AA@@C@E@A@AB@B@D@@@AC@KB@AA@@FABA@BFCBB@@D@@DC@@BD@@ALA@@B@@AB@@@A@DCHAAAHAACB@@CB@@C@@@AD@@BB@@BHA@B@@@@AIB@AEB@@AD@@@B@@AB@D@@AD@@BB@@AB@@@F@@@@AC@@ALA@@C@@AB@B@B@AID@@AB@@AB@@A@@@CA@@EA@EC@@E@@AB@AAIB@AA@BB@BC@@AC@BBA@@@C@A@AAA@@AB@AE@@@A@@@AB@AG@@BDB@@CB@@AA@@AB@@CC@@@@@@BA@@AA@@A@@@BA@@@A@@A@@@A@@ACA@CG@AA@@BA@@@A@@@BEA@@A@C@@@@@@@@BB@@AEA@AEE@@@DAAAB@@BB@AAB@@A@@BAAAD@@@A@@AD@@AB@AE@@BDB@@@@@BCC@ACACB@FEB@BEB@AAF@@BBA@DD@@BC@@BD@@@CBBBA@BDDABHHA@@@@AEB@BBB@@@@@@BB@@CB@BHB@AC@AD@@@D@AEB@@AA@@CB@@BB@@@BAACC@BDC@@@A@@CD@@AA@@@A@@A@@@@B@@AC@@@ABACB@AA@@D@@AA@@@A@@A@@AAA@ACD@@A@A@CA@A@@B@@AC@@CE@@B@@BB@@ACID@AA@B@@AAHA@A@@@CDA@ACBAC@CAA@@DA@ACBAEBC@A@AB@@A@@D@AAA@@A@@A@BA@A@@EBGEE@A@CCA@AEF@@@AEFA@AD@@EB@AAFA@AD@@@C@@AB@BCB@@@@A@@FAAAB@AAC@@@A@@@FA@@@@@ACB@CD@@AA@@@EB@AB@ACDA@@C@@@C@@@A@AK@@A@@CB@@DFA@E@@@@D@@@@ABAK@AGB@@KD@BA@@@@@CA@@@A@ACC@@@C@AA@@@BC@@@BLA@BBA@BDA@BDA@AEAB@@@@@BA@@@@@@@C@BDA@ACAB@@@FA@@C@@@@ABAB@@C@A@@AI@@@DA@ACB@AA@@C@@@AA@@C@CD@B@D@@AB@BAACBB@BB@BB@AF@AGA@@CB@ACBACBAC@@@CB@@@AE@@@AEB@@A@BFBA@FB@@JC@@A@@@@A@@C@A@AA@@C@A@AA@@A@@@C@@@AD@@AC@@EDB@DB@AEB@@CD@@A@@AE@@AA@@AC@@C@@CA@@BA@@CA@@AA@@AC@AAC@@A@@@G@@AD@@@CA@@@C@@DA@@CA@@BA@@DA@@CEA@@@EC@@E@@AC@@F@@@@AA@@CE@@EA@@AA@@EB@@@AA@AF@AI@C@@@IA@@CC@@AA@@C@@@@@@B@@BB@@CDBABB@@AD@@@B@BA@@G@@CB@@CE@@BA@@E@@@@B@ACC@@D@@@CA@@A@@@F@@@EA@@B@@@A@@@BA@@D@@@EA@@G@@@CC@ACA@@DC@@A@A@@B@@A@@@BC@BI@@@CB@@C@@@@@A@AD@@@@AB@@@@@@A@@F@BEA@@A@@@CB@@@@CD@@@@GA@@G@@@AB@@CB@@BB@@AB@@A@AE@@DC@@ACB@A@@@CA@@CA@@D@@@A@A@@@@C@@@@BC@@B@@@DA@@@A@ACK@@BA@E@@BG@@@@@ADAB@B@@@F@F@@@@A@@@A@@B@@A@A@@@@AEB@DE@BFA@@@A@@EA@@FC@@B@BB@B@@@@BC@BBA@ACA@@@BDAB@@E@A@AA@@@@BFA@@D@@@F@@@@C@@BA@@CB@@BD@@AC@@CEB@BA@@C@@@@AB@AC@A@BBC@@A@@@ACB@A@@@BA@@@@@@@A@@@EBACAA@BA@@@@BA@@CA@B@@@D@@AE@@C@@D@@@B@@@A@AAA@@@E@@BBFA@@A@@@D@@@AA@@DA@@GA@BF@@@DCA@C@@@C@@@CB@@BB@@A@@@A@@@CB@AA@@AA@@AE@@@F@@@@@CA@@AA@@CA@@ABA@@G@@@FA@@E@@A@@AAA@A@EA@@A@@@CB@A@@C@@B@@C@@AA@@BA@A@@@@DC@@CA@@@@CB@@@A@@@B@@ACBAE@AB@AAF@AAAGD@@B@@@E@@@E@@@C@@@C@@@@D@@B@@@CB@@B@B@@D@DA@@@B@@@BA@@DE@@@F@@BB@@D@@@@D@@AF@@@B@@ANA@@@ABA@@B@@A@@@AB@@A@@@C@@B@@@C@@CD@@EA@@C@@@GB@@CA@ACCB@AC@@B@@@E@@A@@AAB@AC@@@C@@@A@@@A@@@@@@@C@@AD@@@@@@@C@@A@@@@@@AAA@@@BA@EE@@@@@CB@BC@@BCB@BK@"],"encodeOffsets":[[116726,35267]]}},{"type":"Feature","id":"410185","properties":{"name":"登封市","cp":[113.050581,34.454443],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@C@@@A@A@@@A@CA@AA@EAC@A@C@CACAA@CBA@C@@BC@AAABA@E@@@AAC@A@EBA@A@C@C@C@ABA@C@EB@@CDA@A@A@A@CAGCEAA@@@AAC@EAA@G@C@CBA@A@A@@@A@CA@@A@@A@AA@A@A@A@A@A@A@A@A@@B@@@@A@A@CBA@A@@@C@ABA@C@A@A@@@CDABA@A@@BABABA@AACAA@ABA@C@AAC@@AA@@AA@C@@@CAA@AB@@AB@@C@@@@BA@@@A@@A@@AB@@A@EAA@@BCDA@@@A@AAA@EBA@CAC@AAAA@@A@A@CAAA@@ABAB@@@BB@AB@B@@@BB@@BB@@BBD@@@D@@AB@BDBD@HB@BBBB@DBD@BB@@ABABA@A@CBA@CDED@B@H@B@D@BAB@@@BBB@@@@A@@AA@A@A@A@C@@AC@@@CA@@E@@@A@A@A@A@@@A@ABCBABEDEB@@EBC@A@CAA@@@CA@A@@@AA@@AA@AAE@EAA@C@C@A@A@A@@@@B@@@B@B@B@@AB@B@@BB@@AB@@BB@@@@@B@@ABADA@E@A@G@AAABC@EBAB@@A@CAAA@@A@CBED@@@@@B@D@DAF@B@@A@IAE@GAIACAKC@@A@@B@JABCD@@ABB@BF@B@B@D@BBF@@@F@D@BABA@CBC@EB@@AB@B@@BD@B@B@B@@B@@BBB@@B@HBDBBBBB@BBBABAD@B@@BBB@@B@@@BBD@@@BB@A@CBA@CB@@@@@B@DA@@BA@@B@B@D@B@BBD@@F@BDB@@HFABB@F@@BB@BBFBDBBBJ@B@DBJ@@ADABAD@B@B@@BBBF@BFABB@@@@@D@@A@CA@@AB@@BB@BAB@@BB@B@BBB@B@B@@ABAB@@CB@BAD@D@@BD@@@B@B@D@BAB@D@BAB@@A@@@@@A@BD@@B@@@D@B@BA@AB@B@DBDDB@BB@@B@B@D@BABB@@D@D@D@HBHB@@DBDD@@@B@@BB@@B@@@BAB@FCB@DC@@FCLEBAFAB@BA@@DCDABAB@@ABAB@@AAA@@BA@@B@BBBAF@D@DAB@B@DBBBB@B@@@BABA@@B@B@D@D@F@@@B@B@B@HAB@BB@@B@BBL@F@B@F@B@@@@ABC@@@@BADA@@F@BAB@DBDB@@BB@@@@@@DAD@BA@@FBFBB@H@BAB@B@DBB@B@DADABAB@B@@A@@BADCDA@AB@B@BBDB@BB@BDBBDBFBHDBB@@ABCD@@@B@D@FB@@BBDBD@@@@@B@B@@@@@BBD@BBBDB@BBBAD@DAFAB@@BD@BDB@B@B@B@D@BA@@BBB@DB@@F@BB@BBB@BB@@B@B@B@BB@@@@FA@@DBB@@@D@B@DA@@@@BB@BB@DB@@B@DAB@DABA@@DBB@FBD@F@D@LBB@@@B@BDBBBBHH@ADA@A@@@A@@AA@@AA@A@@DABC@@@CBAB@@@@A@A@A@@BA@@@@B@B@FBB@@@D@B@D@BAB@BA@@@C@@BA@@@AB@JBD@L@B@@@@@BB@B@DAF@BB@DD@B@D@@BBB@@B@B@@@B@@@@BBB@@@BBB@BB@@@B@B@BBBAB@@B@@@@BD@@B@@BB@@BBB@@@@@B@@@B@B@@@DB@BB@@B@@AB@B@B@@@BB@@D@@DB@@@@BD@BABAB@BAB@@AB@@@@B@@@DBB@B@@@DCB@@@DDBBB@D@@A@@@@@@AA@@@@B@@AB@DED@BA@@BABCB@DAB@DB@@B@@DB@B@DBB@BBBB@DBDBD@@BB@@BBB@B@HEDEBAB@B@@@B@@BB@BF@@@BB@B@D@@@B@BBB@@@@@BA@A@@B@DALCB@B@@@DDDDBBB@BAB@@@DB@B@@D@DBD@BBB@BBD@DBB@D@@B@@@@@BB@DABB@@DB@B@@@BADBBBF@BDB@BD@BBBBF@@@B@DAB@DBB@@@@@@B@@@BA@@@BBB@@@AB@@@@@BB@@@D@@CB@@@DCBADA@@B@B@F@BBFBB@B@@A@@@C@E@@AA@@@C@@BA@A@C@AB@@AB@BABA@A@@A@@AAA@A@@BA@@@A@@@@AAA@@AA@@A@AAA@@@ABCB@@C@@@C@ABA@A@AA@ACA@@@@A@@@AB@BCB@@@BA@@@A@CBABEA@@@AAAA@C@C@@BABA@@DABA@@@@AAAA@@@A@AAAB@@AB@@AAC@A@A@A@ABABA@A@A@AAAAC@AAAAIAE@A@@AA@@AA@@@@BA@@D@B@@A@@BC@AB@FEBA@@B@B@DABABAB@@@B@@@@@@B@@@BBBBB@@@B@@@@@@BD@@@B@@@B@B@B@@BD@@BBB@D@B@D@B@H@N@F@B@D@B@@@D@B@D@D@FAD@BADA@@AA@@BADABA@@DAF@B@B@B@B@B@D@@@@ABABCBAB@BA@@B@B@DBD@HDB@@@@A@@@CAA@C@AA@@CAC@@@A@@@@B@DBFBBBD@B@B@BA@@B@@AFAB@BABAFAD@@AB@@A@@A@AAA@A@AA@A@ABE@ABABA@@BABA@A@A@C@@@AAABC@A@@B@F@@@B@DC@@@@@CBE@@@C@A@@BA@@BAB@DA@@BC@@@C@AB@BA@AB@@C@C@A@A@@BAB@BAFCB@B@D@D@B@@@BAB@@ABA@GBA@CBCBCBA@@D@A@AAA@ABA@A@@@@A@CAA@AA@@C@A@@CAC@A@ACAAAA@A@@@ABABC@@B@@ABCB@BA@@@AACAAAA@AAAACCAAAAA@@@A@@BAB@@A@@AAAA@A@@@A@A@@@C@C@C@@BABADE@A@@@@@AABA@@AA@CA@@AAABG@ABA@AA@@A@@@AA@@GBG@EBABC@C@@@A@@@AC@@@@A@A@C@CB@A@@A@@A@A@ABA@ABADA@A@A@@@AA@@@CBA@@@AACA@@A@ACA@AA@@YAA@A@E@C@E@CBGBA@A@C@E@C@EAAACACACA@A@A@AAE@@BAB@@@@C@@EAA@AAAA@AAA@@BA@AA@A@@@AACCCC@@@CA@@@A@A@A@AAA@@@A@ABEB@@@A@@AA@@@@A@ABABA@@@AAAA@@AA@@@AAA@AAA@@AA@@AACAA@BA@C@@@@@CA@A@@AA@AAA@@A@@B@DC@@@@@AA@@AAACA@@@AA@@A@AA@C@A@ABA@@@@@AA@@@ABC@@BC@@@@AAA@@@CA@@AA@@CB@@@@@A@@@A@A@@A@AB@@A@@@A@@AA@@C@A@@@A@@@A@@CA@@A@A@@@A@@A@AECA@A@@@ABCDA@A@A@A@ABA@AD@BA@C@E@C@@@A@ECCAA@IAA@AA@A@@AA@@A@@@ABC@A@AAA@@AA@AA@@A@@A@@@@AAEBA@A@@@CAA@A@@@ABA@AB@@E@E@C@@@A@@BC@A@A@@@ABABAAAB@@ADAB@@AB@BA@@B@@ABA@@B@BAB@@A@C@A@A@A@@@ABA@AB@@@@BBB@@@BB@B@B@@@BA@ABA@@@@B@@@@@BA@@@ACA@@@BA@@A@@AC@KCA@AA@@C@C@CAA@A@EB@@A@AAA@@@ABA@CB@@AB@@ED@@AB@@@B@@ADA@@B@@AB@@A@CAAA@@A@A@@@@DA@CDCDA@@B@@@BAH@@AB@@C@A@"],"encodeOffsets":[[115724,35124]]}},{"type":"Feature","id":"410181","properties":{"name":"巩义市","cp":[113.022406,34.7481],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@BCB@BGGAA@@ABAB@@@BA@CA@@@@@@AH@B@@CAA@@@CHAB@@@@A@@@C@@AGB@@E@A@A@C@GAOAE@CDE@ABADCB@@EAAAA@A@AAAA@@A@@@@BA@@@A@@@A@A@@AA@A@A@@@@@AA@@ABAA@@ABA@@@C@C@@@A@AB@@C@@@ABA@A@C@@@A@A@A@@@EBGFABCBAB@BA@@@EBEFA@AN@DAD@@@BA@@@@@A@@B@@@B@@C@A@@BA@ADAB@BAB@BA@A@@BA@BBAB@@@@A@AB@B@@BB@@A@@@AB@BA@@B@@@@B@BBB@@BA@@@A@A@K@A@@CB@@CAA@@A@ABC@@@AD@@A@C@@@@@A@@B@BE@@DA@@BG@FP@@BF@@FA@B@@@B@@@B@BBB@@TA@@@DCB@B@@BBB@@DA@BD@@IDBBC@@BC@@F@BE@@AC@@BI@@@@BUB@D@BHBB@D@@BD@@@D@@@@ABA@@J@D@@BBBB@@@@BB@@@@@@BC@AB@@@@@BBF@@A@@@@B@@@@B@@@@@BB@@A@A@@@@@@B@@B@BAB@@@@B@@@@ED@B@@BB@BB@AB@BCAA@@@ABCBA@@@@B@B@@A@@@@@A@@@@B@@A@@B@@ABA@AD@@A@A@@@@BB@BBB@BDBBBJ@B@DGB@B@BAFGA@LABH@@@@DI@@AA@BH@ABD@N@@@BBBB@DBDBB@RDD@DBDBB@@@DBDDB@DDND@BFBB@BBB@B@D@B@DCFADAFAFA@A@@DABC@A@@DAB@BABAB@B@BAB@@@@@DA@AB@B@@@B@LJDB@BBBBDBF@BDDBDDBDB@@B@D@N@D@D@@@BB@BDHFFBD@@A@AB@@ABA@EBIDGDKFCBEBED@@I@A@@@@@AAAAA@@@@@@D@@@@@@A@A@@@@@@B@@@@B@D@@@B@@@@@@@@B@@B@@@@BB@@@@@A@@@@@@BD@BDB@@BB@B@@@ABA@CBCB@@@B@@H@B@@@AB@@B@@@@B@@@@@BA@AAA@A@A@@BA@A@@@@B@@D@@@ABE@@@@@@@DBD@F@B@@@@B@@BB@DB@@@@@@A@@B@B@@@@@BB@@@@B@@@@@@@B@@@BB@B@@C@CBA@A@@@A@ABC@A@@@@B@B@@B@BAHAD@@@@@B@BA@@B@@@ABAB@@@@@@@@B@B@B@@B@@@B@@G@@@@@@B@@A@@@@BF@@@@@AB@@@B@@@@@B@@A@@B@@A@@AAB@@CAA@@@@@@B@@BB@B@@A@G@@@@@@@@AA@C@A@@@@B@@@B@@D@@@@B@@A@ABCB@@B@@@D@DABA@@B@@B@@@@B@@@@@@B@@A@CBA@ABA@@@@D@@@BA@A@@@A@AAA@A@@@@B@@BBBB@@@@AB@@C@CAA@GD@@@A@A@AA@@@A@@C@@@ADA@@@@GAA@A@AB@@B@@B@@A@A@ABIFABABAB@@G@@A@@@AD@@@AA@@@ABAA@@@@@GE@@A@BB@BDB@@@@CB@@@@B@@@@@@BAACAA@@@A@B@BB@@A@A@A@@@@B@@@@F@@@@@BB@@A@@@C@A@AB@AA@@AA@@@A@A@@@@@@@BB@BA@E@A@@@B@@A@@A@@A@@AA@@D@@@@@@@@@A@@@AA@@@A@@@AA@A@@@@@@@B@@A@@@@AA@A@@A@A@C@A@@@A@@@BA@@AA@@@@@A@@@@B@B@LA@@@@@AC@GBC@A@@@@@@@DCB@@@A@@AA@@@ABA@@@A@A@A@@@@B@@A@@AA@A@C@AB@@@@DB@@@@A@ABABAB@B@@CAC@@B@@A@@@@AC@AB@@A@ABA@ABA@ABAB@BA@@@C@A@@B@@B@BB@@AD@B@@A@@@@BB@@B@@@D@@@D@DBJ@@@B@@ATJ@@FCj@@B@BADABANEBAJGDADCDCDADC@@B@D@DAB@F@D@FBBBBBDDDDDDFFBDBB@D@DBBHJHHDBDDBBDBBBF@BBD@D@B@@@B@F@L@BA@@B@DADCDABCBABCHIBA@@DABAB@JABAD@B@B@F@B@LDDBFBDBDBZPLHLFBBDBDBNFB@RHB@PDDBBAD@B@D@HAF@DAD@@@LAHAF@HAF@D@D@B@N@D@FBFBD@BBBBB@DB@@DBD@DBB@D@FBFDB@HBHDFB@@DBFBF@@@@@HM@ABGBEB@F@B@BABB@@HBBA@CRB@@@@BAJ@LBF@BEDKB@@AAA@A@A@ABABA@@BABCBCDCBABABABCBC@@FGDABAD@@A@@BA@C@A@AC@A@C@@@AB@B@BABC@@@@A@A@A@A@AA@A@A@@AACBC@EBAAAA@CC@@A@AA@@BC@ABAD@B@@AA@AAACAAA@A@BA@@B@B@@@B@DBB@BBB@@@B@BA@@@C@C@@@@A@AAAA@@@CAAAAEA@AA@AAAC@ABA@A@CB@B@BABB@@BBFAF@B@DADCFE@@B@@AB@AC@C@CA@@A@@BE@@AA@@@A@@BAB@B@B@B@B@@@@@@BBBA@@@A@AB@@@BB@B@@@BABA@BBBB@D@DB@@HBBBB@@ABAB@@@H@F@DAB@DAB@DA@@D@D@@@BABAHABABADAB@D@F@D@B@B@D@@@FBFBBB@@B@B@BB@BB@@@HCB@B@@@DDBB@@@BF@B@BBBDB@BD@DBBB@DBB@BBB@B@BAB@@@BCBCBEBC@C@ABC@@BCDE@ADA@A@@@A@AA@AAEA@@AA@@BA@A@AA@AA@@AC@AA@AACAA@@A@A@@@AB@B@BA@@@A@ABA@@DAB@@A@@A@AAA@AA@@@A@@@@@ABABA@@@AAAAAAACC@@@@AA@AAA@CAA@@AC@AEC@A@A@@@A@C@A@ABA@@FEDCBA@@@@@@@A@@A@A@A@@@AA@@AC@@CA@A@@@@@@CAAAAC@ABC@@BAB@BA@@BABA@@@A@@@C@@DAB@@@@@@A@@AAAA@@@C@A@@@@CCA@A@@@AA@A@A@AA@A@@AA@@AAAC@@@@A@A@A@@A@@@@@@@AB@@@BA@@@C@@AA@@@@CAA@AAAAG@@@@CA@@@@A@ABA@A@A@@@A@C@@@A@AAAA@A@@@A@@C@A@IDE@A@A@@@@@AA@A@@C@A@A@A@@BA@@BA@A@A@@@CACA@@AA@AAA@@BA@A@AAAA@AAA@@@@A@@B@BABA@@BA@A@@@@BA@@@AAA@C@A@@@A@A@@AA@A@@@@@@CBA@@BA@@BAD@B@B@@@B@BB@@F@B@@@@CCA@AAC@A@@@@@@A@@@ABA@@@@AA@A@C@@@CBA@A@A@@@A@@@@@A@@@AAC@@BA@@@A@A@@@AA@A@ABA@@@CA@@A@A@ABA@A@A@AAE@C@AACACA@AC@C@AA@@A@@A@CC@@@A@@A@@@@BA@@A@AA@@B@@A@@@A@@@@A@CAA@CBA@@@E@AAAAC@@ACA@AAEAABC@A@@@ACA@@AACBA@@A@@@@@AC@A@CAC@AAA@AAC@CAC@@@@ACA@@A@ABA@AACCCC@@A@A@KDCBA@@@@BAB@@@@A@AAA@@@C@A@A@@A@@AEA@@AA@@@A@A@ABCFGFA@A@AA@@AA@@ACAC@CAAAAA@CAA@A@@CA@@@CAA@CBA@ADAB@@ABC@CFA@@BA@@@@@BB@@@@@@@BC@A@AACC@@A@CD@@A@A@CA@@A@@@@@BA@@BA@ABABA@AAC@@@@CA@@@CA@@A@@@A@ABA@@@AA@@ACA@@A@A@@@A@@@@@A@AA@@AA@@@AC@@A@@A@@@BAAA@A@A@A@@AAA@AA@@A@AA@@@@@A@@@A@AA@AA@@@C@ACCA@@ABE@C@AAA@@@@A@K@C@IAA@@B@@AB@@@D@@ABA@ABC@A@C@@@A@EAA@A@@@@@AB@@@B@B@B@@A@AB@D@@ADCB@@@BBB@@BB@@@B@@"],"encodeOffsets":[[115699,35366]]}},{"type":"Feature","id":"410182","properties":{"name":"荥阳市","cp":[113.38324,34.786948],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@AAAA@A@@@AAEAEA@@C@A@A@C@E@C@A@CBABABGBABAB@@C@C@@@CBA@CBA@CBE@G@@@A@AB@BA@AAGA@@CAC@A@AA@AABAB@@A@A@@A@@BAB@@@B@AA@A@@@@A@A@A@A@A@AB@@@B@@BB@@AF@@@BB@@D@DBDA@@BA@@@EFCDCBA@E@EBAA@@AAABA@A@@D@BAB@BBDBBB@@BFBBBBB@D@@BBBBB@@@@@@D@D@@ABA@@@A@AAA@CAA@@@A@A@@@ABB@B@BBBDBBB@@BA@C@AB@BAD@@BBB@@@DDB@BBAB@FADBD@BB@B@B@@B@B@B@B@B@@D@BA@A@ABA@@D@B@D@@B@B@DAB@@@BC@ABCBEH@@ADADABABABCDADADAB@@ABAB@B@B@BBB@BA@CLAFH@@@KlCN@BJ@PDH@@@BBJBDBHBD@BBJBFBB@HD@@D@HDHBHBLDDBD@RFD@DBFBJBBFDHBBBDHLFHFF@@BDBDDDDDBDB@BDHDBBNDFDNDDBFBFBB@PFD@BBFBDBJBFBHBJDF@BBB@LBJBBBJBLDD@HDDBB@FBTDB@PDD@RBH@J@VBH@TBD@L@H@l@J@H@N@BAF@JAJ@PANCFAD@DAFCHCLADAM@@]A@A@AA@@AC@@BADC@@@@@@AAA@A@@@@A@@@@B@@@@B@@BAAABB@@@@B@@@@A@@@@AA@@@@@@@ABA@@B@@@@@@@@@AA@@@BAC@@@@A@@@@B@B@@A@@C@@@A@AA@A@@@@@@A@A@@@AB@@B@@@@@@B@@@@BA@@@@@@@B@@@@@@@BB@@@@@A@@@A@@B@@@@@@AB@@@@A@@AC@A@AB@@@@@@A@@CB@@AA@@A@@@@A@@@AAA@A@@@@BA@@@@@@AA@@A@@A@@B@@@@@@A@@@C@@A@A@@A@@@C@@@@B@@@B@@@B@@@BB@@@@B@B@@@@@BD@@B@@DBB@@B@@@@AAAAC@@@A@@D@@@@@@@A@@@AA@@A@B@@@B@@@@@@A@@@A@@@@@@@C@A@A@@@C@A@AAA@@B@B@@A@C@@@A@@B@B@@@@@@@@C@@BA@G@@C@@C@AB@@A@AA@G@@@@A@AA@C@@A@AC@@@@EAA@@C@@A@@B@@A@A@A@@A@@@@E@AAC@A@E@A@@@@FAF@F@B@@@@A@C@A@CB@@A@A@@B@D@@@@EB@@C@A@@GCCC@@AA@A@AAC@AB@@A@AA@@ABAAA@@AAC@EAA@C@C@G@AAA@A@C@EBC@A@CAA@@@A@ABCB@AA@@@AAAAA@A@CBA@A@EAEA@@@AAA@ABA@@@A@@AA@A@C@A@AAAAA@@AA@A@@@I@A@@@@BAFABAB@BA@A@A@@@A@A@A@A@C@@@@CCCAAA@@@A@AAAJAbE@B@D@@@@F@B@H@B@@F@@F@@@@C@IAG@A@@@@DC@A@C@@@@A@@@@@AA@@@@AB@@@A@@@@@A@A@AB@B@F@@A@@@@@@@@@@@AB@@@BB@@B@BA@A@@@@A@@@A@@@@A@@@C@@BAB@B@@@@@@C@@A@A@A@A@@@CC@@A@AB@@I@@@@@AB@@A@A@@@@@AABAA@@B@FC@@DE@A@CBAA@@C@@C@EA@@A@A@A@@A@@A@@@AA@AB@A@@@CA@@C@AB@@ABAB@@@DAB@D@B@B@D@B@B@BAB@@@BCB@@A@@AA@A@C@C@@B@B@@@B@@A@@@AAAB@@AB@B@D@B@@@B@@@@C@@FC@@@@@@AAA@A@A@A@@AA@@@CA@@AA@@ACAA@@@@C@E@E@@@@@A@@A@@@A@AAC@A@@BA@A@@@AB@@B@@@BD@B@H@H@F@B@@@@A@@@C@A@@@@@@BD@B@@B@@@@A@AD@D@BBB@@BA@BB@@@BB@B@D@BAD@D@@@D@B@DADA@@BA@@@A@ABA@@B@D@@@@@@B@@@DB@@@@@@@B@@@@@@A@@BC@@@@@AACA@@A@@A@@@A@@C@@@@AAA@AACA@@A@@@A@@C@@@AA@@@@@@A@@@A@A@@B@@BB@@B@A@@AC@C@CAC@@@A@A@A@ACC@A@@BC@A@@BABA@A@@BAB@B@@@@@@A@@A@@@@A@@A@A@@@AAAC@@@@A@@A@@@A@A@A@A@A@@@ADA@C@A@A@A@@B@B@B@AA@@C@@BA@EACAC@C@GAA@C@KCCCCAA@A@E@@@AACC@A@@@CBC@@@@BBB@@@@C@@BABAB@@A@@@@A@ABA@@@AA@@@@ABA@A@@AA@A@@@E@A@A@@A@@@@@AAA@AA@CAC@@@AA@A@@@@BAB@BAB@@A@@BA@C@@@AAA@AAA@A@A@A@A@A@ACCAC@@@@C@A@A@@@A@A@@@AA@B@@@BA@@@@@A@A@AAA@@A@A@C@AA@@AA@AAA@KAEBAAA@A@AAI@E@@@CAEAA@A@C@A@CAKCA@ABC@CBA@C@C@A@@@@@@BBB@BDD@BAB@BAFCF@BAB@@@@GBAB@@@B@@@B@@CB@BA@A@CAAACA@A@AA@@AAAA@@@@C@@AA@A@C@@@A@A@@@@A@AC@@A@A@A@AAAAA@A@CBGBABCBA@C@ABA@@B@@@B@@DB@@@BCDCBABCBE@CBCBA@ABA@@@C@CBCBA@A@A@AAAA@@AA@CCC@@CAA@EAEBA@A@A@A@C@A@C@GBC@A@A@CAA@AAA@A@CBCB@@AB@@CBABA@@@E@A@@@ABA@@@C@A@@A@@@@@@C@@@EAOC@@C@@@AA@@A@@@CBA@C@@@A@CAAAA@CBA@@@@@A@@@@AAC@AA@@AC@C@E@AA@@@@@A@@AC@@@A@@@@AC@@@@BA@@@@CAABA@AAA@@@AB@@C@@@AAAA@@AB@BBBBB@@@B@@@@A@AAEAA@@@C@AB@@@B@@BB@BBBB@B@@B@@@B@@AAC@C@C@A@@@@E@A@@AAAACAA@@@@@ABCB@@ABAB@@@@@BBB@@@B@B@@@B@DBB@B@@AB@@@@@BAB@@ABABA@@@@B@@B@BBB@BB@B@BAB@@BB@BBB@@DBDB@@B@B@B@@AB@@AB@B@B@D@@@@BBB@@@@B@B@F@JCB@D@@@@B@@@BBBBBB@@@D@B@@@B@B@B@BAB@@@@@DB@@@@BHBB@BBB@D@@B@@BD@@@B@@A@@BA@@@@@@B@@@@B@B@B@@D@BB@BB@@BB@B@@B@B@BBB@@B@B@DD@@@@@B@D@@BBBB@@@B@@@@A@CB@@@D@@@B@@ABAB@@ABA@AB@@AD@BBDBBDB@@@@@@@BDB@@BD@@BB@@B@B@B@@@@B@@@@@@ABCDEF@@AB@B@B@D@B@@@B@BFD@BBD@@BB@DBB@BBB@@@@DDBBBBBB@B@@ABAB@B@@@@@B@@L@B@B@B@@@@@B@B@B@@A@@@@@@DA@@B@@AB@@@@A@@@@B@B@BBB@@@B@@@B@BBD@@@HDB@@@@@@@B@@@@@BBB@BB@@B@B@@@B@@BBBB@DFFF@B@B@@@@@BA@@@AB@B@BAB@BA@@B@@@@@B@B@@@B@@@B@B@@@@ABA@@BAB@@ABA@@BAB@@@@@B@DAB@@@B@B@@@@A@@BA@@@@@AAAAC@@@@B@@A@@@A@@@@BA@@@@B@B@@A@@BA@@AA@@B@@A@A@@@A@@@@@@@@BB@B@B@@@@BBB@@@@@@@BB@@A@@@@@@B@B@B@B@B@B@F@@@@@@B@@BD@@@@B@@@@B@BJ@@@@JB@B@B@@@@D@BDAAD@BBB@B@B@BBB@BBBBBBBB@BBB@@@@B@J@@@@@@@H@D@B@B@@@B@@@D@@B@B@BBA@@B@@@BBBBAB@@@B@@@B@@@B@@@@@@BA@B@@B@@@@@@@@@@@B@D@@A@@BAB@@GB@@A@@@ABC@@B@@@@@BABA@B@@@AB@@B@@BB@@J@BB@@D@D@@A@@EA@CFE@@BC@@@EB@@@@@@A@A@C@@BA@AA@@@@@@CC@@A@A@@@A@@@@@@@A@@@@DA@@@@@A@@@@B@D@BA@@@I@A@@@@@@@@BEB@@@@BF@@PABDK@EB@D@B[BAE@@AAA@E@@A@@I@A@E@@A@@G@A@@AB@@@BAHE@A@@AA@@@@AB@@@AA@@A@A@@A@@@AB@AAA@@@@@@@A@@C@@@@@@AA@@@@E@A@@@@@@@A@A@A@@@AB@BA@@@A@@A@@A@A@C@@AAAA@@@@@AB@BAB@@A@@@A@@A@AA@@AA@A@@BA@A@C@A@@BAB@@@B@@@@C@@@AAA@@B@@ABA@A@@@ACC@A@A@ABABA@@D@@@@AB@B@B@@@B@@@B@B@@@B@@@@AA@@E@A@A@AA@@@AA@@CA@@A@@@@A@ABE@ABA@A@ABA@CBCA@@AAA@CAAA@E@@A@@AACC@@A@A@GD@@A@"],"encodeOffsets":[[115959,35589]]}},{"type":"Feature","id":"410183","properties":{"name":"新密市","cp":[113.391087,34.539376],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@@@@ABA@ABA@@@AAAACAA@@AA@@GCA@AA@AA@@@EA@@C@C@ABA@A@ABA@ABCDA@A@C@@@C@AAAACAAACA@AA@@@@A@@BA@A@@@ACACC@@ABC@@@CBA@ABAB@@GBA@C@C@AB@@A@@B@BABA@@@A@AAAA@@AAC@@BA@@B@B@@@BA@C@@B@@A@@DA@CDABC@EB@@ABABAB@@A@@@A@CACAA@@@C@AB@@A@A@E@A@A@@BA@@@@@@B@@@BCB@@ABA@ABA@@@@B@@FF@@@@@@CF@@@@@B@@B@B@@B@@DF@@@BBD@D@BDB@@@@@BA@@@CBA@@@@BA@ABA@@@AAABA@@@G@A@A@AAAA@@A@@@@@ABA@A@A@AAC@@@A@@@@@ADABCBABA@@@A@@@@@AA@@AC@AA@A@A@A@A@CBCBA@ABA@@@@B@F@@@BFB@@BB@B@BB@@BA@@BCB@@A@C@A@@BAB@@A@ABA@ABABA@@BA@A@C@A@@@A@@BAB@DA@@BCBABABEDA@A@A@A@A@AAAA@@@@A@@@AB@BA@@@@AA@@A@@A@A@AB@@C@@@ABADAD@DAB@HAB@BA@AB@@A@C@C@A@A@EDABA@AB@@@B@B@D@DA@@BABA@@B@D@@AD@@CBA@AB@@AB@@@B@D@@AF@D@@@@CDA@@@E@A@@@@BADBB@B@@@D@B@BABAB@@ABAB@BAF@B@BBBB@B@BBB@@@@BA@@BC@EBABABA@EB@BA@@@ABA@A@C@AAEACAA@@@@@@B@@BD@DB@@B@DBB@D@@@B@@A@GCC@CAA@A@@@ABA@ABADAB@B@@C@A@A@A@A@A@E@CB@@ABCBAB@@BB@@CBABC@EBC@C@A@C@@@A@C@A@E@M@G@A@C@A@C@A@AA@@AC@@@A@A@A@@@A@@AC@@@@@@@A@@AAAA@A@@@A@@@@A@@@A@ABABCBA@A@@@ABEFA@@BAD@@@BA@C@@@AB@@@@BB@@BB@@@BBFBJBB@BBDBB@B@B@BABAB@B@B@B@BBD@BA@@BA@BB@B@B@@BBBB@@@@ABCB@@ABAB@@@D@DBBBB@@B@AFAB@D@B@@AB@@A@ADA@@B@@@B@@B@BDB@@B@BAB@B@D@@@DA@AD@B@@BB@B@BB@@BB@BB@@@@@B@@AB@@@BBB@BB@@@@BABABA@@BA@@B@D@BAB@@@D@@BB@@@F@D@@@BA@A@EAAAE@A@A@@@CBABCD@@A@@D@D@BB@@@BBD@D@@BDBDBBBD@F@BBB@B@B@BAB@B@@@DB@@B@BAB@B@@B@@@B@B@@AB@@BD@B@@@B@@@@@B@@@B@BAB@D@@@D@BBB@@@@AB@B@@@B@@@@B@D@BBB@DD@@@@@A@EA@@A@A@@@A@ABC@AB@@AB@DA@@@@@@BABA@@DABA@@@@B@DBBBBB@@@B@F@@B@D@D@D@BB@@@A@@@AA@A@AA@AAA@@@A@@BAD@@@B@FBBBB@@@@@@A@@AAAA@ABA@@BBBB@@D@@@BA@@B@BBB@BADB@@@@AB@@@@BD@@@@@B@@BD@@@B@@@@BBF@D@D@@BB@@BBD@B@@B@@@@@B@DAB@BBDBB@@@D@B@DA@@B@@@BB@@D@@@PDFB@@D@@@@@@@@BB@D@@@B@BA@@B@F@@@B@BADA@@BA@@DADAB@B@BBB@DBB@B@D@HAD@B@D@B@B@B@B@FAFBB@DB@@DD@DBB@@BBBBB@B@B@DADAD@@@B@BAB@DADAF@DABADADC@A@@CA@@@A@@@AB@BAD@B@DABAHADAB@B@BBBBB@B@B@@@BDB@@@@@@B@B@@@D@BBB@@@D@@B@BB@BB@@B@BDBBBDBB@B@@ADA@@@A@@@A@@BAHA@@@@BA@ADEBE@ABA@ACC@AAA@A@@@@B@D@D@B@DAD@BAB@LDDBB@D@B@B@FBDB@@F@J@BBB@B@BBFALBB@BBB@@BB@@B@D@B@BB@BBB@B@@@@@B@@A@@@ABB@@B@B@@@B@B@D@@@@@BDDD@B@B@B@B@B@BBB@BBB@B@@@DAB@@@BA@ABA@AB@@@@@BBB@@D@DBB@@BBB@B@@@@@BB@B@F@@@B@B@@BB@B@BA@@@@BB@@B@BAB@@@@@@BA@ABAB@@@D@@A@AA@@@@AD@D@@@BDDBB@@F@B@B@DBDDLDD@B@HBD@D@DBFBB@@AD@@@BBAC@@@@HE@@@@AEAE@ABAACB@@A@@A@@A@@GBA@A@A@A@@@@A@@BABABABAB@B@FAD@BA@@B@@@@A@@@A@A@AA@@A@@@@@AB@BABAB@B@N@B@BA@@@@@@AA@@AAAA@A@ABA@A@@B@@@B@@@B@DAB@F@@@B@@A@@@A@AB@@ABA@A@A@A@A@G@@BA@@L@@@@D@D@D@BBBBBBB@B@F@@BBB@BB@@BBBHBBBBB@B@@@B@B@DAB@BA@@@A@@@AB@DA@@BA@A@@BAFCB@BA@A@A@AAA@ABABA@A@@AACA@@AA@@@@@@BABA@@@AB@BA@@@@AC@AB@@ABA@@@@B@@@B@DBB@@AFAB@BA@ABA@@@C@C@A@A@@@@AA@A@A@C@CA@AA@@@A@AAA@@@@BA@@D@@@BA@@B@@@@@@D@@B@@@@@BC@AB@@@@@@B@B@B@@@@@@@@B@@@@C@@B@B@B@@@@@B@@ABC@@@@BA@@DBBAB@D@@@@C@@@ABA@@@@CA@@@@@@@A@@DAB@@@@A@@@C@A@@BA@@@@AAA@B@@@B@@@B@AAA@@A@@BABEBABA@@B@@@B@B@@BB@@@@B@@AB@@@@B@F@B@@B@@@@A@CB@@@@@B@@D@@@@@@BB@@@@@@AB@@@@B@@@@B@@@@@@@@C@@@A@@@@B@@@BB@BB@@@@AAE@@@AB@@B@@@B@B@@@@B@@@@@@CA@@A@A@A@@@@B@@@DDBBBBB@BB@@B@@@@@B@@@@AA@B@@A@@B@@@@@@@@AB@@BB@BAB@@@@@B@@@@B@D@@@@D@H@BAB@DA@@B@BA@@@A@@@@B@@@B@@B@B@@B@@@@A@C@ABA@@@@DAFAB@D@BABAB@FAD@@AB@@@@A@AAA@@@@AAC@A@@@A@@A@A@A@@BABC@@@A@@@AB@@@BB@@@B@@@B@@@@B@@CB@@@D@@@@ADA@AD@@@@A@@A@A@@@@A@AAC@CBA@@@@B@B@@@@@@A@A@@@@A@@@@@ABA@@A@@@A@@E@@@@A@A@A@A@@A@AA@@@A@@@@@@AB@@@BAA@@@A@@BA@@B@@A@ABA@@@@B@DB@@@@@A@A@@B@D@@@BA@@@@@@@ABC@@@A@@AA@@@A@AAA@@@@@AB@B@@C@A@C@ABA@@@@B@@@B@@@@A@E@A@@@@A@AB@@A@@@AA@@A@@C@@@@A@@@C@A@@@@@@@@E@C@@@A@A@@@A@@A@@@A@B@@@@@D@B@@@B@@@@C@A@@@@@@E@@@@B@@@@G@@@A@@BCBABA@A@A@@@ECAA@@A@A@@@@@@@@ABBB@@A@@@@@A@@AA@@@@D@@A@@@@@@@AA@@A@C@C@A@@@A@ABC@@B@BAB@@C@A@A@@@A@@@@A@A@C@@@A@@@@A@@B@BA@@D@@@@@@A@@@@AAA@@@AB@@AB@@@BA@@@AA@@EA@@A@@A@A@A@@AACCA@@AA@@A@@A@A@AAA@@B@B@@@BA@@@C@A@C@@@@@AB@B@@AB@@A@A@@@@@A@@@@A@A@A@ABA@AB@@@B@AA@AB@@AB@@@AA@A@@@@B@BA@@DB@@B@@AA@@@AAA@A@EDA@A@@@AA@@A@@@@A@AA@A@A@ABCBA@A@@@@AA@@A@A@AA@A@A@ACAAAAEA@@@AA@@ABA@@B@@A@@A@A@A@@@A@A@A@@@AA@AA@C@@@AA@@CA@@A@@A@@BC@A@ABABC@@@AA@A@@@@@@@@A@@@@B@B@@AB@@@BA@A@A@@@@@@B@@@BA@@@A@@AC@@@@@A@@D@@@BA@@@@@@A@@AC@A@A@@BA@@@@@AB@@@BA@@@@@A@@AA@@BA@AB@B@BC@@B@@@BA@@@A@@@@@A@@A@@C@AA@@ABABC@@@@BA@@BA@@@A@@@ABEF@@@BA@A@A@@@AAAC@@@@@@AB@@A@@@AA@@@A@@@@BAB@@@@ABA@@BC@@CC@@@AB@@@D@DCD@@AB@BA@A@@BA@@AA@@A@@@@@@A@@B@DBBA@@@@@A@@A@@@AB@@C@@@@A@@@@C@A@A@@BA@@AA@@@@A@AB@@@@ABB@AB@@@@A@@A@A@AAC@@@@@@A@A@AA@A@@AA@C@@@A@@A@@@@@@A@@@@@A@@@@@@AB@@AA@@A@@B@@@@@AA@@@@B@BBBAB@A@@AA@@@C@A@@@A@@@@AB@BA@A@@@@@@E@A@CA@@A@AA@@@@@A@@BA@@BA@@@CA@@AC@AAAAC@EAC@AAA@@@@@@B@@@@A@AA@@A@@@@@A@@@@@C@@@A@@@@@@@@@@@A@@@A@@@A@@@@@@A@A@@AAA@A@A@@@A@@A@AA@@AA@CA@@@A@@DC@@@@AA@@A@@@EC@AA@@@AA@AA@@A@@CA"],"encodeOffsets":[[116238,35178]]}},{"type":"Feature","id":"410184","properties":{"name":"新郑市","cp":[113.740662,34.395949],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@AD@@A@C@@@AC@@AD@@C@@@A@CCB@AA@@BC@@@C@@@K@@BA@@A@@@CC@@@@@@@@@AAB@@A@A@@B@D@B@B@BC@@AAAAA@@@@GA@A@@CA@@@C@@BE@@B@B@BE@@ADABA@@@AA@@@@AB@@@A@@@@@A@@B@@@@@DE@AB@BA@@BC@@B@@ABA@@A@@@BI@@@A@BAA@AB@EE@@CA@@AA@@@@@@A@@@@CAE@CA@@A@C@ABC@ABA@@@C@@BA@@B@@@DA@@@AB@@C@@@AA@@@BA@ABAB@@A@B@@B@DA@@B@@AB@@@@@@@@A@AB@@AA@@AB@BA@A@AA@@@@@@@B@@AB@@A@@B@@A@A@@BA@BD@@A@@@@@C@@@@@@BA@@B@@E@@B@DA@@@AD@D@@CBA@ADABABAB@@@@C@ABA@EB@@AB@BA@A@A@@@@@C@A@A@A@@@CBA@A@@BABA@CD@@@@A@A@@@CB@@A@@@A@@@@@A@@BA@AA@@A@@@A@EB@@CBA@@@A@GAAAA@@@A@A@@@C@@@A@AAA@CAA@A@AA@@AAAA@@@A@A@A@@A@A@C@ABA@AB@@C@@@ABA@AAA@A@ABA@@@@@ABA@A@@@A@A@ADA@A@C@@@ABA@A@@@@@@B@@ABA@AB@@ADA@ABCBAB@@@BADA@@B@@@B@@@@@BB@@B@B@B@@ABAB@@A@ABADABCF@@@@BB@@BBBDBB@B@@AB@BAB@B@@@@DB@@@BB@@BBB@@B@@BFD@@B@@@BB@@@@CD@@@B@@DBB@@BB@@B@BB@@@B@B@B@BB@@@B@B@@@@B@@@B@@@B@@@@@@@@@@@B@@@D@@@@@B@@@@@B@@@BBB@@@@@@A@@@@B@BBD@FBD@BBBBD@@BB@@D@@AB@@AB@@@B@@@@BBB@@@DBB@F@@@@@@@@BABA@@B@@B@@@B@D@@@B@@BB@A@ABAAA@@@@@BB@@@@A@@@@BB@@BA@@B@@@@B@@@@@B@@@@@@@@BB@@@D@B@@BB@B@@B@B@B@@@@D@BBB@B@@@@B@@A@@BAA@B@@A@@B@B@@B@@BB@@AB@B@D@@@@@@B@@D@@@BA@@B@@@@B@@@@ABCAA@@@@B@@@@B@@@BB@@AB@@@BABA@@BC@CDC@@@A@@B@@DD@@AD@@AB@B@@A@AB@@@@@B@@BB@@B@@@BA@@@@@@BDBB@@B@B@B@@A@@FEBA@@B@@@B@@AB@@A@@D@BABA@@BBD@@@@BB@@@@@B@@@B@@A@@@AD@@A@ABAB@@AB@@BB@@@@@B@@A@@BA@@@@B@@AB@B@D@@BB@@@@@@@AB@@C@@@@B@@@@BD@@@B@@AB@@A@@@@@@@@B@BAB@@A@@BA@A@@@@@@B@@@@@@B@B@@B@@ADAB@B@BAD@@@BB@@@DB@@BB@@D@B@@BBB@@B@B@B@@@B@B@B@@@@BA@@@AB@BB@@B@@FBBBBBBDB@B@B@@B@B@BB@@B@@B@B@DABAB@B@B@@B@B@@B@@@BB@@B@B@FCB@B@BB@@B@@BA@@@CA@@ABA@@@@@@BBB@@A@@BA@@BBBA@@@A@@BAB@B@B@B@B@@B@@@@@B@B@@@BA@@@ABA@@@@D@B@D@@@B@@A@@@A@AB@BBB@B@@@@BB@@BB@DDBB@@@B@B@BB@@@FB@@BB@@B@@A@@BA@@BA@@B@BB@@@@@B@@@@C@@@ABA@@@@B@@B@@@D@B@B@@@@@@B@@@B@B@DA@ABA@@@AD@B@B@@@B@D@D@BB@@B@@@@@@@BC@@@@@BB@@@B@@@@@BA@AA@B@@@@@@B@B@@@BBFD@@B@B@B@BADA@AB@@@H@@@@@@A@@F@@@@@@@@B@D@@A@@@A@C@@@@@A@B@@@B@@@@B@@@B@B@@@D@F@@@@@@B@D@@@B@@@@@@DB@@@BB@@B@@@BAB@@@@@@B@F@B@@A@@@A@@@@@AB@B@D@B@DA@A@@B@@@@BB@B@B@@BB@@@B@@AD@B@@@@@@AB@@C@A@@@@B@B@@@@CAA@@@@@AB@B@BA@@@AB@@@B@@BB@A@@BA@@@@@@@B@@BBB@@@@B@B@B@B@@F@@@@B@@@BB@BA@@@@B@@@@@@B@B@@@@A@A@@@@@AB@DBD@B@B@@B@B@@@@B@@C@@BCB@B@@C@@@A@@DA@@@@@@A@@@A@@AA@@A@@B@@@B@@ADAB@@@B@B@BB@@@B@D@BB@@@@BB@B@B@@A@@BC@EBA@ABABC@A@EBCB@@@@AB@B@D@B@@A@@@@A@AA@@@A@@@@@@B@@ABA@@@CBA@ABG@C@@@@@@C@A@@A@@@@@A@ABA@@AA@@B@@@@@@A@@@@BA@B@@B@@A@@@@@A@@@AAA@AAAACC@@A@@@@@@B@B@BB@@D@@@@A@@@@@@A@A@@@AA@@B@@BF@B@@A@@AAA@@A@@@@@@B@@@D@@@@@@A@@@@@@A@@A@@B@@@@A@@A@@@@C@@@@A@@@@DAB@@@@@@AA@E@A@@@@@BA@@@A@@A@@AA@A@@@A@@@ABABAFAB@@@BB@BBA@@@A@@@A@B@BB@@@@AB@@@B@D@@@B@@A@CB@@@B@@@@@@DB@@@@AB@B@@@D@@C@A@ABCA@@AB@@@@AD@BA@@@@@A@A@A@@@@D@@A@@@@@@@@@@A@A@A@@@@A@@BAD@@@@A@@@@C@@@@A@@@AB@@C@@@AB@@@@BB@B@B@@BBB@@D@D@B@BBB@@@@@B@B@D@D@@AB@BABA@EB@BA@DD@@ABBB@@B@@@@B@@FB@@@@@@B@@AFKBA@@BAF@F@B@@@@DB@@@@@BAB@BB@@@@BA@A@@@@@C@@BA@@@B@B@@B@BBDB@@@@BB@BAB@BA@A@EB@@GD@@@@@B@B@BD@@BBB@B@B@D@@CD@@BBBDBD@BBB@@H@BBB@@@BABCBA@@D@JBB@@BFFBF@@@B@B@@DBB@BB@@BB@BB@@@B@BA@@B@@@HBB@@@@BB@@BB@D@N@@@@B@B@BB@@@@@B@@@@A@@B@B@@@@A@C@AB@@@D@@@B@DBDBDB@@BBBBD@B@B@@@@ABCBAB@@@B@B@B@B@BA@A@A@@@@B@B@@@@@B@@@DADCD@B@@@@D@@@B@@@@B@B@BABA@@B@@@@BB@@B@B@B@B@@AB@@@B@@BBBBAB@@@@BB@@D@@@@@@B@@@@A@BB@@@@@@B@@AB@@B@@@BAD@@@BB@@@B@@@@@BAACB@@@@@BBBB@@@@@@@ABA@@@@B@DB@@D@@@@@BA@A@@B@@BBB@@B@@@@@@@BC@@B@BA@@BCBABA@@B@H@@@BA@@B@@C@A@@@E@EBABE@A@ABAB@BA@@D@@@B@@A@@@@D@B@BAB@D@BBB@@@@B@@@@B@B@@@B@@@@@@A@@BA@@B@HD@@B@@A@@@A@A@@@@C@@A@@@A@C@A@E@ABA@@@AA@@@@@@@@AD@@B@@BB@@@@F@H@B@D@@B@@@B@@B@BBBBB@@B@B@BB@B@@@@B@D@@@@B@B@BA@@@AB@@@HBF@DBBA@@@@@@@A@@BA@@B@@@@A@@B@@@@@BB@B@@@@B@@@@AB@@A@@B@@@@@@@@BB@@@@@B@BAB@B@B@@BAB@@@BB@B@B@@@BB@@B@@A@@@@BAB@@@@@@A@A@@B@D@@@@A@A@@B@@@@BBB@B@@B@@@F@B@B@@AB@@@BAR@DAH@@@FABVL@BBB@BANA@E@M@ABCCG@G@@B@B@B@@@JAAGEE@EL@JB@@FEDGFCA@G@BC@@@@@@@@AAA@A@AA@A@@BABA@@@BBB@@B@@@B@@@@A@AA@@@BA@@@@@A@@D@B@@A@@A@A@@A@AA@@@A@@@A@@@@AA@CB@A@A@AB@D@B@@A@E@@AA@@A@C@@@AAA@@@@@@@@B@B@B@@A@A@A@A@AA@AAA@A@AA@@AAA@AAA@@@A@@@A@@BAB@@@@A@AAE@@@A@@BA@AAC@@@@B@@B@@B@B@@A@A@@@@@@B@ABB@@@B@@@@EBA@@B@@AD@@@DAB@FDDAJABB@D@@LELEDEBC@C@@B@@A@@@A@ADCBAB@DA@A@AAA@A@@BA@@@A@AAA@A@@@ABABAA@AAAA@A@A@CB@AA@@A@@AA@@AAC@A@@B@B@@@B@AC@AAE@@@C@@@C@@@A@@@@@A@@@AAA@CCC@ACC@AA@@@@D@@A@@@@C@AA@@A@@BA@A@@B@@@@A@A@@@AD@@A@@@A@@AABG@A@@F@@A@@@AB@@@@@B@B@@AB@B@FA@@@B@@BB@@@@B@@C@@B@D@@@BAB@F@BA@@@A@C@AA@@@EB@BB@@BCB@GB@@@DA@C@@EB@AFA@@E@@@@AAAAC@A@AAC@A@EC@@EA@@DC@@AC@@EA@BFA@@EA@BBA@@C@@@AD@AA@A@@C@A@BA@@A@@AC@ACF@@C@@E@@@AC@@@@A@AKB@ACD@@AAAA@CIC@AG@@DAAG@@@AB@@B@@BD@@@@@C@@@EB@@AA@@AB@@CA@@B@@ACD@@A@@C@@@A@BGACE@@@E@@@@EJA@DB@@CH@@AB@@AB@@C@@@ED@@AD@@C@CA@@AACCB@AA@@ACBAC@@AEB@@@A@@@BA@@A@@@B@@C@@@EFAFAAGJAACLA@@ACIBAK@@ACB@@EB@B@@A@AAE@@@@AAC@@AA@@@@@@@A@@@C@@DC@K@A@A@@AC@A@A@A@@@EB@@AC@AA@@@@@A@C@@AM@@BA@@@A@@ABAA@AD@@@C@@@@@A@ECBC@@BB@@D@@@B@@@BA@@@A@@@AA@@A@A@@CC@@BA@@@C@@@E@C@@BA@@BA@@@AB@AA@@@AB@A@@@BA@@@CB@AABBBA@AA@@@A@@C@@B@@@@C@@BA@A@@@@B@B@BA@@BC@@BBDG@@B@@C@@AE@@AAB@B@@@AE@@AI@A@@A@AA@CA@DAA@A@@A@@CBA@AB@@A@A@AAE@@C@@@EAA@@CC@@AA@@AE@@AG@@@BEA@M@C@@CC@A@@DA@@@C@@AC@A@@BA@A@@@G@@BA@@BKA@DC@@B@DGA@AC@@@EBAAB@@AG@A@F@@A@A@@@A@CD@@AE@EA@AC@@@A@@@@CB@@@@CDA@@@AE@@DC@@@C@@@C@@AE@@EC@EA"],"encodeOffsets":[[116442,35124]]}}],"UTF8Encoding":true});}));