import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonAbilitiesCreateManyInput } from './pokemon-abilities-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPokemonAbilitiesArgs {

    @Field(() => [PokemonAbilitiesCreateManyInput], {nullable:false})
    @Type(() => PokemonAbilitiesCreateManyInput)
    data!: Array<PokemonAbilitiesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
