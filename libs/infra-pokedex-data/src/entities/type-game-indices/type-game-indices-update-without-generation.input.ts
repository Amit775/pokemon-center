import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypesUpdateOneRequiredWithoutGameIndicesNestedInput } from '../types/types-update-one-required-without-game-indices-nested.input';

@InputType()
export class TypeGameIndicesUpdateWithoutGenerationInput {

    @Field(() => Int, {nullable:true})
    game_index?: number;

    @Field(() => TypesUpdateOneRequiredWithoutGameIndicesNestedInput, {nullable:true})
    type?: Identity<TypesUpdateOneRequiredWithoutGameIndicesNestedInput>;
}
