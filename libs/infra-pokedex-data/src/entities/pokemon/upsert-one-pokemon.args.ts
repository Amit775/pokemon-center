import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonWhereUniqueInput } from './pokemon-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonCreateInput } from './pokemon-create.input';
import { PokemonUpdateInput } from './pokemon-update.input';

@ArgsType()
export class UpsertOnePokemonArgs {

    @Field(() => PokemonWhereUniqueInput, {nullable:false})
    @Type(() => PokemonWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonWhereUniqueInput, 'id'>;

    @Field(() => PokemonCreateInput, {nullable:false})
    @Type(() => PokemonCreateInput)
    create!: Identity<PokemonCreateInput>;

    @Field(() => PokemonUpdateInput, {nullable:false})
    @Type(() => PokemonUpdateInput)
    update!: Identity<PokemonUpdateInput>;
}
