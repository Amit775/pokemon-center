import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonShapesWhereInput } from './pokemon-shapes-where.input';
import { Type } from 'class-transformer';
import { PokemonShapesUpdateWithoutSpeciesInput } from './pokemon-shapes-update-without-species.input';

@InputType()
export class PokemonShapesUpdateToOneWithWhereWithoutSpeciesInput {

    @Field(() => PokemonShapesWhereInput, {nullable:true})
    @Type(() => PokemonShapesWhereInput)
    where?: Identity<PokemonShapesWhereInput>;

    @Field(() => PokemonShapesUpdateWithoutSpeciesInput, {nullable:false})
    @Type(() => PokemonShapesUpdateWithoutSpeciesInput)
    data!: Identity<PokemonShapesUpdateWithoutSpeciesInput>;
}
