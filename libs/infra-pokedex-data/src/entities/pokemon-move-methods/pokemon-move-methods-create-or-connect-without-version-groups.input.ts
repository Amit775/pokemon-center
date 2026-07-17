import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonMoveMethodsWhereUniqueInput } from './pokemon-move-methods-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonMoveMethodsCreateWithoutVersionGroupsInput } from './pokemon-move-methods-create-without-version-groups.input';

@InputType()
export class PokemonMoveMethodsCreateOrConnectWithoutVersionGroupsInput {

    @Field(() => PokemonMoveMethodsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonMoveMethodsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonMoveMethodsWhereUniqueInput, 'id'>;

    @Field(() => PokemonMoveMethodsCreateWithoutVersionGroupsInput, {nullable:false})
    @Type(() => PokemonMoveMethodsCreateWithoutVersionGroupsInput)
    create!: Identity<PokemonMoveMethodsCreateWithoutVersionGroupsInput>;
}
