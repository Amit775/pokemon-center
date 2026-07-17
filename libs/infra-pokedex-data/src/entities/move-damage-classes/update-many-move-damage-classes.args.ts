import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveDamageClassesUpdateManyMutationInput } from './move-damage-classes-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MoveDamageClassesWhereInput } from './move-damage-classes-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyMoveDamageClassesArgs {

    @Field(() => MoveDamageClassesUpdateManyMutationInput, {nullable:false})
    @Type(() => MoveDamageClassesUpdateManyMutationInput)
    data!: MoveDamageClassesUpdateManyMutationInput;

    @Field(() => MoveDamageClassesWhereInput, {nullable:true})
    @Type(() => MoveDamageClassesWhereInput)
    where?: MoveDamageClassesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
