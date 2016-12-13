module.exports = {
  standard: {
    pp: require('./standard/power_plant').pp,
    t: require('./standard/thrusters').t,
    fsd: require('./standard/frame_shift_drive').fsd,
    ls: require('./standard/life_support').ls,
    pd: require('./standard/power_distributor').pd,
    s: require('./standard/sensors').s,
    ft: require('./standard/fuel_tank').ft,
    pas: require('./standard/planetary_approach_suite').pas
  },
  hardpoints: {
    pl: require('./hardpoints/pulse_laser').pl,
    ul: require('./hardpoints/burst_laser').ul,
    bl: require('./hardpoints/beam_laser').bl,
    mc: require('./hardpoints/multi_cannon').mc,
    c: require('./hardpoints/cannon').c,
    fc: require('./hardpoints/fragment_cannon').fc,
    rg: require('./hardpoints/rail_gun').rg,
    pa: require('./hardpoints/plasma_accelerator').pa,
    mr: require('./hardpoints/missile_rack').mr,
    tp: require('./hardpoints/torpedo_pylon').tp,
    nl: require('./hardpoints/mine_launcher').nl,
    ml: require('./hardpoints/mining_laser').ml,
    cs: require('./hardpoints/cargo_scanner').cs,
    ws: require('./hardpoints/frame_shift_wake_scanner').ws,
    kw: require('./hardpoints/kill_warrant_scanner').kw,
    sb: require('./hardpoints/shield_booster').sb,
    ch: require('./hardpoints/chaff_launcher').ch,
    ec: require('./hardpoints/electronic_countermeasure').ec,
    hs: require('./hardpoints/heat_sink_launcher').hs,
    po: require('./hardpoints/point_defence').po
  },
  internal: {
    am: require('./internal/auto_field_maintenance_unit').am,
    bsg: require('./internal/bi_weave_shield_generator').bsg,
    cr: require('./internal/cargo_rack').cr,
    cc: require('./internal/collector_limpet_controllers').cc,
    dc: require('./internal/docking_computer').dc,
    fh: require('./internal/fighter_hangar').fh,
    fi: require('./internal/frame_shift_drive_interdictor').fi,
    fs: require('./internal/fuel_scoop').fs,
    ft: require('./internal/internal_fuel_tank').ft,
    fx: require('./internal/fuel_transfer_limpet_controllers').fx,
    hb: require('./internal/hatch_breaker_limpet_controller').hb,
    hr: require('./internal/hull_reinforcement_package').hr,
    mrp: require('./internal/module_reinforcement_package').mrp,
    pv: require('./internal/planetary_vehicle_hanger').pv,
    psg: require('./internal/pristmatic_shield_generator').psg,
    pc: require('./internal/prospector_limpet_controllers').pc,
    pce: require('./internal/economy_passenger_cabin').pce,
    pci: require('./internal/business_passenger_cabin').pci,
    pcm: require('./internal/first_passenger_cabin').pcm,
    pcq: require('./internal/luxury_passenger_cabin').pcq,
    rf: require('./internal/refinery').rf,
    sc: require('./internal/scanner').sc,
    scb: require('./internal/shield_cell_bank').scb,
    sg: require('./internal/shield_generator').sg
  }
};
