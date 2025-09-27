import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PokemonShapesCount {

    @Field(() => Int, {nullable:false})
    species?: number;
}
