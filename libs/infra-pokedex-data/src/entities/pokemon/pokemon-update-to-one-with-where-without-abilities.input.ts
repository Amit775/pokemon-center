import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonWhereInput } from './pokemon-where.input';
import { Type } from 'class-transformer';
import { PokemonUpdateWithoutAbilitiesInput } from './pokemon-update-without-abilities.input';

@InputType()
export class PokemonUpdateToOneWithWhereWithoutAbilitiesInput {

    @Field(() => PokemonWhereInput, {nullable:true})
    @Type(() => PokemonWhereInput)
    where?: PokemonWhereInput;

    @Field(() => PokemonUpdateWithoutAbilitiesInput, {nullable:false})
    @Type(() => PokemonUpdateWithoutAbilitiesInput)
    data!: PokemonUpdateWithoutAbilitiesInput;
}
