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
 * Prints an instance of mod_simulation.
 *
 * @package     mod_simulation
 * @copyright   2024 Moises Rodriguez <mrdguezalvz@gmail.com>
 * @license     https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

namespace mod_simulation\output;

use plugin_renderer_base;
 
defined('MOODLE_INTERNAL') || die();
 
class memory_page_renderer extends plugin_renderer_base {
 
    public function render_memory_page($cartelMV, $MV, $CP, $TP, $DL, $numpag, $desplV, $calcular, $cartelMF, $MF, $CM, $TM, $DF, $nummarco, $desplF, $calcular, $replace, $simular_reemplazo) {
        global $OUTPUT;
 
        $data = array(
            'cartelMV' => $cartelMV,
            'MV' => $MV,
            'CP' => $CP,
            'TP' => $TP,
            'DL' => $DL,
            'numpag' => $numpag,
            'desplV' => $desplV,
            'calcular' => $calcular,
            'cartelMF' => $cartelMF,
            'MF' => $MF,
            'CM' => $CM,
            'TM' => $TM,
            'DF' => $DF,
            'nummarco' => $nummarco,
            'desplF' => $desplF,
            'calcular' => $calcular,
            'replace' => $replace,
            'simular_reemplazo' => $simular_reemplazo
        );
        $content = $OUTPUT->render_from_template('simulation/memory', $data);
 
        return $content;
    }
}