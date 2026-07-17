import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonUpdateWithoutAbilitiesInput } from './pokemon-update-without-abilities.input';
import { Type } from 'class-transformer';
import { PokemonCreateWithoutAbilitiesInput } from './pokemon-create-without-abilities.input';
import { PokemonWhereInput } from './pokemon-where.input';

@InputType()
export class PokemonUpsertWithoutAbilitiesInput {

    @Field(() => PokemonUpdateWithoutAbilitiesInput, {nullable:false})
    @Type(() => PokemonUpdateWithoutAbilitiesInput)
    update!: PokemonUpdateWithoutAbilitiesInput;

    @Field(() => PokemonCreateWithoutAbilitiesInput, {nullable:false})
    @Type(() => PokemonCreateWithoutAbilitiesInput)
    create!: PokemonCreateWithoutAbilitiesInput;

    @Field(() => PokemonWhereInput, {nullable:true})
    @Type(() => PokemonWhereInput)
    where?: PokemonWhereInput;
}
