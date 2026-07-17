import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionsWhereInput } from './versions-where.input';
import { Type } from 'class-transformer';
import { VersionsUpdateWithoutPokemonItemsInput } from './versions-update-without-pokemon-items.input';

@InputType()
export class VersionsUpdateToOneWithWhereWithoutPokemonItemsInput {

    @Field(() => VersionsWhereInput, {nullable:true})
    @Type(() => VersionsWhereInput)
    where?: Identity<VersionsWhereInput>;

    @Field(() => VersionsUpdateWithoutPokemonItemsInput, {nullable:false})
    @Type(() => VersionsUpdateWithoutPokemonItemsInput)
    data!: Identity<VersionsUpdateWithoutPokemonItemsInput>;
}
