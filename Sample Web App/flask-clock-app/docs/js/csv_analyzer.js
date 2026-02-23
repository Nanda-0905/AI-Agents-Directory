function qs(id){return document.getElementById(id)}
const uploadArea = qs('upload-area')
const fileInput = qs('file-input')
const loading = qs('loading')
const errorEl = qs('error')
const summary = qs('summary')
const totalRowsEl = qs('total-rows')
const totalColsEl = qs('total-cols')
const colNamesEl = qs('col-names')
const columnStatsEl = qs('column-stats')

function showError(msg){ errorEl.style.display='block'; errorEl.textContent = msg }
function clearError(){ errorEl.style.display='none'; errorEl.textContent = '' }

function showLoading(){ loading.style.display='block' }
function hideLoading(){ loading.style.display='none' }

function handleFile(file){
  clearError();
  if(!file){ showError('No file selected'); return }
  showLoading();
  Papa.parse(file, {
    header: true,
    skipEmptyLines: true,
    complete: function(results){
      hideLoading();
      if(results.errors && results.errors.length){
        // show first error
        showError(results.errors[0].message || 'Parsing error')
        return
      }
      processRows(results.data)
    },
    error: function(err){ hideLoading(); showError(err.message || 'Parsing error') }
  })
}

function processRows(rows){
  if(!rows || rows.length===0){ showError('CSV is empty or has no data rows'); return }
  summary.style.display='block'
  const cols = Object.keys(rows[0])
  totalRowsEl.textContent = String(rows.length)
  totalColsEl.textContent = String(cols.length)
  colNamesEl.textContent = cols.join(', ')

  // Build per-column arrays
  const colValues = {}
  cols.forEach(c => colValues[c] = [])
  rows.forEach(r => {
    cols.forEach(c => {
      const v = r[c]===undefined || r[c]===null || String(r[c]).trim()==='' ? null : r[c]
      colValues[c].push(v)
    })
  })

  // Compute stats
  const stats = {}
  cols.forEach(c => {
    const arr = colValues[c]
    const nonNull = arr.filter(x=>x!==null)
    const nullCount = arr.length - nonNull.length
    const unique = new Set(nonNull.map(x=>String(x))).size

    // detect numeric: at least 60% of non-null values parse as number
    let numericCount = 0
    const numericVals = []
    nonNull.forEach(v=>{
      const n = Number(String(v).replace(/,/g, ''))
      if(!Number.isNaN(n) && isFinite(n)){
        numericCount += 1
        numericVals.push(n)
      }
    })
    const isNumeric = nonNull.length>0 && (numericCount / nonNull.length) >= 0.6

    const colStat = {
      dtype: isNumeric ? 'numeric' : 'string',
      non_null_count: nonNull.length,
      null_count: nullCount,
      null_percentage: ((nullCount/arr.length)*100).toFixed(2),
      unique_values: unique
    }

    if(isNumeric && numericVals.length>0){
      numericVals.sort((a,b)=>a-b)
      colStat.min = numericVals[0]
      colStat.max = numericVals[numericVals.length-1]
      colStat.mean = mean(numericVals)
      colStat.median = median(numericVals)
      colStat.std_dev = stddev(numericVals)
      colStat.p25 = quantile(numericVals, .25)
      colStat.p75 = quantile(numericVals, .75)
    } else {
      // top value & frequency for strings
      const freq = {}
      nonNull.forEach(v=>{ const s = String(v); freq[s] = (freq[s]||0) + 1 })
      let topValue = 'N/A', topFreq = 0
      Object.keys(freq).forEach(k=>{ if(freq[k] > topFreq){ topFreq = freq[k]; topValue = k } })
      colStat.top_value = topValue
      colStat.top_value_frequency = topFreq
    }

    stats[c] = colStat
  })

  renderColumnStats(stats)
}

function renderColumnStats(stats){
  columnStatsEl.innerHTML = ''
  const tbl = document.createElement('table')
  tbl.className = 'column-table'
  const thead = document.createElement('thead')
  thead.innerHTML = '<tr><th>Column</th><th>Type</th><th>Non-null</th><th>Null</th><th>% Null</th><th>Unique</th><th>Min</th><th>Max</th><th>Mean</th><th>Median</th><th>Std Dev</th><th>Top Value</th><th>Top Freq</th></tr>'
  tbl.appendChild(thead)
  const tbody = document.createElement('tbody')
  Object.keys(stats).forEach(col=>{
    const s = stats[col]
    const tr = document.createElement('tr')
    tr.innerHTML = `<td>${escapeHtml(col)}</td>
      <td>${s.dtype}</td>
      <td>${s.non_null_count}</td>
      <td>${s.null_count}</td>
      <td>${s.null_percentage}%</td>
      <td>${s.unique_values}</td>
      <td>${s.min !== undefined ? s.min : ''}</td>
      <td>${s.max !== undefined ? s.max : ''}</td>
      <td>${s.mean !== undefined ? round(s.mean) : ''}</td>
      <td>${s.median !== undefined ? round(s.median) : ''}</td>
      <td>${s.std_dev !== undefined ? round(s.std_dev) : ''}</td>
      <td>${s.top_value !== undefined ? escapeHtml(s.top_value) : ''}</td>
      <td>${s.top_value_frequency !== undefined ? s.top_value_frequency : ''}</td>`
    tbody.appendChild(tr)
  })
  tbl.appendChild(tbody)
  columnStatsEl.appendChild(tbl)
}

function escapeHtml(str){ return String(str).replace(/[&<>"']/g, function(m){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"}[m] }) }
function round(n){ return Math.round(n*10000)/10000 }

function mean(arr){ return arr.reduce((a,b)=>a+b,0)/arr.length }
function median(arr){ const m = Math.floor(arr.length/2); return arr.length%2 ? arr[m] : (arr[m-1]+arr[m])/2 }
function stddev(arr){ const mu = mean(arr); const sq = arr.map(x=>Math.pow(x-mu,2)); return Math.sqrt(sq.reduce((a,b)=>a+b,0)/(arr.length-1 || 1)) }
function quantile(arr,q){ if(arr.length===0) return null; const idx = (arr.length-1)*q; const lo = Math.floor(idx); const hi = Math.ceil(idx); if(lo===hi) return arr[lo]; return arr[lo] + (arr[hi]-arr[lo])*(idx-lo) }

// drag & drop + file input wiring
uploadArea.addEventListener('click', ()=> fileInput.click())
uploadArea.addEventListener('dragover', (e)=>{ e.preventDefault(); uploadArea.classList.add('dragover') })
uploadArea.addEventListener('dragleave', ()=>{ uploadArea.classList.remove('dragover') })
uploadArea.addEventListener('drop', (e)=>{ e.preventDefault(); uploadArea.classList.remove('dragover'); const f = e.dataTransfer.files && e.dataTransfer.files[0]; if(f) handleFile(f) })
fileInput.addEventListener('change', (e)=>{ const f = e.target.files && e.target.files[0]; if(f) handleFile(f) })
