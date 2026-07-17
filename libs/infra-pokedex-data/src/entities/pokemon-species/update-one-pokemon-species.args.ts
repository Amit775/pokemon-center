import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesUpdateInput } from './pokemon-species-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';

@ArgsType()
export class UpdateOnePokemonSpeciesArgs {

    @Field(() => PokemonSpeciesUpdateInput, {nullable:false})
    @Type(() => PokemonSpeciesUpdateInput)
    data!: Identity<PokemonSpeciesUpdateInput>;

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;
}
