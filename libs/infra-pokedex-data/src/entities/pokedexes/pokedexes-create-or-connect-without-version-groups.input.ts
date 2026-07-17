import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokedexesWhereUniqueInput } from './pokedexes-where-unique.input';
import { Type } from 'class-transformer';
import { PokedexesCreateWithoutVersionGroupsInput } from './pokedexes-create-without-version-groups.input';

@InputType()
export class PokedexesCreateOrConnectWithoutVersionGroupsInput {

    @Field(() => PokedexesWhereUniqueInput, {nullable:false})
    @Type(() => PokedexesWhereUniqueInput)
    where!: Prisma.AtLeast<PokedexesWhereUniqueInput, 'id'>;

    @Field(() => PokedexesCreateWithoutVersionGroupsInput, {nullable:false})
    @Type(() => PokedexesCreateWithoutVersionGroupsInput)
    create!: PokedexesCreateWithoutVersionGroupsInput;
}
