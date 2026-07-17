import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokedexVersionGroupsWhereUniqueInput } from './pokedex-version-groups-where-unique.input';
import { Type } from 'class-transformer';
import { PokedexVersionGroupsUpdateWithoutPokedexInput } from './pokedex-version-groups-update-without-pokedex.input';

@InputType()
export class PokedexVersionGroupsUpdateWithWhereUniqueWithoutPokedexInput {

    @Field(() => PokedexVersionGroupsWhereUniqueInput, {nullable:false})
    @Type(() => PokedexVersionGroupsWhereUniqueInput)
    where!: Prisma.AtLeast<PokedexVersionGroupsWhereUniqueInput, 'pokedex_id'>;

    @Field(() => PokedexVersionGroupsUpdateWithoutPokedexInput, {nullable:false})
    @Type(() => PokedexVersionGroupsUpdateWithoutPokedexInput)
    data!: PokedexVersionGroupsUpdateWithoutPokedexInput;
}
