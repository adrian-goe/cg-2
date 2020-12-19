(module
 (type $i32_i32_i32_i32_=>_i32 (func (param i32 i32 i32 i32) (result i32)))
 (type $i32_i32_i32_i32_=>_none (func (param i32 i32 i32 i32)))
 (type $i32_=>_i32 (func (param i32) (result i32)))
 (import "env" "memory" (memory $0 0))
 (export "memory" (memory $0))
 (export "cross" (func $assembly/index/cross))
 (export "grayscale" (func $assembly/index/grayscale))
 (func $assembly/utils/Util.fill (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
  local.get $0
  local.get $1
  i32.store8
  local.get $0
  local.get $2
  i32.store8 offset=1
  local.get $0
  local.get $3
  i32.store8 offset=2
  local.get $0
  i32.const 255
  i32.store8 offset=3
 )
 (func $assembly/drawCross/Image.drawCross (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  local.get $1
  i32.const 2
  i32.div_s
  local.tee $4
  local.get $3
  i32.const 2
  i32.div_s
  local.tee $3
  i32.sub
  local.set $7
  local.get $3
  local.get $4
  i32.add
  local.set $8
  local.get $2
  i32.const 2
  i32.div_s
  local.tee $4
  local.get $3
  i32.sub
  local.set $9
  local.get $3
  local.get $4
  i32.add
  local.set $10
  loop $for-loop|0
   local.get $2
   local.get $5
   i32.gt_s
   if
    i32.const 0
    local.set $3
    loop $for-loop|1
     local.get $1
     local.get $3
     i32.gt_s
     if
      local.get $0
      local.get $3
      local.get $1
      local.get $5
      i32.mul
      i32.add
      i32.const 2
      i32.shl
      local.tee $6
      i32.add
      local.set $4
      i32.const 1
      local.get $3
      local.get $8
      i32.lt_s
      i32.const 0
      local.get $3
      local.get $7
      i32.gt_s
      select
      local.get $5
      local.get $10
      i32.lt_s
      i32.const 0
      local.get $5
      local.get $9
      i32.gt_s
      select
      select
      if
       local.get $4
       i32.const 253
       i32.const 0
       i32.const 255
       call $assembly/utils/Util.fill
      else
       local.get $4
       local.get $6
       i32.load8_u
       i32.store8
       local.get $4
       local.get $6
       i32.load8_u offset=1
       i32.store8 offset=1
       local.get $4
       local.get $6
       i32.load8_u offset=2
       i32.store8 offset=2
       local.get $4
       local.get $6
       i32.load8_u offset=3
       i32.store8 offset=3
      end
      local.get $3
      i32.const 1
      i32.add
      local.set $3
      br $for-loop|1
     end
    end
    local.get $5
    i32.const 1
    i32.add
    local.set $5
    br $for-loop|0
   end
  end
  i32.const 0
 )
 (func $assembly/index/cross (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
  local.get $0
  local.get $1
  local.get $2
  local.get $3
  call $assembly/drawCross/Image.drawCross
 )
 (func $assembly/index/grayscale (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  loop $for-loop|0
   local.get $0
   local.get $1
   i32.gt_s
   if
    local.get $0
    local.get $1
    i32.add
    local.get $1
    i32.load8_u
    f64.convert_i32_u
    f64.const 0.3
    f64.mul
    local.get $1
    i32.load8_u offset=1
    f64.convert_i32_u
    f64.const 0.59
    f64.mul
    f64.add
    local.get $1
    i32.load8_u offset=2
    f64.convert_i32_u
    f64.const 0.114
    f64.mul
    f64.add
    i32.trunc_f64_s
    local.tee $2
    local.get $2
    local.get $2
    call $assembly/utils/Util.fill
    local.get $1
    i32.const 4
    i32.add
    local.set $1
    br $for-loop|0
   end
  end
  i32.const 0
 )
)
