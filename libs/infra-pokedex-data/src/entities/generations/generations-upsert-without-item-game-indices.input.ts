import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenerationsUpdateWithoutItemGameIndicesInput } from './generations-update-without-item-game-indices.input';
import { Type } from 'class-transformer';
import { GenerationsCreateWithoutItemGameIndicesInput } from './generations-create-without-item-game-indices.input';
import { GenerationsWhereInput } from './generations-where.input';

@InputType()
export class GenerationsUpsertWithoutItemGameIndicesInput {

    @Field(() => GenerationsUpdateWithoutItemGameIndicesInput, {nullable:false})
    @Type(() => GenerationsUpdateWithoutItemGameIndicesInput)
    update!: GenerationsUpdateWithoutItemGameIndicesInput;

    @Field(() => GenerationsCreateWithoutItemGameIndicesInput, {nullable:false})
    @Type(() => GenerationsCreateWithoutItemGameIndicesInput)
    create!: GenerationsCreateWithoutItemGameIndicesInput;

    @Field(() => GenerationsWhereInput, {nullable:true})
    @Type(() => GenerationsWhereInput)
    where?: GenerationsWhereInput;
}
