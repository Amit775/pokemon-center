import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonTypesWhereUniqueInput } from './pokemon-types-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonTypesCreateInput } from './pokemon-types-create.input';
import { PokemonTypesUpdateInput } from './pokemon-types-update.input';

@ArgsType()
export class UpsertOnePokemonTypesArgs {

    @Field(() => PokemonTypesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonTypesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonTypesWhereUniqueInput, 'pokemon_id_type_id'>;

    @Field(() => PokemonTypesCreateInput, {nullable:false})
    @Type(() => PokemonTypesCreateInput)
    create!: Identity<PokemonTypesCreateInput>;

    @Field(() => PokemonTypesUpdateInput, {nullable:false})
    @Type(() => PokemonTypesUpdateInput)
    update!: Identity<PokemonTypesUpdateInput>;
}
