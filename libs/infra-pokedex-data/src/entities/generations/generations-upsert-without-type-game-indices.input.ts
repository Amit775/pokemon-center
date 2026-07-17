import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenerationsUpdateWithoutTypeGameIndicesInput } from './generations-update-without-type-game-indices.input';
import { Type } from 'class-transformer';
import { GenerationsCreateWithoutTypeGameIndicesInput } from './generations-create-without-type-game-indices.input';
import { GenerationsWhereInput } from './generations-where.input';

@InputType()
export class GenerationsUpsertWithoutTypeGameIndicesInput {

    @Field(() => GenerationsUpdateWithoutTypeGameIndicesInput, {nullable:false})
    @Type(() => GenerationsUpdateWithoutTypeGameIndicesInput)
    update!: GenerationsUpdateWithoutTypeGameIndicesInput;

    @Field(() => GenerationsCreateWithoutTypeGameIndicesInput, {nullable:false})
    @Type(() => GenerationsCreateWithoutTypeGameIndicesInput)
    create!: GenerationsCreateWithoutTypeGameIndicesInput;

    @Field(() => GenerationsWhereInput, {nullable:true})
    @Type(() => GenerationsWhereInput)
    where?: GenerationsWhereInput;
}
