import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonWhereInput } from './pokemon-where.input';
import { Type } from 'class-transformer';
import { PokemonUpdateWithoutAbilitiesInput } from './pokemon-update-without-abilities.input';

@InputType()
export class PokemonUpdateToOneWithWhereWithoutAbilitiesInput {

    @Field(() => PokemonWhereInput, {nullable:true})
    @Type(() => PokemonWhereInput)
    where?: Identity<PokemonWhereInput>;

    @Field(() => PokemonUpdateWithoutAbilitiesInput, {nullable:false})
    @Type(() => PokemonUpdateWithoutAbilitiesInput)
    data!: Identity<PokemonUpdateWithoutAbilitiesInput>;
}
