import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonMovesCreateManyMoveMethodInput } from './pokemon-moves-create-many-move-method.input';
import { Type } from 'class-transformer';

@InputType()
export class PokemonMovesCreateManyMoveMethodInputEnvelope {

    @Field(() => [PokemonMovesCreateManyMoveMethodInput], {nullable:false})
    @Type(() => PokemonMovesCreateManyMoveMethodInput)
    data!: Array<PokemonMovesCreateManyMoveMethodInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
