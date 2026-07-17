import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypeEfficacyCreateManyDamageTypeInput } from './type-efficacy-create-many-damage-type.input';
import { Type } from 'class-transformer';

@InputType()
export class TypeEfficacyCreateManyDamageTypeInputEnvelope {

    @Field(() => [TypeEfficacyCreateManyDamageTypeInput], {nullable:false})
    @Type(() => TypeEfficacyCreateManyDamageTypeInput)
    data!: Array<TypeEfficacyCreateManyDamageTypeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
