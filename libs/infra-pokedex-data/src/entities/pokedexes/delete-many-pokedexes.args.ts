import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokedexesWhereInput } from './pokedexes-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyPokedexesArgs {

    @Field(() => PokedexesWhereInput, {nullable:true})
    @Type(() => PokedexesWhereInput)
    where?: Identity<PokedexesWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
