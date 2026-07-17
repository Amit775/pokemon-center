import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonItemsCreateManyVersionInput } from './pokemon-items-create-many-version.input';
import { Type } from 'class-transformer';

@InputType()
export class PokemonItemsCreateManyVersionInputEnvelope {

    @Field(() => [PokemonItemsCreateManyVersionInput], {nullable:false})
    @Type(() => PokemonItemsCreateManyVersionInput)
    data!: Array<PokemonItemsCreateManyVersionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
