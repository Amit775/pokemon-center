import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { AbilitiesWhereInput } from './abilities-where.input';
import { Type } from 'class-transformer';
import { AbilitiesUpdateWithoutPokemonAbilitiesInput } from './abilities-update-without-pokemon-abilities.input';

@InputType()
export class AbilitiesUpdateToOneWithWhereWithoutPokemonAbilitiesInput {

    @Field(() => AbilitiesWhereInput, {nullable:true})
    @Type(() => AbilitiesWhereInput)
    where?: Identity<AbilitiesWhereInput>;

    @Field(() => AbilitiesUpdateWithoutPokemonAbilitiesInput, {nullable:false})
    @Type(() => AbilitiesUpdateWithoutPokemonAbilitiesInput)
    data!: Identity<AbilitiesUpdateWithoutPokemonAbilitiesInput>;
}
