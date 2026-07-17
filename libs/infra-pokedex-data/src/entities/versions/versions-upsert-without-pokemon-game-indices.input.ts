import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionsUpdateWithoutPokemonGameIndicesInput } from './versions-update-without-pokemon-game-indices.input';
import { Type } from 'class-transformer';
import { VersionsCreateWithoutPokemonGameIndicesInput } from './versions-create-without-pokemon-game-indices.input';
import { VersionsWhereInput } from './versions-where.input';

@InputType()
export class VersionsUpsertWithoutPokemonGameIndicesInput {

    @Field(() => VersionsUpdateWithoutPokemonGameIndicesInput, {nullable:false})
    @Type(() => VersionsUpdateWithoutPokemonGameIndicesInput)
    update!: Identity<VersionsUpdateWithoutPokemonGameIndicesInput>;

    @Field(() => VersionsCreateWithoutPokemonGameIndicesInput, {nullable:false})
    @Type(() => VersionsCreateWithoutPokemonGameIndicesInput)
    create!: Identity<VersionsCreateWithoutPokemonGameIndicesInput>;

    @Field(() => VersionsWhereInput, {nullable:true})
    @Type(() => VersionsWhereInput)
    where?: Identity<VersionsWhereInput>;
}
