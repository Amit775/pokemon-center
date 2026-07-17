import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokedexesUpdateManyMutationInput } from './pokedexes-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PokedexesWhereInput } from './pokedexes-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyPokedexesArgs {

    @Field(() => PokedexesUpdateManyMutationInput, {nullable:false})
    @Type(() => PokedexesUpdateManyMutationInput)
    data!: PokedexesUpdateManyMutationInput;

    @Field(() => PokedexesWhereInput, {nullable:true})
    @Type(() => PokedexesWhereInput)
    where?: PokedexesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
