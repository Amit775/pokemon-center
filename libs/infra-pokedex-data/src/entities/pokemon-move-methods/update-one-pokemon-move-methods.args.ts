import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonMoveMethodsUpdateInput } from './pokemon-move-methods-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonMoveMethodsWhereUniqueInput } from './pokemon-move-methods-where-unique.input';

@ArgsType()
export class UpdateOnePokemonMoveMethodsArgs {

    @Field(() => PokemonMoveMethodsUpdateInput, {nullable:false})
    @Type(() => PokemonMoveMethodsUpdateInput)
    data!: Identity<PokemonMoveMethodsUpdateInput>;

    @Field(() => PokemonMoveMethodsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonMoveMethodsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonMoveMethodsWhereUniqueInput, 'id'>;
}
