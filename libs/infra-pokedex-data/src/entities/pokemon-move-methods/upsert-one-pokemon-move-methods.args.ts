import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonMoveMethodsWhereUniqueInput } from './pokemon-move-methods-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonMoveMethodsCreateInput } from './pokemon-move-methods-create.input';
import { PokemonMoveMethodsUpdateInput } from './pokemon-move-methods-update.input';

@ArgsType()
export class UpsertOnePokemonMoveMethodsArgs {

    @Field(() => PokemonMoveMethodsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonMoveMethodsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonMoveMethodsWhereUniqueInput, 'id'>;

    @Field(() => PokemonMoveMethodsCreateInput, {nullable:false})
    @Type(() => PokemonMoveMethodsCreateInput)
    create!: Identity<PokemonMoveMethodsCreateInput>;

    @Field(() => PokemonMoveMethodsUpdateInput, {nullable:false})
    @Type(() => PokemonMoveMethodsUpdateInput)
    update!: Identity<PokemonMoveMethodsUpdateInput>;
}
