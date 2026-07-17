import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokedexesCreateWithoutVersionGroupsInput } from './pokedexes-create-without-version-groups.input';
import { Type } from 'class-transformer';
import { PokedexesCreateOrConnectWithoutVersionGroupsInput } from './pokedexes-create-or-connect-without-version-groups.input';
import { Prisma } from '@prisma/client';
import { PokedexesWhereUniqueInput } from './pokedexes-where-unique.input';

@InputType()
export class PokedexesCreateNestedOneWithoutVersionGroupsInput {

    @Field(() => PokedexesCreateWithoutVersionGroupsInput, {nullable:true})
    @Type(() => PokedexesCreateWithoutVersionGroupsInput)
    create?: PokedexesCreateWithoutVersionGroupsInput;

    @Field(() => PokedexesCreateOrConnectWithoutVersionGroupsInput, {nullable:true})
    @Type(() => PokedexesCreateOrConnectWithoutVersionGroupsInput)
    connectOrCreate?: PokedexesCreateOrConnectWithoutVersionGroupsInput;

    @Field(() => PokedexesWhereUniqueInput, {nullable:true})
    @Type(() => PokedexesWhereUniqueInput)
    connect?: Prisma.AtLeast<PokedexesWhereUniqueInput, 'id'>;
}
