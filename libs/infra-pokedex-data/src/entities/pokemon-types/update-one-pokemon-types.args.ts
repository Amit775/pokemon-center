import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonTypesUpdateInput } from './pokemon-types-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonTypesWhereUniqueInput } from './pokemon-types-where-unique.input';

@ArgsType()
export class UpdateOnePokemonTypesArgs {

    @Field(() => PokemonTypesUpdateInput, {nullable:false})
    @Type(() => PokemonTypesUpdateInput)
    data!: Identity<PokemonTypesUpdateInput>;

    @Field(() => PokemonTypesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonTypesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonTypesWhereUniqueInput, 'pokemon_id_type_id'>;
}
