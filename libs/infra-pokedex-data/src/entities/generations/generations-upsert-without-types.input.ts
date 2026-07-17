import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenerationsUpdateWithoutTypesInput } from './generations-update-without-types.input';
import { Type } from 'class-transformer';
import { GenerationsCreateWithoutTypesInput } from './generations-create-without-types.input';
import { GenerationsWhereInput } from './generations-where.input';

@InputType()
export class GenerationsUpsertWithoutTypesInput {

    @Field(() => GenerationsUpdateWithoutTypesInput, {nullable:false})
    @Type(() => GenerationsUpdateWithoutTypesInput)
    update!: GenerationsUpdateWithoutTypesInput;

    @Field(() => GenerationsCreateWithoutTypesInput, {nullable:false})
    @Type(() => GenerationsCreateWithoutTypesInput)
    create!: GenerationsCreateWithoutTypesInput;

    @Field(() => GenerationsWhereInput, {nullable:true})
    @Type(() => GenerationsWhereInput)
    where?: GenerationsWhereInput;
}
