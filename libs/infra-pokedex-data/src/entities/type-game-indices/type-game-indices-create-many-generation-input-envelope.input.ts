import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypeGameIndicesCreateManyGenerationInput } from './type-game-indices-create-many-generation.input';
import { Type } from 'class-transformer';

@InputType()
export class TypeGameIndicesCreateManyGenerationInputEnvelope {

    @Field(() => [TypeGameIndicesCreateManyGenerationInput], {nullable:false})
    @Type(() => TypeGameIndicesCreateManyGenerationInput)
    data!: Array<TypeGameIndicesCreateManyGenerationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
