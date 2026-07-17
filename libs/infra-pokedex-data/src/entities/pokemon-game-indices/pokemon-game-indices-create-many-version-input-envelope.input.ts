import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonGameIndicesCreateManyVersionInput } from './pokemon-game-indices-create-many-version.input';
import { Type } from 'class-transformer';

@InputType()
export class PokemonGameIndicesCreateManyVersionInputEnvelope {

    @Field(() => [PokemonGameIndicesCreateManyVersionInput], {nullable:false})
    @Type(() => PokemonGameIndicesCreateManyVersionInput)
    data!: Array<PokemonGameIndicesCreateManyVersionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
