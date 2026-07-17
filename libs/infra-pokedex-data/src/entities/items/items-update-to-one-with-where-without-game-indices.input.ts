import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsWhereInput } from './items-where.input';
import { Type } from 'class-transformer';
import { ItemsUpdateWithoutGameIndicesInput } from './items-update-without-game-indices.input';

@InputType()
export class ItemsUpdateToOneWithWhereWithoutGameIndicesInput {

    @Field(() => ItemsWhereInput, {nullable:true})
    @Type(() => ItemsWhereInput)
    where?: ItemsWhereInput;

    @Field(() => ItemsUpdateWithoutGameIndicesInput, {nullable:false})
    @Type(() => ItemsUpdateWithoutGameIndicesInput)
    data!: ItemsUpdateWithoutGameIndicesInput;
}
