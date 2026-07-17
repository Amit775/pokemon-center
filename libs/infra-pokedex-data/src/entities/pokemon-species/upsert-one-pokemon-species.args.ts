import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateInput } from './pokemon-species-create.input';
import { PokemonSpeciesUpdateInput } from './pokemon-species-update.input';

@ArgsType()
export class UpsertOnePokemonSpeciesArgs {

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;

    @Field(() => PokemonSpeciesCreateInput, {nullable:false})
    @Type(() => PokemonSpeciesCreateInput)
    create!: PokemonSpeciesCreateInput;

    @Field(() => PokemonSpeciesUpdateInput, {nullable:false})
    @Type(() => PokemonSpeciesUpdateInput)
    update!: PokemonSpeciesUpdateInput;
}
