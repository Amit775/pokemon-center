import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonFormTypesCreateManyTypeInput } from './pokemon-form-types-create-many-type.input';
import { Type } from 'class-transformer';

@InputType()
export class PokemonFormTypesCreateManyTypeInputEnvelope {

    @Field(() => [PokemonFormTypesCreateManyTypeInput], {nullable:false})
    @Type(() => PokemonFormTypesCreateManyTypeInput)
    data!: Array<PokemonFormTypesCreateManyTypeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
