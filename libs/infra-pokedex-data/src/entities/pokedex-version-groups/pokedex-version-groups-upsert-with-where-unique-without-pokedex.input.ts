import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokedexVersionGroupsWhereUniqueInput } from './pokedex-version-groups-where-unique.input';
import { Type } from 'class-transformer';
import { PokedexVersionGroupsUpdateWithoutPokedexInput } from './pokedex-version-groups-update-without-pokedex.input';
import { PokedexVersionGroupsCreateWithoutPokedexInput } from './pokedex-version-groups-create-without-pokedex.input';

@InputType()
export class PokedexVersionGroupsUpsertWithWhereUniqueWithoutPokedexInput {

    @Field(() => PokedexVersionGroupsWhereUniqueInput, {nullable:false})
    @Type(() => PokedexVersionGroupsWhereUniqueInput)
    where!: Prisma.AtLeast<PokedexVersionGroupsWhereUniqueInput, 'pokedex_id'>;

    @Field(() => PokedexVersionGroupsUpdateWithoutPokedexInput, {nullable:false})
    @Type(() => PokedexVersionGroupsUpdateWithoutPokedexInput)
    update!: PokedexVersionGroupsUpdateWithoutPokedexInput;

    @Field(() => PokedexVersionGroupsCreateWithoutPokedexInput, {nullable:false})
    @Type(() => PokedexVersionGroupsCreateWithoutPokedexInput)
    create!: PokedexVersionGroupsCreateWithoutPokedexInput;
}
