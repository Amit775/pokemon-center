import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GendersCreateManyInput } from './genders-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyGendersArgs {

    @Field(() => [GendersCreateManyInput], {nullable:false})
    @Type(() => GendersCreateManyInput)
    data!: Array<GendersCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
