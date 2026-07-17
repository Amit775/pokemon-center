import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenerationsWhereInput } from './generations-where.input';
import { Type } from 'class-transformer';
import { GenerationsUpdateWithoutTypeGameIndicesInput } from './generations-update-without-type-game-indices.input';

@InputType()
export class GenerationsUpdateToOneWithWhereWithoutTypeGameIndicesInput {

    @Field(() => GenerationsWhereInput, {nullable:true})
    @Type(() => GenerationsWhereInput)
    where?: GenerationsWhereInput;

    @Field(() => GenerationsUpdateWithoutTypeGameIndicesInput, {nullable:false})
    @Type(() => GenerationsUpdateWithoutTypeGameIndicesInput)
    data!: GenerationsUpdateWithoutTypeGameIndicesInput;
}
