import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonFormGenerationsCreateManyInput } from './pokemon-form-generations-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPokemonFormGenerationsArgs {

    @Field(() => [PokemonFormGenerationsCreateManyInput], {nullable:false})
    @Type(() => PokemonFormGenerationsCreateManyInput)
    data!: Array<PokemonFormGenerationsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
