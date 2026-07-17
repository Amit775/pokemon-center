import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokedexVersionGroupsWhereUniqueInput } from './pokedex-version-groups-where-unique.input';
import { Type } from 'class-transformer';
import { PokedexVersionGroupsCreateInput } from './pokedex-version-groups-create.input';
import { PokedexVersionGroupsUpdateInput } from './pokedex-version-groups-update.input';

@ArgsType()
export class UpsertOnePokedexVersionGroupsArgs {

    @Field(() => PokedexVersionGroupsWhereUniqueInput, {nullable:false})
    @Type(() => PokedexVersionGroupsWhereUniqueInput)
    where!: Prisma.AtLeast<PokedexVersionGroupsWhereUniqueInput, 'pokedex_id'>;

    @Field(() => PokedexVersionGroupsCreateInput, {nullable:false})
    @Type(() => PokedexVersionGroupsCreateInput)
    create!: PokedexVersionGroupsCreateInput;

    @Field(() => PokedexVersionGroupsUpdateInput, {nullable:false})
    @Type(() => PokedexVersionGroupsUpdateInput)
    update!: PokedexVersionGroupsUpdateInput;
}
