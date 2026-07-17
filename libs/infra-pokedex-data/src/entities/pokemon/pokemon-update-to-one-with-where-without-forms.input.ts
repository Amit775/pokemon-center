import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonWhereInput } from './pokemon-where.input';
import { Type } from 'class-transformer';
import { PokemonUpdateWithoutFormsInput } from './pokemon-update-without-forms.input';

@InputType()
export class PokemonUpdateToOneWithWhereWithoutFormsInput {

    @Field(() => PokemonWhereInput, {nullable:true})
    @Type(() => PokemonWhereInput)
    where?: PokemonWhereInput;

    @Field(() => PokemonUpdateWithoutFormsInput, {nullable:false})
    @Type(() => PokemonUpdateWithoutFormsInput)
    data!: PokemonUpdateWithoutFormsInput;
}
