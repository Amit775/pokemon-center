import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { AbilitiesUpdateWithoutPokemonAbilitiesInput } from './abilities-update-without-pokemon-abilities.input';
import { Type } from 'class-transformer';
import { AbilitiesCreateWithoutPokemonAbilitiesInput } from './abilities-create-without-pokemon-abilities.input';
import { AbilitiesWhereInput } from './abilities-where.input';

@InputType()
export class AbilitiesUpsertWithoutPokemonAbilitiesInput {

    @Field(() => AbilitiesUpdateWithoutPokemonAbilitiesInput, {nullable:false})
    @Type(() => AbilitiesUpdateWithoutPokemonAbilitiesInput)
    update!: Identity<AbilitiesUpdateWithoutPokemonAbilitiesInput>;

    @Field(() => AbilitiesCreateWithoutPokemonAbilitiesInput, {nullable:false})
    @Type(() => AbilitiesCreateWithoutPokemonAbilitiesInput)
    create!: Identity<AbilitiesCreateWithoutPokemonAbilitiesInput>;

    @Field(() => AbilitiesWhereInput, {nullable:true})
    @Type(() => AbilitiesWhereInput)
    where?: Identity<AbilitiesWhereInput>;
}
