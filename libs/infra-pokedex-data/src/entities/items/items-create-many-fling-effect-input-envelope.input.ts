import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsCreateManyFlingEffectInput } from './items-create-many-fling-effect.input';
import { Type } from 'class-transformer';

@InputType()
export class ItemsCreateManyFlingEffectInputEnvelope {

    @Field(() => [ItemsCreateManyFlingEffectInput], {nullable:false})
    @Type(() => ItemsCreateManyFlingEffectInput)
    data!: Array<ItemsCreateManyFlingEffectInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
