import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokedexesUpdateManyMutationInput } from './pokedexes-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PokedexesWhereInput } from './pokedexes-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyPokedexesArgs {

    @Field(() => PokedexesUpdateManyMutationInput, {nullable:false})
    @Type(() => PokedexesUpdateManyMutationInput)
    data!: Identity<PokedexesUpdateManyMutationInput>;

    @Field(() => PokedexesWhereInput, {nullable:true})
    @Type(() => PokedexesWhereInput)
    where?: Identity<PokedexesWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
