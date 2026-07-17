import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonTypesCreateManyTypeInput } from './pokemon-types-create-many-type.input';
import { Type } from 'class-transformer';

@InputType()
export class PokemonTypesCreateManyTypeInputEnvelope {

    @Field(() => [PokemonTypesCreateManyTypeInput], {nullable:false})
    @Type(() => PokemonTypesCreateManyTypeInput)
    data!: Array<PokemonTypesCreateManyTypeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
