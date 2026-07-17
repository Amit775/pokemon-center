import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonFormsCreateManyVersionGroupInput } from './pokemon-forms-create-many-version-group.input';
import { Type } from 'class-transformer';

@InputType()
export class PokemonFormsCreateManyVersionGroupInputEnvelope {

    @Field(() => [PokemonFormsCreateManyVersionGroupInput], {nullable:false})
    @Type(() => PokemonFormsCreateManyVersionGroupInput)
    data!: Array<PokemonFormsCreateManyVersionGroupInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
