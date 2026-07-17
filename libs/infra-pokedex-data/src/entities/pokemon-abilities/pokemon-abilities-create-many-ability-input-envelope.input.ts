import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonAbilitiesCreateManyAbilityInput } from './pokemon-abilities-create-many-ability.input';
import { Type } from 'class-transformer';

@InputType()
export class PokemonAbilitiesCreateManyAbilityInputEnvelope {

    @Field(() => [PokemonAbilitiesCreateManyAbilityInput], {nullable:false})
    @Type(() => PokemonAbilitiesCreateManyAbilityInput)
    data!: Array<PokemonAbilitiesCreateManyAbilityInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
