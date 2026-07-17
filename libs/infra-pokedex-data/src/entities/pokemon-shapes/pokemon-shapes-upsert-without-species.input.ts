import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonShapesUpdateWithoutSpeciesInput } from './pokemon-shapes-update-without-species.input';
import { Type } from 'class-transformer';
import { PokemonShapesCreateWithoutSpeciesInput } from './pokemon-shapes-create-without-species.input';
import { PokemonShapesWhereInput } from './pokemon-shapes-where.input';

@InputType()
export class PokemonShapesUpsertWithoutSpeciesInput {

    @Field(() => PokemonShapesUpdateWithoutSpeciesInput, {nullable:false})
    @Type(() => PokemonShapesUpdateWithoutSpeciesInput)
    update!: PokemonShapesUpdateWithoutSpeciesInput;

    @Field(() => PokemonShapesCreateWithoutSpeciesInput, {nullable:false})
    @Type(() => PokemonShapesCreateWithoutSpeciesInput)
    create!: PokemonShapesCreateWithoutSpeciesInput;

    @Field(() => PokemonShapesWhereInput, {nullable:true})
    @Type(() => PokemonShapesWhereInput)
    where?: PokemonShapesWhereInput;
}
