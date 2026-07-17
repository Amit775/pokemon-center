import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonWhereInput } from './pokemon-where.input';
import { Type } from 'class-transformer';
import { PokemonUpdateWithoutTypesInput } from './pokemon-update-without-types.input';

@InputType()
export class PokemonUpdateToOneWithWhereWithoutTypesInput {

    @Field(() => PokemonWhereInput, {nullable:true})
    @Type(() => PokemonWhereInput)
    where?: PokemonWhereInput;

    @Field(() => PokemonUpdateWithoutTypesInput, {nullable:false})
    @Type(() => PokemonUpdateWithoutTypesInput)
    data!: PokemonUpdateWithoutTypesInput;
}
