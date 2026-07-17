import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesCreateManyGenerationInput } from './moves-create-many-generation.input';
import { Type } from 'class-transformer';

@InputType()
export class MovesCreateManyGenerationInputEnvelope {

    @Field(() => [MovesCreateManyGenerationInput], {nullable:false})
    @Type(() => MovesCreateManyGenerationInput)
    data!: Array<MovesCreateManyGenerationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
