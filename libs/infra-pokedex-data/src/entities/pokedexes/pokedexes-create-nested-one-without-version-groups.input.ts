import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokedexesCreateWithoutVersionGroupsInput } from './pokedexes-create-without-version-groups.input';
import { Type } from 'class-transformer';
import { PokedexesCreateOrConnectWithoutVersionGroupsInput } from './pokedexes-create-or-connect-without-version-groups.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokedexesWhereUniqueInput } from './pokedexes-where-unique.input';

@InputType()
export class PokedexesCreateNestedOneWithoutVersionGroupsInput {

    @Field(() => PokedexesCreateWithoutVersionGroupsInput, {nullable:true})
    @Type(() => PokedexesCreateWithoutVersionGroupsInput)
    create?: Identity<PokedexesCreateWithoutVersionGroupsInput>;

    @Field(() => PokedexesCreateOrConnectWithoutVersionGroupsInput, {nullable:true})
    @Type(() => PokedexesCreateOrConnectWithoutVersionGroupsInput)
    connectOrCreate?: Identity<PokedexesCreateOrConnectWithoutVersionGroupsInput>;

    @Field(() => PokedexesWhereUniqueInput, {nullable:true})
    @Type(() => PokedexesWhereUniqueInput)
    connect?: Prisma.AtLeast<PokedexesWhereUniqueInput, 'id'>;
}
