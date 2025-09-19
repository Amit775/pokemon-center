import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypeCreateInput } from "../../../inputs/TypeCreateInput";
import { TypeUpdateInput } from "../../../inputs/TypeUpdateInput";
import { TypeWhereUniqueInput } from "../../../inputs/TypeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneTypeArgs {
  @TypeGraphQL.Field(_type => TypeWhereUniqueInput, {
    nullable: false
  })
  where!: TypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypeCreateInput, {
    nullable: false
  })
  create!: TypeCreateInput;

  @TypeGraphQL.Field(_type => TypeUpdateInput, {
    nullable: false
  })
  update!: TypeUpdateInput;
}
