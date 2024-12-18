import { Request, Response } from 'express';
import { Experiencia } from '../models'; 

// Obtener todas las experiencias
export const obtenerExperiencias = async (req: Request, res: Response) => {
  try {
    const experiencias = await Experiencia.findAll({
      include: [
        { association: 'fotos' }, 
        { association: 'guia' }, 
        // ... otras asociaciones
      ],
    });
    res.json(experiencias);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener las experiencias' });
  }
};

// Crear una nueva experiencia
export const crearExperiencia = async (req: Request, res: Response) => {
  try {
    const nuevaExperiencia = await Experiencia.create(req.body);
    res.status(201).json(nuevaExperiencia);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear la experiencia' });
  }
};

// ... otros métodos del controlador (obtenerExperienciaPorId, actualizarExperiencia, eliminarExperiencia)