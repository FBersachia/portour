import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';
import { Guia } from './guias.model';
import { Foto } from './fotos.model'; 

interface ExperienciaAttributes {
  ID: number;
  Name: string;
  Description: string;
  Time: number;
  Type_id: number;
  Zone_id: number;
  Capacity: number;
  Exp_state_id: number;
}

interface ExperienciaCreationAttributes extends Optional<ExperienciaAttributes, 'ID'> {}

class Experiencia extends Model<ExperienciaAttributes, ExperienciaCreationAttributes> 
  implements ExperienciaAttributes {
  public ID!: number;
  public Name!: string;
  public Description!: string;
  public Time!: number;
  public Type_id!: number;
  public Zone_id!: number;
  public Capacity!: number;
  public Exp_state_id!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Experiencia.init(
  {
    ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Description: {
      type: DataTypes.TEXT,
    },
    Time: {
      type: DataTypes.INTEGER,
    },
    Type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Zone_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Capacity: {
      type: DataTypes.INTEGER,
    },
    Exp_state_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Experiencia',
  }
);

// Relaciones con otras entidades
Experiencia.belongsTo(Guia, { foreignKey: 'ID_guide' }); 
Experiencia.hasMany(Foto, { foreignKey: 'ID_exp', as: 'fotos' });
// ... otras relaciones

export { Experiencia };