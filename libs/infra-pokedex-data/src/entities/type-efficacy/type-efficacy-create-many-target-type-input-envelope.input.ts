import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypeEfficacyCreateManyTargetTypeInput } from './type-efficacy-create-many-target-type.input';
import { Type } from 'class-transformer';

@InputType()
export class TypeEfficacyCreateManyTargetTypeInputEnvelope {

    @Field(() => [TypeEfficacyCreateManyTargetTypeInput], {nullable:false})
    @Type(() => TypeEfficacyCreateManyTargetTypeInput)
    data!: Array<TypeEfficacyCreateManyTargetTypeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
