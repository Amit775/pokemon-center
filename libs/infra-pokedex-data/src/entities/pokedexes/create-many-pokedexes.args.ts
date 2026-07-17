import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokedexesCreateManyInput } from './pokedexes-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPokedexesArgs {

    @Field(() => [PokedexesCreateManyInput], {nullable:false})
    @Type(() => PokedexesCreateManyInput)
    data!: Array<PokedexesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
