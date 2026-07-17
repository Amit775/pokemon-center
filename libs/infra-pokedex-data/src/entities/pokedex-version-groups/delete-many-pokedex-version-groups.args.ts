import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokedexVersionGroupsWhereInput } from './pokedex-version-groups-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyPokedexVersionGroupsArgs {

    @Field(() => PokedexVersionGroupsWhereInput, {nullable:true})
    @Type(() => PokedexVersionGroupsWhereInput)
    where?: PokedexVersionGroupsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
