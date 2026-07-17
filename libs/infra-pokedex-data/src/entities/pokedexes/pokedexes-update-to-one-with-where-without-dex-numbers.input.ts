import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokedexesWhereInput } from './pokedexes-where.input';
import { Type } from 'class-transformer';
import { PokedexesUpdateWithoutDexNumbersInput } from './pokedexes-update-without-dex-numbers.input';

@InputType()
export class PokedexesUpdateToOneWithWhereWithoutDexNumbersInput {

    @Field(() => PokedexesWhereInput, {nullable:true})
    @Type(() => PokedexesWhereInput)
    where?: Identity<PokedexesWhereInput>;

    @Field(() => PokedexesUpdateWithoutDexNumbersInput, {nullable:false})
    @Type(() => PokedexesUpdateWithoutDexNumbersInput)
    data!: Identity<PokedexesUpdateWithoutDexNumbersInput>;
}
