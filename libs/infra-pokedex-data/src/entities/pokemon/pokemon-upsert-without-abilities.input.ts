import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonUpdateWithoutAbilitiesInput } from './pokemon-update-without-abilities.input';
import { Type } from 'class-transformer';
import { PokemonCreateWithoutAbilitiesInput } from './pokemon-create-without-abilities.input';
import { PokemonWhereInput } from './pokemon-where.input';

@InputType()
export class PokemonUpsertWithoutAbilitiesInput {

    @Field(() => PokemonUpdateWithoutAbilitiesInput, {nullable:false})
    @Type(() => PokemonUpdateWithoutAbilitiesInput)
    update!: Identity<PokemonUpdateWithoutAbilitiesInput>;

    @Field(() => PokemonCreateWithoutAbilitiesInput, {nullable:false})
    @Type(() => PokemonCreateWithoutAbilitiesInput)
    create!: Identity<PokemonCreateWithoutAbilitiesInput>;

    @Field(() => PokemonWhereInput, {nullable:true})
    @Type(() => PokemonWhereInput)
    where?: Identity<PokemonWhereInput>;
}
