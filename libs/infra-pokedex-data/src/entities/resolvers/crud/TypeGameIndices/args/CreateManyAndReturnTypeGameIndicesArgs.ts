import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypeGameIndicesCreateManyInput } from "../../../inputs/TypeGameIndicesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnTypeGameIndicesArgs {
  @TypeGraphQL.Field(_type => [TypeGameIndicesCreateManyInput], {
    nullable: false
  })
  data!: TypeGameIndicesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
