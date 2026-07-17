import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionsUpdateWithoutPokedexesInput } from './regions-update-without-pokedexes.input';
import { Type } from 'class-transformer';
import { RegionsCreateWithoutPokedexesInput } from './regions-create-without-pokedexes.input';
import { RegionsWhereInput } from './regions-where.input';

@InputType()
export class RegionsUpsertWithoutPokedexesInput {

    @Field(() => RegionsUpdateWithoutPokedexesInput, {nullable:false})
    @Type(() => RegionsUpdateWithoutPokedexesInput)
    update!: RegionsUpdateWithoutPokedexesInput;

    @Field(() => RegionsCreateWithoutPokedexesInput, {nullable:false})
    @Type(() => RegionsCreateWithoutPokedexesInput)
    create!: RegionsCreateWithoutPokedexesInput;

    @Field(() => RegionsWhereInput, {nullable:true})
    @Type(() => RegionsWhereInput)
    where?: RegionsWhereInput;
}
