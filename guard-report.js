document.addEventListener('DOMContentLoaded', () => {
    // กำหนดตั้งค่าสำหรับแต่ละหน่วยงาน
    const unitConfigs = {
        "ส่วนกลาง": {
            titleName: "รปภ.เอกชนส่วนกลาง",
            dayGuardsCount: "32",
            nightGuardsCount: "24",
            dayLocations: [
                "ผู้จัดการโครงการส่วนกลาง", "หัวหน้าชุด รปภ.ส่วนกลาง", "ลานจอดรถP5", "ประตู1",
                "ประตู2", "ประตู3", "ประตู4", "ประตู5", "ประตู6",
                "ลานจอดรถP1", "ลานจอดสระว่ายน้ำ", "กองกายภาพและสิ่งแวดล้อม",
                "สถานีรถราง", "อาคารบรรยายรวม 1-2", "L2 ( แนวจักรยาน4 )", "ลานจอดรถP3", 
                "ลานจอดรถP4", "ถนนดำรงวิจัย ( ลานจอดกองฯ )", "โรงสูบน้ำ1", "โรงสูบน้ำ4", 
                "ลานเป็ดขาว", "เรือนไทย", "แยกลานอเนกฯ", "แม่และเด็ก",
                "ถนนสานสัตยา", "แนวถนนเทิดจักรี", "อาคารเจรจา"
            ],
            nightLocations: [
                "หัวหน้าชุด รปภ.ส่วนกลาง", "ลานจอดรถP5", "ประตู1",
                "ประตู2", "ประตู3", "ประตู4", "ประตู5", "ประตู6",
                "ลานจอดรถP1", "กองกายภาพและสิ่งแวดล้อม",
                "สถานีรถราง", "อาคารบรรยายรวม 1-2 ( เรือนไทย )", "ลานจอดรถP3 ( แยกแม่และเด็ก )", 
                "ลานจอดรถP4", "ถนนดำรงวิจัย", "โรงสูบน้ำ1", "โรงสูบน้ำ4",
                "อาคารเจรจา"
            ]
        },
        "ศูนย์การเรียนรู้มหิดล": {
            titleName: "รปภ.เอกชนศูนย์การเรียนรู้มหิดล",
            dayGuardsCount: "12",
            nightGuardsCount: "7",
            dayLocations: [
                "หัวหน้าชุด รปภ.MLC", "M.2", "M.3", "M.4", "M.5", "M.6", "M.7", "M.8", "M.9", "M.10", "M.11", "M.12"
            ],
            nightLocations: [
                "หัวหน้าชุด รปภ.MLC", "M.14", "M.15", "M.16", "M.17", "M.18", "M.19"
            ]
        },
        "มหิดลสิทธาคาร": {
            titleName: "รปภ.เอกชนมหิดลสิทธาคาร",
            dayGuardsCount: "10",
            nightGuardsCount: "5",
            dayLocations: [
                "หัวหน้าชุด รปภ.สิทธาคาร", "S.2", "S.3", "S.4", "S.5", "S.6", "S.7", "S.8", "S.9", "S.10"
            ],
            nightLocations: [
                "หัวหน้าชุด รปภ.สิทธาคาร", "S.2", "S.3", "S.4", "S.5"
            ]
        },
        "ลานจอดมหิดลสิทธาคาร": {
            titleName: "รปภ.เอกชนลานจอดมหิดลสิทธาคาร",
            dayGuardsCount: "16",
            nightGuardsCount: "6",
            dayLocations: [
                "หัวหน้าชุด รปภ.SP1", "SP.2", "SP.3", "SP.4", "SP.5", "SP.6", "SP.7", "SP.8", "SP.9", "SP.10"
            ],
            nightLocations: [
                "หัวหน้าชุด รปภ.SP1", "SP.2", "SP.3", "SP.4", "SP.5", "SP.6"
            ]
        },
        "อาคารสิริวิทยา": {
            titleName: "รปภ.เอกชนอาคารสิริวิทยา",
            dayGuardsCount: "7",
            nightGuardsCount: "3",
            dayLocations: [
                "หัวหน้าชุด รปภ.LA", "LA.02", "LA.03", "LA.04", "LA.05", "LA.06", "LA.07"
            ],
            nightLocations: [
                "หัวหน้าชุด รปภ.LA", "LA.09", "LA.10"
            ]
        },
        "โครงการจัดตั้งสถาบันอุทยานธรรมชาติวิทยาสิรีรุกขชาติ": {
            titleName: "รปภ.เอกชนสิรีรุกขชาติ",
            dayGuardsCount: "10",
            nightGuardsCount: "4",
            dayLocations: [
                "หัวหน้าชุด รปภ.สิรีรุกขชาติ", "SR.02", "SR.03", "SR.04", "SR.05", "SR.06", "SR.07", "SR.08", "SR.09", "SR.10"
            ],
            nightLocations: [
                "หัวหน้าชุด รปภ.สิรีรุกขชาติ", "SR.02", "SR.03", "SR.04"
            ]
        },
        "หอพักนักศึกษา": {
            titleName: "รปภ.เอกชนหอพักนักศึกษา",
            dayGuardsCount: "13",
            nightGuardsCount: "11",
            dayLocations: [
                "หัวหน้าชุด รปภ.หอพักนักศึกษา", "ป้อมหน้าหอ11", "หอ11", "หน้าหอ10", 
                "หน้าหอ1-2", "หน้าหอ6-7", "หน้าหอ8-9", "ป้อมโรงช้าง", "ประตูทางเข้าหอ1-2", 
                "ประตูทางเข้าหอ3-4", "ประตูทางเข้าหอ6-7", "ประตูทางเข้ารถราง", 
                "ทางเท้าเดินหลังหอพัก"
            ],
            nightLocations: [
                "หัวหน้าชุด รปภ.หอพักนักศึกษา", "ป้อมหน้าหอ11", "หอ11", "หน้าหอ10", 
                "หน้าหอ1-2", "หน้าหอ6-7", "หน้าหอ8-9", "ป้อมโรงช้าง", "ประตูทางเข้าหอ1-2", 
                "ประตูทางเข้าหอ3-4", "ประตูทางเข้าหอ6-7"
            ]
        }
    };

    let liveSheetData = []; 

    // URL ดึงข้อมูลบันทึกเวลา
    const sheetID = '1LD5AVbwLV2RplbUYNlzY529rkN41dgvvqcXzGjBFBW8';
    const gid = '1109000347';
    const CSV_URL = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?tqx=out:csv&gid=${gid}`;

    const dateInput = document.getElementById('reportDate');
    const unitInput = document.getElementById('reportUnit');
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    dateInput.value = `${yyyy}-${mm}-${dd}`; 

    function formatThaiDate(dateString) {
        const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('th-TH', dateOptions);
    }

    function createDayTableHeaders() {
        return `
            <tr>
                <th style="width: 25%">หน้าที่</th>
                <th style="width: 31%">ชื่อ-สกุล</th>
                <th style="width: 11%">ครั้งที่1</th>
                <th style="width: 11%">ครั้งที่2</th>
                <th style="width: 11%">ครั้งที่3</th>
                <th style="width: 11%">ครั้งที่1</th>
            </tr>
        `;
    }

    function createNightTableHeaders() {
        return `
            <tr>
                <th style="width: 20%">หน้าที่</th>
                <th style="width: 20%">ชื่อ-สกุล</th>
                <th style="width: 10%">ครั้งที่1</th>
                <th style="width: 10%">ครั้งที่2</th>
                <th style="width: 10%">ครั้งที่1</th>
                <th style="width: 10%">ครั้งที่2</th>
                <th style="width: 10%">ครั้งที่3</th>
                <th style="width: 10%">ครั้งที่4</th>
            </tr>
        `;
    }

    const container = document.getElementById('pages-container');

    // ==========================================
    // ระบบดึงข้อมูลและสร้างตารางแบบอัตโนมัติ (Dynamic)
    // ==========================================
    function updateReportData(selectedDateString) {
        const selectedUnit = unitInput.value;
        let unitsToRender = [];

        // เช็คว่าเลือก "ทั้งหมด" หรือเจาะจงหน่วยงาน
        if (selectedUnit === "ทั้งหมด") {
            unitsToRender = Object.keys(unitConfigs);
        } else {
            unitsToRender = [selectedUnit]; 
        }

        // เก็บบันทึกข้อมูลหัวหน้าผลัด (Shift) ที่ผู้ใช้พิมพ์ค้างไว้ก่อนโหลดใหม่
        const oldShiftCells = document.querySelectorAll('.shift-name-cell');
        const savedShifts = Array.from(oldShiftCells).map(cell => cell.innerText);

        let html = '';

        // ลูปสร้างตารางทีละหน่วยงาน
        unitsToRender.forEach(unit => {
            const config = unitConfigs[unit];

            // 1. แยกข้อมูลตามวันที่และผลัด เฉพาะของหน่วยงานนั้นๆ
            const dayData = liveSheetData.filter(row => 
                row.date === selectedDateString && row.unit === unit && row.shift === "เช้า"
            );
            const nightData = liveSheetData.filter(row => 
                row.date === selectedDateString && row.unit === unit && (row.shift === "ดึก" || row.shift === "กลางคืน")
            );

            // 2. จัดเตรียมแถวผลัดกลางวัน
            let finalDayRows = [];
            config.dayLocations.forEach(loc => {
                const guards = dayData.filter(d => d.location === loc);
                if (guards.length > 0) {
                    guards.forEach(g => finalDayRows.push({ location: loc, name: g.name }));
                } else {
                    finalDayRows.push({ location: loc, name: '' }); 
                }
            });

            // 3. จัดเตรียมแถวผลัดกลางคืน
            let finalNightRows = [];
            config.nightLocations.forEach(loc => {
                const guards = nightData.filter(d => d.location === loc);
                if (guards.length > 0) {
                    guards.forEach(g => finalNightRows.push({ location: loc, name: g.name }));
                } else {
                    finalNightRows.push({ location: loc, name: '' });
                }
            });

            // --- สร้างหน้ากระดาษผลัดกลางวันของหน่วยงานนี้ ---
            const DAY_ROWS_PER_PAGE = 16; 
            const totalDayPages = Math.ceil(finalDayRows.length / DAY_ROWS_PER_PAGE) || 1;

            for(let p = 0; p < totalDayPages; p++) {
                const startIdx = p * DAY_ROWS_PER_PAGE;
                const chunk = finalDayRows.slice(startIdx, startIdx + DAY_ROWS_PER_PAGE);
                
                html += `
                    <div class="page">
                        <div class="title">หลักฐานการตรวจการปฏิบัติหน้าที่ ${config.titleName} ผลัดกลางวัน ${config.dayGuardsCount} นาย ${p+1}/${totalDayPages}</div>
                        <div class="date-display">ประจำ${formatThaiDate(selectedDateString)}</div>
                        <table>
                            ${createDayTableHeaders()}
                            <tr>
                                <td>ผลัด 07.00-15.00น.</td>
                                <td contenteditable="true" class="shift-name-cell"></td>
                                <td></td><td></td><td></td><td class="bg-gray"></td>
                            </tr>
                            <tr>
                                <td>ผลัด 15.00-23.00น.</td>
                                <td contenteditable="true" class="shift-name-cell"></td>
                                <td class="bg-gray"></td><td class="bg-gray"></td><td class="bg-gray"></td><td></td>
                            </tr>
                `;
                chunk.forEach(row => {
                    html += `
                        <tr>
                            <td>${row.location}</td>
                            <td contenteditable="true" class="name-cell">${row.name}</td>
                            <td></td><td></td><td></td><td></td>
                        </tr>
                    `;
                });
                html += `</table></div>`;
            }

            // --- สร้างหน้ากระดาษผลัดกลางคืนของหน่วยงานนี้ ---
            const NIGHT_ROWS_PER_PAGE = 13; 
            const totalNightPages = Math.ceil(finalNightRows.length / NIGHT_ROWS_PER_PAGE) || 1;

            for(let p = 0; p < totalNightPages; p++) {
                const startIdx = p * NIGHT_ROWS_PER_PAGE;
                const chunk = finalNightRows.slice(startIdx, startIdx + NIGHT_ROWS_PER_PAGE);
                
                html += `
                    <div class="page">
                        <div class="title">หลักฐานการตรวจการปฏิบัติหน้าที่ ${config.titleName} ผลัดกลางคืน ${config.nightGuardsCount} นาย ${p+1}/${totalNightPages}</div>
                        <div class="date-display">ประจำ${formatThaiDate(selectedDateString)}</div>
                        <table>
                            ${createNightTableHeaders()}
                            <tr>
                                <td>ผลัด 15.00-23.00น.</td>
                                <td contenteditable="true" class="shift-name-cell"></td>
                                <td></td><td></td>
                                <td class="bg-gray"></td><td class="bg-gray"></td><td class="bg-gray"></td><td class="bg-gray"></td>
                            </tr>
                            <tr>
                                <td>ผลัด 23.00-07.00น.</td>
                                <td contenteditable="true" class="shift-name-cell"></td>
                                <td class="bg-gray"></td><td class="bg-gray"></td>
                                <td></td><td></td><td></td><td></td>
                            </tr>
                `;
                chunk.forEach(row => {
                    html += `
                        <tr>
                            <td>${row.location}</td>
                            <td contenteditable="true" class="name-cell">${row.name}</td>
                            <td></td><td></td><td></td><td></td><td></td><td></td>
                        </tr>
                    `;
                });
                html += `</table></div>`;
            }
        });

        // นำ HTML ทั้งหมดไปใส่ในคอนเทนเนอร์
        container.innerHTML = html;

        // คืนค่าข้อความผลัดที่พิมพ์ค้างไว้กลับไปลงกล่อง
        const newShiftCells = document.querySelectorAll('.shift-name-cell');
        newShiftCells.forEach((cell, index) => {
            if (savedShifts[index]) {
                cell.innerText = savedShifts[index];
            }
        });
    }

    async function loadDataFromGoogleSheet() {
        try {
            const response = await fetch(CSV_URL);
            const csvText = await response.text();
            const rows = csvText.split('\n');
            
            liveSheetData = rows.slice(1).map(row => {
                const cols = row.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || row.split(',');
                const cleanCols = cols.map(c => c.replace(/^"|"$/g, '').trim());
                
                return {
                    date: cleanCols[0],
                    unit: cleanCols[1],
                    shift: cleanCols[2],
                    location: cleanCols[3],
                    name: cleanCols[4]
                };
            });
            
            updateReportData(dateInput.value);
            
        } catch (error) {
            console.error("Error loading sheet:", error);
            updateReportData(dateInput.value);
        }
    }

    loadDataFromGoogleSheet();

    // Event Listeners สำหรับ วันที่ และ หน่วยงาน
    dateInput.addEventListener('change', (e) => {
        if(e.target.value) {
            updateReportData(e.target.value);
        }
    });

    unitInput.addEventListener('change', () => {
        updateReportData(dateInput.value);
    });

    // ==========================================
    // ระบบ Autocomplete
    // ==========================================
    const STAFF_SHEET_URL = `https://docs.google.com/spreadsheets/d/1LD5AVbwLV2RplbUYNlzY529rkN41dgvvqcXzGjBFBW8/gviz/tq?tqx=out:csv&gid=1850713009`;
    let staffNamesList = [];
    let currentDropdown = null;

    async function loadStaffNames() {
        try {
            const response = await fetch(STAFF_SHEET_URL);
            const csvText = await response.text();
            const rows = csvText.split('\n');
            staffNamesList = rows.slice(1).map(row => {
                const cols = row.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || row.split(',');
                return cols[0] ? cols[0].replace(/^"|"$/g, '').trim() : '';
            }).filter(name => name !== ''); 
        } catch (error) {
            console.error("Error loading staff names:", error);
        }
    }

    function closeDropdown() {
        if (currentDropdown) {
            currentDropdown.remove();
            currentDropdown = null;
        }
    }

    function showDropdown(cell, searchText) {
        closeDropdown();
        const filteredNames = staffNamesList.filter(name => name.toLowerCase().includes(searchText.toLowerCase()));
        if (filteredNames.length === 0) return;

        const dropdown = document.createElement('div');
        dropdown.className = 'autocomplete-dropdown';
        
        const rect = cell.getBoundingClientRect();
        dropdown.style.top = (rect.bottom + window.scrollY) + 'px';
        dropdown.style.left = (rect.left + window.scrollX) + 'px';
        dropdown.style.width = rect.width + 'px';

        filteredNames.forEach(name => {
            const item = document.createElement('div');
            item.className = 'autocomplete-item';
            item.innerText = name;
            item.addEventListener('click', function(e) {
                e.stopPropagation();
                cell.innerText = name;
                closeDropdown();
            });
            dropdown.appendChild(item);
        });
        document.body.appendChild(dropdown);
        currentDropdown = dropdown;
    }

    document.addEventListener('focusin', function(e) {
        if (e.target.classList.contains('shift-name-cell') || e.target.classList.contains('name-cell')) {
            showDropdown(e.target, e.target.innerText.trim());
        }
    });

    document.addEventListener('input', function(e) {
        if (e.target.classList.contains('shift-name-cell') || e.target.classList.contains('name-cell')) {
            showDropdown(e.target, e.target.innerText.trim());
        }
    });

    document.addEventListener('click', function(e) {
        if (!e.target.classList.contains('autocomplete-item') && 
            !e.target.classList.contains('shift-name-cell') &&
            !e.target.classList.contains('name-cell')) {
            closeDropdown();
        }
    });

    loadStaffNames();
});