import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenerationsWhereInput } from './generations-where.input';
import { Type } from 'class-transformer';
import { GenerationsUpdateWithoutTypesInput } from './generations-update-without-types.input';

@InputType()
export class GenerationsUpdateToOneWithWhereWithoutTypesInput {

    @Field(() => GenerationsWhereInput, {nullable:true})
    @Type(() => GenerationsWhereInput)
    where?: GenerationsWhereInput;

    @Field(() => GenerationsUpdateWithoutTypesInput, {nullable:false})
    @Type(() => GenerationsUpdateWithoutTypesInput)
    data!: GenerationsUpdateWithoutTypesInput;
}
