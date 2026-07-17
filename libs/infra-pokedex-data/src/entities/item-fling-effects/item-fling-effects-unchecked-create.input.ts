import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ItemsUncheckedCreateNestedManyWithoutFlingEffectInput } from '../items/items-unchecked-create-nested-many-without-fling-effect.input';

@InputType()
export class ItemFlingEffectsUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => ItemsUncheckedCreateNestedManyWithoutFlingEffectInput, {nullable:true})
    items?: ItemsUncheckedCreateNestedManyWithoutFlingEffectInput;
}
