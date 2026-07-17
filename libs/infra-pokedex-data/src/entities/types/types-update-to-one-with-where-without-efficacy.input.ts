import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypesWhereInput } from './types-where.input';
import { Type } from 'class-transformer';
import { TypesUpdateWithoutEfficacyInput } from './types-update-without-efficacy.input';

@InputType()
export class TypesUpdateToOneWithWhereWithoutEfficacyInput {

    @Field(() => TypesWhereInput, {nullable:true})
    @Type(() => TypesWhereInput)
    where?: TypesWhereInput;

    @Field(() => TypesUpdateWithoutEfficacyInput, {nullable:false})
    @Type(() => TypesUpdateWithoutEfficacyInput)
    data!: TypesUpdateWithoutEfficacyInput;
}
