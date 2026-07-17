import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VersionsCreateManyInput } from './versions-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyVersionsArgs {

    @Field(() => [VersionsCreateManyInput], {nullable:false})
    @Type(() => VersionsCreateManyInput)
    data!: Array<VersionsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
