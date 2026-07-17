import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokedexVersionGroupsWhereUniqueInput } from './pokedex-version-groups-where-unique.input';
import { Type } from 'class-transformer';
import { PokedexVersionGroupsUpdateWithoutVersionGroupInput } from './pokedex-version-groups-update-without-version-group.input';
import { PokedexVersionGroupsCreateWithoutVersionGroupInput } from './pokedex-version-groups-create-without-version-group.input';

@InputType()
export class PokedexVersionGroupsUpsertWithWhereUniqueWithoutVersionGroupInput {

    @Field(() => PokedexVersionGroupsWhereUniqueInput, {nullable:false})
    @Type(() => PokedexVersionGroupsWhereUniqueInput)
    where!: Prisma.AtLeast<PokedexVersionGroupsWhereUniqueInput, 'pokedex_id'>;

    @Field(() => PokedexVersionGroupsUpdateWithoutVersionGroupInput, {nullable:false})
    @Type(() => PokedexVersionGroupsUpdateWithoutVersionGroupInput)
    update!: PokedexVersionGroupsUpdateWithoutVersionGroupInput;

    @Field(() => PokedexVersionGroupsCreateWithoutVersionGroupInput, {nullable:false})
    @Type(() => PokedexVersionGroupsCreateWithoutVersionGroupInput)
    create!: PokedexVersionGroupsCreateWithoutVersionGroupInput;
}
