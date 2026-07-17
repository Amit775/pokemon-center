import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokedexesCreateInput } from './pokedexes-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePokedexesArgs {

    @Field(() => PokedexesCreateInput, {nullable:false})
    @Type(() => PokedexesCreateInput)
    data!: PokedexesCreateInput;
}
