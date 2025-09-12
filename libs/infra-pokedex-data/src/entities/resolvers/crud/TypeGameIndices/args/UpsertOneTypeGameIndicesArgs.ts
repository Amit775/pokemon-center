import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypeGameIndicesCreateInput } from "../../../inputs/TypeGameIndicesCreateInput";
import { TypeGameIndicesUpdateInput } from "../../../inputs/TypeGameIndicesUpdateInput";
import { TypeGameIndicesWhereUniqueInput } from "../../../inputs/TypeGameIndicesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneTypeGameIndicesArgs {
  @TypeGraphQL.Field(_type => TypeGameIndicesWhereUniqueInput, {
    nullable: false
  })
  where!: TypeGameIndicesWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypeGameIndicesCreateInput, {
    nullable: false
  })
  create!: TypeGameIndicesCreateInput;

  @TypeGraphQL.Field(_type => TypeGameIndicesUpdateInput, {
    nullable: false
  })
  update!: TypeGameIndicesUpdateInput;
}
