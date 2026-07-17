import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonItemsCreateManyItemInput } from './pokemon-items-create-many-item.input';
import { Type } from 'class-transformer';

@InputType()
export class PokemonItemsCreateManyItemInputEnvelope {

    @Field(() => [PokemonItemsCreateManyItemInput], {nullable:false})
    @Type(() => PokemonItemsCreateManyItemInput)
    data!: Array<PokemonItemsCreateManyItemInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
