import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonShapesUpdateManyMutationInput } from './pokemon-shapes-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PokemonShapesWhereInput } from './pokemon-shapes-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyPokemonShapesArgs {

    @Field(() => PokemonShapesUpdateManyMutationInput, {nullable:false})
    @Type(() => PokemonShapesUpdateManyMutationInput)
    data!: PokemonShapesUpdateManyMutationInput;

    @Field(() => PokemonShapesWhereInput, {nullable:true})
    @Type(() => PokemonShapesWhereInput)
    where?: PokemonShapesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
