import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokedexVersionGroupsUpdateInput } from './pokedex-version-groups-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PokedexVersionGroupsWhereUniqueInput } from './pokedex-version-groups-where-unique.input';

@ArgsType()
export class UpdateOnePokedexVersionGroupsArgs {

    @Field(() => PokedexVersionGroupsUpdateInput, {nullable:false})
    @Type(() => PokedexVersionGroupsUpdateInput)
    data!: PokedexVersionGroupsUpdateInput;

    @Field(() => PokedexVersionGroupsWhereUniqueInput, {nullable:false})
    @Type(() => PokedexVersionGroupsWhereUniqueInput)
    where!: Prisma.AtLeast<PokedexVersionGroupsWhereUniqueInput, 'pokedex_id'>;
}
