import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokedexVersionGroupsWhereUniqueInput } from './pokedex-version-groups-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokedexVersionGroupsCreateWithoutPokedexInput } from './pokedex-version-groups-create-without-pokedex.input';

@InputType()
export class PokedexVersionGroupsCreateOrConnectWithoutPokedexInput {

    @Field(() => PokedexVersionGroupsWhereUniqueInput, {nullable:false})
    @Type(() => PokedexVersionGroupsWhereUniqueInput)
    where!: Prisma.AtLeast<PokedexVersionGroupsWhereUniqueInput, 'pokedex_id'>;

    @Field(() => PokedexVersionGroupsCreateWithoutPokedexInput, {nullable:false})
    @Type(() => PokedexVersionGroupsCreateWithoutPokedexInput)
    create!: Identity<PokedexVersionGroupsCreateWithoutPokedexInput>;
}
