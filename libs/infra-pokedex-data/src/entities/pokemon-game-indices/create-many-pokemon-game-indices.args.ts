import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonGameIndicesCreateManyInput } from './pokemon-game-indices-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPokemonGameIndicesArgs {

    @Field(() => [PokemonGameIndicesCreateManyInput], {nullable:false})
    @Type(() => PokemonGameIndicesCreateManyInput)
    data!: Array<PokemonGameIndicesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
