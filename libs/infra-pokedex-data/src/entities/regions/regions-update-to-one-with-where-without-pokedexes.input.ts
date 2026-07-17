import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionsWhereInput } from './regions-where.input';
import { Type } from 'class-transformer';
import { RegionsUpdateWithoutPokedexesInput } from './regions-update-without-pokedexes.input';

@InputType()
export class RegionsUpdateToOneWithWhereWithoutPokedexesInput {

    @Field(() => RegionsWhereInput, {nullable:true})
    @Type(() => RegionsWhereInput)
    where?: RegionsWhereInput;

    @Field(() => RegionsUpdateWithoutPokedexesInput, {nullable:false})
    @Type(() => RegionsUpdateWithoutPokedexesInput)
    data!: RegionsUpdateWithoutPokedexesInput;
}
