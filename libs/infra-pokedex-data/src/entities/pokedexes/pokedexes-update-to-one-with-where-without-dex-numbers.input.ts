import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokedexesWhereInput } from './pokedexes-where.input';
import { Type } from 'class-transformer';
import { PokedexesUpdateWithoutDexNumbersInput } from './pokedexes-update-without-dex-numbers.input';

@InputType()
export class PokedexesUpdateToOneWithWhereWithoutDexNumbersInput {

    @Field(() => PokedexesWhereInput, {nullable:true})
    @Type(() => PokedexesWhereInput)
    where?: PokedexesWhereInput;

    @Field(() => PokedexesUpdateWithoutDexNumbersInput, {nullable:false})
    @Type(() => PokedexesUpdateWithoutDexNumbersInput)
    data!: PokedexesUpdateWithoutDexNumbersInput;
}
