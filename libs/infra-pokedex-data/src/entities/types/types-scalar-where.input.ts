import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class TypesScalarWhereInput {

    @Field(() => [TypesScalarWhereInput], {nullable:true})
    AND?: Array<TypesScalarWhereInput>;

    @Field(() => [TypesScalarWhereInput], {nullable:true})
    OR?: Array<TypesScalarWhereInput>;

    @Field(() => [TypesScalarWhereInput], {nullable:true})
    NOT?: Array<TypesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: Identity<IntFilter>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: Identity<StringFilter>;

    @Field(() => IntFilter, {nullable:true})
    generation_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    damage_class_id?: Identity<IntFilter>;
}
