import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonMoveMethodsWhereUniqueInput } from './pokemon-move-methods-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonMoveMethodsCreateWithoutVersionGroupsInput } from './pokemon-move-methods-create-without-version-groups.input';

@InputType()
export class PokemonMoveMethodsCreateOrConnectWithoutVersionGroupsInput {

    @Field(() => PokemonMoveMethodsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonMoveMethodsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonMoveMethodsWhereUniqueInput, 'id'>;

    @Field(() => PokemonMoveMethodsCreateWithoutVersionGroupsInput, {nullable:false})
    @Type(() => PokemonMoveMethodsCreateWithoutVersionGroupsInput)
    create!: PokemonMoveMethodsCreateWithoutVersionGroupsInput;
}
