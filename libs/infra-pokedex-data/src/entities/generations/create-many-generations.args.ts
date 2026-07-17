import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GenerationsCreateManyInput } from './generations-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyGenerationsArgs {

    @Field(() => [GenerationsCreateManyInput], {nullable:false})
    @Type(() => GenerationsCreateManyInput)
    data!: Array<GenerationsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
