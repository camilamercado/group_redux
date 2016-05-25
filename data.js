const items = {

      scarf: [
        {'fabric': 'silk satin twill',
         'img'   : 'http://g01.a.alicdn.com/kf/HTB1KmJAIXXXXXaVXVXXq6xXFXXXL/50-OFF-Sale-for-defect-Pure-silk-blends-cotton-fabric-silk-satin-twill-shimmering-sew-for.jpg',
         'weight': ['12mm','14mm'],},

        {'fabric': 'silk charmeuse',
         'img'   : 'http://sewaholic.net/wp-content/uploads/2014/05/fabric-1.jpg',
         'weight': ['12.5mm','19mm']}],
      size: [
        { 'size':'12 x 12','cost': 12},
        { 'size':'22 x 22','cost': 23},
        { 'size':'36 x 36','cost': 35},
        { 'size':'42 x 42','cost': 50},
        { 'size':'52 x 52','cost': 70}],
      finish: [
        { 'hem':'surged edge',
          'img': 'http://merrow-media.s3.amazonaws.com/applications/chiffonscarf_stitch_highres1.jpg',
          'cost': 5},

        { 'hem':'machine rolled',
          'img': 'http://www.sew4home.com/sites/sewmk.mervideo.com/files/1163-Photo-107_0.jpg',
          'cost': 8},

        { 'hem':'hand rolled',
          'img': 'http://www.yangtzestore.com/images/detailed/4/IMG_6821.jpg',
          'cost': 50}],
      fabric: [{ 'type':'cotton'}, {'type': 'silk'}, {'type':'custom'}],
      cost: [
        {'increment': 3,   'price': 70},
        {'increment': 50,  'price': 65},
        {'increment': 100, 'price': 60},
        {'increment': 150, 'price': 55},
        {'increment': 200, 'price': 50}],
      silk: [
        {'fabric': 'silk satin twill',
         'img'   : 'http://g01.a.alicdn.com/kf/HTB1KmJAIXXXXXaVXVXXq6xXFXXXL/50-OFF-Sale-for-defect-Pure-silk-blends-cotton-fabric-silk-satin-twill-shimmering-sew-for.jpg',
         'weight': ['12mm','14mm'],
         'width' : ['36"' ,'44"'],},

        {'fabric': 'silk charmeuse',
         'img'   : 'http://sewaholic.net/wp-content/uploads/2014/05/fabric-1.jpg',
         'weight': ['12.5mm','19mm'],
         'width' : ['36"' ,'44"', "52"]}],
      cotton: [
        {'fabric': 'cotton sateen',
         'img'   : 'https://d2d00szk9na1qq.cloudfront.net/Product/5e68e88a-aa37-4800-8029-9568bbda0709/Images/Large_0342371.jpg',
         'weight': ['6oz'],
         'width' : ['36"' ,'44"', "52"]},

        {'fabric': 'arist canvas',
         'img'   : 'http://cdn.dick-blick.com/items/073/06/07306-1657-2ww-m.jpg',
         'weight': ['5oz', '10oz'],
         'width' : ['36"' ,'44"', "52", "58"]}],
      userData: {},
      type: "",
      fabricType:[{'fabric': '','weight': ['',''],' width' : ['' ,'']},{'fabric': '','weight': ['',''],' width' : ['' ,'']}],
      fabricData: {'fabric': '', 'img': '', 'weight': ['',''], 'width' : ['' ,'']},
      finishData: {'hem':'', 'img': '', 'cost': ''},
      step: "A",
      job:"",

      portfolio: [

       {
         'title' : 'Erika Ceruzzi',
         'img'   : 'http://res.cloudinary.com/software-studios/image/upload/v1458841575/Portfolio/Erika_Ceruzzi_-ribboncloseup_web.jpg',
         'sub_1' : 'Ribbons',
         'sub_2' : 'Printed on Bamboo Twill',
         'sub_3' : 'Installation at Interstate Gallery',
         'date'  : 'Brooklyn NY, March 2014'

        },

       {
         'title' : 'Glossier',
         'img'   : 'http://res.cloudinary.com/software-studios/image/upload/v1459535716/glossier_phase2_large_we8fvs.jpg',
         'sub_1' : 'Printed on SemiMatte Photo Paper',
         'sub_2' : '',
         'sub_3' : 'Glossier Penthouse Showroom',
         'date'  : 'New York NY, March 2016'

        },

        {
         'title' : 'Katherine Sullivan  Margaux Wheelock-Shew',
         'img'   : 'http://res.cloudinary.com/software-studios/image/upload/v1458867053/landscapes_migyv4.jpg',
         'sub_1' : 'Landscapes of Erosion',
         'sub_2' : 'Printed on Silk Charmeuse',
         'sub_3' : 'Installation at the Cooper Union School of Architecture',
         'date'  : 'October 2015 New York NY'

        },

      ]
    }
    export default items;
