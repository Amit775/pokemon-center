import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokedexVersionGroupsUncheckedUpdateManyInput } from './pokedex-version-groups-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { PokedexVersionGroupsWhereInput } from './pokedex-version-groups-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyPokedexVersionGroupsArgs {

    @Field(() => PokedexVersionGroupsUncheckedUpdateManyInput, {nullable:false})
    @Type(() => PokedexVersionGroupsUncheckedUpdateManyInput)
    data!: Identity<PokedexVersionGroupsUncheckedUpdateManyInput>;

    @Field(() => PokedexVersionGroupsWhereInput, {nullable:true})
    @Type(() => PokedexVersionGroupsWhereInput)
    where?: Identity<PokedexVersionGroupsWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
