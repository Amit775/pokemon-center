import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemGameIndicesCreateManyGenerationInput } from './item-game-indices-create-many-generation.input';
import { Type } from 'class-transformer';

@InputType()
export class ItemGameIndicesCreateManyGenerationInputEnvelope {

    @Field(() => [ItemGameIndicesCreateManyGenerationInput], {nullable:false})
    @Type(() => ItemGameIndicesCreateManyGenerationInput)
    data!: Array<ItemGameIndicesCreateManyGenerationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
