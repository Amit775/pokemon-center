import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionsWhereInput } from './versions-where.input';
import { Type } from 'class-transformer';
import { VersionsUpdateWithoutPokemonGameIndicesInput } from './versions-update-without-pokemon-game-indices.input';

@InputType()
export class VersionsUpdateToOneWithWhereWithoutPokemonGameIndicesInput {

    @Field(() => VersionsWhereInput, {nullable:true})
    @Type(() => VersionsWhereInput)
    where?: Identity<VersionsWhereInput>;

    @Field(() => VersionsUpdateWithoutPokemonGameIndicesInput, {nullable:false})
    @Type(() => VersionsUpdateWithoutPokemonGameIndicesInput)
    data!: Identity<VersionsUpdateWithoutPokemonGameIndicesInput>;
}
