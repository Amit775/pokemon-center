import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupsWhereInput } from './version-groups-where.input';
import { Type } from 'class-transformer';
import { VersionGroupsUpdateWithoutPokemonMovesInput } from './version-groups-update-without-pokemon-moves.input';

@InputType()
export class VersionGroupsUpdateToOneWithWhereWithoutPokemonMovesInput {

    @Field(() => VersionGroupsWhereInput, {nullable:true})
    @Type(() => VersionGroupsWhereInput)
    where?: Identity<VersionGroupsWhereInput>;

    @Field(() => VersionGroupsUpdateWithoutPokemonMovesInput, {nullable:false})
    @Type(() => VersionGroupsUpdateWithoutPokemonMovesInput)
    data!: Identity<VersionGroupsUpdateWithoutPokemonMovesInput>;
}
