import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenerationsWhereInput } from './generations-where.input';
import { Type } from 'class-transformer';
import { GenerationsUpdateWithoutItemGameIndicesInput } from './generations-update-without-item-game-indices.input';

@InputType()
export class GenerationsUpdateToOneWithWhereWithoutItemGameIndicesInput {

    @Field(() => GenerationsWhereInput, {nullable:true})
    @Type(() => GenerationsWhereInput)
    where?: GenerationsWhereInput;

    @Field(() => GenerationsUpdateWithoutItemGameIndicesInput, {nullable:false})
    @Type(() => GenerationsUpdateWithoutItemGameIndicesInput)
    data!: GenerationsUpdateWithoutItemGameIndicesInput;
}
