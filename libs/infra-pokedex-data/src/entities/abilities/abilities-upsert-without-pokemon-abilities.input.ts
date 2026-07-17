import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AbilitiesUpdateWithoutPokemonAbilitiesInput } from './abilities-update-without-pokemon-abilities.input';
import { Type } from 'class-transformer';
import { AbilitiesCreateWithoutPokemonAbilitiesInput } from './abilities-create-without-pokemon-abilities.input';
import { AbilitiesWhereInput } from './abilities-where.input';

@InputType()
export class AbilitiesUpsertWithoutPokemonAbilitiesInput {

    @Field(() => AbilitiesUpdateWithoutPokemonAbilitiesInput, {nullable:false})
    @Type(() => AbilitiesUpdateWithoutPokemonAbilitiesInput)
    update!: AbilitiesUpdateWithoutPokemonAbilitiesInput;

    @Field(() => AbilitiesCreateWithoutPokemonAbilitiesInput, {nullable:false})
    @Type(() => AbilitiesCreateWithoutPokemonAbilitiesInput)
    create!: AbilitiesCreateWithoutPokemonAbilitiesInput;

    @Field(() => AbilitiesWhereInput, {nullable:true})
    @Type(() => AbilitiesWhereInput)
    where?: AbilitiesWhereInput;
}
