<?php
// This file is part of Moodle - https://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <https://www.gnu.org/licenses/>.

/**
 * Display information about all the mod_simulation modules in the requested course.
 *
 * @package     mod_simulation
 * @copyright   2024 Moises Rodriguez <mrdguezalvz@gmail.com>
 * @license     https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

require(__DIR__.'/../../config.php');

require_once(__DIR__.'/lib.php');

$context = context_system::instance();
$PAGE->set_context($context);
$PAGE->set_url(new moodle_url('/mod/simulation/memory.php'));
$PAGE->set_pagelayout('standard');
$PAGE->set_title(get_string('pluginname', 'mod_simulation'));
$PAGE->set_heading(get_string('gest_memoria', 'mod_simulation'));

$PAGE->requires->css('/mod/simulation/style.css');
$PAGE->requires->js('/mod/simulation/script.js');

echo $OUTPUT->header();

// HTML Content

/*
$htmlgen = '<div id="s01"> 
<h4>' . get_string('intro', 'mod_simulation') . '</h4>
</div>
<div class="container02">
<div class="column">
<h5 id="h5" >' . get_string('gest_interbloqueo', 'mod_simulation') . '</h5>
<br>
<img id="pix00" src="/mod/simulation/pix/pix1.png" alt="pix1">
<br>
<a id="a" href="deadlock.php">' . get_string('explore', 'mod_simulation') . '</a>
</div>
<div class="column">
<h5 id="h5">' . get_string('gest_memoria', 'mod_simulation') . '</h5>
<br>
<img id="pix00" src="/mod/simulation/pix/pix2.png" alt="pix1">
<br>
<a id="a" href="memory.php">' . get_string('explore', 'mod_simulation') . '</a>
</div>
</div>';

if (isloggedin()) {
    echo '<h3>' . get_string('hello', 'mod_simulation') . ' ' . fullname($USER) . '</h3>';
    echo $htmlgen; 
} else {
    echo '<h3>'. get_string('invitado', 'mod_simulation')  .'</h3>';
}
*/

$htmlmem = '
<h5 style="text-align: left;  margin-top: 20px;"><b>'. get_string('cartelMV', 'mod_simulation')  .'</b></h5>
<div class="row mb-4" style="border:outset 2px darkblue;">
<div class="row container-fluid" style="display: flex; text-align: center; align-items: center;">
  <div class="col-4">
    <p style="text-align: center; margin-top: 30px;">'. get_string('MV', 'mod_simulation')  .'</p>
    <input type="number" id="MV" placeholder="MV" style="text-align: center;">
  </div>
  <div class="col-4">
    <p style="text-align: center; margin-top: 30px">'. get_string('CP', 'mod_simulation')  .'</p>
    <input type="number" id="CP" placeholder="CP" style="text-align: center;">
  </div>
  <div class="col-4">
    <p style="text-align: center; margin-top: 30px">'. get_string('TP', 'mod_simulation')  .'</p>
    <input type="number" id="TP" placeholder="TP" style="text-align: center;">
  </div>
</div>';

$htmlmem = $htmlmem . '
<div class="row container-fluid" style="display: flex; text-align: center; align-items: center;">
  <div class="col-4">
    <p style="text-align: center; margin-top: 30px;">'. get_string('DL', 'mod_simulation')  .'</p>
    <input type="number" id="DL" placeholder="DL(bits)" style="text-align: center;">
  </div>
  <div class="col-4">
    <p style="text-align: center; margin-top: 30px">'. get_string('numpag', 'mod_simulation')  .'</p>
    <input type="number" id="#pag" placeholder="#pag(bits)" style="text-align: center;">
  </div>
  <div class="col-4">
    <p style="text-align: center; margin-top: 30px">'. get_string('desplV', 'mod_simulation')  .'</p>
    <input type="number" id="desplzV" placeholder="dspl(bits)" style="text-align: center;">
  </div>
</div>';

$htmlmem = $htmlmem . '
<div class="container-fluid mb-3" style="text-align: end; align-items: cend; margin-top: 30px;">
  <button id="botonMV" class="btn letter" onclick="calcularMemoriaVirtual()">'. get_string('calcular', 'mod_simulation')  .'</button>
</div>
</div>

<h5 style="text-align: left;  margin-top: 20px;"><b>'. get_string('cartelMF', 'mod_simulation')  .'</b></h5>
<div class="row mb-4" style="border:outset 2px darkblue;">
<div class="row container-fluid" style="display: flex; text-align: center; align-items: center;">
  <div class="col-4">
    <p style="text-align: center; margin-top: 30px;">'. get_string('MF', 'mod_simulation')  .'</p>
    <input type="number" id="MF" placeholder="MF" style="text-align: center;">
  </div>
  <div class="col-4">
    <p style="text-align: center; margin-top: 30px">'. get_string('CM', 'mod_simulation')  .'</p>
    <input type="number" id="CM" placeholder="CM" style="text-align: center;">
  </div>
  <div class="col-4">
    <p style="text-align: center; margin-top: 30px">'. get_string('TM', 'mod_simulation')  .'</p>
    <input type="number" id="TM" placeholder="TM" style="text-align: center;">
  </div>
</div>';

$htmlmem = $htmlmem . '
<div class="row container-fluid" style="display: flex; text-align: center; align-items: center;">
  <div class="col-4">
    <p style="text-align: center; margin-top: 30px;">'. get_string('DF', 'mod_simulation')  .'</p>
    <input type="number" id="DF" placeholder="DF(bits)" style="text-align: center;">
  </div>
  <div class="col-4">
    <p style="text-align: center; margin-top: 30px">'. get_string('nummarco', 'mod_simulation')  .'</p>
    <input type="number" id="#marcos" placeholder="#m(bits)" style="text-align: center;">
  </div>
  <div class="col-4">
    <p style="text-align: center; margin-top: 30px">'. get_string('desplF', 'mod_simulation')  .'</p>
    <input type="number" id="desplzF" placeholder="dspl(bits)" style="text-align: center;">
  </div>
</div>';

$htmlmem = $htmlmem . '
<div class="container-fluid mb-3" style="text-align: end; align-items: end; margin-top: 30px;">
  <button id="botonMF" class="btn letter" onclick="calcularMemoriaFisica()">'. get_string('calcular', 'mod_simulation')  .'</button>
</div>
</div>';

$htmlmem = $htmlmem . '
<h5 style="text-align: left;  margin-top: 20px;"><b>'. get_string('cartelRP', 'mod_simulation')  .'</b></h5>
<div class="row mb-4" style="border:outset 2px darkblue;">
<div class="row container-fluid" style="display: flex; text-align: center; align-items: center;">
  <div class="col-4">
    <p style="text-align: center; margin-top: 30px;">'. get_string('CM', 'mod_simulation')  .'</p>
    <input type="number" id="filas_tabla_reemplazo" placeholder="CM" style="text-align: center;">
  </div>
  <div class="col-4">
    <p style="text-align: center; margin-top: 30px">'. get_string('cantP', 'mod_simulation')  .'</p>
    <input type="number" id="columnas_tabla_reemplazo" placeholder="'. get_string('peticiones', 'mod_simulation')  .'" style="text-align: center;">
  </div>
  <div class="col-4">
    <p style="text-align: center; margin-top: 30px">'. get_string('tiempo', 'mod_simulation')  .'</p>
    <input type="number" id="inst_tiempo" placeholder="IT" style="text-align: center;">
  </div>
</div>';

$htmlmem = $htmlmem . '
<div class="container-fluid mb-3" style="text-align: center; align-items: center; margin-top: 30px;">
<p>'. get_string('select_algoritmo', 'mod_simulation')  .'</p> 
<label for="validationCustom04" class="form-label"></label>
  <select class="form-select mb-4 container-fluid" id="validationCustom04" required style="width: auto;">
    <option selected disabled value="">'. get_string('elegir', 'mod_simulation')  .'</option>
    <option id="fifo_G">FIFO GLOBAL</option>
    <option id="fifo_L">FIFO LOCAL</option>
    <option id="lru_G">LRU GLOBAL</option>
    <option id="lru_L">LRU LOCAL</option>
    <option id="optimo_G">ÓPTIMO GLOBAL</option>
    <option id="optimo_L">ÓPTIMO LOCAL</option>
  </select>
  <div class="container-fluid mb-3" style="text-align: end; align-items: end; margin-top: 30px;">
  <button id="botonSimular" class="btn letter" onclick="simularAlgoritmoMemoria()">'. get_string('simular_reemplazo', 'mod_simulation')  .'</button>
</div>
</div>
</div>';

echo $htmlmem;
echo $OUTPUT->footer();
