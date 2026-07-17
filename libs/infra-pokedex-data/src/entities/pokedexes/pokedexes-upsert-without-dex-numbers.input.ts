import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokedexesUpdateWithoutDexNumbersInput } from './pokedexes-update-without-dex-numbers.input';
import { Type } from 'class-transformer';
import { PokedexesCreateWithoutDexNumbersInput } from './pokedexes-create-without-dex-numbers.input';
import { PokedexesWhereInput } from './pokedexes-where.input';

@InputType()
export class PokedexesUpsertWithoutDexNumbersInput {

    @Field(() => PokedexesUpdateWithoutDexNumbersInput, {nullable:false})
    @Type(() => PokedexesUpdateWithoutDexNumbersInput)
    update!: Identity<PokedexesUpdateWithoutDexNumbersInput>;

    @Field(() => PokedexesCreateWithoutDexNumbersInput, {nullable:false})
    @Type(() => PokedexesCreateWithoutDexNumbersInput)
    create!: Identity<PokedexesCreateWithoutDexNumbersInput>;

    @Field(() => PokedexesWhereInput, {nullable:true})
    @Type(() => PokedexesWhereInput)
    where?: Identity<PokedexesWhereInput>;
}
