import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokedexesWhereUniqueInput } from './pokedexes-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokedexesCreateWithoutVersionGroupsInput } from './pokedexes-create-without-version-groups.input';

@InputType()
export class PokedexesCreateOrConnectWithoutVersionGroupsInput {

    @Field(() => PokedexesWhereUniqueInput, {nullable:false})
    @Type(() => PokedexesWhereUniqueInput)
    where!: Prisma.AtLeast<PokedexesWhereUniqueInput, 'id'>;

    @Field(() => PokedexesCreateWithoutVersionGroupsInput, {nullable:false})
    @Type(() => PokedexesCreateWithoutVersionGroupsInput)
    create!: Identity<PokedexesCreateWithoutVersionGroupsInput>;
}
