export default function getRandom() {
  var a = [
    { 'year'  : '2007'
    , 'min'   : 765
    , 'max'   : 22716604
    , 'url'   : 'http://kagurazakaundergroundresistance.tumblr.com/post/22716604'
    },
    { 'year'  : '2008'
    , 'min'   : 22716605
    , 'max'   : 67666062
    , 'url'   : 'http://kagurazakaundergroundresistance.tumblr.com/post/67666062'
    },
    { 'year'  : '2009'
    , 'min'   : 67666063
    , 'max'   : 309781568
    , 'url'   : 'http://kagurazakaundergroundresistance.tumblr.com/post/309781568'
    },
    { 'year'  : '2010'
    , 'min'   : 309781569
    , 'max'   : 2542121207
    , 'url'   : 'http://kagurazakaundergroundresistance.tumblr.com/post/2542121207'
    },
    { 'year'  : '2011'
    , 'min'   : 2542121208
    , 'max'   : 15080900593
    , 'url'   : 'http://kagurazakaundergroundresistance.tumblr.com/post/15080900593'
    },
    { 'year'  : 'now'
    , 'min'   : 15080900593
    , 'max'   : 19893333892
    , 'url'   : 'http://kagurazakaundergroundresistance.tumblr.com/post/19893333892'
    }
  ]
  var c = Math.floor(Math.random() * a.length);
  var d = Math.floor(Math.random() * a[c].max - a[c].min + 1) + a[c].min;
  console.log([d, a[c].year, a[c].max, a[c].min, c]);
  return d;
}
