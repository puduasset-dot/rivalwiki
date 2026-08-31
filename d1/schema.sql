DROP TABLE IF EXISTS weapons;
CREATE TABLE weapons (
  slug TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('primary','secondary','melee','utility')),
  cost TEXT NOT NULL,
  damage TEXT NOT NULL,
  fire_rate TEXT NOT NULL,
  ammo TEXT,
  reload TEXT,
  notes TEXT,
  damage_value REAL,
  fire_rate_value REAL
);

DROP TABLE IF EXISTS codes;
CREATE TABLE codes (
  code TEXT PRIMARY KEY,
  reward TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('active','expired'))
);

DROP TABLE IF EXISTS tier_list;
CREATE TABLE tier_list (
  weapon_slug TEXT PRIMARY KEY REFERENCES weapons(slug),
  weapon_name TEXT NOT NULL,
  tier TEXT NOT NULL CHECK (tier IN ('S','A','B','C')),
  reason TEXT NOT NULL
);

DROP TABLE IF EXISTS maps;
CREATE TABLE maps (
  name TEXT PRIMARY KEY,
  category TEXT NOT NULL CHECK (category IN ('regular','big','legacy')),
  notes TEXT
);

DROP TABLE IF EXISTS rank_tiers;
CREATE TABLE rank_tiers (
  name TEXT PRIMARY KEY,
  has_sub_tiers INTEGER NOT NULL CHECK (has_sub_tiers IN (0,1)),
  notes TEXT,
  sort_order INTEGER NOT NULL
);
