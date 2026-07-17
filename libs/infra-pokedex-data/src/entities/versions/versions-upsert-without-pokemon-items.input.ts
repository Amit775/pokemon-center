import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionsUpdateWithoutPokemonItemsInput } from './versions-update-without-pokemon-items.input';
import { Type } from 'class-transformer';
import { VersionsCreateWithoutPokemonItemsInput } from './versions-create-without-pokemon-items.input';
import { VersionsWhereInput } from './versions-where.input';

@InputType()
export class VersionsUpsertWithoutPokemonItemsInput {

    @Field(() => VersionsUpdateWithoutPokemonItemsInput, {nullable:false})
    @Type(() => VersionsUpdateWithoutPokemonItemsInput)
    update!: Identity<VersionsUpdateWithoutPokemonItemsInput>;

    @Field(() => VersionsCreateWithoutPokemonItemsInput, {nullable:false})
    @Type(() => VersionsCreateWithoutPokemonItemsInput)
    create!: Identity<VersionsCreateWithoutPokemonItemsInput>;

    @Field(() => VersionsWhereInput, {nullable:true})
    @Type(() => VersionsWhereInput)
    where?: Identity<VersionsWhereInput>;
}
