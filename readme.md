# DONKEYSITE

Donkeysite is an example site for the use of **QK:Run**

QK:Run can be found [here](https://packagist.org/packages/tigrez/qkrun#dev-master)

## The idea
A new installation of QK:Run is already prepared for use of this example site. The whole idea  is this. If you're curious how QK:Run works you install it. Next you clone the DonkeySite from github. You run QKRun to see what it does in the DonkeySite. You like it? Then you can start changing the config for your own sites.. Hate it? Remove both QK:Run and the DonkeySite  and forget all about it.

## The config 

**You'll find a pretty good explanation of how to configure and use QK:Run in the readme.md file of  QK:Run. Please have a look. Here you'll find a quik run-through to get you going in the shortest of time.**

You run QK:Run from the folder `proj`. From here it looks for a `config/qkrun.config.php` , the QK:Run *global configuration file*. On a new installation it contains this:

    <?php
    // This  is  the  global  configuration. Any  entry  in  here 
    // can be overridden by a local configuration file of a site.
    // The sites entry points to these local configuration and is
    // the only mandatory entry in this file.
    return [
 	   'sites'       => ['donkey'=>'config/donkey.config.php',],
    ];
  
What it basicly states here is that there's one site defined with the key `donkey`. Its *local configuration file* is `config/donkey.config.php`.

In this file we'll find..

    <?php
    // an example of a local config file 
    return [
	    'cssdir_in'   => 'c:/xampp/htdocs/donkeysite/css/',
	    'cssdir_out'  => 'c:/xampp/htdocs/donkeysite/cssmin/',
	    'jsdir_in'    => 'c:/xampp/htdocs/donkeysite/js/',
	    'jsdir_out'   => 'c:/xampp/htdocs/donkeysite/jsmin/',
	    'jsconc_in'   => 'c:/xampp/htdocs/donkeysite/jsmin/',
	    'jsconc_out'  => 'c:/xampp/htdocs/donkeysite/jscon/',
	    'jsconc_name' => 'donkey-min.js',
	    'cssconc_in'   => 'c:/xampp/htdocs/donkeysite/cssmin/',
	    'cssconc_out'  => 'c:/xampp/htdocs/donkeysite/csscon/',
	    'cssconc_name' => 'donkey-min.css',
    ];
 
For the most part it describes where the folders are for different types of assets.
 
>**You might have to change the directories depending on where you cloned DonkeySite.**

## Ready to go
Now we're ready to go. Go to the `proj` folder of QK:Run and start qkrun by typing `php qk.php`. You'll see a list of available commands. The taskrunner supports several commands to minify, crunch and concat files. However, the most interesting are the two combining these steps. `run` and `watch`. 

With **`run`** all steps are carried out in one run. Just try `php qk.php run`. In case of the donkey project it wil minify and 'crunch' the css files in the folder as specified by `cssdir_in`. It semi-finished products can be checked in `cssdir_out`. According the configuration this folder is input for the concat-step where all files are glued together. This end-product can be found in `jsconc_out`. Here you'll find one 'big' css file with the name as set in `cssconc_name`. This file is the one that's included in your webpage.

The same for javascript. The javascript files in jsdir_in are minified, the results placed in `jsdir_out`. Finally they're concatted and placed in `jsconc_out` bearing the name as specified in `jsconc_name`.

**watch** is basicly a `run`. Once you've started `watch` QK:Run watches the folders `jsdir_in` and `cssdir_in`. If it detect a change it will start a run.    
 