import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonMovesCreateManyVersionGroupInput } from './pokemon-moves-create-many-version-group.input';
import { Type } from 'class-transformer';

@InputType()
export class PokemonMovesCreateManyVersionGroupInputEnvelope {

    @Field(() => [PokemonMovesCreateManyVersionGroupInput], {nullable:false})
    @Type(() => PokemonMovesCreateManyVersionGroupInput)
    data!: Array<PokemonMovesCreateManyVersionGroupInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
