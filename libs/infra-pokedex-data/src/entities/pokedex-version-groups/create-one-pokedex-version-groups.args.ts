import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokedexVersionGroupsCreateInput } from './pokedex-version-groups-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePokedexVersionGroupsArgs {

    @Field(() => PokedexVersionGroupsCreateInput, {nullable:false})
    @Type(() => PokedexVersionGroupsCreateInput)
    data!: Identity<PokedexVersionGroupsCreateInput>;
}
