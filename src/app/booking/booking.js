import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab} from 'react-bootstrap';
import GetService from './getservice';
import ClearGetService from './clearGetservice';
import AddressBook from './addressBook';


class Booking extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={key:'home',active:false,act:0,index:'',shipfroms:[],shiptos:[],shipmentvias:[],shipmentdetails:[],active:false};

        this.country={active:false,countryDatas:[
            { code: 'af', name: 'Afghanistan' },
            { code: 'ax', name: 'Åland Islands' },
                { code: 'al', name: 'Albania' },
             { code: 'dz', name: 'Algeria' },
                { code: 'as', name: 'American Samoa' },
                { code: 'ad', name: 'AndorrA' },
                 { code: 'ao', name: 'Angola' },
                 { code: 'ai', name: 'Anguilla' },
                 { code: 'aq', name: 'Antarctica' },
                { code: 'ag', name: 'Antigua and Barbuda' },
              { code: 'ar', name: 'Argentina' },
                 { code: 'am', name: 'Armenia' },
                { code: 'aw', name: 'Aruba' },
               { code: 'au', name: 'Australia' },
                { code: 'at', name: 'Austria' },
                { code: 'az', name: 'Azerbaijan' },
                { code: 'bs', name: 'Bahamas' },
                { code: 'bh', name: 'Bahrain' },
                 { code: 'bd', name: 'Bangladesh' },
               { code: 'bb', name: 'Barbados' },
                { code: 'by', name: 'Belarus' },
                { code: 'be', name: 'Belgium' },
                 { code: 'bz', name: 'Belize' },
                 { code: 'bj', name: 'Benin' },
                { code: 'bm', name: 'Bermuda' },
                 { code: 'bt', name: 'Bhutan' },
                 { code: 'bo', name: 'Bolivia' },
                 { code: 'ba', name: 'Bosnia and Herzegovina' },
                { code: 'bw', name: 'Botswana' },
                { code: 'bv', name: 'Bouvet Island' },
                 { code: 'br', name: 'Brazil' },
                { code: 'io', name: 'British Indian Ocean Territory' },
                { code: 'bn', name: 'Brunei Darussalam' },
                 { code: 'bg', name: 'Bulgaria' },
                { code: 'bf', name: 'Burkina Faso' },
                 { code: 'bi', name: 'Burundi' },
                { code: 'kh', name: 'Cambodia' },
                { code: 'cm', name: 'Cameroon' },
                 { code: 'ca', name: 'Canada' },
                 { code: 'cv', name: 'Cape Verde' },
                 { code: 'ky', name: 'Cayman Islands' },
                 { code: 'cf', name: 'Central African Republic' },
                 { code: 'td', name: 'Chad' },
                 { code: 'cl', name: 'Chile' },
                 { code: 'cn', name: 'China' },
                { code: 'cx', name: 'Christmas Island' },
                 { code: 'cc', name: 'Cocos (Keeling) Islands' },
                 { code: 'co', name: 'Colombia' },
               { code: 'km', name: 'Comoros' },
                 { code: 'cg', name: 'Congo' },
                 { code: 'cd', name: 'Congo, Democratic Republic' },
                 { code: 'ck', name: 'Cook Islands' },
                 { code: 'cr', name: 'Costa Rica' },
                { code: 'ci', name: 'Cote D"Ivoire' },
                 { code: 'hr', name: 'Croatia' },
                 { code: 'cu', name: 'Cuba' },
                 { code: 'cy', name: 'Cyprus' },
                 { code: 'cz', name: 'Czech Republic' },
                 { code: 'dk', name: 'Denmark' },
                 { code: 'dj', name: 'Djibouti' },
                 { code: 'dm', name: 'Dominica' },
                 { code: 'do', name: 'Dominican Republic' },
                 { code: 'ec', name: 'Ecuador' },
                 { code: 'eg', name: 'Egypt' },
                 { code: 'sv', name: 'El Salvador' },
                 { code: 'gq', name: 'Equatorial Guinea' },
                 { code: 'er', name: 'Eritrea' },
                 { code: 'ee', name: 'Estonia' },
                 { code: 'et', name: 'Ethiopia' },
                 { code: 'fk', name: 'Falkland Islands (Malvinas)' },
                 { code: 'fo', name: 'Faroe Islands' },
                 { code: 'fj', name: 'Fiji' },
                 { code: 'fi', name: 'Finland' },
                 { code: 'fr', name: 'France' },
                 { code: 'gf', name: 'French Guiana' },
                 { code: 'pf', name: 'French Polynesia' },
                 { code: 'tf', name: 'French Southern Territories' },
                 { code: 'ga', name: 'Gabon' },
                 { code: 'gm', name: 'Gambia' },
                 { code: 'ge', name: 'Georgia' },
                 { code: 'de', name: 'Germany' },
                 { code: 'gh', name: 'Ghana' },
                 { code: 'gi', name: 'Gibraltar' },
                 { code: 'gr', name: 'Greece' },
                 { code: 'gl', name: 'Greenland' },
                 { code: 'gd', name: 'Grenada' },
                 { code: 'gp', name: 'Guadeloupe' },
                 { code: 'gu', name: 'Guam' },
                 { code: 'gt', name: 'Guatemala' },
                 { code: 'gg', name: 'Guernsey' },
                 { code: 'gn', name: 'Guinea' },
                 { code: 'gw', name: 'Guinea-Bissau' },
                 { code: 'gy', name: 'Guyana' },
                 { code: 'ht', name: 'Haiti' },
                 { code: 'hm', name: 'Heard Island and Mcdonald Islands' },
                 { code: 'va', name: 'Holy See (Vatican City State)' },
                 { code: 'hn', name: 'Honduras' },
                 { code: 'hk', name: 'Hong Kong' },
                 { code: 'hu', name: 'Hungary' },
                 { code: 'is', name: 'Iceland' },
                 { code: 'in', name: 'India' },
                 { code: 'id', name: 'Indonesia' },
                 { code: 'ir', name: 'Iran' },
                 { code: 'iq', name: 'Iraq' },
                 { code: 'ie', name: 'Ireland' },
                 { code: 'im', name: 'Isle of Man' },
                 { code: 'il', name: 'Israel' },
                 { code: 'it', name: 'Italy' },
                 { code: 'jm', name: 'Jamaica' },
                 { code: 'jp', name: 'Japan' },
                 { code: 'je', name: 'Jersey' },
                 { code: 'jo', name: 'Jordan' },
                 { code: 'kz', name: 'Kazakhstan' },
                 { code: 'ke', name: 'Kenya' },
                 { code: 'ki', name: 'Kiribati' },
                 { code: 'kp', name: 'Korea (North)' },
                 { code: 'kr', name: 'Korea (South)' },
                 { code: 'xk', name: 'Kosovo' },
                 { code: 'kw', name: 'Kuwait' },
                 { code: 'kg', name: 'Kyrgyzstan' },
                 { code: 'la', name: 'Laos' },
                 { code: 'lv', name: 'Latvia' },
                 { code: 'lb', name: 'Lebanon' },
                 { code: 'ls', name: 'Lesotho' },
                 { code: 'lr', name: 'Liberia' },
                 { code: 'ly', name: 'Libyan Arab Jamahiriya' },
                 { code: 'li', name: 'Liechtenstein' },
                 { code: 'lt', name: 'Lithuania' },
                 { code: 'lu', name: 'Luxembourg' },
                 { code: 'mo', name: 'Macao' },
                 { code: 'mk', name: 'Macedonia' },
                 { code: 'mg', name: 'Madagascar' },
                 { code: 'mw', name: 'Malawi' },
                 { code: 'my', name: 'Malaysia' },
                 { code: 'mv', name: 'Maldives' },
                 { code: 'ml', name: 'Mali' },
                 { code: 'mt', name: 'Malta' },
                 { code: 'mh', name: 'Marshall Islands' },
                 { code: 'mq', name: 'Martinique' },
                 { code: 'mr', name: 'Mauritania' },
                 { code: 'mu', name: 'Mauritius' },
                 { code: 'yt', name: 'Mayotte' },
                 { code: 'mx', name: 'Mexico' },
                 { code: 'fm', name: 'Micronesia' },
                 { code: 'md', name: 'Moldova' },
                 { code: 'mc', name: 'Monaco' },
                 { code: 'mn', name: 'Mongolia' },
                 { code: 'ms', name: 'Montserrat' },
                 { code: 'ma', name: 'Morocco' },
                 { code: 'ci', name: 'Cote D"Ivoire' },
                 { code: 'hr', name: 'Croatia' },
                 { code: 'cu', name: 'Cuba' },
                 { code: 'cy', name: 'Cyprus' },
                 { code: 'cz', name: 'Czech Republic' },
                 { code: 'dk', name: 'Denmark' },
                 { code: 'dj', name: 'Djibouti' },
                 { code: 'dm', name: 'Dominica' },
                 { code: 'do', name: 'Dominican Republic' },
                 { code: 'ec', name: 'Ecuador' },
                 { code: 'eg', name: 'Egypt' },
                 { code: 'sv', name: 'El Salvador' },
                 { code: 'gq', name: 'Equatorial Guinea' },
                 { code: 'er', name: 'Eritrea' },
                 { code: 'ee', name: 'Estonia' },
                 { code: 'et', name: 'Ethiopia' },
                 { code: 'fk', name: 'Falkland Islands (Malvinas)' },
                 { code: 'fo', name: 'Faroe Islands' },
                 { code: 'fj', name: 'Fiji' },
                 { code: 'fi', name: 'Finland' },
                 { code: 'fr', name: 'France' },
                 { code: 'gf', name: 'French Guiana' },
                 { code: 'pf', name: 'French Polynesia' },
                 { code: 'tf', name: 'French Southern Territories' },
                 { code: 'ga', name: 'Gabon' },
                 { code: 'gm', name: 'Gambia' },
                 { code: 'ge', name: 'Georgia' },
                 { code: 'de', name: 'Germany' },
                 { code: 'gh', name: 'Ghana' },
                 { code: 'gi', name: 'Gibraltar' },
                 { code: 'gr', name: 'Greece' },
                 { code: 'gl', name: 'Greenland' },
                 { code: 'gd', name: 'Grenada' },
                 { code: 'gp', name: 'Guadeloupe' },
                 { code: 'gu', name: 'Guam' },
                 { code: 'gt', name: 'Guatemala' },
                 { code: 'gg', name: 'Guernsey' },
                 { code: 'gn', name: 'Guinea' },
                 { code: 'gw', name: 'Guinea-Bissau' },
                 { code: 'gy', name: 'Guyana' },
                 { code: 'ht', name: 'Haiti' },
                 { code: 'hm', name: 'Heard Island and Mcdonald Islands' },
                 { code: 'va', name: 'Holy See (Vatican City State)' },
                 { code: 'hn', name: 'Honduras' },
                 { code: 'hk', name: 'Hong Kong' },
                 { code: 'hu', name: 'Hungary' },
                 { code: 'is', name: 'Iceland' },
                 { code: 'in', name: 'India' },
                 { code: 'id', name: 'Indonesia' },
                 { code: 'ir', name: 'Iran' },
                 { code: 'iq', name: 'Iraq' },
                 { code: 'ie', name: 'Ireland' },
                 { code: 'im', name: 'Isle of Man' },
                 { code: 'il', name: 'Israel' },
                 { code: 'it', name: 'Italy' },
                 { code: 'jm', name: 'Jamaica' },
                 { code: 'jp', name: 'Japan' },
                 { code: 'je', name: 'Jersey' },
                 { code: 'jo', name: 'Jordan' },
                 { code: 'kz', name: 'Kazakhstan' },
                 { code: 'ke', name: 'Kenya' },
                 { code: 'ki', name: 'Kiribati' },
                 { code: 'kp', name: 'Korea (North)' },
                 { code: 'kr', name: 'Korea (South)' },
                 { code: 'xk', name: 'Kosovo' },
                 { code: 'kw', name: 'Kuwait' },
                 { code: 'kg', name: 'Kyrgyzstan' },
                 { code: 'la', name: 'Laos' },
                 { code: 'lv', name: 'Latvia' },
                 { code: 'lb', name: 'Lebanon' },
                 { code: 'ls', name: 'Lesotho' },
                 { code: 'lr', name: 'Liberia' },
                 { code: 'ly', name: 'Libyan Arab Jamahiriya' },
                 { code: 'li', name: 'Liechtenstein' },
                 { code: 'lt', name: 'Lithuania' },
                 { code: 'lu', name: 'Luxembourg' },
                 { code: 'mo', name: 'Macao' },
                 { code: 'mk', name: 'Macedonia' },
                 { code: 'mg', name: 'Madagascar' },
                 { code: 'mw', name: 'Malawi' },
                 { code: 'my', name: 'Malaysia' },
                 { code: 'mv', name: 'Maldives' },
                 { code: 'ml', name: 'Mali' },
                 { code: 'mt', name: 'Malta' },
                 { code: 'mh', name: 'Marshall Islands' },
                 { code: 'mq', name: 'Martinique' },
                 { code: 'mr', name: 'Mauritania' },
                 { code: 'mu', name: 'Mauritius' },
                 { code: 'yt', name: 'Mayotte' },
                 { code: 'mx', name: 'Mexico' },
                 { code: 'fm', name: 'Micronesia' },
                 { code: 'md', name: 'Moldova' },
                 { code: 'mc', name: 'Monaco' },
                 { code: 'mn', name: 'Mongolia' },
                 { code: 'ms', name: 'Montserrat' },
                 { code: 'ma', name: 'Morocco' },
                { code: 'mz', name: 'Mozambique' },
                { code: 'mm', name: 'Myanmar' },
                { code: 'na', name: 'Namibia' },
                { code: 'nr', name: 'Nauru' },
                { code: 'np', name: 'Nepal' },
                { code: 'nl', name: 'Netherlands' },
                { code: 'an', name: 'Netherlands Antilles' },
                { code: 'nc', name: 'New Caledonia' },
                { code: 'nz', name: 'New Zealand' },
                { code: 'ni', name: 'Nicaragua' },
                { code: 'ne', name: 'Niger' },
                { code: 'ng', name: 'Nigeria' },
                { code: 'nu', name: 'Niue' },
                { code: 'nf', name: 'Norfolk Island' },
                { code: 'mp', name: 'Northern Mariana Islands' },
                { code: 'no', name: 'Norway' },
                { code: 'om', name: 'Oman' },
                { code: 'pk', name: 'Pakistan' },
                { code: 'pw', name: 'Palau' },
                { code: 'ps', name: 'Palestinian Territory, Occupied' },
                { code: 'pa', name: 'Panama' },
                { code: 'pg', name: 'Papua New Guinea' },
                { code: 'py', name: 'Paraguay' },
                { code: 'pe', name: 'Peru' },
                { code: 'ph', name: 'Philippines' },
                { code: 'pn', name: 'Pitcairn' },
                { code: 'pl', name: 'Poland' },
                { code: 'pt', name: 'Portugal' },
                { code: 'pr', name: 'Puerto Rico' },
                { code: 'qa', name: 'Qatar' },
                { code: 're', name: 'Reunion' },
                { code: 'ro', name: 'Romania' },
                { code: 'ru', name: 'Russian Federation' },
                { code: 'rw', name: 'Rwanda' },
                 { code: 'sh', name: 'Saint Helena' },
                 { code: 'kn', name: 'Saint Kitts and Nevis' },
                 { code: 'lc', name: 'Saint Lucia' },
                 { code: 'pm', name: 'Saint Pierre and Miquelon' },
                 { code: 'vc', name: 'Saint Vincent and the Grenadines' },
                 { code: 'ws', name: 'Samoa' },
                 { code: 'sm', name: 'San Marino' },
                 { code: 'st', name: 'Sao Tome and Principe' },
                 { code: 'sa', name: 'Saudi Arabia' },
                 { code: 'sn', name: 'Senegal' },
                 { code: 'rs', name: 'Serbia' },
                 { code: 'me', name: 'Montenegro' },
                 { code: 'sc', name: 'Seychelles' },
                 { code: 'sl', name: 'Sierra Leone' },
                 { code: 'sg', name: 'Singapore' },
                 { code: 'sk', name: 'Slovakia' },
                 { code: 'si', name: 'Slovenia' },
                 { code: 'sb', name: 'Solomon Islands' },
                 { code: 'so', name: 'Somalia' },
                 { code: 'za', name: 'South Africa' },
                 { code: 'gs', name: 'South Georgia and the South Sandwich Islands' },
                 { code: 'es', name: 'Spain' },
                 { code: 'lk', name: 'Sri Lanka' },
                 { code: 'sd', name: 'Sudan' },
                 { code: 'sr', name: 'Suriname' },
                 { code: 'sj', name: 'Svalbard and Jan Mayen' },
                 { code: 'sz', name: 'Swaziland' },
                 { code: 'se', name: 'Sweden' },
                 { code: 'ch', name: 'Switzerland' },
                 { code: 'sy', name: 'Syrian Arab Republic' },
                 { code: 'tw', name: 'Taiwan, Province of China' },
                 { code: 'tj', name: 'Tajikistan' },
                 { code: 'tz', name: 'Tanzania' },
                 { code: 'th', name: 'Thailand' },
                 { code: 'tl', name: 'Timor-Leste' },
                 { code: 'tg', name: 'Togo' },
                 { code: 'tk', name: 'Tokelau' },
                 { code: 'to', name: 'Tonga' },
                 { code: 'tt', name: 'Trinidad and Tobago' },
                 { code: 'tn', name: 'Tunisia' },
                 { code: 'tr', name: 'Turkey' },
                 { code: 'tm', name: 'Turkmenistan' },
                 { code: 'tc', name: 'Turks and Caicos Islands' },
                 { code: 'tv', name: 'Tuvalu' },
                 { code: 'ug', name: 'Uganda' },
                 { code: 'ua', name: 'Ukraine' },
                 { code: 'ae', name: 'United Arab Emirates' },
                 { code: 'gb', name: 'United Kingdom' },
                 { code: 'us', name: 'United States' },
                 { code: 'um', name: 'United States Minor Outlying Islands' },
                 { code: 'uy', name: 'Uruguay' },
                 { code: 'uz', name: 'Uzbekistan' },
                 { code: 'vu', name: 'Vanuatu' },
                 { code: 've', name: 'Venezuela' },
                 { code: 'vn', name: 'Viet Nam' },
                 { code: 'vg', name: 'Virgin Islands, British' },
                 { code: 'vi', name: 'Virgin Islands, U.S.' },
                 { code: 'wf', name: 'Wallis and Futuna' },
                 { code: 'eh', name: 'Western Sahara' },
                 { code: 'ye', name: 'Yemen' },
                 { code: 'zm', name: 'Zambia' },
                 { code: 'zw', name: 'Zimbabwe' }
        ]}

        this.currency={active:false,currencyDatas:[
              {  code:"AED", name: "United Arab Emirates Dirham"},
              {  code:"AFN", name: "Afghan Afghani"},
              {  code:"ALL", name: "Albanian Lek"},
              {  code:"AMD", name: "Armenian Dram"},
              {  code:"ANG", name: "Netherlands Antillean Guilder"},
              {  code:"AOA", name: "Angolan Kwanza"},
              {  code:"ARS", name: "Argentine Peso"},
              {  code:"AUD", name: "Australian Dollar"},
              {  code:"AWG", name: "Aruban Florin"},
              {  code:"AZN", name: "Azerbaijani Manat"},
              {  code:"BAM", name: "Bosnia-Herzegovina Convertible Mark"},
              {  code:"BBD", name: "Barbadian Dollar"},
              {  code:"BDT", name: "Bangladeshi Taka"},
              {  code:"BGN", name: "Bulgarian Lev"},
              {  code:"BHD", name: "Bahraini Dinar"},
              {  code:"BIF", name: "Burundian Franc"},
              {  code:"BMD", name: "Bermudan Dollar"},
              {  code:"BND", name: "Brunei Dollar"},
              {  code:"BOB", name: "Bolivian Boliviano"},
              {  code:"BRL", name: "Brazilian Real"},
              {  code:"BSD", name: "Bahamian Dollar"},
              {  code:"BTC", name: "Bitcoin"},
              {  code:"BTN", name: "Bhutanese Ngultrum"},
              {  code:"BWP", name: "Botswanan Pula"},
              {  code:"BYN", name: "Belarusian Ruble"},
              {  code:"BZD", name: "Belize Dollar"},
              {  code:"CAD", name: "Canadian Dollar"},
              {  code:"CDF", name: "Congolese Franc"},
              {  code:"CHF", name: "Swiss Franc"},
              {  code:"CLF", name: "Chilean Unit of Account (UF)"},
              {  code:"CLP", name: "Chilean Peso"},
              {  code:"CNH", name: "Chinese Yuan (Offshore)"},
              {  code:"CNY", name: "Chinese Yuan"},
              {  code:"COP", name: "Colombian Peso"},
              {  code:"CRC", name: "Costa Rican Colón"},
              {  code:"CUC", name: "Cuban Convertible Peso"},
              {  code:"CUP", name: "Cuban Peso"},
              {  code:"CVE", name: "Cape Verdean Escudo"},
              {  code:"CZK", name: "Czech Republic Koruna"},
              {  code:"DJF", name: "Djiboutian Franc"},
              {  code:"DKK", name: "Danish Krone"},
              {  code:"DOP", name: "Dominican Peso"},
              {  code:"DZD", name: "Algerian Dinar"},
              {  code:"EGP", name: "Egyptian Pound"},
              {  code:"ERN", name: "Eritrean Nakfa"},
              {  code:"ETB", name: "Ethiopian Birr"},
              {  code:"EUR", name: "Euro"},
              {  code:"FJD", name: "Fijian Dollar"},
              {  code:"FKP", name: "Falkland Islands Pound"},
              {  code:"GBP", name: "British Pound Sterling"},
              {  code:"GEL", name:"Georgian Lari"},
              {  code:"GGP", name: "Guernsey Pound"},
              {  code:"GHS", name: "Ghanaian Cedi"},
              {  code:"GIP", name: "Gibraltar Pound"},
              {  code:"GMD", name: "Gambian Dalasi"},
              {  code:"GNF", name: "Guinean Franc"},
              {  code:"GTQ", name: "Guatemalan Quetzal"},
 { code:"GYD", name: "Guyanaese Dollar"},
 { code:"HKD", name: "Hong Kong Dollar"},
 { code:"HNL", name: "Honduran Lempira"},
 { code:"HRK", name: "Croatian Kuna"},
 { code:"HTG", name: "Haitian Gourde"},
 { code:"HUF", name:"Hungarian Forint"},
 { code:"IDR", name: "Indonesian Rupiah"},
 { code:"ILS", name: "Israeli New Sheqel"},
 { code:"IMP", name: "Manx pound"},
 { code:"INR", name: "Indian Rupee"},
 { code:"IQD", name:"Iraqi Dinar"},
 { code:"IRR", name: "Iranian Rial"},
 { code:"ISK", name: "Icelandic Króna"},
 { code:"JEP", name: "Jersey Pound"},
 { code:"JMD", name: "Jamaican Dollar"},
 { code:"JOD", name: "Jordanian Dinar"},
 { code:"JPY", name: "Japanese Yen"},
 { code:"KES", name: "Kenyan Shilling"},
 { code:"KGS", name: "Kyrgystani Som"},
 { code:"KHR", name: "Cambodian Riel"},
 { code:"KMF", name: "Comorian Franc"},
 { code:"KPW", name: "North Korean Won"},
 { code:"KRW", name: "South Korean Won"},
 { code:"KWD", name: "Kuwaiti Dinar"},
 { code:"KYD", name: "Cayman Islands Dollar"},
 { code:"KZT", name: "Kazakhstani Tenge"},
 { code:"LAK", name: "Laotian Kip"},
 { code:"LBP", name: "Lebanese Pound"},
 { code:"LKR", name: "Sri Lankan Rupee"},
 { code:"LRD", name: "Liberian Dollar"},
 { code:"LSL", name: "Lesotho Loti"},
 { code:"LYD", name: "Libyan Dinar"},
 { code:"MAD", name: "Moroccan Dirham"},
 { code:"MDL", name: "Moldovan Leu"},
 { code:"MGA", name: "Malagasy Ariary"},
 { code:"MKD", name: "Macedonian Denar"},
 { code:"MMK", name: "Myanma Kyat"},
 { code:"MNT", name: "Mongolian Tugrik"},
 { code:"MOP", name: "Macanese Pataca"},
 { code:"MRO", name: "Mauritanian Ouguiya (pre-2018)"},
 { code:"MRU", name:"Mauritanian Ouguiya"},
 { code:"MUR", name:"Mauritian Rupee"},
 { code:"MVR", name: "Maldivian Rufiyaa"},
 { code:"MWK", name: "Malawian Kwacha"},
 { code:"MXN", name: "Mexican Peso"},
 { code:"MYR", name: "Malaysian Ringgit"},
 { code:"MZN", name: "Mozambican Metical"},
 { code:"NAD", name: "Namibian Dollar"},
 { code:"NGN", name: "Nigerian Naira"},
 { code:"NIO", name: "Nicaraguan Córdoba"},
 { code:"NOK", name: "Norwegian Krone"},
 { code:"NPR", name: "Nepalese Rupee"},
 { code:"NZD", name: "New Zealand Dollar"},
 { code:"OMR", name: "Omani Rial"},
 { code:"PAB", name: "Panamanian Balboa"},
{ code: "PEN", name: "Peruvian Nuevo Sol"},
{ code: "PGK" , name:"Papua New Guinean Kina"},
{ code: "PHP", name: "Philippine Peso"},
{ code: "PKR" , name:"Pakistani Rupee"},
{ code: "PLN" , name:"Polish Zloty"},
{ code: "PYG", name: "Paraguayan Guarani"},
{  code:"QAR" , name:"Qatari Rial"},
{code:  "RON" , name:"Romanian Leu"},
{code:  "RSD", name: "Serbian Dinar"},
{  code:"RUB", name: "Russian Ruble"},
{  code:"RWF" , name:"Rwandan Franc"},
{  code:"SAR" , name:"Saudi Riyal"},
{  code:"SBD" , name:"Solomon Islands Dollar"},
{ code: "SCR" , name:"Seychellois Rupee"},
{ code: "SDG" , name:"Sudanese Pound"},
{  code:"SEK", name: "Swedish Krona"},
{ code: "SGD" , name:"Singapore Dollar"},
{  code:"SHP" , name:"Saint Helena Pound"},
{ code: "SLL" , name:"Sierra Leonean Leone"},
{ code: "SOS" , name:"Somali Shilling"},
{ code: "SRD" , name:"Surinamese Dollar"},
{ code: "SSP" , name:"South Sudanese Pound"},
{  code:"STD", name: "São Tomé and Príncipe Dobra (pre-2018)"},
{  code:"STN", name: "São Tomé and Príncipe Dobra"},
{  code:"SVC" , name:"Salvadoran Colón"},
{ code: "SYP" , name:"Syrian Pound"},
{  code:"SZL", name: "Swazi Lilangeni"},
{  code:"THB" , name:"Thai Baht"},
{  code:"TJS" , name:"Tajikistani Somoni"},
{ code: "TMT" , name:"Turkmenistani Manat"},
{ code: "TND", name: "Tunisian Dinar"},
{ code: "TOP" , name:"Tongan Pa'anga"},
{ code: "TRY", name: "Turkish Lira"},
{  code:"TTD", name:"Trinidad and Tobago Dollar"},
 { code:"TWD" , name:"New Taiwan Dollar"},
 { code:"TZS" , name:"Tanzanian Shilling"},
 { code:"UAH", name: "Ukrainian Hryvnia"},
 { code:"UGX" , name:"Ugandan Shilling"},
 { code:"USD" , name:"United States Doll}ar"},
 { code:"UYU" , name:"Uruguayan Peso"},
 {code: "UZS" , name:"Uzbekistan Som"},
 {code: "VEF" , name:"Venezuelan Bolívar} Fuerte"},
 { code:"VND", name: "Vietnamese Dong"},
 { code:"VUV" , name:"Vanuatu Vatu"},
 { code:"WST" , name:"Samoan Tala"},
 { code:"XAF" , name:"CFA Franc BEAC"},
 { code:"XAG" , name:"Silver Ounce"},
 { code:"XAU" , name:"Gold Ounce"},
 { code:"XCD" , name:"East Caribbean Dollar"},
 { code:"XDR", name: "Special Drawing Rights"},
 { code:"XOF" , name:"CFA Franc BCEAO"},
 {code: "XPD" , name:"Palladium Ounce",},
 {code: "XPF" , name:"CFP Franc"},
 { code:"XPT", name: "Platinum Ounce",},
 { code:"YER" , name:"Yemeni Rial"},
 { code:"ZAR", name: "South African Rand"},
 {code: "ZMW", name: "Zambian Kwacha"},
 { code:"ZWL", name: "Zimbabwean Dollar"}
        ]}

        this.submitGetserviceForm=this.submitGetserviceForm.bind(this);
        this.resetGetserviceForm=this.resetGetserviceForm.bind(this);
    }

    submitGetserviceForm=(e)=>{
        e.preventDefault();
        alert('You submitted successfully getservice form.');
        let shipfroms=this.state.shipfroms;
        let shiptos=this.state.shiptos;
        let shipmentvias=this.state.shipmentvias;
        let shipmentdetails=this.state.shipmentdetails;

        let sfcountry=this.refs.sfcountry.value;
        let sfzipcode=this.refs.sfzipcode.value;
        let sfcompanyname=this.refs.sfcompanyname.value;
        let sfcompanyfirstname=this.refs.sfcompanyfirstname.value;
        let sfcompanylastname=this.refs.sfcompanylastname.value;
        let sfaddress1=this.refs.sfaddress1.value;
        let sfaddress2=this.refs.sfaddress2.value;
        let sfcity=this.refs.sfcity.value;
        let sfarea=this.refs.sfarea.value;
        let sftelephoneno=this.refs.sftelephoneno.value;
        let sfmail=this.refs.sfmail.value;

        let stcountry=this.refs.stcountry.value;
        let stzipcode=this.refs.stzipcode.value;
        let stcompanyname=this.refs.stcompanyname.value;
        let stcompanyfirstname=this.refs.stcompanyfirstname.value;
        let stcompanylastname=this.refs.stcompanylastname.value;
        let staddress1=this.refs.staddress1.value;
        let staddress2=this.refs.staddress2.value;
        let stcity=this.refs.stcity.value;
        let starea=this.refs.starea.value;
        let sttelephoneno=this.refs.sttelephoneno.value;
        let stmail=this.refs.stmail.value;

        let svshipmentid=this.refs.svshipmentid.value;
        let svshipmentby=this.refs.svshipmentby.value;
        let svplacefrom=this.refs.svplacefrom.value;
        let svplaceto=this.refs.svplaceto.value;
        let svextracharges=this.refs.svextracharges.value;

        let sdpaymentparty=this.refs.sdpaymentparty.value;
        let sdshipmentby=this.refs.sdshipmentby.value;
        let sdparceltype=this.refs.sdparceltype.value;
        let sdcurrency=this.refs.sdcurrency.value;
        let sdshipmentreference=this.refs.sdshipmentreference.value;


          //push ship from code
          let shipfrom={ sfcountry,sfzipcode,sfcompanyname,sfcompanyfirstname,sfcompanylastname,sfaddress1,sfaddress2,sfcity,sfarea,sftelephoneno,sfmail}
          shipfroms.push(shipfrom);
          //push ship to code
          let shipto={ stcountry,stzipcode,stcompanyname,stcompanyfirstname,stcompanylastname,staddress1,staddress2,stcity,starea,sttelephoneno,stmail}
          shiptos.push(shipto);
          //push shipment via code
          let shipmentvia={ svshipmentid,svshipmentby,svplacefrom,svplaceto,svextracharges}
          shipmentvias.push(shipmentvia);
          //push shipment detail code
          let shipmentdetail={ sdpaymentparty,sdshipmentby,sdparceltype,sdcurrency,sdshipmentreference}
          shipmentdetails.push(shipmentdetail);

        this.setState({
        shipfroms:shipfroms,
        shiptos:shiptos,
        shipmentvias:shipmentvias,
        shipmentdetails:shipmentdetails,
        act:0
        });
    
        this.refs.getserviceForm.reset();

        this.props.history.push("/confirmBooking");
        console.log(this.state.shipfroms);
        console.log(this.state.shiptos);
        console.log(this.state.shipmentvias);
        console.log(this.state.shipmentdetails);
    }

    resetGetserviceForm=()=>{
        alert('Reset getservice form successfully');
        this.refs.getserviceForm.reset();
    }


    render(){
        return(
            <section className="container">
            <div id="pageNotFound">
               Booking
               </div>
            <GetService />
            <ClearGetService />
            <AddressBook />

            <form ref="getserviceForm" name="getserviceForm">
               <section>
                   <header>
                       <div>
                        <div>
                            <div className="col-12 row">
                                <div className="col-6">
                                <Tabs id="controlled-tab-example" className="bookingHeader" activeKey={this.state.key} onSelect={key => this.setState({ key })}>
        <Tab eventKey="home" title="ShipFrom">
            <br/>
        <section>
        <div className="col-12">

<div className="form-group row">
    <label className="label-control col-4 lh-34 row">Ship From</label>
    <div className="col-8">
        <button type="button" data-toggle="modal" data-target="#addressBook" className="btn btn-default col-12 btn-outline-primary">Address Book</button>
    </div>
</div>

<div className="form-group row">
    <label className="label-control col-4 lh-34 row">Country</label>
    <div className="col-8">
       <select className="form-control" ref="sfcountry" required>
           <option value="">Select Country (Required)</option>
           {this.country.countryDatas.map((countrydata,i)=>
            <option key={i} value={countrydata.name}>{countrydata.name}</option>
            )}
       </select>
    </div>
</div>

<div className="form-group row">
    <label className="label-control col-4 lh-34 row">Post/ZipCode</label>
    <div className="col-8">
       <input type="text" ref="sfzipcode" placeholder="Post/ZipCode (Required)" className="form-control" required />
    </div>
</div>

<div className="form-group row">
    <label className="label-control col-4 lh-34 row">Company Name</label>
    <div className="col-8">
       <input type="text" ref="sfcompanyname" placeholder="Company Name (Required)" className="form-control" required />
    </div>
</div>

<div className="form-group row">
    <label className="label-control col-4 lh-34 row">Company First Name</label>
    <div className="col-8">
       <input type="text" ref="sfcompanyfirstname" placeholder="Company First Name (Required)" className="form-control" required />
    </div>
</div>

<div className="form-group row">
    <label className="label-control col-4 lh-34 row">Company Last Name</label>
    <div className="col-8">
       <input type="text" ref="sfcompanylastname" placeholder="Company Last Name (Required)" className="form-control" required />
    </div>
</div>

<div className="form-group row">
    <label className="label-control col-4 lh-34 row">Address 1</label>
    <div className="col-8">
       <textarea cols="3" ref="sfaddress1" rows="3" placeholder="Address 1 (Required)" className="form-control" required></textarea>
    </div>
</div>

<div className="form-group row">
    <label className="label-control col-4 lh-34 row">Address 2</label>
    <div className="col-8">
       <textarea cols="3" ref="sfaddress2" rows="3" placeholder="Address 2 (Required)" className="form-control" required></textarea>
    </div>
</div>

<div className="form-group row">
    <label className="label-control col-4 lh-34 row">City</label>
    <div className="col-8">
       <input type="text" ref="sfcity" placeholder="City (Required)" className="form-control" required />
    </div>
</div>

<div className="form-group row">
    <label className="label-control col-4 lh-34 row">Area</label>
    <div className="col-8">
       <input type="text" ref="sfarea" placeholder="Area (Required)" className="form-control" required />
    </div>
</div>

<div className="form-group row">
    <label className="label-control col-4 lh-34 row">Telephone No.</label>
    <div className="col-8">
        <div className="row">
            <div className="col-4">
            <input type="text" placeholder="(+91)" className="form-control" required />
            </div>
            <div className="col-8">
       <input type="text" ref="sftelephoneno" placeholder="Telephone No. (Required)" className="form-control" required />
       </div>
       </div>
    </div>
</div>

<div className="form-group row">
    <label className="label-control col-4 lh-34 row">Send Email Alert</label>
    <div className="col-8">
       <input type="email" ref="sfmail" placeholder="Send Email Alert (Required)" className="form-control" required />
    </div>
</div>


</div>
            </section>
        </Tab>
        <Tab eventKey="shipTo" title="ShipTo">
        <br/>
        <section>
        <div className="col-12">

<div className="form-group row">
    <label className="label-control col-4 lh-34 row">Ship From</label>
    <div className="col-8">
        <button type="button" data-toggle="modal" data-target="#addressBook" className="btn btn-default col-12 btn-outline-primary">Address Book</button>
    </div>
</div>

<div className="form-group row">
    <label className="label-control col-4 lh-34 row">Country</label>
    <div className="col-8">
       <select className="form-control" ref="stcountry" required>
           <option>Select Country (Required)</option>
           {this.country.countryDatas.map((countrydata,i)=>
            <option key={i} value={countrydata.name}>{countrydata.name}</option>
            )}
       </select>
    </div>
</div>

<div className="form-group row">
    <label className="label-control col-4 lh-34 row">Post/ZipCode</label>
    <div className="col-8">
       <input type="text" ref="stzipcode" placeholder="Post/ZipCode (Required)" className="form-control" required />
    </div>
</div>

<div className="form-group row">
    <label className="label-control col-4 lh-34 row">Company Name</label>
    <div className="col-8">
       <input type="text" ref="stcompanyname" placeholder="Company Name (Required)" className="form-control" required />
    </div>
</div>

<div className="form-group row">
    <label className="label-control col-4 lh-34 row">Company First Name</label>
    <div className="col-8">
       <input type="text" ref="stcompanyfirstname" placeholder="Company First Name (Required)" className="form-control" required />
    </div>
</div>

<div className="form-group row">
    <label className="label-control col-4 lh-34 row">Company Last Name</label>
    <div className="col-8">
       <input type="text" ref="stcompanylastname" placeholder="Company Last Name (Required)" className="form-control" required />
    </div>
</div>

<div className="form-group row">
    <label className="label-control col-4 lh-34 row">Address 1</label>
    <div className="col-8">
       <textarea cols="3" ref="staddress1" rows="3" placeholder="Address 1 (Required)" className="form-control" required></textarea>
    </div>
</div>

<div className="form-group row">
    <label className="label-control col-4 lh-34 row">Address 2</label>
    <div className="col-8">
       <textarea cols="3" ref="staddress2" rows="3" placeholder="Address 2 (Required)" className="form-control" required></textarea>
    </div>
</div>

<div className="form-group row">
    <label className="label-control col-4 lh-34 row">City</label>
    <div className="col-8">
       <input type="text" ref="stcity" placeholder="City (Required)" className="form-control" required />
    </div>
</div>

<div className="form-group row">
    <label className="label-control col-4 lh-34 row">Area</label>
    <div className="col-8">
       <input type="text" ref="starea" placeholder="Area (Required)" className="form-control" required />
    </div>
</div>

<div className="form-group row">
    <label className="label-control col-4 lh-34 row">Telephone No.</label>
    <div className="col-8">
        <div className="row">
            <div className="col-4">
            <input type="text" placeholder="(+91)" className="form-control" required />
            </div>
            <div className="col-8">
       <input type="text" ref="sttelephoneno" placeholder="Telephone No. (Required)" className="form-control" required />
       </div>
       </div>
    </div>
</div>

<div className="form-group row">
    <label className="label-control col-4 lh-34 row">Send Email Alert</label>
    <div className="col-8">
       <input type="email" ref="stmail" placeholder="Send Email Alert (Required)" className="form-control" required />
    </div>
</div>


</div>
            </section>
        </Tab>
      </Tabs>
                                </div>
                                <div className="col-6">
                                <Tabs id="controlled-tab-example" className="bookingHeader">
        <Tab eventKey="shipmentVia" title="ShipmentVia">
        <br/>
<section>
        <div className="col-12">

<div className="form-group row">
    <label className="label-control col-4 lh-34 row">Shipment Id</label>
    <div className="col-8">
       <input type="text" ref="svshipmentid" placeholder="Shipment Id (Required)" className="form-control" required />
    </div>
</div>

<div className="form-group row">
    <label className="label-control col-4 lh-34 row">Shipment By</label>
    <div className="col-8">
       <select className="form-control" ref="svshipmentby" required>
           <option>Select Shipment By (Required)</option>
           <option>Air</option>
           <option>Sea</option>
           <option>Courier</option>
       </select>
    </div>
</div>

<div className="form-group row">
    <label className="label-control col-4 lh-34 row">Place From</label>
    <div className="col-8">
       <select className="form-control" ref="svplacefrom" required>
           <option>Select Country (Required)</option>
           {this.country.countryDatas.map((countrydata,i)=>
            <option key={i} value={countrydata.name}>{countrydata.name}</option>
            )}
       </select>
    </div>
</div>

<div className="form-group row">
    <label className="label-control col-4 lh-34 row">Place To</label>
    <div className="col-8">
       <select className="form-control" ref="svplaceto" required>
           <option>Select Country (Required)</option>
           {this.country.countryDatas.map((countrydata,i)=>
            <option key={i} value={countrydata.name}>{countrydata.name}</option>
            )}
       </select>
    </div>
</div>

<div className="form-group row">
    <label className="label-control col-4 lh-34 row">Extra Charges</label>
    <div className="col-8">
       <input type="text" ref="svextracharges" placeholder="Extra Charges" className="form-control" required />
    </div>
</div>

</div>
</section>
        </Tab>
        <Tab eventKey="shipmentDetail" title="ShipmentDetail">
          <br/>
          <section>
        <div className="col-12">

<div className="form-group row">
    <label className="label-control col-4 lh-34 row">Payment Party</label>
    <div className="col-8">
       <select placeholder="Payment Party (Required)" ref="sdpaymentparty" className="form-control" required>
            <option value="">Select Customer</option>
            <option value="0">WhytelCliff.com 4012451</option>
           </select>
    </div>
</div>

<div className="form-group row">
    <label className="label-control col-4 lh-34 row">Shipment By</label>
    <div className="col-8">
       <select className="form-control" ref="sdshipmentby" required>
           <option>Select Shipment By (Required)</option>
           <option>Air</option>
           <option>Sea</option>
           <option>Courier</option>
       </select>
    </div>
</div>

<div className="form-group row">
    <label className="label-control col-4 lh-34 row">Parcel Type</label>
    <div className="col-8">
       <select className="form-control" ref="sdparceltype" required>
           <option value="">Select Parcel Type (Required)</option>
           <option value="0">Parcel (Non Doc)</option>
           <option value="1">Letter (Document)</option>
       </select>
    </div>
</div>

<div className="form-group row">
    <label className="label-control col-4 lh-34 row">Declared Value Currency</label>
    <div className="col-8">
       <select className="form-control" ref="sdcurrency" required>
           <option value="">Select Currency (Required)</option>
           {this.currency.currencyDatas.map((currencydata,i)=>
            <option key={i} value={currencydata.code}>{currencydata.code}</option>
            )}
       </select>
    </div>
</div>

<div className="form-group row">
    <label className="label-control col-4 lh-34 row">Shipment Reference</label>
    <div className="col-8">
       <input type="text" ref="sdshipmentreference" placeholder="Shipment Reference (Required)" className="form-control" required />
    </div>
</div>

</div>
</section>
        </Tab>
      </Tabs>
                                </div>
                            </div>
                        </div>
                       </div>
                   </header>
               </section>
               <br/>
                <section>
                    <div className="col-12 row">
                        
                    <div className="col-6">
                    <div className="float-left">
                    <button type="button" className="btn btn-lg btn-danger" onClick={this.resetGetserviceForm}>Reset Form</button> &nbsp;
                    <button type="button" className="btn btn-lg btn-dark" data-toggle="modal" data-target="#clearGetService">Clear Form</button>
                    </div>
                    </div>
                    <div className="col-6">
                    <div className="float-right right">
                    <button type="button" className="btn btn-lg btn-info"  data-toggle="modal" data-target="#getService">Get Service</button> &nbsp;
                   <button type="button" className="btn btn-lg btn-success" onClick={(e)=>this.submitGetserviceForm(e)}>Place Booking</button>
                   </div>
                   </div>
                      
                    </div>
                </section>
            </form>
            </section>
        )
    }

}

export default Booking;