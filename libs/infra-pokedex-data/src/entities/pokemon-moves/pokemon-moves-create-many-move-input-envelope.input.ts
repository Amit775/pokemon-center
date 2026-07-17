import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonMovesCreateManyMoveInput } from './pokemon-moves-create-many-move.input';
import { Type } from 'class-transformer';

@InputType()
export class PokemonMovesCreateManyMoveInputEnvelope {

    @Field(() => [PokemonMovesCreateManyMoveInput], {nullable:false})
    @Type(() => PokemonMovesCreateManyMoveInput)
    data!: Array<PokemonMovesCreateManyMoveInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
