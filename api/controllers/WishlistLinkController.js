/**
 * WishlistLinkController
 *
 * @description :: Server-side logic for managing Wishlistlinks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var MetaInspector = require('minimal-metainspector');
var Scraper = require('image-scraper');

var rp = require('request-promise');
var cheerio = require('cheerio');

module.exports = {
	createLink: function (req, res) {
		console.log("ici");
		var client = new MetaInspector(req.param('link'), {});

		client.on("fetch", function () {
			console.log("la");
			var title = client.title;
			var description = client.description;
			var image = client.image;

			if (title == null || title.includes('CAPTCHA') || title == undefined) {
				title = "";
			}
			if (description == null || description.includes('CAPTCHA') || description == undefined) {
				description = "";
			}
			if (image == null || image == undefined) {
				var URL = 'https://www.google.fr/search?q='+title+'&source=lnms&tbm=isch&sa=X&ved=0ahUKEwj9tori9fvQAhUJ0xoKHSaDB9kQ_AUICCgB&biw=1280&bih=625#q='+title+'&tbm=isch&tbs=isz:l';
				console.log("iciaa");
		    return rp(URL)
		    .then(function(html) {
		        var $ = cheerio.load(html);
		        var imgNodes = $('#ires td a img');
		        var urls = [];
		        imgNodes.map(function(imgNodeIdx) {
		            var imgNode = imgNodes[imgNodeIdx];
		            urls.push(imgNode.attribs['src']);
		        });
						console.log("2");
						WishlistLink.create({link: req.param('link'), picture: urls[0], description: description, title: title, wishlist: req.param('wishlist')})
							.exec(function(err, link) {
								WishlistLink.publishCreate(link, req);
								res.ok(link);
						})
		    });
			}else{
				console.log("1");
				WishlistLink.create({link: req.param('link'), picture: image, description: description, title: title, wishlist: req.param('wishlist')})
					.exec(function(err, link) {
						WishlistLink.publishCreate(link, req);
						res.ok(link);
				})
			}
		});

    client.on("error", function (err) {
			console.log('error');
			console.log(err);
      res.status(500);
    });
    client.fetch();
	}
};
