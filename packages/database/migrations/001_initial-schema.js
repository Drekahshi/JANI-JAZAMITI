exports.up = (pgm) => {
  pgm.createTable('users', {
    id: 'id',
    email: { type: 'varchar(255)', notNull: true, unique: true },
    walletAddress: { type: 'varchar(255)', notNull: true, unique: true },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
  });

  pgm.createTable('tree_submissions', {
    id: 'id',
    userId: {
      type: 'integer',
      notNull: true,
      references: '"users"',
      onDelete: 'cascade',
    },
    species: { type: 'varchar(255)', notNull: true },
    latitude: { type: 'decimal(10, 8)', notNull: true },
    longitude: { type: 'decimal(11, 8)', notNull: true },
    createdAt: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('tree_submissions');
  pgm.dropTable('users');
};
