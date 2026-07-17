import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonWhereInput } from './pokemon-where.input';
import { Type } from 'class-transformer';
import { PokemonUpdateWithoutItemsInput } from './pokemon-update-without-items.input';

@InputType()
export class PokemonUpdateToOneWithWhereWithoutItemsInput {

    @Field(() => PokemonWhereInput, {nullable:true})
    @Type(() => PokemonWhereInput)
    where?: PokemonWhereInput;

    @Field(() => PokemonUpdateWithoutItemsInput, {nullable:false})
    @Type(() => PokemonUpdateWithoutItemsInput)
    data!: PokemonUpdateWithoutItemsInput;
}
