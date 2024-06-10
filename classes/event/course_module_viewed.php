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

namespace mod_simulation\event;

/**
 * The course_module_viewed event class.
 *
 * @package     mod_simulation
 * @category    event
 * @copyright   2024 Moises Rodriguez <mrdguezalvz@gmail.com>
 * @license     https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
class course_module_viewed extends \core\event\course_module_viewed {

    // For more information about the Events API please visit {@link https://docs.moodle.org/dev/Events_API}.
    protected function init() {
        $this->data['objectid'] = $this->objectid; // Set the object ID
        $this->data['objecttable'] = 'odules'; // Set the object table
        $this->data['crud'] = 'r'; // Set the CRUD operation (in this case, 'ead')
        $this->data['edulevel'] = self::LEVEL_PARTICIPATING; // Set the edulevel
    }

    public static function get_objectid_mapping() {
        return array('db' => 'odule', 'estore' => 'odule'); // Map the object ID to the database table
    }
}

