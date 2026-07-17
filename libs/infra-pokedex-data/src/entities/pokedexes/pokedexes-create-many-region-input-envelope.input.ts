import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokedexesCreateManyRegionInput } from './pokedexes-create-many-region.input';
import { Type } from 'class-transformer';

@InputType()
export class PokedexesCreateManyRegionInputEnvelope {

    @Field(() => [PokedexesCreateManyRegionInput], {nullable:false})
    @Type(() => PokedexesCreateManyRegionInput)
    data!: Array<PokedexesCreateManyRegionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
