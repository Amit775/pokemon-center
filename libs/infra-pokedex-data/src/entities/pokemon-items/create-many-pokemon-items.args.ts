import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonItemsCreateManyInput } from './pokemon-items-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPokemonItemsArgs {

    @Field(() => [PokemonItemsCreateManyInput], {nullable:false})
    @Type(() => PokemonItemsCreateManyInput)
    data!: Array<PokemonItemsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
