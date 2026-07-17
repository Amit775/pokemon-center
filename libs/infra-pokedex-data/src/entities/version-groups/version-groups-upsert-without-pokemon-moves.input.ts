import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupsUpdateWithoutPokemonMovesInput } from './version-groups-update-without-pokemon-moves.input';
import { Type } from 'class-transformer';
import { VersionGroupsCreateWithoutPokemonMovesInput } from './version-groups-create-without-pokemon-moves.input';
import { VersionGroupsWhereInput } from './version-groups-where.input';

@InputType()
export class VersionGroupsUpsertWithoutPokemonMovesInput {

    @Field(() => VersionGroupsUpdateWithoutPokemonMovesInput, {nullable:false})
    @Type(() => VersionGroupsUpdateWithoutPokemonMovesInput)
    update!: VersionGroupsUpdateWithoutPokemonMovesInput;

    @Field(() => VersionGroupsCreateWithoutPokemonMovesInput, {nullable:false})
    @Type(() => VersionGroupsCreateWithoutPokemonMovesInput)
    create!: VersionGroupsCreateWithoutPokemonMovesInput;

    @Field(() => VersionGroupsWhereInput, {nullable:true})
    @Type(() => VersionGroupsWhereInput)
    where?: VersionGroupsWhereInput;
}
